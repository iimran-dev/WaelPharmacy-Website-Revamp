"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { TIMELINE_MILESTONES } from "@/data/siteData";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function TimelineSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!timelineRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(timelineRef.current, {
        xPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 20%",
          end: "bottom 20%",
          scrub: 1,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 bg-gradient-navy overflow-hidden">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="text-[#D6A54A] text-sm font-medium tracking-[0.2em] uppercase">Our Journey</span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-bold text-white mt-4 mb-4">
            A Legacy of Excellence
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Over five decades of dedication to Bahrain&apos;s healthcare sector, marking transformative milestones that shaped our identity.
          </p>
        </motion.div>
      </div>

      {/* Horizontal scrolling timeline */}
      <div className="relative">
        <div ref={timelineRef} className="flex gap-8 px-6 md:px-16 w-max">
          {TIMELINE_MILESTONES.map((milestone, i) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              className="relative flex-shrink-0 w-72 md:w-80"
            >
              {/* Connector line */}
              {i < TIMELINE_MILESTONES.length - 1 && (
                <div className="absolute top-8 left-full w-8 h-[2px] bg-gradient-to-r from-[#D6A54A]/60 to-transparent" />
              )}

              <div className="group rounded-[24px] p-8 glass-card-dark hover:bg-white/10 transition-all duration-500 cursor-default">
                {/* Year */}
                <div className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-gradient-gold mb-4">
                  {milestone.year}
                </div>
                {/* Dot indicator */}
                <div className="w-3 h-3 rounded-full bg-[#D6A54A] mb-4 animate-glow" />
                {/* Title */}
                <h3 className="text-white font-semibold text-lg mb-3">
                  {milestone.title}
                </h3>
                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0B2341] to-transparent" />
    </section>
  );
}