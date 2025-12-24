import React, { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";
import "./App.css";
import "./component/MemoryCarousel.css";
import MemoryCarousel from "./component/MemoryCarousel";
import Intro from "./component/intro";
import ThreeScene from "./component/ThreeScene";
import GlassCursor from "./component/GlassCursor";
import LogoLoader from "./component/LogoLoader";
import Card from "./component/Card.jsx";
export default function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 3000); // 3 seconds

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
        <div className="wave-wrapper">
          <div className="wave" />
        </div>

        <section className="content-section">
          <Intro />
        </section>

        <section className="content-section darker">
          <ThreeScene />
          <MemoryCarousel />
          <Card/>
        </section>
      </div>
    </div>
  );
}
