"use client";

import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { impactStats } from "@/lib/data";

function CountUp({
  value,
  suffix,
  prefix,
  color,
  inView,
}: {
  value: number;
  suffix: string;
  prefix?: string;
  color: string;
  inView: boolean;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span style={{ color }}>
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function ImpactStats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="impact" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050c1a] via-[#0a1628]/50 to-[#050c1a]" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#0078d4]" />
            <span className="text-[#0078d4] text-sm font-medium tracking-widest uppercase">
              Impact
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#0078d4]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Documented Outcomes
          </h2>
          <p className="mt-3 text-white/50 max-w-lg mx-auto">
            Real results from enterprise CRM implementations delivered during
            Starlite Infotech tenure.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="glass-card rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300 glow-blue"
              style={{ borderColor: `${stat.color}20` }}
            >
              {/* Accent line */}
              <div
                className="w-12 h-0.5 mx-auto mb-6 rounded-full"
                style={{ background: stat.color }}
              />

              {/* Number */}
              <div className="text-4xl sm:text-5xl font-bold mb-3 leading-none">
                <CountUp
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  color={stat.color}
                  inView={inView}
                />
              </div>

              {/* Label */}
              <div className="text-white/65 text-sm leading-snug mb-3">
                {stat.label}
              </div>

              {/* Project tag */}
              <div
                className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full"
                style={{
                  color: stat.color,
                  background: `${stat.color}15`,
                  border: `1px solid ${stat.color}30`,
                }}
              >
                {stat.project}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
