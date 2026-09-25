"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const ids = links.map((l) => l.href.slice(1));
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 130) { setActive(ids[i]); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#04091a]/95 backdrop-blur-xl border-b border-white/6 shadow-xl shadow-black/20" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => go("#hero")} className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0078d4] to-[#742774] flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-[#0078d4]/20">
            SS
          </div>
          <div className="hidden sm:block">
            <div className="text-white text-sm font-semibold leading-tight">Salma Shaik</div>
            <div className="text-[#5ea6f5]/60 text-[10px] font-medium leading-tight">Power Apps &amp; D365 CE</div>
          </div>
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => go(l.href)}
              className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                active === l.href.slice(1)
                  ? "text-[#5ea6f5] bg-[#0078d4]/10"
                  : "text-white/55 hover:text-white hover:bg-white/5"
              }`}
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="mailto:salmashaik13579@gmail.com"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-[#0078d4] hover:bg-[#106ebe] text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#0078d4]/25 hover:-translate-y-px"
          >
            <Mail size={13} />
            Hire Me
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white/60 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-[#04091a]/98 backdrop-blur-xl border-t border-white/6"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <button
                  key={l.href}
                  onClick={() => go(l.href)}
                  className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    active === l.href.slice(1) ? "text-[#5ea6f5] bg-[#0078d4]/10" : "text-white/65 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {l.label}
                </button>
              ))}
              <a
                href="mailto:salmashaik13579@gmail.com"
                className="mt-2 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#0078d4] text-white text-sm font-semibold rounded-lg"
                onClick={() => setOpen(false)}
              >
                <Mail size={13} /> Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
