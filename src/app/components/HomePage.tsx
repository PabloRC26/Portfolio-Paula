import { useState } from 'react';
import { 
  TrendingUp, Users, Target, Sparkles, Star, PenTool, Palette, 
  BarChart3, Search, Award, MessageCircle, ExternalLink, Mail, 
  Camera, Video, Layout, Lightbulb, Clock, CheckCircle2, ArrowRight, 
  Heart, Quote, GraduationCap, Globe, Check, Play, Eye, HelpCircle, 
  Send, Share2, Compass, PhoneCall, RefreshCw, Smartphone, ChevronDown
} from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from './ui/button';

// Assets
import paulaAsper from '@assets/paula/paula-asper-grad.jpg';
import paulaDiploma from '@assets/paula/paula-grad-diploma.png';
import paulaFlag from '@assets/paula/paula-bolivia-flag.png';
import paulaFriends from '@assets/paula/paula-grad-friends.png';
import tiktokProfile from '@assets/paula/tiktok-profile.png';
import tiktokVlog from '@assets/paula/tiktok-vlog.png';
import sampleProduct from '@assets/paula/video-sample-product.jpg';
import sampleDayInLife from '@assets/paula/video-sample-dayinlife.jpg';
import sampleUnboxing from '@assets/paula/video-sample-unboxing.jpg';
import photoFlatlay from '@assets/paula/photo-flatlay-journal.jpg';
import photoSkincare from '@assets/paula/photo-lifestyle-skincare.jpg';
import photoWorkspace from '@assets/paula/photo-aesthetic-workspace.jpg';
import photoRunning from '@assets/paula/photo-lifestyle-running.jpg';
import paperclipIcon from '@assets/paula/paperclip.svg';
import curlyArrow from '@assets/paula/curly-arrow.svg';

// Tool icons
import iconCapcut from '@assets/paula/icon-capcut.png';
import iconCanva from '@assets/paula/icon-canva.png';
import iconGoogle from '@assets/paula/icon-google.png';
import iconMeta from '@assets/paula/icon-meta.png';
import iconAntigravity from '@assets/paula/icon-antigravity.png';
import iconPinterest from '@assets/paula/icon-pinterest.png';
import iconMailchimp from '@assets/paula/icon-mailchimp.png';
import iconManychat from '@assets/paula/icon-manychat.png';
import iconTiktok from '@assets/paula/icon-tiktok.png';

interface HomePageProps {
  onNavigate?: (page: string) => void;
  onPresentationMode?: () => void;
}

