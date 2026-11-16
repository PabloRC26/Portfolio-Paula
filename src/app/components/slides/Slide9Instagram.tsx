import { Star } from 'lucide-react';
import utProfile from 'figma:asset/d4465a2849f71519fcc80b71bfb9201588cf2f68.png';
import utKomatsuPost from 'figma:asset/3ccf0d90bf8357f0270edeae80c5bbe6b456ee62.png';
import utScaniaPost from 'figma:asset/c5c177b9fe03f70fe5a393a61377663473ea4899.png';

export function Slide9Instagram() {
  return (
    <div className="w-full h-full bg-white p-8">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="text-center mb-3">
          <div className="inline-block px-4 py-1 bg-[#D92B5A] text-white rounded-full text-xs font-medium mb-2">
            ✦ Social Media Management
          </div>
          <h2 className="text-3xl text-[#2A2A2A] mb-2">Instagram Content Management</h2>
          <div className="h-0.5 w-16 bg-gradient-to-r from-[#D92B5A] to-[#78BF91] mx-auto mb-1"></div>
          <p className="text-sm text-[#2A2A2A]/70">
            Strategic content creation and community management for United Tractors
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-3 gap-4 flex-1">
          {/* Profile Management */}
          <div className="flex flex-col items-center">
            <div className="relative mb-2" style={{ width: '140px' }}>
              <div className="relative bg-[#2A2A2A] rounded-[1.3rem] p-1.5 shadow-2xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-3 bg-[#2A2A2A] rounded-b-lg z-10"></div>
                <div className="relative bg-white rounded-[1.1rem] overflow-hidden" style={{ aspectRatio: '9/19.5' }}>
                  <img 
                    src={utProfile}
                    alt="UT Profile"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-14 h-0.5 bg-white/30 rounded-full"></div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-xs font-semibold text-[#2A2A2A]">Profile Management</p>
              <p className="text-[10px] text-[#2A2A2A]/60">Account Optimization</p>
            </div>
          </div>

          {/* Komatsu Post */}
          <div className="flex flex-col">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden border-2 border-[#78BF91]/20 mb-2 flex-1">
              <div className="relative overflow-hidden h-full">
                <img 
                  src={utKomatsuPost}
                  alt="Komatsu Post"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="text-center">
              <p className="text-xs font-semibold text-[#2A2A2A]">Product Showcase</p>
              <p className="text-[10px] text-[#2A2A2A]/60">Komatsu Equipment</p>
            </div>
          </div>

          {/* Scania Post */}
          <div className="flex flex-col">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden border-2 border-[#D9C091]/20 mb-2 flex-1">
              <div className="relative overflow-hidden h-full">
                <img 
                  src={utScaniaPost}
                  alt="Scania Post"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="text-center">
              <p className="text-xs font-semibold text-[#2A2A2A]">Lead Generation</p>
              <p className="text-[10px] text-[#2A2A2A]/60">Scania Campaign</p>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-3 p-2 bg-[#D92B5A]/5 rounded-lg border-l-3 border-[#D92B5A]">
          <div className="flex items-start space-x-2">
            <Star className="w-3 h-3 text-[#D92B5A] flex-shrink-0 mt-0.5" fill="#D92B5A" />
            <p className="text-[10px] text-[#2A2A2A]/80 leading-tight">
              <strong className="text-[#D92B5A]">Content Strategy:</strong> Each post strategically designed with strong CTAs, product education, and engagement-driven captions to convert followers into qualified leads.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
