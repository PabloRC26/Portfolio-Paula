import { Star, CheckCircle2, TrendingUp, DollarSign, MousePointerClick, ShieldCheck } from 'lucide-react';
import { TikTokVideoCard } from '../ui/TikTokVideoCard';
import { CLIENT_CASE_STUDIES } from '../../data/caseStudiesData';

export function SlideIntecsaCase() {
  const data = CLIENT_CASE_STUDIES.find((c) => c.id === 'intecsa')!;

  return (
    <div className="w-full h-full bg-[#F2F1EB] p-6 sm:p-10 relative overflow-hidden flex flex-col justify-between border-8 border-[#54100F]/10">
      <Star className="absolute top-6 right-12 w-6 h-6 text-[#D93240] sparkle" fill="#D93240" />

      {/* Header */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#54100F]/15 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#54100F] bg-[#F6FFB6] px-2.5 py-0.5 rounded border border-[#54100F]/30">
              CASE STUDY 01
            </span>
            <span className="text-[10px] font-mono font-semibold text-[#D93240] bg-[#FFD2C1]/40 px-2 py-0.5 rounded">
              {data.location}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#54100F] font-display">
            {data.name}
          </h2>
          <p className="text-xs sm:text-sm text-[#2D2323]/80 font-medium">
            {data.subtitle} • {data.tagline}
          </p>
        </div>

        {/* Managed Accounts Bar */}
        <div className="flex flex-wrap items-center gap-1.5">
          {data.accounts.map((acc, idx) => (
            <span
              key={idx}
              className="text-[10px] font-mono bg-white text-[#54100F] px-2 py-0.5 rounded-full border border-[#54100F]/20 font-semibold"
            >
              <strong className="text-[#D93240]">{acc.platform}:</strong> {acc.handle}
            </span>
          ))}
        </div>
      </div>

      {/* Middle: Challenge/Objective + Metrics + Playable Videos */}
      <div className="relative z-10 grid lg:grid-cols-12 gap-6 my-auto items-center">
        {/* Left Column: Context & Results (5 cols) */}
        <div className="lg:col-span-5 space-y-3.5">
          {/* Challenge & Objective Box */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border-2 border-[#54100F] shadow-md space-y-2.5">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase text-[#D93240] block">
                The Challenge:
              </span>
              <p className="text-xs text-[#2D2323] leading-relaxed">
                {data.challenge}
              </p>
            </div>
            <div className="pt-2 border-t border-[#54100F]/10">
              <span className="text-[10px] font-mono font-bold uppercase text-[#54100F] block">
                The Objective:
              </span>
              <p className="text-xs text-[#2D2323] leading-relaxed font-medium">
                {data.objective}
              </p>
            </div>
          </div>

          {/* Metrics 2x2 */}
          <div className="grid grid-cols-2 gap-2.5">
            {data.metrics.map((m, idx) => (
              <div
                key={idx}
                className="bg-[#54100F] text-white p-3 rounded-2xl border border-[#54100F] shadow-sm text-center"
              >
                <div className="text-xl sm:text-2xl font-mono font-extrabold text-[#F6FFB6]">
                  {m.value}
                </div>
                <div className="text-[10px] font-mono uppercase text-white/90 font-bold">
                  {m.label}
                </div>
                <div className="text-[9px] text-[#FFD2C1]/80 truncate">
                  {m.sublabel}
                </div>
              </div>
            ))}
          </div>

          {/* Results Summary */}
          <div className="p-3 bg-[#F6FFB6]/70 rounded-2xl border border-[#54100F]/30 text-xs space-y-1">
            <span className="font-mono font-bold text-[#54100F] uppercase text-[10px] block">
              ✦ Highlighted Takeaway:
            </span>
            <p className="text-[11px] text-[#54100F] leading-tight font-medium">
              TikTok Ads experiment with $8.50 USD delivered 68.5K impressions, 1,673 clicks (2.44% CTR), and 130 conversions at $0.065 CPA.
            </p>
          </div>
        </div>

        {/* Right Column: 3 Playable TikTok Videos (7 cols) */}
        <div className="lg:col-span-7">
          <div className="text-center mb-2">
            <span className="text-[11px] font-mono font-bold uppercase text-[#54100F] bg-white px-3 py-1 rounded-full border border-[#54100F]/20 shadow-sm inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#D93240] animate-pulse" />
              Haz clic para reproducir directamente en la página
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {data.videos.map((vid, idx) => (
              <TikTokVideoCard key={idx} {...vid} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-[#54100F]/70 pt-2 border-t border-[#54100F]/15">
        <span>B2B Tech Short-Form Video Strategy • La Paz, Bolivia</span>
        <span className="font-bold text-[#D93240]">191.6K+ Ecosystem Reach across 5 Channels</span>
      </div>
    </div>
  );
}
