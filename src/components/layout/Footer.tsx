"use client";

import { Phone, Mail, MapPin, ArrowRight, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { useState } from "react";

const companyLinks = [
  { label: "About Us", href: "#about" },
  { label: "Our History", href: "#about" },
  { label: "Leadership", href: "#chairman" },
  { label: "Careers", href: "#" },
];

const divisionLinks = [
  { label: "Pharmaceuticals", href: "#divisions" },
  { label: "Medical Devices", href: "#divisions" },
  { label: "Laboratory Solutions", href: "#divisions" },
  { label: "Consumer Healthcare", href: "#divisions" },
  { label: "Engineering Services", href: "#divisions" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer id="contact" className="relative bg-[#061526] pt-20 pb-8 overflow-hidden">
      {/* Molecular pattern */}
      <div className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(214,165,74,0.4) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Top gold line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[1px] bg-gradient-to-r from-transparent via-[#D6A54A] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-[12px] bg-gradient-to-br from-[#D6A54A] to-[#b8872e] flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M12 2L12 6M12 6C10.5 6 9.3 7 9 8.5L8 14H16L15 8.5C14.7 7 13.5 6 12 6Z" />
                  <line x1="8" y1="14" x2="16" y2="14" />
                  <line x1="10" y1="14" x2="10" y2="18" />
                  <line x1="14" y1="14" x2="14" y2="18" />
                  <line x1="8" y1="18" x2="16" y2="18" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">Wael Pharmacy</h3>
                <p className="text-[#D6A54A] text-xs">EST. 1966</p>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Bahrain&apos;s trusted pharmaceutical distribution and healthcare solutions partner for over 58 years.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-[12px] border border-white/10 flex items-center justify-center text-white/40 hover:text-[#D6A54A] hover:border-[#D6A54A]/30 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-6 tracking-wide">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/40 text-sm hover:text-[#D6A54A] transition-colors duration-300 relative inline-block group"
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-[#D6A54A] group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Divisions links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-6 tracking-wide">Divisions</h4>
            <ul className="space-y-3">
              {divisionLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/40 text-sm hover:text-[#D6A54A] transition-colors duration-300 relative inline-block group"
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-[#D6A54A] group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-6 tracking-wide">Contact</h4>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D6A54A] flex-shrink-0 mt-1" strokeWidth={1.5} />
                <span className="text-white/40 text-sm">Manama, Kingdom of Bahrain</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D6A54A] flex-shrink-0" strokeWidth={1.5} />
                <a href="tel:+97317000000" className="text-white/40 text-sm hover:text-[#D6A54A] transition-colors duration-300">
                  +973 1 700 0000
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#D6A54A] flex-shrink-0" strokeWidth={1.5} />
                <a href="mailto:info@waelpharmacy.com" className="text-white/40 text-sm hover:text-[#D6A54A] transition-colors duration-300">
                  info@waelpharmacy.com
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <h4 className="text-white font-semibold text-sm mb-3 tracking-wide">Newsletter</h4>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="flex-1 px-4 py-2.5 rounded-[12px] bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#D6A54A]/50 transition-colors duration-300"
              />
              <button className="w-10 h-10 rounded-[12px] bg-[#D6A54A] flex items-center justify-center hover:bg-[#e4be7a] transition-colors duration-300">
                <ArrowRight className="w-4 h-4 text-[#0B2341]" />
              </button>
            </div>
          </div>
        </div>

        {/* Certifications row */}
        <div className="border-t border-white/5 pt-8 mb-8">
          <div className="flex flex-wrap justify-center gap-6">
            {["GDP Certified", "ISO 9001:2015", "NHRA Compliant", "Cold Chain Validated"].map((cert) => (
              <div key={cert} className="px-4 py-2 rounded-full border border-white/10 text-white/30 text-xs">
                {cert}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            {new Date().getFullYear()} Wael Pharmacy Co. W.L.L. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/30 text-xs hover:text-[#D6A54A] transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-white/30 text-xs hover:text-[#D6A54A] transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-white/30 text-xs hover:text-[#D6A54A] transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}