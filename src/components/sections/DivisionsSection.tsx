"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowRight, Pill, HeartPulse, Microscope, Syringe, ShieldCheck, X, ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";

const DIVISIONS = [
  {
    id: "pharmaceutical",
    icon: Pill,
    title: "Pharmaceutical",
    subtitle: "Rx & Specialty Medicines",
    description: "Wide range of human pharmaceutical products & specialty therapies.",
    longDescription: "Our Pharmaceutical Division partners with leading global manufacturers to supply branded generics, specialty medicines, cold-chain biologics, and essential pharmaceuticals across all public and private healthcare channels in Bahrain.",
    highlights: ["Global Brand Representation", "Cold Chain Logistics", "GDP Certified Storage"],
  },
  {
    id: "medical-equipment",
    icon: HeartPulse,
    title: "Medical Equipment",
    subtitle: "Biomedical & Diagnostic Tech",
    description: "Advanced medical equipment and diagnostic technologies.",
    longDescription: "Delivering state-of-the-art diagnostic imaging, life support systems, patient monitoring, and surgical suites backed by our dedicated healthcare engineering team for installation and maintenance.",
    highlights: ["Turnkey Hospital Solutions", "24/7 Biomedical Engineering", "Preventive Maintenance"],
  },
  {
    id: "laboratory",
    icon: Microscope,
    title: "Laboratory",
    subtitle: "Instruments & Reagents",
    description: "High-precision lab instruments, reagents, and consumables.",
    longDescription: "Equipping clinical, research, and diagnostic laboratories with high-throughput analyzers, quality reagents, testing kits, and laboratory automation technology.",
    highlights: ["Clinical Diagnostics", "Quality Reagents", "Laboratory Automation"],
  },
  {
    id: "surgical",
    icon: Syringe,
    title: "Surgical & Disposable",
    subtitle: "Sterile Medical Disposables",
    description: "High-quality surgical tools, drapes, and sterile disposables.",
    longDescription: "Providing hospitals and clinics with premium single-use surgical drapes, gowns, infection control products, advanced wound care solutions, and sterile surgical disposables.",
    highlights: ["Infection Control", "Sterile Disposables", "Wound Care Solutions"],
  },
  {
    id: "consumer",
    icon: ShieldCheck,
    title: "Healthcare Consumer",
    subtitle: "OTC & Wellness Products",
    description: "Trusted over-the-counter and wellness healthcare essentials.",
    longDescription: "Distributing premier OTC medicines, vitamins, wellness supplements, personal care, and oral hygiene products to retail pharmacies, supermarkets, and wellness centers across Bahrain.",
    highlights: ["Retail Pharmacy Distribution", "Wellness & OTC Brands", "Nationwide Reach"],
  },
];

export default function DivisionsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });
  const [selectedDivision, setSelectedDivision] = useState<typeof DIVISIONS[0] | null>(null);

  return (
    <section id="divisions" ref={containerRef} className="relative py-16 sm:py-24 lg:py-32 bg-[#FAFBFD] overflow-hidden">
      {/* Background ambient light mesh */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#D6A54A]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[#06182E]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 lg:mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-left max-w-xl"
          >
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 text-[#D6A54A] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D6A54A]" />
              <span>OUR DIVISIONS</span>
            </div>

            {/* Headline */}
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#06182E] leading-[1.18]">
              Comprehensive Solutions
              <br />
              <span className="text-[#06182E]">for Every Need</span>
            </h2>
          </motion.div>

          {/* Top Right Action */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="shrink-0"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 text-xs sm:text-sm font-semibold text-[#06182E] hover:text-[#D6A54A] transition-colors"
            >
              <span>View All Divisions</span>
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#D6A54A] flex items-center justify-center text-[#D6A54A] group-hover:bg-[#D6A54A] group-hover:text-white transition-all shadow-sm">
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </div>
            </a>
          </motion.div>
        </div>

        {/* Responsive Grid: 1 col on mobile, 2 cols on tablets (640px-1279px) with 5th card centered, 5 cols on desktop (1280px+) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
          {DIVISIONS.map((division, index) => {
            const Icon = division.icon;
            const isFifthOnTablet = index === 4;
            return (
              <motion.div
                key={division.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.08 * index }}
                onClick={() => setSelectedDivision(division)}
                className={`group relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-7 border border-slate-200/80 shadow-[0_8px_25px_rgba(0,0,0,0.03)] hover:shadow-2xl hover:-translate-y-1.5 hover:border-[#D6A54A]/40 transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden active:scale-[0.99] ${
                  isFifthOnTablet ? "sm:col-span-2 lg:col-span-1 sm:max-w-md sm:mx-auto lg:max-w-none lg:mx-0 w-full" : ""
                }`}
              >
                {/* Gold Gradient Top Accent Bar on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D6A54A]/30 via-[#D6A54A] to-[#D6A54A]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Icon & Subtitle Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#06182E]/5 group-hover:bg-[#D6A54A] text-[#06182E] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm group-hover:shadow-md">
                      <Icon className="w-6 h-6 stroke-[1.7]" />
                    </div>

                    <span className="text-[10px] font-bold text-[#D6A54A] uppercase tracking-wider bg-[#D6A54A]/10 px-2.5 py-1 rounded-full border border-[#D6A54A]/20">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg sm:text-xl font-bold text-[#06182E] mb-1.5 leading-snug group-hover:text-[#D6A54A] transition-colors">
                    {division.title}
                  </h3>

                  {/* Subtitle */}
                  <div className="text-[11px] sm:text-xs font-semibold text-gray-400 mb-3 uppercase tracking-tight">
                    {division.subtitle}
                  </div>

                  {/* Short Description */}
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {division.description}
                  </p>
                </div>

                {/* Bottom Card Footer Action */}
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#06182E] group-hover:text-[#D6A54A] transition-colors">
                    Learn More
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#D6A54A]/15 text-gray-500 group-hover:text-[#D6A54A] flex items-center justify-center transition-all duration-300">
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Interactive Division Detail Modal */}
      <AnimatePresence>
        {selectedDivision && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
            onClick={() => setSelectedDivision(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Accent line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#06182E] via-[#D6A54A] to-[#06182E]" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedDivision(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-[#06182E] hover:bg-gray-100 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-4 mb-5 pt-2">
                <div className="w-14 h-14 rounded-2xl bg-[#D6A54A]/10 text-[#D6A54A] flex items-center justify-center shrink-0 border border-[#D6A54A]/20">
                  <selectedDivision.icon className="w-7 h-7 stroke-[1.5]" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#D6A54A] uppercase tracking-wider">
                    {selectedDivision.subtitle}
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#06182E]">
                    {selectedDivision.title}
                  </h3>
                </div>
              </div>

              {/* Long Description */}
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
                {selectedDivision.longDescription}
              </p>

              {/* Key Capabilities */}
              <div className="space-y-2.5 mb-6 bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/60">
                <div className="text-[11px] font-bold text-[#06182E] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#D6A54A]" />
                  <span>Key Capabilities & Features</span>
                </div>
                {selectedDivision.highlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#D6A54A] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <a
                  href="#contact"
                  onClick={() => setSelectedDivision(null)}
                  className="flex-1 py-3.5 px-5 rounded-xl bg-[#06182E] hover:bg-[#0c2847] text-white text-xs sm:text-sm font-bold text-center transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <span>Inquire About {selectedDivision.title}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}