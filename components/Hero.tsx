"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, Phone } from "lucide-react";

const crmStack = [
  { label: "Dynamics 365 CE", color: "#0078d4" },
  { label: "Dataverse", color: "#742774" },
  { label: "Power Apps", color: "#742774" },
  { label: "Power Automate", color: "#0066b8" },
  { label: "C# / JavaScript", color: "#7c3aed" },
  { label: "Integrations / Reporting", color: "#0ea5e9" },
];

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#050c1a] via-[#0a1628]/80 to-[#050c1a]" />

      {/* Radial glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0078d4]/8 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#742774]/8 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: text */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#0078d4]/30 bg-[#0078d4]/10 text-[#0078d4] text-xs font-medium mb-6"
          >
            <span className="w-1.5 h-1.5 bg-[#0078d4] rounded-full animate-pulse" />
            Available for New Opportunities
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight"
          >
            Salma{" "}
            <span className="gradient-text">Shaik</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl text-white/70 font-medium mb-6"
          >
            Microsoft Power Apps &amp; Dynamics 365 CE Developer
          </motion.p>

          {/* Supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/50 text-base leading-relaxed max-w-lg mb-8"
          >
            Building enterprise CRM solutions with Dynamics 365 CE, Power Apps,
            Dataverse and Power Automate. 4+ years of experience delivering
            production-grade solutions for global clients.
          </motion.p>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {["4+ Years Experience", "Starlite Infotech", "Guntur, India"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs text-white/60 border border-white/10 rounded-full bg-white/4"
                >
                  {tag}
                </span>
              )
            )}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => scrollTo("projects")}
              className="px-6 py-3 bg-[#0078d4] hover:bg-[#106ebe] text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#0078d4]/30 hover:-translate-y-0.5"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="px-6 py-3 border border-white/20 hover:border-[#0078d4]/50 text-white/80 hover:text-white font-semibold rounded-lg transition-all duration-200 hover:bg-white/5"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Contact quick links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex items-center gap-5 mt-8"
          >
            <a
              href="mailto:sksalma9177@gmail.com"
              className="flex items-center gap-2 text-sm text-white/40 hover:text-[#0078d4] transition-colors"
            >
              <Mail size={14} />
              sksalma9177@gmail.com
            </a>
            <a
              href="tel:+918639420642"
              className="flex items-center gap-2 text-sm text-white/40 hover:text-[#0078d4] transition-colors"
            >
              <Phone size={14} />
              +91 8639420642
            </a>
          </motion.div>
        </div>

        {/* Right: CRM Stack Visual */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:flex flex-col items-center"
        >
          <div className="relative">
            {crmStack.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div
                  className="glass-card rounded-xl px-8 py-3.5 w-72 text-center font-semibold text-sm text-white border-l-2 transition-all duration-300 hover:scale-105"
                  style={{
                    borderLeftColor: item.color,
                    background: `linear-gradient(135deg, ${item.color}10, transparent)`,
                  }}
                >
                  {item.label}
                </div>
                {i < crmStack.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                    className="flex flex-col items-center my-1"
                  >
                    <div
                      className="w-px h-5 opacity-40"
                      style={{
                        background: `linear-gradient(to bottom, ${item.color}, ${crmStack[i + 1].color})`,
                      }}
                    />
                    <ArrowDown
                      size={12}
                      className="opacity-30"
                      style={{ color: item.color }}
                    />
                  </motion.div>
                )}
              </motion.div>
            ))}

            {/* Decorative glow */}
            <div className="absolute -inset-8 bg-gradient-to-b from-[#0078d4]/5 to-[#742774]/5 rounded-3xl blur-xl -z-10" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={() => scrollTo("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
