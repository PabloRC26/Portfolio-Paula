import { useState } from 'react';
import { Mail, MessageCircle, Globe, Send, Check, Star, Sparkles, ArrowRight, Heart, Phone, MapPin, ShieldCheck, Briefcase } from 'lucide-react';
import { motion } from 'motion/react';
import paulaPhoto from '@assets/paula/paula-grad-friends.png';
import paperclipIcon from '@assets/paula/paperclip.svg';
import curlyArrow from '@assets/paula/curly-arrow.svg';
import { PAULA_CONTACT } from '../data/caseStudiesData';

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email Inquiries',
      value: PAULA_CONTACT.email,
      link: `mailto:${PAULA_CONTACT.email}`,
      color: '#D93240',
      tag: 'FASTEST RESPONSE',
    },
    {
      icon: Phone,
      label: 'Phone / WhatsApp',
      value: PAULA_CONTACT.phone,
      link: `tel:${PAULA_CONTACT.phone.replace(/[^0-9+]/g, '')}`,
      color: '#54100F',
      tag: 'DIRECT CALL',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: PAULA_CONTACT.address,
      link: '#',
      color: '#54100F',
      tag: 'WINNIPEG, MB',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] py-16 relative overflow-hidden">
      <Star className="absolute top-20 right-12 w-8 h-8 text-[#D93240] sparkle" fill="#D93240" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 bg-[#54100F] text-[#F6FFB6] rounded-full text-xs font-mono font-bold tracking-widest uppercase mb-4 shadow">
            ✦ GET IN TOUCH
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#54100F] font-display">
            Let’s Work Together!
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-[#D93240] to-[#F6FFB6] mx-auto mt-4 mb-4" />
          <p className="text-base sm:text-lg text-[#2D2323]/80 leading-relaxed font-medium">
            Available for full-time roles, contracts, freelance campaigns, and corporate short-form video strategy.
          </p>
        </div>

        {/* Work Authorization & Status Banners */}
        <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-[#54100F] text-white p-6 rounded-3xl border-3 border-[#54100F] shadow-lg flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#F6FFB6] text-[#54100F] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-7 h-7 text-[#D93240]" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-[#F6FFB6] font-bold tracking-wider block">
                Work Authorization
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                Legally authorized to work full-time in Canada
              </h3>
              <p className="text-xs text-[#FFD2C1] font-mono mt-0.5">
                ✦ No sponsorship required
              </p>
            </div>
          </div>

          <div className="bg-white text-[#54100F] p-6 rounded-3xl border-3 border-[#54100F] shadow-lg flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FFD2C1] text-[#54100F] flex items-center justify-center shrink-0">
              <Briefcase className="w-7 h-7 text-[#54100F]" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-[#D93240] font-bold tracking-wider block">
                Availability
              </span>
              <h3 className="text-base sm:text-lg font-bold text-[#54100F] leading-tight">
                Full-Time • Contract • Freelance
              </h3>
              <p className="text-xs text-[#2D2323]/70 font-mono mt-0.5">
                ✦ On-site & Hybrid in MB, BC, ON, or 100% Remote
              </p>
            </div>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((c, idx) => (
            <a 
              key={idx}
              href={c.link}
              target={c.link.startsWith('http') ? '_blank' : undefined}
              rel={c.link.startsWith('http') ? 'noreferrer' : undefined}
              className="bg-white p-6 rounded-3xl border-3 border-[#54100F] shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#F2F1EB] border-2 border-[#54100F] flex items-center justify-center text-[#54100F] group-hover:scale-110 transition-transform">
                    <c.icon className="w-6 h-6 text-[#D93240]" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full bg-[#F6FFB6] text-[#54100F]">
                    {c.tag}
                  </span>
                </div>
                <span className="text-xs font-mono uppercase text-[#54100F]/60 block mb-1">
                  {c.label}
                </span>
                <p className="text-base font-bold text-[#54100F] group-hover:text-[#D93240] transition-colors break-words">
                  {c.value}
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#54100F]/15 flex items-center justify-between text-xs font-mono text-[#54100F]/70">
                <span>Connect</span>
                <ArrowRight className="w-4 h-4 text-[#D93240] group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>

        {/* Form & Image Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border-4 border-[#54100F] shadow-2xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#F6FFB6] border-2 border-[#54100F] text-[#54100F] flex items-center justify-center mx-auto shadow-md">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-[#54100F]">Inquiry Sent!</h3>
                  <p className="text-sm text-[#2D2323]/80 max-w-sm mx-auto">
                    Thank you for reaching out! Paula will review your message and reply promptly at {PAULA_CONTACT.email}.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-[#54100F] text-[#F6FFB6] rounded-full font-mono text-xs font-bold mt-4"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-between pb-2 border-b border-[#54100F]/15">
                    <h3 className="text-2xl font-bold font-display text-[#54100F]">
                      Send a Direct Message
                    </h3>
                    <span className="text-xs font-mono text-[#54100F]/60">
                      Takes 1 min
                    </span>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-[#54100F] mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-2.5 rounded-xl border-2 border-[#54100F]/30 focus:border-[#D93240] focus:outline-none text-sm font-sans"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-[#54100F] mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@company.com"
                        className="w-full px-4 py-2.5 rounded-xl border-2 border-[#54100F]/30 focus:border-[#D93240] focus:outline-none text-sm font-sans"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-[#54100F] mb-1">
                        Opportunity Type
                      </label>
                      <select className="w-full px-4 py-2.5 rounded-xl border-2 border-[#54100F]/30 focus:border-[#D93240] focus:outline-none text-sm font-sans bg-white">
                        <option>Full-Time Employment</option>
                        <option>Contract / Retainer</option>
                        <option>Freelance Campaign / UGC</option>
                        <option>Consulting / Speaking</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-[#54100F] mb-1">
                        Location / Work Mode
                      </label>
                      <select className="w-full px-4 py-2.5 rounded-xl border-2 border-[#54100F]/30 focus:border-[#D93240] focus:outline-none text-sm font-sans bg-white">
                        <option>Remote</option>
                        <option>Manitoba (On-site / Hybrid)</option>
                        <option>British Columbia (On-site / Hybrid)</option>
                        <option>Ontario (On-site / Hybrid)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-[#54100F] mb-1">
                      Project Details / Job Description *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me about your goals, timeline, and what you’re looking to achieve together..."
                      className="w-full px-4 py-2.5 rounded-xl border-2 border-[#54100F]/30 focus:border-[#D93240] focus:outline-none text-sm font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#D93240] hover:bg-[#c02835] text-white rounded-xl font-mono text-sm font-bold uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Polaroid Photo Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="bg-white p-5 rounded-3xl border-4 border-[#54100F] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-300 max-w-sm">
              <div className="overflow-hidden rounded-2xl aspect-[4/5] bg-[#F2F1EB] mb-4">
                <img
                  src={paulaPhoto}
                  alt="Paula Robles with friends and graduation"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="text-center">
                <p className="font-handwriting text-3xl text-[#54100F] font-bold">
                  “Let’s build something unforgettable!”
                </p>
                <p className="font-mono text-xs text-[#D93240] font-bold mt-1">
                  — Paula Robles 🇧🇴🇨🇦
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
