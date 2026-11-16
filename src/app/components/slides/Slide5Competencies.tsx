import { Target, PenTool, BarChart3, CheckCircle, Sparkles, Star } from 'lucide-react';

export function Slide5Competencies() {
  const pillars = [
    {
      title: 'Strategy & Management',
      tag: 'PILLAR 01',
      bgHeader: 'bg-[#54100F] text-[#F6FFB6]',
      borderColor: 'border-[#54100F]',
      badgeBg: 'bg-[#F6FFB6] text-[#54100F]',
      icon: Target,
      skills: [
        'Social media management',
        'Brand positioning & messaging',
        'Audience segmentation',
        'Community management',
        'Trend forecasting',
        'Creative direction',
        'Team collaboration',
        'Strategic thinking',
      ]
    },
    {
      title: 'Creative & Content',
      tag: 'PILLAR 02',
      bgHeader: 'bg-[#D93240] text-white',
      borderColor: 'border-[#54100F]',
      badgeBg: 'bg-[#FFD2C1] text-[#54100F]',
      icon: PenTool,
      skills: [
        'Copywriting & editing',
        'Video editing (CapCut, VN)',
        'Videography & filming',
        'Email marketing copy',
        'User-generated content (UGC)',
        'Captions & accessibility',
        'Trend adaptation',
      ]
    },
    {
      title: 'Analytics & Research',
      tag: 'PILLAR 03',
      bgHeader: 'bg-[#54100F] text-[#FFD2C1]',
      borderColor: 'border-[#54100F]',
      badgeBg: 'bg-[#F6FFB6] text-[#54100F]',
      icon: BarChart3,
      skills: [
        'Analytics & reporting',
        'Market trend & consumer research',
        'SEO optimization',
        'Competitors’ benchmarking',
        'AI-Powered market intelligence',
        'Research automation',
      ]
    }
  ];

  return (
    <div className="w-full h-full bg-[#F2F1EB] p-8 sm:p-12 relative overflow-hidden flex flex-col justify-between border-8 border-[#54100F]/10">
      <Star className="absolute top-8 right-16 w-6 h-6 text-[#D93240] sparkle" fill="#D93240" />

      {/* Header */}
      <div className="relative z-10">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#D93240] bg-[#FFD2C1]/60 px-3 py-1 rounded">
          ✦ COMPREHENSIVE SKILLSET
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#54100F] font-display mt-2">
          Core Competencies
        </h2>
        <p className="text-sm sm:text-base text-[#54100F]/80 font-medium mt-1">
          Strategic combination of creative intuition, analytical rigor, and project management
        </p>
      </div>

      {/* 3 Pillars Grid */}
      <div className="relative z-10 grid md:grid-cols-3 gap-6 my-auto">
        {pillars.map((pillar, idx) => (
          <div 
            key={idx}
            className={`bg-white rounded-3xl border-3 ${pillar.borderColor} shadow-xl overflow-hidden flex flex-col hover:-translate-y-1 transition-transform`}
          >
            {/* Pillar Header */}
            <div className={`p-5 ${pillar.bgHeader} border-b-3 border-[#54100F] flex items-center justify-between`}>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest opacity-80 block">{pillar.tag}</span>
                <h3 className="text-lg font-bold font-display">{pillar.title}</h3>
              </div>
              <div className="p-2 bg-white/10 rounded-xl">
                <pillar.icon className="w-5 h-5" />
              </div>
            </div>

            {/* Pillar Skill List */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <ul className="space-y-2.5">
                {pillar.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-start gap-2.5 text-xs text-[#2D2323]">
                    <CheckCircle className="w-4 h-4 text-[#D93240] shrink-0 mt-0.5" />
                    <span className="leading-tight font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="relative z-10 pt-4 border-t-2 border-[#54100F]/20 flex items-center justify-between text-xs font-mono text-[#54100F]/70">
        <span>Paula Robles Portfolio</span>
        <span>Slide 05 / 14</span>
      </div>
    </div>
  );
}
