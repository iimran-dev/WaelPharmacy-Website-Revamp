"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { KPI_STATS } from "@/data/siteData";

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span>
      {count}
      <span className="text-gradient-gold">{suffix}</span>
    </span>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export default function KPISection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {KPI_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative rounded-[24px] p-6 md:p-8 text-center glass-card shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Gold accent line top */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-gradient-to-r from-transparent via-[#D6A54A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[#0B2341] mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={isInView} />
              </div>
              <div className="text-sm font-semibold text-[#0B2341] mb-1">{stat.label}</div>
              <div className="text-xs text-gray-500 hidden md:block">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}