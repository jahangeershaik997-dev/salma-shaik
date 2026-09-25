"use client";

import { person } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/6 bg-[#050c1a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0078d4] to-[#7c3aed] flex items-center justify-center text-white font-bold text-xs">
              SS
            </div>
            <div>
              <div className="text-white font-semibold text-sm">{person.name}</div>
              <div className="text-white/30 text-xs">{person.title}</div>
            </div>
          </div>

          {/* Center */}
          <p className="text-white/25 text-xs text-center">
            &copy; {year} {person.name}. All rights reserved.
          </p>

          {/* Right */}
          <div className="flex items-center gap-4 text-xs text-white/35">
            <a
              href={`mailto:${person.email}`}
              className="hover:text-[#0078d4] transition-colors"
            >
              {person.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
