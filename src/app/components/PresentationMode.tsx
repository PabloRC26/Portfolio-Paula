import { motion } from 'motion/react';
import { Download, X, ArrowUp, ChevronLeft, ChevronRight, Sparkles, Presentation } from 'lucide-react';
import { Button } from './ui/button';
import { Slide1Cover } from './slides/Slide1Cover';
import { Slide2Achievements } from './slides/Slide2Achievements';
import { Slide3About } from './slides/Slide3About';
import { Slide4PersonalBrand } from './slides/Slide4PersonalBrand';
import { Slide5Competencies } from './slides/Slide5Competencies';
import { Slide6Tools } from './slides/Slide6Tools';
import { Slide7Services } from './slides/Slide7Services';
import { Slide8Process } from './slides/Slide8Process';
import { Slide9VideoSamples } from './slides/Slide9VideoSamples';
import { Slide10PhotoSamples } from './slides/Slide10PhotoSamples';
import { Slide11Testimonials } from './slides/Slide11Testimonials';
import { Slide12Packages } from './slides/Slide12Packages';
import { Slide13FAQs } from './slides/Slide13FAQs';
import { Slide14Contact } from './slides/Slide14Contact';
import { useState, useEffect } from 'react';

interface PresentationModeProps {
  onClose: () => void;
}

export function PresentationMode({ onClose }: PresentationModeProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const slides = [
    { component: Slide1Cover, title: '01. Cover & Brand Overview' },
    { component: Slide2Achievements, title: '02. Key Achievements & Milestones' },
    { component: Slide3About, title: '03. About Paula & Education' },
    { component: Slide4PersonalBrand, title: '04. Personal Brand (@boliviana.en.canada)' },
    { component: Slide5Competencies, title: '05. Core Competencies' },
    { component: Slide6Tools, title: '06. Software & Production Stack' },
    { component: Slide7Services, title: '07. Services Offered' },
    { component: Slide8Process, title: '08. 6-Step Workflow & Process' },
    { component: Slide9VideoSamples, title: '09. Video Samples (UGC Demo & Vlogs)' },
    { component: Slide10PhotoSamples, title: '10. Curated Photo Samples' },
    { component: Slide11Testimonials, title: '11. Client Testimonials' },
    { component: Slide12Packages, title: '12. UGC Packages & Pricing' },
    { component: Slide13FAQs, title: '13. Frequently Asked Questions' },
    { component: Slide14Contact, title: '14. Let’s Work Together (Contact)' },
  ];

  const handlePrint = () => {
    window.print();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSlide = (index: number) => {
    const el = document.getElementById(`slide-${index}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setActiveSlideIndex(index);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
          <div className="fixed inset-0 bg-[#1E1717] z-50 overflow-y-auto">
            {/* Fixed Header */}
            <div className="sticky top-0 left-0 right-0 bg-[#54100F] text-white p-3 sm:p-4 flex items-center justify-between z-50 no-print shadow-xl border-b-2 border-[#D93240]">
              <div className="flex items-center space-x-3">
                <Button
                  onClick={onClose}
                  className="bg-white/10 hover:bg-white/20 text-[#F6FFB6] border-0 rounded-full font-mono text-xs"
                  size="sm"
                >
                  <X className="w-4 h-4 mr-1.5" />
                  Exit Presentation
                </Button>

                <div className="hidden md:flex items-center gap-1.5 text-xs font-mono text-white/80">
                  <Presentation className="w-3.5 h-3.5 text-[#F6FFB6]" />
                  <span>14 Deck Slides</span>
                </div>
              </div>

                {/* Center Title */}
                <div className="text-xs sm:text-sm font-mono font-bold tracking-wider text-center truncate max-w-xs sm:max-w-md">
                  <span className="text-[#F6FFB6]">Paula Robles</span>
                  <span className="text-white/60 mx-2">|</span>
                  <span className="text-[#FFD2C1]">UGC & Marketing Deck</span>
                </div>

                  {/* Actions */}
                  <div className="flex items-center space-x-2">
                    {/* Quick Slide Selector */}
                    <select
                      value={activeSlideIndex}
                      onChange={(e) => scrollToSlide(Number(e.target.value))}
                      className="hidden lg:block bg-black/40 text-white border border-white/20 rounded-full px-3 py-1 text-xs font-mono"
                    >
                      {slides.map((s, idx) => (
                        <option key={idx} value={idx}>
                          {s.title}
                        </option>
                      ))}
                    </select>

                    <Button
                      onClick={handlePrint}
                      className="bg-[#D93240] hover:bg-[#D93240]/90 text-white rounded-full font-mono text-xs shadow-md"
                      size="sm"
                    >
                      <Download className="w-3.5 h-3.5 mr-1.5" />
                      Download PDF
                    </Button>
                  </div>
                </div>

                {/* Scrollable Slides Container */}
                  <div className="w-full py-8 sm:py-12 px-2 sm:px-6 space-y-12 print-no-spacing max-w-7xl mx-auto">
                    {slides.map((slide, index) => {
                      const SlideComponent = slide.component;
                      return (
                        <motion.div
                          key={index}
                          id={`slide-${index}`}
                          initial={{ opacity: 0, y: 40 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                          className="flex flex-col items-center slide-page"
                        >
                            {/* Slide Badge */}
                            <div className="text-white/60 text-xs font-mono mb-2 no-print flex items-center gap-2">
                              <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-[#F6FFB6]">
                                Slide {index + 1} of {slides.length}
                              </span>
                              <span className="text-white/40">•</span>
                              <span className="text-white/70">{slide.title}</span>
                            </div>

                            {/* 16:9 Aspect Ratio Container */}
                            <div
                              className="w-full bg-[#F2F1EB] rounded-2xl shadow-2xl overflow-hidden print-full-width print-no-shadow print-no-radius border-2 border-[#54100F]/30"
                              style={{ aspectRatio: '16/9' }}
                            >
                              <SlideComponent />
                            </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Scroll to Top Button */}
                  {showScrollTop && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="fixed bottom-6 right-6 no-print z-50"
                    >
                      <Button
                        onClick={scrollToTop}
                        className="bg-[#D93240] text-white hover:bg-[#54100F] shadow-2xl rounded-full w-12 h-12 p-0 border-2 border-white"
                        size="lg"
                        aria-label="Scroll to top"
                      >
                        <ArrowUp className="w-5 h-5" />
                      </Button>
                    </motion.div>
                  )}

                  {/* Print Styles */}
                  <style>{`
        @media print {
          .no-print {
            display: none !important;
          }
          .print-no-spacing {
            padding: 0 !important;
            margin: 0 !important;
            space-y: 0 !important;
          }
          .print-full-width {
            width: 100% !important;
            max-width: none !important;
            margin: 0 !important;
          }
          .print-no-shadow {
            box-shadow: none !important;
          }
          .print-no-radius {
            border-radius: 0 !important;
          }
          .slide-page {
            page-break-after: always !important;
            page-break-inside: avoid !important;
            height: 100vh !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }
          body {
            background: white !important;
          }
        }
      `}</style>
                </div>
                );
}
