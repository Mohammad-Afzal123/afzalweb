import React, { useEffect, useRef } from "react";
import "./MemoryCarousel.css";

const memoryCards = [
  {
    id: 1,
    title: "Debugging the Matrix",
    tag: "FRAMEWORK: ReactJS",
    icon: "fa-bug",
    preview: "The error messages multiplied, haunting my console...",
    description:
      "Debugging a complex ReactJS component felt like navigating a vast matrix. Each fix unveiled new issues...",
    location: "localhost:3000",
    time: "14:30:15",
  },
  {
    id: 2,
    title: "The Algorithm Library",
    tag: "CONCEPT: Algorithms",
    icon: "fa-book-open",
    preview: "Endless tomes of sorting, searching, and optimization...",
    description:
      "I found my own data structures there—pages still being written as I coded. Now I'm writing outside the margins...",
    location: "Stack Overflow",
    time: "11:05:40",
  },
  {
    id: 3,
    title: "The Abstract Void",
    tag: "PARADIGM: Abstraction",
    icon: "fa-atom",
    preview: "Nothing concrete exists here, yet I feel the logic...",
    description:
      "The Abstract Void is the space between implementations—a quantum foam of design patterns...",
    location: "design patterns.md",
    time: "--:--:--",
  },
  {
    id: 4,
    title: "The Version Control Mirror",
    tag: "TOOL: Git",
    icon: "fa-code-branch",
    preview: "I saw my code, but not as it is now...",
    description:
      "Git showed all my branches. Some stable, some experimental. All were my work.",
    location: "github.com/my-repo",
    time: "18:55:20",
  },
  {
    id: 5,
    title: "The Deployment Dream",
    tag: "PROCESS: Deployment",
    icon: "fa-rocket",
    preview: "I'm trying to send it live, but which environment is real?",
    description:
      "Every server feels familiar yet subtly different. Logs blur, configs clash.",
    location: "cloud-server",
    time: "NOW",
  },
  {
    id: 6,
    title: "Binary Forest",
    tag: "THEORY: Computation",
    icon: "fa-tree",
    preview: "Every node leads deeper into logic...",
    description:
      "In the Binary Forest, left was always 0 and right was always 1.",
    location: "CS50",
    time: "10:10:10",
  },

  /* ===== NEW 5 CARDS ===== */

  {
    id: 7,
    title: "The Quantum Commit",
    tag: "FANTASY: GitVerse",
    icon: "fa-ghost",
    preview: "A commit that both exists and doesn’t...",
    description:
      "Until merged, its fate is uncertain. Schrödinger’s push request.",
    location: "git://parallel-universe",
    time: "42:42:42",
  },
  {
    id: 8,
    title: "The Async Abyss",
    tag: "CONCEPT: Async",
    icon: "fa-hourglass-half",
    preview: "Promises resolved, but answers never arrived...",
    description:
      "Callbacks echoed endlessly. Only async/await brought clarity.",
    location: "event loop",
    time: "∞",
  },
  {
    id: 9,
    title: "Refactor Rift",
    tag: "PRACTICE: Clean Code",
    icon: "fa-code",
    preview: "Everything worked… but felt wrong.",
    description:
      "I rewrote without changing behavior. The code breathed easier.",
    location: "src/utils",
    time: "02:22:22",
  },
  {
    id: 10,
    title: "The Memory Leak",
    tag: "BUG: Performance",
    icon: "fa-droplet",
    preview: "RAM usage kept climbing. Something was alive.",
    description:
      "Uncleared intervals haunted the heap. I finally freed them.",
    location: "Chrome DevTools",
    time: "03:14:15",
  },
  {
    id: 11,
    title: "The CI Oracle",
    tag: "PIPELINE: CI/CD",
    icon: "fa-robot",
    preview: "The build decides my fate.",
    description:
      "Green means peace. Red means war. The oracle never lies.",
    location: ".github/workflows",
    time: "CI",
  },
  {
    id: 12,
    title: "Edge Case Horizon",
    tag: "LOGIC: Edge Cases",
    icon: "fa-triangle-exclamation",
    preview: "It works… until it doesn’t.",
    description:
      "The horizon revealed flaws unseen in happy paths.",
    location: "unit-tests",
    time: "LAST",
  },
];

