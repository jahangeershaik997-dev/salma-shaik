"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { clearInterval(t); setTimeout(() => setDone(true), 300); return 100; }
        return p + Math.random() * 18 + 4;
      });
    }, 80);
    return () => clearInterval(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#04091a] grid-bg"
        >
          {/* Radial */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#0078d4]/5 blur-3xl" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative flex flex-col items-center gap-8"
          >
            {/* Logo mark */}
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0078d4] to-[#742774] flex items-center justify-center shadow-2xl shadow-[#0078d4]/30">
                <span className="text-white font-bold text-xl tracking-tight">SS</span>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 rounded-2xl border border-[#0078d4]/20"
              />
            </div>

            {/* Name */}
            <div className="text-center">
              <div className="text-white font-bold text-2xl tracking-tight">Salma Shaik</div>
              <div className="text-[#5ea6f5] text-sm font-medium mt-1 tracking-wide">Power Apps &amp; Dynamics 365 CE</div>
            </div>

            {/* Progress bar */}
            <div className="w-48 h-px bg-white/8 relative overflow-hidden rounded-full">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#0078d4] to-[#742774] rounded-full"
                style={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            <div className="text-[#5ea6f5]/50 text-xs tabular-nums">
              {Math.min(Math.round(progress), 100)}%
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
