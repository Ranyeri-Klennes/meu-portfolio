import React, { useState, useRef, useEffect } from 'react';
import { ALL_COLLAGE } from '../constants/portfolio';

type CollageItemProps = {
  src: string;
  type: 'image' | 'video';
  rotation: string;
  top: string;
  left: string;
  width: string;
  dimmed: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
};

const CollageItem = ({ src, type, rotation, top, left, width, dimmed, onHoverStart, onHoverEnd }: CollageItemProps) => {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleEnter = () => { 
    setHovered(true); 
    onHoverStart(); 
    videoRef.current?.play(); 
  };
  
  const handleLeave = () => {
    setHovered(false); 
    onHoverEnd();
    if (videoRef.current) { 
      videoRef.current.pause(); 
      videoRef.current.currentTime = 0; 
    }
  };

  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        top, left, width,
        transform: hovered
          ? `rotate(${rotation}) scale(2.5)`
          : `rotate(${rotation}) scale(1)`,
        zIndex: hovered ? 9999 : dimmed ? 0 : 1,
        opacity: dimmed ? 0.15 : 1,
        transition:
          'top 2.2s cubic-bezier(0.2, 0.8, 0.2, 1), left 2.2s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.6s ease, box-shadow 0.6s ease',
      }}
      className={`absolute bg-white dark:bg-zinc-100 cursor-pointer rounded-sm ${
        hovered ? 'shadow-[0_45px_120px_rgba(0,0,0,0.6)] ring-1 ring-white/20' : 'shadow-[0_5px_20px_rgba(0,0,0,0.22)]'
      }`}
    >
      <div className="overflow-hidden" style={{ padding: '3px 3px 0 3px' }}>
        {type === 'video' ? (
          <video ref={videoRef} src={src} muted loop playsInline className="block w-full aspect-[4/3] object-cover" />
        ) : (
          <img src={src} alt="" className="block w-full aspect-[4/3] object-cover" loading="lazy" />
        )}
      </div>
      <div style={{ height: '14px' }} />
    </div>
  );
};

function genAllPositions() {
  const indices = Array.from({ length: 16 }, (_, i) => i);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }

  return ALL_COLLAGE.map((_, idx) => {
    const slot = indices[idx];
    const row = Math.floor(slot / 4);
    const col = slot % 4;

    const rowHeight = 52 / 4;
    const colWidth  = 68 / 4;

    const baseTop  = 20 + row * rowHeight;
    const baseLeft = 5  + col * colWidth;

    const jitterTop  = (Math.random() - 0.5) * 8;
    const jitterLeft = (Math.random() - 0.5) * 8;

    return {
      top:      `${Math.max(15, Math.min(72, baseTop + jitterTop))}%`,
      left:     `${Math.max(2,  Math.min(73, baseLeft + jitterLeft))}%`,
      rotation: `${((Math.random() - 0.5) * 32).toFixed(1)}deg`,
    };
  });
}

export const StoryCollage = () => {
  const [positions, setPositions] = useState(() => genAllPositions());
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (!pausedRef.current) setPositions(genAllPositions());
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {ALL_COLLAGE.map((item, i) => (
        <CollageItem
          key={i}
          src={item.src}
          type={item.type}
          rotation={positions[i]?.rotation ?? '0deg'}
          top={positions[i]?.top ?? '0%'}
          left={positions[i]?.left ?? '0%'}
          width="27%"
          dimmed={hoveredIdx !== null && hoveredIdx !== i}
          onHoverStart={() => { pausedRef.current = true; setHoveredIdx(i); }}
          onHoverEnd={() => { pausedRef.current = false; setHoveredIdx(null); }}
        />
      ))}
    </>
  );
};
