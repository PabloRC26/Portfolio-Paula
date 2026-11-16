import { Star, Mail, Phone, Instagram, Send, Sparkles, MessageCircle, Globe } from 'lucide-react';
import paulaPhoto from '@assets/paula/paula-grad-friends.png';
import curlyArrow from '@assets/paula/curly-arrow.svg';
import paperclipIcon from '@assets/paula/paperclip.svg';

export function Slide14Contact() {
  return (
    <div className="w-full h-full bg-[#F2F1EB] p-8 sm:p-12 relative overflow-hidden flex flex-col justify-between border-8 border-[#54100F]/10">
      <Star className="absolute top-8 right-16 w-6 h-6 text-[#D93240] sparkle" fill="#D93240" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-white bg-[#D93240] px-3 py-1 rounded">
            ✦ READY TO GROW?
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#54100F] font-display mt-2">
            Let’s Work Together!
          </h2>
        </div>
        <div className="hidden sm:block text-right">
          <p className="font-handwriting text-2xl text-[#54100F] font-bold">let’s create magic ✨</p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 grid md:grid-cols-12 gap-8 items-center my-auto">
        {/* Left: Contact Details Card */}
        <div className="md:col-span-7 space-y-4">
          <div className="bg-[#54100F] text-white p-6 sm:p-8 rounded-3xl border-3 border-[#54100F] shadow-2xl relative overflow-hidden">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#F6FFB6] mb-1">
              Paula Robles
            </h3>
            <p className="text-xs font-mono text-[#FFD2C1] uppercase tracking-widest mb-6">
              UGC Creator • Digital Marketing Specialist
            </p>

            <div className="space-y-3.5">
              <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/10 hover:bg-white/15 transition-colors border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#D93240] flex items-center justify-center text-white shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#FFD2C1] block">Email Inquiries</span>
                  <p className="text-sm font-mono text-white font-semibold truncate">paula.robles.marketing@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/10 hover:bg-white/15 transition-colors border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#F6FFB6] flex items-center justify-center text-[#54100F] shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#FFD2C1] block">TikTok & Social</span>
                  <p className="text-sm font-mono text-white font-semibold truncate">@boliviana.en.canada</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/10 hover:bg-white/15 transition-colors border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#FFD2C1] flex items-center justify-center text-[#54100F] shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#FFD2C1] block">Location & Remote</span>
                  <p className="text-sm font-mono text-white font-semibold truncate">Winnipeg, Canada • Available Worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Quirky Photo + Hand-drawn Arrow */}
        <div className="md:col-span-5 flex flex-col items-center justify-center relative">
          <div className="relative group rotate-2 hover:rotate-0 transition-transform duration-300">
            {/* Paperclip */}
            <img 
              src={paperclipIcon} 
              alt="Paperclip" 
              className="absolute -top-5 left-8 w-7 h-11 z-20 drop-shadow"
            />
            {/* Photo frame */}
            <div className="bg-white p-3 pb-6 rounded-2xl shadow-xl border-4 border-[#54100F] w-64 sm:w-72">
              <div className="overflow-hidden rounded-xl aspect-[4/5] bg-[#F2F1EB]">
                <img 
                  src={paulaPhoto} 
                  alt="Paula Robles celebrating graduation" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="mt-3 text-center">
                <span className="font-handwriting text-xl text-[#54100F] font-bold">Ready when you are! 💌</span>
              </div>
            </div>

            {/* Quirky Arrow */}
            <img 
              src={curlyArrow} 
              alt="Arrow pointing" 
              className="absolute -bottom-8 -left-12 w-16 h-28 pointer-events-none drop-shadow rotate-12"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 pt-4 border-t-2 border-[#54100F]/20 flex items-center justify-between text-xs font-mono text-[#54100F]/70">
        <span>Paula Robles Portfolio</span>
        <span>Slide 14 / 14</span>
      </div>
    </div>
  );
}
