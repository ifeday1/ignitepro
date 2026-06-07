// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
import a23 from '../assets/a23.jpeg';
import DonationAccounts from '../components/DonationAccounts';

const Donate = () => {
  return (
    <div>
      <section className='relative overflow-hidden bg-gradient-to-br from-[#2B0A57] via-[#5B21B6] to-[#7C3AED] pt-32 pb-24'>
        <div className='absolute -top-24 left-0 h-96 w-96 rounded-full bg-pink-500/20 blur-3xl'></div>
        <div className='absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-400/20 blur-3xl'></div>

        <div className='max-w-7xl mx-auto px-6 lg:px-8 relative z-10'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            {/* LEFT */}
            <div>
              <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 text-white mb-6'>
                ❤️ Support Ignite Pro
              </div>

              <h1 className='text-5xl md:text-7xl font-black text-white leading-tight'>
                Invest In The Future.
                <span className='block text-orange-300'>
                  Empower The Next Generation.
                </span>
              </h1>

              <p className='mt-6 text-lg text-gray-200 max-w-2xl'>
                Every donation helps Ignite Pro provide mentorship, leadership
                development, educational support, and transformational
                opportunities for young people.
              </p>

              <div className='flex flex-wrap gap-4 mt-8'>
                <a
                  href='#donation-accounts'
                  className='bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold'
                >
                  Donate Now
                </a>

                <a
                  href='/Ignite Pro Impact Note 20251.pdf'
                  download
                  className='border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10'
                >
                  View Impact Report
                </a>
              </div>

              {/* Stats */}
              <div className='grid grid-cols-3 gap-4 mt-12'>
                <div>
                  <h3 className='text-4xl font-black text-white'>1200+</h3>
                  <p className='text-gray-300 text-sm'>Professionals Reached</p>
                </div>

                <div>
                  <h3 className='text-4xl font-black text-white'>244</h3>
                  <p className='text-gray-300 text-sm'>Students Supported</p>
                </div>

                <div>
                  <h3 className='text-4xl font-black text-white'>500+</h3>
                  <p className='text-gray-300 text-sm'>
                    Mentorship Connections
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div>
              <img
                src={a23}
                alt='Ignite Pro Impact'
                className='rounded-[2rem] shadow-2xl w-full h-[600px] object-cover'
              />
            </div>
          </div>
        </div>
      </section>

      <section className='py-20 px-6 bg-white'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-14'>
            <h2 className='text-4xl font-bold text-gray-900'>
              Why Your Donation Matters
            </h2>

            <p className='text-gray-600 mt-4 max-w-2xl mx-auto'>
              Every contribution helps us equip young professionals, support
              students, provide mentorship opportunities, and create
              transformational leadership experiences.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            <div className='bg-gray-50 rounded-3xl p-8'>
              <h3 className='font-bold text-xl mb-3'>Leadership Development</h3>

              <p className='text-gray-600'>
                Funding leadership bootcamps, mentorship breakfasts, and
                transformational learning experiences.
              </p>
            </div>

            <div className='bg-gray-50 rounded-3xl p-8'>
              <h3 className='font-bold text-xl mb-3'>Student Support</h3>

              <p className='text-gray-600'>
                Supporting students with educational resources, school materials
                and growth opportunities.
              </p>
            </div>

            <div className='bg-gray-50 rounded-3xl p-8'>
              <h3 className='font-bold text-xl mb-3'>Community Impact</h3>

              <p className='text-gray-600'>
                Driving meaningful CSR projects that create lasting positive
                change in communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='py-20 px-6 bg-purple-100 '>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-4xl font-bold mb-10'>The Impact Is Real</h2>

          <div className='bg-gray-50 rounded-3xl p-10'>
            <p className='text-lg text-gray-700 italic'>
              "Ignite Pro helped me gain clarity, confidence, and direction for
              my career. The mentorship and leadership programs changed my
              perspective completely."
            </p>

            <div className='mt-6'>
              <h4 className='font-bold'>Program Participant</h4>
            </div>
          </div>
        </div>
      </section>

      <DonationAccounts />

      <section className='py-24 px-6 bg-gradient-to-r from-primary to-purple-700 text-white'>
        <div className='max-w-5xl mx-auto text-center'>
          <h2 className='text-4xl md:text-5xl font-black'>
            Help Us Build The Future
          </h2>

          <p className='mt-6 text-lg text-white/90 max-w-3xl mx-auto'>
            Your donation today helps us continue empowering young leaders,
            supporting students, and creating opportunities that transform
            lives.
          </p>

          <a
            href='https://docs.google.com/forms/d/1Jy6BJG0jkRkuuW3JmXjeFefnswHTq-dgguKEHLJjGPk/viewform'
            className='inline-block mt-8 bg-white text-primary font-bold px-10 py-4 rounded-full'
          >
            Donate Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Donate;
