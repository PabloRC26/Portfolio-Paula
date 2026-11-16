import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Star } from 'lucide-react';

export function Slide7Charts() {
  const monthlyData = [
    { month: 'June', reach: 485000, followers: 1420, leads: 95, engagement: 17800 },
    { month: 'July', reach: 562000, followers: 1580, leads: 108, engagement: 19500 },
    { month: 'August', reach: 598073, followers: 1639, leads: 112, engagement: 20252 },
    { month: 'September', reach: 570000, followers: 1500, leads: 116, engagement: 20000 },
  ];

  return (
    <div className="w-full h-full bg-white p-8">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="text-center mb-3">
          <div className="inline-block px-4 py-1 bg-[#D92B5A] text-white rounded-full text-xs font-medium mb-2">
            ✦ Performance Analytics
          </div>
          <h2 className="text-3xl text-[#2A2A2A] mb-2">Monthly Growth Trends</h2>
          <div className="h-0.5 w-16 bg-gradient-to-r from-[#D92B5A] to-[#78BF91] mx-auto"></div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-2 gap-4 flex-1">
          {/* Reach & Engagement Chart */}
          <div className="bg-white rounded-xl shadow-xl p-4 border-2 border-[#D92B5A]/20 flex flex-col">
            <h3 className="text-lg text-[#2A2A2A] mb-2 flex items-center space-x-2">
              <Star className="w-4 h-4 text-[#D92B5A]" fill="#D92B5A" />
              <span>Reach & Engagement</span>
            </h3>
            <div className="flex-1">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#2A2A2A" opacity={0.1} />
                  <XAxis dataKey="month" stroke="#2A2A2A" style={{ fontSize: '10px' }} />
                  <YAxis stroke="#2A2A2A" style={{ fontSize: '10px' }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '2px solid #D92B5A',
                      borderRadius: '6px',
                      fontSize: '10px'
                    }}
                  />
                  <Legend wrapperStyle={{ fontSize: '10px' }} />
                  <Line 
                    type="monotone" 
                    dataKey="reach" 
                    stroke="#D92B5A" 
                    strokeWidth={2}
                    name="Reach"
                    dot={{ fill: '#D92B5A', r: 3 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="engagement" 
                    stroke="#78BF91" 
                    strokeWidth={2}
                    name="Engagement"
                    dot={{ fill: '#78BF91', r: 3 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Followers & Leads Chart */}
          <div className="bg-white rounded-xl shadow-xl p-4 border-2 border-[#78BF91]/20 flex flex-col">
            <h3 className="text-lg text-[#2A2A2A] mb-2 flex items-center space-x-2">
              <Star className="w-4 h-4 text-[#78BF91]" fill="#78BF91" />
              <span>Followers & Leads</span>
            </h3>
            <div className="flex-1">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#2A2A2A" opacity={0.1} />
                  <XAxis dataKey="month" stroke="#2A2A2A" style={{ fontSize: '10px' }} />
                  <YAxis stroke="#2A2A2A" style={{ fontSize: '10px' }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '2px solid #78BF91',
                      borderRadius: '6px',
                      fontSize: '10px'
                    }}
                  />
                  <Legend wrapperStyle={{ fontSize: '10px' }} />
                  <Bar dataKey="followers" fill="#78BF91" name="Followers" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="leads" fill="#D9C091" name="Leads" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
