"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { PARTNERS } from "@/data/siteData";

export default function PartnersSection() {
  const ref = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Duplicate partners for infinite scroll
  const duplicated = [...PARTNERS, ...PARTNERS];

  return (
    <section id="partners" className="relative py-24 md:py-32 bg-[#F4F5F7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#D6A54A] text-sm font-medium tracking-[0.2em] uppercase">Our Partners</span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-bold text-[#0B2341] mt-4 mb-4">
            Global Brand Partners
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Strategic partnerships with the world&apos;s leading pharmaceutical and healthcare brands, delivering innovation to Bahrain.
          </p>
        </motion.div>
      </div>

      {/* Infinite scroll carousel */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F4F5F7] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F4F5F7] to-transparent z-10" />

        <motion.div
          ref={scrollRef}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          className="flex gap-6 w-max"
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.animationPlayState = "paused";
            e.currentTarget.style.setProperty("--paused", "true");
          }}
          style={{ cursor: "default" }}
        >
          {duplicated.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="relative flex-shrink-0 w-56 md:w-64 rounded-[24px] p-6 bg-white shadow-md hover:shadow-xl transition-all duration-500 group"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Partner logo placeholder - stylized text */}
              <div className="h-24 flex items-center justify-center mb-4">
                <span className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#0B2341]/70 group-hover:text-[#0B2341] transition-colors duration-300">
                  {partner.name}
                </span>
              </div>

              {/* Divider */}
              <div className="w-full h-[1px] bg-[#E8EBF0] mb-4" />

              {/* Info */}
              <div className={`transition-all duration-300 ${hoveredIndex === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
                <p className="text-xs text-gray-500">
                  <span className="text-[#D6A54A] font-semibold">{partner.country}</span>
                  <span className="mx-2">|</span>
                  {partner.duration}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}