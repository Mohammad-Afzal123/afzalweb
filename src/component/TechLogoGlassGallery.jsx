import React from "react";
import GlassSurface from "./GlassSurface";
import "./TechLogoGlassGallery.css";

const logos = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
];

export default function TechLogoGlassGallery() {
  return (
    <div className="tech-glass-viewport">
      {/* FULL-WIDTH SLIDING LOGOS */}
      <div className="logo-marquee">
        <div className="logo-track">
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <img src={logo} alt="" key={i} />
          ))}
        </div>
      </div>

      {/* FIXED-SIZE GLASS (CENTERED) */}
      <div className="glass-center">
        <GlassSurface
          width={1100}
          height={120}
          borderRadius={28}
          blur={12}
          opacity={0.9}
          brightness={65}
          saturation={1.4}
          distortionScale={-160}
        />
      </div>
    </div>
  );
}
