import { Star, Sparkles, Award, TrendingUp, Video } from 'lucide-react';
import paulaPhoto from '@assets/paula/paula-asper-grad.jpg';
import paperclipIcon from '@assets/paula/paperclip.svg';

export function Slide1Cover() {
  return (
            <div className="w-full h-full bg-[#F2F1EB] p-8 sm:p-12 relative overflow-hidden flex flex-col justify-between border-8 border-[#54100F]/10">
              {/* Background quirky shapes */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#F6FFB6]/50 rounded-bl-[160px] pointer-events-none -z-0" />
              <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-[#FFD2C1]/40 rounded-full pointer-events-none -z-0" />
              <Star className="absolute top-10 right-16 w-8 h-8 text-[#D93240] sparkle" fill="#D93240" />
              <Sparkles className="absolute bottom-16 right-32 w-6 h-6 text-[#54100F]/40 sparkle" />
              <Star className="absolute top-36 left-12 w-5 h-5 text-[#D93240]/40 sparkle" />

              {/* Top Header Pill */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#54100F] text-[#F6FFB6] rounded-full text-xs font-mono font-bold tracking-widest uppercase shadow-sm">
                  <span>✦ MARKETING PORTFOLIO</span>
                </div>
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#54100F]/70">
                  UGC CREATOR & STRATEGIST
                </div>
              </div>

              {/* Main Content Grid */}
              <div className="relative z-10 grid md:grid-cols-12 gap-8 items-center my-auto">
                {/* Left Typography */}
                <div className="md:col-span-7 space-y-4">
                  <div className="inline-block px-3 py-1 bg-[#D93240] text-white text-xs font-mono font-bold uppercase tracking-wider rounded">
                    SOCIAL MEDIA & DIGITAL MARKETING SPECIALIST
                  </div>

                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#54100F] tracking-tight leading-none font-display">
                    Paula<br />
                    <span className="text-[#D93240] italic font-serif">Robles</span>
                  </h1>

                    <p className="text-xl sm:text-2xl text-[#54100F] font-medium leading-snug">
                      Engaging content with <span className="bg-[#F6FFB6] px-2 py-0.5 rounded font-semibold text-[#54100F]">measurable growth</span>
                    </p>

                    <p className="text-sm sm:text-base text-[#2D2323]/80 max-w-lg leading-relaxed pt-2">
                      Bachelor of Commerce graduate in Marketing & Global Strategy, crafting authentic, human-centered short-form videos and visual campaigns that build loyal communities and convert.
                    </p>

                    <div className="pt-4 flex flex-wrap gap-2 text-xs font-mono">
                      <span className="px-3 py-1 bg-white border-2 border-[#54100F] text-[#54100F] rounded-full font-bold shadow-sm flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-[#D93240]" /> Univ. of Manitoba (B.Com)
                      </span>
                      <span className="px-3 py-1 bg-[#F6FFB6] border-2 border-[#54100F] text-[#54100F] rounded-full font-bold shadow-sm flex items-center gap-1.5">
                        <TrendingUp className="w-3.5 h-3.5 text-[#54100F]" /> 161K+ Likes & 1.1M+ Views
                      </span>
                      <span className="px-3 py-1 bg-[#FFD2C1] border-2 border-[#54100F] text-[#54100F] rounded-full font-bold shadow-sm flex items-center gap-1.5">
                        <Video className="w-3.5 h-3.5 text-[#54100F]" /> +100 UGC Deliverables
                      </span>
                    </div>
                  </div>

                      {/* Right Polaroid Photo Frame */}
                      <div className="md:col-span-5 flex justify-center">
                        <div className="relative group rotate-2 hover:rotate-0 transition-transform duration-300">
                          {/* Quirky Paperclip */}
                          <img
                            src={paperclipIcon}
                            alt="Paperclip"
                            className="absolute -top-6 left-12 w-8 h-12 z-20 drop-shadow-md"
                          />
                          {/* Polaroid Container */}
                          <div className="bg-white p-4 pb-8 rounded-xl shadow-2xl border-4 border-[#54100F] w-72 sm:w-80">
                            <div className="relative overflow-hidden rounded-lg aspect-[3/4] bg-[#F2F1EB]">
                              <img
                                src={paulaPhoto}
                                alt="Paula Robles at University of Manitoba"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="mt-4 text-center">
                              <p className="font-handwriting text-2xl text-[#54100F] font-bold">Paula Robles ✦</p>
                              <p className="text-[11px] font-mono text-[#54100F]/70 uppercase tracking-widest">Asper School of Business</p>
                            </div>
                          </div>
                            {/* Sticky Note Badge */}
                            <div className="absolute -bottom-4 -right-4 bg-[#F6FFB6] border-2 border-[#54100F] px-4 py-2 rounded-lg shadow-lg rotate-[-6deg]">
                              <span className="font-handwriting text-lg text-[#54100F] font-bold">latin vibes only 🇧🇴🇨🇦</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Footer bar */}
                      <div className="relative z-10 pt-4 border-t-2 border-[#54100F]/20 flex items-center justify-between text-xs font-mono text-[#54100F]/70">
                        <span>@boliviana.en.canada</span>
                        <span>Slide 01 / 14</span>
                      </div>
                    </div>
                    );
}
