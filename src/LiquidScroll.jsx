import React, { useEffect } from 'react';

export default function LiquidScroll() {
  useEffect(() => {
    const lightContent = document.getElementById('lightContent');
    const darkContent = document.getElementById('darkContent');
    const liquidFill = document.getElementById('liquidFill');
    const waves = document.querySelectorAll('.wave');
    const waveContainer = document.getElementById('waveContainer');

    function createParticles() {
      for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.width = particle.style.height = Math.random() * 4 + 2 + 'px';
        particle.style.animationDelay = Math.random() * 8 + 's';
        darkContent.appendChild(particle);
      }
    }

    function updateLiquidEffect() {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollProgress = Math.max(0, Math.min(1, scrollY / (maxScroll * 0.7)));

      const fillHeight = scrollProgress * 100;
      const waveAmplitude = 15 * (1 - scrollProgress * 0.5);
      const time = Date.now() * 0.002;

      let clipPath = 'polygon(0% 100%,';
      for (let i = 0; i <= 50; i++) {
        const x = (i / 50) * 100;
        const wave1 = Math.sin((x * 0.02) + time) * waveAmplitude;
        const wave2 = Math.sin((x * 0.03) + time * 1.3) * (waveAmplitude * 0.7);
        const wave3 = Math.sin((x * 0.05) + time * 0.8) * (waveAmplitude * 0.4);
        const yOffset = wave1 + wave2 + wave3;
        const y = Math.max(0, 100 - fillHeight + (yOffset * (fillHeight / 100)));
        clipPath += `${x}% ${y}%,`;
      }
      clipPath += '100% 100%)';

      liquidFill.style.height = (fillHeight + waveAmplitude) + 'vh';
      liquidFill.style.clipPath = clipPath;

      waves.forEach((wave, index) => {
        const waveOffset = (index * 15) + 10;
        const surfaceLevel = 100 - fillHeight;
        const waveY = Math.max(-20, surfaceLevel - waveOffset);
        wave.style.setProperty('--wave-y', waveY + 'vh');
        wave.style.transform = `translateY(${waveY}vh) translateX(-33%)`;
        wave.style.opacity = fillHeight > 5 ? 1 : 0;
      });

      if (scrollProgress < 0.8) {
        lightContent.style.opacity = 1;
        darkContent.style.opacity = 0;
      } else if (scrollProgress < 0.95) {
        const fadeOutProgress = (scrollProgress - 0.8) / 0.15;
        lightContent.style.opacity = Math.max(0, 1 - fadeOutProgress * 2);
        darkContent.style.opacity = 0;
      } else {
        const fadeInProgress = (scrollProgress - 0.95) / 0.05;
        lightContent.style.opacity = 0;
        darkContent.style.opacity = Math.min(1, fadeInProgress * 2);
      }

      waveContainer.style.display = scrollProgress > 0.02 ? 'block' : 'none';
    }

    function smoothScroll() {
      updateLiquidEffect();
      requestAnimationFrame(smoothScroll);
    }

    createParticles();
    updateLiquidEffect();
    smoothScroll();

    window.addEventListener('resize', updateLiquidEffect);
    return () => window.removeEventListener('resize', updateLiquidEffect);
  }, []);

  return (
    <>
      <style>{`
        .container {
          position: relative;
          width: 100%;
          height: 300vh;
          background: #000;
          overflow-x: hidden;
          font-family: sans-serif;
        }
        .content-light, .content-dark {
          position: fixed;
          top: 20%;
          width: 100%;
          text-align: center;
          padding: 2rem;
          z-index: 10;
          transition: opacity 0.5s ease;
        }
        .light-text {
          color: #fff;
          font-size: 2rem;
        }
        .dark-text {
          color: #0ff;
          font-size: 2rem;
        }
        .scroll-indicator {
          margin-top: 2rem;
          font-size: 1.2rem;
          opacity: 0.6;
        }
        .scroll-indicator-dark {
          color: #0ff;
        }
        .liquid-fill {
          position: fixed;
          width: 100%;
          bottom: 0;
          background: linear-gradient(135deg, #00f0ff, #0077ff);
          z-index: 5;
          transition: clip-path 0.2s ease;
        }
        .wave-container {
          position: fixed;
          width: 300%;
          left: -100%;
          bottom: 0;
          z-index: 6;
          display: none;
        }
        .wave {
          position: absolute;
          width: 100%;
          height: 100px;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 100%;
          filter: blur(20px);
          transition: transform 0.3s ease;
        }
        .particle {
          position: absolute;
          background: rgba(0, 255, 255, 0.3);
          border-radius: 50%;
          animation: float 10s linear infinite;
        }
        @keyframes float {
          0% { transform: translateY(0); }
          100% { transform: translateY(-200px); opacity: 0; }
        }
      `}</style>

      <div className="container">
        <div className="content-light" id="lightContent">
          <h1 className="light-text">Welcome to the Journey</h1>
          <p className="light-text">
            Scroll down to dive into the liquid depths where transformation awaits.
          </p>
          <div className="scroll-indicator">↓ Scroll to explore ↓</div>
        </div>

        <div className="content-dark" id="darkContent">
          <h1 className="dark-text">Depths Revealed</h1>
          <p className="dark-text">
            You have descended into the liquid realm where mysteries unfold.
          </p>
          <div className="scroll-indicator scroll-indicator-dark">↑ Surface above ↑</div>
        </div>

        <div className="liquid-fill" id="liquidFill"></div>

        <div className="wave-container" id="waveContainer">
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
      </div>
    </>
  );
}
