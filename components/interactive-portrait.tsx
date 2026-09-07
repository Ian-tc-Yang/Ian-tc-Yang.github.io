'use client';

import Image from 'next/image';
import { useRef } from 'react';

export function InteractivePortrait() {
  const frameRef = useRef<HTMLDivElement>(null);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const frame = frameRef.current;
    if (!frame) return;

    const bounds = frame.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    frame.style.setProperty('--portrait-shadow-x', `${18 + (x - 0.5) * 8}px`);
    frame.style.setProperty('--portrait-shadow-y', `${18 + (y - 0.5) * 8}px`);
  }

  function resetPortrait() {
    const frame = frameRef.current;
    if (!frame) return;
    frame.style.setProperty('--portrait-shadow-x', '18px');
    frame.style.setProperty('--portrait-shadow-y', '18px');
  }

  return (
    <div className="portrait-interactive-shell" aria-label="Portrait of Ian Yang">
      <span className="portrait-orbit" aria-hidden="true" />
      <div
        className="portrait-container"
        ref={frameRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={resetPortrait}
      >
        <Image src="/ian-yang.png" alt="Ian Yang" fill priority sizes="(max-width: 760px) 88vw, 36vw" />
      </div>
    </div>
  );
}
