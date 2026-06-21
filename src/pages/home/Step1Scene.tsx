import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { removeWhiteBackground } from '../../utils/imageProcessor';

import imgTable45 from '../../assets/process3D/table-perspective.png';
import imgLog45Raw from '../../assets/process3D/step1-log.png';
import imgBasket45Raw from '../../assets/process3D/step1-basket.png';

import imgTableTopdown from '../../assets/process3D/topdown-table.png';
import imgLogTopdownRaw from '../../assets/process3D/topdown-log.png';
import imgSawTopdownRaw from '../../assets/process3D/topdown-saw.png';

interface Step1SceneProps {
  onComplete: () => void;
  visible: boolean;
}

type Phase = 'loading' | 'topdown' | 'transition' | '45deg' | 'completed';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  size: number;
  color: string;
  angle: number;
  vAngle: number;
  isLanded?: boolean;
}

export default function Step1Scene({ onComplete, visible }: Step1SceneProps) {
  const { t } = useLanguage();
  const [phase, setPhase] = useState<Phase>('loading');
  const [assets, setAssets] = useState<{ tdLog: string; tdSaw: string; log45: string; basket45: string } | null>(null);
  
  // Refs
  const containerRef = useRef<HTMLDivElement>(null);
  const sawRef = useRef<HTMLImageElement>(null);
  const topdownCanvasRef = useRef<HTMLCanvasElement>(null);
  const canvas45Ref = useRef<HTMLCanvasElement>(null);
  const topdownParticles = useRef<Particle[]>([]);
  const particles45 = useRef<Particle[]>([]);
  const rAF = useRef<number>();
  
  // Sawing state
  const sawingState = useRef({
    isSawing: false,
    lastX: 0,
    lastY: 0,
    spawnCount: 0
  });

  const TARGET_SAWDUST = 250;

  useEffect(() => {
    // Process images
    Promise.all([
      removeWhiteBackground(imgLogTopdownRaw, 235),
      removeWhiteBackground(imgSawTopdownRaw, 235),
      removeWhiteBackground(imgLog45Raw, 235),
      removeWhiteBackground(imgBasket45Raw, 235)
    ]).then(([tdLog, tdSaw, log45, basket45]) => {
      setAssets({ tdLog, tdSaw, log45, basket45 });
      setPhase('topdown');
    });
  }, []);

  // Shared Animation Loop
  useEffect(() => {
    if (phase === 'loading') return;

    const render = () => {
      // ── TOPDOWN CANVAS ──
      if (phase === 'topdown' || phase === 'transition') {
        const ctx = topdownCanvasRef.current?.getContext('2d');
        if (ctx && topdownCanvasRef.current) {
          ctx.clearRect(0, 0, topdownCanvasRef.current.width, topdownCanvasRef.current.height);
          topdownParticles.current.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.vx *= 0.9;
            p.vy *= 0.9;
            p.angle += p.vAngle;

            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.angle);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
            ctx.restore();
          });
        }
      }

      // ── 45 DEG CANVAS ──
      if (phase === '45deg' || phase === 'transition') {
        const ctx = canvas45Ref.current?.getContext('2d');
        if (ctx && canvas45Ref.current) {
          const w = canvas45Ref.current.width;
          const h = canvas45Ref.current.height;
          ctx.clearRect(0, 0, w, h);
          
          const basketX = w * 0.8;
          const basketY = h * 0.85;
          let activeCount = 0;

          particles45.current.forEach((p) => {
            if (p.life <= 0) return;
            activeCount++;

            // Attraction to basket if 'isLanded' is false (swept up)
            if (!p.isLanded) {
              const dx = basketX - p.x;
              const dy = basketY - p.y;
              const dist = Math.sqrt(dx * dx + dy * dy);
              if (dist < 40) {
                p.life = 0; // collected
              } else {
                p.vx += (dx / dist) * 1.5;
                p.vy += (dy / dist) * 1.5;
                p.x += p.vx;
                p.y += p.vy;
                p.vx *= 0.85;
                p.vy *= 0.85;
              }
            }

            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.angle);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = p.life;
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
            ctx.restore();
          });

          if (phase === '45deg' && activeCount === 0 && particles45.current.length > 0) {
            setPhase('completed');
          }
        }
      }

      rAF.current = requestAnimationFrame(render);
    };

    rAF.current = requestAnimationFrame(render);
    return () => {
      if (rAF.current) cancelAnimationFrame(rAF.current);
    };
  }, [phase]);

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      if (topdownCanvasRef.current) {
        topdownCanvasRef.current.width = topdownCanvasRef.current.offsetWidth;
        topdownCanvasRef.current.height = topdownCanvasRef.current.offsetHeight;
      }
      if (canvas45Ref.current) {
        canvas45Ref.current.width = canvas45Ref.current.offsetWidth;
        canvas45Ref.current.height = canvas45Ref.current.offsetHeight;
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [phase]);

  // Init Phase 2 particles when transitioning
  useEffect(() => {
    if (phase === 'transition' && canvas45Ref.current) {
      const w = canvas45Ref.current.offsetWidth;
      const h = canvas45Ref.current.offsetHeight;
      // Scatter particles around log area
      const newParticles: Particle[] = [];
      const colors = ['#C49A6C', '#D5AF82', '#A67C4D', '#E5C29D'];
      for (let i = 0; i < TARGET_SAWDUST; i++) {
        newParticles.push({
          x: w * 0.3 + Math.random() * (w * 0.4),
          y: h * 0.4 + Math.random() * (h * 0.25),
          vx: 0,
          vy: 0,
          life: 1,
          size: 3 + Math.random() * 4,
          color: colors[Math.floor(Math.random() * colors.length)],
          angle: Math.random() * Math.PI * 2,
          vAngle: 0,
          isLanded: true // wait for sweep
        });
      }
      particles45.current = newParticles;

      setTimeout(() => {
        setPhase('45deg');
      }, 1200);
    }
  }, [phase]);

  // Completion
  useEffect(() => {
    if (phase === 'completed') {
      onComplete();
    }
  }, [phase, onComplete]);

  // ── MOUSE EVENTS ──
  const handleTopdownMouseMove = (e: React.MouseEvent) => {
    if (phase !== 'topdown') return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect || !sawRef.current) return;

    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    // Move saw
    sawRef.current.style.left = `${mx}px`;
    sawRef.current.style.top = `${my}px`;

    // Sawing mechanic
    if (sawingState.current.isSawing) {
      const dx = mx - sawingState.current.lastX;
      const dy = my - sawingState.current.lastY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 5) { // min movement to spawn
        sawingState.current.lastX = mx;
        sawingState.current.lastY = my;
        
        // Spawn particles
        const colors = ['#C49A6C', '#D5AF82', '#A67C4D', '#E5C29D'];
        const spawnAmount = Math.floor(dist / 4);
        for(let i=0; i<spawnAmount; i++) {
          topdownParticles.current.push({
            x: mx + (Math.random() - 0.5) * 40,
            y: my + (Math.random() - 0.5) * 40,
            vx: (Math.random() - 0.5) * 4,
            vy: (Math.random() - 0.5) * 4,
            life: 1,
            size: 3 + Math.random() * 5,
            color: colors[Math.floor(Math.random() * colors.length)],
            angle: Math.random() * Math.PI * 2,
            vAngle: (Math.random() - 0.5) * 0.5,
          });
          sawingState.current.spawnCount++;
        }

        if (sawingState.current.spawnCount >= TARGET_SAWDUST) {
          setPhase('transition');
          sawingState.current.isSawing = false;
        }
      }
    }
  };

  const handleSweepMouseMove = (e: React.MouseEvent) => {
    if (phase !== '45deg') return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    
    // If user holds mouse down, sweep!
    if (e.buttons === 1) {
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;

      particles45.current.forEach(p => {
        if (!p.isLanded) return;
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 60) {
          // Kick particle up so it gets sucked into basket
          p.isLanded = false;
          p.vx = (dx / dist) * 15;
          p.vy = (dy / dist) * 15 - 5; // pop up
        }
      });
    }
  };

  // ── NATIVE TOUCH EVENTS FOR VIEWPORT LOCK ──
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !visible) return;

    const handleTouchStartNative = (e: TouchEvent) => {
      if (phase === 'completed') return;
      if (phase === 'topdown') {
        sawingState.current.isSawing = true;
        const touch = e.touches[0];
        const rect = container.getBoundingClientRect();
        sawingState.current.lastX = touch.clientX - rect.left;
        sawingState.current.lastY = touch.clientY - rect.top;
      }
    };

    const handleTouchMoveNative = (e: TouchEvent) => {
      if (phase === 'completed') return;
      // Strictly prevent browser scrolling while drawing/sweeping
      e.preventDefault();

      const touch = e.touches[0];
      const rect = container.getBoundingClientRect();
      const mx = touch.clientX - rect.left;
      const my = touch.clientY - rect.top;

      if (phase === 'topdown') {
        if (!sawRef.current) return;
        sawRef.current.style.left = `${mx}px`;
        sawRef.current.style.top = `${my}px`;

        if (sawingState.current.isSawing) {
          const dx = mx - sawingState.current.lastX;
          const dy = my - sawingState.current.lastY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist > 5) {
            sawingState.current.lastX = mx;
            sawingState.current.lastY = my;
            
            const colors = ['#C49A6C', '#D5AF82', '#A67C4D', '#E5C29D'];
            const spawnAmount = Math.floor(dist / 4);
            for(let i=0; i<spawnAmount; i++) {
              topdownParticles.current.push({
                x: mx + (Math.random() - 0.5) * 40,
                y: my + (Math.random() - 0.5) * 40,
                vx: (Math.random() - 0.5) * 4,
                vy: (Math.random() - 0.5) * 4,
                life: 1,
                size: 3 + Math.random() * 5,
                color: colors[Math.floor(Math.random() * colors.length)],
                angle: Math.random() * Math.PI * 2,
                vAngle: (Math.random() - 0.5) * 0.5,
              });
              sawingState.current.spawnCount++;
            }

            if (sawingState.current.spawnCount >= TARGET_SAWDUST) {
              setPhase('transition');
              sawingState.current.isSawing = false;
            }
          }
        }
      } else if (phase === '45deg') {
        particles45.current.forEach(p => {
          if (!p.isLanded) return;
          const dx = p.x - mx;
          const dy = p.y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 60) {
            p.isLanded = false;
            p.vx = (dx / dist) * 15;
            p.vy = (dy / dist) * 15 - 5;
          }
        });
      }
    };

    const handleTouchEndNative = () => {
      if (phase === 'topdown') sawingState.current.isSawing = false;
    };

    container.addEventListener('touchstart', handleTouchStartNative);
    container.addEventListener('touchmove', handleTouchMoveNative, { passive: false });
    container.addEventListener('touchend', handleTouchEndNative);
    container.addEventListener('touchcancel', handleTouchEndNative);

    return () => {
      container.removeEventListener('touchstart', handleTouchStartNative);
      container.removeEventListener('touchmove', handleTouchMoveNative);
      container.removeEventListener('touchend', handleTouchEndNative);
      container.removeEventListener('touchcancel', handleTouchEndNative);
    };
  }, [phase, visible]);

  if (!visible) return null;

  return (
    <div 
      ref={containerRef}
      className="bb-step1-complex-container"
      style={{ touchAction: 'none' }}
      onMouseMove={phase === 'topdown' ? handleTopdownMouseMove : handleSweepMouseMove}
      onMouseDown={(e) => {
        if (phase === 'topdown') {
          sawingState.current.isSawing = true;
          sawingState.current.lastX = e.clientX - (containerRef.current?.getBoundingClientRect().left || 0);
          sawingState.current.lastY = e.clientY - (containerRef.current?.getBoundingClientRect().top || 0);
        }
      }}
      onMouseUp={() => {
        if (phase === 'topdown') sawingState.current.isSawing = false;
      }}
      onMouseLeave={() => {
        if (phase === 'topdown') sawingState.current.isSawing = false;
      }}
    >
      {/* ── PHASE 1: TOP DOWN ── */}
      {(phase === 'topdown' || phase === 'transition' || phase === 'loading') && (
        <div className={`bb-step1-layer topdown ${phase === 'transition' ? 'zoom-out' : ''}`}>
          {assets ? (
            <>
              <img src={imgTableTopdown} className="bb-step1-td-table" alt="table top down" />
              <img src={assets.tdLog} className="bb-step1-td-log" alt="log top down" />
              <canvas ref={topdownCanvasRef} className="bb-step1-td-canvas" />
              {phase === 'topdown' && (
                <img 
                  ref={sawRef} 
                  src={assets.tdSaw} 
                  className="bb-step1-td-saw" 
                  alt="saw top down" 
                  style={{ pointerEvents: 'none' }}
                />
              )}
              {phase === 'topdown' && topdownParticles.current.length < 10 && (
                <div className="bb-step1-hint">
                  {t('Drag freely to saw the wood', 'Tarik bebas untuk menggergaji kayu')}
                </div>
              )}
            </>
          ) : (
            <div className="bb-step1-loading">{t('Loading interactive scene...', 'Memuat adegan interaktif...')}</div>
          )}
        </div>
      )}

      {/* ── PHASE 2: 45 DEG ── */}
      {(phase === 'transition' || phase === '45deg' || phase === 'completed') && assets && (
        <div className={`bb-step1-layer deg45 ${phase === 'transition' ? 'fade-in' : 'active'}`}>
          <img src={imgTable45} className="bb-step1-45-table" alt="table 45 deg" />
          <img src={assets.log45} className="bb-step1-45-log" alt="log 45 deg" />
          <img src={assets.basket45} className="bb-step1-45-basket" alt="basket 45 deg" />
          
          <canvas ref={canvas45Ref} className="bb-step1-45-canvas" />
          
          {phase === '45deg' && (
            <div className="bb-step1-hint">
              {t('Click & drag to sweep sawdust into basket', 'Klik & tahan untuk menyapu serbuk kayu ke keranjang')}
            </div>
          )}
        </div>
      )}

      {phase === 'completed' && (
        <div className="bb-step1-completed-overlay">
          <h2>{t('Collected!', 'Terkumpul!')}</h2>
        </div>
      )}
    </div>
  );
}
