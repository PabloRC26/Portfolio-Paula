import { Star, Mail, Phone, Instagram, Send, Sparkles, MessageCircle, MapPin, ShieldCheck, Briefcase } from 'lucide-react';
import { PAULA_CONTACT } from '../../data/caseStudiesData';

export function Slide14Contact() {
  return (
    <div className="w-full h-full bg-[#F2F1EB] p-8 sm:p-12 relative overflow-hidden flex flex-col justify-between border-8 border-[#54100F]/10">
      <Star className="absolute top-8 right-16 w-6 h-6 text-[#D93240] sparkle" fill="#D93240" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-white bg-[#D93240] px-3 py-1 rounded">
            ✦ GET IN TOUCH
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#54100F] font-display mt-2">
            Let’s Work Together!
          </h2>
        </div>
        <div className="hidden sm:block text-right">
          <p className="font-handwriting text-2xl text-[#54100F] font-bold">ready to create impact ✨</p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 grid md:grid-cols-12 gap-8 items-center my-auto max-w-5xl mx-auto w-full">
        {/* Left: Contact Details Card (7 cols) */}
        <div className="md:col-span-7 space-y-4">
          <div className="bg-[#54100F] text-white p-6 sm:p-8 rounded-3xl border-3 border-[#54100F] shadow-2xl relative overflow-hidden">
            <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-[#F6FFB6] mb-1">
              {PAULA_CONTACT.name}
            </h3>
            <p className="text-xs font-mono text-[#FFD2C1] uppercase tracking-widest mb-6">
              {PAULA_CONTACT.role}
            </p>

            <div className="space-y-3">
              {/* Phone */}
              <a
                href={`tel:${PAULA_CONTACT.phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/10 hover:bg-white/15 transition-colors border border-white/10"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F6FFB6] text-[#54100F] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#FFD2C1] block">Direct Phone / WhatsApp</span>
                  <p className="text-sm font-mono text-white font-bold truncate">{PAULA_CONTACT.phone}</p>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${PAULA_CONTACT.email}`}
                className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/10 hover:bg-white/15 transition-colors border border-white/10"
              >
                <div className="w-10 h-10 rounded-xl bg-[#D93240] text-white flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#FFD2C1] block">Email Inquiries</span>
                  <p className="text-sm font-mono text-white font-bold truncate">{PAULA_CONTACT.email}</p>
                </div>
              </a>

              {/* Address / Location */}
              <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/10 border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#FFD2C1] text-[#54100F] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#FFD2C1] block">Location</span>
                  <p className="text-sm font-mono text-white font-bold truncate">{PAULA_CONTACT.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Work Authorization & Availability Badges (5 cols) */}
        <div className="md:col-span-5 space-y-4">
          <div className="bg-white p-6 rounded-3xl border-3 border-[#54100F] shadow-xl">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-xl bg-[#F6FFB6] text-[#54100F] flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5 text-[#D93240]" />
              </div>
              <h4 className="font-display font-bold text-lg text-[#54100F]">
                Work Authorization
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-[#2D2323] leading-relaxed font-semibold">
              Legally authorized to work full-time in Canada with <span className="text-[#D93240] font-bold">NO sponsorship required</span>.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border-3 border-[#54100F] shadow-xl">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-xl bg-[#FFD2C1] text-[#54100F] flex items-center justify-center font-bold">
                <Briefcase className="w-5 h-5 text-[#54100F]" />
              </div>
              <h4 className="font-display font-bold text-lg text-[#54100F]">
                Current Availability
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-[#2D2323] leading-relaxed">
              Open to <strong className="text-[#54100F]">Full-Time, Contract, & Freelance</strong> roles across Manitoba, British Columbia, Ontario, or fully remote.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Pill */}
      <div className="relative z-10 flex items-center justify-between text-xs font-mono text-[#54100F]/70 pt-4 border-t border-[#54100F]/15">
        <span>Paula Robles • Winnipeg, MB</span>
        <span className="font-bold text-[#D93240]">roblespaula180@gmail.com</span>
      </div>
    </div>
  );
}
