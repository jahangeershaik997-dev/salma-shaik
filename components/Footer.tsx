"use client";
import { person } from "@/lib/data";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/6 bg-[#04091a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0078d4] to-[#742774] flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-[#0078d4]/20">
              SS
            </div>
            <div>
              <div className="text-white font-bold text-sm leading-tight">{person.name}</div>
              <div className="text-white/30 text-xs mt-0.5">{person.title}</div>
              <div className="text-white/20 text-xs">{person.location}</div>
            </div>
          </div>

          {/* Center copyright */}
          <p className="text-white/20 text-xs">© {year} {person.name}. All rights reserved.</p>

          {/* Contact links */}
          <div className="flex items-center gap-4">
            <a href={`mailto:${person.email}`} className="flex items-center gap-1.5 text-white/35 hover:text-[#5ea6f5] text-xs transition-colors">
              <Mail size={12} /> {person.email}
            </a>
            <a href={`tel:${person.phone}`} className="flex items-center gap-1.5 text-white/35 hover:text-white/60 text-xs transition-colors">
              <Phone size={12} /> {person.phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
