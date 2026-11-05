"use client";

import { motion } from "framer-motion";
import { wedding } from "@/config/wedding";
import ScrollCard from "@/components/ScrollCard";

type FamilyPerson = {
  name: string;
  parents: string;
  grandparents: readonly string[];
};

function FamilyBlock({
  label,
  person,
  relationship,
}: {
  label: string;
  person: FamilyPerson;
  relationship: string;
}) {
  return (
    <div className="family-card">
      <p className="eyebrow">{label}</p>
      <h2 className="display-serif mt-2 break-words text-[clamp(2.1rem,5vw,3.25rem)] italic leading-[1.08] text-[#741B35]">
        {person.name}
      </h2>
      <p className="mx-auto mt-4 max-w-sm break-words text-sm leading-6 text-[#6E5A60] sm:text-base sm:leading-7">
        {person.parents}
      </p>
      <p className="eyebrow mt-6 text-[0.62rem] tracking-[0.17em]">{relationship}</p>
      <div className="mt-2 space-y-1 text-sm leading-6 text-[#75666A] sm:text-[0.95rem]">
        {person.grandparents.map((name) => (
          <p key={name} className="break-words">{name}</p>
        ))}
      </div>
    </div>
  );
}

export default function FamilyDetailsSection() {
  return (
    <section id="family" className="invitation-section scene-family">
      <div className="section-content section-content-wide">
        <div className="relative grid gap-4 md:grid-cols-2 md:gap-6">
          <ScrollCard from="left">
            <FamilyBlock
              label="GROOM"
              person={wedding.couple.groom}
              relationship="Grandson of"
            />
          </ScrollCard>
          <motion.span
            aria-hidden="true"
            className="family-ampersand display-serif mx-auto text-4xl italic text-[#B69A68] md:absolute md:left-1/2 md:top-1/2 md:z-10 md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-full md:bg-[#FFFDFB] md:px-2"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.18 }}
          >
            &amp;
          </motion.span>
          <ScrollCard from="right">
            <FamilyBlock
              label="BRIDE"
              person={wedding.couple.bride}
              relationship="Granddaughter of"
            />
          </ScrollCard>
        </div>
      </div>
    </section>
  );
}
