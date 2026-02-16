import React from 'react';
import { motion } from 'framer-motion';
import Eventshead from '../assets/eventshead.png';

import Img15 from '../assets/15.jpg';
import Img30 from '../assets/30.jpg';
import A11 from '../assets/a11.jpeg';
import Csr19 from '../assets/csr19.jpg';
import mb from '../assets/mb.jpg';

const events = [
  {
    title: 'Mentorship Breakfast: BLUEPRINT: BUILDING THE FUTURE',
    year: '2026',
    description:
      'The second edition of the Ignite Pro mentorship breakfast, which is targeted at young professionals, recent graduates, and entrepreneurs, has as its theme BLUEPRINT: BUILDING THE FUTURE. In accordance with the theme, the event gave attendees the tools they needed to succeed through productive workshops, networking opportunities, and powerful mentoring sessions. It highlighted how crucial it is to have a clear vision, set goals, and take deliberate action in the direction of a purposeful future. The productivity session and roundtable discussion between mentors and mentees, where participants had in-depth Q&A with the mentors and received professional feedback to improve their concepts, was a highlight. Overall, the mentorship program encouraged participants to embrace visionary and future-ready leaders in order to drive positive change and to create a lasting future for both themselves and society.',
    image: mb,
    accent: 'from-cyan-500/10 to-transparent',
  },

  {
    title: 'Back To School Initiative',
    year: '2025',
    description:
      'Ignite Pro Community launched its first CSR initiative impacting 244 students by providing essential school supplies and inspiring academic excellence.',
    image: Csr19,
    accent: 'from-cyan-500/10 to-transparent',
  },
  {
    title: 'Accelerate 2.0',
    year: '2025',
    description:
      'A transformative bootcamp themed “Future Forward” featuring mentorship, workshops, and the Pitch Tank Competition empowering young professionals.',
    image: A11,
    accent: 'from-pink-500/10 to-transparent',
  },
  {
    title: 'Unwind: Revisiting The Vision Board',
    year: '2024',
    description:
      'A mentorship breakfast experience combining expert guidance, networking, and vision board strategy planning for professionals.',
    image: Img30,
    accent: 'from-lime-500/10 to-transparent',
  },
  {
    title: 'Accelerate 1.0',
    year: '2024',
    description:
      'The maiden leadership bootcamp tagged “Ten Times Better,” equipping young leaders with practical knowledge and personal development tools.',
    image: Img15,
    accent: 'from-amber-500/10 to-transparent',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const PEvent = () => {
  return (
    <>
      {/* HERO */}
      <section
        className='relative h-[65vh] bg-cover bg-center flex items-center justify-center'
        style={{ backgroundImage: `url(${Eventshead})` }}
      >
        <div className='absolute inset-0 bg-black/60'></div>

        <motion.div
          initial='hidden'
          animate='visible'
          variants={fadeUp}
          className='relative text-center text-white px-6'
        >
          <h1 className='text-4xl md:text-7xl font-bold tracking-wide'>
            Past Events
          </h1>
          <p className='mt-4 text-lg md:text-xl text-gray-200'>
            Moments that shaped our journey
          </p>
        </motion.div>
      </section>

      {/* EVENTS */}
      <section className='bg-gray-50 py-24 px-6 md:px-16'>
        <div className='max-w-7xl mx-auto space-y-28'>
          {events.map((event, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              className={`relative rounded-3xl p-[1px] bg-gradient-to-r ${event.accent}`}
            >
              <div
                className={`bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row ${
                  index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* IMAGE */}
                <div className='md:w-1/2 overflow-hidden'>
                  <img
                    src={event.image}
                    alt={event.title}
                    className='w-full h-[300px] md:h-full object-cover hover:scale-105 transition duration-700'
                  />
                </div>

                {/* CONTENT */}
                <div className='md:w-1/2 p-10 md:p-16 flex flex-col justify-center space-y-6'>
                  <span className='text-sm uppercase tracking-widest text-primary font-semibold'>
                    {event.year}
                  </span>

                  <h2 className='text-2xl md:text-4xl font-bold text-gray-800 leading-tight'>
                    {event.title}
                  </h2>

                  <div className='w-16 h-1 bg-primary rounded-full'></div>

                  <p className='text-gray-600 leading-relaxed'>
                    {event.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default PEvent;
