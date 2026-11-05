"use client";

import { MotionConfig, motion, useScroll, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import BismillahSection from "@/components/BismillahSection";
import CountdownSection from "@/components/CountdownSection";
import FamilyDetailsSection from "@/components/FamilyDetailsSection";
import FallingPetals from "@/components/FallingPetals";
import MusicToggle from "@/components/MusicToggle";
import EventsSection from "@/components/EventsSection";
import OpeningScreen from "@/components/OpeningScreen";
import { wedding } from "@/config/wedding";

export default function InvitationPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 90, damping: 25, mass: 0.2 });
  const audioRef = useRef<HTMLAudioElement>(null);
  const [opened, setOpened] = useState(false);

  // The tap on "Open Invitation" is the user gesture browsers require for sound,
  // so playback starts here and nowhere earlier.
  function openInvitation() {
    audioRef.current?.play().catch(() => {});
    setOpened(true);
  }

  return (
    <MotionConfig reducedMotion="user">
      <main className="relative min-h-screen overflow-x-clip bg-[#FFFDFB]">
        <motion.div
          aria-hidden="true"
          className="scroll-progress fixed inset-x-0 top-0 z-30 h-[2px] origin-left bg-[#B69A68]"
          style={{ scaleX: scaleX }}
        />
        <FallingPetals />
        <BismillahSection active={opened} />
        <FamilyDetailsSection />
        <EventsSection />
        <CountdownSection />
      </main>
      <audio ref={audioRef} src={wedding.music.src || undefined} preload="auto" loop />
      <MusicToggle audioRef={audioRef} opened={opened} />
      <OpeningScreen opened={opened} onOpen={openInvitation} />
    </MotionConfig>
  );
}
