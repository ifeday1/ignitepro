import React from 'react';
import Eventshead from '../assets//eventshead.png';
import { motion } from 'framer-motion';
// import Bts from '../assets/bts.jpg';
// import Event2 from '../assets/event2.jpeg';
// import Event3 from '../assets/event3.jpeg';
import Pod from '../assets/pod.png';
import UpcomingEvents from '../components/UpcomingEvents';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
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
          <h2 className='text-3xl md:text-7xl font-bold mb-4'>
            UPCOMING EVENTS
          </h2>
          <p className=' text-white leading-relaxed'>
            Carefully curated experiences designed to inspire growth, spark
            leadership, and ignite purpose.
          </p>
        </motion.div>
      </section>
      <UpcomingEvents />

      {/* <section className='px-10 md:px-20 py-16 max-w-7xl mx-auto bg-light rounded-2xl'>
        <div className='flex flex-col md:flex-row items-center gap-10'>
          <div className='flex-1 space-y-5'>
            <h2 className='text-3xl font-bold text-primary'>
              {' '}
              Back-to-School Project
            </h2>
            <p className='text-gray-600'>
              The Back-to-School Project is designed to equip students in
              selected Community Secondary Schools in Rivers State with the
              tools they need to learn with confidence. By providing essential
              school supplies, the project ensures that every child begins the
              academic year with dignity, hope, and the opportunity to succeed.
              Support a child’s education today.
            </p> */}
      {/* <p className='text-md text-gray-500 font-semibold'>
              Date: July, 26th 2025, 10am
            </p>
            <motion.a
              href='https://tix.africa/accelerate2'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block text-lg mt-4 bg-primary text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition transition-all duration-300'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Register →
            </motion.a> */}
      {/* </div>

          <div className='flex-1'>
            <img
              src={Bts}
              alt='Event'
              className='rounded-xl w-full object-cover shadow-md'
            />
          </div>
        </div>
      </section> */}

      <section className='px-10 md:px-20 py-16 max-w-7xl mx-auto bg-amber-100 rounded-2xl mt-7'>
        <div className='flex flex-col md:flex-row items-center gap-10'>
          <div className='flex-1 space-y-5'>
            <h2 className='text-3xl font-bold text-primary'>
              {' '}
              The Ignite Room Podcast
            </h2>
            <p className='text-gray-600 text-justify'>
              WHAT IT IS?
              <br></br> The Ignite Room Podcast is a platform that offers
              insightful conversations with Christian Leaders and Trailblazers,
              on various aspects of leadership, and living out their truth and
              faith in the market place. This program offers Visions, Advice,
              Guidance and Personal stories and Thoughts from Experts from
              different fields.<br></br> <br></br>WHY A PODCAST <br></br>To
              educate and inspire the target audience. To share experiences of
              Christian Leaders and Professionals in the marketplace and their
              different fields. To help target audience develop a consciousness
              towards Excellence, Leadership, Innovation and Christian values/
              Christian living<br></br>
              <br></br>
              TARGET AUDIENCE<br></br> Young professionals Students Other young
              people Entrepreneurs
            </p>
            <p className='text-md text-gray-500'>Anticipate</p>
          </div>

          <div className='flex-1'>
            <img
              src={Pod}
              alt='Event'
              className='rounded-xl w-full object-cover shadow-md'
            />
          </div>
        </div>
      </section>

      {/* <section className='px-10 md:px-20 py-16 max-w-7xl mx-auto bg-sky-100 rounded-2xl mt-7'>
        <div className='flex flex-col md:flex-row items-center gap-10'>
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

          <div className='flex-1'>
            <img
              src={Event3}
              alt='Event'
              className='rounded-xl w-full object-cover shadow-md'
            />
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Events;
