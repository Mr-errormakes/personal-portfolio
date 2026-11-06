"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { siteConfig } from "@/data/site";

const lines = [
  "LOADING MODULES",
  "MOUNTING PROJECTS",
  "SYSTEM READY",
];

// A short "system boot" intro, shown once per browser session.
export default function BootScreen() {
  const [visible, setVisible] = useState(true);
  const [step, setStep] = useState(0);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("booted") === "1";
      sessionStorage.setItem("booted", "1");
    } catch {
      // Storage unavailable — just play the intro.
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const skip = seen || reduced;

    const ticker = setInterval(() => {
      setStep((value) => Math.min(value + 1, lines.length - 1));
    }, 380);
    const done = setTimeout(() => setVisible(false), skip ? 0 : 1300);

    return () => {
      clearInterval(ticker);
      clearTimeout(done);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="boot-screen"
          aria-hidden="true"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
        >
          <span className="boot-mark">{siteConfig.initials}.</span>
          <p className="boot-text">{lines[step]}...</p>
          <span className="boot-bar">
            <span style={{ width: `${((step + 1) / lines.length) * 100}%` }} />
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
