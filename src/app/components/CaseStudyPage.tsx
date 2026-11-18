import { useState } from 'react';
import { 
  TrendingUp, Users, Target, MessageCircle, Star, Sparkles, Award, Zap, 
  Eye, Heart, ArrowRight, CheckCircle2, MapPin, Building2, ExternalLink, Play
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CLIENT_CASE_STUDIES, ClientCaseStudy } from '../data/caseStudiesData';
import { TikTokVideoCard } from './ui/TikTokVideoCard';

// Personal brand assets
import tiktokProfile from '@assets/paula/tiktok-profile.png';
import tiktokVlog from '@assets/paula/tiktok-vlog.png';
import paulaFlag from '@assets/paula/paula-bolivia-flag.png';
import paulaFriends from '@assets/paula/paula-crew.png';

export function CaseStudyPage() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedClientId, setSelectedClientId] = useState<string>('intercambios');

  const selectedClient = CLIENT_CASE_STUDIES.find((c) => c.id === selectedClientId) || CLIENT_CASE_STUDIES[0];

  const personalMetrics = [
    {
      icon: Eye,
      label: 'Total Organic Views',
      value: '1.1M+',
      color: '#54100F',
      desc: 'Combined impressions across TikTok & Reels with zero ad spend',
    },
    {
      icon: Heart,
      label: 'Total Video Likes',
      value: '161,000+',
      color: '#D93240',
      desc: 'High community resonance and emotional connection',
    },
    {
      icon: TrendingUp,
      label: 'Top Single Video',
      value: '636.1K',
      color: '#54100F',
      desc: 'Viral reach demonstrating algorithm mastery',
    },
    {
      icon: Users,
      label: 'Active Community',
      value: '4,471',
      color: '#D93240',
      desc: 'Dedicated follower base of students & diaspora',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] py-16 relative overflow-hidden">
      <Star className="absolute top-20 right-12 w-8 h-8 text-[#D93240] sparkle" fill="#D93240" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-4 py-1.5 bg-[#54100F] text-[#F6FFB6] rounded-full text-xs font-mono font-bold tracking-widest uppercase mb-4 shadow">
            ✦ PROVEN RESULTS & CASE STUDIES
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#54100F] font-display">
            Client Success & Growth
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-[#D93240] to-[#F6FFB6] mx-auto mt-4 mb-4" />
          <p className="text-base sm:text-lg text-[#2D2323]/80 leading-relaxed font-medium">
            Explore verified campaigns across B2B technology, educational recruitment, university advocacy, and student media. Watch our top-performing TikTok videos directly on the page!
          </p>
        </div>

        {/* Client Tabs Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CLIENT_CASE_STUDIES.map((client) => {
            const isSelected = selectedClientId === client.id && activeTab !== 'personal';
            return (
              <button
                key={client.id}
                onClick={() => {
                  setSelectedClientId(client.id);
                  setActiveTab('clients');
                }}
                className={`px-4 py-2.5 rounded-2xl font-mono text-xs sm:text-sm font-bold transition-all flex items-center gap-2 border-2 ${
                  isSelected
                    ? 'bg-[#54100F] text-[#F6FFB6] border-[#54100F] shadow-lg scale-105'
                    : 'bg-white text-[#54100F] border-[#54100F]/20 hover:border-[#D93240] hover:bg-[#FFD2C1]/20'
                }`}
              >
                <Building2 className={`w-4 h-4 ${isSelected ? 'text-[#F6FFB6]' : 'text-[#D93240]'}`} />
                <span>{client.shortName}</span>
              </button>
            );
          })}

          <button
            onClick={() => setActiveTab('personal')}
            className={`px-4 py-2.5 rounded-2xl font-mono text-xs sm:text-sm font-bold transition-all flex items-center gap-2 border-2 ${
              activeTab === 'personal'
                ? 'bg-[#D93240] text-white border-[#D93240] shadow-lg scale-105'
                : 'bg-white text-[#54100F] border-[#54100F]/20 hover:border-[#D93240] hover:bg-[#FFD2C1]/20'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#F6FFB6]" />
            <span>@boliviana.en.canada</span>
          </button>
        </div>

        {/* Content Section */}
        {activeTab === 'personal' ? (
          /* Personal Brand View */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-16"
          >
            {/* 4 Big Metrics Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {personalMetrics.map((m, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-3xl border-3 border-[#54100F] shadow-lg flex flex-col justify-between hover:-translate-y-1 transition-transform"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#FDFBF7] border border-[#54100F]/20 flex items-center justify-center mb-4">
                      <m.icon className="w-5 h-5" style={{ color: m.color }} />
                    </div>
                    <div className="text-3xl sm:text-4xl font-mono font-extrabold text-[#54100F] mb-1">
                      {m.value}
                    </div>
                    <h3 className="font-bold text-sm text-[#2D2323] mb-2">{m.label}</h3>
                  </div>
                  <p className="text-xs text-[#2D2323]/70 pt-3 border-t border-[#54100F]/15 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Story & Strategy */}
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 bg-white p-8 rounded-3xl border-3 border-[#54100F] shadow-xl space-y-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D93240] bg-[#FFD2C1]/60 px-3 py-1 rounded-full">
                  Organic Origin Story
                </span>
                <h2 className="text-3xl font-display font-extrabold text-[#54100F]">
                  From Zero to 1.1M+ Organic Views
                </h2>
                <p className="text-sm text-[#2D2323] leading-relaxed">
                  When I relocated to Winnipeg, Canada from Bolivia, I documented the raw, unpolished reality of starting over: navigating winter, university routines, culture shocks, and career transitions.
                </p>
                <div className="p-4 bg-[#F6FFB6] border-2 border-[#54100F] rounded-2xl">
                  <span className="font-handwriting text-2xl text-[#54100F] font-bold block">
                    “Relatability beats high production value every single time.”
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded-2xl border-3 border-[#54100F] shadow-lg rotate-[-1deg]">
                  <img src={tiktokProfile} alt="TikTok Profile" className="rounded-xl w-full aspect-[9/16] object-cover object-top" />
                  <p className="text-[11px] font-mono text-center font-bold text-[#54100F] mt-2">161K Likes</p>
                </div>
                <div className="bg-white p-3 rounded-2xl border-3 border-[#54100F] shadow-lg rotate-2">
                  <img src={paulaFlag} alt="Bolivian Pride" className="rounded-xl w-full aspect-[9/16] object-cover object-top" />
                  <p className="text-[11px] font-mono text-center font-bold text-[#54100F] mt-2">Bolivian Pride 🇧🇴</p>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          /* Client Institutional Case Study View */
          <motion.div
            key={selectedClient.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-12"
          >
            {/* Client Top Banner */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border-3 border-[#54100F] shadow-xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#54100F]/15 pb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#54100F] bg-[#F6FFB6] px-3 py-1 rounded-full border border-[#54100F]/20">
                      CASE STUDY: {selectedClient.name}
                    </span>
                    <span className="text-xs font-mono font-semibold text-[#D93240] bg-[#FFD2C1]/40 px-3 py-1 rounded-full flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {selectedClient.location}
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#54100F] font-display">
                    {selectedClient.name}
                  </h2>
                  <p className="text-sm sm:text-base text-[#2D2323]/80 font-medium mt-1">
                    {selectedClient.subtitle} — {selectedClient.tagline}
                  </p>
                </div>

                {/* Managed Social Accounts Badges */}
                <div className="flex flex-wrap items-center gap-2">
                  {selectedClient.accounts.map((acc, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono bg-[#FDFBF7] text-[#54100F] px-3 py-1.5 rounded-full border border-[#54100F]/20 font-bold flex items-center gap-1.5 shadow-sm"
                    >
                      <strong className="text-[#D93240]">{acc.platform}:</strong>
                      <span>{acc.handle}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Challenge & Objective Cards */}
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="p-5 rounded-2xl bg-[#FFD2C1]/30 border-2 border-[#54100F]/20 space-y-2">
                  <span className="text-xs font-mono font-bold uppercase text-[#D93240] tracking-wider block">
                    The Challenge
                  </span>
                  <p className="text-sm text-[#2D2323] leading-relaxed">
                    {selectedClient.challenge}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#F6FFB6]/40 border-2 border-[#54100F]/20 space-y-2">
                  <span className="text-xs font-mono font-bold uppercase text-[#54100F] tracking-wider block">
                    The Objective
                  </span>
                  <p className="text-sm text-[#2D2323] leading-relaxed font-medium">
                    {selectedClient.objective}
                  </p>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                {selectedClient.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#54100F] text-white border-2 border-[#54100F] text-center shadow"
                  >
                    <div className="text-2xl sm:text-3xl font-mono font-extrabold text-[#F6FFB6]">
                      {m.value}
                    </div>
                    <div className="text-xs font-mono uppercase text-white/90 font-bold mt-0.5">
                      {m.label}
                    </div>
                    <div className="text-[11px] text-[#FFD2C1]/80 mt-1 line-clamp-1">
                      {m.sublabel}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Playable TikTok Videos Showcase */}
            <div className="bg-[#54100F] text-white p-8 rounded-3xl border-4 border-[#54100F] shadow-2xl relative overflow-hidden">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#54100F] bg-[#F6FFB6] px-3.5 py-1 rounded-full">
                  ▶ REPRODUCTOR DE TIKTOK EN VIVO
                </span>
                <h3 className="text-3xl font-display font-extrabold text-white mt-2">
                  Top-Performing TikTok Videos
                </h3>
                <p className="text-xs sm:text-sm text-white/80 font-mono mt-1">
                  Haz clic en el botón de Play para ver el video completo aquí mismo sin salirte de la página web.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {selectedClient.videos.map((vid, idx) => (
                  <TikTokVideoCard key={idx} {...vid} />
                ))}
              </div>
            </div>

            {/* Results Detailed Bullet Points */}
            <div className="bg-white p-8 rounded-3xl border-3 border-[#54100F] shadow-xl">
              <h3 className="text-2xl font-display font-extrabold text-[#54100F] mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-[#D93240]" />
                Key Results & Business Impact
              </h3>

              <div className="grid md:grid-cols-3 gap-6">
                {selectedClient.resultsList.map((res, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#FDFBF7] border-2 border-[#54100F]/15 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-8 h-8 rounded-xl bg-[#54100F] text-[#F6FFB6] font-mono font-bold text-sm flex items-center justify-center mb-3">
                        0{idx + 1}
                      </div>
                      <h4 className="font-display font-bold text-lg text-[#54100F] mb-2">
                        {res.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#2D2323]/80 leading-relaxed">
                        {res.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Photo samples if available (e.g. INTECSA) */}
              {selectedClient.photoSamples && (
                <div className="mt-8 pt-8 border-t border-[#54100F]/15">
                  <h4 className="font-display font-bold text-xl text-[#54100F] mb-4">
                    Photo & Creative Samples
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {selectedClient.photoSamples.map((ps, idx) => (
                      <div
                        key={idx}
                        className="bg-[#FDFBF7] p-3 rounded-2xl border-2 border-[#54100F]/20 shadow-sm"
                      >
                        <div className="rounded-xl overflow-hidden aspect-[4/3] bg-neutral-100 mb-2">
                          <img
                            src={ps.img}
                            alt={ps.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform"
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-xs text-[#54100F]">{ps.title}</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F6FFB6] text-[#54100F]">
                            {ps.tag}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
