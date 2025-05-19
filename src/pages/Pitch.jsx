import React from 'react';
import Pitchhead from '../assets/pitchhead.png';
import Pitch1 from '../assets/pitch1.png';
import Pitch2 from '../assets/pitch2.png';

import { motion } from 'framer-motion';
import Criteria from '../components/Criteria';
import Faq from '../components/Faq';


const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const Pitch = () => {
  return (
    <>
      <section
        className='relative h-[70vh] bg-cover bg-center bg-no-repeat flex items-center justify-center rounded-xl mx-4 md:mx-20 mt-20 md:mt-32'
        style={{ backgroundImage: `url(${Pitchhead})` }}
      >
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeInUp}
          className=' p-8 rounded-xl text-white text-center max-w-2xl mx-4'
        >
          <h2 className='text-3xl md:text-7xl font-bold mb-4'>
            ACCELERATE 2.0 PITCH COMPETITION
          </h2>
        </motion.div>
      </section>

      <section className='px-6 py-16 max-w-7xl mx-auto'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={staggerContainer}
          className='grid md:grid-cols-2 gap-10 items-start'
        >
          {/* Text Section */}
          <motion.div variants={fadeInUp}>
            <h2 className='text-white bg-primary w-fit px-5 py-2 rounded-md text-xl font-medium mb-6'>
              WHAT IS ACCELERATE 2.0?
            </h2>
            <p className='text-gray-800 text-lg leading-relaxed'>
              Accelerate 2.0 is the second edition of the annual boot camp
              hosted by the Ignite Pro Community, created for young
              professionals, graduates, and undergraduates. This year’s theme,
              “Future Forward: Transforming Visions to Reality,” is designed to
              inspire and empower young minds with the insights, tools, and
              faith-based principles necessary to actualize their aspirations.
            </p>
          </motion.div>

          {/* Image Section */}
          <div className='space-y-1 flex flex-col items-center md:items-start'>
            <img
              src={Pitch1}
              alt='Placeholder 1'
              className='rounded-lg shadow-lg w-90 '
            />
          </div>
        </motion.div>
      </section>

      <section className='px-6  max-w-7xl mx-auto'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'
        >
          {/* Image Section: Appears left on desktop, below text on mobile */}
          <motion.div
            variants={fadeInLeft}
            className='order-2 md:order-1 flex justify-center md:justify-start'
          >
            <img
              src={Pitch2}
              alt='About IgnitePro'
              className='rounded-lg shadow-lg w-90'
            />
          </motion.div>

          {/* Text Section: Appears top on mobile, right on desktop */}
          <motion.div variants={fadeInRight} className='order-1 md:order-2'>
            <p className='text-gray-800 text-lg leading-relaxed'>
              The Future Forward Pitch Competition is a central highlight of
              Accelerate 2.0. It aims to identify and support innovative,
              purpose-driven startups that have moved beyond the idea stage and
              developed a Minimum Viable Product (MVP) with sustainable
              traction. We are looking for ventures that address real national
              challenges across sectors, from education to agriculture, hardware
              technology, healthcare, and beyond. Winning teams will gain access
              to tools, mentorship, and funding to grow their businesses and
              deepen their impact.Note: All types of solutions are
              welcome—whether tech-enabled or not.
            </p>
          </motion.div>
        </motion.div>
      </section>

<Criteria/>
<Faq/>
    </>
  );
};

export default Pitch;
