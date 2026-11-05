"use client";

import { motion } from "framer-motion";
import { CalendarDays, Clock3, ExternalLink, MapPin } from "lucide-react";
import { wedding } from "@/config/wedding";
import ScrollCard from "@/components/ScrollCard";
import OrnamentalDivider from "@/components/OrnamentalDivider";

function mapsHref(mapUrl: string, venue: string, address: string) {
  if (mapUrl) return mapUrl;
  const query = encodeURIComponent(`${venue}, ${address}`);
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

function VenueLink({
  venue,
  address,
  mapUrl,
  dark,
}: {
  venue: string;
  address: string;
  mapUrl: string;
  dark?: boolean;
}) {
  return (
    <a
      href={mapsHref(mapUrl, venue, address)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${venue} in Google Maps`}
      className={`group mx-auto mt-6 flex max-w-sm items-center gap-3 rounded-2xl border px-4 py-3 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#741B35] ${
        dark
          ? "border-[#B69A68]/60 bg-white/10 hover:bg-white/20"
          : "border-[#B69A68]/60 bg-[#FBF5E8] hover:bg-[#F6ECD3]"
      }`}
    >
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
          dark ? "bg-[#B69A68] text-[#551126]" : "bg-[#B69A68] text-white"
        }`}
      >
        <MapPin aria-hidden="true" className="h-5 w-5" />
      </span>
      <span className="min-w-0 flex-1">
        <span
          className={`display-serif block break-words text-lg font-medium leading-tight underline decoration-[#B69A68] decoration-1 underline-offset-4 ${
            dark ? "text-white" : "text-[#551126]"
          }`}
        >
          {venue}
        </span>
        <span className={`mt-0.5 block break-words text-xs leading-5 ${dark ? "text-white/75" : "text-[#75666A]"}`}>
          {address}
        </span>
        <span className={`mt-1 block text-[0.62rem] font-medium tracking-[0.16em] ${dark ? "text-[#E6D3A3]" : "text-[#A85C72]"}`}>
          TAP FOR DIRECTIONS
        </span>
      </span>
      <ExternalLink
        aria-hidden="true"
        className={`h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5 ${dark ? "text-white" : "text-[#741B35]"}`}
      />
    </a>
  );
}

export default function EventsSection() {
  const { nikah, reception } = wedding;

  return (
    <section id="events" className="invitation-section scene-event">
      <div className="section-content grid max-w-xl gap-8">
        {/* Nikkah: deep burgundy card, gold accent */}
        <ScrollCard
          id="nikah"
          from="left"
          className="rounded-[1.75rem] border border-[#B69A68]/50 bg-gradient-to-b from-[#741B35] to-[#4A0F20] px-5 py-8 text-center text-white shadow-[0_16px_45px_rgba(85,17,38,0.3)] sm:px-8"
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1 }}
            dir="rtl"
            lang="ar"
            aria-label={`${nikah.intro} (${nikah.introMeaning})`}
            className="font-['Amiri',serif] text-[clamp(1.05rem,3.5vw,1.35rem)] leading-[1.7] text-[#E6D3A3]"
          >
            {nikah.intro}
          </motion.p>
          <h2 className="display-serif -mt-1 text-[clamp(2.75rem,10vw,4.25rem)] font-medium tracking-[0.12em] text-white">
            {nikah.title}
          </h2>
          <div className="my-5 flex items-center justify-center gap-3" aria-hidden="true">
            <span className="h-px w-16 bg-[#B69A68]/70" />
            <span className="text-[#E6D3A3]">✦</span>
            <span className="h-px w-16 bg-[#B69A68]/70" />
          </div>
          <div className="mx-auto grid max-w-sm gap-3">
            <div className="flex items-start justify-center gap-3 text-left">
              <CalendarDays aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-[#E6D3A3]" />
              <div>
                <p className="display-serif text-xl leading-7 text-white sm:text-2xl">{nikah.date}</p>
                <p className="mt-1 text-sm italic text-white/70">{nikah.hijriDate}</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Clock3 aria-hidden="true" className="h-5 w-5 shrink-0 text-[#E6D3A3]" />
              <p className="text-sm tracking-wide text-white/85 sm:text-base">{nikah.time}</p>
            </div>
          </div>
          <VenueLink dark venue={nikah.venue} address={nikah.address} mapUrl={nikah.mapUrl} />
        </ScrollCard>

        {/* Reception: light ivory card, burgundy accent */}
        <ScrollCard
          id="reception"
          from="right"
          className="rounded-[1.75rem] border border-[#B69A68]/35 border-t-4 border-t-[#741B35] bg-[#FFFDFB] px-5 py-8 text-center shadow-[0_16px_45px_rgba(85,17,38,0.09)] sm:px-8"
        >
          <p className="text-[0.7rem] font-medium tracking-[0.3em] text-[#A85C72]">A JOYFUL GATHERING</p>
          <h2 className="display-serif mt-2 text-[clamp(2.25rem,8vw,3.5rem)] font-medium tracking-[0.1em] text-[#741B35]">
            {reception.title}
          </h2>
          <OrnamentalDivider className="my-5" />
          <div className="mx-auto grid max-w-sm gap-3">
            <div className="flex items-start justify-center gap-3 text-left">
              <CalendarDays aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-[#B69A68]" />
              <div>
                <p className="display-serif text-xl leading-7 text-[#551126] sm:text-2xl">{reception.date}</p>
                <p className="mt-1 text-sm italic text-[#897A7D]">{reception.hijriDate}</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Clock3 aria-hidden="true" className="h-5 w-5 shrink-0 text-[#B69A68]" />
              <p className="text-sm tracking-wide text-[#75666A] sm:text-base">
                Dinner <span className="mx-1 text-[#B69A68]">·</span> {reception.dinner}
              </p>
            </div>
          </div>
          <VenueLink
            venue={`${reception.venue} Convention Centre`}
            address={reception.address}
            mapUrl={reception.mapUrl}
          />
        </ScrollCard>
      </div>
    </section>
  );
}
