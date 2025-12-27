import React, { useState } from "react";
import "./MemoryCarousel.css";

const memoryCards = [
  { id: 1, title: "Debugging the Matrix", tag: "ReactJS", icon: "fa-bug", preview: "Errors everywhere...", description: "Deep dive into the call stack to find that one pesky null pointer.", location: "localhost", time: "14:30", img: "https://picsum.photos/seed/dev1/400/250" },
  { id: 2, title: "Algorithm Library", tag: "Algorithms", icon: "fa-book", preview: "Infinite logic...", description: "Optimizing Big O notation for high-frequency data processing.", location: "StackOverflow", time: "11:05", img: "https://picsum.photos/seed/dev2/400/250" },
  { id: 3, title: "Abstract Void", tag: "Abstraction", icon: "fa-atom", preview: "Pure design...", description: "Architecture patterns that transcend the physical hardware layer.", location: "Patterns", time: "--", img: "https://picsum.photos/seed/dev3/400/250" },
  { id: 4, title: "Git Mirror", tag: "Git", icon: "fa-code-branch", preview: "Branches diverged...", description: "Resolving merge conflicts in a high-stakes production environment.", location: "GitHub", time: "18:55", img: "https://picsum.photos/seed/dev4/400/250" },
  { id: 5, title: "Deployment Dream", tag: "DevOps", icon: "fa-rocket", preview: "Which env is real?", description: "Containerization and orchestration across multiple cloud providers.", location: "Cloud", time: "NOW", img: "https://picsum.photos/seed/dev5/400/250" },
  { id: 6, title: "Binary Forest", tag: "Theory", icon: "fa-tree", preview: "Left or right...", description: "Traversing complex tree structures with recursive efficiency.", location: "CS", time: "10:10", img: "https://picsum.photos/seed/dev6/400/250" },
  { id: 7, title: "Quantum Commit", tag: "GitVerse", icon: "fa-ghost", preview: "Exists & doesn’t...", description: "The state of code before the observer runs the test suite.", location: "Branch", time: "42", img: "https://picsum.photos/seed/dev7/400/250" },
  { id: 8, title: "Async Abyss", tag: "Async", icon: "fa-hourglass-half", preview: "Promises...", description: "Waiting for the event loop to return from the depths of IO.", location: "Event Loop", time: "∞", img: "https://picsum.photos/seed/dev8/400/250" },
  { id: 9, title: "Async Abyss", tag: "Async", icon: "fa-hourglass-half", preview: "Promises...", description: "Waiting for the event loop to return from the depths of IO.", location: "Event Loop", time: "∞", img: "https://picsum.photos/seed/dev8/400/250" },
  { id: 10, title: "Async Abyss", tag: "Async", icon: "fa-hourglass-half", preview: "Promises...", description: "Waiting for the event loop to return from the depths of IO.", location: "Event Loop", time: "∞", img: "https://picsum.photos/seed/dev8/400/250" },
];

export default function MemoryCarousel() {
  const [rotation, setRotation] = useState(0);
  const [flippedId, setFlippedId] = useState(null);

  const totalCards = memoryCards.length;
  const angleStep = 360 / totalCards;
  
  // Radius is increased to accommodate wider cards and full-screen width
  const radius = 650; 

  const handleRotate = (direction) => {
    setFlippedId(null);
    setRotation((prev) => (direction === "next" ? prev - angleStep : prev + angleStep));
  };

  return (
    <div className="carousel-wrapper">
      <div className="carousel-scene">
        <div 
          className="carousel" 
          style={{ transform: `rotateY(${rotation}deg)` }}
        >
          {memoryCards.map((card, i) => {
            const cardRotation = i * angleStep;
            return (
              <div
                key={card.id}
                className={`memory-card ${flippedId === card.id ? "flipped" : ""}`}
                style={{
                  transform: `rotateY(${cardRotation}deg) translateZ(${radius}px)`,
                }}
                onClick={() => setFlippedId(flippedId === card.id ? null : card.id)}
              >
                <div className="card-inner">
                  {/* FRONT FACE */}
                  <div className="card-face card-front">
                    <div className="card-image-header">
                        <img src={card.img} alt={card.title} />
                        <span className="tag">{card.tag}</span>
                        <div className="shine-container"><span className="shine" /></div>
                    </div>
                    
                    <div className="card-content">
                        <h3 className="card-title">{card.title}</h3>
                        <p className="preview-text">{card.preview}</p>
                        <div className="icon-badge">
                            <i className={`fa-solid ${card.icon}`} />
                        </div>
                    </div>
                  </div>

                  {/* BACK FACE */}
                  <div className="card-face card-back">
                    <div className="back-header">
                        <i className={`fa-solid ${card.icon} small-icon`} />
                        <span className="tag">{card.tag}</span>
                    </div>
                    <div className="back-body">
                        <h3>{card.title}</h3>
                        <p className="description-text">{card.description}</p>
                    </div>
                    <div className="card-footer">
                       {card.location} <span className="separator">/</span> {card.time}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="controls">
        <button className="nav-btn" onClick={() => handleRotate("prev")}>◀</button>
        <button className="nav-btn" onClick={() => handleRotate("next")}>▶</button>
      </div>
    </div>
  );
}