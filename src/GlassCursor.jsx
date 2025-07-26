import React, { useEffect, useRef, useState } from 'react';
import './GlassCursor.css';

export default function GlassCursor() {
  const cursorRef = useRef(null);
  const [hovering, setHovering] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;

        // Create flame-like particles
        const newParticle = {
          id: Date.now(),
          x: e.clientX,
          y: e.clientY,
        };
        setParticles((prev) => [...prev.slice(-10), newParticle]); // keep last 10
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  useEffect(() => {
    const flameCleanup = setInterval(() => {
      setParticles((prev) => prev.slice(1));
    }, 50);
    return () => clearInterval(flameCleanup);
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className={`neon-cursor ${hovering ? 'hovered' : ''}`}
      />
      {particles.map((p) => (
        <div
          key={p.id}
          className="flame-particle"
          style={{ left: p.x, top: p.y }}
        />
      ))}
    </>
  );
}
