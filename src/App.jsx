import React, { useState, useEffect } from 'react';
import LogoLoader from './LogoLoader';
import ThreeScene from './ThreeScene';
import './App.css';
import MemoryCarousel from './MemoryCarousel';
import Card from './Card';
import GlassCursor from './GlassCursor';
import { VideoText } from './VideoText';
import Spline from '@splinetool/react-spline';
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
        <div className="w-full flex justify-center items-center py-10">
      <div className="w-[80px] h-[40px]">
        <VideoText
          src="https://ls29t3z55w.ufs.sh/f/JEKFIJDsOBct0vrmLYJRG8BKHmvZQkWJ9ElIVcNfzPg63Mbo"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={200}
          letterSpacing="0.03em"
          textTransform="uppercase"
          fontWeight="bold"
          sources={[
            { src: "fallback.webm", type: "video/webm" },
            { src: "fallback.ogv", type: "video/ogg" },
          ]}
          onVideoLoad={() => console.log("Video loaded")}
          onVideoError={(err) => console.error("Video error", err)}
        >
          Sera UI
        </VideoText>
      </div>
    </div>

      <br></br>
      <div style={{ width: '100vw', height: '100vh' }}>
      <Spline scene="https://prod.spline.design/x8pviGljQ1dRsMWf/scene.splinecode" />
    </div>

    </div>
  );
}
