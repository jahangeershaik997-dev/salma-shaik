"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, Download, FileText } from "lucide-react";

export default function Resume() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="resume" className="py-28 relative">
      <div className="absolute inset-0 bg-[#060d1f]/30" />
      <div ref={ref} className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="section-label justify-center mb-12">
          Resume
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Resume</h2>
          <p className="text-white/45 text-sm mb-12 max-w-md mx-auto">
            View or download Salma Shaik&apos;s resume — Microsoft Power Apps &amp; Dynamics 365 CE Developer.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-2xl p-10 border border-white/8"
        >
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-[#0078d4]/15 border border-[#0078d4]/25 flex items-center justify-center mx-auto mb-6">
            <FileText size={28} className="text-[#5ea6f5]" />
          </div>

          <div className="text-white font-bold text-lg mb-1">Salma_Shaik_Resume.docx</div>
          <div className="text-white/35 text-sm mb-8">Microsoft Power Apps &amp; Dynamics 365 CE Developer · Starlite Infotech</div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Download DOCX */}
            <a
              href="/resume/Salma_Shaik_Resume.docx"
              download="Salma_Shaik_Resume.docx"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#0078d4] hover:bg-[#106ebe] text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-[#0078d4]/30 hover:-translate-y-0.5 text-sm"
            >
              <Download size={15} /> Download Resume
            </a>

            {/* View note (DOCX doesn&apos;t open in browser) */}
            <a
              href="/resume/Salma_Shaik_Resume.docx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 border border-white/14 hover:border-[#0078d4]/40 text-white/70 hover:text-white font-semibold rounded-xl transition-all duration-200 hover:bg-white/4 text-sm"
            >
              <Eye size={15} /> View Resume
            </a>
          </div>

          <p className="text-white/20 text-xs mt-6">File format: DOCX · Filename: Salma_Shaik_Resume.docx</p>
        </motion.div>
      </div>
    </section>
  );
}
