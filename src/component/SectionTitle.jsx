import React from "react";
import { motion } from "framer-motion";
import "./SectionTitle.css";

export default function SectionTitle({ title }) {
  return (
    <motion.div
      className="section-title-wrapper"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <motion.h2
        className="section-title"
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {title}
      </motion.h2>

      <motion.div
        className="section-underline"
        whileInView={{ scaleX: 1, opacity: 1 }}
        initial={{ scaleX: 0, opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
    </motion.div>
  );
}
