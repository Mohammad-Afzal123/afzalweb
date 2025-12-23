import React from "react";
import Spline from "@splinetool/react-spline";
import "./App.css";
import './component/MemoryCarousel.css';
import MemoryCarousel from "./component/MemoryCarousel";
import Intro from './component/intro';
import ThreeScene from "./component/ThreeScene";
import GlassCursor from "./component/GlassCursor";
import LogoLoader from "./component/LogoLoader";
export default function App() {
  return (
    <div className="app">
      <GlassCursor />
      {/* ===== FIXED SPLINE BACKGROUND ===== */}
      
      <div className="spline-fixed">
        <Spline scene="https://prod.spline.design/x8pviGljQ1dRsMWf/scene.splinecode" />
      </div>

      {/* ===== SCROLLABLE FOREGROUND ===== */}
      <div className="foreground">
        {/* Wave is PART OF CONTENT */}
        <div className="wave-wrapper">
          <div className="wave" />
        </div>

        {/* Actual content */}
        <section className="content-section">
          <Intro />
        </section>

        <section className="content-section darker">
          <ThreeScene />
          <MemoryCarousel />
        </section>
      </div>
    </div>
  );
}
