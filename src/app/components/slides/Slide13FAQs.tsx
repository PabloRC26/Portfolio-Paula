import { Star, HelpCircle, CheckCircle2, Clock, Palette, Megaphone, ShieldCheck, Briefcase, MapPin } from 'lucide-react';
import { PAULA_FAQS } from '../../data/caseStudiesData';

export function Slide13FAQs() {
  const faqIcons = [Briefcase, ShieldCheck, MapPin];

  return (
    <div className="w-full h-full bg-[#F2F1EB] p-8 sm:p-12 relative overflow-hidden flex flex-col justify-between border-8 border-[#54100F]/10">
      <Star className="absolute top-8 right-16 w-6 h-6 text-[#D93240] sparkle" fill="#D93240" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#54100F] bg-[#FFD2C1] px-3 py-1 rounded border border-[#54100F]/30">
            ✦ WORK & AVAILABILITY
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#54100F] font-display mt-2">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="hidden sm:block text-right">
          <p className="font-handwriting text-2xl text-[#54100F] font-bold">availability & work status 📋</p>
        </div>
      </div>

      {/* FAQs Cards */}
      <div className="relative z-10 grid gap-5 my-auto max-w-4xl mx-auto w-full">
        {PAULA_FAQS.map((faq, idx) => {
          const Icon = faqIcons[idx % faqIcons.length];
          return (
            <div
              key={idx}
              className="bg-white p-6 rounded-3xl border-3 border-[#54100F] shadow-lg hover:shadow-xl transition-all relative flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#54100F] text-[#F6FFB6] flex items-center justify-center shrink-0 border border-[#54100F]">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full bg-[#F6FFB6] text-[#54100F] border border-[#54100F]/20">
                      {faq.badge}
                    </span>
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-[#54100F]">
                    Q: {faq.q}
                  </h3>
                  <p className="text-sm text-[#2D2323] leading-relaxed mt-1 font-medium">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Pill */}
      <div className="relative z-10 flex items-center justify-between text-xs font-mono text-[#54100F]/70 pt-4 border-t border-[#54100F]/15">
        <span>Work Authorization: Canada (Full-Time, No Sponsorship Required)</span>
        <span className="font-bold text-[#D93240]">Remote • Hybrid • On-Site</span>
      </div>
    </div>
  );
}
