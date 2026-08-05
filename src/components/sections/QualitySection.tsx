"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CERTIFICATIONS } from "@/data/siteData";
import { ShieldCheck, BadgeCheck, FileCheck, Thermometer, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  BadgeCheck,
  FileCheck,
  Thermometer,
};

export default function QualitySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="quality" className="relative py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#D6A54A] text-sm font-medium tracking-[0.2em] uppercase">Standards</span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-bold text-[#0B2341] mt-4 mb-4">
            Quality & Certifications
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our commitment to quality is validated by internationally recognized certifications and regulatory compliance across all operations.
          </p>
        </motion.div>

        {/* Certification cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS.map((cert, i) => {
            const IconComp = iconMap[cert.icon];
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: 0.1 * i, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
                className="group relative rounded-[24px] p-8 bg-[#F4F5F7] hover:bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden text-center"
              >
                {/* Spotlight effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "radial-gradient(circle at 50% 0%, rgba(214,165,74,0.08), transparent 60%)",
                  }}
                />

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0B2341]/[0.05] to-[#D6A54A]/[0.08] flex items-center justify-center mx-auto mb-6 group-hover:shadow-[0_0_25px_rgba(214,165,74,0.15)] transition-shadow duration-500">
                    {IconComp && <IconComp className="w-7 h-7 text-[#0B2341] group-hover:text-[#D6A54A] transition-colors duration-300" strokeWidth={1.5} />}
                  </div>

                  <h3 className="text-lg font-bold text-[#0B2341] mb-3">{cert.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{cert.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}