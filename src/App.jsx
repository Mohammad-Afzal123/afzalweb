import React, { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";
import "./App.css";
import MemoryCarousel from "./component/MemoryCarousel";
import Intro from "./component/intro";
import ThreeScene from "./component/ThreeScene";
import GlassCursor from "./component/GlassCursor";
import LogoLoader from "./component/LogoLoader";
import ProjectsWithLanyard from "./component/ProjectsWithLanyard";
import Card from "./component/Card.jsx";
import TechLogoGlassGallery from "./component/TechLogoGlassGallery";
import SectionTitle from "./component/SectionTitle";
export default function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (showLoader) {
    return <LogoLoader />;
  }

  return (
    <div className="app">
      <GlassCursor />

      {/* ===== FIXED SPLINE BACKGROUND ===== */}
      <div className="spline-fixed">
        <Spline scene="https://prod.spline.design/x8pviGljQ1dRsMWf/scene.splinecode" />
      </div>

      {/* ===== SCROLLABLE FOREGROUND ===== */}
      <div className="foreground">
        
        {/* NEW LIVE BACKGROUND IMAGE LAYER */}
        <div className="live-bg-container">
          <div className="live-bg-image" />
          <div className="live-bg-overlay" />
        </div>

        <div className="wave-wrapper">
          <div className="wave" />
        </div>

        <section className="content-section">
          <div className="ambient-bg">
            <Intro />
            <SectionTitle
      title="Skills"
      subtitle="Technologies & Tools"
    />
            <TechLogoGlassGallery />
          </div>
        </section>

        <section className="content-section darker">
          <div className="ambient-bg dark">
            <ThreeScene />
            <SectionTitle
      title="Projects"
    />
            <MemoryCarousel />
             <SectionTitle
      title="Education"
    />
            <ProjectsWithLanyard />
            <SectionTitle
      title="Testimonials" />
            <Card />
          </div>
        </section>
        
      </div>
    </div>
  );
}