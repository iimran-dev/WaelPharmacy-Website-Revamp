"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PARTNERS } from "@/data/siteData";

// Helper component rendering high-fidelity official SVG brand logos
function PartnerLogo({ name }: { name: string }) {
  switch (name) {
    case "Abbott":
      return (
        <svg className="h-8 sm:h-9 w-auto" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="4" width="32" height="32" rx="6" fill="#009CDE" />
          <path d="M11 26L16 11L21 26H18.2L16 18.5L13.8 26H11Z" fill="white" />
          <text x="40" y="27" fontFamily="Arial, Helvetica, sans-serif" fontWeight="700" fontSize="24" fill="#00205B" letterSpacing="-0.5">Abbott</text>
        </svg>
      );

    case "Merck":
    case "MERCK":
      return (
        <svg className="h-7 sm:h-8 w-auto" viewBox="0 0 140 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g fill="#007A87">
            <path d="M6 6h6v24H6zM15 6h5.5l5.5 10L31.5 6H37v24h-6V16l-5 9h-1l-5-9v14h-5z" />
          </g>
          <text x="44" y="26" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="22" fill="#007A87" letterSpacing="1.5">MERCK</text>
        </svg>
      );

    case "AstraZeneca":
      return (
        <svg className="h-8 sm:h-9 w-auto" viewBox="0 0 170 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 6C9.58 6 6 9.58 6 14c0 6.5 8 13.5 8 13.5s8-7 8-13.5c0-4.42-3.58-8-8-8zm0 10.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#D6A54A" />
          <text x="32" y="27" fontFamily="Georgia, serif" fontWeight="700" fontSize="20" fill="#830051">AstraZeneca</text>
        </svg>
      );

    case "BD":
      return (
        <svg className="h-8 sm:h-9 w-auto" viewBox="0 0 110 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 10l12-6 12 6-12 26L4 10z" fill="#F36F21" />
          <path d="M16 4l12 6-12 26V4z" fill="#E31B23" />
          <text x="36" y="29" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="28" fill="#003366" letterSpacing="-1">BD</text>
        </svg>
      );

    case "Roche":
      return (
        <svg className="h-8 sm:h-9 w-auto" viewBox="0 0 130 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="15,4 105,4 115,20 105,36 15,36 5,20" fill="none" stroke="#0038A8" strokeWidth="2.5" />
          <text x="60" y="27" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="22" fill="#0038A8" letterSpacing="0.5">Roche</text>
        </svg>
      );

    case "Pfizer":
      return (
        <svg className="h-8 sm:h-9 w-auto" viewBox="0 0 130 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="65" cy="20" rx="55" ry="16" fill="#0000B0" />
          <text x="65" y="26" textAnchor="middle" fontFamily="Georgia, serif" fontStyle="italic" fontWeight="900" fontSize="21" fill="white" letterSpacing="-0.5">Pfizer</text>
        </svg>
      );

    case "Siemens Healthineers":
      return (
        <svg className="h-9 sm:h-10 w-auto" viewBox="0 0 160 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="80" y="20" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="17" fill="#EB780A" letterSpacing="2">SIEMENS</text>
          <text x="80" y="34" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="500" fontSize="12" fill="#333333" letterSpacing="0.5">Healthineers</text>
        </svg>
      );

    case "3M Health Care":
      return (
        <svg className="h-9 sm:h-10 w-auto" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="50" y="31" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="34" fill="#CC0000" letterSpacing="-2">3M</text>
        </svg>
      );

    case "Johnson & Johnson":
      return (
        <svg className="h-8 sm:h-9 w-auto" viewBox="0 0 170 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="85" y="27" textAnchor="middle" fontFamily="'Times New Roman', Georgia, serif" fontStyle="italic" fontWeight="700" fontSize="19" fill="#D51900" letterSpacing="-0.5">Johnson & Johnson</text>
        </svg>
      );

    case "Novartis":
      return (
        <svg className="h-8 sm:h-9 w-auto" viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 8h6l12 18V8h6v24h-6L14 14v18H8V8z" fill="#002D62" />
          <circle cx="4" cy="12" r="3" fill="#046A38" />
          <text x="44" y="27" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="20" fill="#002D62" letterSpacing="1">NOVARTIS</text>
        </svg>
      );

    case "Sanofi":
      return (
        <svg className="h-8 sm:h-9 w-auto" viewBox="0 0 130 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="20" r="5" fill="#5E17EB" />
          <circle cx="22" cy="14" r="4" fill="#7A003C" />
          <text x="34" y="27" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="22" fill="#1C0D37" letterSpacing="0.5">sanofi</text>
        </svg>
      );

    case "Medtronic":
      return (
        <svg className="h-8 sm:h-9 w-auto" viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 30V10l8 12 8-12v20h-4V16l-6 9-6-9v14H6z" fill="#00A3E0" />
          <text x="38" y="27" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="20" fill="#002B49" letterSpacing="-0.5">Medtronic</text>
        </svg>
      );

    case "Philips Healthcare":
      return (
        <svg className="h-8 sm:h-9 w-auto" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="70" y="27" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="22" fill="#0B5ED7" letterSpacing="2">PHILIPS</text>
        </svg>
      );

    default:
      return (
        <span className="font-[family-name:var(--font-playfair)] text-lg sm:text-xl font-bold text-[#0B2341]">
          {name}
        </span>
      );
  }
}

export default function PartnersSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  // Duplicate partners array to enable seamless marquee looping
  const duplicatedPartners = [...PARTNERS, ...PARTNERS];

  return (
    <section id="partners" className="relative py-14 sm:py-18 lg:py-20 bg-[#041226] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">

          {/* Left Column (STATIC): Section Header & Call to Action */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 text-left z-10"
          >
            {/* Top Tagline */}
            <div className="text-[#D6A54A] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-3 sm:mb-4">
              OUR GLOBAL PARTNERS
            </div>

            {/* Main Headline */}
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold text-white leading-[1.18] mb-5 sm:mb-7 tracking-tight">
              Trusted by 40+ Leading
              <br className="hidden sm:inline" /> Global Brands
            </h2>
          </motion.div>

          {/* Right Column (SCROLLING): White Squircle Brand Cards Marquee */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 relative overflow-hidden"
          >
            {/* Soft gradient fade masks on edges */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 bg-gradient-to-r from-[#041226] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 bg-gradient-to-l from-[#041226] to-transparent z-10 pointer-events-none" />

            {/* Infinite Horizontal Auto-Scroll Marquee */}
            <div className="py-2">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 25,
                    ease: "linear",
                  },
                }}
                className="flex gap-4 sm:gap-5 w-max"
              >
                {duplicatedPartners.map((partner, i) => (
                  <div
                    key={`${partner.name}-${i}`}
                    className="flex-shrink-0 w-36 sm:w-44 lg:w-48 h-20 sm:h-24 bg-white rounded-2xl p-4 flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] group cursor-pointer"
                  >
                    <PartnerLogo name={partner.name} />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}