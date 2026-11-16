import { Star, Play, Heart, MessageCircle, Share2, Eye, Sparkles } from 'lucide-react';
import productSample from '@assets/paula/video-sample-product.jpg';
import dayInLifeSample from '@assets/paula/video-sample-dayinlife.jpg';
import unboxingSample from '@assets/paula/video-sample-unboxing.jpg';
import phoneFrame from '@assets/paula/phone-frame.png';

export function Slide9VideoSamples() {
  const videos = [
    {
      title: 'Product Demo',
      tag: 'BEAUTY & SKINCARE',
      hook: '“The one step that actually changed my skin texture…”',
      image: productSample,
      stats: { views: '84.2K', likes: '12.4K', comments: '184' },
      badge: 'bg-[#D93240] text-white'
    },
    {
      title: '“Day in the Life” Style',
      tag: 'LIFESTYLE & TRAVEL',
      hook: '“What a realistic Tuesday looks like as an international creator…”',
      image: dayInLifeSample,
      stats: { views: '127.6K', likes: '6.0K', comments: '124' },
      badge: 'bg-[#54100F] text-[#F6FFB6]'
    },
    {
      title: 'Unboxing / Haul',
      tag: 'RETAIL & FASHION',
      hook: '“Unboxing my latest package—wait until you see this quality…”',
      image: unboxingSample,
      stats: { views: '45.8K', likes: '7.2K', comments: '98' },
      badge: 'bg-[#FFD2C1] text-[#54100F]'
    }
  ];

  return (
    <div className="w-full h-full bg-[#F2F1EB] p-8 sm:p-12 relative overflow-hidden flex flex-col justify-between border-8 border-[#54100F]/10">
      <Star className="absolute top-8 right-16 w-6 h-6 text-[#D93240] sparkle" fill="#D93240" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#54100F] bg-[#F6FFB6] px-3 py-1 rounded border border-[#54100F]/30">
            ✦ UGC VIDEO WORK
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#54100F] font-display mt-2">
            Video Samples
          </h2>
        </div>
        <div className="hidden sm:block text-right">
          <p className="font-handwriting text-2xl text-[#54100F] font-bold">scroll-stopping organic content 🎬</p>
        </div>
      </div>

      {/* 3 Phone Video Mockups Grid */}
      <div className="relative z-10 grid sm:grid-cols-3 gap-6 my-auto max-w-4xl mx-auto w-full">
        {videos.map((vid, idx) => (
          <div 
            key={idx}
            className="bg-white rounded-3xl border-3 border-[#54100F] shadow-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 flex flex-col"
          >
            {/* Phone Screen Area */}
            <div className="relative aspect-[9/14] bg-neutral-900 overflow-hidden group">
              <img 
                src={vid.image} 
                alt={vid.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
              
              {/* Category Pill */}
              <div className="absolute top-3 left-3">
                <span className={`text-[9px] font-mono font-bold uppercase px-2.5 py-1 rounded-full shadow ${vid.badge}`}>
                  {vid.tag}
                </span>
              </div>

              {/* Center Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border-2 border-[#54100F] flex items-center justify-center text-[#54100F] group-hover:scale-110 transition-transform shadow-lg">
                  <Play className="w-5 h-5 fill-[#54100F] ml-0.5" />
                </div>
              </div>

              {/* TikTok side metrics */}
              <div className="absolute bottom-3 right-3 flex flex-col gap-2 text-white text-[10px] font-mono items-center">
                <div className="flex flex-col items-center">
                  <Heart className="w-4 h-4 fill-white text-white drop-shadow" />
                  <span>{vid.stats.likes}</span>
                </div>
                <div className="flex flex-col items-center">
                  <MessageCircle className="w-4 h-4 fill-white text-white drop-shadow" />
                  <span>{vid.stats.comments}</span>
                </div>
              </div>

              {/* Bottom Hook Overlay */}
              <div className="absolute bottom-3 left-3 right-12 text-white">
                <p className="text-[11px] leading-tight font-medium drop-shadow italic line-clamp-2">
                  {vid.hook}
                </p>
              </div>
            </div>

            {/* Bottom Card Label */}
            <div className="p-4 bg-white border-t-2 border-[#54100F]">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-[#54100F] text-sm">{vid.title}</h3>
                <span className="text-[11px] font-mono text-[#D93240] font-bold flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5" /> {vid.stats.views}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="relative z-10 pt-4 border-t-2 border-[#54100F]/20 flex items-center justify-between text-xs font-mono text-[#54100F]/70">
        <span>Paula Robles Portfolio</span>
        <span>Slide 09 / 14</span>
      </div>
    </div>
  );
}
