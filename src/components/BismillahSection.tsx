"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { wedding } from "@/config/wedding";
import OrnamentalDivider from "@/components/OrnamentalDivider";

const riseIn = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function BismillahSection({ active = true }: { active?: boolean }) {
  const duration = 0.8;
  const { scrollY } = useScroll();
  const cueOpacity = useTransform(scrollY, [0, 120], [1, 0]);

  return (
    <section id="invitation" className="invitation-section scene-opening">
      <div className="section-content max-w-2xl">
        <div className="opening-copy">
          <motion.p
            aria-label={wedding.invitation.bismillah}
            className="font-['Amiri',serif] text-[clamp(1.8rem,6vw,2.5rem)] leading-[1.8] text-[#741B35]"
            dir="rtl"
            initial={{ opacity: 0, y: -8 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: duration + 0.4, delay: 0.2 }}
          >
            {wedding.invitation.bismillah}
          </motion.p>
          <motion.div
            initial="hidden"
            animate={active ? "visible" : "hidden"}
            transition={{ staggerChildren: 0.16, delayChildren: 0.6 }}
          >
            <motion.p variants={riseIn} transition={{ duration }} className="eyebrow mt-5">
              {wedding.invitation.englishHeading}
            </motion.p>
            <motion.p
              variants={riseIn}
              transition={{ duration }}
              className="mt-1 text-sm italic text-[#897A7D] sm:text-base"
            >
              {wedding.invitation.englishSubheading}
            </motion.p>
            <OrnamentalDivider className="my-7 sm:my-9" />
            <motion.h1
              variants={riseIn}
              transition={{ duration }}
              className="display-serif text-[clamp(2.3rem,6vw,3.75rem)] italic leading-[1.08] text-[#551126]"
            >
              {wedding.invitation.greeting}
            </motion.h1>
            <OrnamentalDivider className="my-7 sm:my-9" />
            <motion.p
              variants={riseIn}
              transition={{ duration }}
              className="mx-auto max-w-xl text-[0.95rem] leading-7 text-[#6E5A60] sm:text-base sm:leading-8"
            >
              {wedding.invitation.message}
            </motion.p>
          </motion.div>
        </div>
      </div>
      <motion.a
        href="#family"
        aria-label="Scroll to family details"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        style={{ opacity: cueOpacity }}
      >
        <motion.span
          className="flex flex-col items-center gap-2 text-[0.6rem] font-medium tracking-[0.3em] text-[#741B35]"
          initial={{ opacity: 0 }}
          animate={{ opacity: active ? 1 : 0 }}
          transition={{ delay: 1.6, duration }}
        >
          <span>SWIPE UP</span>
          <span
            aria-hidden="true"
            className="flex h-10 w-6 items-start justify-center rounded-full border border-[#B69A68] pt-2"
          >
            <motion.span
              className="h-2 w-1 rounded-full bg-[#741B35]"
              animate={{ y: [0, 14, 0], opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
          <ChevronDown aria-hidden="true" className="-mt-1 h-4 w-4 text-[#B69A68]" />
        </motion.span>
      </motion.a>
    </section>
  );
}
