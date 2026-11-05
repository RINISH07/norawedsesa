"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

type From = "left" | "right" | "bottom";

// A card whose entrance is tied to scroll position: it slides in from the given
// side, scales up and settles as it travels from the bottom of the screen to ~60% up.
export default function ScrollCard({
  children,
  from = "bottom",
  className,
  id,
}: {
  children: ReactNode;
  from?: From;
  className?: string;
  id?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.98", "start 0.55"] });

  const startX = from === "left" ? -70 : from === "right" ? 70 : 0;
  const startY = from === "bottom" ? 90 : 50;

  const opacity = useTransform(scrollYProgress, [0, 0.7], [0, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [startX, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [startY, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [from === "left" ? -2.5 : from === "right" ? 2.5 : 0, 0]);

  return (
    <motion.div
      ref={ref}
      id={id}
      className={className}
      style={reduce ? undefined : { opacity, x, y, scale, rotate }}
    >
      {children}
    </motion.div>
  );
}
