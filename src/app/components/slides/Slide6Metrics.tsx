import { TrendingUp, Users, Target, MessageCircle } from 'lucide-react';

export function Slide6Metrics() {
  const totalMetrics = [
    {
      icon: TrendingUp,
      label: 'Total Reach',
      value: '2,215,073',
      color: '#D92B5A',
    },
    {
      icon: Users,
      label: 'Follower Growth',
      value: '6,139',
      color: '#78BF91',
    },
    {
      icon: Target,
      label: 'Total Leads',
      value: '431',
      color: '#D9C091',
    },
    {
      icon: MessageCircle,
      label: 'Total Engagement',
      value: '77,552',
      color: '#F2BBD9',
    },
  ];

  return (
    <div className="w-full h-full bg-white p-8">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="text-center mb-4">
          <div className="inline-block px-4 py-1 bg-[#D92B5A] text-white rounded-full text-xs font-medium mb-2">
            ✦ United Tractors Performance
          </div>
          <h2 className="text-3xl text-[#2A2A2A] mb-2">Key Metrics (June - September)</h2>
          <div className="h-0.5 w-16 bg-gradient-to-r from-[#D92B5A] to-[#78BF91] mx-auto mb-2"></div>
          <p className="text-sm text-[#2A2A2A]/70">
            4-Month Performance Summary
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-4 flex-1">
          {totalMetrics.map((metric, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-xl p-6 border-3 relative overflow-hidden"
              style={{ borderColor: metric.color }}
            >
              {/* Decorative corner */}
              <div 
                className="absolute top-0 right-0 w-20 h-20 rounded-bl-full opacity-10"
                style={{ backgroundColor: metric.color }}
              ></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div 
                    className="p-3 rounded-lg shadow-lg"
                    style={{ backgroundColor: metric.color }}
                  >
                    <metric.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-[#2A2A2A]/60 text-sm mb-2 font-medium">{metric.label}</div>
                <div 
                  className="text-5xl font-serif italic"
                  style={{ color: metric.color }}
                >
                  {metric.value}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
