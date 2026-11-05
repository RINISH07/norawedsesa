"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { wedding } from "@/config/wedding";
import ScrollCard from "@/components/ScrollCard";
import OrnamentalDivider from "@/components/OrnamentalDivider";

type TimeRemaining = { days: number; hours: number; minutes: number; seconds: number };

function getRemaining(target: number): TimeRemaining | null {
  const difference = target - Date.now();
  if (difference <= 0) return null;
  const totalSeconds = Math.floor(difference / 1000);
  return {
    days: Math.floor(totalSeconds / 86_400),
    hours: Math.floor((totalSeconds % 86_400) / 3_600),
    minutes: Math.floor((totalSeconds % 3_600) / 60),
    seconds: totalSeconds % 60,
  };
}

const labels: Array<keyof TimeRemaining> = ["days", "hours", "minutes", "seconds"];

export default function CountdownSection() {
  const target = Date.parse(wedding.countdown.target);
  const [remaining, setRemaining] = useState<TimeRemaining | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const update = () => {
      setRemaining(getRemaining(target));
      setReady(true);
    };
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, [target]);

  return (
    <section id="countdown" className="invitation-section scene-countdown">
      <ScrollCard className="section-content section-content-wide countdown-panel max-w-4xl">
        <p className="eyebrow text-[#741B35]">{wedding.countdown.heading}</p>
        <OrnamentalDivider className="my-5 sm:my-7" />
        {!ready ? (
          <p className="py-4 text-sm italic text-[#897A7D]">Preparing the countdown…</p>
        ) : remaining ? (
          <>
            <div className="mx-auto grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 md:gap-5">
              {labels.map((label) => (
                <div
                  key={label}
                  className="flex min-h-24 min-w-0 flex-col items-center justify-center rounded-2xl border border-[#A85C72]/35 bg-[#FFFDFB]/90 px-2 py-3 sm:min-h-32 sm:py-4"
                >
                  <AnimatePresence mode="popLayout">
                    <motion.span
                      key={remaining[label]}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.22 }}
                      className="display-serif text-[clamp(2.25rem,8vw,3.5rem)] font-medium tabular-nums text-[#741B35]"
                    >
                      {String(remaining[label]).padStart(2, "0")}
                    </motion.span>
                  </AnimatePresence>
                  <span className="mt-2 text-[0.58rem] tracking-[0.14em] text-[#75666A] sm:tracking-[0.2em]">
                    {label.toUpperCase()}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs leading-6 text-[#75666A] sm:mt-6 sm:text-sm">
              {wedding.countdown.displayDate}
            </p>
            <p className="mt-3 text-sm italic leading-6 text-[#741B35] sm:text-base">
              {wedding.countdown.closingMessage}
            </p>
          </>
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mx-auto max-w-lg text-lg leading-8 text-[#741B35]"
          >
            {wedding.countdown.completeMessage}
          </motion.p>
        )}
      </ScrollCard>
    </section>
  );
}
