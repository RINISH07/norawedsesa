"use client";

import { motion, useReducedMotion } from "framer-motion";

const petals = [
  { left: "9%", delay: -8, duration: 24, drift: 5, rotation: 310, size: 8, color: "#741B35" },
  { left: "21%", delay: -19, duration: 31, drift: -4, rotation: 260, size: 6, color: "#A85C72" },
  { left: "34%", delay: -12, duration: 28, drift: 6, rotation: 330, size: 9, color: "#741B35" },
  { left: "47%", delay: -25, duration: 34, drift: -5, rotation: 280, size: 7, color: "#B16D7F" },
  { left: "59%", delay: -4, duration: 29, drift: 4, rotation: 300, size: 8, color: "#741B35" },
  { left: "71%", delay: -16, duration: 32, drift: -6, rotation: 350, size: 6, color: "#A85C72" },
  { left: "83%", delay: -21, duration: 27, drift: 5, rotation: 275, size: 9, color: "#741B35" },
  { left: "95%", delay: -10, duration: 35, drift: -3, rotation: 325, size: 7, color: "#B16D7F" },
  { left: "15%", delay: -28, duration: 33, drift: 4, rotation: 295, size: 7, color: "#A85C72" },
  { left: "39%", delay: -6, duration: 30, drift: -5, rotation: 315, size: 8, color: "#741B35" },
  { left: "65%", delay: -23, duration: 36, drift: 5, rotation: 290, size: 6, color: "#B16D7F" },
  { left: "89%", delay: -14, duration: 26, drift: -4, rotation: 340, size: 8, color: "#741B35" },
];

export default function FallingPetals({ className = "z-0" }: { className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return null;

  return (
    <div className={`pointer-events-none fixed inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {petals.map((petal, index) => (
        <motion.span
          className="absolute top-[-2rem] block rounded-[100%_0_100%_0] opacity-[0.22] will-change-transform"
          key={index}
          style={{
            left: petal.left,
            width: petal.size,
            height: petal.size * 1.45,
            backgroundColor: petal.color,
          }}
          initial={{ y: "-12vh", x: 0, rotate: 0 }}
          animate={{ y: "112vh", x: `${petal.drift}vw`, rotate: petal.rotation }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
}
