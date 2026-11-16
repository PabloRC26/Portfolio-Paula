import { Target, Users, Lightbulb, HandshakeIcon, Clock, PenTool, BarChart3, Search, TrendingUp, Star } from 'lucide-react';

export function Slide3Competencies() {
  const competencies = [
    {
      category: 'Strategy & Management',
      color: '#D92B5A',
      skills: [
        { name: 'Social Media Management', icon: Users },
        { name: 'Digital Marketing', icon: Target },
        { name: 'Content Creation', icon: PenTool },
        { name: 'Strategic Thinking', icon: Lightbulb },
        { name: 'Team Collaboration', icon: HandshakeIcon },
        { name: 'Time Management', icon: Clock },
      ],
    },
    {
      category: 'Creative & Content',
      color: '#78BF91',
      skills: [
        { name: 'Copywriting & Editing', icon: PenTool },
        { name: 'Graphic Design', icon: Target },
        { name: 'Video Editing', icon: Users },
        { name: 'Photography', icon: Lightbulb },
      ],
    },
    {
      category: 'Analytics & Research',
      color: '#D9C091',
      skills: [
        { name: 'Analytics & Reporting', icon: BarChart3 },
        { name: 'Market Research', icon: Search },
        { name: 'SEO Optimization', icon: TrendingUp },
      ],
    },
  ];

  return (
    <div className="w-full h-full bg-white p-10">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-block px-5 py-1.5 bg-[#D92B5A] text-white rounded-full text-sm font-medium mb-3">
            ✦ Skill Set
          </div>
          <h2 className="text-4xl text-[#2A2A2A] mb-3">Core Competencies</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#D92B5A] to-[#78BF91] mx-auto"></div>
        </div>

        {/* Competencies Grid */}
        <div className="grid grid-cols-3 gap-5 flex-1">
          {competencies.map((category, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 flex flex-col"
              style={{ borderColor: category.color }}
            >
              {/* Category header */}
              <div 
                className="p-4 text-white text-center"
                style={{ backgroundColor: category.color }}
              >
                <h3 className="text-lg font-semibold">{category.category}</h3>
              </div>
              
              <div className="p-4 flex-1">
                <div className="space-y-2">
                  {category.skills.map((skill, skillIdx) => (
                    <div
                      key={skillIdx}
                      className="flex items-center space-x-2 p-2 rounded-lg bg-gray-50"
                    >
                      <div 
                        className="p-1.5 rounded-lg"
                        style={{ backgroundColor: `${category.color}20` }}
                      >
                        <skill.icon 
                          className="w-4 h-4"
                          style={{ color: category.color }}
                        />
                      </div>
                      <span className="text-[#2A2A2A] text-xs font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
