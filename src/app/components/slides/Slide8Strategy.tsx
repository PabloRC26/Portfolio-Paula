import { Star, TrendingUp } from 'lucide-react';

export function Slide8Strategy() {
  const insights = [
    {
      text: 'Highest reach achieved in August with 598,073 reach, demonstrating the effectiveness of content produced during that period.',
      highlight: 'August with 598,073 reach',
      color: '#D92B5A'
    },
    {
      text: 'Consistent follower growth each month with a total of 6,139 new followers in 4 months.',
      highlight: '6,139 new followers',
      color: '#78BF91'
    },
    {
      text: 'Lead generation shows a positive trend with a total of 431 quality leads generated.',
      highlight: '431 quality leads',
      color: '#D9C091'
    },
    {
      text: 'Engagement rate increased by an average of 10%, showing content that resonates with the audience.',
      highlight: '10%',
      color: '#D92B5A'
    }
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-[#78BF91] to-[#D9C091] p-8 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-tr-full"></div>
      
      <div className="relative h-full flex flex-col text-white">
        {/* Header */}
        <div className="text-center mb-4">
          <Star className="w-10 h-10 mx-auto mb-3" fill="white" />
          <h2 className="text-3xl mb-3">Explosive Lead Generation Growth</h2>
          <div className="h-0.5 w-20 bg-white/50 mx-auto mb-3"></div>
          <p className="text-base leading-snug max-w-5xl mx-auto">
            We successfully generated <span className="font-bold text-2xl">433 leads</span>, a dramatic surge from the 51 leads gathered in the previous five months. This boosted the average from ~10 to over <span className="font-bold text-2xl">108 leads per month</span>, all while maintaining stable Reach and Engagement metrics.
          </p>
        </div>

        {/* Key Insights Grid */}
        <div className="grid grid-cols-2 gap-3 flex-1">
          {insights.map((insight, idx) => (
            <div 
              key={idx}
              className="p-3 bg-white/10 backdrop-blur-sm rounded-lg border-2 border-white/20"
            >
              <div className="flex items-start space-x-2">
                <TrendingUp className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs leading-snug">
                    {insight.text.split(insight.highlight)[0]}
                    <span className="font-bold text-base">
                      {insight.highlight}
                    </span>
                    {insight.text.split(insight.highlight)[1]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-4 p-3 bg-white/10 backdrop-blur-sm rounded-lg border-2 border-white/20 text-center">
          <p className="text-sm">
            <strong>Result:</strong> This new strategy proved effective in converting audience interactions into tangible business results, drastically accelerating progress towards the annual KPI target.
          </p>
        </div>
      </div>
    </div>
  );
}
