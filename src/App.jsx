import React, { useState, useEffect } from 'react';
import LogoLoader from './LogoLoader';
import ThreeScene from './ThreeScene';
import './App.css';
import MemoryCarousel from './MemoryCarousel';
import Card from './Card';
import GlassCursor from './GlassCursor';
import { VideoText } from './VideoText';
import Spline from '@splinetool/react-spline';
import LiquidScroll from './LiquidScroll'; // 👈 Import it

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LogoLoader />;

  return (
    <div className="App">
      <GlassCursor />
      
      {/* 🔷 Top Spline Section */}
      <div style={{ width: '100vw', height: '100vh' }}>
        <Spline scene="https://prod.spline.design/x8pviGljQ1dRsMWf/scene.splinecode" />
      </div>

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

      {/* 🔷 Final VideoText */}
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="/videos/Afzal_7_26_2025_23_48_41_contentcore.xyz.webm"
          type="video/webm"
        />
        Your browser does not support the video tag.
      </video>

      <div className="sera-ui-video-text">
        <VideoText
          src="https://github.com/Mohammad-Afzal123/ACM-WDraft/raw/refs/heads/main/vecteezy_glowing-blue-neon-reflection-tech-tunnel-corridor-space-dj-loop_2020121%20(1)%20(1).mp4"
        />
      </div>
    </div>
  );
}
