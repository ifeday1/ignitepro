import React from 'react';
import { motion } from 'framer-motion';
import Eventshead from '../assets/eventshead.png';
import {
  accelerate3,
  breakfastMentorship,
  csr,
  accelerate2,
  accelerate1,
  unwind,
  accelerate3Videos,
} from '../data/galleries';

import ImageGallery from '../components/ImageGallery';

/* ================== SECTIONS ================== */

const gallerySections = [
  {
    title: 'ACCELERATE 3.0',
    images: accelerate3,
  },
  {
    title: 'BREAKFAST MENTORSHIP EXPERIENCE',
    images: breakfastMentorship,
  },
  {
    title: 'BACK TO SCHOOL INITIATIVE',
    images: csr,
  },
  {
    title: 'ACCELERATE 2.0',
    images: accelerate2,
  },
  {
    title: 'ACCELERATE 1.0',
    images: accelerate1,
  },
  {
    title: 'UNWIND: REVISITING THE VISION BOARD',
    images: unwind,
  },
];

const GalleryUse = () => {
  return (
    <>
      {/* HERO */}
      <section
        className='relative h-[60vh] bg-cover bg-center flex items-center justify-center'
        style={{ backgroundImage: `url(${Eventshead})` }}
      >
        <div className='absolute inset-0 bg-black/60'></div>
        <div className='relative text-center text-white px-6'>
          <h1 className='text-4xl md:text-6xl font-bold tracking-wide'>
            Event Gallery
          </h1>
          <p className='mt-4 text-lg text-gray-200'>
            Capturing moments that matter
          </p>
        </div>
      </section>

      {/* ACCELERATE 3.0 VIDEO HIGHLIGHTS */}
      <section className='bg-gray-50 pt-20 px-6 md:px-16'>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className='max-w-7xl mx-auto'
        >
          <div className='mb-10 text-center'>
            <h2 className='text-2xl md:text-4xl font-bold text-gray-800'>
              ACCELERATE 3.0 VIDEO HIGHLIGHTS
            </h2>
            <div className='w-20 h-1 bg-primary mx-auto mt-4 rounded-full'></div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
            {accelerate3Videos.map((video, index) => (
              <video
                key={index}
                controls
                preload='none'
                poster={video.poster}
                className='w-full aspect-[9/16] object-cover rounded-2xl shadow-sm border border-gray-200 bg-black'
              >
                <source src={video.src} type='video/mp4' />
              </video>
            ))}
          </div>
        </motion.div>
      </section>

      {/* GALLERY SECTIONS */}
      <section className='bg-gray-50 py-20 px-6 md:px-16 space-y-28'>
        {gallerySections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className='max-w-7xl mx-auto'
          >
            <div className='mb-10 text-center'>
              <h2 className='text-2xl md:text-4xl font-bold text-gray-800'>
                {section.title}
              </h2>
              <div className='w-20 h-1 bg-primary mx-auto mt-4 rounded-full'></div>
            </div>

            <ImageGallery images={section.images} />
          </motion.div>
        ))}
      </section>
    </>
  );
};

export default GalleryUse;
