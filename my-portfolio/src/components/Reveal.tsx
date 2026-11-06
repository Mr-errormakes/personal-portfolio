"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  // Direction the element travels in from.
  from?: "below" | "above" | "left" | "right" | "scale";
  as?: "div" | "article" | "li";
};

const offsets = {
  below: { y: 32 },
  above: { y: -32 },
  left: { x: -40 },
  right: { x: 40 },
  scale: { scale: 0.9 },
};

export default function Reveal({
  children,
  className,
  delay = 0,
  from = "below",
  as = "div",
}: RevealProps) {
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial={{ opacity: 0, ...offsets[from] }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay, ease: "easeOut" }}
    >
      {children}
    </Component>
  );
}
