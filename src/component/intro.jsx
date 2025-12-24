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
        minHeight: "100vh",
        padding: "2rem 3rem",
        background: "#020617",
      }}
    >
      {/* ================= HEADER ================= */}
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
        <h1 style={{ letterSpacing: "0.18em", margin: 0 }}>JULIA HUANG</h1>
        <nav style={{ display: "flex", gap: "2rem", opacity: 0.9 }}>
          <span>PROJECTS</span>
          <span>ABOUT</span>
          <span>CONTACT</span>
        </nav>
      </motion.div>

      {/* ================= MAIN GRID ================= */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "45% 25% 30%",
          gap: "1.25rem",
          alignItems: "start",
        }}
      >
        {/* ================= COLUMN 1: HERO & ABOUT ================= */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          {/* HERO */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            style={{
              background: "linear-gradient(180deg, #1e3a8a, #020617)",
              borderRadius: "26px",
              padding: "3rem",
              border: "1px solid rgba(147,197,253,0.25)",
              minHeight: "380px",
            }}
          >
            <h2 style={{ fontSize: "3.2rem", lineHeight: 1.1, margin: 0 }}>
              Artist Redefining <br />
              Architecture with <br />
              AI-Driven Design
            </h2>
            <p style={{ color: "#c7d2fe", maxWidth: "520px", marginTop: "1.5rem", marginBottom: 0 }}>
              Blending artificial intelligence with modern architectural
              expression to create immersive digital experiences.
            </p>
          </motion.div>

          {/* ABOUT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            style={{
              background: "linear-gradient(180deg, #020b2a, #020617)",
              borderRadius: "26px",
              padding: "2.5rem",
              border: "1px solid rgba(147,197,253,0.2)",
              display: "flex",
              alignItems: "center",
              minHeight: "280px",
            }}
          >
            <p style={{ color: "#c7d2fe", lineHeight: 1.6, margin: 0 }}>
              Julia Huang is an innovative AI artist, blending cutting-edge
              technology with expressive design. Based in LA, her work explores
              intelligence, form, and digital identity.
            </p>
          </motion.div>
        </div>

        {/* ================= COLUMN 2: PORTRAIT & CONTACT ================= */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          {/* PORTRAIT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            style={{
              background: "linear-gradient(180deg, #020b2a, #020617)",
              borderRadius: "26px",
              padding: "1rem",
              border: "1px solid rgba(147,197,253,0.25)",
              overflow: "hidden",
              height: "380px",
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

          {/* CONTACT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            style={{
              background: "linear-gradient(180deg, #1d4ed8, #1e40af)",
              borderRadius: "26px",
              padding: "2.5rem",
              color: "#f8fafc",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              border: "1px solid rgba(147,197,253,0.2)",
              minHeight: "280px",
            }}
          >
            <p style={{ opacity: 0.9, fontSize: "0.95rem", margin: 0 }}>Have some questions?</p>
            <h3 style={{ marginTop: "0.6rem", fontSize: "1.8rem", margin: "0.6rem 0 0 0" }}>Contact me ↗</h3>
          </motion.div>
        </div>

        {/* ================= COLUMN 3: SELECTED PROJECTS ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          style={{
            background: "linear-gradient(180deg, #020b2a, #020617)",
            borderRadius: "26px",
            padding: "2.5rem",
            border: "1px solid rgba(147,197,253,0.2)",
            height: "100%",
          }}
        >
          <h3 style={{ marginBottom: "1.5rem", fontSize: "1.5rem", marginTop: 0 }}>Selected Projects</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "#c7d2fe", lineHeight: 2.5 }}>
            <li style={{ cursor: "pointer", fontSize: "1.1rem" }}>Elara ↗</li>
            <li style={{ cursor: "pointer", fontSize: "1.1rem" }}>Verve ↗</li>
            <li style={{ cursor: "pointer", fontSize: "1.1rem" }}>Zephyr ↗</li>
          </ul>
        </motion.div>
      </div>

      {/* ================= SOCIAL MEDIA BAR ================= */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        style={{
          background: "linear-gradient(90deg, #0b1f4d, #020617)",
          borderRadius: "18px",
          padding: "1.5rem 2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "3rem",
          marginTop: "2.5rem",
          border: "1px solid rgba(147,197,253,0.25)",
        }}
      >
        <a href="#" style={{ color: "#c7d2fe", textDecoration: "none", fontSize: "1.1rem", transition: "color 0.3s", cursor: "pointer" }}>LinkedIn</a>
        <a href="#" style={{ color: "#c7d2fe", textDecoration: "none", fontSize: "1.1rem", transition: "color 0.3s", cursor: "pointer" }}>GitHub</a>
        <a href="#" style={{ color: "#c7d2fe", textDecoration: "none", fontSize: "1.1rem", transition: "color 0.3s", cursor: "pointer" }}>Facebook</a>
        <a href="#" style={{ color: "#c7d2fe", textDecoration: "none", fontSize: "1.1rem", transition: "color 0.3s", cursor: "pointer" }}>Instagram</a>
      </motion.div>
    </section>
  );
}