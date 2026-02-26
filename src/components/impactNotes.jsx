import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

/*
========================================
IGNITE PRO – 2025 IMPACT WIDGET (FINAL)
========================================
• Bottom-left fixed
• 10s auto rotation
• Swipe support (mobile)
• Manual arrow navigation
• Count-up stats
• Confetti on last slide
• Auto-hide after full cycle
• Analytics tracking hook
• Download report
• Glassmorphism UI
• Responsive
*/

const impactNotes = [
  { label: 'Young Professionals Empowered', value: 1200 },
  { label: 'Leadership Bootcamps Hosted', value: 4 },
  { label: 'Students Supported', value: 244 },
  { label: 'Panel Sessions Delivered', value: 30 },
  { label: 'Mentorship Connections Made', value: 500 },
  { label: 'CSR Initiatives Launched', value: 1 },
  { label: 'Cities Reached in 2025', value: 3 },
  { label: 'Positive Feedback Rate (%)', value: 95, suffix: '%' },
];

const ImpactToast = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [visible, setVisible] = useState(true);
  const [cycleCompleted, setCycleCompleted] = useState(false);
  const [paused, setPaused] = useState(false);

  const startX = useRef(0);

  // ======================
  // Analytics Tracking
  // ======================
  const trackEvent = (eventName, data = {}) => {
    console.log('Analytics Event:', eventName, data);

    // Example for Google Analytics:
    // window.gtag?.("event", eventName, data);
  };

  // ======================
  // Auto Rotate (10s)
  // ======================
  useEffect(() => {
    if (!visible || paused || cycleCompleted) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev === impactNotes.length - 1) {
          setCycleCompleted(true);
          setTimeout(() => setVisible(false), 3000); // auto-hide after full cycle
          return prev;
        }
        return prev + 1;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [visible, paused, cycleCompleted]);

  // ======================
  // Confetti on Last Slide
  // ======================
  useEffect(() => {
    if (currentIndex === impactNotes.length - 1) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 4000);
    }
  }, [currentIndex]);

  // ======================
  // Count-Up Animation
  // ======================
  useEffect(() => {
    let start = 0;
    const end = impactNotes[currentIndex].value;
    const duration = 1500;
    const incrementTime = 20;
    const step = Math.ceil(end / (duration / incrementTime));

    setCount(0);

    const counter = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(start);
    }, incrementTime);

    return () => clearInterval(counter);
  }, [currentIndex]);

  // ======================
  // Swipe Support
  // ======================
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX.current - endX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
  };

  // ======================
  // Manual Navigation
  // ======================
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === impactNotes.length - 1 ? 0 : prev + 1));
    trackEvent('impact_next_clicked');
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? impactNotes.length - 1 : prev - 1));
    trackEvent('impact_prev_clicked');
  };

  if (!visible) return null;

  return (
    <>
      {showConfetti && <Confetti numberOfPieces={300} recycle={false} />}

      <div className='fixed bottom-6 left-6 z-50 w-[92%] sm:w-[400px]'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4 }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className='relative rounded-2xl p-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
          >
            <div className='relative bg-white/80 backdrop-blur-xl shadow-2xl rounded-2xl p-6 border border-white/40 overflow-hidden'>
              {/* Close Button */}
              <button
                onClick={() => {
                  setVisible(false);
                  trackEvent('impact_closed');
                }}
                className='absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition'
              >
                <X size={18} />
              </button>

              {/* Arrows */}
              <button
                onClick={prevSlide}
                className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-800'
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={nextSlide}
                className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-800'
              >
                <ChevronRight size={20} />
              </button>

              {/* Header */}
              <h4 className='text-xs uppercase tracking-widest text-indigo-600 font-semibold mb-2 text-center'>
                2025 At A Glance
              </h4>

              {/* Count Number */}
              <div className='text-4xl font-bold text-gray-900 text-center'>
                {count}
                {impactNotes[currentIndex].suffix || ''}
              </div>

              {/* Label */}
              <p className='text-gray-700 mt-2 text-sm leading-relaxed text-center'>
                {impactNotes[currentIndex].label}
              </p>

              {/* Download Report */}
              <a
                href='/public/ignite_2025_impact_report.pdf'
                download
                onClick={() => trackEvent('impact_report_downloaded')}
                className='block mt-4 text-sm font-semibold text-indigo-600 hover:text-indigo-800 text-center'
              >
                See Full Report ↓
              </a>

              {/* Progress Bar */}
              <motion.div
                key={currentIndex + '-progress'}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 10, ease: 'linear' }}
                className='absolute bottom-0 left-0 h-1 bg-indigo-600'
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default ImpactToast;
