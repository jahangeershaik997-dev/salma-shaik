"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";

const capabilities = [
  "Dynamics 365 CE & Power Platform",
  "C#.NET Plugins & Custom Workflow Activities",
  "Model-Driven Apps & Canvas Apps",
  "Business Process Flows & Business Rules",
  "FetchXML, WebAPI & REST Integrations",
  "SSIS & CRM SDK Data Migration",
  "SSRS Reporting",
  "Security Roles & Record-Level Access",
  "JavaScript Form Scripting",
  "Solution Management across Dev, UAT & Production",
];

const pillars = [
  {
    title: "4+ Years",
    subtitle: "Enterprise CRM",
    desc: "Deep experience building and supporting Dynamics 365 CE solutions for global clients.",
    color: "#0078d4",
  },
  {
    title: "3 Domains",
    subtitle: "Energy · Manufacturing · Social Services",
    desc: "Delivered CRM platforms across energy management, global manufacturing sales, and child welfare.",
    color: "#742774",
  },
  {
    title: "Full Lifecycle",
    subtitle: "Dev → UAT → Production",
    desc: "Hands-on across development, testing, deployment, and production support.",
    color: "#7c3aed",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050c1a] via-[#0a1628]/60 to-[#050c1a]" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 section-line" />
            <span className="text-[#0078d4] text-sm font-medium tracking-widest uppercase">
              About
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Enterprise CRM Developer
          </h2>
          <p className="mt-3 text-white/50 max-w-xl">
            Specializing in Microsoft Dynamics 365 CE and Power Platform solutions
            for complex enterprise environments.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: narrative */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-white/70 text-base leading-relaxed mb-6">
              I am a Microsoft Power Apps and Dynamics 365 CE Developer with{" "}
              <span className="text-white font-medium">4+ years of experience</span>{" "}
              at Starlite Infotech, building and supporting enterprise CRM solutions
              across energy management, global manufacturing sales, and social services.
            </p>
            <p className="text-white/70 text-base leading-relaxed mb-6">
              My work spans the full delivery lifecycle — from designing Dataverse
              data models and writing{" "}
              <span className="text-white font-medium">C#.NET plugins</span> and
              custom workflow activities, to configuring{" "}
              <span className="text-white font-medium">Business Process Flows</span>,
              implementing JavaScript form scripting, building{" "}
              <span className="text-white font-medium">Power Automate</span> flows,
              and supporting SSIS/CRM SDK data migrations to production.
            </p>
            <p className="text-white/70 text-base leading-relaxed">
              I bring hands-on expertise in FetchXML, WebAPI and REST integrations,
              SSRS reporting, security role configuration, and Ribbon Workbench
              customization — consistently delivering solutions that are maintainable,
              secure, and aligned with enterprise requirements.
            </p>

            {/* Capabilities list */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  className="flex items-start gap-2 text-sm text-white/60"
                >
                  <CheckCircle
                    size={14}
                    className="text-[#0078d4] mt-0.5 shrink-0"
                  />
                  {cap}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: pillars */}
          <div className="flex flex-col gap-4">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                variants={fadeInUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                className="glass-card rounded-xl p-6 border-l-2 hover:scale-[1.01] transition-transform duration-300"
                style={{ borderLeftColor: p.color }}
              >
                <div className="flex items-start gap-4">
                  <div>
                    <div
                      className="text-2xl font-bold"
                      style={{ color: p.color }}
                    >
                      {p.title}
                    </div>
                    <div className="text-white/80 font-medium text-sm mt-0.5">
                      {p.subtitle}
                    </div>
                    <p className="text-white/50 text-sm mt-2 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Location badge */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="glass-card rounded-xl p-4 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-[#0078d4]/15 flex items-center justify-center text-lg">
                🇮🇳
              </div>
              <div>
                <div className="text-white text-sm font-medium">
                  Guntur, Andhra Pradesh, India
                </div>
                <div className="text-white/40 text-xs">Current Location</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
