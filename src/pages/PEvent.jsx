import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Eventshead from '../assets/eventshead.png';
import { pastEvents as events } from '../data/pastEvents';

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const PEvent = () => {
  const WORD_LIMIT = 50;
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const truncateText = (text) => {
    const words = text.split(/\s+/);
    if (words.length <= WORD_LIMIT) return text;
    return words.slice(0, WORD_LIMIT).join(' ') + '...';
  };

  return (
    <>
      {/* HERO SECTION */}
      <section
        className='relative h-[60vh] bg-cover bg-center flex items-center justify-center'
        style={{ backgroundImage: `url(${Eventshead})` }}
      >
        <div className='absolute inset-0 bg-black/70'></div>

        <motion.div
          initial='hidden'
          animate='visible'
          variants={fadeUp}
          className='relative text-center text-white px-6'
        >
          <h1 className='text-4xl md:text-6xl font-bold tracking-wide'>
            Past Events
          </h1>
          <p className='mt-4 text-lg md:text-xl text-gray-200'>
            Moments that shaped our journey
          </p>
        </motion.div>
      </section>

      {/* EVENTS SECTION */}
      <section className='bg-gray-50 py-20 px-6 md:px-16'>
        <div className='max-w-7xl mx-auto space-y-24'>
          {events.map((event, index) => {
            const isExpanded = expanded[index];
            const words = event.description.split(/\s+/);
            const isLong = words.length > WORD_LIMIT;

            return (
              <motion.div
                key={index}
                variants={fadeUp}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.2 }}
                className='bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row'
              >
                {/* IMAGE */}
                <div
                  className={`md:w-1/2 ${index % 2 !== 0 ? 'md:order-2' : ''}`}
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className='w-full h-[300px] md:h-full object-cover hover:scale-105 transition-transform duration-700'
                  />
                </div>

                {/* CONTENT */}
                <div className='md:w-1/2 p-8 md:p-14 flex flex-col justify-center space-y-5'>
                  <span className='text-sm uppercase tracking-widest text-primary font-semibold'>
                    {event.year}
                  </span>

                  <h2 className='text-2xl md:text-4xl font-bold text-gray-800'>
                    {event.title}
                  </h2>

                  <div className='w-16 h-1 bg-primary rounded-full'></div>

                  <p className='text-gray-600 leading-relaxed whitespace-pre-line'>
                    {isExpanded
                      ? event.description
                      : truncateText(event.description)}
                  </p>

                  {isLong && (
                    <button
                      onClick={() => toggleExpand(index)}
                      className='text-primary font-semibold hover:underline transition'
                    >
                      {isExpanded ? 'View Less' : 'View More'}
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default PEvent;
