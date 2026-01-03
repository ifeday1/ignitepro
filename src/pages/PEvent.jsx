import React from 'react';
import Eventshead from '../assets//eventshead.png';
import { motion } from 'framer-motion';
// import Bts from '../assets/bts.jpg';
// import Event2 from '../assets/event2.jpeg';

import Img15 from '../assets/15.jpg';
import Img30 from '../assets/30.jpg';
import A11 from '../assets/a11.jpeg';
import Csr19 from '../assets/csr19.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const PEvent = () => {
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
          <h2 className='text-3xl md:text-7xl font-bold mb-4'>PAST EVENTS</h2>
        </motion.div>
      </section>

      <section className='px-10 md:px-20 py-16 max-w-7xl mx-auto bg-cyan-100 rounded-2xl mt-7'>
        <div className='flex flex-col md:flex-row items-center gap-10'>
          <div className='flex-1 space-y-5'>
            <h2 className='text-3xl font-bold text-primary'>
              {' '}
              BACK TO SCHOOL INITIATIVE
            </h2>
            <p className='text-gray-600 text-justify'>
              Ignite Pro Community Back to School Project 2025 Ignite Pro
              Community successfully held its first ever Corporate Social
              Responsibility (CSR) initiative, the “Back to School Project” at
              Elekahia Government Secondary School, Port Harcourt, Rivers State
              reaching out to 244 students in JSS3. The project was designed to
              give back to society, promote academic excellence, and inspire joy
              among students as they began a new academic session. As part of
              the initiative, we presented the students with school bags,
              exercise books, and mathematical sets to support their learning
              experience. The joy and gratitude expressed by the students were
              truly heartwarming, making it a deeply fulfilling experience for
              the entire team. This initiative reflects Ignite Pro Community’s
              ongoing commitment to empowering young minds and driving community
              development. We look forward to sustaining this impact through
              more meaningful CSR projects in the future.
            </p>
          </div>

          <div className='flex-1'>
            <img
              src={Csr19}
              alt='Event'
              className='rounded-xl w-full object-cover shadow-md'
            />
          </div>
        </div>
      </section>

      <section className='px-10 md:px-20 py-16 max-w-7xl mx-auto bg-pink-100 rounded-2xl mt-7'>
        <div className='flex flex-col md:flex-row items-center gap-10'>
          <div className='flex-1 space-y-5'>
            <h2 className='text-3xl font-bold text-primary'> ACCELERATE 2.0</h2>
            <p className='text-gray-600 text-justify'>
              Accelerate 2.0 was the second edition of the annual boot camp
              hosted by the Ignite Pro Community, tailored for young
              professionals, graduates, and undergraduates. With the theme
              “Future Forward: Transforming Visions to Reality,” the event
              empowered participants through impactful mentorship sessions,
              practical workshops, and valuable networking opportunities. It
              emphasized the importance of vision clarity, goal setting, and
              taking intentional steps toward a purposeful future. A major
              highlight was the Pitch Tank Competition, where participants
              showcased innovative ideas and received expert feedback to refine
              their concepts. Overall, Accelerate 2.0 inspired attendees to
              embrace forward-thinking, faith-based principles, and actionable
              strategies to transform their dreams into reality and accelerate
              both personal and professional growth.
            </p>
          </div>

          <div className='flex-1'>
            <img
              src={A11}
              alt='Event'
              className='rounded-xl w-full object-cover shadow-md'
            />
          </div>
        </div>
      </section>

      <section className='px-10 md:px-20 py-16 max-w-7xl mx-auto bg-lime-100 rounded-2xl mt-7'>
        <div className='flex flex-col md:flex-row items-center gap-10'>
          <div className='flex-1 space-y-5'>
            <h2 className='text-3xl font-bold text-primary'>
              {' '}
              UNWIND: REVISITING THE VISION BOARD
            </h2>
            <p className='text-gray-600 text-justify'>
              Unwind was an exclusive breakfast and mentorship experience that
              brought professionals together to learn, connect, and grow.
              Participants engaged in insightful conversations with industry
              leaders, gaining valuable career guidance and clarity. The event
              also featured an Expert Vision Board Workshop, where attendees
              crafted a clear roadmap for a more fulfilling and productive year.
              Beyond learning, Unwind offered rich networking opportunities that
              fostered meaningful connections and expanded professional circles.
            </p>
          </div>

          <div className='flex-1'>
            <img
              src={Img30}
              alt='Event'
              className='rounded-xl w-full object-cover shadow-md'
            />
          </div>
        </div>
      </section>

      <section className='px-10 md:px-20 py-16 max-w-7xl mx-auto bg-amber-100 rounded-2xl mt-7'>
        <div className='flex flex-col md:flex-row items-center gap-10'>
          <div className='flex-1 space-y-5'>
            <h2 className='text-3xl font-bold text-primary'> ACCELERATE 1.0</h2>
            <p className='text-gray-600 text-justify'>
              The event, is a leadership and personal development bootcamp, it’s
              an initiative powered by the New Covenant Baptist church in
              partnership with other proposed entities. Its maiden edition is
              tagged ‘TEN TIMES BETTER’, coined from the scripture Daniel 1:20
              and seeks to equip youths with a world of knowledge and wisdom
              needed for a life of excellence. The program is an intense one-day
              program for undergraduate students, graduates and young
              professionals aged 18 and above. The boot camp held on the 27th of
              July, 2024 in Port Harcourt, Nigeria. With the use of resource
              persons and keynote speakers ranging from the corporate world,
              creative industry and entrepreneurial sphere, the program achieved
              its goals and objectives.
            </p>
          </div>

          <div className='flex-1'>
            <img
              src={Img15}
              alt='Event'
              className='rounded-xl w-full object-cover shadow-md'
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default PEvent;
