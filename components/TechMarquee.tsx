"use client";
import { techMarquee } from "@/lib/data";

export default function TechMarquee() {
  const doubled = [...techMarquee, ...techMarquee];

  return (
    <section className="relative py-10 overflow-hidden border-y border-white/5 bg-[#060d1f]/60">
      {/* Edge fades */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#04091a] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#04091a] to-transparent z-10 pointer-events-none" />

      <div className="overflow-hidden">
        <div className="marquee-track" style={{ width: "max-content" }}>
          {doubled.map((tech, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass text-white/50 text-sm font-medium hover:text-white/80 transition-colors duration-200 cursor-default whitespace-nowrap"
            >
              <span className="w-1 h-1 rounded-full bg-[#0078d4]/60" />
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
