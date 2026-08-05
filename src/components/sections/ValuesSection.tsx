"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CORPORATE_VALUES } from "@/data/siteData";
import { Shield, Star, Lightbulb, Heart, Handshake, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = { Shield, Star, Lightbulb, Heart, Handshake };

export default function ValuesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#D6A54A] text-sm font-medium tracking-[0.2em] uppercase">Our Foundation</span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-bold text-[#0B2341] mt-4 mb-4">
            Corporate Values
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The core principles that guide every decision, every partnership, and every delivery we make.
          </p>
        </motion.div>

        {/* Values grid */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {CORPORATE_VALUES.map((value, i) => {
            const IconComp = iconMap[value.icon];
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.1 * i, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group flex flex-col items-center text-center w-40 md:w-48"
              >
                {/* Circular icon */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#0B2341]/[0.04] to-[#D6A54A]/[0.06] border border-[#E8EBF0] flex items-center justify-center group-hover:border-[#D6A54A]/30 group-hover:shadow-[0_0_30px_rgba(214,165,74,0.1)] transition-all duration-500">
                    {IconComp && <IconComp className="w-9 h-9 text-[#0B2341] group-hover:text-[#D6A54A] transition-colors duration-300" strokeWidth={1.5} />}
                  </div>
                  {/* Glow ring */}
                  <div className="absolute inset-0 rounded-full border border-[#D6A54A]/0 group-hover:border-[#D6A54A]/20 transition-all duration-500 scale-110" />
                </div>

                <h3 className="text-lg font-bold text-[#0B2341] mb-2 font-[family-name:var(--font-playfair)]">
                  {value.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}