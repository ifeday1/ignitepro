import React from 'react';
import Eventshead from '../assets//eventshead.png';
import { motion } from 'framer-motion';
import Event1 from '../assets/event1.png';
import Event2 from '../assets/event2.png';
import Event3 from '../assets/event3.png';


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

const Events = () => {
  return (
    <>
      <section
        className='relative h-[70vh] bg-cover bg-center bg-no-repeat flex items-center justify-center rounded-xl mx-4 md:mx-20 mt-20 md:mt-32'
        style={{ backgroundImage: `url(${Eventshead})` }}
      >
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeInUp}
          className=' p-8 rounded-xl text-white text-center max-w-2xl mx-4'
        >
          <h2 className='text-3xl md:text-7xl font-bold mb-4'>EVENTS</h2>
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
            <h2 className='text-white bg-primary w-fit px-5 py-2 rounded-md text-xl font-medium '>
              UPCOMING EVENTS
            </h2>
          </motion.div>
        </motion.div>
      </section>

      <section className='px-10 md:px-20 py-16 max-w-7xl mx-auto bg-light rounded-2xl'>
        <div className='flex flex-col md:flex-row items-center gap-10'>
          {/* Text and Button Section */}
          <div className='flex-1 space-y-5'>
            <h2 className='text-3xl font-bold text-primary'> Accelerate 2.0</h2>
            <p className='text-gray-600'>
              The 2nd edition of our annual bootcamp is set to help youths turn
              visions into reality. Through panel discussions and other
              activities participants will be able to clarify visions, set
              goals, create strategic plans and execute actions
            </p>
            <p className='text-md text-gray-500 font-semibold'>
              Date: July, 26th 2025, 10am
            </p>
            <motion.a
              href='https://incognitotechs.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block text-lg mt-4 bg-primary text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition transition-all duration-300'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Register →
            </motion.a>
          </div>

          {/* Image Section */}
          <div className='flex-1'>
            <img
              src={Event1}
              alt='Event'
              className='rounded-xl w-full object-cover shadow-md'
            />
          </div>
        </div>
      </section>

      <section className='px-10 md:px-20 py-16 max-w-7xl mx-auto bg-amber-100 rounded-2xl mt-7'>
        <div className='flex flex-col md:flex-row items-center gap-10'>
          {/* Text and Button Section */}
          <div className='flex-1 space-y-5'>
            <h2 className='text-3xl font-bold text-primary'> CSR Initiative</h2>
            <p className='text-gray-600'>
              As an organisation seeking to impact the our society and
              environment, Corporate Social Responsibility is key to us. We’ll
              begin to take action through our 1st CSR program
            </p>
            <p className='text-md text-gray-500'>Anticipate</p>
          </div>

          {/* Image Section */}
          <div className='flex-1'>
            <img
              src={Event2}
              alt='Event'
              className='rounded-xl w-full object-cover shadow-md'
            />
          </div>
        </div>
      </section>

      <section className='px-10 md:px-20 py-16 max-w-7xl mx-auto bg-sky-100 rounded-2xl mt-7'>
        <div className='flex flex-col md:flex-row items-center gap-10'>
          {/* Text and Button Section */}
          <div className='flex-1 space-y-5'>
            <h2 className='text-3xl font-bold text-primary'>
              {' '}
              Ignite Teams Hangout
            </h2>
            <p className='text-gray-600'>
              A social physical event for team members of Ignite Pro Community
              targeted at building stronger connections, enhancing collaboration
              and teamwork, and having fun
            </p>
            <p className='text-md text-gray-500'>Anticipate</p>
          </div>

          {/* Image Section */}
          <div className='flex-1'>
            <img
              src={Event3}
              alt='Event'
              className='rounded-xl w-full object-cover shadow-md'
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
