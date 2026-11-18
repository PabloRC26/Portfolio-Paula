import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'motion/react';
import { HomePage } from './components/HomePage';
import { CompetenciesPage } from './components/CompetenciesPage';
import { CaseStudyPage } from './components/CaseStudyPage';
import { CreativeShowcase } from './components/CreativeShowcase';
import { ContactPage } from './components/ContactPage';
import { Navigation } from './components/Navigation';
import { PresentationMode } from './components/PresentationMode';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isPresentationMode, setIsPresentationMode] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} onPresentationMode={() => setIsPresentationMode(true)} />;
      case 'about':
        return <HomePage onNavigate={setCurrentPage} onPresentationMode={() => setIsPresentationMode(true)} />;
      case 'brand':
      case 'case-study':
        return <CaseStudyPage />;
      case 'competencies':
        return <CompetenciesPage />;
      case 'showcase':
      case 'creative':
        return <CreativeShowcase />;
      case 'packages':
        return <HomePage onNavigate={setCurrentPage} onPresentationMode={() => setIsPresentationMode(true)} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} onPresentationMode={() => setIsPresentationMode(true)} />;
    }
  };

  const pageVariants: Variants = {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.98
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1] as const
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.98,
      transition: {
        duration: 0.25,
        ease: [0.22, 1, 0.36, 1] as const
      }
    }
  };

  if (isPresentationMode) {
    return <PresentationMode onClose={() => setIsPresentationMode(false)} />;
  }

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2D2323]">
      <Navigation
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        onPresentationMode={() => setIsPresentationMode(true)}
      />
      <AnimatePresence mode="wait">
        <motion.main
          key={currentPage}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {renderPage()}
        </motion.main>
      </AnimatePresence>
    </div>
  );
}
