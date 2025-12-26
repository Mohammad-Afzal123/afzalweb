import React, { useRef, useEffect, useCallback, useState } from 'react';
import { gsap } from 'gsap';
import './intro.css';
import SplitText from "./SplitText";
/* ================= UTILS & CONSTANTS ================= */
const GLOW_COLOR = '59, 130, 246'; // Blue theme
const DEFAULT_PARTICLE_COUNT = 15;
const SPOTLIGHT_RADIUS = 350;
const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};
const createParticleElement = (x, y) => {
  const el = document.createElement('div');
  el.className = 'particle';
  el.style.cssText = `
    position: absolute; width: 4px; height: 4px; border-radius: 50%;
    background: rgba(${GLOW_COLOR}, 1); box-shadow: 0 0 6px rgba(${GLOW_COLOR}, 0.6);
    pointer-events: none; z-index: 100; left: ${x}px; top: ${y}px;
  `;
  return el;
};

/* ================= COMPONENTS ================= */

const GlobalSpotlight = ({ gridRef }) => {
  const spotlightRef = useRef(null);

  useEffect(() => {
    const spotlight = document.createElement('div');
    spotlight.className = 'global-spotlight';
    document.body.appendChild(spotlight);
    spotlightRef.current = spotlight;

    const handleMouseMove = (e) => {
      if (!gridRef.current) return;
      const cards = gridRef.current.querySelectorAll('.magic-card');
      
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        card.style.setProperty('--glow-x', `${x}%`);
        card.style.setProperty('--glow-y', `${y}%`);
        card.style.setProperty('--glow-intensity', '1');
      });

      gsap.to(spotlight, {
        left: e.clientX, top: e.clientY,
        duration: 0.1, ease: 'power2.out', opacity: 0.6
      });
    };

    const handleMouseLeave = () => {
      gsap.to(spotlight, { opacity: 0 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      spotlight.remove();
    };
  }, [gridRef]);

  return null;
};

