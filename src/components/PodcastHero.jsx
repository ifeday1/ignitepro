import React from 'react';
import { motion } from 'framer-motion';
import Countdown from './Countdown';
import useReleaseStatus from '../hooks/useReleaseStatus'
import Pod1 from '../assets/podcast.jpeg';

const RELEASE_DATE = '2026-01-27T00:00:00';

const PodcastHero = () => {
  const isLive = useReleaseStatus(RELEASE_DATE);

  return (
    <section className='bg-gradient-to-br from-[#1B0F2E] via-[#2E145D] to-[#FF6A3D] py-20 px-4'>
      <div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center'>
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className='text-orange-400 text-sm mb-2 text-white'>
            Ignite Pro Community
          </p>

          <h1 className='text-white text-4xl md:text-5xl font-bold mb-3'>
            The Ignite Room
          </h1>

          <h2 className='text-white text-xl mb-4'>Leadership Podcast</h2>

          {/* STATUS BADGE */}
          {!isLive ? (
            <span className='inline-block bg-orange-500 text-xs px-3 py-1 rounded-full text-white mb-4'>
              Coming Soon
            </span>
          ) : (
            <span className='inline-block bg-green-500 text-xs px-3 py-1 rounded-full text-white mb-4'>
              Now Streaming
            </span>
          )}

          <h3 className='text-white text-2xl md:text-3xl font-semibold mb-3'>
            Faith, Creativity & Cultural Influence
          </h3>

          <p className='text-orange-300 mb-4 text-white'>
            Becoming a Kingdom-Minded Creative in Today’s Media Landscape
          </p>

          <p className='text-gray-200 leading-relaxed max-w-xl'>
            In this debut episode, we explore how faith-driven creatives can
            shape culture, influence media, and build purposeful narratives
            without losing spiritual grounding.
          </p>

          {/* COUNTDOWN OR CTA */}
          {!isLive ? (
            <Countdown targetDate={RELEASE_DATE} />
          ) : (
            <a
              href='https://www.youtube.com/@IgniteProCommunity'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 mt-8 bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-md text-white'
            >
              ▶ Watch on YouTube
            </a>
          )}
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={Pod1}
            alt='Ignite Room Leadership Podcast'
            className='rounded-xl shadow-2xl w-full'
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PodcastHero;
