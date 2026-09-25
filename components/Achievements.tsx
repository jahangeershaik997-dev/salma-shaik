"use client";
import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { achievements } from "@/lib/data";

function CountUp({ target, suffix, inView }: { target: string; suffix?: string; inView: boolean }) {
  const [display, setDisplay] = useState("0");
  const numMatch = target.match(/[\d,]+/);
  const num = numMatch ? parseInt(numMatch[0].replace(/,/g, "")) : 0;
  const prefix = target.match(/^[~]/) ? "~" : "";

  useEffect(() => {
    if (!inView || num === 0) { setDisplay(target); return; }
    const controls = animate(0, num, {
      duration: 2.2,
      ease: "easeOut",
      onUpdate: (v) => {
        const rounded = Math.round(v);
        setDisplay(`${prefix}${rounded.toLocaleString()}${target.includes("+") ? "+" : ""}${suffix ?? ""}`);
      },
    });
    return () => controls.stop();
  }, [inView, num, target, prefix, suffix]);

  return <>{display}</>;
}

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="achievements" className="py-28 relative">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#060d1f]/50 to-transparent" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#0078d4]/25 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#742774]/20 to-transparent" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6 lg:px-8">

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="section-label justify-center mb-12">
          Achievements
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Documented Outcomes</h2>
          <p className="text-white/45 mt-3 max-w-lg mx-auto text-sm">Real results from enterprise CRM implementations — sourced directly from the resume.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.label}
              initial={{ opacity: 0, y: 28, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="glass rounded-2xl p-7 text-center border border-white/6 hover:border-white/14 card-hover stat-card"
              style={{ borderTopColor: ach.color, borderTopWidth: "2px" }}
            >
              {/* Accent */}
              <div className="w-8 h-px mx-auto mb-5 rounded-full" style={{ background: ach.color }} />

              {/* Number */}
              <div className="text-4xl sm:text-5xl font-bold leading-none mb-3" style={{ color: ach.color }}>
                <CountUp target={ach.value} inView={inView} />
              </div>

              {/* Label */}
              <div className="text-white/65 text-sm font-semibold mb-2 leading-snug">{ach.label}</div>

              {/* Description */}
              <p className="text-white/35 text-xs leading-relaxed">{ach.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center text-white/25 text-xs mt-8"
        >
          Also developed and maintained C#.NET plugins, custom workflow activities, and Power Automate flows across multiple client engagements.
        </motion.p>
      </div>
    </section>
  );
}
