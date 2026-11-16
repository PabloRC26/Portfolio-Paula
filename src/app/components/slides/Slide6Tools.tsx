import { Star, Sparkles } from 'lucide-react';
import capcutIcon from '@assets/paula/icon-capcut.png';
import canvaIcon from '@assets/paula/icon-canva.png';
import googleIcon from '@assets/paula/icon-google.png';
import metaIcon from '@assets/paula/icon-meta.png';
import antigravityIcon from '@assets/paula/icon-antigravity.png';
import pinterestIcon from '@assets/paula/icon-pinterest.png';
import mailchimpIcon from '@assets/paula/icon-mailchimp.png';
import manychatIcon from '@assets/paula/icon-manychat.png';
import tiktokIcon from '@assets/paula/icon-tiktok.png';

export function Slide6Tools() {
  const tools = [
    {
      name: 'CapCut',
      category: 'Video Editing',
      icon: capcutIcon,
      desc: 'Mobile-first pacing, sound design, trending effects, and high-retention transitions.'
    },
    {
      name: 'Canva',
      category: 'Design & Layouts',
      icon: canvaIcon,
      desc: 'Deck designs, brand guidelines, thumbnail graphics, and typography systems.'
    },
    {
      name: 'Google Workspace',
      category: 'Collaboration & Ops',
      icon: googleIcon,
      desc: 'Content calendars, briefing spreadsheets, asset drives, and client docs.'
    },
    {
      name: 'Meta Business Suite',
      category: 'Social & Ads',
      icon: metaIcon,
      desc: 'Campaign scheduling, analytics reporting, A/B ad creative testing, and community tracking.'
    },
    {
      name: 'Antigravity AI',
      category: 'Intelligence & Research',
      icon: antigravityIcon,
      desc: 'AI-assisted audience research, trend forecasting, and workflow automations.'
    },
    {
      name: 'Pinterest',
      category: 'Moodboarding & Trends',
      icon: pinterestIcon,
      desc: 'Aesthetic moodboards, lighting references, and visual content direction.'
    },
    {
      name: 'Mailchimp',
      category: 'Email Marketing',
      icon: mailchimpIcon,
      desc: 'Newsletter copywriting, audience segmentation, and promotional broadcasts.'
    },
    {
      name: 'Manychat',
      category: 'Chat Funnels',
      icon: manychatIcon,
      desc: 'Automated DM response funnels, lead generation, and link distribution.'
    },
    {
      name: 'TikTok for Business',
      category: 'Growth & Ads',
      icon: tiktokIcon,
      desc: 'Native video promotion, sound licensing, Spark Ads, and audience analytics.'
    }
  ];

  return (
    <div className="w-full h-full bg-[#F2F1EB] p-8 sm:p-12 relative overflow-hidden flex flex-col justify-between border-8 border-[#54100F]/10">
      <Star className="absolute top-8 right-16 w-6 h-6 text-[#D93240] sparkle" fill="#D93240" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#54100F] bg-[#F6FFB6] px-3 py-1 rounded border border-[#54100F]/30">
            ✦ PRODUCTION STACK
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#54100F] font-display mt-2">
            Software and Tools
          </h2>
        </div>
        <div className="hidden sm:block text-right">
          <p className="font-handwriting text-2xl text-[#54100F] font-bold">tools of the trade ⚡</p>
        </div>
      </div>

      {/* 9 Tools Grid */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 gap-4 my-auto">
        {tools.map((t, idx) => (
          <div 
            key={idx}
            className="bg-white p-4 rounded-2xl border-2 border-[#54100F] shadow-md hover:shadow-xl transition-all flex items-start gap-3.5 group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#F2F1EB] border border-[#54100F]/20 flex items-center justify-center p-2 shrink-0 group-hover:scale-105 transition-transform">
              <img src={t.icon} alt={t.name} className="w-full h-full object-contain" />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#D93240] block truncate">
                {t.category}
              </span>
              <h3 className="font-bold text-[#54100F] text-sm truncate">{t.name}</h3>
              <p className="text-[11px] text-[#2D2323]/70 leading-tight mt-0.5 line-clamp-2">
                {t.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="relative z-10 pt-4 border-t-2 border-[#54100F]/20 flex items-center justify-between text-xs font-mono text-[#54100F]/70">
        <span>Paula Robles Portfolio</span>
        <span>Slide 06 / 14</span>
      </div>
    </div>
  );
}
