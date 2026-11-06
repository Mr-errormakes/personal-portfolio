"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "motion/react";

// WebGL only exists in the browser, so the scene skips prerendering.
const HeroScene = dynamic(() => import("@/components/scene/HeroScene"), {
  ssr: false,
  loading: () => <div className="scene-loading">RENDERING MODEL…</div>,
});

export default function Showcase() {
  const section = useRef<HTMLElement>(null);

  // Scene scales up and settles as the section scrolls into view.
  const { scrollYProgress } = useScroll({
    target: section,
    offset: ["start end", "center center"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.82, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [18, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  return (
    <section ref={section} className="showcase" id="showcase">
      <motion.div
        className="showcase-stage"
        style={{ scale, rotateX, opacity }}
      >
        {/* Pointer events come from the whole section, not just the canvas. */}
        <HeroScene eventSource={section} />
        <p className="showcase-hint">MOVE YOUR CURSOR TO EXPLORE</p>
      </motion.div>
    </section>
  );
}
