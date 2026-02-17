import React from 'react';
import { motion } from 'framer-motion';
import Eventshead from '../assets/eventshead.png';

import Img15 from '../assets/15.jpg';
import Img30 from '../assets/30.jpg';
import A11 from '../assets/a11.jpeg';
import Csr19 from '../assets/csr19.jpg';
import mb from '../assets/mb.jpg';

const events = [
  {
    title: 'Mentorship Breakfast: BLUEPRINT – BUILDING THE FUTURE',
    year: '2026',
    description: `The second edition of the Ignite Pro Mentorship Breakfast focused on empowering young professionals, graduates, and entrepreneurs.

Through workshops, networking opportunities, and powerful mentoring sessions, attendees gained practical tools to build intentional futures.

A major highlight was the productivity session and mentor–mentee roundtable discussion, where participants received direct professional feedback.

The program encouraged visionary leadership and purposeful action to create lasting impact.`,
    image: mb,
  },
  {
    title: 'Back To School Initiative',
    year: '2025',
    description: `Ignite Pro Community launched its first Corporate Social Responsibility initiative at Elekahia Government Secondary School, Port Harcourt.

The project supported 244 JSS3 students with school bags, exercise books, and mathematical sets to promote academic excellence.

This initiative reflects Ignite Pro’s commitment to empowering young minds and driving meaningful community impact.`,
    image: Csr19,
  },
  {
    title: 'Accelerate 2.0 – Future Forward',
    year: '2025',
    description: `Accelerate 2.0 is the second edition of the annual boot camp hosted by the Ignite Pro Community, designed for young professionals, graduates, and undergraduates. 

The event aimed to empower participants by providing them with valuable skills, mentorship, and networking opportunities to accelerate their personal and professional growth.

The theme "Future Forward: Transforming Visions to Reality" was crafted to engage and inspire young minds, providing them with the tools, insights, and faith-based principles essential for turning their visions into
reality. 

It highlighted the importance of looking ahead, adopting a proactive mindset, and taking intentional steps toward shaping a desired future. The focus was on fostering forward-thinking, innovation, and an openness to new possibilities.

Transforming visions into reality demands thoughtful and systematic approach, encompassing the clarification of your vision, the establishment of goals and objectives, the development of a strategic plan,
and the execution of decisive actions.

Accelerate 2.0 delivered an empowering and inspiring message, motivating young professionals to take control of their goals and aspirations, while emphasizing their ability to shape their own future.

Objectives:
To Inspire;
To Equip; and
To Connect

Event Highlights:

Keynote Addresses: This focused on the importance of aligning one's personal and professional goals with a sense of purpose guided by faith and vision. The address also inspired participants to move on from envisioning their dreams to actively working towards making them a reality, highlighting key principles for
success, resilience and integrity for the journey ahead.

Panel Discussions: Interactive sessions with experts and thought leaders who delved into key topics that spread across transforming vision into action, overcoming challenges and building resilience, aligning
purpose with vision, and other crucial areas relevant to young professionals, graduates, and undergraduates.

These discussions provided valuable insights to help participants transform their visions into reality.

Networking Opportunities:

Dedicated spaces and activities wl facilitated meaningful connections among
attendees, speakers, and sponsors.
`,
    image: A11,
  },
  {
    title: 'Unwind: Revisiting The Vision Board',
    year: '2024',
    description: `*Unwind* was an exclusive breakfast and mentorship experience that brought professionals together to learn, connect, and grow. Participants engaged in insightful conversations with industry leaders, gaining valuable career guidance and clarity. The event also featured an Expert Vision Board Workshop, where attendees crafted a clear roadmap for a more fulfilling and productive year. Beyond learning, *Unwind* offered rich networking opportunities that fostered meaningful connections and expanded professional circles.`,
    image: Img30,
  },
  {
    title: 'Accelerate 1.0 – Ten Times Better',
    year: '2024',
    description:
      'The maiden Ignite Pro leadership bootcamp equipping young leaders with practical development tools and growth strategies.',
    image: Img15,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const PEvent = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className='relative h-[60vh] bg-cover bg-center flex items-center justify-center'
        style={{ backgroundImage: `url(${Eventshead})` }}
      >
        <div className='absolute inset-0 bg-black/70'></div>

        <motion.div
          initial='hidden'
          animate='visible'
          variants={fadeUp}
          className='relative text-center text-white px-6'
        >
          <h1 className='text-4xl md:text-6xl font-bold tracking-wide'>
            Past Events
          </h1>
          <p className='mt-4 text-lg md:text-xl text-gray-200'>
            Moments that shaped our journey
          </p>
        </motion.div>
      </section>

      {/* EVENTS SECTION */}
      <section className='bg-gray-50 py-20 px-6 md:px-16'>
        <div className='max-w-7xl mx-auto space-y-24'>
          {events.map((event, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.2 }}
              className='bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row'
            >
              {/* IMAGE */}
              <div
                className={`md:w-1/2 ${index % 2 !== 0 ? 'md:order-2' : ''}`}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className='w-full h-[300px] md:h-full object-cover hover:scale-105 transition-transform duration-700'
                />
              </div>

              {/* CONTENT */}
              <div className='md:w-1/2 p-8 md:p-14 flex flex-col justify-center space-y-5'>
                <span className='text-sm uppercase tracking-widest text-primary font-semibold'>
                  {event.year}
                </span>

                <h2 className='text-2xl md:text-4xl font-bold text-gray-800'>
                  {event.title}
                </h2>

                <div className='w-16 h-1 bg-primary rounded-full'></div>

                <p className='text-gray-600 leading-relaxed whitespace-pre-line'>
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default PEvent;