export default function MemoryCarousel() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    const cards = carousel.querySelectorAll(".memory-card");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    let theta = 0;
    let startX = 0;
    let isDragging = false;

    const totalCards = cards.length;

    let radius =
      window.innerWidth <= 768
        ? 380
        : Math.min(650, totalCards * 55);

    function arrangeCards() {
      const angle = 360 / totalCards;
      cards.forEach((card, index) => {
        card.style.transform = `rotateY(${angle * index}deg) translateZ(${radius}px)`;
      });
    }

    function rotateCarousel() {
      carousel.style.transform = `translateZ(-${radius}px) rotateY(${theta}deg)`;
    }

    function nextCard() {
      theta -= 360 / totalCards;
      rotateCarousel();
    }

    function prevCard() {
      theta += 360 / totalCards;
      rotateCarousel();
    }

    function dragStart(e) {
      isDragging = true;
      startX = e.pageX || e.touches[0].pageX;
    }

    function drag(e) {
      if (!isDragging) return;
      const currentX = e.pageX || e.touches[0].pageX;
      const diffX = currentX - startX;
      carousel.style.transform = `translateZ(-${radius}px) rotateY(${theta + diffX * 0.3}deg)`;
    }

    function dragEnd(e) {
      if (!isDragging) return;
      isDragging = false;
      const currentX = e.pageX || e.changedTouches[0].pageX;
      const diffX = currentX - startX;
      if (Math.abs(diffX) > 20) {
        diffX > 0 ? prevCard() : nextCard();
      } else rotateCarousel();
    }

    arrangeCards();
    rotateCarousel();

    prevBtn.addEventListener("click", prevCard);
    nextBtn.addEventListener("click", nextCard);

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("touchstart", dragStart);
    document.addEventListener("mousemove", drag);
    document.addEventListener("touchmove", drag);
    document.addEventListener("mouseup", dragEnd);
    document.addEventListener("touchend", dragEnd);

    window.addEventListener("resize", () => {
      radius =
        window.innerWidth <= 768
          ? 380
          : Math.min(650, totalCards * 55);
      arrangeCards();
      rotateCarousel();
    });

    return () => {
      document.removeEventListener("mousemove", drag);
      document.removeEventListener("touchmove", drag);
      document.removeEventListener("mouseup", dragEnd);
      document.removeEventListener("touchend", dragEnd);
    };
  }, []);

  return (
    <div className="carousel-wrapper">
      <div className="carousel-container">
        <div className="carousel" ref={carouselRef}>
          {memoryCards.map((card) => (
            <div className="memory-card" key={card.id}>
              <div className="card-inner">
                <div className="card-front">
                  <div className="card-content">
                    <div className="memory-date">{card.tag}</div>
                    <h3>{card.title}</h3>
                    <div className="memory-image">
                      <i className={`fa-solid ${card.icon}`} />
                      <div className="glitch-effect" />
                    </div>
                    <p className="memory-preview">{card.preview}</p>
                    <div className="card-glow" />
                  </div>
                </div>
                <div className="card-back">
                  <div className="card-content">
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    <div className="memory-coordinates">
                      <span>
                        <i className="fa-solid fa-location-dot" /> {card.location}
                      </span>
                      <span className="time-stamp">
                        <i className="fa-regular fa-clock" /> {card.time}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-controls">
        <button id="prev-btn" className="control-btn">
          <i className="fa-solid fa-chevron-left" />
        </button>
        <button id="next-btn" className="control-btn">
          <i className="fa-solid fa-chevron-right" />
        </button>
      </div>
    </div>
  );
}
