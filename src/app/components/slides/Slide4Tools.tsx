import { Grid, Layout, Video, Calendar, Image, Zap, Star } from 'lucide-react';

export function Slide4Tools() {
  const tools = [
    { name: 'Meta Business Suite', icon: Grid },
    { name: 'Canva', icon: Layout },
    { name: 'CapCut', icon: Video },
    { name: 'VN', icon: Video },
    { name: 'Trello', icon: Calendar },
    { name: 'Miro', icon: Grid },
    { name: 'Microsoft Office', icon: Grid },
    { name: 'Google Workspace', icon: Grid },
    { name: 'Lightroom', icon: Image },
    { name: 'AI Tools', icon: Zap },
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-[#F2BBD9]/20 to-[#E9EBF2]/50 p-10">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-block px-5 py-1.5 bg-[#D92B5A] text-white rounded-full text-sm font-medium mb-3">
            ✦ Technology Stack
          </div>
          <h2 className="text-4xl text-[#2A2A2A] mb-3">Software & Tools</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#D92B5A] to-[#78BF91] mx-auto mb-3"></div>
          <p className="text-base text-[#2A2A2A]/70">
            Professional tools for content creation, management, and analytics
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-5 gap-4 flex-1 items-start">
          {tools.map((tool, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center space-y-3 p-4 rounded-xl bg-white border-2 border-[#D92B5A]/20 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="p-4 bg-[#D92B5A] rounded-xl shadow-lg">
                <tool.icon className="w-8 h-8 text-white" />
              </div>
              <span className="text-xs text-[#2A2A2A] text-center font-medium leading-tight">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
