import React from 'react';
// import { motion } from 'framer-motion';
// import Countdown from './Countdown';
// import useReleaseStatus from '../hooks/useReleaseStatus';
import Pod1 from '../assets/podcast1.jpeg';

// const RELEASE_DATE = '2026-01-27T00:00:00';

const PodcastHero = () => {
  // const isLive = useReleaseStatus(RELEASE_DATE);

  return (
    <section className='w-full bg-white py-20 px-6 md:px-12 lg:px-20'>
      <div className='max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center'>
        <div className='space-y-6 text-center lg:text-left'>
          <span className='text-sm font-semibold tracking-widest text-purple-600 uppercase'>
            Featured Podcast
          </span>

          <h2 className='text-3xl md:text-5xl font-bold text-gray-900 leading-tight'>
            The Ignite Room <br />
            <span className='text-purple-600'>Leadership Podcast</span>
          </h2>

          {/* Theme */}
          <p className='text-lg md:text-xl text-gray-700 font-medium'>
            Engineering, Excellence, and Evolving with Grace:
            <span className='block text-purple-600'>
              Leading in Industry and the Home.
            </span>
          </p>

          <p className='text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0'>
            Join us for an inspiring conversation with industry leaders as we
            explore the balance between career excellence, innovation, and
            purpose-driven living. This episode brings practical insights to
            help you grow professionally while staying grounded in what truly
            matters.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
            <span className='bg-purple-100 text-purple-700 px-5 py-2 rounded-lg font-medium'>
              Mar 18th, 2026
            </span>
            <span className='bg-gray-100 text-gray-800 px-5 py-2 rounded-lg font-medium'>
              8PM
            </span>
          </div>

          <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4'>
            <a
              href='https://youtu.be/yKRczvfaxZM?si=hVNsnTn-dFkECspW'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition shadow-md'
            >
              ▶ Watch on YouTube
            </a>
          </div>
        </div>

        <div className='flex justify-center lg:justify-end'>
          <div className='relative group max-w-md w-full'>
            {/* Glow */}
            <div className='absolute -inset-2 bg-purple-200 blur-2xl opacity-40 group-hover:opacity-60 transition rounded-2xl'></div>

          
            <img
              src={Pod1}
              alt='Ignite Podcast'
              className='relative rounded-2xl shadow-2xl w-full object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastHero;
