"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import Image from "next/image";
import { NAV_ITEMS } from "@/data/siteData";
import { Button } from "@/components/ui/button";

const SCROLL_THRESHOLD = 50;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Track active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    NAV_ITEMS.forEach((item) => {
      const id = item.href.replace("#", "");
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={
          "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 " +
          (isScrolled
            ? "bg-[#0B2341]/95 shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-xl"
            : "bg-transparent backdrop-blur-none")
        }
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5 transition-all duration-500">
          {/* Official Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="group flex shrink-0 items-center transition-opacity duration-300 hover:opacity-90 py-0.5"
          >
            <Image
              src="/logo.svg"
              alt="Wael Pharmacy Official Logo"
              width={220}
              height={65}
              className="h-10 sm:h-12 lg:h-14 w-auto object-contain min-w-[150px] sm:min-w-[180px]"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1.5 lg:flex">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={
                    "group relative px-3.5 py-2 text-[13px] font-semibold tracking-wide transition-colors duration-300 " +
                    (isActive
                      ? "text-[#D6A54A]"
                      : "text-white/80 hover:text-white")
                  }
                >
                  {item.label}
                  <span
                    className={
                      "absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#D6A54A] transition-all duration-300 " +
                      (isActive
                        ? "w-6"
                        : "w-0 group-hover:w-6")
                    }
                  />
                </a>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="tel:+97317377000"
              className="flex items-center gap-2 text-xs font-medium text-white/70 transition-colors duration-300 hover:text-[#D6A54A]"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>+973 1737 7000</span>
            </a>
            <Button
              onClick={() => handleNavClick("#contact")}
              size="sm"
              className="rounded-lg bg-[#041226] border border-white/20 hover:border-white/40 px-5 text-xs font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#08203e]"
            >
              Partner With Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-white/80 transition-all duration-300 hover:bg-white/10 hover:text-white lg:hidden"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait">
              {isMobileOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-5 w-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#041226] backdrop-blur-3xl lg:hidden overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex min-h-full flex-col justify-start pt-28 pb-12 px-6 sm:px-8"
            >
              <nav className="flex flex-col gap-1">
                {NAV_ITEMS.map((item, index) => {
                  const sectionId = item.href.replace("#", "");
                  const isActive = activeSection === sectionId;
                  return (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{
                        duration: 0.35,
                        delay: 0.05 * index,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={
                        "group flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium transition-all duration-300 " +
                        (isActive
                          ? "bg-[#D6A54A]/10 text-[#D6A54A]"
                          : "text-white/70 hover:bg-white/5 hover:text-white")
                      }
                    >
                      <span>{item.label}</span>
                      <ChevronRight
                        className={
                          "h-4 w-4 transition-all duration-300 " +
                          (isActive
                            ? "translate-x-0 text-[#D6A54A]"
                            : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100")
                        }
                      />
                    </motion.a>
                  );
                })}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.5 }}
                className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8"
              >
                <a
                  href="tel:+97317377000"
                  className="flex items-center gap-3 text-sm text-white/60 transition-colors duration-300 hover:text-[#D6A54A]"
                >
                  <Phone className="h-4 w-4" />
                  <span>+973 1737 7000</span>
                </a>
                <Button
                  onClick={() => handleNavClick("#contact")}
                  size="lg"
                  className="w-full rounded-full bg-gradient-to-r from-[#D6A54A] to-[#b8872e] text-sm font-semibold text-white shadow-[0_0_20px_rgba(214,165,74,0.25)]"
                >
                  Get in Touch
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ─── Pharmacy Lamp SVG Icon ─── */
function PharmacyLampIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Lamp bowl */}
      <path
        d="M12 2C8.5 2 5 4.5 5 8.5C5 11.5 7 13.5 9 14.5V17H15V14.5C17 13.5 19 11.5 19 8.5C19 4.5 15.5 2 12 2Z"
        fill="currentColor"
        fillOpacity="0.9"
      />
      {/* Glow rays */}
      <path
        d="M12 0V1.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M4.22 4.22L5.28 5.28"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M19.78 4.22L18.72 5.28"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M2 9H3.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M20.5 9H22"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.7"
      />
      {/* Stem */}
      <rect x="10.5" y="17" width="3" height="3" rx="0.5" fill="currentColor" />
      {/* Base */}
      <path
        d="M9 20H15L14.5 22H9.5L9 20Z"
        fill="currentColor"
      />
      {/* Rx cross on bowl */}
      <rect x="10.5" y="6" width="3" height="0.8" rx="0.4" fill="white" fillOpacity="0.9" />
      <rect x="11.6" y="4.9" width="3" height="0.8" rx="0.4" fill="white" fillOpacity="0.9" transform="rotate(90 13 5.3)" />
    </svg>
  );
}
