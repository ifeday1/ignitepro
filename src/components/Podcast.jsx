import React from 'react';
import podcasts from '../data/podcasts';

const Podcast = () => {
  return (
    <div className='min-h-screen bg-gradient-to-b from-[#0f0f1a] via-[#121226] to-black text-white mt-20'>
      {/* HERO */}
      <section className='relative py-24 px-6 md:px-16 text-center overflow-hidden'>
        {/* Glow Background */}
        <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600 opacity-20 blur-[120px] rounded-full'></div>

        <div className='relative z-10 max-w-4xl mx-auto'>
          <h1 className='text-3xl md:text-6xl font-bold leading-tight mb-6'>
            The Ignite Room <br />
            <span className='text-purple-500'>Leadership Podcast</span>
          </h1>

          <p className='text-gray-300 text-lg md:text-xl max-w-2xl mx-auto'>
            Real conversations. Real growth. Real leadership. Dive into
            insightful discussions designed to help you stay relevant, lead with
            purpose, and thrive in today’s evolving world.
          </p>
        </div>
      </section>

      {/* PODCAST GRID */}
      <section className='px-6 md:px-16 pb-20'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {podcasts.map((podcast, index) => (
              <a
                key={index}
                href={podcast.youtube}
                target='_blank'
                rel='noopener noreferrer'
                className='group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-lg hover:border-purple-500 transition duration-300'
              >
                {/* THUMBNAIL */}
                <div className='relative h-56 overflow-hidden'>
                  <img
                    src={podcast.thumbnail}
                    alt={podcast.title}
                    className='w-full h-full object-cover group-hover:scale-110 transition duration-500'
                  />

                  {/* Dark overlay */}
                  <div className='absolute inset-0 bg-black/40 group-hover:bg-black/30 transition'></div>

                  {/* Play Icon */}
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <div className='w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition'>
                      ▶
                    </div>
                  </div>
                </div>

                {/* CONTENT */}
                <div className='p-5 space-y-3'>
                  <h3 className='text-lg font-semibold leading-snug group-hover:text-purple-400 transition'>
                    {podcast.title}
                  </h3>

                  <p className='text-sm text-gray-400'>{podcast.date}</p>

                  <div className='text-sm text-purple-400 font-medium'>
                    Watch Episode →
                  </div>
                </div>

                {/* Glow on hover */}
                <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-br from-purple-500/10 to-transparent'></div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Podcast;
