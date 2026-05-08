import React from 'react';
import { motion } from 'framer-motion';
import Flyer from '../assets/accelerate3.jpeg';

const AccelerateSection = () => {
  return (
    <section className='relative overflow-hidden bg-gradient-to-br from-[#f8f7ff] via-white to-[#f3efff] py-24 px-6 md:px-16'>
      {/* Background Glow */}
      <div className='absolute top-0 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl'></div>
      <div className='absolute bottom-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl'></div>

      <div className='relative max-w-7xl mx-auto'>
        <div className='grid lg:grid-cols-2 gap-14 items-center'>
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='space-y-8'
          >
            {/* Badge */}
            <div className='inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-semibold'>
              🔥 Accelerate 3.0
            </div>

            {/* Heading */}
            <div>
              <h2 className='text-4xl md:text-6xl font-black leading-tight text-gray-900'>
                Future Proof:
                <span className='block text-primary mt-2'>
                  Sustaining Relevance
                </span>
              </h2>

              <div className='w-24 h-1.5 bg-primary rounded-full mt-6'></div>
            </div>

            {/* Description */}
            <p className='text-lg text-gray-600 leading-relaxed max-w-2xl'>
              A transformational one-day bootcamp designed for young
              professionals, graduates, and graduating students seeking clarity,
              growth, relevance, and leadership in today’s fast-changing world.
            </p>

            {/* Highlights */}
            <div className='grid sm:grid-cols-2 gap-4'>
              {[
                'Keynote Sessions',
                'Fireside Chat',
                'Panel Discussion',
                'Breakout Workshops',
                'Networking Sessions',
                'Skill Sprint',
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='flex items-center gap-3 bg-white shadow-md rounded-2xl px-4 py-4 border border-gray-100'
                >
                  <div className='w-3 h-3 rounded-full bg-primary'></div>
                  <span className='text-gray-700 font-medium'>{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Event Info */}
            <div className='grid sm:grid-cols-2 gap-5 pt-4'>
              <div className='bg-white rounded-2xl p-5 shadow-lg border border-gray-100'>
                <p className='text-sm uppercase tracking-widest text-primary font-semibold'>
                  Date & Time
                </p>

                <h3 className='text-2xl font-bold text-gray-900 mt-2'>
                  July 25, 2026
                </h3>

                <p className='text-gray-600 mt-1'>9:00AM – 4:00PM</p>
              </div>

              <div className='bg-white rounded-2xl p-5 shadow-lg border border-gray-100'>
                <p className='text-sm uppercase tracking-widest text-primary font-semibold'>
                  Venue
                </p>

                <h3 className='text-lg font-bold text-gray-900 mt-2 leading-snug'>
                  Celebr8 Event Centre
                </h3>

                <p className='text-gray-600 mt-1'>
                  35 Olu Obasanjo Road, Port Harcourt
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className='flex flex-wrap gap-4 pt-4'>
              <a
                href='https://bit.ly/4wb7gwc'
                className='bg-primary text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:scale-105 transition duration-300'
              >
                Register Now
              </a>

              <a
                href='/contact'
                className='border-2 border-primary text-primary px-8 py-4 rounded-2xl font-semibold hover:bg-primary hover:text-white transition duration-300'
              >
                Partnership & Sponsorship
              </a>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className='relative flex justify-center'
          >
            {/* Glow */}
            <div className='absolute inset-0 bg-primary/10 blur-3xl rounded-full'></div>

            {/* Floating Card */}
            <div className='relative'>
              {/* <div className='absolute -top-5 -right-5 bg-orange-500 text-white px-4 py-2 rounded-full shadow-xl text-sm font-bold z-10'>
                Coming Soon 🚀
              </div> */}

              <img
                src={Flyer}
                alt='Accelerate 3.0 Flyer'
                className='relative w-full max-w-lg rounded-[2rem] shadow-2xl border border-white/40'
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AccelerateSection;
