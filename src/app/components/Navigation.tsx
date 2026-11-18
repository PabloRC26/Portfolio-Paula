import { Menu, X, Sparkles, Presentation, Award, Heart } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import paperclipIcon from '@assets/paula/paperclip.svg';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onPresentationMode?: () => void;
}

export function Navigation({ currentPage, onNavigate, onPresentationMode }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About & Degree' },
    { id: 'case-study', label: 'Case Studies' },
    { id: 'competencies', label: 'Skills & Tools' },
    { id: 'showcase', label: 'UGC Portfolio' },
    { id: 'packages', label: 'Packages & Rates' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
      <nav className="sticky top-0 z-50 bg-[#54100F] border-b-2 border-[#D93240] shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo / Brand Name */}
            <div className="flex-shrink-0">
              <button
                onClick={() => onNavigate('home')}
                className="text-white hover:text-[#F6FFB6] transition-colors flex items-center space-x-2 text-left group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#D93240] border-2 border-[#F6FFB6] flex items-center justify-center font-mono font-extrabold text-[#F6FFB6] shadow group-hover:rotate-6 transition-transform">
                  PR
                </div>
                <div>
                  <span className="font-display text-xl sm:text-2xl font-bold tracking-tight block text-white group-hover:text-[#F6FFB6] transition-colors leading-tight">
                    Paula Robles
                  </span>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#FFD2C1] block">
                    UGC & Digital Marketer
                  </span>
                </div>
              </button>
            </div>

            {/* Desktop Navigation */}
              <div className="hidden lg:flex space-x-1 items-center">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className={`px-3.5 py-1.5 transition-all relative font-mono text-xs font-semibold rounded-full ${
                      currentPage === item.id
                        ? 'text-[#54100F] bg-[#F6FFB6] shadow-sm'
                        : 'text-[#FFD2C1] hover:text-white hover:bg-white/10'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{item.label}</span>
                  </motion.button>
                ))}
            
            {/* Presentation Mode Button */}
            {onPresentationMode && (
              <motion.button
                onClick={onPresentationMode}
                className="ml-3 px-4 py-2 bg-[#D93240] hover:bg-[#D93240]/90 text-white rounded-full font-mono text-xs font-bold transition-all shadow-md flex items-center space-x-2 border border-[#FFD2C1]/40"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Presentation className="w-3.5 h-3.5 text-[#F6FFB6]" />
                <span>Deck (14 Slides)</span>
              </motion.button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-2">
            {onPresentationMode && (
              <button
                onClick={onPresentationMode}
                className="px-3 py-1.5 bg-[#D93240] text-white rounded-full font-mono text-xs font-bold flex items-center gap-1.5"
              >
                <Presentation className="w-3.5 h-3.5" />
                <span>Deck</span>
              </button>
            )}
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-[#F6FFB6] p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="lg:hidden pb-5 pt-2 bg-[#54100F] border-t border-[#D93240]/40 space-y-1"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
            >
              {navItems.map((item, idx) => (
                <motion.button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMenuOpen(false);
                  }}
                  className = {`block w-full text-left px-4 py-2.5 rounded-xl font-mono text-xs font-semibold transition-colors ${currentPage === item.id
                          ? 'text-[#54100F] bg-[#F6FFB6]'
                          : 'text-[#FFD2C1] hover:text-white hover:bg-white/10'
                      }`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.03 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </motion.div>
          )}
            </AnimatePresence>
          </div>
      </nav>
      );
}
