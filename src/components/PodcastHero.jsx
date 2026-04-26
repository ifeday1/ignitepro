import React from 'react';
// import { motion } from 'framer-motion';
// import Countdown from './Countdown';
// import useReleaseStatus from '../hooks/useReleaseStatus';
import Pod1 from '../assets/podcast1.jpeg';

// const RELEASE_DATE = '2026-01-27T00:00:00';

const PodcastHero = () => {
  // const isLive = useReleaseStatus(RELEASE_DATE);

  return (
    <section className='w-full bg-gradient-to-br from-white via-purple-50 to-white py-20 px-6 md:px-12 lg:px-20'>
      <div className='max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center'>
        {/* LEFT CONTENT */}
        <div className='space-y-6 text-center lg:text-left'>
          {/* Label */}
          <span className='inline-block text-sm font-semibold tracking-widest text-purple-600 uppercase bg-purple-100 px-3 py-1 rounded-full'>
            New Episode
          </span>

          {/* Title */}
          <h2 className='text-3xl md:text-5xl font-bold text-gray-900 leading-tight'>
            The Ignite Room <br />
            <span className='text-purple-600'>Leadership Podcast</span>
          </h2>

          {/* Theme */}
          <div className='space-y-2'>
            <p className='text-sm uppercase text-gray-500 tracking-wide'>
              Theme
            </p>

            <h3 className='text-2xl md:text-4xl font-extrabold text-gray-900'>
              TAKING CHANCES.
            </h3>

            <p className='text-lg text-purple-600 font-medium'>
              The Audacity to Turn Challenges Into Opportunities
            </p>
          </div>

          {/* Guest */}
          <div className='pt-2'>
            <p className='text-sm text-gray-500'>Guest Speaker</p>
            <h4 className='text-xl font-semibold text-gray-900'>
              Joseph Adetuberu
            </h4>
            <p className='text-gray-600 text-sm'>
              Assistant Vice President, Gas Business – Heirs Energies
            </p>
          </div>

          {/* Date & Time */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2'>
            <span className='bg-purple-100 text-purple-700 px-5 py-2 rounded-lg font-medium'>
              Apr 25th, 2026
            </span>
            <span className='bg-gray-100 text-gray-800 px-5 py-2 rounded-lg font-medium'>
              6PM
            </span>
          </div>

          {/* CTA */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4'>
            <a
              href='https://www.youtube.com/@IgniteProCommunity'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition shadow-md'
            >
              ▶ Watch on YouTube
            </a>

            <button className='border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition'>
              Listen Now
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className='flex justify-center lg:justify-end'>
          <div className='relative group max-w-md w-full'>
            {/* Glow effect */}
            <div className='absolute -inset-3 bg-purple-300 blur-2xl opacity-30 group-hover:opacity-50 transition rounded-2xl'></div>

            {/* Image */}
            <img
              src={Pod1}
              alt='Taking Chances Podcast'
              className='relative rounded-2xl shadow-2xl w-full object-cover transform group-hover:scale-105 transition duration-500'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastHero;
