import { Star, GraduationCap, Globe, Compass, Sparkles, CheckCircle2 } from 'lucide-react';
import diplomaPhoto from '@assets/paula/paula-grad-diploma.png';
import paperclipIcon from '@assets/paula/paperclip.svg';

export function Slide3About() {
  return (
    <div className="w-full h-full bg-[#F2F1EB] p-8 sm:p-12 relative overflow-hidden flex flex-col justify-between border-8 border-[#54100F]/10">
      {/* Decorative */}
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-[#F6FFB6]/40 rounded-full blur-2xl pointer-events-none" />
      <Star className="absolute top-8 right-16 w-6 h-6 text-[#D93240] sparkle" fill="#D93240" />
      <Sparkles className="absolute bottom-16 left-12 w-5 h-5 text-[#54100F]/30 sparkle" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-white bg-[#54100F] px-3 py-1 rounded">
            ✦ MEET PAULA
          </span>
          <span className="font-handwriting text-2xl text-[#D93240] font-bold">Hi, I’m Paula! 👋</span>
        </div>
        <div className="text-xs font-mono font-bold text-[#54100F]/70 uppercase tracking-widest">
          About Me
        </div>
      </div>

      {/* Main Grid */}
      <div className="relative z-10 grid md:grid-cols-12 gap-8 items-center my-auto">
        {/* Left: Polaroid Degree Photo */}
        <div className="md:col-span-5 flex justify-center">
          <div className="relative group rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
            {/* Paperclip */}
            <img 
              src={paperclipIcon} 
              alt="Paperclip" 
              className="absolute -top-6 right-10 w-8 h-12 z-20 drop-shadow-md"
            />
            {/* Card Frame */}
            <div className="bg-white p-4 pb-6 rounded-2xl shadow-xl border-4 border-[#54100F] w-72 sm:w-80">
              <div className="overflow-hidden rounded-xl aspect-[3/4] bg-[#F2F1EB]">
                <img 
                  src={diplomaPhoto} 
                  alt="Paula Robles graduation with Bachelor of Commerce" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="mt-3 text-center">
                <p className="font-handwriting text-2xl text-[#54100F] font-bold">Bachelor of Commerce 🎓</p>
                <p className="text-[11px] font-mono text-[#D93240] font-semibold uppercase tracking-wider">University of Manitoba</p>
              </div>
            </div>
            
            {/* Badge overlay */}
            <div className="absolute -bottom-3 -left-4 bg-[#FFD2C1] border-2 border-[#54100F] px-3 py-1.5 rounded-lg shadow-md rotate-3">
              <span className="text-xs font-mono font-bold text-[#54100F]">Double Major Graduate</span>
            </div>
          </div>
        </div>

        {/* Right: Bio & Strategic Foundation */}
        <div className="md:col-span-7 space-y-5">
          {/* Main Statement Quote */}
          <div className="bg-white p-6 rounded-3xl border-3 border-[#54100F] shadow-lg relative">
            <div className="text-4xl text-[#D93240] font-serif leading-none absolute -top-3 left-6">“</div>
            <p className="text-base sm:text-lg text-[#54100F] font-medium leading-relaxed italic pl-4">
              I build marketing that resonates on a human level. By blending cultural empathy, modern aesthetic direction, and strategic storytelling, I help brands create content that moves people and drives real commercial growth.
            </p>
          </div>

          {/* Academic Background Card */}
          <div className="bg-[#54100F] text-white p-6 rounded-3xl border-3 border-[#54100F] shadow-lg">
            <div className="flex items-center gap-2 mb-3">
              <GraduationCap className="w-5 h-5 text-[#F6FFB6]" />
              <h3 className="font-display font-bold text-lg text-[#F6FFB6]">Academic Background</h3>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4 pt-1">
              <div className="bg-white/10 p-3.5 rounded-2xl border border-white/15">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#FFD2C1] block">Degree</span>
                <p className="font-bold text-white text-sm sm:text-base">Bachelor of Commerce</p>
                <p className="text-xs text-white/70">Asper School of Business</p>
              </div>
              
              <div className="bg-white/10 p-3.5 rounded-2xl border border-white/15">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#FFD2C1] block">Double Major</span>
                <p className="font-bold text-white text-sm sm:text-base">Marketing & Strategy</p>
                <p className="text-xs text-[#F6FFB6] font-semibold">+ Global Management</p>
              </div>
            </div>

            <p className="text-xs text-white/80 mt-4 leading-relaxed flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#F6FFB6] shrink-0" />
              Direct synergy between data-backed consumer psychology and TikTok-first creator production.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 pt-4 border-t-2 border-[#54100F]/20 flex items-center justify-between text-xs font-mono text-[#54100F]/70">
        <span>Paula Robles Portfolio</span>
        <span>Slide 03 / 14</span>
      </div>
    </div>
  );
}
