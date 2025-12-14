import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Intro() {
  return (
    <section className="blue-bento-section">

      {/* HEADER */}
      <motion.header
        variants={item}
        initial="hidden"
        animate="show"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "4rem",
        }}
      >
        <h1 style={{ color: "#f8fafc" }}>JULIA HUANG</h1>
        <nav style={{ color: "#bfdbfe" }}>
          <span style={{ marginRight: "1.5rem" }}>PROJECTS</span>
          <span style={{ marginRight: "1.5rem" }}>ABOUT</span>
          <span>CONTACT</span>
        </nav>
      </motion.header>

      {/* BENTO GRID */}
      <motion.div
        className="blue-bento-grid"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* LEFT COLUMN */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <motion.div variants={item} className="blue-card">
            <h2 className="blue-title">
              Artist Redefining <br />
              Architecture with <br />
              AI-Driven Design
            </h2>

            <p className="blue-subtitle">
              Blending artificial intelligence with modern architectural
              expression to create immersive digital experiences.
            </p>

            <div style={{ marginTop: "1.8rem", fontWeight: 500 }}>
              Let’s Talk ↗
            </div>
          </motion.div>

          <motion.div variants={item} className="blue-card">
            <h3 style={{ marginBottom: "1rem", color: "#f8fafc" }}>
              Selected Projects
            </h3>
            <ul style={{ listStyle: "none", lineHeight: "2.2rem" }}>
              <li>Elara ↗</li>
              <li>Verve ↗</li>
              <li>Zephyr ↗</li>
            </ul>
          </motion.div>
        </div>

        {/* RIGHT COLUMN */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <motion.div
            variants={item}
            className="blue-card"
            style={{ padding: "1rem", height: "340px" }}
          >
            <img
              src="https://i.pinimg.com/564x/c8/c8/f7/c8c8f7952323e42689d54593466a9430.jpg"
              alt="Portrait"
              className="blue-image"
            />
          </motion.div>

          <motion.div variants={item} className="blue-card">
            <h3 style={{ marginBottom: "0.6rem", color: "#f8fafc" }}>
              About
            </h3>
            <p>
              Julia Huang is an innovative AI artist, blending cutting-edge
              technology with expressive design. Her work explores the
              intersection of intelligence, form, and digital identity.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="blue-card"
            style={{ cursor: "pointer" }}
          >
            <p style={{ opacity: 0.85 }}>Available for freelance</p>
            <h3 style={{ marginTop: "0.5rem", color: "#f8fafc" }}>
              Contact Me ↗
            </h3>
          </motion.div>
        </div>
      </motion.div>

      {/* SOCIALS */}
      <motion.div
        variants={item}
        initial="hidden"
        animate="show"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "3rem",
          marginTop: "4rem",
          color: "#bfdbfe",
        }}
      >
        <span>INSTAGRAM</span>
        <span>TWITTER</span>
        <span>LINKEDIN</span>
      </motion.div>
    </section>
  );
}
