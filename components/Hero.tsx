"use client";
import { motion } from "framer-motion";
import { ArrowDown, ChevronRight, Download } from "lucide-react";
import { person, stats } from "@/lib/data";

export default function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#04091a] via-[#060d1f]/90 to-[#04091a]" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#0078d4]/6 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-[#742774]/5 blur-[120px] pointer-events-none" />

      {/* Top decorative line */}
      <div className="absolute top-16 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#0078d4]/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-center">
          {/* Left */}
          <div className="max-w-3xl">
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0078d4]/10 border border-[#0078d4]/25 text-[#5ea6f5] text-xs font-semibold tracking-wide mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for Opportunities
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight text-white mb-6"
            >
              Microsoft Power Apps &amp;{" "}
              <span className="g-text-blue">Dynamics 365 CE</span>{" "}
              Developer
            </motion.h1>

            {/* Intro */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="text-[var(--text-muted)] text-lg leading-relaxed max-w-2xl mb-10"
            >
              I&apos;m a Microsoft Power Apps and Dynamics 365 CE Developer with{" "}
              <span className="text-white font-medium">4+ years of experience</span> building and
              supporting enterprise CRM solutions at{" "}
              <span className="text-[#5ea6f5] font-medium">Starlite Infotech</span>.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap gap-3 mb-14"
            >
              <button
                onClick={() => scrollTo("projects")}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0078d4] hover:bg-[#106ebe] text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-[#0078d4]/30 hover:-translate-y-0.5 text-sm"
              >
                View Projects <ChevronRight size={14} />
              </button>
              <button
                onClick={() => scrollTo("experience")}
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/14 hover:border-[#0078d4]/40 text-white/75 hover:text-white font-semibold rounded-xl transition-all duration-200 hover:bg-white/4 text-sm"
              >
                View Experience
              </button>
              <a
                href="/resume/Salma_Shaik_Resume.docx"
                download="Salma_Shaik_Resume.docx"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#742774]/30 hover:border-[#742774]/60 text-[#c084fc]/80 hover:text-[#c084fc] font-semibold rounded-xl transition-all duration-200 hover:bg-[#742774]/8 text-sm"
              >
                <Download size={14} /> Download Resume
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.05 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1 + i * 0.08 }}
                  className="glass rounded-xl p-4 stat-card"
                >
                  <div className="text-2xl font-bold text-white mb-0.5 leading-none">{s.value}</div>
                  <div className="text-xs font-semibold text-[#5ea6f5] leading-tight mb-0.5">{s.label}</div>
                  <div className="text-[10px] text-white/30 leading-tight">{s.sublabel}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: tech stack visual */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hidden xl:flex flex-col gap-3 w-56"
          >
            {[
              { label: "Dynamics 365 CE", color: "#0078d4" },
              { label: "Power Apps", color: "#742774" },
              { label: "Dataverse", color: "#742774" },
              { label: "Power Automate", color: "#0066b8" },
              { label: "C#.NET / JavaScript", color: "#7c3aed" },
              { label: "WebAPI / FetchXML", color: "#0ea5e9" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + i * 0.08 }}
                className="glass rounded-xl px-4 py-3 flex items-center gap-3 border-l-2 hover:bg-white/4 transition-colors duration-200"
                style={{ borderLeftColor: item.color }}
              >
                <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: item.color }} />
                <span className="text-white/70 text-xs font-medium">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          onClick={() => scrollTo("about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25 hover:text-white/50 transition-colors"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase font-medium">Scroll</span>
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
            <ArrowDown size={14} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
