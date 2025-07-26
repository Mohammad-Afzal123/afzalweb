import React, { useState, useEffect } from 'react';
import LogoLoader from './LogoLoader';
import ThreeScene from './ThreeScene';
import './App.css';
import MemoryCarousel from './MemoryCarousel';
import Card from './Card';
import GlassCursor from './GlassCursor';
export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LogoLoader />;

  return (
    <div className="App">
      {/* 🔹 Background video */}
      <GlassCursor />

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

      {/* 🔹 Main 3D scene or content */}
      <div className="content">
        <ThreeScene />
        <hr className="separator" />
      </div>
      <br />
      <MemoryCarousel />
      <br />
      <Card/>
      <br></br>
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

    </div>
  );
}
