import { motion } from "framer-motion";

/* ================= ANIMATION ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Intro() {
  return (
    <section
      style={{
        position: "relative",
        zIndex: 10,
        transform: "translateY(-140px)", // overlap wave
        padding: "0 3rem",
      }}
    >
      {/* ================= HEADER BAR ================= */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        style={{
          background: "linear-gradient(90deg, #0b1f4d, #020617)",
          borderRadius: "18px",
          padding: "1.4rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "2.5rem",
          border: "1px solid rgba(147,197,253,0.25)",
        }}
      >
        <h1 style={{ letterSpacing: "0.18em" }}>JULIA HUANG</h1>
        <nav style={{ display: "flex", gap: "2rem", opacity: 0.9 }}>
          <span>PROJECTS</span>
          <span>ABOUT</span>
          <span>CONTACT</span>
        </nav>
      </motion.div>

      {/* ================= BENTO GRID ================= */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2.2fr 1.3fr",
          gap: "2rem",
        }}
      >
        {/* ================= LEFT LARGE COLUMN ================= */}
        <div
          style={{
            display: "grid",
            gridTemplateRows: "2fr 1fr",
            gap: "2rem",
          }}
        >
          {/* HERO CARD */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            style={{
              background:
                "linear-gradient(180deg, #1e3a8a, #020617)",
              borderRadius: "26px",
              padding: "3rem",
              border: "1px solid rgba(147,197,253,0.25)",
              boxShadow: "0 30px 60px rgba(0,0,0,0.5)",
            }}
          >
            <h2
              style={{
                fontSize: "3.2rem",
                lineHeight: 1.1,
                marginBottom: "1.2rem",
              }}
            >
              Artist Redefining <br />
              Architecture with <br />
              AI-Driven Design
            </h2>

            <p
              style={{
                maxWidth: "520px",
                color: "#c7d2fe",
                lineHeight: 1.6,
              }}
            >
              Blending artificial intelligence with modern architectural
              expression to create immersive digital experiences.
            </p>

            <div
              style={{
                marginTop: "2.2rem",
                color: "#60a5fa",
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              Let’s Talk ↗
            </div>
          </motion.div>

          {/* ABOUT CARD */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            style={{
              background:
                "linear-gradient(180deg, #020b2a, #020617)",
              borderRadius: "26px",
              padding: "2.2rem",
              border: "1px solid rgba(147,197,253,0.2)",
            }}
          >
            <p style={{ color: "#c7d2fe", lineHeight: 1.6 }}>
              Julia Huang is an innovative AI artist, blending cutting-edge
              technology with expressive design. Based in LA, her work explores
              intelligence, form, and digital identity.
            </p>
          </motion.div>
        </div>

        {/* ================= RIGHT COLUMN ================= */}
        <div
          style={{
            display: "grid",
            gridTemplateRows: "1.4fr 1fr 0.5fr",
            gap: "2rem",
          }}
        >
          {/* IMAGE CARD */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            style={{
              background:
                "linear-gradient(180deg, #020b2a, #020617)",
              borderRadius: "26px",
              padding: "1rem",
              border: "1px solid rgba(147,197,253,0.25)",
            }}
          >
            <img
              src="https://i.pinimg.com/564x/c8/c8/f7/c8c8f7952323e42689d54593466a9430.jpg"
              alt="Portrait"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "18px",
              }}
            />
          </motion.div>

          {/* PROJECT LIST CARD */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            style={{
              background:
                "linear-gradient(180deg, #020b2a, #020617)",
              borderRadius: "26px",
              padding: "2rem",
              border: "1px solid rgba(147,197,253,0.2)",
            }}
          >
            <h3 style={{ marginBottom: "1rem" }}>Selected Projects</h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                lineHeight: "2.4rem",
                color: "#c7d2fe",
              }}
            >
              <li>Elara ↗</li>
              <li>Verve ↗</li>
              <li>Zephyr ↗</li>
            </ul>
          </motion.div>

          {/* CTA CARD */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            style={{
              background:
                "linear-gradient(180deg, #1d4ed8, #1e40af)",
              borderRadius: "26px",
              padding: "2rem",
              color: "#f8fafc",
              cursor: "pointer",
            }}
          >
            <p style={{ opacity: 0.9 }}>Have some questions?</p>
            <h3 style={{ marginTop: "0.6rem" }}>Contact me ↗</h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
