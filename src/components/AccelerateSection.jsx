import React from 'react';
import Flyer from '../assets/accelerate3.jpeg';

const AccelerateSection = () => {
  return (
    <section className='w-full bg-gradient-to-b from-white to-gray-50 py-20 px-6 md:px-12 lg:px-20'>
      <div className='max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center'>
        {/* TEXT CONTENT */}
        <div className='space-y-6 text-center lg:text-left'>
          <p className='text-sm font-semibold tracking-widest text-purple-600 uppercase'>
            Ignite Pro Community Presents
          </p>

          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 leading-tight'>
            Accelerate 3.0
          </h2>

          <p className='text-lg text-gray-600 font-medium'>
            <span className='text-purple-600 font-semibold'>Theme:</span> Future
            Proof — Sustaining Relevance
          </p>

          <p className='text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0'>
            Accelerate 3.0 is the third edition of the Ignite Pro Community's
            transformational leadership and professional development experience.
            This year’s theme focuses on helping young professionals, graduates,
            and emerging leaders remain relevant in an ever-changing world by
            building adaptable skills, embracing innovation, and developing
            purpose-driven leadership.
          </p>

          <p className='text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0'>
            Participants will gain practical insights, mentorship opportunities,
            and strategic frameworks that empower them to navigate the future of
            work and life with confidence.
          </p>

          {/* EVENT DATE */}
          <div className='flex justify-center lg:justify-start'>
            <div className='bg-purple-100 text-purple-700 font-semibold px-6 py-3 rounded-lg'>
              July 2026
            </div>
          </div>

          {/* CTA BUTTON */}
          <div className='pt-4 flex justify-center lg:justify-start'>
            <button className='bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 shadow-md hover:shadow-lg'>
              Anticipate
            </button>
          </div>
        </div>

        {/* IMAGE */}
        <div className='flex justify-center lg:justify-end'>
          <div className='relative group'>
            {/* subtle glow */}
            <div className='absolute -inset-2 bg-purple-200 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition'></div>

            <img
              src={Flyer}
              alt='Accelerate 3.0 Event'
              className='relative w-full max-w-md rounded-2xl shadow-2xl object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccelerateSection;
