"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skillGroups } from "@/lib/data";
import { Settings, Zap, Code2, ArrowLeftRight, Database, Wrench } from "lucide-react";

const icons: Record<string, React.ReactNode> = {
  "Dynamics 365 / CRM": <Settings size={16} />,
  "Power Platform": <Zap size={16} />,
  "Programming": <Code2 size={16} />,
  "Integration": <ArrowLeftRight size={16} />,
  "Data & Reporting": <Database size={16} />,
  "Tools": <Wrench size={16} />,
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-28 relative">
      <div className="absolute inset-0 bg-[#060d1f]/30" />
      <div ref={ref} className="relative max-w-7xl mx-auto px-6 lg:px-8">

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="section-label justify-center mb-12">
          Skills
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Technical Expertise</h2>
          <p className="text-white/45 mt-3 max-w-lg mx-auto text-sm">Focused on the Microsoft Power Platform and Dynamics 365 CE ecosystem.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + gi * 0.07 }}
              className="glass rounded-2xl p-6 border border-white/6 hover:border-white/12 card-hover transition-colors duration-300"
            >
              {/* Group header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${group.color}18`, color: group.color }}>
                  {icons[group.title]}
                </div>
                <h3 className="font-semibold text-white text-sm">{group.title}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.88 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.25 + gi * 0.05 + si * 0.025 }}
                    className="skill-pill"
                    style={{ borderColor: `${group.color}22`, background: `${group.color}0c` }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
