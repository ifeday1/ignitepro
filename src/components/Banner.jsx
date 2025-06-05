import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const targetDate = new Date('2025-07-29T00:00:00');

function getTimeRemaining() {
  const now = new Date();
  const total = targetDate - now;

  const days = Math.max(0, Math.floor(total / (1000 * 60 * 60 * 24)));
  const hours = Math.max(0, Math.floor((total / (1000 * 60 * 60)) % 24));
  const minutes = Math.max(0, Math.floor((total / 1000 / 60) % 60));
  const seconds = Math.max(0, Math.floor((total / 1000) % 60));

  return { days, hours, minutes, seconds };
}

export default function AccelerateBanner() {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className='fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] text-white text-sm px-4 py-2 shadow-md overflow-x-auto whitespace-nowrap'
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className='flex items-center justify-between gap-6 min-w-full'>
        <div className='flex items-center gap-2'>
          <span className='font-semibold'>
            🚀 Accelerate 2.0 — July 29, 2025
          </span>
          <span>|</span>
          <span>
            Countdown: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{' '}
            {timeLeft.seconds}s
          </span>
        </div>

        <div className='flex items-center gap-2'>
          <Link
            to='/register'
            className='text-white font-medium hover:underline  transition'
          >
            Register
          </Link>
          <Link
            to='/speakers'
            className='text-white font-medium hover:underline transition'
          >
            View More
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
