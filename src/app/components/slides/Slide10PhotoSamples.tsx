import { Star, Camera, Sparkles, Image as ImageIcon } from 'lucide-react';
import flatlayPhoto from '@assets/paula/photo-flatlay-journal.jpg';
import skincarePhoto from '@assets/paula/photo-lifestyle-skincare.jpg';
import workspacePhoto from '@assets/paula/photo-aesthetic-workspace.jpg';
import runningPhoto from '@assets/paula/photo-lifestyle-running.jpg';
import paperclipIcon from '@assets/paula/paperclip.svg';

export function Slide10PhotoSamples() {
  const photos = [
    {
      title: 'Flat Lays & Stationery',
      tag: 'ORGANIZED AESTHETIC',
      image: flatlayPhoto,
      desc: 'Clean angles, natural lighting, and crisp color palettes.',
      rotate: 'rotate-[-2deg]'
    },
    {
      title: 'Lifestyle Product Shots',
      tag: 'BEAUTY & WELLNESS',
      image: skincarePhoto,
      desc: 'Authentic staging highlighting texture, packaging, and tactile appeal.',
      rotate: 'rotate-[2deg]'
    },
    {
      title: 'Aesthetic Backgrounds',
      tag: 'WORKSPACE & LIFESTYLE',
      image: workspacePhoto,
      desc: 'Warm, cozy, aspirational desk setups and creative routines.',
      rotate: 'rotate-[-1deg]'
    },
    {
      title: 'Active & Outdoor Lifestyle',
      tag: 'FITNESS & MOVEMENT',
      image: runningPhoto,
      desc: 'Natural in-motion capture that connects with active consumers.',
      rotate: 'rotate-[1deg]'
    }
  ];

  return (
    <div className="w-full h-full bg-[#F2F1EB] p-8 sm:p-12 relative overflow-hidden flex flex-col justify-between border-8 border-[#54100F]/10">
      <Star className="absolute top-8 right-16 w-6 h-6 text-[#D93240] sparkle" fill="#D93240" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#54100F] bg-[#FFD2C1] px-3 py-1 rounded border border-[#54100F]/30">
            ✦ VISUAL STORYTELLING
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#54100F] font-display mt-2">
            Photo Samples
          </h2>
        </div>
        <div className="hidden sm:block text-right">
          <p className="font-handwriting text-2xl text-[#54100F] font-bold">curated aesthetic photography 📸</p>
        </div>
      </div>

      {/* 4 Photos Grid */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 my-auto">
        {photos.map((p, idx) => (
          <div 
            key={idx}
            className={`bg-white p-3 pb-5 rounded-2xl border-3 border-[#54100F] shadow-lg hover:shadow-2xl transition-all ${p.rotate} hover:rotate-0 hover:scale-105 duration-300 relative group`}
          >
            {/* Paperclip on first two */}
            {idx < 2 && (
              <img 
                src={paperclipIcon} 
                alt="Paperclip" 
                className="absolute -top-4 right-4 w-6 h-10 z-20 drop-shadow-sm pointer-events-none"
              />
            )}
            
            <div className="overflow-hidden rounded-xl aspect-[4/5] bg-[#F2F1EB] mb-3">
              <img 
                src={p.image} 
                alt={p.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div>
              <span className="text-[9px] font-mono uppercase tracking-wider text-[#D93240] font-bold block mb-0.5">
                {p.tag}
              </span>
              <h3 className="font-bold text-[#54100F] text-sm leading-tight mb-1">
                {p.title}
              </h3>
              <p className="text-[10px] text-[#2D2323]/70 leading-tight">
                {p.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="relative z-10 pt-4 border-t-2 border-[#54100F]/20 flex items-center justify-between text-xs font-mono text-[#54100F]/70">
        <span>Paula Robles Portfolio</span>
        <span>Slide 10 / 14</span>
      </div>
    </div>
  );
}
