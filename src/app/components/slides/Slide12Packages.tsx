import { Star, Check, Sparkles, Zap, ShieldCheck } from 'lucide-react';

export function Slide12Packages() {
  const packages = [
    {
      tier: '1',
      name: 'Starter',
      pricePHP: '₱4,000',
      priceUSD: '$70 USD',
      desc: 'Ideal for brands testing UGC or launching a single targeted product campaign.',
      features: [
        '1 UGC Concept Video (9:16)',
        '2 Lifestyle / Product Photos',
        'Raw B-Roll Footage Delivery',
        '1 Revision Included',
        'Turnaround: 5-7 business days',
      ],
      popular: false,
      badge: 'bg-white text-[#54100F] border border-[#54100F]'
    },
    {
      tier: '2',
      name: 'Standard',
      pricePHP: '₱8,000',
      priceUSD: '$140 USD',
      desc: 'The best balance for high-performing organic reach and paid social A/B testing.',
      features: [
        '2 UGC Videos (Different Hooks)',
        '5 Lifestyle / Product Photos',
        'Custom Scriptwriting & Concepts',
        'Warm Voiceover Narration',
        '2 Revisions Included',
      ],
      popular: true,
      badge: 'bg-[#D93240] text-white'
    },
    {
      tier: '3',
      name: 'Premium',
      pricePHP: '₱12,000',
      priceUSD: '$210 USD',
      desc: 'Comprehensive content arsenal ready for full omnichannel campaign deployment.',
      features: [
        '3 UGC Videos (Multi-angle & hooks)',
        '10 Lifestyle / Product Photos',
        'Scriptwriting + Voiceover',
        'Raw + Edited 4K Files Batch',
        '3 Revisions Included',
      ],
      popular: false,
      badge: 'bg-[#54100F] text-[#F6FFB6]'
    }
  ];

  return (
    <div className="w-full h-full bg-[#F2F1EB] p-8 sm:p-12 relative overflow-hidden flex flex-col justify-between border-8 border-[#54100F]/10">
      <Star className="absolute top-8 right-16 w-6 h-6 text-[#D93240] sparkle" fill="#D93240" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#54100F] bg-[#F6FFB6] px-3 py-1 rounded border border-[#54100F]/30">
            ✦ TRANSPARENT RATES
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#54100F] font-display mt-2">
            UGC Packages
          </h2>
        </div>
        <div className="hidden sm:block text-right">
          <p className="font-handwriting text-2xl text-[#54100F] font-bold">flexible options for every brand 📦</p>
        </div>
      </div>

      {/* 3 Packages Grid */}
      <div className="relative z-10 grid md:grid-cols-3 gap-6 my-auto items-stretch">
        {packages.map((pkg, idx) => (
          <div 
            key={idx}
            className={`bg-white rounded-3xl border-3 border-[#54100F] p-6 shadow-xl flex flex-col justify-between relative transition-all hover:-translate-y-1 ${
              pkg.popular ? 'ring-4 ring-[#D93240] shadow-2xl scale-[1.02]' : ''
            }`}
          >
            {pkg.popular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#D93240] text-white text-[10px] font-mono font-bold uppercase px-4 py-1 rounded-full shadow-md flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Most Popular
              </div>
            )}

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold text-[#54100F]/60">PACKAGE {pkg.tier}</span>
                <span className={`text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full ${pkg.badge}`}>
                  {pkg.name}
                </span>
              </div>

              <div className="mt-3 mb-1">
                <span className="text-3xl sm:text-4xl font-extrabold font-mono text-[#54100F] block">
                  {pkg.pricePHP}
                </span>
                <span className="text-xs font-mono text-[#D93240] font-bold">
                  {pkg.priceUSD}
                </span>
              </div>

              <p className="text-xs text-[#2D2323]/70 leading-relaxed my-3 pb-3 border-b border-[#54100F]/15">
                {pkg.desc}
              </p>

              <ul className="space-y-2">
                {pkg.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2 text-xs text-[#2D2323]">
                    <Check className="w-4 h-4 text-[#D93240] shrink-0 mt-0.5" />
                    <span className="leading-tight font-medium">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 pt-3 border-t border-[#54100F]/15 text-center">
              <span className="text-[11px] font-mono text-[#54100F] font-semibold">
                ✓ Commercial usage license included
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Packages Callout */}
      <div className="relative z-10 pt-3 border-t-2 border-[#54100F]/20 flex flex-wrap items-center justify-between text-xs font-mono text-[#54100F]/80">
        <span className="font-bold text-[#D93240]">
          * Custom packages available! Whitelisting, paid ad usage rights, & retainer terms upon request.
        </span>
        <span>Slide 12 / 14</span>
      </div>
    </div>
  );
}
