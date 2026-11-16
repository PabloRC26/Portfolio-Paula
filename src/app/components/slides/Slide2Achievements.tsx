import { Star, Camera, PenTool, Video, CheckCircle2, Award, Users } from 'lucide-react';
import mobileHearts from '@assets/paula/mobile-hearts.png';

export function Slide2Achievements() {
  const achievements = [
    {
      icon: Video,
      title: 'Content Pieces Produced',
      value: '+100',
      desc: 'High-performing short-form videos and creative assets crafted for 5 distinct client brands.'
    },
    {
      icon: Camera,
      title: 'Lifestyle & Product Photography',
      value: '4+ Niches',
      desc: 'Aesthetic product staging, flat lays, skincare, and real-life visual storytelling.'
    },
    {
      icon: PenTool,
      title: 'Scriptwriting & Concepts',
      value: '100% Custom',
      desc: 'Data-informed hooks, retention-focused pacing, and voiceover scripting that drives actions.'
    },
    {
    icon: CheckCircle2,
    title: 'Raw Footage & Multi-Platform',
    value: 'Full Delivery',
    desc: 'B-roll batches, hook variations, and platform-native formats for TikTok, Reels & Shorts.'
    }
  ];

return (
          <div className="w-full h-full bg-[#F2F1EB] p-8 sm:p-12 relative overflow-hidden flex flex-col justify-between border-8 border-[#54100F]/10">
            {/* Background decorations */}
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#FFD2C1]/30 rounded-full blur-3xl pointer-events-none" />
            <Star className="absolute top-10 right-12 w-6 h-6 text-[#D93240] sparkle" fill="#D93240" />

            {/* Header */}
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#D93240] bg-[#FFD2C1]/50 px-3 py-1 rounded">
                  ✦ TRACK RECORD
                </span>
                <h2 className="text-4xl sm:text-5xl font-extrabold text-[#54100F] font-display mt-2">
                  Key Achievements
                </h2>
              </div>
              <div className="hidden sm:block text-right">
                <p className="font-handwriting text-2xl text-[#54100F] font-bold">real impact, measurable results</p>
              </div>
            </div>

            {/* Main Grid */}
            <div className="relative z-10 grid md:grid-cols-12 gap-8 items-center my-auto">
              {/* Big Stat Hero Card */}
              <div className="md:col-span-5">
                <div className="bg-[#54100F] text-[#F6FFB6] p-8 rounded-3xl border-4 border-[#54100F] shadow-2xl relative overflow-hidden">
                  <div className="absolute -right-6 -bottom-6 opacity-20 w-44">
                    <img src={mobileHearts} alt="Hearts" className="w-full filter invert" />
                  </div>

                  <span className="inline-block px-3 py-1 bg-[#D93240] text-white text-xs font-mono font-bold uppercase rounded mb-4">
                    MILESTONE HIGHLIGHT
                  </span>

                  <div className="text-6xl sm:text-7xl font-extrabold font-mono text-[#F6FFB6] leading-none mb-2">
                    +100
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">
                    Content Pieces Created
                  </h3>

                  <p className="text-sm text-white/80 leading-relaxed">
                    Delivered across 5 collaborative client partnerships, scaling brand reach, engagement, and paid ad ROAS.
                  </p>

                  <div className="mt-6 pt-4 border-t border-white/20 flex items-center justify-between text-xs font-mono">
                    <span className="text-[#FFD2C1]">5 Happy Clients</span>
                    <span className="text-[#F6FFB6]">100% On-Time Delivery</span>
                  </div>
                </div>
              </div>

        {/* 4 Pillars Grid */}
        <div className="md:col-span-7 grid sm:grid-cols-2 gap-4">
          {achievements.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white p-5 rounded-2xl border-2 border-[#54100F] shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-[#F6FFB6] border-2 border-[#54100F] text-[#54100F]">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-[#D93240] block">{item.value}</span>
                  <h4 className="font-bold text-[#54100F] text-sm">{item.title}</h4>
                </div>
              </div>
              <p className="text-xs text-[#2D2323]/70 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 pt-4 border-t-2 border-[#54100F]/20 flex items-center justify-between text-xs font-mono text-[#54100F]/70">
        <span>Paula Robles Portfolio</span>
        <span>Slide 02 / 14</span>
      </div>
    </div>
  );
}
