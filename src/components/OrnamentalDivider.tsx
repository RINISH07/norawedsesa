"use client";

import { motion } from "framer-motion";

export default function OrnamentalDivider({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`my-7 flex items-center justify-center gap-3 text-[#B69A68] ${className}`}
    >
      <motion.span
        className="h-px w-12 origin-right bg-gradient-to-r from-transparent to-[#B69A68]/80 sm:w-20"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      />
      <motion.svg
        viewBox="0 0 24 24"
        className="h-3.5 w-3.5 shrink-0 fill-current"
        initial={{ opacity: 0.6, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.12 }}
      >
        <path d="M12 1.5 14.2 9.8 22.5 12l-8.3 2.2L12 22.5l-2.2-8.3L1.5 12l8.3-2.2L12 1.5Z" />
        <circle cx="12" cy="12" r="1.5" fill="#FFFDFB" />
      </motion.svg>
      <motion.span
        className="h-px w-12 origin-left bg-gradient-to-l from-transparent to-[#B69A68]/80 sm:w-20"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      />
    </div>
  );
}
