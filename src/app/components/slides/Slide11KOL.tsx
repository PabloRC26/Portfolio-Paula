import { Users, Star, Database } from 'lucide-react';
import kolList from 'figma:asset/81f4aff902f3cee434a8bef58a9c03afe70e0723.png';
import basfLogo from 'figma:asset/c35099463aa6173cb9692160560f2f311b4b8da0.png';

export function Slide11KOL() {
  return (
    <div className="w-full h-full bg-white p-8">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="text-center mb-3">
          <div className="inline-block px-4 py-1 bg-[#78BF91] text-white rounded-full text-xs font-medium mb-2">
            ✦ Influencer Marketing
          </div>
          <div className="flex items-center justify-center space-x-2 mb-2">
            <h2 className="text-3xl text-[#2A2A2A]">KOL Research & Vetting</h2>
            <img src={basfLogo} alt="BASF" className="h-8" />
          </div>
          <div className="h-0.5 w-16 bg-gradient-to-r from-[#78BF91] to-[#D92B5A] mx-auto mb-1"></div>
          <p className="text-sm text-[#2A2A2A]/70">
            BASF Petani Sejahtera KOL Activation Campaign
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-2 gap-4 flex-1">
          {/* KOL Database Preview */}
          <div className="flex flex-col">
            <div className="bg-[#78BF91]/5 rounded-lg p-4 border-2 border-[#78BF91]/20 flex-1 flex flex-col">
              <h3 className="text-base text-[#2A2A2A] mb-2 flex items-center space-x-2">
                <Database className="w-4 h-4 text-[#78BF91]" />
                <span>KOL Database</span>
              </h3>
              <div className="rounded-lg overflow-hidden border-2 border-white shadow-xl flex-1">
                <img 
                  src={kolList}
                  alt="KOL List"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Strategy & Results */}
          <div className="flex flex-col space-y-3">
            {/* Actions */}
            <div className="bg-[#78BF91]/5 rounded-lg p-3 border-l-3 border-[#78BF91]">
              <h3 className="text-sm text-[#2A2A2A] mb-2">Research Process</h3>
              <ul className="space-y-1.5">
                <li className="flex items-start space-x-1.5">
                  <Star className="w-2.5 h-2.5 text-[#78BF91] mt-0.5 flex-shrink-0" fill="#78BF91" />
                  <span className="text-[10px] text-[#2A2A2A]/80">Identified & vetted 30+ potential KOLs</span>
                </li>
                <li className="flex items-start space-x-1.5">
                  <Star className="w-2.5 h-2.5 text-[#78BF91] mt-0.5 flex-shrink-0" fill="#78BF91" />
                  <span className="text-[10px] text-[#2A2A2A]/80">Analyzed engagement rate & demographics</span>
                </li>
                <li className="flex items-start space-x-1.5">
                  <Star className="w-2.5 h-2.5 text-[#78BF91] mt-0.5 flex-shrink-0" fill="#78BF91" />
                  <span className="text-[10px] text-[#2A2A2A]/80">Compiled database with key metrics</span>
                </li>
                <li className="flex items-start space-x-1.5">
                  <Star className="w-2.5 h-2.5 text-[#78BF91] mt-0.5 flex-shrink-0" fill="#78BF91" />
                  <span className="text-[10px] text-[#2A2A2A]/80">Evaluated BASF brand alignment</span>
                </li>
              </ul>
            </div>

            {/* Selection Criteria */}
            <div className="bg-white rounded-lg p-3 border-l-3 border-[#D92B5A] shadow-lg">
              <h3 className="text-sm text-[#2A2A2A] mb-2 font-semibold">Selection Criteria</h3>
              <div className="space-y-1">
                <div className="flex items-center space-x-1.5">
                  <div className="w-1 h-1 bg-[#D92B5A] rounded-full"></div>
                  <span className="text-[10px] text-[#2A2A2A]/80">Minimum 5% engagement rate</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <div className="w-1 h-1 bg-[#D92B5A] rounded-full"></div>
                  <span className="text-[10px] text-[#2A2A2A]/80">Agriculture/farming content focus</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <div className="w-1 h-1 bg-[#D92B5A] rounded-full"></div>
                  <span className="text-[10px] text-[#2A2A2A]/80">Target demographics match</span>
                </div>
              </div>
            </div>

            {/* Platform Coverage */}
            <div className="bg-white rounded-lg p-3 border-l-3 border-[#D9C091] shadow-lg">
              <h3 className="text-sm text-[#2A2A2A] mb-2 font-semibold">Platform Coverage</h3>
              <div className="space-y-1">
                <div className="flex items-center space-x-1.5">
                  <div className="w-1 h-1 bg-[#D9C091] rounded-full"></div>
                  <span className="text-[10px] text-[#2A2A2A]/80">Instagram, TikTok, YouTube</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <div className="w-1 h-1 bg-[#D9C091] rounded-full"></div>
                  <span className="text-[10px] text-[#2A2A2A]/80">Multi-platform strategy</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <div className="w-1 h-1 bg-[#D9C091] rounded-full"></div>
                  <span className="text-[10px] text-[#2A2A2A]/80">30+ verified KOLs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