export function HomePage({ onNavigate, onPresentationMode }: HomePageProps) {
  // State for interactive features
  const [selectedCurrency, setSelectedCurrency] = useState<'PHP' | 'USD'>('PHP');
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeGalleryTab, setActiveGalleryTab] = useState<'all' | 'video' | 'photo'>('all');
  const [selectedPackage, setSelectedPackage] = useState<string>('Standard');
  const [includeAdUsage, setIncludeAdUsage] = useState<boolean>(false);
  const [extraHooks, setExtraHooks] = useState<number>(0);
  const [contactSubmitted, setContactSubmitted] = useState<boolean>(false);

  // Tools list
  const tools = [
    { name: 'CapCut', role: 'Short-Form Video Editing', icon: iconCapcut },
    { name: 'Canva', role: 'Decks & Visual Branding', icon: iconCanva },
    { name: 'Google Workspace', role: 'Briefs & Client Asset Drives', icon: iconGoogle },
    { name: 'Meta Business Suite', role: 'Instagram & Facebook Ads', icon: iconMeta },
    { name: 'Antigravity AI', role: 'Market Intelligence & Automation', icon: iconAntigravity },
    { name: 'Pinterest', role: 'Visual Trends & Moodboards', icon: iconPinterest },
    { name: 'Mailchimp', role: 'Email Marketing & Retention', icon: iconMailchimp },
    { name: 'Manychat', role: 'DM Lead Capture & Funnels', icon: iconManychat },
    { name: 'TikTok for Business', role: 'Viral Campaign Distribution', icon: iconTiktok },
  ];

  // Competency pillars
  const pillars = [
    {
      title: 'Strategy & Management',
      icon: Target,
      bg: 'bg-white',
      badge: 'bg-[#54100F] text-[#F6FFB6]',
      skills: [
        'Social media management',
        'Brand positioning & messaging',
        'Audience segmentation',
        'Community management',
        'Trend forecasting',
        'Creative direction',
        'Team collaboration',
        'Strategic thinking',
      ]
    },
    {
      title: 'Creative & Content',
      icon: PenTool,
      bg: 'bg-white',
      badge: 'bg-[#D93240] text-white',
      skills: [
        'Copywriting & editing',
        'Video editing (CapCut, VN)',
        'Videography & filming',
        'Email marketing copy',
        'User-generated content (UGC)',
        'Captions & accessibility',
        'Trend adaptation',
      ]
    },
    {
      title: 'Analytics & Research',
      icon: BarChart3,
      bg: 'bg-white',
      badge: 'bg-[#54100F] text-[#FFD2C1]',
      skills: [
        'Analytics & reporting',
        'Market trend & consumer research',
        'SEO optimization',
        'Competitors’ benchmarking',
        'AI-Powered market intelligence',
        'Research automation',
      ]
    }
  ];

  // 6-Step process
  const processSteps = [
    { num: '01', title: 'Discovery Call / Briefing', desc: 'Aligning on goals, target demographic, unique value propositions, and deliverables.' },
    { num: '02', title: 'Concept + Scriptwriting', desc: 'Crafting high-retention hooks and storyboards approved by your team before filming.' },
    { num: '03', title: 'Filming & Editing', desc: 'Authentic 4K filming, dynamic pacing, native typography, and audio mastering.' },
    { num: '04', title: 'First Draft Delivery', desc: 'Secure review link sent within 5–7 business days for initial stakeholder review.' },
    { num: '05', title: 'Revisions (Included)', desc: 'Fast turnaround on timestamped edit requests to ensure brand voice perfection.' },
    { num: '06', title: 'Final Submission + Raw Files', desc: 'Full-resolution unwatermarked deliverables and organized raw B-roll delivered via Drive.' },
  ];

  // UGC Packages
  const packages = [
    {
      id: 'Starter',
      name: 'Starter',
      pricePHP: 4000,
      priceUSD: 70,
      desc: 'Ideal for brands testing UGC concepts or single-product pushes.',
      features: [
        '1 UGC Concept Video (9:16)',
        '2 Lifestyle / Product Photos',
        'Raw Footage Clips Delivery',
        '1 Revision Round',
        '5-7 Day Turnaround',
      ],
      popular: false
    },
    {
      id: 'Standard',
      name: 'Standard',
      pricePHP: 8000,
      priceUSD: 140,
      desc: 'Most popular for consistent organic traction and paid ad testing.',
      features: [
        '2 UGC Concept Videos (Distinct Hooks)',
        '5 Lifestyle / Product Photos',
        'Custom Scriptwriting & Concepts',
        'Warm Voiceover Audio',
        '2 Revision Rounds',
      ],
      popular: true
    },
    {
      id: 'Premium',
      name: 'Premium',
      pricePHP: 12000,
      priceUSD: 210,
      desc: 'Complete full-funnel content pack ready for multi-channel scale.',
      features: [
        '3 UGC Concept Videos (Multi-Hook)',
        '10 Lifestyle / Product Photos',
        'Scriptwriting + Voiceover',
        'Raw + Edited 4K Assets Batch',
        '3 Revision Rounds',
      ],
      popular: false
    }
  ];

  // Interactive Quote Calculator
  const currentBase = packages.find(p => p.id === selectedPackage) || packages[1];
  const adFee = includeAdUsage ? (selectedCurrency === 'PHP' ? 3000 : 55) : 0;
  const hookFee = extraHooks * (selectedCurrency === 'PHP' ? 1200 : 25);
  const calculatedTotal = (selectedCurrency === 'PHP' ? currentBase.pricePHP : currentBase.priceUSD) + adFee + hookFee;

  // FAQs
  const faqs = [
    {
      q: 'How soon do you deliver final files?',
      a: 'First drafts are delivered within 5–7 business days after receiving your product and creative brief. Rush 48-hour delivery is available upon request.'
    },
    {
      q: 'Can you match my brand’s specific aesthetic?',
      a: 'Absolutely! Send over your moodboards, fonts, color guidelines, or references. Every shoot is staged to integrate naturally into your existing social presence.'
    },
    {
      q: 'Do you offer commercial paid ad usage rights?',
      a: 'Yes, while packages include organic publishing rights, paid ad usage (30, 60, 90 days or perpetual) and creator account Spark Ads whitelisting can be added seamlessly.'
    },
    {
      q: 'What is included in raw footage delivery?',
      a: 'You receive all high-resolution B-roll clips, product close-ups, and alternative hook reads so your internal editors can assemble endless future iterations.'
    },
    {
      q: 'How do revisions work?',
      a: 'Each package includes 1 to 3 revision rounds. You review drafts on a timestamped link where you can note any adjustments to captions, audio, cuts, or transitions.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2D2323] overflow-x-hidden">
      {/* ==================== 1. HERO SECTION ==================== */}
      <section className="relative overflow-hidden pt-12 pb-20 md:py-24 border-b-4 border-[#54100F]/10">
        {/* Decorative quirky shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F6FFB6]/40 rounded-bl-[200px] pointer-events-none -z-0" />
        <div className="absolute bottom-10 left-[-100px] w-96 h-96 bg-[#FFD2C1]/40 rounded-full blur-2xl pointer-events-none -z-0" />
        <Star className="absolute top-20 right-20 w-8 h-8 text-[#D93240] sparkle" fill="#D93240" />
        <Star className="absolute bottom-24 right-1/3 w-6 h-6 text-[#54100F]/30 sparkle" />
        <Sparkles className="absolute top-1/3 left-10 w-6 h-6 text-[#D93240]/40 sparkle" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#54100F] text-[#F6FFB6] rounded-full text-xs font-mono font-bold tracking-widest uppercase shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#F6FFB6]" />
                <span>SOCIAL MEDIA & DIGITAL MARKETING SPECIALIST</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#54100F] tracking-tight leading-none font-display">
                Paula <br />
                <span className="text-[#D93240] italic font-serif">Robles</span>
              </h1>

              <p className="text-xl sm:text-2xl text-[#54100F] font-semibold leading-snug">
                Engaging content with <span className="bg-[#F6FFB6] px-2.5 py-0.5 rounded-lg border border-[#54100F]/20 text-[#54100F]">measurable growth</span>
              </p>

              <p className="text-base sm:text-lg text-[#2D2323]/80 max-w-xl leading-relaxed">
                Bachelor of Commerce graduate in Marketing & Global Strategy from the University of Manitoba. I blend cultural empathy, high-retention video hooks, and commercial strategy to turn passive scrollers into passionate brand advocates.
              </p>

              {/* Badges row */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                <span className="px-3.5 py-1.5 bg-white border-2 border-[#54100F] text-[#54100F] rounded-full text-xs font-mono font-bold shadow-sm flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-[#D93240]" /> Univ. of Manitoba (B.Com)
                </span>
                <span className="px-3.5 py-1.5 bg-[#F6FFB6] border-2 border-[#54100F] text-[#54100F] rounded-full text-xs font-mono font-bold shadow-sm flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-[#54100F]" /> 161K+ Likes on TikTok
                </span>
                <span className="px-3.5 py-1.5 bg-[#FFD2C1] border-2 border-[#54100F] text-[#54100F] rounded-full text-xs font-mono font-bold shadow-sm flex items-center gap-1.5">
                  <Video className="w-4 h-4 text-[#54100F]" /> +100 UGC Deliverables
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <a 
                  href="#packages"
                  className="px-6 py-3.5 bg-[#D93240] hover:bg-[#54100F] text-white rounded-full font-mono text-sm font-bold shadow-lg hover:shadow-xl transition-all text-center flex items-center justify-center gap-2 group"
                >
                  <span>Explore UGC Packages</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                {onPresentationMode && (
                  <button
                    onClick={onPresentationMode}
                    className="px-6 py-3.5 bg-white border-2 border-[#54100F] text-[#54100F] hover:bg-[#F6FFB6] rounded-full font-mono text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <span>View 14-Slide Deck</span>
                    <Sparkles className="w-4 h-4 text-[#D93240]" />
                  </button>
                )}
              </div>
            </div>

            {/* Right Hero Image (Polaroid Card) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group rotate-2 hover:rotate-0 transition-transform duration-300 max-w-sm w-full">
                {/* Paperclip */}
                <img 
                  src={paperclipIcon} 
                  alt="Paperclip" 
                  className="absolute -top-7 left-12 w-9 h-14 z-20 drop-shadow-md pointer-events-none"
                />

                {/* Polaroid Frame */}
                <div className="bg-white p-4 sm:p-5 pb-8 rounded-2xl shadow-2xl border-4 border-[#54100F]">
                  <div className="relative overflow-hidden rounded-xl aspect-[3/4] bg-[#F2F1EB]">
                    <img 
                      src={paulaAsper} 
                      alt="Paula Robles at Asper School of Business, University of Manitoba" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <p className="font-handwriting text-3xl text-[#54100F] font-bold">Paula Robles ✦</p>
                    <p className="text-xs font-mono text-[#D93240] font-bold uppercase tracking-wider mt-0.5">
                      Social Media & UGC Strategist
                    </p>
                  </div>
                </div>

                {/* Sticky Note */}
                <div className="absolute -bottom-5 -right-4 bg-[#F6FFB6] border-2 border-[#54100F] px-4 py-2 rounded-xl shadow-lg rotate-[-6deg]">
                  <span className="font-handwriting text-xl text-[#54100F] font-bold">latin vibes only 🇧🇴🇨🇦</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 2. STATS BAR ==================== */}
      <section className="bg-[#54100F] text-[#F6FFB6] py-10 border-b-4 border-[#D93240]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 border-r border-white/10 last:border-r-0">
              <div className="text-4xl sm:text-5xl font-mono font-extrabold text-[#F6FFB6] mb-1">+100</div>
              <p className="text-xs font-mono text-[#FFD2C1] uppercase tracking-wider">Content Pieces Created</p>
            </div>
            <div className="p-4 border-r border-white/10 last:border-r-0">
              <div className="text-4xl sm:text-5xl font-mono font-extrabold text-white mb-1">1.1M+</div>
              <p className="text-xs font-mono text-[#FFD2C1] uppercase tracking-wider">Organic Video Views</p>
            </div>
            <div className="p-4 border-r border-white/10 last:border-r-0">
              <div className="text-4xl sm:text-5xl font-mono font-extrabold text-[#F6FFB6] mb-1">161K+</div>
              <p className="text-xs font-mono text-[#FFD2C1] uppercase tracking-wider">Total Video Likes</p>
            </div>
            <div className="p-4">
              <div className="text-4xl sm:text-5xl font-mono font-extrabold text-white mb-1">5+</div>
              <p className="text-xs font-mono text-[#FFD2C1] uppercase tracking-wider">Client Brand Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 3. ABOUT ME & ACADEMIC BACKGROUND ==================== */}
      <section id="about" className="py-20 bg-white border-b-4 border-[#54100F]/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Photo of Graduation Diploma */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group rotate-[-2deg] hover:rotate-0 transition-transform duration-300 max-w-sm w-full">
                <img 
                  src={paperclipIcon} 
                  alt="Paperclip" 
                  className="absolute -top-6 right-10 w-8 h-14 z-20 drop-shadow-md pointer-events-none"
                />
                <div className="bg-[#F2F1EB] p-4 sm:p-5 pb-8 rounded-2xl shadow-xl border-4 border-[#54100F]">
                  <div className="overflow-hidden rounded-xl aspect-[3/4] bg-white">
                    <img 
                      src={paulaDiploma} 
                      alt="Paula Robles graduating with Bachelor of Commerce" 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <p className="font-handwriting text-2xl text-[#54100F] font-bold">Double Major Graduate 🎓</p>
                    <p className="text-xs font-mono text-[#D93240] font-semibold uppercase tracking-wider">University of Manitoba</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Story & Philosophy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block px-3 py-1 bg-[#F6FFB6] text-[#54100F] border border-[#54100F]/30 rounded text-xs font-mono font-bold uppercase tracking-widest">
                ✦ HI, I’M PAULA
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#54100F] font-display">
                Building marketing that resonates on a human level.
              </h2>

              <div className="bg-[#FDFBF7] p-6 rounded-3xl border-3 border-[#54100F] shadow-sm relative">
                <Quote className="w-8 h-8 text-[#D93240]/20 absolute top-4 left-4" />
                <p className="text-base sm:text-lg text-[#54100F] italic font-medium leading-relaxed pl-6">
                  “By blending cultural empathy, modern aesthetic direction, and strategic storytelling, I help brands create content that moves people and drives real commercial growth.”
                </p>
              </div>

              {/* Education Card */}
              <div className="bg-[#54100F] text-white p-6 sm:p-7 rounded-3xl border-3 border-[#54100F] shadow-lg">
                <div className="flex items-center gap-2.5 mb-4">
                  <GraduationCap className="w-6 h-6 text-[#F6FFB6]" />
                  <h3 className="text-xl font-bold font-display text-[#F6FFB6]">Academic Foundation</h3>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                    <span className="text-[11px] font-mono text-[#FFD2C1] uppercase tracking-wider block">Degree Awarded</span>
                    <p className="text-base font-bold text-white mt-1">Bachelor of Commerce</p>
                    <p className="text-xs text-white/70">Asper School of Business, U of Manitoba</p>
                  </div>

                  <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                    <span className="text-[11px] font-mono text-[#FFD2C1] uppercase tracking-wider block">Double Major</span>
                    <p className="text-base font-bold text-white mt-1">Marketing & Strategy</p>
                    <p className="text-xs text-[#F6FFB6] font-semibold mt-0.5">+ Global Management</p>
                  </div>
                </div>

                <p className="text-xs text-white/80 mt-4 leading-relaxed flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F6FFB6] shrink-0" />
                  Bridging analytical consumer psychology with trend-forward viral execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 4. PERSONAL BRAND SPOTLIGHT ==================== */}
      <section id="brand" className="py-20 bg-[#F2F1EB] border-b-4 border-[#54100F]/10 relative overflow-hidden">
        <Star className="absolute top-12 right-16 w-8 h-8 text-[#D93240] sparkle" fill="#D93240" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#54100F] bg-[#F6FFB6] px-3.5 py-1.5 rounded-full border border-[#54100F]/30">
              ✦ CASE STUDY IN ORGANIC GROWTH
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#54100F] font-display mt-3">
              My Personal Brand: @boliviana.en.canada
            </h2>
            <p className="text-base text-[#2D2323]/80 mt-3 font-medium">
              How authentic, unfiltered storytelling built an engaged community of thousands from scratch.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Story & Philosophy */}
            <div className="lg:col-span-6 space-y-5">
              <div className="bg-white p-6 sm:p-8 rounded-3xl border-3 border-[#54100F] shadow-xl">
                <h3 className="text-xl font-bold font-display text-[#54100F] mb-3">
                  The Story Behind the Content
                </h3>
                <p className="text-sm sm:text-base text-[#2D2323] leading-relaxed">
                  When I moved abroad, I felt completely out of place. So I just started sharing what my life actually looked like—the homesickness, the awkward moments, and the small wins of starting over.
                </p>
                <p className="text-sm sm:text-base text-[#2D2323] leading-relaxed mt-3">
                  Slowly, people started connecting with the honesty of it. It taught me the most important thing I know about content:
                </p>
                <div className="mt-5 p-4 bg-[#F6FFB6] border-2 border-[#54100F] rounded-2xl text-center">
                  <span className="font-handwriting text-2xl sm:text-3xl text-[#54100F] font-bold block">
                    “You don’t need perfection to build a community, you just need to be real.”
                  </span>
                </div>
              </div>

              {/* Verified Metrics Grid */}
              <div className="grid grid-cols-3 gap-3.5">
                <div className="bg-[#54100F] text-[#F6FFB6] p-4 rounded-2xl border-2 border-[#54100F] text-center shadow">
                  <div className="text-3xl font-mono font-extrabold">161K+</div>
                  <div className="text-[11px] font-mono text-white/80 uppercase tracking-wider mt-0.5">Total Likes</div>
                </div>
                <div className="bg-white text-[#D93240] p-4 rounded-2xl border-2 border-[#54100F] text-center shadow">
                  <div className="text-3xl font-mono font-extrabold">636K</div>
                  <div className="text-[11px] font-mono text-[#54100F]/70 uppercase tracking-wider mt-0.5">Top Video Views</div>
                </div>
                <div className="bg-[#FFD2C1] text-[#54100F] p-4 rounded-2xl border-2 border-[#54100F] text-center shadow">
                  <div className="text-3xl font-mono font-extrabold">4.4K+</div>
                  <div className="text-[11px] font-mono text-[#54100F]/70 uppercase tracking-wider mt-0.5">Followers</div>
                </div>
              </div>
            </div>

            {/* Visual Proof / Screenshots */}
            <div className="lg:col-span-6 grid grid-cols-12 gap-4 items-center">
              {/* TikTok Feed Screenshot */}
              <div className="col-span-7 bg-white p-3 rounded-2xl border-3 border-[#54100F] shadow-2xl rotate-[-1deg] hover:rotate-0 transition-transform">
                <div className="overflow-hidden rounded-xl aspect-[9/16] bg-black">
                  <img 
                    src={tiktokProfile} 
                    alt="TikTok profile screenshot with 161K likes" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <p className="text-xs font-mono text-center text-[#54100F] font-bold mt-2">
                  TikTok: 636K & 369K viral views
                </p>
              </div>

              {/* Side Stack */}
              <div className="col-span-5 space-y-4">
                <div className="bg-white p-2.5 rounded-2xl border-3 border-[#54100F] shadow-lg rotate-2 hover:rotate-0 transition-transform">
                  <div className="overflow-hidden rounded-xl aspect-[4/5]">
                    <img 
                      src={paulaFlag} 
                      alt="Paula holding Bolivian flag" 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <p className="text-xs font-handwriting text-center text-[#54100F] font-bold mt-1.5 text-base">
                    Bolivian Pride 🇧🇴🇨🇦
                  </p>
                </div>

                <div className="bg-[#54100F] text-white p-4 rounded-2xl border-2 border-[#54100F] text-center shadow">
                  <div className="text-xs font-mono text-[#F6FFB6] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5">
                    <Eye className="w-4 h-4 text-[#FFD2C1]" /> 100% Organic Reach
                  </div>
                  <p className="text-xs text-white/80 mt-1">
                    Zero ad spend. Real human connection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 5. COMPETENCIES & SOFTWARE TOOLS ==================== */}
      <section id="competencies" className="py-20 bg-white border-b-4 border-[#54100F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#D93240] bg-[#FFD2C1]/60 px-3.5 py-1.5 rounded-full">
              ✦ CORE EXPERTISE
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#54100F] font-display mt-3">
              Competencies & Software Stack
            </h2>
            <p className="text-base text-[#2D2323]/80 mt-2 font-medium">
              Combining end-to-end strategic planning, visual production, and research intelligence.
            </p>
          </div>

          {/* 3 Pillars */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {pillars.map((p, idx) => (
              <div 
                key={idx}
                className="bg-[#FDFBF7] rounded-3xl border-3 border-[#54100F] shadow-lg overflow-hidden flex flex-col hover:-translate-y-1 transition-transform"
              >
                <div className="p-5 bg-[#54100F] text-white flex items-center justify-between border-b-3 border-[#54100F]">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFD2C1] block">Pillar 0{idx+1}</span>
                    <h3 className="text-lg font-bold font-display text-[#F6FFB6]">{p.title}</h3>
                  </div>
                  <div className="p-2 bg-white/10 rounded-xl">
                    <p.icon className="w-5 h-5 text-[#F6FFB6]" />
                  </div>
                </div>

                <div className="p-6 flex-1">
                  <ul className="space-y-3">
                    {p.skills.map((s, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2.5 text-xs text-[#2D2323]">
                        <CheckCircle2 className="w-4 h-4 text-[#D93240] shrink-0 mt-0.5" />
                        <span className="font-medium leading-snug">{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Software & Tools */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold font-display text-[#54100F]">
                Software & Production Stack
              </h3>
              <p className="text-xs font-mono text-[#54100F]/70 uppercase tracking-widest mt-1">
                Industry-standard tools for rapid turnaround and polished assets
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
              {tools.map((t, idx) => (
                <div 
                  key={idx}
                  className="bg-[#FDFBF7] p-4 rounded-2xl border-2 border-[#54100F] shadow-sm hover:shadow-md transition-all flex items-center gap-3.5 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#54100F]/20 flex items-center justify-center p-2 shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                    <img src={t.icon} alt={t.name} className="w-full h-full object-contain" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-[#54100F] text-sm truncate">{t.name}</h4>
                    <p className="text-[11px] text-[#2D2323]/70 truncate">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 6. SERVICES & 6-STEP WORKFLOW ==================== */}
      <section className="py-20 bg-[#F2F1EB] border-b-4 border-[#54100F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#54100F] bg-[#F6FFB6] px-3.5 py-1.5 rounded-full border border-[#54100F]/30">
              ✦ HOW WE WORK
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#54100F] font-display mt-3">
              My 6-Step Creative Process
            </h2>
            <p className="text-base text-[#2D2323]/80 mt-2 font-medium">
              Transparent, reliable, and structured for zero friction from onboarding to final delivery.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 rounded-3xl border-3 border-[#54100F] shadow-lg hover:shadow-xl transition-all relative flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-[#54100F] text-[#F6FFB6] font-mono font-extrabold text-sm flex items-center justify-center shadow">
                      {step.num}
                    </span>
                    <span className="text-[10px] font-mono text-[#D93240] font-bold uppercase tracking-wider">
                      PHASE 0{idx+1}
                    </span>
                  </div>

                  <h3 className="font-bold text-[#54100F] text-base mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#2D2323]/80 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#54100F]/15 flex items-center justify-between text-[11px] font-mono text-[#54100F]/70">
                  <span>Deliverable Milestone</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D93240] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 7. CREATIVE SHOWCASE (VIDEO & PHOTO) ==================== */}
      <section id="showcase" className="py-20 bg-white border-b-4 border-[#54100F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#D93240] bg-[#FFD2C1]/60 px-3.5 py-1.5 rounded-full">
              ✦ PORTFOLIO SAMPLES
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#54100F] font-display mt-3">
              Video & Photo Samples
            </h2>
            <p className="text-base text-[#2D2323]/80 mt-2 font-medium">
              Explore authentic UGC short-form content and high-aesthetic commercial photography.
            </p>

            {/* Gallery Filter Tabs */}
            <div className="inline-flex p-1 bg-[#F2F1EB] border-2 border-[#54100F] rounded-full mt-6">
              <button
                onClick={() => setActiveGalleryTab('all')}
                className={`px-5 py-1.5 rounded-full font-mono text-xs font-bold transition-all ${
                  activeGalleryTab === 'all' ? 'bg-[#54100F] text-[#F6FFB6]' : 'text-[#54100F] hover:bg-white/50'
                }`}
              >
                All Work
              </button>
              <button
                onClick={() => setActiveGalleryTab('video')}
                className={`px-5 py-1.5 rounded-full font-mono text-xs font-bold transition-all ${
                  activeGalleryTab === 'video' ? 'bg-[#54100F] text-[#F6FFB6]' : 'text-[#54100F] hover:bg-white/50'
                }`}
              >
                Video UGC
              </button>
              <button
                onClick={() => setActiveGalleryTab('photo')}
                className={`px-5 py-1.5 rounded-full font-mono text-xs font-bold transition-all ${
                  activeGalleryTab === 'photo' ? 'bg-[#54100F] text-[#F6FFB6]' : 'text-[#54100F] hover:bg-white/50'
                }`}
              >
                Photography
              </button>
            </div>
          </div>

          {/* Video Section */}
          {(activeGalleryTab === 'all' || activeGalleryTab === 'video') && (
            <div className="mb-16">
              <div className="flex items-center gap-2 mb-6">
                <Video className="w-5 h-5 text-[#D93240]" />
                <h3 className="text-xl font-bold font-display text-[#54100F]">Short-Form Video Concepts</h3>
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                {/* Video 1 */}
                <div className="bg-[#FDFBF7] rounded-3xl border-3 border-[#54100F] shadow-lg overflow-hidden group">
                  <div className="relative aspect-[9/13] bg-black overflow-hidden">
                    <img 
                      src={sampleProduct} 
                      alt="Product Demo Video" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[9px] font-mono font-bold bg-[#D93240] text-white">
                      PRODUCT DEMO
                    </span>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/90 border-2 border-[#54100F] flex items-center justify-center text-[#54100F] group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 fill-[#54100F] ml-0.5" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <p className="text-xs font-medium italic line-clamp-2">“The one step that actually changed my skin texture…”</p>
                      <span className="text-[10px] font-mono text-[#F6FFB6] mt-1 block">84.2K Views • Skincare</span>
                    </div>
                  </div>
                  <div className="p-4 bg-white border-t-2 border-[#54100F]">
                    <h4 className="font-bold text-sm text-[#54100F]">Skincare Routine Demo</h4>
                    <p className="text-[11px] text-[#2D2323]/70 mt-0.5">High-converting before/after application pacing</p>
                  </div>
                </div>

                {/* Video 2 */}
                <div className="bg-[#FDFBF7] rounded-3xl border-3 border-[#54100F] shadow-lg overflow-hidden group">
                  <div className="relative aspect-[9/13] bg-black overflow-hidden">
                    <img 
                      src={sampleDayInLife} 
                      alt="Day in the Life Vlog" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[9px] font-mono font-bold bg-[#54100F] text-[#F6FFB6]">
                      LIFESTYLE VLOG
                    </span>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/90 border-2 border-[#54100F] flex items-center justify-center text-[#54100F] group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 fill-[#54100F] ml-0.5" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <p className="text-xs font-medium italic line-clamp-2">“What a realistic Tuesday looks like as an international creator…”</p>
                      <span className="text-[10px] font-mono text-[#F6FFB6] mt-1 block">127.6K Views • Relatable Story</span>
                    </div>
                  </div>
                  <div className="p-4 bg-white border-t-2 border-[#54100F]">
                    <h4 className="font-bold text-sm text-[#54100F]">“Day in the Life” Narrative</h4>
                    <p className="text-[11px] text-[#2D2323]/70 mt-0.5">Subtle organic product integration within daily vlog</p>
                  </div>
                </div>

                {/* Video 3 */}
                <div className="bg-[#FDFBF7] rounded-3xl border-3 border-[#54100F] shadow-lg overflow-hidden group">
                  <div className="relative aspect-[9/13] bg-black overflow-hidden">
                    <img 
                      src={sampleUnboxing} 
                      alt="Unboxing & Haul" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[9px] font-mono font-bold bg-[#FFD2C1] text-[#54100F]">
                      UNBOXING / HAUL
                    </span>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/90 border-2 border-[#54100F] flex items-center justify-center text-[#54100F] group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 fill-[#54100F] ml-0.5" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <p className="text-xs font-medium italic line-clamp-2">“Unboxing my latest package—wait until you see this quality…”</p>
                      <span className="text-[10px] font-mono text-[#F6FFB6] mt-1 block">45.8K Views • Apparel & Retail</span>
                    </div>
                  </div>
                  <div className="p-4 bg-white border-t-2 border-[#54100F]">
                    <h4 className="font-bold text-sm text-[#54100F]">Sensory Unboxing & First Impressions</h4>
                    <p className="text-[11px] text-[#2D2323]/70 mt-0.5">High-energy tactile unboxing with fast audio cuts</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Photo Section */}
          {(activeGalleryTab === 'all' || activeGalleryTab === 'photo') && (
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Camera className="w-5 h-5 text-[#D93240]" />
                <h3 className="text-xl font-bold font-display text-[#54100F]">Commercial Lifestyle Photography</h3>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-[#FDFBF7] p-3 rounded-2xl border-2 border-[#54100F] shadow-sm hover:shadow-md transition-shadow">
                  <div className="overflow-hidden rounded-xl aspect-[4/5] bg-white mb-2">
                    <img src={photoFlatlay} alt="Flatlay photography" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-[9px] font-mono uppercase text-[#D93240] font-bold block">FLAT LAYS</span>
                  <h4 className="font-bold text-xs text-[#54100F]">Stationery & Layouts</h4>
                </div>

                <div className="bg-[#FDFBF7] p-3 rounded-2xl border-2 border-[#54100F] shadow-sm hover:shadow-md transition-shadow">
                  <div className="overflow-hidden rounded-xl aspect-[4/5] bg-white mb-2">
                    <img src={photoSkincare} alt="Skincare product staging" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-[9px] font-mono uppercase text-[#D93240] font-bold block">PRODUCT STAGING</span>
                  <h4 className="font-bold text-xs text-[#54100F]">Skincare & Textures</h4>
                </div>

                <div className="bg-[#FDFBF7] p-3 rounded-2xl border-2 border-[#54100F] shadow-sm hover:shadow-md transition-shadow">
                  <div className="overflow-hidden rounded-xl aspect-[4/5] bg-white mb-2">
                    <img src={photoWorkspace} alt="Workspace aesthetics" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-[9px] font-mono uppercase text-[#D93240] font-bold block">BACKGROUNDS</span>
                  <h4 className="font-bold text-xs text-[#54100F]">Creative Workspaces</h4>
                </div>

                <div className="bg-[#FDFBF7] p-3 rounded-2xl border-2 border-[#54100F] shadow-sm hover:shadow-md transition-shadow">
                  <div className="overflow-hidden rounded-xl aspect-[4/5] bg-white mb-2">
                    <img src={photoRunning} alt="Outdoor lifestyle movement" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-[9px] font-mono uppercase text-[#D93240] font-bold block">MOVEMENT</span>
                  <h4 className="font-bold text-xs text-[#54100F]">Active & Lifestyle</h4>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ==================== 8. UGC PACKAGES & INTERACTIVE QUOTE CALCULATOR ==================== */}
      <section id="packages" className="py-20 bg-[#F2F1EB] border-b-4 border-[#54100F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#54100F] bg-[#F6FFB6] px-3.5 py-1.5 rounded-full border border-[#54100F]/30">
              ✦ TRANSPARENT PRICING
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#54100F] font-display mt-3">
              UGC Packages & Rate Cards
            </h2>
            <p className="text-base text-[#2D2323]/80 mt-2 font-medium">
              Choose an all-inclusive package or customize add-ons with our live quote builder.
            </p>

            {/* Currency Switcher */}
            <div className="inline-flex items-center gap-2 p-1 bg-white border-2 border-[#54100F] rounded-full mt-6 shadow-sm">
              <button
                onClick={() => setSelectedCurrency('PHP')}
                className={`px-4 py-1.5 rounded-full font-mono text-xs font-bold transition-all ${
                  selectedCurrency === 'PHP' ? 'bg-[#54100F] text-[#F6FFB6]' : 'text-[#54100F]'
                }`}
              >
                PHP (₱)
              </button>
              <button
                onClick={() => setSelectedCurrency('USD')}
                className={`px-4 py-1.5 rounded-full font-mono text-xs font-bold transition-all ${
                  selectedCurrency === 'USD' ? 'bg-[#54100F] text-[#F6FFB6]' : 'text-[#54100F]'
                }`}
              >
                USD ($)
              </button>
            </div>
          </div>

          {/* 3 Package Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16 items-stretch">
            {packages.map((pkg, idx) => (
              <div 
                key={idx}
                className={`bg-white rounded-3xl border-3 border-[#54100F] p-6 sm:p-7 shadow-xl flex flex-col justify-between relative transition-all ${
                  pkg.popular ? 'ring-4 ring-[#D93240] scale-[1.02] shadow-2xl' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#D93240] text-white text-[10px] font-mono font-bold uppercase px-4 py-1 rounded-full shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Most Popular
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-[#54100F]/60">TIER 0{idx+1}</span>
                    <span className="text-xs font-mono font-bold uppercase px-3 py-1 rounded-full bg-[#F6FFB6] text-[#54100F] border border-[#54100F]/20">
                      {pkg.name}
                    </span>
                  </div>

                  <div className="my-3">
                    <span className="text-4xl font-extrabold font-mono text-[#54100F]">
                      {selectedCurrency === 'PHP' ? `₱${pkg.pricePHP.toLocaleString()}` : `$${pkg.priceUSD}`}
                    </span>
                    <span className="text-xs font-mono text-[#54100F]/60 ml-2">per campaign</span>
                  </div>

                  <p className="text-xs text-[#2D2323]/75 leading-relaxed pb-4 mb-4 border-b border-[#54100F]/15">
                    {pkg.desc}
                  </p>

                  <ul className="space-y-2.5">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-[#2D2323]">
                        <Check className="w-4 h-4 text-[#D93240] shrink-0 mt-0.5" />
                        <span className="leading-snug font-medium">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-[#54100F]/15">
                  <a
                    href="#contact"
                    onClick={() => setSelectedPackage(pkg.id)}
                    className={`block w-full py-2.5 text-center rounded-xl font-mono text-xs font-bold transition-all ${
                      pkg.popular 
                        ? 'bg-[#D93240] text-white hover:bg-[#54100F]' 
                        : 'bg-[#54100F] text-[#F6FFB6] hover:bg-[#D93240] hover:text-white'
                    }`}
                  >
                    Select {pkg.name} Package
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Custom Quote Calculator Card */}
          <div className="bg-white rounded-3xl border-3 border-[#54100F] p-6 sm:p-8 shadow-xl max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#54100F]/15">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-[#D93240]">CUSTOM RATE CALCULATOR</span>
                <h3 className="text-2xl font-bold font-display text-[#54100F] mt-1">Instant Campaign Estimate</h3>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono text-[#54100F]/70 block">Estimated Total</span>
                <span className="text-3xl font-mono font-extrabold text-[#D93240]">
                  {selectedCurrency === 'PHP' ? `₱${calculatedTotal.toLocaleString()}` : `$${calculatedTotal}`}
                </span>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 pt-6 items-center">
              <div>
                <label className="text-xs font-mono font-bold text-[#54100F] block mb-2">Base Package Tier</label>
                <select 
                  value={selectedPackage}
                  onChange={(e) => setSelectedPackage(e.target.value)}
                  className="w-full bg-[#FDFBF7] border-2 border-[#54100F] rounded-xl px-3 py-2 text-xs font-mono font-semibold"
                >
                  <option value="Starter">Starter ({selectedCurrency === 'PHP' ? '₱4,000' : '$70'})</option>
                  <option value="Standard">Standard ({selectedCurrency === 'PHP' ? '₱8,000' : '$140'})</option>
                  <option value="Premium">Premium ({selectedCurrency === 'PHP' ? '₱12,000' : '$210'})</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-mono font-bold text-[#54100F] block mb-2">Commercial Paid Ad Usage</label>
                <button
                  type="button"
                  onClick={() => setIncludeAdUsage(!includeAdUsage)}
                  className={`w-full py-2 px-3 rounded-xl border-2 border-[#54100F] font-mono text-xs font-bold flex items-center justify-between transition-colors ${
                    includeAdUsage ? 'bg-[#54100F] text-[#F6FFB6]' : 'bg-[#FDFBF7] text-[#54100F]'
                  }`}
                >
                  <span>{includeAdUsage ? '✓ Included (30 Days)' : '+ Add Paid Ad Rights'}</span>
                  <span>{selectedCurrency === 'PHP' ? '+₱3,000' : '+$55'}</span>
                </button>
              </div>

              <div>
                <label className="text-xs font-mono font-bold text-[#54100F] block mb-2">Extra Hook Variations</label>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setExtraHooks(Math.max(0, extraHooks - 1))}
                    className="w-9 h-9 rounded-xl bg-[#FDFBF7] border-2 border-[#54100F] font-mono font-bold text-sm"
                  >
                    -
                  </button>
                  <span className="flex-1 text-center font-mono font-bold text-xs">
                    {extraHooks} {extraHooks === 1 ? 'variation' : 'variations'}
                  </span>
                  <button
                    type="button"
                    onClick={() => setExtraHooks(extraHooks + 1)}
                    className="w-9 h-9 rounded-xl bg-[#FDFBF7] border-2 border-[#54100F] font-mono font-bold text-sm"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 9. TESTIMONIALS & FAQS ==================== */}
      <section className="py-20 bg-white border-b-4 border-[#54100F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Testimonials */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#D93240] bg-[#FFD2C1]/60 px-3.5 py-1.5 rounded-full">
              ✦ CLIENT FEEDBACK
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#54100F] font-display mt-3">
              What Brand Partners Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* Testimonial 1 */}
            <div className="bg-[#FDFBF7] p-8 rounded-3xl border-3 border-[#54100F] shadow-lg relative flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-[#D93240] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D93240]" />
                  ))}
                </div>
                <p className="text-base sm:text-lg text-[#54100F] font-medium leading-relaxed italic mb-6">
                  “Paula nailed our brand voice—authentic, engaging, and completely on point! Her TikTok concepts outperformed our standard internal creative by 3x in click-through rate.”
                </p>
              </div>
              <div className="pt-4 border-t border-[#54100F]/15 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-[#54100F] text-base">Angelica Reyes</h4>
                  <p className="text-xs text-[#2D2323]/70">Brand Marketing Lead, Liceria Skincare</p>
                </div>
                <span className="text-[10px] font-mono font-bold uppercase px-3 py-1 rounded-full bg-[#FFD2C1] text-[#54100F]">
                  SKINCARE & BEAUTY
                </span>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-[#FDFBF7] p-8 rounded-3xl border-3 border-[#54100F] shadow-lg relative flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-[#D93240] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D93240]" />
                  ))}
                </div>
                <p className="text-base sm:text-lg text-[#54100F] font-medium leading-relaxed italic mb-6">
                  “Creative, clean, and effective. Loved the final output! Paula was exceptionally communicative throughout the entire briefing, scripting, and revision process.”
                </p>
              </div>
              <div className="pt-4 border-t border-[#54100F]/15 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-[#54100F] text-base">Cia Rodriguez</h4>
                  <p className="text-xs text-[#2D2323]/70">Campaign Director, Wardiere Inc.</p>
                </div>
                <span className="text-[10px] font-mono font-bold uppercase px-3 py-1 rounded-full bg-[#F6FFB6] text-[#54100F]">
                  LIFESTYLE & APPAREL
                </span>
              </div>
            </div>
          </div>

          {/* FAQs Accordion */}
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#54100F] bg-[#F6FFB6] px-3.5 py-1.5 rounded-full border border-[#54100F]/30">
                ✦ FAQS
              </span>
              <h3 className="text-3xl font-bold font-display text-[#54100F] mt-2">
                Frequently Asked Questions
              </h3>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div 
                    key={idx}
                    className="bg-[#FDFBF7] rounded-2xl border-2 border-[#54100F] overflow-hidden shadow-xs"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full p-5 text-left font-bold text-sm sm:text-base text-[#54100F] flex items-center justify-between gap-4"
                    >
                      <span>Q: {faq.q}</span>
                      <ChevronDown className={`w-5 h-5 text-[#D93240] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#2D2323]/80 leading-relaxed border-t border-[#54100F]/10">
                        <span className="font-bold text-[#D93240]">A: </span>
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 10. CONTACT / BOOKING SECTION ==================== */}
      <section id="contact" className="py-20 bg-[#54100F] text-white relative overflow-hidden">
        <Star className="absolute top-12 left-12 w-8 h-8 text-[#F6FFB6] sparkle" fill="#F6FFB6" />
        <Star className="absolute bottom-12 right-12 w-8 h-8 text-[#FFD2C1] sparkle" fill="#FFD2C1" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Contact Pitch */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#54100F] bg-[#F6FFB6] px-3.5 py-1.5 rounded-full">
                ✦ LET’S COLLABORATE
              </span>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-tight text-white">
                Ready to elevate your <br />
                <span className="text-[#FFD2C1] font-serif italic">brand’s presence?</span>
              </h2>

              <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-lg">
                Whether you need a full UGC video campaign, aesthetic lifestyle photography, or custom monthly content retainers, I’d love to connect.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 border border-white/10">
                  <div className="w-11 h-11 rounded-xl bg-[#D93240] flex items-center justify-center text-white shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#FFD2C1] uppercase tracking-wider block">Direct Email</span>
                    <a href="mailto:paula.robles.marketing@gmail.com" className="text-sm sm:text-base font-mono font-semibold text-white hover:text-[#F6FFB6] transition-colors">
                      paula.robles.marketing@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 border border-white/10">
                  <div className="w-11 h-11 rounded-xl bg-[#F6FFB6] flex items-center justify-center text-[#54100F] shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#FFD2C1] uppercase tracking-wider block">TikTok & Social</span>
                    <a href="https://tiktok.com/@boliviana.en.canada" target="_blank" rel="noreferrer" className="text-sm sm:text-base font-mono font-semibold text-white hover:text-[#F6FFB6] transition-colors">
                      @boliviana.en.canada
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 border border-white/10">
                  <div className="w-11 h-11 rounded-xl bg-[#FFD2C1] flex items-center justify-center text-[#54100F] shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#FFD2C1] uppercase tracking-wider block">Location</span>
                    <p className="text-sm sm:text-base font-mono font-semibold text-white">
                      Winnipeg, Manitoba, Canada (Available Worldwide)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-6">
              <div className="bg-white text-[#2D2323] p-8 sm:p-10 rounded-3xl border-4 border-[#F6FFB6] shadow-2xl relative">
                {contactSubmitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#F6FFB6] border-2 border-[#54100F] text-[#54100F] flex items-center justify-center mx-auto shadow-md">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold font-display text-[#54100F]">Message Received!</h3>
                    <p className="text-sm text-[#2D2323]/80 max-w-sm mx-auto">
                      Thank you for reaching out. Paula will get back to you within 24 hours to schedule our discovery call!
                    </p>
                    <button
                      onClick={() => setContactSubmitted(false)}
                      className="px-6 py-2.5 bg-[#54100F] text-[#F6FFB6] rounded-full font-mono text-xs font-bold mt-4"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form 
                    onSubmit={(e) => {
                      e.preventDefault();
                      setContactSubmitted(true);
                    }} 
                    className="space-y-4"
                  >
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold font-display text-[#54100F]">Send an Inquiry</h3>
                      <p className="text-xs text-[#2D2323]/70 mt-1 font-mono">
                        Tell me about your product, timeline, or target goals.
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-mono font-bold text-[#54100F] block mb-1">Your Name *</label>
                        <input 
                          type="text" 
                          required 
                          placeholder="e.g. Maria Santos"
                          className="w-full bg-[#FDFBF7] border-2 border-[#54100F] rounded-xl px-3.5 py-2.5 text-xs text-[#2D2323] focus:outline-none focus:ring-2 focus:ring-[#D93240]"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-mono font-bold text-[#54100F] block mb-1">Brand / Company *</label>
                        <input 
                          type="text" 
                          required 
                          placeholder="e.g. Liceria Skincare"
                          className="w-full bg-[#FDFBF7] border-2 border-[#54100F] rounded-xl px-3.5 py-2.5 text-xs text-[#2D2323] focus:outline-none focus:ring-2 focus:ring-[#D93240]"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-mono font-bold text-[#54100F] block mb-1">Work Email *</label>
                        <input 
                          type="email" 
                          required 
                          placeholder="hello@brand.com"
                          className="w-full bg-[#FDFBF7] border-2 border-[#54100F] rounded-xl px-3.5 py-2.5 text-xs text-[#2D2323] focus:outline-none focus:ring-2 focus:ring-[#D93240]"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-mono font-bold text-[#54100F] block mb-1">Package Interest</label>
                        <select 
                          value={selectedPackage}
                          onChange={(e) => setSelectedPackage(e.target.value)}
                          className="w-full bg-[#FDFBF7] border-2 border-[#54100F] rounded-xl px-3.5 py-2.5 text-xs text-[#2D2323] font-mono focus:outline-none focus:ring-2 focus:ring-[#D93240]"
                        >
                          <option value="Starter">Starter Package (1 Video)</option>
                          <option value="Standard">Standard Package (2 Videos)</option>
                          <option value="Premium">Premium Package (3 Videos)</option>
                          <option value="Custom">Custom Retainer / Commercial</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-mono font-bold text-[#54100F] block mb-1">Project Details & Goals *</label>
                      <textarea 
                        rows={4}
                        required
                        placeholder="Tell me about your product, what style of UGC you're looking for, or any upcoming launch dates..."
                        className="w-full bg-[#FDFBF7] border-2 border-[#54100F] rounded-xl px-3.5 py-2.5 text-xs text-[#2D2323] focus:outline-none focus:ring-2 focus:ring-[#D93240]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#D93240] hover:bg-[#54100F] text-white rounded-xl font-mono text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="bg-[#3C0B0A] text-white py-12 border-t-2 border-[#D93240]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="font-display font-bold text-xl text-[#F6FFB6]">Paula Robles</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/10 text-[#FFD2C1]">UGC CREATOR</span>
              </div>
              <p className="text-xs text-white/70 mt-1 font-mono">
                Bachelor of Commerce (Marketing & Global Management) • Univ. of Manitoba
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-[#F6FFB6]">
              <a href="mailto:paula.robles.marketing@gmail.com" className="hover:underline">Email</a>
              <span>•</span>
              <a href="https://tiktok.com/@boliviana.en.canada" target="_blank" rel="noreferrer" className="hover:underline">TikTok</a>
              <span>•</span>
              <a href="#about" className="hover:underline">About</a>
              <span>•</span>
              <a href="#packages" className="hover:underline">Rates</a>
            </div>

            <div className="text-xs text-white/60 font-mono">
              © {new Date().getFullYear()} Paula Robles. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
