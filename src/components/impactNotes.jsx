import React, { useEffect, useState, useRef } from 'react';
import Confetti from 'react-confetti';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

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
  const [paused, setPaused] = useState(false);
  const [cycleDone, setCycleDone] = useState(false);

  const startX = useRef(0);

  // ======================
  // AUTO CHANGE (10s)
  // ======================
  useEffect(() => {
    if (!visible || paused || cycleDone) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev === impactNotes.length - 1) {
          setCycleDone(true);
          setTimeout(() => setVisible(false), 3000); // auto-hide after full cycle
          return prev;
        }
        return prev + 1;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [visible, paused, cycleDone]);

  useEffect(() => {
    if (currentIndex === impactNotes.length - 1) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 4000);
    }
  }, [currentIndex]);

  // ======================
  // COUNT UP
  // ======================
  useEffect(() => {
    let start = 0;
    const end = impactNotes[currentIndex].value;
    const duration = 1500;
    const step = Math.ceil(end / (duration / 20));

    setCount(0);

    const counter = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(start);
    }, 20);

    return () => clearInterval(counter);
  }, [currentIndex]);

  // ======================
  // SWIPE SUPPORT
  // ======================
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diff = startX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? nextSlide() : prevSlide();
    }
  };

  // ======================
  // MANUAL NAVIGATION
  // ======================
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === impactNotes.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? impactNotes.length - 1 : prev - 1));
  };

  if (!visible) return null;

  return (
    <>
      {showConfetti && <Confetti numberOfPieces={250} recycle={false} />}

      <div
        className='fixed bottom-6 left-6 z-50 w-[92%] sm:w-[380px]'
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className='relative bg-white shadow-lg rounded-2xl p-6 border border-gray-200'>
          {/* Close Button */}
          <button
            onClick={() => setVisible(false)}
            className='absolute top-3 right-3 text-gray-400 hover:text-gray-700'
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

          {/* Animated Number */}
          <div className='text-4xl font-bold text-gray-900 text-center'>
            {count}
            {impactNotes[currentIndex].suffix || ''}
          </div>

          {/* Label */}
          <p className='text-gray-600 mt-2 text-sm text-center'>
            {impactNotes[currentIndex].label}
          </p>

          {/* Download Report */}
          <a
            href='/Ignite Pro Impact Note 20251.pdf'
            download
            className='block mt-4 text-sm font-semibold text-indigo-600 hover:text-indigo-800 text-center'
          >
            See Full Report ↓
          </a>
        </div>
      </div>
    </>
  );
};

export default ImpactToast;
