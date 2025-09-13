import React, { useState, useEffect } from 'react';
import LogoLoader from './LogoLoader';
import ThreeScene from './ThreeScene';
import './App.css';
import MemoryCarousel from './MemoryCarousel';
import Card from './Card';
import GlassCursor from './GlassCursor';
import { VideoText } from './VideoText';
import Spline from '@splinetool/react-spline';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const { scrollY } = useScroll();

  // Map the scroll position (0px to 500px) to the water's vertical position.
  // It starts with just the 60px wave visible and rises to fill 100% of the screen.
  const waterY = useTransform(scrollY, [0, 500], ["calc(100% - 60px)", "0%"]);

  if (loading) return <LogoLoader />;

  return (
    <div className="App">
      <GlassCursor />
      
      <div className="pin-container">
        {/* 🔷 Top Spline Section */}
        <div className="spline-container">
          <Spline scene="https://prod.spline.design/x8pviGljQ1dRsMWf/scene.splinecode" />
          <div className="wave-fill">
            <motion.div className="water" style={{ y: waterY }}>
              <span className="wave"></span>
              <span className="deep-water"></span>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="scroll-content">
        {/* 🔷 Add Liquid Scroll Transition Here */}

        {/* 🔷 Background Video Section */}
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://dl.dropboxusercontent.com/scl/fi/ecqld2ikghhnwm0xou04y/hero-bg-copy.mp4?rlkey=ue9hwk67xrj1v3eydnaqojd6o&st=7yv7kizp&dl=0"
            type="video/mp4"
          />
        </video>

        {/* 🔷 3D Scene Content */}
        <div className="content">
          <ThreeScene />
          <hr className="separator" />
        </div>

        <MemoryCarousel />
        <Card />

        

        <div className="sera-ui-video-text">
          <VideoText
            src="https://github.com/Mohammad-Afzal123/ACM-WDraft/raw/refs/heads/main/vecteezy_glowing-blue-neon-reflection-tech-tunnel-corridor-space-dj-loop_2020121%20(1)%20(1).mp4"
          />
        </div>
      </div>
    </div>
  );
}
