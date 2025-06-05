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
      className='fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] text-white px-4 py-3 md:px-12 md:py-4 shadow-lg flex flex-col md:flex-row items-center justify-between gap-4'
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className='text-center md:text-left'>
        <h2 className='text-lg font-bold tracking-wide uppercase'>
          🚀 Accelerate 2.0 is Coming — July 29th, 2025
        </h2>
        <p className='text-sm md:text-base mt-1'>
          Countdown:{' '}
          <span className='font-medium'>
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{' '}
            {timeLeft.seconds}s
          </span>
        </p>
      </div>

      <div className='flex gap-3'>
        <Link
          to='/register'
          className=' text-white font-medium hover:underline transition'
        >
          Register
        </Link>
        <Link
          to='/accelerate'
          className=' text-white font-medium  hover:underline transition'
        >
          View More
        </Link>
      </div>
    </motion.div>
  );
}
