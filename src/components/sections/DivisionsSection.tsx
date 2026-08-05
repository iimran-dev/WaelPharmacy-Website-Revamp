"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { DIVISIONS } from "@/data/siteData";
import { ArrowRight, Pill, HeartPulse, Microscope, ShoppingBag, Settings, Warehouse, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Pill,
  HeartPulse,
  Microscope,
  ShoppingBag,
  Settings,
  Warehouse,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function DivisionsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="divisions" className="relative py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#D6A54A] text-sm font-medium tracking-[0.2em] uppercase">What We Do</span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-bold text-[#0B2341] mt-4 mb-4">
            Business Divisions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Six specialized divisions working in harmony to deliver comprehensive healthcare solutions across the Kingdom of Bahrain.
          </p>
        </motion.div>

        {/* Division cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {DIVISIONS.map((division) => {
            const IconComp = iconMap[division.icon];
            return (
              <motion.div
                key={division.title}
                variants={cardVariants}
                className="group relative rounded-[24px] overflow-hidden cursor-pointer"
              >
                {/* Card background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${division.gradient}`} />

                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: `radial-gradient(circle at 80% 20%, rgba(214,165,74,0.3), transparent 50%)`,
                  }}
                />

                <div className="relative z-10 p-8 md:p-10 min-h-[320px] flex flex-col justify-between">
                  <div>
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-[20px] bg-white/10 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-[#D6A54A]/20 group-hover:border-[#D6A54A]/30 transition-all duration-500">
                      {IconComp && <IconComp className="w-7 h-7 text-[#D6A54A]" strokeWidth={1.5} />}
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 font-[family-name:var(--font-playfair)]">
                      {division.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {division.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="mt-8 flex items-center gap-2 text-[#D6A54A] text-sm font-medium">
                    <span>View Division</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#D6A54A]/0 group-hover:bg-[#D6A54A]/5 transition-colors duration-500" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}