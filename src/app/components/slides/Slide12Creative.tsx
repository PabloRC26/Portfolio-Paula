import { Calendar, Star } from 'lucide-react';
import topicPlan from 'figma:asset/f3dda88a5843941cf2b5b7a8813a6bc83cdc7d94.png';

export function Slide12Creative() {
  return (
    <div className="w-full h-full bg-white p-8">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="text-center mb-3">
          <div className="inline-block px-4 py-1 bg-[#78BF91] text-white rounded-full text-xs font-medium mb-2">
            ✦ Content Planning
          </div>
          <h2 className="text-3xl text-[#2A2A2A] mb-2">Monthly Topic Plan & Key Messages</h2>
          <div className="h-0.5 w-16 bg-gradient-to-r from-[#78BF91] to-[#D9C091] mx-auto mb-1"></div>
          <p className="text-sm text-[#2A2A2A]/70">
            Nuansa Bali Hotel - Strategic Content Calendar (September 2025)
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-3 gap-4 flex-1">
          {/* Topic Plan Preview */}
          <div className="col-span-2">
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl border-2 border-[#E9EBF2] h-full">
              <img 
                src={topicPlan}
                alt="Topic Plan"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Strategy Info */}
          <div className="flex flex-col space-y-3">
            {/* Strategic Approach */}
            <div className="bg-[#78BF91]/5 rounded-lg p-3 border-l-3 border-[#78BF91]">
              <h3 className="text-sm text-[#2A2A2A] mb-1.5 font-semibold flex items-center space-x-1.5">
                <Star className="w-3 h-3 text-[#78BF91]" fill="#78BF91" />
                <span>Strategic Approach</span>
              </h3>
              <p className="text-[10px] text-[#2A2A2A]/80 leading-tight">
                Structured monthly content planning with main content pillars, content formats, and clear key messages to ensure brand messaging consistency.
              </p>
            </div>

            {/* Content Focus */}
            <div className="bg-[#D92B5A]/5 rounded-lg p-3 border-l-3 border-[#D92B5A]">
              <h3 className="text-sm text-[#2A2A2A] mb-1.5 font-semibold flex items-center space-x-1.5">
                <Star className="w-3 h-3 text-[#D92B5A]" fill="#D92B5A" />
                <span>Content Focus</span>
              </h3>
              <p className="text-[10px] text-[#2A2A2A]/80 leading-tight">
                Combination of Entertainment and Facilities & Promo to increase engagement while driving bookings through educational and engaging information.
              </p>
            </div>

            {/* Planning Components */}
            <div className="bg-gradient-to-br from-[#F2BBD9]/10 to-[#E9EBF2]/20 rounded-lg p-3 border-2 border-[#F2BBD9]/30 flex-1">
              <h3 className="text-sm text-[#2A2A2A] mb-2 font-semibold">Planning Components:</h3>
              <div className="space-y-1.5">
                <div className="flex items-center space-x-1.5 p-1.5 bg-white rounded-md">
                  <span className="w-1 h-1 bg-[#78BF91] rounded-full"></span>
                  <span className="text-[10px] font-medium text-[#2A2A2A]">Approval Status</span>
                </div>
                <div className="flex items-center space-x-1.5 p-1.5 bg-white rounded-md">
                  <span className="w-1 h-1 bg-[#D92B5A] rounded-full"></span>
                  <span className="text-[10px] font-medium text-[#2A2A2A]">Content Pillar</span>
                </div>
                <div className="flex items-center space-x-1.5 p-1.5 bg-white rounded-md">
                  <span className="w-1 h-1 bg-[#D9C091] rounded-full"></span>
                  <span className="text-[10px] font-medium text-[#2A2A2A]">Key Messages</span>
                </div>
                <div className="flex items-center space-x-1.5 p-1.5 bg-white rounded-md">
                  <span className="w-1 h-1 bg-[#F2BBD9] rounded-full"></span>
                  <span className="text-[10px] font-medium text-[#2A2A2A]">Publishing Schedule</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
