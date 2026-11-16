import { Mail, MessageCircle, Linkedin, Download, Star, Sparkles, Heart } from 'lucide-react';
import { Button } from '../ui/button';

export function Slide13Contact() {
  const contactInfo = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+62 812-8625-5933',
      color: '#78BF91'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'triani-sasbitha',
      color: '#D92B5A'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'trianisasbitha04@gmail.com',
      color: '#D9C091'
    }
  ];

  const highlights = [
    'Data-Driven Approach - Every strategy backed by analytics',
    'Creative Excellence - Compelling content & visuals',
    'Strategic Planning - Structured content calendar',
    'Proven Results - Track record in engagement & growth'
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-[#E9EBF2] via-white to-[#F2BBD9]/20 p-8 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-6 right-6 w-20 h-20 border-3 border-[#D92B5A]/20 rounded-full"></div>
      <div className="absolute bottom-6 left-6 w-16 h-16 border-3 border-[#78BF91]/20 rounded-full"></div>
      <Star className="absolute top-12 left-12 w-5 h-5 text-[#D92B5A]/30" fill="#D92B5A" />
      <Star className="absolute bottom-12 right-12 w-5 h-5 text-[#78BF91]/30" fill="#78BF91" />
      
      <div className="relative h-full flex flex-col">
        {/* Header */}
        <div className="text-center mb-4">
          <div className="inline-block px-4 py-1 bg-[#D92B5A] text-white rounded-full text-xs font-medium mb-2">
            ✦ Let's Connect
          </div>
          <h2 className="text-4xl text-[#2A2A2A] mb-2">Let's Collaborate</h2>
          <div className="h-0.5 w-16 bg-gradient-to-r from-[#D92B5A] to-[#78BF91] mx-auto mb-3"></div>
          <p className="text-lg text-[#2A2A2A]/70 max-w-3xl mx-auto font-serif italic">
            Ready to collaborate and drive impactful results through innovative social media strategies
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          {contactInfo.map((contact, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-xl p-4 border-2 relative overflow-hidden"
              style={{ borderColor: contact.color }}
            >
              <div 
                className="absolute top-0 right-0 w-12 h-12 rounded-bl-full opacity-10"
                style={{ backgroundColor: contact.color }}
              ></div>
              
              <div className="flex flex-col items-center text-center space-y-2 relative z-10">
                <div 
                  className="p-3 rounded-lg shadow-lg"
                  style={{ backgroundColor: contact.color }}
                >
                  <contact.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-[10px] text-[#2A2A2A]/60 mb-0.5 uppercase tracking-wider font-semibold">{contact.label}</div>
                  <div className="text-[10px] text-[#2A2A2A] font-medium break-all" style={{ color: contact.color }}>{contact.value}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Work With Me */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {highlights.map((highlight, idx) => (
            <div 
              key={idx}
              className="p-2 bg-white rounded-lg border-l-3 border-[#D92B5A] shadow-lg"
            >
              <div className="flex items-start space-x-1.5">
                <Star className="w-3 h-3 text-[#D92B5A] flex-shrink-0 mt-0.5" fill="#D92B5A" />
                <p className="text-[10px] text-[#2A2A2A] font-medium leading-tight">{highlight}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-[#D92B5A] to-[#F2BBD9] rounded-xl shadow-2xl p-5 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-bl-full"></div>
          <div className="relative z-10">
            <h3 className="text-xl mb-2">Download Full Portfolio</h3>
            <p className="text-sm opacity-90 mb-3">
              Connect with me to discuss how I can help your brand grow
            </p>
            <div className="flex justify-center space-x-2">
              <div className="inline-block px-5 py-2 bg-white text-[#D92B5A] rounded-full font-semibold text-xs">
                <MessageCircle className="w-3 h-3 inline mr-1" />
                Contact Me via WhatsApp
              </div>
              <div className="inline-block px-5 py-2 bg-transparent border-2 border-white text-white rounded-full font-semibold text-xs">
                <Download className="w-3 h-3 inline mr-1" />
                Download CV
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-3">
          <div className="flex items-center justify-center space-x-1.5 text-[#2A2A2A]/50">
            <Heart className="w-2.5 h-2.5" fill="#D92B5A" />
            <span className="text-[10px] font-serif italic">Made with passion for digital excellence</span>
            <Heart className="w-2.5 h-2.5" fill="#D92B5A" />
          </div>
        </div>
      </div>
    </div>
  );
}
