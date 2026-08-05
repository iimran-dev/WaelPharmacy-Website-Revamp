"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { NEWS_ARTICLES } from "@/data/siteData";
import { ArrowRight, Clock } from "lucide-react";

export default function NewsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="news" className="relative py-24 md:py-32 bg-[#F4F5F7]">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <div>
            <span className="text-[#D6A54A] text-sm font-medium tracking-[0.2em] uppercase">Latest Updates</span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-bold text-[#0B2341] mt-4">
              News & Insights
            </h2>
          </div>
          <motion.a
            href="#"
            className="group mt-4 md:mt-0 inline-flex items-center gap-2 text-[#0B2341] font-medium text-sm hover:text-[#D6A54A] transition-colors duration-300"
          >
            View All Articles
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>
        </motion.div>

        {/* Blog cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {NEWS_ARTICLES.map((article, i) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.7 }}
              className="group rounded-[24px] bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0B2341] to-[#1a3a5c]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white/10">WP</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                {/* Category tag */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#D6A54A] text-[#0B2341] text-xs font-semibold">
                  {article.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                  <span>{new Date(article.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                  <span>|</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0B2341] mb-3 line-clamp-2 group-hover:text-[#D6A54A] transition-colors duration-300 leading-snug">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>

                {/* Read More */}
                <div className="mt-4 flex items-center gap-2 text-[#D6A54A] text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}