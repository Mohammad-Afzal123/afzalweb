import React from "react";
import DeveloperCard from "./DeveloperCard";
import Lanyard from "./Lanyard";
import "./ProjectsWithLanyard.css";

export default function DeveloperWithLanyard() {
  return (
    <section className="dev-lanyard-section">
      {/* LEFT – 3 Developer Cards */}
      <div className="dev-left multi-cards">
        <DeveloperCard
          name="Ayush Upadhyay"
          skills={["React", "Next.js", "Redux", "Docker"]}
          experience="3+ years"
          status="Building scalable web apps 🚀"
        />

        <DeveloperCard
          name="AI Engineer"
          skills={["Python", "PyTorch", "NLP", "LLMs"]}
          experience="2+ years"
          status="Training intelligent systems 🤖"
        />

        <DeveloperCard
          name="Full-Stack Dev"
          skills={["Node.js", "Express", "MongoDB", "AWS"]}
          experience="4+ years"
          status="Designing backend architectures ⚙️"
        />
      </div>

      {/* RIGHT – Lanyard */}
      <div className="dev-right">
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
      </div>
    </section>
  );
}
