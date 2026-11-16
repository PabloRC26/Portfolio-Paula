import { Award, Target, Zap, Star } from 'lucide-react';

export function Slide5CaseStudyOverview() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#D92B5A] to-[#F2BBD9] p-10 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-tr-full"></div>
      <Star className="absolute top-8 right-8 w-8 h-8 text-white/20" fill="white" />
      
      <div className="relative h-full flex flex-col text-white">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <Award className="w-8 h-8" />
            <h2 className="text-4xl">Case Study</h2>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-white to-transparent mx-auto mb-4"></div>
          <h3 className="text-3xl mb-4 font-serif italic">
            Boosting Social Media Performance for United Tractors
          </h3>
          <p className="text-base opacity-90 max-w-4xl mx-auto leading-relaxed">
            As the Social Media Specialist for United Tractors, I was responsible for conducting monthly performance analysis, dissecting competitor content strategies, and optimizing our strategy to achieve annual KPIs.
          </p>
        </div>

        {/* Two Column Content */}
        <div className="grid grid-cols-2 gap-5 flex-1">
          {/* Challenge */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-white/20 rounded-lg">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl">Initial Challenge</h3>
            </div>
            <div className="h-0.5 w-16 bg-white/50 mb-4"></div>
            <p className="text-sm leading-relaxed mb-4">
              In the initial period (January-May), the account showed stable performance in Reach and Engagement metrics.
            </p>
            <div className="bg-white/10 rounded-xl p-4 border-l-4 border-white">
              <p className="text-sm">
                However, <strong className="text-lg">Lead generation</strong> was underperforming, averaging only around <strong className="text-xl">10 leads per month</strong>.
              </p>
            </div>
          </div>

          {/* Solution */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-white/20 rounded-lg">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl">Strategy Overhaul</h3>
            </div>
            <div className="h-0.5 w-16 bg-white/50 mb-4"></div>
            <p className="text-sm leading-relaxed mb-4">
              Beginning in June, I implemented a new content strategy focused on conversion by strengthening CTAs and optimizing the content funnel.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/20 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold mb-1">433</div>
                <div className="text-xs">Total Leads</div>
              </div>
              <div className="bg-white/20 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold mb-1">108+</div>
                <div className="text-xs">Avg/Month</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
