import { useState } from 'react';
import { Video, Camera, Play, Eye, Heart, MessageCircle, Star, Sparkles, Check, ArrowRight, Smartphone, Image as ImageIcon } from 'lucide-react';
import { motion } from 'motion/react';

// Samples
import sampleProduct from '@assets/paula/video-sample-product.jpg';
import sampleDayInLife from '@assets/paula/video-sample-dayinlife.jpg';
import sampleUnboxing from '@assets/paula/video-sample-unboxing.jpg';
import photoFlatlay from '@assets/paula/photo-flatlay-journal.jpg';
import photoSkincare from '@assets/paula/photo-lifestyle-skincare.jpg';
import photoWorkspace from '@assets/paula/photo-aesthetic-workspace.jpg';
import photoRunning from '@assets/paula/photo-lifestyle-running.jpg';
import paperclipIcon from '@assets/paula/paperclip.svg';

export function CreativeShowcase() {
  const [activeTab, setActiveTab] = useState<'all' | 'video' | 'photo'>('all');

  const videos = [
    {
      title: 'Skincare Routine & Texture Demo',
      category: 'BEAUTY & SKINCARE',
      hook: '“The one step that actually changed my skin texture…”',
      image: sampleProduct,
      views: '84.2K',
      likes: '12.4K',
      desc: 'Close-up product application, texture shots, and honest first-person review crafted for organic high-converting engagement.'
    },
    {
      title: '“Day in the Life” Lifestyle Vlog',
      category: 'LIFESTYLE & DIASPORA',
      hook: '“What a realistic Tuesday looks like as an international creator…”',
      image: sampleDayInLife,
      views: '127.6K',
      likes: '6.0K',
      desc: 'Seamless organic brand placement within a natural day-in-the-life narrative that feels like a friend recommending a holy grail product.'
    },
    {
      title: 'Tactile Unboxing & First Impressions',
      category: 'APPAREL & E-COMMERCE',
      hook: '“Unboxing my latest package—wait until you see this quality…”',
      image: sampleUnboxing,
      views: '45.8K',
      likes: '7.2K',
      desc: 'Sensory packaging unboxing, fast cuts, trending audio synchronization, and clear value callouts.'
    }
  ];

  const photos = [
    {
      title: 'Flat Lay Editorial',
      category: 'STATIONERY & DESK',
      image: photoFlatlay,
      desc: 'Overhead editorial compositions with balanced shadows, tactile textures, and clean negative space.'
    },
    {
      title: 'Lifestyle Skincare Staging',
      category: 'COSMETICS & WELLNESS',
      image: photoSkincare,
      desc: 'Relatable bathroom counter and vanity staging highlighting real product textures and premium packaging.'
    },
    {
      title: 'Aesthetic Workspace Routine',
      category: 'REMOTE WORK & PRODUCTIVITY',
      image: photoWorkspace,
      desc: 'Cozy, aspirational desk setups designed for lifestyle, tech, and productivity campaigns.'
    },
    {
      title: 'Active & Outdoor Lifestyle',
      category: 'ATHLETIC & MOVEMENT',
      image: photoRunning,
      desc: 'Dynamic in-motion photography capturing products in active outdoor environments.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] py-16 relative overflow-hidden">
      <Star className="absolute top-20 right-12 w-8 h-8 text-[#D93240] sparkle" fill="#D93240" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-4 py-1.5 bg-[#54100F] text-[#F6FFB6] rounded-full text-xs font-mono font-bold tracking-widest uppercase mb-4 shadow">
            ✦ WORK SAMPLES
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#54100F] font-display">
            Creative Portfolio
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-[#D93240] to-[#F6FFB6] mx-auto mt-4 mb-4" />
          <p className="text-base sm:text-lg text-[#2D2323]/80 leading-relaxed font-medium">
            Explore authentic UGC short-form concepts, hook variations, and aesthetic commercial photography.
          </p>

          {/* Filter Pills */}
          <div className="inline-flex p-1 bg-[#F2F1EB] border-2 border-[#54100F] rounded-full mt-6 shadow-sm">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2 rounded-full font-mono text-xs font-bold transition-all ${activeTab === 'all' ? 'bg-[#54100F] text-[#F6FFB6] shadow' : 'text-[#54100F] hover:bg-white/50'
                }`}
            >
              All Assets
            </button>
            <button
              onClick={() => setActiveTab('video')}
              className={`px-5 py-2 rounded-full font-mono text-xs font-bold transition-all ${activeTab === 'video' ? 'bg-[#54100F] text-[#F6FFB6] shadow' : 'text-[#54100F] hover:bg-white/50'
                }`}
            >
              Video UGC
            </button>
            <button
              onClick={() => setActiveTab('photo')}
              className={`px-5 py-2 rounded-full font-mono text-xs font-bold transition-all ${activeTab === 'photo' ? 'bg-[#54100F] text-[#F6FFB6] shadow' : 'text-[#54100F] hover:bg-white/50'
                }`}
            >
              Photography
            </button>
          </div>
        </div>

        {/* Video UGC Section */}
        {(activeTab === 'all' || activeTab === 'video') && (
          <div className="mb-20">
            <div className="flex items-center justify-between mb-8 pb-3 border-b-2 border-[#54100F]/15">
              <div className="flex items-center gap-2.5">
                <Video className="w-6 h-6 text-[#D93240]" />
                <h2 className="text-2xl font-bold font-display text-[#54100F]">
                  Short-Form Video Production (9:16)
                </h2>
              </div>
              <span className="text-xs font-mono text-[#54100F]/70">TikTok • Reels • Shorts</span>
            </div>

            <div className="grid sm:grid-cols-3 gap-8">
              {videos.map((vid, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl border-3 border-[#54100F] shadow-xl overflow-hidden hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="relative aspect-[9/14] bg-neutral-900 overflow-hidden">
                    <img
                      src={vid.image}
                      alt={vid.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/30" />

                    <div className="absolute top-3.5 left-3.5">
                      <span className="text-[10px] font-mono font-bold uppercase px-3 py-1 rounded-full bg-[#D93240] text-white shadow">
                        {vid.category}
                      </span>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-white/90 border-2 border-[#54100F] flex items-center justify-center text-[#54100F] group-hover:scale-110 transition-transform shadow-xl">
                        <Play className="w-6 h-6 fill-[#54100F] ml-0.5" />
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-xs font-medium italic line-clamp-2 text-white/95 drop-shadow">
                        {vid.hook}
                      </p>
                      <div className="flex items-center gap-3 mt-2 text-[11px] font-mono text-[#F6FFB6]">
                        <span className="flex items-center gap-1"><Eye className="w-3.5 h-3.5" /> {vid.views}</span>
                        <span className="flex items-center gap-1"><Heart className="w-3.5 h-3.5 fill-[#F6FFB6]" /> {vid.likes}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-bold text-[#54100F] text-base mb-1.5">{vid.title}</h3>
                    <p className="text-xs text-[#2D2323]/75 leading-relaxed">{vid.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Photography Section */}
        {(activeTab === 'all' || activeTab === 'photo') && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8 pb-3 border-b-2 border-[#54100F]/15">
              <div className="flex items-center gap-2.5">
                <Camera className="w-6 h-6 text-[#D93240]" />
                <h2 className="text-2xl font-bold font-display text-[#54100F]">
                  Commercial Lifestyle Photography
                </h2>
              </div>
              <span className="text-xs font-mono text-[#54100F]/70">E-Commerce • Social Ads • Feed Aesthetic</span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {photos.map((photo, idx) => (
                <div
                  key={idx}
                  className="bg-white p-3.5 pb-5 rounded-2xl border-3 border-[#54100F] shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 group"
                >
                  <div className="overflow-hidden rounded-xl aspect-[4/5] bg-[#F2F1EB] mb-3">
                    <img
                      src={photo.image}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#D93240] font-bold block mb-1">
                      {photo.category}
                    </span>
                    <h3 className="font-bold text-[#54100F] text-sm mb-1">{photo.title}</h3>
                    <p className="text-[11px] text-[#2D2323]/70 leading-snug">{photo.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
