import {
  Target, Users, Lightbulb, HandshakeIcon, Clock, PenTool,
  Video, Camera, BarChart3, Search, TrendingUp, Layout,
  Palette, Scissors, Zap, Star, Sparkles, CheckCircle2, ShieldCheck
} from 'lucide-react';
import { motion, type Variants } from 'motion/react';

// Tool icons
import iconCapcut from '@assets/paula/icon-capcut.png';
import iconCanva from '@assets/paula/icon-canva.png';
import iconGoogle from '@assets/paula/icon-google.png';
import iconMeta from '@assets/paula/icon-meta.png';
import iconAntigravity from '@assets/paula/icon-antigravity.png';
import iconPinterest from '@assets/paula/icon-pinterest.png';
import iconMailchimp from '@assets/paula/icon-mailchimp.png';
import iconManychat from '@assets/paula/icon-manychat.png';
import iconTiktok from '@assets/paula/icon-tiktok.png';

export function CompetenciesPage() {
  const competencies = [
    {
      category: 'Strategy & Management',
      tag: 'PILLAR 01',
      color: '#54100F',
      accent: '#F6FFB6',
      icon: Target,
      desc: 'High-level brand positioning, consumer journey architecture, and community loyalty systems.',
      skills: [
        { name: 'Social media management', icon: Users },
        { name: 'Brand positioning & messaging', icon: Target },
        { name: 'Audience segmentation', icon: Users },
        { name: 'Community management', icon: HandshakeIcon },
        { name: 'Trend forecasting', icon: TrendingUp },
        { name: 'Creative direction', icon: Palette },
        { name: 'Team collaboration', icon: HandshakeIcon },
        { name: 'Strategic thinking', icon: Lightbulb },
      ],
    },
    {
      category: 'Creative & Content',
      tag: 'PILLAR 02',
      color: '#D93240',
      accent: '#FFFFFF',
      icon: PenTool,
      desc: 'Mobile-first short-form video production, retention-oriented hooks, and aesthetic product visuals.',
      skills: [
        { name: 'Copywriting & editing', icon: PenTool },
        { name: 'Video editing (CapCut, VN)', icon: Scissors },
        { name: 'Videography & filming', icon: Video },
        { name: 'Lifestyle & product photography', icon: Camera },
        { name: 'Email marketing copy', icon: PenTool },
        { name: 'User-generated content (UGC)', icon: Video },
        { name: 'Captions & accessibility formatting', icon: Layout },
        { name: 'Trend adaptation', icon: Sparkles },
      ],
    },
    {
      category: 'Analytics & Research',
      tag: 'PILLAR 03',
      color: '#54100F',
      accent: '#FFD2C1',
      icon: BarChart3,
      desc: 'Data-driven market intelligence, audience feedback loops, and campaign performance optimization.',
      skills: [
        { name: 'Analytics & reporting', icon: BarChart3 },
        { name: 'Market trend & consumer research', icon: Search },
        { name: 'SEO optimization', icon: TrendingUp },
        { name: 'Competitors’ benchmarking', icon: Target },
        { name: 'AI-Powered market intelligence', icon: Zap },
        { name: 'Research automation', icon: Clock },
      ],
    },
  ];

  const tools = [
    { name: 'CapCut', role: 'Short-Form Video Editing', icon: iconCapcut },
    { name: 'Canva', role: 'Decks & Visual Branding', icon: iconCanva },
    { name: 'Google Workspace', role: 'Briefs & Asset Drives', icon: iconGoogle },
    { name: 'Meta Business Suite', role: 'Instagram & Facebook Ads', icon: iconMeta },
    { name: 'Antigravity AI', role: 'Market Intelligence & Automation', icon: iconAntigravity },
    { name: 'Pinterest', role: 'Visual Trends & Moodboards', icon: iconPinterest },
    { name: 'Mailchimp', role: 'Email Marketing & Retention', icon: iconMailchimp },
    { name: 'Manychat', role: 'DM Lead Capture & Funnels', icon: iconManychat },
    { name: 'TikTok for Business', role: 'Viral Campaign Distribution', icon: iconTiktok },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] py-16 relative overflow-hidden">
      {/* Decorative */}
      <Star className="absolute top-20 right-12 w-8 h-8 text-[#D93240] sparkle" fill="#D93240" />
      <Sparkles className="absolute bottom-20 left-12 w-6 h-6 text-[#54100F]/30 sparkle" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block px-4 py-1.5 bg-[#54100F] text-[#F6FFB6] rounded-full text-xs font-mono font-bold tracking-widest uppercase mb-4 shadow">
            ✦ PAULA ROBLES
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#54100F] font-display">
            Core Competencies
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-[#D93240] to-[#F6FFB6] mx-auto mt-4 mb-4" />
          <p className="text-base sm:text-lg text-[#2D2323]/80 leading-relaxed font-medium">
            Strategic combination of creative storytelling, data-backed analytical rigor, and agile execution.
          </p>
        </motion.div>

        {/* 3 Pillars */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {
            competencies.map((comp, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="bg-white rounded-3xl border-3 border-[#54100F] shadow-xl overflow-hidden flex flex-col justify-between hover:-translate-y-2 transition-all duration-300"
              >
                <div>
                  {/* Card Header */}
                  <div
                    className="p-6 text-white border-b-3 border-[#54100F] flex items-center justify-between"
                    style={{ backgroundColor: comp.color }}
                  >
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest block" style={{ color: comp.accent }}>
                        {comp.tag}
                      </span>
                      <h2 className="text-xl font-bold font-display" style={{ color: comp.accent }}>
                        {comp.category}
                      </h2>
                    </div>
                    <div className="p-2.5 bg-white/10 rounded-2xl">
                      <comp.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-xs text-[#2D2323]/70 mb-5 pb-4 border-b border-[#54100F]/15 leading-relaxed">
                      {comp.desc}
                    </p>

                    <ul className="space-y-3">
                      {comp.skills.map((skill, sIdx) => (
                        <li key={sIdx} className="flex items-center gap-3 text-xs text-[#2D2323]">
                          <div className="w-7 h-7 rounded-lg bg-[#F2F1EB] border border-[#54100F]/20 flex items-center justify-center text-[#54100F] shrink-0">
                            <skill.icon className="w-3.5 h-3.5 text-[#D93240]" />
                          </div>
                          <span className="font-semibold">{skill.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-4 bg-[#FDFBF7] border-t-2 border-[#54100F]/15 text-center">
                  <span className="text-[11px] font-mono text-[#54100F] font-bold flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D93240]" />
                    Verified Production Experience
                  </span>
                </div>
              </motion.div>
            ))
          }
        </motion.div>

        {/* Software & Production Stack */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#54100F] bg-[#F6FFB6] px-3.5 py-1.5 rounded-full border border-[#54100F]/30">
              ✦ PRODUCTION TOOLKIT
            </span>
            <h2 className="text-3xl font-bold font-display text-[#54100F] mt-3">
              Software and Tools
            </h2>
            <p className="text-xs font-mono text-[#54100F]/70 uppercase tracking-widest mt-1">
              End-to-end production, analytics, and automation software
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5">
            {tools.map((tool, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-5 rounded-2xl border-2 border-[#54100F] shadow-sm hover:shadow-md transition-all flex items-center gap-4 group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-14 h-14 rounded-xl bg-[#FDFBF7] border border-[#54100F]/20 flex items-center justify-center p-2.5 shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                  <img src={tool.icon} alt={tool.name} className="w-full h-full object-contain" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-[#54100F] text-base truncate">{tool.name}</h3>
                  <p className="text-xs text-[#2D2323]/70 truncate">{tool.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
