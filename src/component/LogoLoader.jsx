import React from "react";
import "./LogoLoader.css";

export default function LogoLoader() {
  return (
    <div className="logo-loader">
      <video
        autoPlay
        muted
        playsInline
        className="logo-video-centered"
      >
        <source src="/videos/loader.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
