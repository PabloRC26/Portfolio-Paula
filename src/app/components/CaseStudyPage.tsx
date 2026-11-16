import { TrendingUp, Users, Target, MessageCircle, Star, Sparkles, Award, Zap, Eye, Heart, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import tiktokProfile from '@assets/paula/tiktok-profile.png';
import tiktokVlog from '@assets/paula/tiktok-vlog.png';
import paulaFlag from '@assets/paula/paula-bolivia-flag.png';
import paulaFriends from '@assets/paula/paula-crew.png';
import paperclipIcon from '@assets/paula/paperclip.svg';

export function CaseStudyPage() {
  const metrics = [
    {
      icon: Eye,
      label: 'Total Organic Views',
      value: '1.1M+',
      color: '#54100F',
      desc: 'Combined impressions across TikTok & Reels with zero ad spend'
    },
    {
      icon: Heart,
      label: 'Total Video Likes',
      value: '161,000+',
      color: '#D93240',
      desc: 'High community resonance and emotional connection'
    },
    {
      icon: TrendingUp,
      label: 'Top Single Video',
      value: '636.1K',
      color: '#54100F',
      desc: 'Viral reach demonstrating algorithm mastery'
    },
    {
      icon: Users,
      label: 'Active Community',
      value: '4,471',
      color: '#D93240',
      desc: 'Dedicated follower base of students & diaspora'
    },
  ];

  const strategyPillars = [
    {
      title: '3-Second Emotional Hook',
      desc: 'Opening videos with high-relatability questions and real-time reactions rather than manufactured intros.'
    },
    {
      title: 'Vulnerability as Currency',
      desc: 'Sharing the genuine challenges, homesickness, and humorous culture shocks of moving from Bolivia to Canada.'
    },
    {
      title: 'Mobile-Native Pacing',
      desc: 'Mastery of CapCut trending sounds, fast-cut B-roll, and accessible text styling designed for silent scrollers.'
    },
    {
      title: 'Two-Way Community Loops',
      desc: 'Creating content directly inspired by comment section questions, turning viewers into active co-creators.'
    }
  ];

  return (
        <div className="min-h-screen bg-[#FDFBF7] py-16 relative overflow-hidden">
          <Star className="absolute top-20 right-12 w-8 h-8 text-[#D93240] sparkle" fill="#D93240" />

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <div className="inline-block px-4 py-1.5 bg-[#54100F] text-[#F6FFB6] rounded-full text-xs font-mono font-bold tracking-widest uppercase mb-4 shadow">
                    ✦ CASE STUDY
                  </div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#54100F] font-display">
                    Organic Community Growth
                  </h1>
                  <p className="font-mono text-sm text-[#D93240] font-bold mt-2">
                    Case Study: @boliviana.en.canada (“Paula en Canadá”)
                  </p>
                <div className="h-1 w-20 bg-gradient-to-r from-[#D93240] to-[#F6FFB6] mx-auto mt-4 mb-4" />
                <p className="text-base sm:text-lg text-[#2D2323]/80 leading-relaxed font-medium">
                  How authentic, human-centric storytelling built over 1.1 million organic impressions and a passionate community with zero ad spend.
                </p>
              </div>

        {/* 4 Big Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((m, idx) => (
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

                {/* Main Content Grid: Story + Screenshots */}
                <div className="grid lg:grid-cols-12 gap-10 items-center mb-16">
                  {/* Story Narrative */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="bg-white p-8 rounded-3xl border-3 border-[#54100F] shadow-xl relative">
                      <h2 className="text-2xl font-bold font-display text-[#54100F] mb-4">
                        The Narrative That Sparked a Movement
                      </h2>
                      <p className="text-sm sm:text-base text-[#2D2323] leading-relaxed">
                        When I relocated from Bolivia to Winnipeg to pursue my Bachelor of Commerce at the University of Manitoba, I faced the classic immigrant dilemma: feelings of isolation, culture shock, and unfamiliar sub-zero winters.
                      </p>
                      <p className="text-sm sm:text-base text-[#2D2323] leading-relaxed mt-3">
                        Rather than curating an unrealistic, overly polished feed, I decided to document reality: the hilarious awkward moments, the homesickness, the Latin food hunts in Canada, and the incremental victories of graduation.
                      </p>

                              <div className="mt-6 p-5 bg-[#F6FFB6] border-2 border-[#54100F] rounded-2xl">
                                <p className="font-handwriting text-2xl text-[#54100F] font-bold">
                                  “People don’t follow perfection. People connect with honesty, vulnerability, and genuine human warmth.”
                                </p>
                  </div>
                </div>

                        {/* Strategy Playbook */}
                        <div className="bg-[#54100F] text-white p-8 rounded-3xl border-3 border-[#54100F] shadow-xl">
                          <h3 className="text-xl font-bold font-display text-[#F6FFB6] mb-4">
                            The Tactical Creator Playbook
                          </h3>
                          <div className="grid sm:grid-cols-2 gap-4">
                            {strategyPillars.map((p, idx) => (
                              <div key={idx} className="bg-white/10 p-4 rounded-2xl border border-white/10">
                                <span className="text-xs font-mono font-bold text-[#FFD2C1] block mb-1">0{idx + 1}. {p.title}</span>
                                <p className="text-xs text-white/80 leading-relaxed">{p.desc}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                            {/* Real TikTok Proof & Visuals */}
                            <div className="lg:col-span-5 space-y-6">
                              <div className="bg-white p-3.5 rounded-3xl border-3 border-[#54100F] shadow-2xl relative">
                                <img
                                  src={paperclipIcon}
                                  alt="Paperclip"
                                  className="absolute -top-6 right-8 w-8 h-12 z-20 drop-shadow pointer-events-none"
                                />
                                <div className="overflow-hidden rounded-2xl aspect-[9/15] bg-black">
                                  <img
                                    src={tiktokProfile}
                                    alt="TikTok profile @boliviana.en.canada screenshot"
                                    className="w-full h-full object-cover object-top"
                                  />
                                </div>
                                  <div className="mt-3 text-center">
                                    <p className="font-mono text-xs font-bold text-[#54100F]">TikTok Viral Proof</p>
                                    <p className="text-[11px] text-[#2D2323]/70 font-mono">Pinned videos: 369.1K & 636.1K views</p>
                                  </div>
                              </div>
                            </div>
                          </div>

                            {/* Client Takeaway Banner */}
        <div className="bg-[#F2F1EB] p-8 sm:p-10 rounded-3xl border-4 border-[#54100F] shadow-xl text-center max-w-4xl mx-auto">
                            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#D93240] block mb-2">
                              ✦ WHAT THIS MEANS FOR YOUR BRAND
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-[#54100F] mb-4">
                              If I can build a loyal community of thousands from scratch, imagine what I can do for your product.
                            </h2>
                            <p className="text-sm text-[#2D2323]/80 leading-relaxed max-w-2xl mx-auto mb-6">
                              I bring this exact consumer-retention psychology, viral hook testing, and aesthetic authenticity to every sponsored UGC video and brand collaboration.
                            </p>
                            <a
                              href="#contact"
                              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#D93240] hover:bg-[#54100F] text-white rounded-full font-mono text-xs font-bold uppercase tracking-wider shadow-lg transition-colors"
                            >
                        <span>Partner With Paula</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
                );
}
