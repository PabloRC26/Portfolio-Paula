import { Video, Camera, Mic, PenTool, Film, Sparkles, Star, Smartphone, Check } from 'lucide-react';

export function Slide7Services() {
  const services = [
    {
      icon: Video,
      title: 'Short-Form Videos',
      platforms: 'TikTok • Instagram Reels • YouTube Shorts',
      desc: 'High-energy, hook-driven vertical videos that stop the scroll, engage viewers, and drive conversions.',
      bg: 'bg-white',
      badge: 'bg-[#D93240] text-white'
    },
    {
      icon: Camera,
      title: 'Lifestyle & Product Photography',
      platforms: 'Flat Lays • E-Commerce • Social Feeds',
      desc: 'Crisp, aesthetically curated lifestyle imagery staging your product in authentic, relatable everyday contexts.',
      bg: 'bg-white',
      badge: 'bg-[#54100F] text-[#F6FFB6]'
    },
    {
      icon: Mic,
      title: 'Voiceover Content',
      platforms: 'ASMR • Storytelling • How-Tos',
      desc: 'Engaging, warm voice narration with clear audio engineering, adding personal connection and emotional resonance.',
      bg: 'bg-white',
      badge: 'bg-[#FFD2C1] text-[#54100F]'
    },
    {
      icon: PenTool,
      title: 'Scriptwriting & Ideation',
      platforms: 'Hook Testing • Retention Frameworks',
      desc: 'Strategic scripting incorporating strong 3-second hooks, psychological pain points, and natural calls-to-action.',
      bg: 'bg-white',
      badge: 'bg-[#F6FFB6] text-[#54100F]'
    },
    {
      icon: Film,
      title: 'Raw Footage Delivery',
      platforms: 'B-Roll Packs • Alternative Hooks',
      desc: 'Unedited 4K footage batches and multiple hook variations giving your internal media team infinite ad creative combos.',
      bg: 'bg-white',
      badge: 'bg-[#54100F] text-white'
    },
    {
      icon: Smartphone,
      title: 'Platform-Optimized Edits',
      platforms: 'Native Captions • Sound Sync • 9:16',
      desc: 'Color grading, viral typography, trending sound synchronization, and UI-safe zones ready for instant publishing.',
      bg: 'bg-white',
      badge: 'bg-[#D93240] text-white'
    }
  ];

  return (
    <div className="w-full h-full bg-[#F2F1EB] p-8 sm:p-12 relative overflow-hidden flex flex-col justify-between border-8 border-[#54100F]/10">
      <Star className="absolute top-8 right-16 w-6 h-6 text-[#D93240] sparkle" fill="#D93240" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#54100F] bg-[#F6FFB6] px-3 py-1 rounded border border-[#54100F]/30">
            ✦ WHAT I DO
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#54100F] font-display mt-2">
            Services Offered
          </h2>
        </div>
        <div className="hidden sm:block text-right">
          <p className="font-handwriting text-2xl text-[#54100F] font-bold">tailored for modern brands ✨</p>
        </div>
      </div>

      {/* 6 Services Grid */}
      <div className="relative z-10 grid sm:grid-cols-2 md:grid-cols-3 gap-4 my-auto">
        {services.map((s, idx) => (
          <div 
            key={idx}
            className={`${s.bg} p-5 rounded-3xl border-3 border-[#54100F] shadow-lg hover:shadow-xl transition-all flex flex-col justify-between`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#F2F1EB] border-2 border-[#54100F] flex items-center justify-center text-[#54100F]">
                  <s.icon className="w-5 h-5" />
                </div>
                <span className={`text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded-full ${s.badge}`}>
                  Active Service
                </span>
              </div>
              
              <h3 className="font-bold text-[#54100F] text-base mb-1">{s.title}</h3>
              <p className="text-[10px] font-mono text-[#D93240] font-semibold mb-2">{s.platforms}</p>
              
              <p className="text-xs text-[#2D2323]/75 leading-relaxed">
                {s.desc}
              </p>
            </div>
            
            <div className="mt-4 pt-3 border-t border-[#54100F]/15 flex items-center gap-1.5 text-[11px] font-mono text-[#54100F]">
              <Check className="w-3.5 h-3.5 text-[#D93240]" />
              <span>Commercial usage ready</span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="relative z-10 pt-4 border-t-2 border-[#54100F]/20 flex items-center justify-between text-xs font-mono text-[#54100F]/70">
        <span>Paula Robles Portfolio</span>
        <span>Slide 07 / 14</span>
      </div>
    </div>
  );
}
