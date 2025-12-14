import React, { useState, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Spline from "@splinetool/react-spline";

import "./App.css";
import LogoLoader from "./LogoLoader";
import GlassCursor from "./GlassCursor";
import Intro from "./intro";
import Card from "./Card";
import ThreeScene from "./ThreeScene";
import MemoryCarousel from "./MemoryCarousel";

export default function App() {
  const [loading, setLoading] = useState(true);

  /* ================= LOADER ================= */
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  /* ================= SPLINE ================= */
  const onSplineLoad = (spline) => {
    spline.pauseGameControls();
  };

  /* ================= PARTICLES ================= */
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesOptions = {
    fullScreen: false,
    particles: {
      color: { value: "#ffffff" },
      links: {
        enable: true,
        opacity: 0.1,
        distance: 150,
        color: "#ffffff",
      },
      move: { enable: true, speed: 0.4 },
      number: { value: 40 },
      opacity: { value: 0.15 },
      shape: { type: "square" },
      size: { value: { min: 1, max: 3 } },
    },
  };

  /* ================= SCROLL WAVE ================= */
  const { scrollY } = useScroll();
  const waterY = useTransform(scrollY, [0, 500], ["calc(100% - 60px)", "0%"]);

  const cardsContent = [
    {
      id: 1,
      title: "Immersive 3D Worlds",
      description:
        "Explore interactive scenes built with Spline and Three.js.",
    },
    {
      id: 2,
      title: "Dynamic Animations",
      description:
        "Fluid motion design powered by Framer Motion and GSAP principles.",
    },
    {
      id: 3,
      title: "Liquid Scrolling",
      description:
        "Seamless scroll-based storytelling with depth and motion.",
    },
  ];

  if (loading) return <LogoLoader />;

  return (
    <div className="App">
      <GlassCursor />

      {/* ================= VISUAL PINNED LAYER ================= */}
      <div className="pin-container">
        <div className="spline-container">
          <Spline
            scene="https://prod.spline.design/x8pviGljQ1dRsMWf/scene.splinecode"
            onLoad={onSplineLoad}
          />

          <Particles
            id="tsparticles"
            init={particlesInit}
            options={particlesOptions}
            className="particles-layer"
          />

          <div className="wave-fill">
            <motion.div className="water" style={{ y: waterY }}>
              <span className="wave" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ================= CONTENT LAYER (NORMAL FLOW) ================= */}
      <main className="content-layer">
        {/* INTRO SECTION */}
        <Intro />

        {/* FEATURE CARDS */}
        <section className="cards-container">
          {cardsContent.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              description={card.description}
            />
          ))}
        </section>

        {/* BACKGROUND VIDEO */}
        <video className="hero-video" autoPlay loop muted playsInline>
          <source
            src="https://dl.dropboxusercontent.com/scl/fi/ecqld2ikghhnwm0xou04y/hero-bg-copy.mp4"
            type="video/mp4"
          />
        </video>

        {/* THREE.JS SECTION */}
        <section className="three-section">
          <ThreeScene />
          <hr className="separator" />
        </section>

        {/* MEMORY CAROUSEL */}
        <MemoryCarousel />
      </main>
    </div>
  );
}
