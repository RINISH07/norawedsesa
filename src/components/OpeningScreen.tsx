"use client";

import { AnimatePresence, motion } from "framer-motion";
import { wedding } from "@/config/wedding";
import FallingPetals from "@/components/FallingPetals";

// First screen: shown on initial entry until the guest taps "Open Invitation".
export default function OpeningScreen({
  opened,
  onOpen,
}: {
  opened: boolean;
  onOpen: () => void;
}) {
  return (
    <AnimatePresence>
      {!opened && (
        <motion.div
          key="opening"
          className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden bg-[#FFFDFB]"
          exit={{ opacity: 0, filter: "blur(10px)", scale: 1.03 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        >
          <FallingPetals className="z-0" />
          <div className="relative z-10 flex min-h-full flex-col items-center justify-center pb-[max(2rem,env(safe-area-inset-bottom))] pt-[max(1rem,env(safe-area-inset-top))] text-center">
            {/* On phones the square artwork is enlarged and its edges clipped so the
                monogram fills the screen; from sm up it shows in full. */}
            <div className="flex w-full justify-center overflow-hidden [mask-composite:intersect] [mask-image:linear-gradient(to_bottom,transparent,#000_14%,#000_86%,transparent),linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)] [-webkit-mask-composite:source-in] [-webkit-mask-image:linear-gradient(to_bottom,transparent,#000_14%,#000_86%,transparent),linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
              <motion.img
                src="/images/monogram-logo.png"
                alt="N & E monogram"
                draggable={false}
                className="pointer-events-none w-[min(155vw,calc(62svh*1.094))] max-w-none shrink-0 select-none mix-blend-multiply sm:w-[min(36rem,calc(70svh*1.094))]"
                initial={{ opacity: 0, filter: "blur(18px)", scale: 0.92 }}
                animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <motion.p
              className="mt-3 px-6 text-[0.7rem] font-medium tracking-[0.35em] text-[#741B35] sm:text-xs"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              A BEAUTIFUL BEGINNING
            </motion.p>
            <motion.p
              className="display-serif mt-2 px-6 text-base italic text-[#897A7D] sm:text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              {wedding.nikah.date}
            </motion.p>
            <motion.button
              type="button"
              onClick={onOpen}
              className="mt-6 inline-flex min-h-12 items-center rounded-full border border-[#741B35] bg-transparent px-8 py-3 text-xs font-medium tracking-[0.22em] text-[#741B35] transition-colors hover:bg-[#741B35] hover:text-[#FFFDFB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#741B35]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.7 }}
              whileTap={{ scale: 0.97 }}
            >
              OPEN INVITATION
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