const MagicCard = ({ children, className = '', tilt = true, magnetism = true }) => {
  const cardRef = useRef(null);
  const particlesRef = useRef([]);
  const isHovered = useRef(false);

  const clearParticles = useCallback(() => {
    particlesRef.current.forEach(p => {
      gsap.to(p, { scale: 0, opacity: 0, onComplete: () => p.remove() });
    });
    particlesRef.current = [];
  }, []);

  const spawnParticles = useCallback(() => {
    if (!cardRef.current || !isHovered.current) return;
    const { width, height } = cardRef.current.getBoundingClientRect();
    
    for (let i = 0; i < DEFAULT_PARTICLE_COUNT; i++) {
      const p = createParticleElement(Math.random() * width, Math.random() * height);
      cardRef.current.appendChild(p);
      particlesRef.current.push(p);

      gsap.fromTo(p, { scale: 0, opacity: 0 }, { 
        scale: 1, opacity: 1, duration: 0.5, delay: i * 0.05 
      });

      gsap.to(p, {
        x: "+=" + (Math.random() - 0.5) * 50,
        y: "+=" + (Math.random() - 0.5) * 50,
        duration: 2 + Math.random() * 2,
        repeat: -1, yoyo: true, ease: "sine.inOut"
      });
    }
  }, []);

  useEffect(() => {
    const el = cardRef.current;
    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      if (tilt) {
        gsap.to(el, {
          rotateX: ((y - centerY) / centerY) * -10,
          rotateY: ((x - centerX) / centerX) * 10,
          duration: 0.2, transformPerspective: 1000
        });
      }
      if (magnetism) {
        gsap.to(el, { x: (x - centerX) * 0.05, y: (y - centerY) * 0.05, duration: 0.3 });
      }
    };

    const handleEnter = () => { 
      isHovered.current = true; 
      spawnParticles(); 
    };
    const handleLeave = () => {
      isHovered.current = false;
      clearParticles();
      gsap.to(el, { rotateX: 0, rotateY: 0, x: 0, y: 0, duration: 0.5 });
    };

    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseenter', handleEnter);
    el.addEventListener('mouseleave', handleLeave);
    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseenter', handleEnter);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, [tilt, magnetism, spawnParticles, clearParticles]);

  return (
    <div ref={cardRef} className={`magic-card ${className}`}>
      <div className="card-inner-content">{children}</div>
    </div>
  );
};

export default function Intro() {
  const gridRef = useRef(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <section className="intro-section">
      <div className="custom-cursor" style={{ left: cursorPos.x, top: cursorPos.y }} />
      <GlobalSpotlight gridRef={gridRef} />

      <div className="intro-container" ref={gridRef}>
        {/* HEADER */}
        <MagicCard className="intro-header">
          <h1 className="intro-title">MOHAMMAD AFZAL KHAN</h1>
          <nav className="intro-nav">
  {/* The sliding background highlight */}
  <div className="nav-glow-backdrop" id="nav-glow"></div>
  
  {["PROJECTS", "ABOUT", "CONTACT"].map((item, index) => (
    <button 
      key={item} 
      className="nav-item"
      onMouseEnter={(e) => {
        const glow = document.getElementById('nav-glow');
        glow.style.width = `${e.target.offsetWidth}px`;
        glow.style.left = `${e.target.offsetLeft}px`;
        glow.style.opacity = '1';
      }}
      onMouseLeave={() => {
        const glow = document.getElementById('nav-glow');
        glow.style.opacity = '0';
      }}
    >
      <SplitText text={item} delay={30 + (index * 20)} immediate={true} />
      <span className="nav-dot"></span>
    </button>
  ))}
</nav>
        </MagicCard>

        {/* MAIN GRID */}
        <div className="intro-grid">
          <div className="intro-column">
            <MagicCard className="hero-card">
              <div className="floating-blob" />
              <h2 className="hero-title">
                <span className="text-line">CSE(Data Science)</span>
                <span className="text-line">VIT Chennai</span>
                <span className="text-line">AIML Developer</span>
              </h2>
              <p className="hero-description">Blending AI with modern architectural expression.</p>
            </MagicCard>

            <MagicCard className="about-card matched-height">
              <p className="about-text">
                An innovative AI developer blending cutting-edge technology with expressive design. 
                Focused on intelligence, form, and digital identity.
              </p>
            </MagicCard>
          </div>

          <div className="intro-column">
            <MagicCard className="portrait-card">
              <img src="https://i.pinimg.com/564x/c8/c8/f7/c8c8f7952323e42689d54593466a9430.jpg" alt="Portrait" className="portrait-image" />
            </MagicCard>

            <MagicCard className="contact-card matched-height highlight-blue">
              <p className="contact-label">Have some questions?</p>
              <h3 className="contact-title">Contact me ↗</h3>
            </MagicCard>
          </div>

          <MagicCard className="projects-card">
            <h3 className="projects-title">Selected Projects</h3>
            <ul className="projects-list">
              {["Elara ↗", "Verve ↗", "Zephyr ↗"].map(p => (
                <li key={p} className="project-item">{p}</li>
              ))}
            </ul>
          </MagicCard>
          
        </div>

        {/* SOCIAL BAR */}
        <MagicCard className="social-bar">
  <div className="social-links-container">
    {["LinkedIn", "GitHub", "Instagram"].map((s, index) => (
      <a 
        key={s} 
        href={`#${s}`} 
        className="social-link-item"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          gsap.to(e.currentTarget, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.3,
            ease: "power2.out"
          });
        }}
        onMouseLeave={(e) => {
          gsap.to(e.currentTarget, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
        }}
      >
        <div className="social-link-bg"></div>
        <span className="social-link-text">
          <SplitText text={s} delay={100 + (index * 50)} immediate={true} />
        </span>
        <div className="social-link-border"></div>
      </a>
    ))}
  </div>
</MagicCard>
      </div>
    </section>
  );
}