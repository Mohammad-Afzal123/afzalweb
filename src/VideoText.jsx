'use client';

import React from 'react';

export function VideoText({
  src,
  children = 'Project',
  fontSize = 100,
  fontWeight = 'bold',
  fontFamily = 'Arial, sans-serif',
  className = '',
}) {
  const maskId = 'video-text-mask';

  // Fixed dimensions (not scaling with character count)
  const width = 1000;
  const height = 200;

  return (
    <div
      className={`relative overflow-hidden flex items-center justify-center ${className}`}
      style={{
        height: `${height}px`,
        backgroundColor: 'black',
        lineHeight: 0,
      }}
    >
      <svg
        className="absolute top-0 left-0"
        width="100%"
        height="100%"
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
      >
        <defs>
          <mask id={maskId}>
            <rect width="100%" height="100%" fill="black" />
            <text
              x="50%"
              y="50%"
              fill="white"
              fontSize={fontSize}
              fontWeight={fontWeight}
              fontFamily={fontFamily}
              textAnchor="middle"
              dominantBaseline="middle"
              textLength={200} // Fixed length, ensures consistent size
              lengthAdjust="spacingAndGlyphs"
            >
              {children}
            </text>
          </mask>
        </defs>

        <foreignObject
          x="0"
          y="0"
          width="100%"
          height="100%"
          mask={`url(#${maskId})`}
        >
          <video
            className="w-full h-full object-cover block"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={src} type="video/mp4" />
          </video>
        </foreignObject>
      </svg>
    </div>
  );
}
