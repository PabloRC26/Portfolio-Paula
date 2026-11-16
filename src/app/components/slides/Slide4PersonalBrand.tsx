import { Star, Heart, TrendingUp, Sparkles, MessageCircle, Share2, Eye } from 'lucide-react';
import tiktokProfile from '@assets/paula/tiktok-profile.png';
import tiktokVlog from '@assets/paula/tiktok-vlog.png';
import paulaFlag from '@assets/paula/paula-bolivia-flag.png';

export function Slide4PersonalBrand() {
  return (
    <div className="w-full h-full bg-[#F2F1EB] p-8 sm:p-12 relative overflow-hidden flex flex-col justify-between border-8 border-[#54100F]/10">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFD2C1]/40 rounded-full blur-3xl pointer-events-none" />
      <Star className="absolute top-8 right-16 w-6 h-6 text-[#D93240] sparkle" fill="#D93240" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#54100F] bg-[#F6FFB6] px-3 py-1 rounded border border-[#54100F]/30">
            ✦ AUTHENTIC COMMUNITY BUILDING
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#54100F] font-display mt-2">
            My Personal Brand
          </h2>
        </div>
        <div className="text-right">
          <span className="font-mono text-xs font-bold text-[#D93240] bg-white px-3 py-1 rounded-full border border-[#D93240]">
            @boliviana.en.canada 🇧🇴🇨🇦
          </span>
        </div>
      </div>

      {/* Main Grid */}
      <div className="relative z-10 grid md:grid-cols-12 gap-6 items-center my-auto">
        {/* Left Column: Story + Key Insight */}
        <div className="md:col-span-6 space-y-4">
          <div className="bg-white p-5 sm:p-6 rounded-3xl border-3 border-[#54100F] shadow-lg">
            <p className="text-sm sm:text-base text-[#2D2323] leading-relaxed">
              When I moved abroad, I felt completely out of place. So I just started sharing what my life actually looked like—the homesickness, the awkward moments, and the small wins of starting over.
            </p>
            <p className="text-sm sm:text-base text-[#2D2323] leading-relaxed mt-3">
              Slowly, people started connecting with the honesty of it. It taught me the most important thing I know about content:
            </p>
            <div className="mt-4 p-3 bg-[#F6FFB6] border-2 border-[#54100F] rounded-xl text-center">
              <span className="font-handwriting text-xl sm:text-2xl text-[#54100F] font-bold block">
                “You don’t need perfection to build a community, you just need to be real.”
              </span>
            </div>
          </div>

          {/* Social Proof Stats Banner */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-[#54100F] text-[#F6FFB6] p-3.5 rounded-2xl border-2 border-[#54100F] text-center shadow-md">
              <div className="text-2xl font-mono font-extrabold">161K+</div>
              <div className="text-[10px] uppercase font-mono tracking-wider text-white/80">Total Likes</div>
            </div>
            <div className="bg-white text-[#54100F] p-3.5 rounded-2xl border-2 border-[#54100F] text-center shadow-md">
              <div className="text-2xl font-mono font-extrabold text-[#D93240]">636K</div>
              <div className="text-[10px] uppercase font-mono tracking-wider text-[#54100F]/70">Top Video Views</div>
            </div>
            <div className="bg-[#FFD2C1] text-[#54100F] p-3.5 rounded-2xl border-2 border-[#54100F] text-center shadow-md">
              <div className="text-2xl font-mono font-extrabold">4.4K+</div>
              <div className="text-[10px] uppercase font-mono tracking-wider text-[#54100F]/70">Followers</div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Evidence (TikTok App Screenshot + Paula Photo) */}
        <div className="md:col-span-6 grid grid-cols-12 gap-3 items-center">
          {/* Real TikTok Profile Card */}
          <div className="col-span-7 bg-white p-2.5 rounded-2xl border-3 border-[#54100F] shadow-xl rotate-[-1deg] hover:rotate-0 transition-transform">
            <div className="overflow-hidden rounded-xl aspect-[9/16] bg-black">
              <img 
                src={tiktokProfile} 
                alt="TikTok Profile @boliviana.en.canada" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            <p className="text-[11px] font-mono text-center text-[#54100F] font-bold mt-2">
              TikTok Proof: 369K & 636K viral pins
            </p>
          </div>

          {/* Side Stack: Vlog Frame + Flag Photo */}
          <div className="col-span-5 space-y-3">
            <div className="bg-white p-2 rounded-2xl border-3 border-[#54100F] shadow-md rotate-2 hover:rotate-0 transition-transform">
              <div className="overflow-hidden rounded-xl aspect-[4/5] bg-[#F2F1EB]">
                <img 
                  src={paulaFlag} 
                  alt="Paula with Bolivian flag at Manitoba" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <p className="text-[10px] font-handwriting text-center text-[#54100F] font-bold mt-1 text-sm">
                Bolivian in Canada 🇧🇴
              </p>
            </div>

            <div className="bg-[#54100F] text-[#F6FFB6] p-3 rounded-2xl border-2 border-[#54100F] shadow-md text-center">
              <div className="flex items-center justify-center gap-1 text-xs font-mono font-bold text-[#FFD2C1]">
                <Eye className="w-3.5 h-3.5" /> 1.1M+ Total Reach
              </div>
              <p className="text-[10px] text-white/80 mt-1 leading-snug">
                100% Organic, zero ad spend
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 pt-4 border-t-2 border-[#54100F]/20 flex items-center justify-between text-xs font-mono text-[#54100F]/70">
        <span>Paula Robles Portfolio</span>
        <span>Slide 04 / 14</span>
      </div>
    </div>
  );
}
