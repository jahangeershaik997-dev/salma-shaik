"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import { aboutPoints, person } from "@/lib/data";

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } };

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#060d1f]/40 to-transparent" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Label */}
        <motion.div variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} transition={{ duration: 0.5 }} className="section-label justify-center mb-12">
          About
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-start">
          {/* Left */}
          <motion.div variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} transition={{ duration: 0.6, delay: 0.1 }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              Enterprise CRM Developer<br />
              <span className="g-text-blue">specializing in Microsoft</span><br />
              Power Platform.
            </h2>

            <p className="text-white/60 text-base leading-relaxed mb-5">
              I&apos;m a Microsoft Power Apps and Dynamics 365 CE Developer with{" "}
              <span className="text-white font-semibold">4+ years of experience</span> at{" "}
              <span className="text-[#5ea6f5] font-semibold">Starlite Infotech</span>, building and supporting
              enterprise CRM solutions on Dynamics 365 CE, Dataverse, and Power Automate.
            </p>

            <p className="text-white/60 text-base leading-relaxed mb-5">
              I&apos;ve worked across client projects in energy management, global manufacturing sales, and child
              welfare case management — covering development, testing, deployment, and production support.
            </p>

            <p className="text-white/60 text-base leading-relaxed mb-8">
              I specialize in building scalable, maintainable CRM platforms that reduce manual effort, enforce data
              quality, and support complex business processes across enterprise environments.
            </p>

            {/* Contact quick-view */}
            <div className="flex flex-wrap gap-3">
              <a href={`mailto:${person.email}`} className="glass px-4 py-2 rounded-lg text-sm text-[#5ea6f5] hover:bg-[#0078d4]/10 transition-colors">
                {person.email}
              </a>
              <a href={`tel:${person.phone}`} className="glass px-4 py-2 rounded-lg text-sm text-white/60 hover:text-white/80 transition-colors">
                {person.phone}
              </a>
              <div className="glass px-4 py-2 rounded-lg text-sm text-white/40">{person.location}</div>
            </div>
          </motion.div>

          {/* Right: capability list */}
          <motion.div variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="glass rounded-2xl p-6">
              <div className="text-xs text-white/30 uppercase tracking-widest font-semibold mb-5">Core Capabilities</div>
              <div className="space-y-2.5">
                {aboutPoints.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.07 }}
                    className="flex items-start gap-3 text-sm text-white/65 leading-snug"
                  >
                    <CheckCircle2 size={14} className="text-[#0078d4] mt-0.5 shrink-0" />
                    {point}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {["C#.NET Plugins","Power Automate","Model-Driven Apps","FetchXML","Ribbon Workbench","SSIS","SSRS","Dataverse"].map((tag) => (
                <span key={tag} className="skill-pill">{tag}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
