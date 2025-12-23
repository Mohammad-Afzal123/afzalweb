import React, { useEffect, useRef } from 'react';
import './MemoryCarousel.css';

const memoryCards = [
  {
    id: 1,
    title: 'Debugging the Matrix',
    tag: 'FRAMEWORK: ReactJS',
    icon: 'fa-bug',
    preview: 'The error messages multiplied, haunting my console...',
    description:
      'Debugging a complex ReactJS component felt like navigating a vast matrix. Each fix unveiled new issues...',
    location: 'localhost:3000',
    time: '14:30:15'
  },
  {
    id: 2,
    title: 'The Algorithm Library',
    tag: 'CONCEPT: Algorithms',
    icon: 'fa-book-open',
    preview: 'Endless tomes of sorting, searching, and optimization...',
    description:
      "I found my own data structures there—pages still being written as I coded. Now I'm writing outside the margins...",
    location: 'Stack Overflow',
    time: '11:05:40'
  },
  {
    id: 3,
    title: 'The Abstract Void',
    tag: 'PARADIGM: Abstraction',
    icon: 'fa-atom',
    preview: 'Nothing concrete exists here, yet I feel the logic...',
    description:
      'The Abstract Void is the space between implementations—a quantum foam of design patterns...',
    location: 'design patterns.md',
    time: '--:--:--'
  },
  {
    id: 4,
    title: 'The Version Control Mirror',
    tag: 'TOOL: Git',
    icon: 'fa-code-branch',
    preview: 'I saw my code, but not as it is now...',
    description:
      'Git showed all my branches. Some stable, some experimental. All were my work. I need to rebase and stay on one timeline...',
    location: 'github.com/my-repo',
    time: '18:55:20'
  },
  {
    id: 5,
    title: 'The Deployment Dream',
    tag: 'PROCESS: Deployment',
    icon: 'fa-rocket',
    preview: "I'm trying to send it live, but which environment is real?",
    description:
      'Every server feels familiar yet subtly different. Logs blur, configs clash. Which version is real?',
    location: 'cloud-server:port',
    time: 'NOW'
  },
  {
    id: 6,
    title: 'Binary Forest',
    tag: 'THEORY: Computation',
    icon: 'fa-tree',
    preview: 'Every node leads deeper into logic...',
    description:
      'In the Binary Forest, left was always 0 and right was always 1. Recursion is the only path out.',
    location: 'book: CS50',
    time: '10:10:10'
  },
  {
    id: 7,
    title: 'The Quantum Commit',
    tag: 'FANTASY: GitVerse',
    icon: 'fa-ghost',
    preview: 'A commit that both exists and doesn’t...',
    description:
      'Until merged, its fate is uncertain. Schrödinger’s push request.',
    location: 'git://parallel-universe',
    time: '42:42:42'
  }
];

export default function MemoryCarousel() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    const cards = carousel.querySelectorAll('.memory-card');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    let theta = 0;
    let startX;
    let isDragging = false;
    let radius = window.innerWidth <= 768 ? 300 : 450;
    const totalCards = cards.length;

    function arrangeCards() {
      const angle = 360 / totalCards;
      cards.forEach((card, index) => {
        const cardAngle = angle * index;
        card.style.transform = `rotateY(${cardAngle}deg) translateZ(${radius}px)`;
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
      const currentX = e.pageX || (e.touches ? e.touches[0].pageX : startX);
      const diffX = currentX - startX;
      const newTheta = theta + diffX * 0.3;
      carousel.style.transform = `translateZ(-${radius}px) rotateY(${newTheta}deg)`;
    }

    function dragEnd(e) {
      if (!isDragging) return;
      isDragging = false;
      const currentX = e.pageX || (e.changedTouches ? e.changedTouches[0].pageX : startX);
      const diffX = currentX - startX;
      if (Math.abs(diffX) > 20) {
        if (diffX > 0) prevCard();
        else nextCard();
      } else {
        rotateCarousel();
      }
    }

    function init() {
      arrangeCards();
      rotateCarousel();
      prevBtn.addEventListener('click', prevCard);
      nextBtn.addEventListener('click', nextCard);
      cards.forEach((card) => {
        card.addEventListener('click', () => {
          card.classList.toggle('flipped');
        });
      });
      carousel.addEventListener('mousedown', dragStart);
      carousel.addEventListener('touchstart', dragStart);
      document.addEventListener('mousemove', drag);
      document.addEventListener('touchmove', drag);
      document.addEventListener('mouseup', dragEnd);
      document.addEventListener('touchend', dragEnd);
    }

    init();

    window.addEventListener('resize', () => {
      radius = window.innerWidth <= 768 ? 300 : 450;
      arrangeCards();
      rotateCarousel();
    });

    return () => {
      document.removeEventListener('mousemove', drag);
      document.removeEventListener('touchmove', drag);
      document.removeEventListener('mouseup', dragEnd);
      document.removeEventListener('touchend', dragEnd);
    };
  }, []);

  return (
    <div className="carousel-wrapper">
      <div className="carousel-container">
        <div className="carousel" id="memory-carousel" ref={carouselRef}>
          {memoryCards.map((card) => (
            <div className="memory-card" key={card.id}>
              <div className="card-inner">
                <div className="card-front">
                  <div className="card-content">
                    <div className="memory-date">{card.tag}</div>
                    <h3>{card.title}</h3>
                    <div className="memory-image">
                      <i className={`fa-solid ${card.icon}`}></i>
                      <div className="glitch-effect"></div>
                    </div>
                    <p className="memory-preview">{card.preview}</p>
                    <div className="card-glow"></div>
                  </div>
                </div>
                <div className="card-back">
                  <div className="card-content">
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    <div className="memory-coordinates">
                      <span><i className="fa-solid fa-location-dot"></i> {card.location}</span>
                      <span className="time-stamp"><i className="fa-regular fa-clock"></i> {card.time}</span>
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
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button id="next-btn" className="control-btn">
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}
