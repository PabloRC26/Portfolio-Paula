import { Star, HelpCircle, CheckCircle2, Clock, Palette, Megaphone } from 'lucide-react';
import paperclipIcon from '@assets/paula/paperclip.svg';

export function Slide13FAQs() {
  const faqs = [
    {
      icon: Clock,
      q: 'How soon do you deliver?',
      a: 'First drafts are typically delivered within 5–7 business days after receiving the physical product and finalized brief. Expedited 48-hour turnarounds are also available upon request.',
      tag: 'TIMELINE'
    },
    {
      icon: Palette,
      q: 'Can you match my brand’s aesthetic?',
      a: 'Absolutely! Send over your brand book, Pinterest moodboard, font preferences, or video references. Every piece is styled to seamlessly match your brand’s organic feed.',
      tag: 'BRANDING'
    },
    {
      icon: Megaphone,
      q: 'Do you offer paid ad usage?',
      a: 'Yes! While packages include organic social posting rights, paid ad licensing (30, 60, or 90 days, plus whitelisting / Spark Ads) is easily added to any package tier.',
      tag: 'LICENSING'
    },
    {
      icon: HelpCircle,
      q: 'How do revisions work?',
      a: 'Each package includes 1 to 3 revision rounds. Once the first draft is delivered via review link, you can submit timestamped feedback on pacing, voiceover, cuts, or captions.',
      tag: 'REVISIONS'
    }
  ];

  return (
    <div className="w-full h-full bg-[#F2F1EB] p-8 sm:p-12 relative overflow-hidden flex flex-col justify-between border-8 border-[#54100F]/10">
      <Star className="absolute top-8 right-16 w-6 h-6 text-[#D93240] sparkle" fill="#D93240" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#54100F] bg-[#FFD2C1] px-3 py-1 rounded border border-[#54100F]/30">
            ✦ COMMON QUESTIONS
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#54100F] font-display mt-2">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="hidden sm:block text-right">
          <p className="font-handwriting text-2xl text-[#54100F] font-bold">everything you need to know 💡</p>
        </div>
      </div>

      {/* FAQs Grid */}
      <div className="relative z-10 grid sm:grid-cols-2 gap-6 my-auto max-w-4xl mx-auto w-full">
        {faqs.map((faq, idx) => (
          <div 
            key={idx}
            className="bg-white p-6 rounded-3xl border-3 border-[#54100F] shadow-lg hover:shadow-xl transition-all relative flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full bg-[#F6FFB6] text-[#54100F] border border-[#54100F]/20">
                  {faq.tag}
                </span>
                <faq.icon className="w-5 h-5 text-[#D93240]" />
              </div>

              <h3 className="font-bold text-[#54100F] text-base mb-2">
                Q: {faq.q}
              </h3>

              <p className="text-xs text-[#2D2323]/80 leading-relaxed">
                <span className="font-bold text-[#D93240]">A: </span>
                {faq.a}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="relative z-10 pt-4 border-t-2 border-[#54100F]/20 flex items-center justify-between text-xs font-mono text-[#54100F]/70">
        <span>Paula Robles Portfolio</span>
        <span>Slide 13 / 14</span>
      </div>
    </div>
  );
}
