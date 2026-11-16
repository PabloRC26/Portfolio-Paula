import { Star, PhoneCall, PenTool, Video, Send, RefreshCw, CheckCircle2, ArrowRight } from 'lucide-react';

export function Slide8Process() {
  const steps = [
    {
      num: '01',
      title: 'Discovery Call / Briefing',
      icon: PhoneCall,
      desc: 'Aligning on campaign objectives, target audience, brand aesthetic, and key value propositions.',
      color: 'bg-[#54100F] text-[#F6FFB6]'
    },
    {
      num: '02',
      title: 'Concept + Scriptwriting',
      icon: PenTool,
      desc: 'Developing viral hooks, creative storyboards, and scripts sent for client approval prior to filming.',
      color: 'bg-[#D93240] text-white'
    },
    {
      num: '03',
      title: 'Filming & Editing',
      icon: Video,
      desc: 'High-res filming in authentic environments, dynamic editing, sound design, and text callouts.',
      color: 'bg-[#54100F] text-[#FFD2C1]'
    },
    {
      num: '04',
      title: 'First Draft Delivery',
      icon: Send,
      desc: 'Watermarked draft delivered within 5–7 business days via secure review link for feedback.',
      color: 'bg-white text-[#54100F] border-2 border-[#54100F]'
    },
    {
      num: '05',
      title: 'Revisions (Included)',
      icon: RefreshCw,
      desc: 'Fine-tuning pacing, audio, captions, or cuts based on client notes (1–3 rounds included).',
      color: 'bg-[#F6FFB6] text-[#54100F] border-2 border-[#54100F]'
    },
    {
      num: '06',
      title: 'Final Submission + Raw Files',
      icon: CheckCircle2,
      desc: 'High-definition unwatermarked deliverables plus organized B-roll raw files delivered via Google Drive.',
      color: 'bg-[#54100F] text-[#F6FFB6]'
    }
  ];

  return (
    <div className="w-full h-full bg-[#F2F1EB] p-8 sm:p-12 relative overflow-hidden flex flex-col justify-between border-8 border-[#54100F]/10">
      <Star className="absolute top-8 right-16 w-6 h-6 text-[#D93240] sparkle" fill="#D93240" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#54100F] bg-[#FFD2C1] px-3 py-1 rounded border border-[#54100F]/30">
            ✦ WORKFLOW & TIMELINE
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#54100F] font-display mt-2">
            My Process
          </h2>
        </div>
        <div className="hidden sm:block text-right">
          <p className="font-handwriting text-2xl text-[#54100F] font-bold">seamless from brief to delivery 🚀</p>
        </div>
      </div>

      {/* 6 Steps Grid */}
      <div className="relative z-10 grid sm:grid-cols-2 md:grid-cols-3 gap-4 my-auto">
        {steps.map((step, idx) => (
          <div 
            key={idx}
            className="bg-white p-5 rounded-3xl border-3 border-[#54100F] shadow-lg hover:shadow-xl transition-all relative overflow-hidden flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono font-extrabold text-sm ${step.color}`}>
                  {step.num}
                </span>
                <step.icon className="w-5 h-5 text-[#54100F]/40 group-hover:text-[#D93240] transition-colors" />
              </div>

              <h3 className="font-bold text-[#54100F] text-base mb-2">
                {step.title}
              </h3>

              <p className="text-xs text-[#2D2323]/75 leading-relaxed">
                {step.desc}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-[#54100F]/15 flex items-center justify-between text-[10px] font-mono text-[#54100F]/70">
              <span>Step {idx + 1} of 6</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#D93240] group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="relative z-10 pt-4 border-t-2 border-[#54100F]/20 flex items-center justify-between text-xs font-mono text-[#54100F]/70">
        <span>Paula Robles Portfolio</span>
        <span>Slide 08 / 14</span>
      </div>
    </div>
  );
}
