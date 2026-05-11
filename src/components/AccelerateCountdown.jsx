import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Clock3, ExternalLink } from 'lucide-react';

const AccelerateCountdown = () => {
  // EVENT DATE
  const targetDate = new Date('2026-07-25T09:00:00').getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
      };
    }

    return {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
        2,
        '0',
      ),

      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(
        2,
        '0',
      ),

      minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
        2,
        '0',
      ),

      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section className='relative overflow-hidden bg-gradient-to-r from-[#2B0A57] via-[#5B21B6] to-[#7C3AED] text-white py-36 px-4 md:px-8'>
      {/* BACKGROUND GLOW */}
      <div className='absolute -top-24 -left-16 h-64 w-64 rounded-full bg-pink-500/20 blur-3xl'></div>

      <div className='absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-orange-400/20 blur-3xl'></div>

      <div className='relative max-w-7xl mx-auto flex flex-col xl:flex-row items-center justify-between gap-8'>
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className='text-center xl:text-left'
        >
          <div className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 mb-4'>
            <Clock3 className='w-4 h-4 text-orange-300' />

            <span className='text-sm font-medium tracking-wide'>
              Accelerate 3.0 Countdown
            </span>
          </div>

          <h2 className='text-3xl md:text-5xl font-black leading-tight'>
            Future Proof:
            <span className='block text-orange-300'>Sustaining Relevance</span>
          </h2>

          <p className='mt-4 text-sm md:text-base text-gray-200 max-w-2xl leading-relaxed'>
            Join young professionals, graduates, entrepreneurs, and leaders for
            a transformational experience designed to equip you with practical
            insights, leadership capacity, and future-ready strategies.
          </p>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className='flex flex-col items-center gap-5 w-full xl:w-auto'
        >
          {/* TIMER */}
          <div className='flex items-center justify-center gap-3 md:gap-5 flex-wrap'>
            {timeBlocks.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className='bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl px-5 md:px-6 py-4 min-w-[85px] md:min-w-[110px] text-center shadow-2xl'
              >
                <h3 className='text-3xl md:text-5xl font-black'>
                  {item.value}
                </h3>

                <p className='text-[11px] md:text-sm uppercase tracking-widest text-gray-200 mt-1'>
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* REGISTER BUTTON */}
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href='https://bit.ly/4wb7gwc'
            target='_blank'
            rel='noopener noreferrer'
            className='group inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white font-semibold px-8 py-4 rounded-full shadow-2xl'
          >
            Register for Accelerate 3.0
            <ExternalLink className='w-4 h-4 transition-transform duration-300 group-hover:translate-x-1' />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default AccelerateCountdown;
