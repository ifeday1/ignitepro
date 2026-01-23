import React from 'react';
import { motion } from 'framer-motion';

import Podcast from '../assets/podcast.jpeg';
import Creative from '../assets/mentor.jpeg';
import Accelerate from '../assets/1.jpg';

const events = [
  {
    type: 'podcast',
    title: 'The Ignite Room Podcast',
    date: 'February 2026',
    subtitle: 'Faith • Creativity • Culture',
    description:
      'A leadership podcast experience exploring how faith-driven creatives can influence culture, media, and society with purpose.',
    image: Podcast,
    link: 'https://www.youtube.com/@IgniteProCommunity',
  },
  {
    type: 'event',
    title: 'Ignite Pro Mentorship Breakfast',
    date: '7th February 2026',
    subtitle: 'Vision • Expression • Impact',
    description:
      'A focused mentorship experience designed to provide clarity, direction, and practical guidance for growth. This is a space for learning, connection, and intentional development.',
    image: Creative,
    link: 'https://tix.africa/discover/blueace',
    reverse: true,
  },
  {
    type: 'event',
    title: 'Accelerate 3.0',
    date: 'April 2026',
    subtitle: 'Leadership • Growth • Purpose',
    description:
      'Accelerate 3.0 is a transformational bootcamp equipping young professionals with leadership capacity, clarity, and faith-driven excellence.',
    image: Accelerate,
    link: '#',
  },
];

const UpcomingEvents = () => {
  return (
    <section className='bg-[#0F0625] py-28 px-4 overflow-hidden mt-20'>
      <div className='max-w-7xl mx-auto space-y-32'>
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className={`flex flex-col ${
              event.reverse ? 'md:flex-row-reverse' : 'md:flex-row'
            } items-center gap-14`}
          >
            {/* IMAGE */}
            <motion.div
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1 }}
              className='relative w-full md:w-1/2'
            >
              <div className='absolute inset-0 bg-gradient-to-tr from-black/70 via-black/20 to-transparent rounded-2xl z-10' />

              <img
                src={event.image}
                alt={event.title}
                className='w-full h-[420px] md:h-[540px] object-cover rounded-2xl shadow-2xl'
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: event.reverse ? 60 : -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className='w-full md:w-1/2 text-center md:text-left'
            >
              <p className='text-orange-400 text-sm mb-2'>{event.date}</p>

              <h2 className='text-white text-3xl md:text-4xl font-bold mb-3'>
                {event.title}
              </h2>

              <p className='text-gray-400 uppercase tracking-widest text-xs mb-6'>
                {event.subtitle}
              </p>

              <p className='text-gray-300 leading-relaxed text-lg max-w-xl mx-auto md:mx-0 mb-8'>
                {event.description}
              </p>

              {/* REGISTER BUTTON */}
              <a
                href={event.link}
                target='_blank'
                rel='noopener noreferrer'
                className={`inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold transition
    ${
      event.type === 'podcast'
        ? 'bg-red-600 hover:bg-red-700 text-white'
        : 'bg-primary hover:bg-orange-600 text-white'
    }`}
              >
                {event.type === 'podcast' ? '▶ Watch' : 'Register'}
              </a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingEvents;
