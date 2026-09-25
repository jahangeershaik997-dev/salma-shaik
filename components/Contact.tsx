"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { person } from "@/lib/data";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.message) return;
    const text = `Hi Salma, I'm ${form.name}${form.email ? ` (${form.email})` : ""}.\n\n${form.message}`;
    const url = `https://wa.me/${person.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#060d1f]/50 to-[#04091a]" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#0078d4]/25 to-transparent" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6 lg:px-8">

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="section-label justify-center mb-12">
          Contact
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Let&apos;s build better{" "}
            <span className="g-text-blue">CRM solutions.</span>
          </h2>
          <p className="text-white/45 text-sm max-w-md mx-auto">
            Open to Dynamics 365 CE, Power Platform, and enterprise CRM opportunities. Reach out anytime.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 items-start max-w-5xl mx-auto">
          {/* Left: contact info */}
          <motion.div initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="space-y-4 mb-8">
              {[
                { Icon: Mail, label: "Email", value: person.email, href: `mailto:${person.email}`, color: "#0078d4" },
                { Icon: Phone, label: "Phone", value: person.phone, href: `tel:${person.phone}`, color: "#742774" },
                { Icon: MapPin, label: "Location", value: person.location, href: undefined, color: "#7c3aed" },
              ].map(({ Icon, label, value, href, color }) => (
                <div key={label} className="glass rounded-xl p-4 flex items-center gap-4 border border-white/6 hover:border-white/12 transition-colors">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${color}15` }}>
                    <Icon size={17} style={{ color }} />
                  </div>
                  <div>
                    <div className="text-white/30 text-xs mb-0.5">{label}</div>
                    {href ? (
                      <a href={href} className="text-white text-sm font-medium hover:text-[#5ea6f5] transition-colors">{value}</a>
                    ) : (
                      <div className="text-white text-sm font-medium">{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Direct buttons */}
            <div className="flex flex-col gap-3">
              <a href={`mailto:${person.email}`} className="flex items-center justify-center gap-2 px-5 py-3 bg-[#0078d4] hover:bg-[#106ebe] text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#0078d4]/25 text-sm">
                <Mail size={14} /> Email Me
              </a>
              <a href={`tel:${person.phone}`} className="flex items-center justify-center gap-2 px-5 py-3 border border-white/12 hover:border-white/25 text-white/70 hover:text-white font-semibold rounded-xl transition-all duration-200 text-sm">
                <Phone size={14} /> Call Me
              </a>
            </div>
          </motion.div>

          {/* Right: WhatsApp form */}
          <motion.div initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.25 }}>
            <form onSubmit={handleWhatsApp} className="glass rounded-2xl p-7 border border-white/8 space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <MessageCircle size={16} className="text-emerald-400" />
                <span className="text-white/60 text-sm font-medium">Send via WhatsApp</span>
              </div>

              <div>
                <label className="block text-white/40 text-xs font-medium mb-1.5 uppercase tracking-wider">Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full bg-white/4 border border-white/8 focus:border-[#0078d4]/50 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-white/40 text-xs font-medium mb-1.5 uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full bg-white/4 border border-white/8 focus:border-[#0078d4]/50 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-white/40 text-xs font-medium mb-1.5 uppercase tracking-wider">Message *</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your opportunity or project..."
                  className="w-full bg-white/4 border border-white/8 focus:border-[#0078d4]/50 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl transition-all duration-200 text-sm hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/20"
              >
                <MessageCircle size={14} />
                Send via WhatsApp
                <Send size={13} />
              </button>

              <p className="text-white/20 text-xs text-center">Opens WhatsApp with your message pre-filled. You control sending.</p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
