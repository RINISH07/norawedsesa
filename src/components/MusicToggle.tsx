"use client";

import { Music2, Pause } from "lucide-react";
import { useEffect, useRef, useState, type RefObject } from "react";
import { wedding } from "@/config/wedding";

export default function MusicToggle({
  audioRef,
  opened,
}: {
  audioRef: RefObject<HTMLAudioElement | null>;
  opened: boolean;
}) {
  const [playing, setPlaying] = useState(false);
  const [message, setMessage] = useState("");

  const userPaused = useRef(false);

  // Music never starts on its own: playback begins from the "Open Invitation"
  // tap (see InvitationPage). After that, retry on later taps if the browser
  // interrupted playback, and when the tab comes back, unless the guest paused.
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !opened) return;
    const tryPlay = () => {
      if (userPaused.current || !audio.paused) return;
      audio.play().catch(() => {});
    };
    const onGesture = (e: Event) => {
      if ((e.target as Element | null)?.closest?.("[data-music-toggle]")) return;
      tryPlay();
    };
    const onVisible = () => {
      if (document.visibilityState === "visible") tryPlay();
    };
    const events = ["pointerdown", "touchend", "click", "keydown"] as const;
    const stop = () => events.forEach((ev) => window.removeEventListener(ev, onGesture));

    events.forEach((ev) => window.addEventListener(ev, onGesture, { passive: true }));
    audio.addEventListener("playing", stop);
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      stop();
      audio.removeEventListener("playing", stop);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, [audioRef, opened]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onError = () => {
      setPlaying(false);
      setMessage("Music is not available yet.");
    };
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("error", onError);
    setPlaying(!audio.paused);
    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("error", onError);
    };
  }, [audioRef]);

  useEffect(() => {
    document.documentElement.style.overflow = opened ? "" : "hidden";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [opened]);

  async function toggleMusic() {
    const audio = audioRef.current;
    if (!audio || !wedding.music.src) {
      setMessage("Music is not available yet.");
      return;
    }
    if (!audio.paused) {
      userPaused.current = true;
      audio.pause();
      return;
    }

    userPaused.current = false;
    try {
      await audio.play();
      setMessage("");
    } catch {
      setMessage("Music is not available yet.");
    }
  }

  return (
    <>
      <button
        data-music-toggle
        aria-label={playing ? "Pause background music" : "Play background music"}
        aria-pressed={playing}
        className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))] z-20 flex h-12 w-12 items-center justify-center rounded-full border border-[#B69A68]/60 bg-[#FFFDFB]/95 text-[#741B35] shadow-lg transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#741B35]"
        onClick={toggleMusic}
        type="button"
      >
        {playing ? (
          <span className="relative flex items-center justify-center">
            <Pause className="h-5 w-5" />
            <span className="absolute -inset-2 animate-ping rounded-full border border-[#A85C72]/50" />
          </span>
        ) : (
          <Music2 className="h-5 w-5" />
        )}
      </button>
      <span aria-live="polite" className="sr-only">
        {message}
      </span>
    </>
  );
}
