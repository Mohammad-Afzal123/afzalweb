import React, { useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import { motion } from "framer-motion";
import { gsap } from "gsap";

/* ================= CHARACTER COMPONENT ================= */
const Character = ({ animationName }) => {
  const group = useRef();
  const { scene, animations } = useGLTF("/models/character.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (!actions || !animationName) return;
    Object.values(actions).forEach((action) => action.stop());
    actions[animationName]?.reset().fadeIn(0.4).play();
  }, [animationName, actions]);

  return <primitive ref={group} object={scene} scale={1.8} position={[0, -1.4, 0]} />;
};

/* ================= MAIN SCENE ================= */
export default function ThreeScene() {
  const [animation, setAnimation] = useState("Idle");
  const cardRef = useRef(null);
  const gridRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const grid = gridRef.current;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // 1. Extreme 3D Tilt
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -12;
      const rotateY = ((x - centerX) / centerX) * 12;

      gsap.to(card, {
        rotateX,
        rotateY,
        duration: 0.6,
        ease: "power2.out",
        transformPerspective: 1200,
      });

      // 2. Futuristic Grid Warp Effect
      gsap.to(grid, {
        x: (x - centerX) * 0.15,
        y: (y - centerY) * 0.15,
        skewX: (x - centerX) * 0.02,
        duration: 0.8,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, { rotateX: 0, rotateY: 0, duration: 1.2, ease: "elastic.out(1, 0.4)" });
      gsap.to(grid, { x: 0, y: 0, skewX: 0, duration: 1 });
      setAnimation("Idle");
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="next-gen-wrapper">
      <style>{`
        .next-gen-wrapper {
          display: flex;
          width: 100%;
          height: 100vh;
          background: transparent; /* Background made transparent as requested */
          font-family: 'Space Grotesk', sans-serif;
          color: white;
          overflow: hidden;
          padding: 3rem;
          gap: 3rem;
          align-items: center;
        }

        /* 1. COMPACT CANVAS AREA */
        .canvas-side {
          flex: 0.7; /* Reduced size */
          height: 70vh;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 30px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          position: relative;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }

        /* 2. WIDER FUTURISTIC CARD */
        .ui-side {
          flex: 1.5; /* Wider card */
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 2000px;
        }

        .cyber-card {
          position: relative;
          width: 100%;
          height: 550px;
          background: rgba(2, 6, 23, 0.7);
          backdrop-filter: blur(30px);
          border-radius: 40px;
          padding: 5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          border: 1px solid rgba(59, 130, 246, 0.3);
          overflow: hidden;
          box-shadow: 0 0 40px rgba(59, 130, 246, 0.1);
        }

        /* NEXT LEVEL: Background Warp Grid */
        .grid-bg {
          position: absolute;
          inset: -20%;
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
          z-index: 0;
          pointer-events: none;
          mask-image: radial-gradient(circle at center, black, transparent 80%);
        }

        /* Scanline Effect */
        .cyber-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            transparent 50%,
            rgba(59, 130, 246, 0.05) 51%,
            transparent 52%
          );
          background-size: 100% 4px;
          pointer-events: none;
          z-index: 2;
        }

        /* Glitch Beam */
        .beam {
          position: absolute;
          width: 150px;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.2), transparent);
          top: 0;
          left: -150px;
          transform: skewX(-25deg);
          animation: beamSweep 6s infinite;
        }

        @keyframes beamSweep {
          0% { left: -150px; }
          30% { left: 120%; }
          100% { left: 120%; }
        }

        .glitch-text {
          font-size: 3.5rem;
          font-weight: 900;
          letter-spacing: -2px;
          margin-bottom: 1.5rem;
          background: linear-gradient(to right, #fff, #60a5fa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          position: relative;
          z-index: 5;
        }

        .cyber-card:hover .glitch-text {
          animation: textGlitch 0.2s infinite;
        }

        @keyframes textGlitch {
          0% { transform: translate(0); }
          25% { transform: translate(2px, -2px); text-shadow: -2px 0 red; }
          50% { transform: translate(-2px, 2px); text-shadow: 2px 0 blue; }
          100% { transform: translate(0); }
        }

        .data-desc {
          font-size: 1.2rem;
          color: #94a3b8;
          max-width: 80%;
          line-height: 1.8;
          z-index: 5;
        }

        .kinetic-status {
          margin-top: 3rem;
          display: flex;
          align-items: center;
          gap: 15px;
          z-index: 5;
        }

        .pulse-ring {
          width: 12px;
          height: 12px;
          background: #3b82f6;
          border-radius: 50%;
          position: relative;
        }

        .pulse-ring::before {
          content: "";
          position: absolute;
          inset: -4px;
          border: 2px solid #3b82f6;
          border-radius: 50%;
          animation: ripple 1.5s infinite;
        }

        @keyframes ripple {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(3); opacity: 0; }
        }

        @media (max-width: 1100px) {
          .next-gen-wrapper { flex-direction: column; padding: 1rem; }
          .canvas-side { width: 100%; height: 40vh; flex: none; }
          .ui-side { width: 100%; flex: none; }
          .cyber-card { padding: 2rem; height: auto; }
        }
      `}</style>

      {/* COMPACT 3D VIEW */}
      <div className="canvas-side">
        <Canvas camera={{ position: [0, 2, 7], fov: 40 }}>
          <ambientLight intensity={0.8} />
          <pointLight position={[5, 5, 5]} intensity={1.5} color="#3b82f6" />
          <Character animationName={animation} />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>

      {/* WIDER HIGH-TECH CARD */}
      <div className="ui-side">
        <div 
          ref={cardRef} 
          className="cyber-card"
          onMouseEnter={() => setAnimation("Armature|mixamo.com|Layer0")}
        >
          {/* BACKGROUND EFFECTS */}
          <div ref={gridRef} className="grid-bg" />
          <div className="beam" />
          
          {/* CONTENT */}
          <motion.h1 
            className="glitch-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            KINETIC_FLOW
          </motion.h1>

          <motion.p 
            className="data-desc"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Initializing high-fidelity locomotion sequences. Our AIML framework interprets 
            spatial geometry to render procedural movement. Interact with this node to 
            synchronize the biometric entity with the neural gait engine. 
            Phase: <b>Simulation_Active</b>.
          </motion.p>

          <div className="kinetic-status">
            <div className="pulse-ring" />
            <span style={{ letterSpacing: '2px', fontSize: '0.9rem', fontWeight: 'bold', color: animation === 'Idle' ? '#64748b' : '#3b82f6' }}>
              {animation === "Idle" ? "MODE: IDLE_STANDBY" : "MODE: KINETIC_SYNC"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}