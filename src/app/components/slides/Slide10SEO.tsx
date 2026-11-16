import { FileText, Star, ExternalLink } from 'lucide-react';
import article1 from 'figma:asset/2ccc8614ee2563a325e0742c8292598bfb7cd396.png';
import article2 from 'figma:asset/5eb50557031bff0480d1ade2d4adeee293ad2ae5.png';
import article3 from 'figma:asset/6ca98fcf2d2d93efdad714cd6d399a94e22167e3.png';

export function Slide10SEO() {
  const seoArticles = [
    {
      image: article1,
      title: 'Top 5 Heavy Equipment for Food Estate Projects',
      date: 'Sep 25, 2025',
    },
    {
      image: article2,
      title: 'Scania P460: Best Truck for Coal Hauling',
      date: 'Oct 01, 2025',
    },
    {
      image: article3,
      title: 'BW 131 AD-5: 4-Ton Roller',
      date: 'Oct 03, 2025',
    }
  ];

  const results = [
    'Contributed to 20% increase in organic traffic',
    'Improved organic search visibility within 3 months',
    'Articles became references for UT products'
  ];

  return (
    <div className="w-full h-full bg-white p-8">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="text-center mb-3">
          <div className="inline-block px-4 py-1 bg-[#D92B5A] text-white rounded-full text-xs font-medium mb-2">
            ✦ SEO Content Strategy
          </div>
          <h2 className="text-3xl text-[#2A2A2A] mb-2">SEO Article Writing for United Tractors</h2>
          <div className="h-0.5 w-16 bg-gradient-to-r from-[#D92B5A] to-[#78BF91] mx-auto"></div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          {/* Article Samples */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            {seoArticles.map((article, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg overflow-hidden shadow-xl border-2 border-[#D92B5A]/20"
              >
                <div className="relative overflow-hidden h-20">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-2">
                  <p className="text-[10px] text-[#D92B5A] mb-1 uppercase font-semibold">{article.date}</p>
                  <h4 className="text-[10px] text-[#2A2A2A] font-medium line-clamp-2 leading-tight">
                    {article.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          {/* Strategy & Results */}
          <div className="grid grid-cols-2 gap-3 flex-1">
            {/* Strategy */}
            <div className="bg-[#D92B5A]/5 rounded-lg p-4 border-l-3 border-[#D92B5A]">
              <h3 className="text-base text-[#2A2A2A] mb-2 flex items-center space-x-2">
                <FileText className="w-4 h-4 text-[#D92B5A]" />
                <span>Strategy</span>
              </h3>
              <ul className="space-y-1.5">
                <li className="flex items-start space-x-1.5">
                  <Star className="w-2.5 h-2.5 text-[#D92B5A] mt-0.5 flex-shrink-0" fill="#D92B5A" />
                  <span className="text-[10px] text-[#2A2A2A]/80">Wrote 10+ SEO articles (1,000+ words each)</span>
                </li>
                <li className="flex items-start space-x-1.5">
                  <Star className="w-2.5 h-2.5 text-[#D92B5A] mt-0.5 flex-shrink-0" fill="#D92B5A" />
                  <span className="text-[10px] text-[#2A2A2A]/80">Industry-specific keyword research</span>
                </li>
                <li className="flex items-start space-x-1.5">
                  <Star className="w-2.5 h-2.5 text-[#D92B5A] mt-0.5 flex-shrink-0" fill="#D92B5A" />
                  <span className="text-[10px] text-[#2A2A2A]/80">On-page SEO optimization</span>
                </li>
                <li className="flex items-start space-x-1.5">
                  <Star className="w-2.5 h-2.5 text-[#D92B5A] mt-0.5 flex-shrink-0" fill="#D92B5A" />
                  <span className="text-[10px] text-[#2A2A2A]/80">Aligned with UT brand voice</span>
                </li>
              </ul>
            </div>

            {/* Results */}
            <div className="bg-[#78BF91]/5 rounded-lg p-4 border-l-3 border-[#78BF91]">
              <h3 className="text-base text-[#2A2A2A] mb-2 flex items-center space-x-2">
                <Star className="w-4 h-4 text-[#78BF91]" fill="#78BF91" />
                <span>Results</span>
              </h3>
              <div className="space-y-2">
                {results.map((result, idx) => (
                  <div 
                    key={idx}
                    className="p-2 bg-white rounded-lg border-l-3 border-[#78BF91]"
                  >
                    <p className="text-[10px] text-[#2A2A2A] font-medium leading-tight">{result}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
