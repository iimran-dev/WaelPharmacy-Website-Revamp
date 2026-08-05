"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { WHY_FEATURES } from "@/data/siteData";
import { ShieldCheck, Thermometer, Award, FileCheck, Wrench, Truck, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  Thermometer,
  Award,
  FileCheck,
  Wrench,
  Truck,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function WhySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 md:py-32 bg-[#F4F5F7]">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#D6A54A] text-sm font-medium tracking-[0.2em] uppercase">Why Choose Us</span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-bold text-[#0B2341] mt-4 mb-4">
            Why Wael Pharmacy
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Six decades of pharmaceutical excellence built on foundations of quality, innovation, and an unwavering commitment to healthcare standards.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {WHY_FEATURES.map((feature) => {
            const IconComp = iconMap[feature.icon];
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative rounded-[24px] p-8 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0B2341]/[0.03] to-[#D6A54A]/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-[16px] bg-gradient-to-br from-[#0B2341] to-[#1a3a5c] flex items-center justify-center mb-6 group-hover:shadow-[0_0_20px_rgba(214,165,74,0.2)] transition-shadow duration-500">
                    {IconComp && <IconComp className="w-6 h-6 text-[#D6A54A]" strokeWidth={1.5} />}
                  </div>

                  <h3 className="text-xl font-semibold text-[#0B2341] mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>

                {/* Gold line bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D6A54A] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}