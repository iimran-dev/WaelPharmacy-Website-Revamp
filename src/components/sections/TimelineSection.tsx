"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowRight, ChevronRight, Calendar } from "lucide-react";

const MILESTONES = [
  {
    year: "1966",
    title: "Company Incorporated",
    summary: "Company incorporated in Bahrain",
    detail: "Wael Pharmacy Co. W.L.L. was established in Manama, initiating a legacy of trust and quality healthcare distribution across the Kingdom of Bahrain.",
  },
  {
    year: "1980s",
    title: "Global Partnerships",
    summary: "Expanded product portfolio & global partnerships",
    detail: "Forged strategic alliances with leading multinational pharmaceutical and biomedical leaders, significantly enhancing medical access.",
  },
  {
    year: "2000s",
    title: "Cold Chain Infrastructure",
    summary: "Advanced logistics & cold chain infrastructure",
    detail: "Built GDP-compliant temperature-controlled logistics centers and automated warehousing to ensure absolute product safety.",
  },
  {
    year: "2020s",
    title: "Digital Transformation",
    summary: "Digital transformation for a healthier tomorrow",
    detail: "Pioneered digital inventory management, AI-driven supply chain analytics, and modern healthcare technology platforms.",
  },
];

export default function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section id="about-timeline" ref={containerRef} className="relative pt-16 sm:pt-24 lg:pt-28 pb-20 lg:pb-32 bg-[#FAFBFD] overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-[#D6A54A]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 rounded-full bg-[#06182E]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Who We Are & Overview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-6 text-left"
          >
            {/* Subtitle */}
            <div className="text-[#D6A54A] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              WHO WE ARE
            </div>

            {/* Main Headline */}
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#06182E] leading-[1.2] mb-6">
              A Legacy of Trust.
              <br />
              <span className="text-[#06182E]">A Future of Innovation.</span>
            </h2>

            {/* Paragraph */}
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-10 font-normal max-w-xl">
              Established in 1966, Wael Pharmacy is one of the largest distributors of pharmaceutical and biomedical products in the Kingdom of Bahrain. We represent leading global brands and deliver excellence through our people, technology, and unwavering commitment to quality.
            </p>

            {/* Action Button */}
            <div>
              <a
                href="#about"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg border border-[#D6A54A] text-[#D6A54A] hover:bg-[#D6A54A] hover:text-white font-medium text-sm sm:text-base transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Clean Vertical Timeline Card matching reference */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-6"
          >
            <div className="bg-white rounded-[24px] lg:rounded-[32px] p-6 sm:p-10 lg:p-12 shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-gray-100/90 relative">
              
              {/* Vertical Timeline List */}
              <div className="relative pl-2 sm:pl-4">
                
                {/* Connecting Vertical Line */}
                <div className="absolute top-4 bottom-6 left-[19px] sm:left-[27px] w-[2px] bg-gradient-to-b from-[#D6A54A] via-[#D6A54A]/40 to-[#D6A54A]/15" />

                <div className="space-y-6 sm:space-y-7">
                  {MILESTONES.map((milestone, idx) => {
                    const isActive = activeIndex === idx;
                    return (
                      <div
                        key={milestone.year}
                        onClick={() => setActiveIndex(idx)}
                        className="group relative flex items-start gap-4 sm:gap-6 cursor-pointer py-2"
                      >
                        {/* Target Node Bullet */}
                        <div className="relative z-10 shrink-0 mt-0.5">
                          <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 transition-all duration-300 flex items-center justify-center bg-white ${
                            isActive
                              ? "border-[#D6A54A] ring-4 ring-[#D6A54A]/15 scale-110 shadow-sm"
                              : "border-[#D6A54A]/50 group-hover:border-[#D6A54A]"
                          }`}>
                            <div className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                              isActive ? "bg-[#D6A54A] scale-110" : "bg-[#D6A54A]/60 group-hover:bg-[#D6A54A]"
                            }`} />
                          </div>
                        </div>

                        {/* Row Content */}
                        <div className="flex-1 border-b border-gray-100/80 pb-5">
                          <div className="flex items-baseline gap-4 sm:gap-6">
                            {/* Year */}
                            <span className={`font-[family-name:var(--font-playfair)] font-bold text-lg sm:text-xl transition-colors duration-300 w-16 sm:w-20 shrink-0 ${
                              isActive ? "text-[#D6A54A]" : "text-[#D6A54A]/80 group-hover:text-[#D6A54A]"
                            }`}>
                              {milestone.year}
                            </span>

                            {/* Summary */}
                            <span className={`text-xs sm:text-sm lg:text-base font-medium transition-colors duration-300 leading-snug ${
                              isActive ? "text-[#06182E]" : "text-gray-600 group-hover:text-[#06182E]"
                            }`}>
                              {milestone.summary}
                            </span>
                          </div>

                          {/* Smooth expandable detail on active selection */}
                          <AnimatePresence>
                            {isActive && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.35, ease: "easeInOut" }}
                                className="overflow-hidden"
                              >
                                <div className="mt-3 pl-0 sm:pl-24 text-xs sm:text-sm text-gray-500 leading-relaxed border-l-2 border-[#D6A54A]/40 my-2 pt-0.5">
                                  {milestone.detail}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}