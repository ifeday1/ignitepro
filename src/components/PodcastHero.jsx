import { motion } from 'framer-motion';
import podcastFlyer from '../assets/junepodcast.jpeg';
import { PlayCircle, CalendarDays, Mic2 } from 'lucide-react';

export default function PodcastHero() {
  return (
    <section className='relative overflow-hidden bg-gradient-to-b from-white via-purple-50/30 to-white py-24'>
      {/* Background Glow */}
      <div className='absolute top-0 left-0 h-72 w-72 bg-primary/10 blur-3xl rounded-full'></div>
      <div className='absolute bottom-0 right-0 h-72 w-72 bg-orange-400/10 blur-3xl rounded-full'></div>

      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-14 items-center'>
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6'>
              <Mic2 className='w-4 h-4 text-primary' />
              <span className='text-primary text-sm font-semibold'>
                The Ignite Room Leadership Podcast
              </span>
            </div>

            <h2 className='text-4xl md:text-5xl xl:text-6xl font-black leading-tight text-gray-900'>
              Creating Impact
              <span className='block text-primary'>Beyond Profit</span>
            </h2>

            <p className='mt-6 text-lg text-gray-600 leading-relaxed max-w-xl'>
              Discover how purpose-driven leadership can create meaningful
              impact beyond financial success. Join this powerful conversation
              featuring practical insights, leadership lessons, and real-life
              experiences.
            </p>

            {/* Guest */}
            <div className='mt-8 space-y-4'>
              <div className='bg-white border border-gray-100 rounded-2xl p-5 shadow-sm'>
                <p className='text-sm text-gray-500 mb-1'>Featured Guest</p>

                <h3 className='text-2xl font-bold text-gray-900'>
                  Babatunde Akin Moses
                </h3>

                <p className='text-primary font-medium'>
                  Founder & Social Impact Leader
                </p>
              </div>

              <div className='flex items-center gap-3 text-gray-600'>
                <CalendarDays className='w-5 h-5 text-primary' />

                <span className='font-medium'>June 27th, 2026 • 6:00 PM</span>
              </div>
            </div>

            {/* CTA */}
            <div className='flex flex-wrap gap-4 mt-8'>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                href='https://www.youtube.com/@IgniteProCommunity'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold shadow-xl'
              >
                <PlayCircle className='w-5 h-5' />
                Watch Episode
              </motion.a>

              <a
                href='/podcast'
                className='inline-flex items-center px-8 py-4 rounded-full border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-300'
              >
                View All Episodes
              </a>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className='relative'
          >
            {/* Glow */}
            <div className='absolute inset-0 bg-primary/20 blur-3xl rounded-full'></div>

            <motion.div
              whileHover={{
                y: -10,
              }}
              transition={{
                duration: 0.3,
              }}
              className='relative'
            >
              <img
                src={podcastFlyer}
                alt='Podcast Episode'
                className='w-full max-w-xl mx-auto rounded-[32px] shadow-[0_30px_80px_rgba(0,0,0,0.18)]'
              />

              <a
                href='https://www.youtube.com/@IgniteProCommunity'
                target='_blank'
                rel='noopener noreferrer'
                className='absolute bottom-8 right-8 h-20 w-20 rounded-full bg-red-600 text-white flex items-center justify-center shadow-2xl'
              >
                <PlayCircle size={42} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
