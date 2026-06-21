import { useState, useEffect, useRef } from 'react';
import videoStep3 from '../../assets/process3D/assets-step3.webm';

interface Step3SceneProps {
  visible: boolean;
}

// Custom ChromaKeyVideo component to dynamically strip the white background
function ChromaKeyVideo({ src, className, style }: { src: string; className?: string; style?: React.CSSProperties }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    let animationId: number;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const render = () => {
      if (video.readyState >= 2) {
        if (canvas.width !== video.videoWidth) {
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
        }
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imgData.data;

        // Chroma key white background (R, G, B > 250 to protect white sleeve shading)
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          
          if (r > 250 && g > 250 && b > 250) {
            data[i + 3] = 0; // Set alpha to transparent
          }
        }
        ctx.putImageData(imgData, 0, 0);
      }
      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [src]);

  return (
    <>
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        style={{ display: 'none' }}
      />
      <canvas
        ref={canvasRef}
        className={className}
        style={style}
      />
    </>
  );
}

export default function Step3Scene({ visible }: Step3SceneProps) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        setAnimate(true);
      }, 150);
      return () => clearTimeout(timer);
    } else {
      setAnimate(false);
    }
  }, [visible]);

  return (
    <div
      className="bb-dorama-scene"
      style={{
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        background: '#EDE8E1', // matches cream background
      }}
    >
      {/* Step 3 Video Overlay with Real-time Chroma Key (Transparent White Background) */}
      <ChromaKeyVideo
        src={videoStep3}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          // Shifted right to translate(-38%) so the hand sleeve touches the right edge of the container
          transform: animate 
            ? 'translate(-38%, -54%) scale(1.0)' 
            : 'translate(60%, -50%) scale(0.85)',
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          zIndex: 1,
          pointerEvents: 'none',
          userSelect: 'none',
          opacity: animate ? 1 : 0,
          filter: animate 
            ? 'blur(0px)' 
            : 'blur(20px)',
          transition: 'opacity 1.6s cubic-bezier(0.16, 1, 0.3, 1), transform 1.6s cubic-bezier(0.16, 1, 0.3, 1), filter 1.6s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />
    </div>
  );
}
