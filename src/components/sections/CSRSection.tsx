"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, Users, Globe, GraduationCap, Stethoscope } from "lucide-react";

const csrItems = [
  {
    icon: Heart,
    title: "Community Health",
    description: "Organizing health awareness campaigns, free medical screening events, and wellness programs to support the wellbeing of communities across Bahrain.",
    stat: "5000+",
    statLabel: "Lives Impacted",
  },
  {
    icon: GraduationCap,
    title: "Education & Training",
    description: "Investing in the next generation of healthcare professionals through scholarship programs, internships, and training partnerships with local universities.",
    stat: "50+",
    statLabel: "Scholarships Awarded",
  },
  {
    icon: Globe,
    title: "Environmental Stewardship",
    description: "Implementing sustainable practices across our operations including waste reduction programs, energy-efficient facilities, and green packaging initiatives.",
    stat: "40%",
    statLabel: "Waste Reduction",
  },
  {
    icon: Stethoscope,
    title: "Healthcare Access",
    description: "Supporting underserved communities with access to essential medicines and medical supplies through charitable distribution and partnerships.",
    stat: "15+",
    statLabel: "Communities Served",
  },
];

export default function CSRSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="csr" className="relative py-24 md:py-32 bg-[#F4F5F7]">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#D6A54A] text-sm font-medium tracking-[0.2em] uppercase">Giving Back</span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-bold text-[#0B2341] mt-4 mb-4">
            Corporate Social Responsibility
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Making a meaningful difference in the communities we serve through health, education, environmental, and social impact initiatives.
          </p>
        </motion.div>

        {/* Impact cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {csrItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.7 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative rounded-[24px] p-8 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="w-14 h-14 rounded-[16px] bg-gradient-to-br from-[#0B2341] to-[#1a3a5c] flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-[#D6A54A]" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#0B2341] mb-2 font-[family-name:var(--font-playfair)]">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  {/* Stat */}
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-gradient-gold font-[family-name:var(--font-playfair)]">{item.stat}</span>
                    <span className="text-xs text-gray-500">{item.statLabel}</span>
                  </div>
                </div>
              </div>
              {/* Bottom line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D6A54A] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}