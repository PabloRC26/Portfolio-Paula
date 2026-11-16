import { Star, Quote, Sparkles, CheckCircle2, Heart } from 'lucide-react';
import paperclipIcon from '@assets/paula/paperclip.svg';

export function Slide11Testimonials() {
  const testimonials = [
    {
      quote: "Paula nailed our brand voice—authentic, engaging, and completely on point! The videos outperformed our standard internal creative by 3x in click-through rate.",
      author: "Angelica Reyes",
      role: "Brand Marketing Lead",
      company: "Liceria Skincare",
      tag: "SKINCARE & BEAUTY",
      color: "bg-[#FFD2C1]"
    },
    {
      quote: "Creative, clean, and effective. Loved the final output! Paula was exceptionally communicative throughout the entire scripting and revision process.",
      author: "Cia Rodriguez",
      role: "Campaign Director",
      company: "Wardiere Inc.",
      tag: "LIFESTYLE & APPAREL",
      color: "bg-[#F6FFB6]"
    }
  ];

  return (
    <div className="w-full h-full bg-[#F2F1EB] p-8 sm:p-12 relative overflow-hidden flex flex-col justify-between border-8 border-[#54100F]/10">
      <Star className="absolute top-8 right-16 w-6 h-6 text-[#D93240] sparkle" fill="#D93240" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#54100F] bg-[#F6FFB6] px-3 py-1 rounded border border-[#54100F]/30">
            ✦ CLIENT ENDORSEMENTS
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#54100F] font-display mt-2">
            Testimonials
          </h2>
        </div>
        <div className="hidden sm:block text-right">
          <p className="font-handwriting text-2xl text-[#54100F] font-bold">trusted by growing brands 💬</p>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="relative z-10 grid md:grid-cols-2 gap-8 my-auto max-w-4xl mx-auto w-full">
        {testimonials.map((t, idx) => (
          <div 
            key={idx}
            className="bg-white p-6 sm:p-8 rounded-3xl border-3 border-[#54100F] shadow-xl relative flex flex-col justify-between hover:-translate-y-1 transition-transform"
          >
            {/* Paperclip */}
            <img 
              src={paperclipIcon} 
              alt="Paperclip" 
              className="absolute -top-5 right-10 w-7 h-11 z-20 drop-shadow"
            />

            <div>
              {/* Stars row */}
              <div className="flex items-center gap-1 mb-4 text-[#D93240]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D93240]" />
                ))}
              </div>

              {/* Quote text */}
              <div className="relative mb-6">
                <Quote className="w-8 h-8 text-[#54100F]/15 absolute -top-4 -left-2 -z-0" />
                <p className="text-base sm:text-lg text-[#54100F] font-medium leading-relaxed italic relative z-10">
                  “{t.quote}”
                </p>
              </div>
            </div>

            {/* Author Footer */}
            <div className="pt-4 border-t-2 border-[#54100F]/15 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-[#54100F] text-base">{t.author}</h3>
                <p className="text-xs text-[#2D2323]/70">{t.role}, <span className="font-semibold text-[#54100F]">{t.company}</span></p>
              </div>
              <span className={`text-[9px] font-mono font-bold uppercase px-2.5 py-1 rounded-full border border-[#54100F]/30 ${t.color}`}>
                {t.tag}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="relative z-10 pt-4 border-t-2 border-[#54100F]/20 flex items-center justify-between text-xs font-mono text-[#54100F]/70">
        <span>Paula Robles Portfolio</span>
        <span>Slide 11 / 14</span>
      </div>
    </div>
  );
}
