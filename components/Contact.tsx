"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { person } from "@/lib/data";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050c1a] to-[#0a1628]" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#0078d4]/40 to-transparent" />

      <div ref={ref} className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#0078d4]" />
            <span className="text-[#0078d4] text-sm font-medium tracking-widest uppercase">
              Contact
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#0078d4]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Let&apos;s build better
            <br />
            <span className="gradient-text">CRM solutions.</span>
          </h2>
          <p className="text-white/50 text-base max-w-md mx-auto">
            Open to Dynamics 365 CE, Power Platform, and enterprise CRM
            opportunities. Reach out for a conversation.
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid sm:grid-cols-3 gap-4 mb-10"
        >
          {/* Email */}
          <a
            href={`mailto:${person.email}`}
            className="glass-card rounded-xl p-5 flex flex-col items-center gap-3 hover:border-[#0078d4]/30 transition-all duration-200 hover:scale-105 group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#0078d4]/15 flex items-center justify-center text-[#0078d4] group-hover:bg-[#0078d4]/25 transition-colors">
              <Mail size={20} />
            </div>
            <div>
              <div className="text-white/40 text-xs mb-1">Email</div>
              <div className="text-white text-sm font-medium break-all">
                {person.email}
              </div>
            </div>
          </a>

          {/* Phone */}
          <a
            href={`tel:${person.phone}`}
            className="glass-card rounded-xl p-5 flex flex-col items-center gap-3 hover:border-[#742774]/30 transition-all duration-200 hover:scale-105 group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#742774]/15 flex items-center justify-center text-[#742774] group-hover:bg-[#742774]/25 transition-colors">
              <Phone size={20} />
            </div>
            <div>
              <div className="text-white/40 text-xs mb-1">Phone</div>
              <div className="text-white text-sm font-medium">{person.phone}</div>
            </div>
          </a>

          {/* Location */}
          <div className="glass-card rounded-xl p-5 flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#7c3aed]/15 flex items-center justify-center text-[#7c3aed]">
              <MapPin size={20} />
            </div>
            <div>
              <div className="text-white/40 text-xs mb-1">Location</div>
              <div className="text-white text-sm font-medium text-center">
                {person.location}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={`mailto:${person.email}`}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#0078d4] hover:bg-[#106ebe] text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-[#0078d4]/30 hover:-translate-y-0.5"
          >
            <Mail size={16} />
            Email Me
          </a>
          <a
            href={`tel:${person.phone}`}
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/20 hover:border-[#0078d4]/40 text-white/80 hover:text-white font-semibold rounded-lg transition-all duration-200 hover:bg-white/5"
          >
            <Phone size={16} />
            Call Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
