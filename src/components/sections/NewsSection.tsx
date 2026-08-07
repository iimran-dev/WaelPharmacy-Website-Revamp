"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ChevronDown, Clock, Calendar, X, Sparkles } from "lucide-react";
import { assetPath } from "@/utils/basePath";

const BLOG_POSTS = [
  {
    id: "post-1",
    category: "INDUSTRY NEWS",
    title: "The Future of Healthcare Distribution in Bahrain",
    date: "May 10, 2025",
    readTime: "5 min read",
    image: assetPath("/images/news-1.jpg"),
    content: "Healthcare logistics in Bahrain is undergoing a rapid evolution. From AI-driven demand forecasting to automated cold storage, Wael Pharmacy continues to lead the market with cutting-edge infrastructure and uncompromised quality standards.",
  },
  {
    id: "post-2",
    category: "COMPANY NEWS",
    title: "Wael Pharmacy Expands Cold Chain Capacity",
    date: "April 28, 2025",
    readTime: "4 min read",
    image: assetPath("/images/news-2.jpg"),
    content: "Our newly commissioned cold-chain facility doubles our storage volume for temperature-sensitive biologics and vaccines, guaranteeing 2-8°C precision monitoring from warehouse arrival to hospital delivery.",
  },
  {
    id: "post-3",
    category: "HEALTHCARE TIPS",
    title: "Ensuring Quality & Safety in Every Step",
    date: "April 15, 2025",
    readTime: "6 min read",
    image: assetPath("/images/news-3.jpg"),
    content: "Quality assurance is at the core of our operations. Explore how our multi-stage inspection protocols, GDP compliance, and continuous staff training protect healthcare integrity across the Kingdom.",
  },
];

const FAQS = [
  {
    question: "What products does Wael Pharmacy distribute?",
    answer: "We distribute a comprehensive portfolio of over 1,500 products including prescription medications, medical devices, laboratory equipment, consumer healthcare products, and diagnostic solutions from 40+ global pharmaceutical brands.",
  },
  {
    question: "How does Wael ensure product quality?",
    answer: "We hold full GDP (Good Distribution Practice) certification and ISO 9001:2015 quality management compliance, enforcing multi-layer quality inspections at every stage of receiving, storage, and nationwide delivery.",
  },
  {
    question: "Do you offer cold chain logistics?",
    answer: "Yes, we operate state-of-the-art cold chain infrastructure with temperature-controlled warehousing (2-8°C), validated transport containers, and real-time temperature telemetry.",
  },
  {
    question: "How can we become a partner?",
    answer: "We welcome partnerships with pharmaceutical manufacturers and medical device brands. Contact our business development team directly via our partner form or email partnerships@waelpharmacy.com.",
  },
];

export default function NewsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });

  const [openFaq, setOpenFaq] = useState<number | null>(0); // First FAQ open by default or collapsible
  const [selectedPost, setSelectedPost] = useState<typeof BLOG_POSTS[0] | null>(null);

  return (
    <section id="news" ref={containerRef} className="relative py-20 lg:py-32 bg-[#FAFBFD] overflow-hidden">
      {/* Background light glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-[#D6A54A]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#06182E]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Side: Insights & Updates (Blog Cards) - 7 Cols */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            {/* Header */}
            <div>
              <div className="flex items-end justify-between mb-8 sm:mb-10">
                <div>
                  <div className="text-[#D6A54A] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3">
                    LATEST FROM OUR BLOG
                  </div>
                  <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-semibold text-[#06182E]">
                    Insights & Updates
                  </h2>
                </div>

                {/* View All Posts Button */}
                <a
                  href="#news"
                  className="group inline-flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#06182E] hover:text-[#D6A54A] transition-colors"
                >
                  <span>View All Posts</span>
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#D6A54A] flex items-center justify-center text-[#D6A54A] group-hover:bg-[#D6A54A] group-hover:text-white transition-all shadow-sm">
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </a>
              </div>

              {/* 3 Blog Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                {BLOG_POSTS.map((post, idx) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 25 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.1 * idx, duration: 0.6 }}
                    onClick={() => setSelectedPost(post)}
                    className="group bg-white rounded-2xl p-4 border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden"
                  >
                    <div>
                      {/* Image Thumbnail */}
                      <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-slate-100">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Category Badge */}
                      <div className="text-[10px] font-bold text-[#D6A54A] tracking-wider uppercase mb-2">
                        {post.category}
                      </div>

                      {/* Post Title */}
                      <h3 className="font-[family-name:var(--font-playfair)] text-sm sm:text-base font-bold text-[#06182E] leading-snug mb-3 line-clamp-2 group-hover:text-[#D6A54A] transition-colors">
                        {post.title}
                      </h3>
                    </div>

                    {/* Date & Read Time */}
                    <div className="text-[11px] text-gray-400 font-medium pt-2 border-t border-gray-50 flex items-center gap-1.5">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Frequently Asked Questions (FAQ Accordions) - 5 Cols */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              {/* Header */}
              <div className="mb-8 sm:mb-10">
                <div className="text-[#D6A54A] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3">
                  FREQUENTLY ASKED QUESTIONS
                </div>
                <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-semibold text-[#06182E] leading-tight">
                  Answers to Common
                  <br />
                  Questions
                </h2>
              </div>

              {/* 4 Accordions List */}
              <div className="space-y-3.5">
                {FAQS.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className={`rounded-2xl border transition-all duration-300 overflow-hidden bg-white ${
                        isOpen
                          ? "border-[#D6A54A]/40 shadow-sm"
                          : "border-gray-100 hover:border-gray-200 shadow-[0_4px_15px_rgba(0,0,0,0.02)]"
                      }`}
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className="w-full flex items-center justify-between p-4 sm:p-5 text-left gap-4"
                      >
                        <span className="font-semibold text-xs sm:text-sm text-[#06182E] leading-snug">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-300 ${
                            isOpen ? "rotate-180 text-[#D6A54A]" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 pb-5 pt-0 sm:px-5 sm:pb-5 text-xs sm:text-sm text-gray-500 leading-relaxed border-t border-gray-50 mt-1 pt-3">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Right View All FAQs CTA */}
            <div className="mt-8 flex justify-end">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#06182E] hover:text-[#D6A54A] transition-colors"
              >
                <span>View All FAQs</span>
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#D6A54A] flex items-center justify-center text-[#D6A54A] group-hover:bg-[#D6A54A] group-hover:text-white transition-all shadow-sm">
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </a>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Article Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-full max-w-xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 text-white hover:bg-black/70 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header Image */}
              <div className="relative aspect-[16/9] w-full bg-slate-100">
                <Image
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8">
                <div className="text-xs font-bold text-[#D6A54A] tracking-wider uppercase mb-2">
                  {selectedPost.category} • {selectedPost.date}
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl font-bold text-[#06182E] mb-4">
                  {selectedPost.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {selectedPost.content}
                </p>

                <div className="flex justify-end">
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="px-6 py-2.5 rounded-xl bg-[#06182E] text-white text-xs font-semibold hover:bg-[#0c2847] transition-colors"
                  >
                    Close Article
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}