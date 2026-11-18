import { Star, Building2, MapPin, ArrowUpRight, TrendingUp } from 'lucide-react';
import intecsaBrand from '@assets/case_studies/intecsa-brand.png';
import intercambiosBrand from '@assets/case_studies/intercambios-brand.png';
import intlcentreBrand from '@assets/case_studies/intlcentre-brand.png';
import manitobanBrand from '@assets/case_studies/manitoban-brand.png';

export function SlideClientsRoster() {
  const clients = [
    {
      name: 'INTECSA SRL',
      location: 'La Paz - Bolivia',
      category: 'B2B Tech Distributor',
      stat: '191.6K+ impressions',
      image: intecsaBrand,
      highlight: '73.3K views viral technical video • $0.065 CPA',
    },
    {
      name: 'INTERCAMBIOS CANADA',
      location: 'Vancouver - Canada',
      category: 'Educational Programs Agency',
      stat: '899K views anchor video',
      image: intercambiosBrand,
      highlight: '+3,800% follower growth in 2 months (200 → 7.8K)',
    },
    {
      name: 'THE MANITOBAN',
      location: 'Winnipeg - Manitoba',
      category: 'University Student Newspaper',
      stat: '35K & 30K peak views',
      image: manitobanBrand,
      highlight: 'Interactive street interviews • Print-to-digital era',
    },
    {
      name: 'INTERNATIONAL CENTRE',
      location: 'Winnipeg - Manitoba',
      category: 'University of Manitoba',
      stat: '10K peak views',
      image: intlcentreBrand,
      highlight: 'Student-led peer storytelling • Demystifying resources',
    },
  ];

  return (
    <div className="w-full h-full bg-[#F2F1EB] p-8 sm:p-12 relative overflow-hidden flex flex-col justify-between border-8 border-[#54100F]/10">
      <Star className="absolute top-8 right-16 w-6 h-6 text-[#D93240] sparkle" fill="#D93240" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#54100F] bg-[#F6FFB6] px-3 py-1 rounded border border-[#54100F]/30">
            ✦ PROVEN TRACK RECORD
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#54100F] font-display mt-2">
            Clients and Results
          </h2>
        </div>
        <div className="hidden sm:block text-right">
          <p className="font-handwriting text-2xl text-[#54100F] font-bold">real brands, measurable growth 📈</p>
        </div>
      </div>

      {/* 4 Clients Cards Grid */}
      <div className="relative z-10 grid sm:grid-cols-2 gap-6 my-auto max-w-5xl mx-auto w-full">
        {clients.map((c, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-3xl border-3 border-[#54100F] shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono font-bold uppercase px-3 py-1 rounded-full bg-[#F6FFB6] text-[#54100F] border border-[#54100F]/20 flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-[#D93240]" />
                  {c.location}
                </span>
                <span className="text-xs font-mono text-[#D93240] font-bold bg-[#FFD2C1]/40 px-2.5 py-0.5 rounded-full">
                  {c.category}
                </span>
              </div>

              <h3 className="text-2xl font-display font-extrabold text-[#54100F] group-hover:text-[#D93240] transition-colors mb-2">
                {c.name}
              </h3>

              <div className="p-3 bg-[#FDFBF7] rounded-2xl border border-[#54100F]/15 mb-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#54100F] text-[#F6FFB6] flex items-center justify-center shrink-0 font-mono font-bold text-xs">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-[#54100F]/60">Key Milestone</div>
                  <div className="text-sm font-bold text-[#54100F]">{c.stat}</div>
                </div>
              </div>

              <p className="text-xs text-[#2D2323]/80 leading-relaxed font-medium">
                {c.highlight}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-[#54100F]/10 flex items-center justify-between text-xs font-mono text-[#54100F]/70">
              <span>View Case Study</span>
              <ArrowUpRight className="w-4 h-4 text-[#D93240] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {/* Footer Pill */}
      <div className="relative z-10 flex items-center justify-between text-xs font-mono text-[#54100F]/70 pt-4 border-t border-[#54100F]/15">
        <span>Cross-border campaigns: Bolivia 🇧🇴 & Canada 🇨🇦</span>
        <span className="font-bold text-[#D93240]">Over 1.5M+ total combined views</span>
      </div>
    </div>
  );
}
