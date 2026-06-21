import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import imgBowl from '../../assets/process3D/assets-2d.png';
import imgStirrer from '../../assets/process3D/assets-2d-pengaduk.png';
import imgBowlMixed from '../../assets/process3D/assets-2d-fullmixed.png';

interface Step2SceneProps {
  visible: boolean;
  onComplete: () => void;
}

export default function Step2Scene({ visible, onComplete }: Step2SceneProps) {
  const { t } = useLanguage();
  const sceneRef = useRef<HTMLDivElement>(null);

  // Stirrer position state
  const [stirrerPos, setStirrerPos] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [progress, setProgress] = useState(0); // 0 to 100 %

  // Tracing position variables
  const lastPosRef = useRef<{ x: number; y: number } | null>(null);
  const completedRef = useRef(false);

  // Size states (responsive scaling for mobile)
  const [bowlWidth, setBowlWidth] = useState(720);
  const [stirrerWidth, setStirrerWidth] = useState(360);

  // Resize handler to scale down the bowl and stirrer on mobile viewports
  useEffect(() => {
    const handleResize = () => {
      const scene = sceneRef.current;
      if (!scene) return;
      const { width } = scene.getBoundingClientRect();

      if (width < 768) {
        const scaledBowl = Math.min(width * 0.85, 340); // 85% of screen width, max 340px
        setBowlWidth(scaledBowl);
        setStirrerWidth(scaledBowl * 0.5); // stirrer is 50% of the bowl size for mobile readability
      } else {
        setBowlWidth(720);
        setStirrerWidth(360);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [visible]);

  // Set initial position of stirrer inside the bowl
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    const { width, height } = scene.getBoundingClientRect();
    const bowlCx = width / 2;
    const bowlCy = height * 0.45;

    // Position stirrer initially inside the bowl area (on the right side)
    const startOffset = bowlWidth * 0.22;
    setStirrerPos({
      x: bowlCx + startOffset,
      y: bowlCy + startOffset
    });
  }, [bowlWidth]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    if (completedRef.current) return;
    setIsDragging(true);

    const scene = sceneRef.current;
    if (!scene) return;
    const rect = scene.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    lastPosRef.current = { x: mx, y: my };
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (completedRef.current) return;
    setIsDragging(true);

    const scene = sceneRef.current;
    if (!scene) return;
    const rect = scene.getBoundingClientRect();
    const touch = e.touches[0];
    const mx = touch.clientX - rect.left;
    const my = touch.clientY - rect.top;

    lastPosRef.current = { x: mx, y: my };
  };

  useEffect(() => {
    if (!isDragging || completedRef.current) return;

    const onMouseMove = (e: MouseEvent) => {
      const scene = sceneRef.current;
      if (!scene) return;
      const rect = scene.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;

      // Center coordinates of the bowl
      const bowlCx = rect.width / 2;
      const bowlCy = rect.height * 0.45;

      // Calculate distance from mouse to bowl center
      const dx = mx - bowlCx;
      const dy = my - bowlCy;
      const distToCenter = Math.sqrt(dx * dx + dy * dy);

      // Determine active bowl width and inner stirring zone radius
      const innerRadius = bowlWidth * 0.38; // 38% of bowl width is the inner mixing area

      let targetX = mx;
      let targetY = my;

      // Constrain stirrer position to stay inside the bowl rim
      if (distToCenter > innerRadius) {
        const angle = Math.atan2(dy, dx);
        targetX = bowlCx + Math.cos(angle) * innerRadius;
        targetY = bowlCy + Math.sin(angle) * innerRadius;
      }

      // Update stirrer position (strictly constrained inside the bowl)
      setStirrerPos({ x: targetX, y: targetY });

      // Increase progress based on actual stirrer movement inside the bowl
      if (lastPosRef.current !== null) {
        const sdx = targetX - lastPosRef.current.x;
        const sdy = targetY - lastPosRef.current.y;
        const distMoved = Math.sqrt(sdx * sdx + sdy * sdy);

        if (distMoved > 0.5) {
          setProgress(prev => {
            const next = Math.min(100, prev + distMoved * 0.05); // 0.05 factor for smooth speed
            const roundedNext = Math.round(next);
            if (roundedNext >= 100 && !completedRef.current) {
              completedRef.current = true;
              setIsDragging(false);
              setTimeout(() => {
                onComplete();
              }, 1000);
            }
            return roundedNext;
          });
        }
      }
      lastPosRef.current = { x: targetX, y: targetY };
    };

    const onTouchMove = (e: TouchEvent) => {
      // Prevent browser pull-to-refresh or scrolling during interaction
      e.preventDefault();

      const scene = sceneRef.current;
      if (!scene) return;
      const rect = scene.getBoundingClientRect();
      const touch = e.touches[0];
      const mx = touch.clientX - rect.left;
      const my = touch.clientY - rect.top;

      const bowlCx = rect.width / 2;
      const bowlCy = rect.height * 0.45;

      const dx = mx - bowlCx;
      const dy = my - bowlCy;
      const distToCenter = Math.sqrt(dx * dx + dy * dy);

      const innerRadius = bowlWidth * 0.38;

      let targetX = mx;
      let targetY = my;

      if (distToCenter > innerRadius) {
        const angle = Math.atan2(dy, dx);
        targetX = bowlCx + Math.cos(angle) * innerRadius;
        targetY = bowlCy + Math.sin(angle) * innerRadius;
      }

      setStirrerPos({ x: targetX, y: targetY });

      if (lastPosRef.current !== null) {
        const sdx = targetX - lastPosRef.current.x;
        const sdy = targetY - lastPosRef.current.y;
        const distMoved = Math.sqrt(sdx * sdx + sdy * sdy);

        if (distMoved > 0.5) {
          setProgress(prev => {
            const next = Math.min(100, prev + distMoved * 0.05);
            const roundedNext = Math.round(next);
            if (roundedNext >= 100 && !completedRef.current) {
              completedRef.current = true;
              setIsDragging(false);
              setTimeout(() => {
                onComplete();
              }, 1000);
            }
            return roundedNext;
          });
        }
      }
      lastPosRef.current = { x: targetX, y: targetY };
    };

    const onMouseUp = () => {
      setIsDragging(false);
      lastPosRef.current = null;
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('touchend', onMouseUp);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onMouseUp);
    };
  }, [isDragging, onComplete, bowlWidth, progress]);

  return (
    <div
      ref={sceneRef}
      className="bb-dorama-scene"
      style={{
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
        cursor: isDragging ? 'grabbing' : 'crosshair',
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        touchAction: 'none'
      }}
    >
      {/* Panci Awal (Sebelum teraduk penuh) */}
      <img
        src={imgBowl}
        alt="mixing container raw"
        style={{
          position: 'absolute',
          top: '45%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: `${bowlWidth}px`,
          maxWidth: 'none',
          zIndex: 3,
          pointerEvents: 'none',
          userSelect: 'none',
          filter: 'drop-shadow(0 14px 28px rgba(0,0,0,0.20))',
          opacity: progress >= 80 ? 0 : 1,
          transition: 'opacity 0.6s ease-in-out',
        }}
      />

      {/* Panci Kedua (Setelah teraduk penuh/fullmixed) */}
      <img
        src={imgBowlMixed}
        alt="mixing container mixed"
        style={{
          position: 'absolute',
          top: '45%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: `${bowlWidth}px`,
          maxWidth: 'none',
          zIndex: 4,
          pointerEvents: 'none',
          userSelect: 'none',
          filter: 'drop-shadow(0 14px 28px rgba(0,0,0,0.20))',
          opacity: progress >= 80 ? 1 : 0,
          transition: 'opacity 0.6s ease-in-out',
        }}
      />

      {/* Stirrer (assets-2d-pengaduk.png) — draggable */}
      <div
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        style={{
          position: 'absolute',
          left: `${stirrerPos.x}px`,
          top: `${stirrerPos.y}px`,
          transform: `translate(-50%, -50%) ${isDragging ? 'rotate(-10deg) scale(1.05)' : 'rotate(0deg)'}`,
          zIndex: 5,
          cursor: isDragging ? 'grabbing' : 'grab',
          pointerEvents: 'auto',
          transition: isDragging ? 'transform 0.1s ease-out' : 'transform 0.3s ease-out',
        }}
      >
        <img
          src={imgStirrer}
          alt="stirrer tool"
          style={{
            width: `${stirrerWidth}px`,
            pointerEvents: 'none',
            userSelect: 'none',
            filter: isDragging
              ? 'drop-shadow(0 20px 30px rgba(0,0,0,0.30))'
              : 'drop-shadow(0 8px 16px rgba(0,0,0,0.15))',
            transition: 'filter 0.3s ease'
          }}
          draggable={false}
        />
      </div>

      {/* Instructional text & Progress overlay */}
      <div
        style={{
          position: 'absolute',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          zIndex: 10,
          background: 'rgba(20, 33, 51, 0.85)',
          padding: '12px 24px',
          color: 'white',
          fontFamily: 'var(--font-condensed)',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          fontSize: '13px',
          pointerEvents: 'none',
          border: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        {progress >= 100 ? (
          <span style={{ color: '#3DB97A', fontWeight: 700 }}>
            {t('Done!', 'Selesai!')}
          </span>
        ) : isDragging ? (
          <span>
            {t(`Mixing... ${Math.round(progress)}%`, `Mengaduk... ${Math.round(progress)}%`)}
          </span>
        ) : (
          <span>
            {t('Drag stirrer and stir inside the bowl', 'Tarik pengaduk dan putar-putar di dalam wadah')}
          </span>
        )}
      </div>
    </div>
  );
}
