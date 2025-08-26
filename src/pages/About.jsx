import React, { useState } from 'react';
import Aboutimg from '../assets/aboutimg.png';
import Aboutimg1 from '../assets/aboutimg1.png';
import Aboutimg2 from '../assets/aboutimg2.png';
import { motion } from 'framer-motion';
import Act from '../assets/act.svg';
import Act1 from '../assets/act1.png';
import Act2 from '../assets/act2.svg';
import { NavLink } from 'react-router-dom';

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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const About = () => {
  const [expanded, setExpanded] = useState(false);

  const cultureData = [
    {
      title: 'Collaboration and Teamwork',
      body: 'We believe that diverse perspectives foster innovation, and every voice is valued. Expect an organization where your ideas are not only heard but actively encouraged.',
      bgColor: 'bg-green-500',
    },
    {
      title: 'Continuous Learning and Growth',
      body: 'We embrace a culture of continuous learning. Your professional and personal development growth is a priority, and we provide resources, initiatives and opportunities for skill development.',
      bgColor: 'bg-orange-500',
    },
    {
      title: 'Open Communication and Transparency',
      body: 'Communication is at the heart of our culture. We believe in transparency and open dialogue at all levels.',
      bgColor: 'bg-fuchsia-600',
    },
  ];

  const events = [
    {
      title: 'Accelerate 2.0',
      desc: `Accelerate 2.0 is the second edition of the annual boot camp hosted by the Ignite Pro Community, designed for young professionals, graduates, and undergraduates. 

The event aimed to empower participants by providing them with valuable skills, mentorship, and networking opportunities to accelerate their personal and professional growth.

The theme "Future Forward: Transforming Visions to Reality" was crafted to engage and inspire young minds, providing them with the tools, insights, and faith-based principles essential for turning their visions into reality. 

It highlighted the importance of looking ahead, adopting a proactive mindset, and taking intentional steps toward shaping a desired future. The focus was on fostering forward-thinking, innovation, and an openness to new possibilities.

Transforming visions into reality demands thoughtful and systematic approach, encompassing the clarification of your vision, the establishment of goals and objectives, the development of a strategic plan, and the execution of decisive actions.

Accelerate 2.0 delivered an empowering and inspiring message, motivating young professionals to take control of their goals and aspirations, while emphasizing their ability to shape their own future.

Objectives:
To Inspire;
To Equip; and
To Connect

Event Highlights:

Keynote Addresses: This focused on the importance of aligning one's personal and professional goals with a sense of purpose guided by faith and vision. The address also inspired participants to move on from envisioning their dreams to actively working towards making them a reality, highlighting key principles for success, resilience and integrity for the journey ahead.

Panel Discussions: Interactive sessions with experts and thought leaders who delved into key topics that spread across transforming vision into action, overcoming challenges and building resilience, aligning purpose with vision, and other crucial areas relevant to young professionals, graduates, and undergraduates. These discussions provided valuable insights to help participants transform their visions into reality.

Networking Opportunities: Dedicated spaces and activities facilitated meaningful connections among attendees, speakers, and sponsors.`,
      image: Act,
    },
    {
      title: 'Accelerate 1.0: Ten Times Better',
      desc: 'Ignite Pro launched its maiden edition of Accelerate Bootcamp focusing on leadership and personal development. Activities included panels, business grants and more.',
      image: Act,
      points: [
        '13 Speakers',
        'Over 200 attendees',
        '2 Panel sessions and Leadership addresses',
        '3 Business grants',
        '4 Educational support grants',
      ],
    },
    {
      title: 'Navigating Foreign Scholarship Opportunities',
      desc: `This event was designed to empower participants by providing valuable insights into international scholarships. Sessions included keynote addresses, panel discussions, and networking opportunities that connected attendees with experts and mentors across the globe.`,
      image: Act1,
      points: [
        '4 Internationally acclaimed Speakers',
        'Over 50 attendees from 5 different countries',
      ],
    },
    {
      title: 'Unwind: Revisiting The Vision Board',
      desc: 'The 2025 kickoff featured inspiring breakfasts with industry leaders and vision board sessions.',
      image: Act2,
      points: [
        'Engaging vision board activity',
        '7 Industry recognized Speakers/Mentors',
        '40 selected participants',
        'Roundtable mentoring sessions',
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className='relative h-[70vh] bg-cover bg-center bg-no-repeat flex items-center justify-center rounded-xl mx-4 md:mx-20 mt-20 md:mt-32'
        style={{ backgroundImage: `url(${Aboutimg})` }}
      >
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeInUp}
          className='p-8 rounded-xl text-white text-center max-w-2xl mx-4'
        >
          <h2 className='text-3xl md:text-7xl font-bold mb-4'>ABOUT US</h2>
        </motion.div>
      </section>

      {/* Vision Section */}
      <section className='px-6 py-16 max-w-7xl mx-auto'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={staggerContainer}
          className='grid md:grid-cols-2 gap-10 items-start'
        >
          <motion.div variants={fadeInUp}>
            <h2 className='text-white bg-primary w-fit px-5 py-2 rounded-md text-xl font-medium mb-6'>
              OUR VISION
            </h2>
            <p className='text-gray-800 text-lg leading-relaxed'>
              To be a global community that ignites the passion and potential of
              young people, cultivating positive transformation agents in
              society.
            </p>
          </motion.div>

          <div className='space-y-1 flex flex-col items-center md:items-start'>
            <img
              src={Aboutimg1}
              alt='Vision'
              className='rounded-lg shadow-lg w-full max-w-md'
            />
          </div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className='px-6 max-w-7xl mx-auto'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'
        >
          <motion.div
            variants={fadeInLeft}
            className='order-2 md:order-1 flex justify-center md:justify-start'
          >
            <img
              src={Aboutimg2}
              alt='Mission'
              className='rounded-lg shadow-lg w-full max-w-md'
            />
          </motion.div>

          <motion.div variants={fadeInRight} className='order-1 md:order-2'>
            <h2 className='text-white bg-primary w-fit px-5 py-2 rounded-md text-xl font-medium mb-6'>
              OUR MISSION
            </h2>
            <p className='text-gray-800 text-lg leading-relaxed'>
              Our mission is to equip youths with the necessary skills, mindset
              and right values to make a positive impact on their communities
              and society at large. As a youth-led organization, we collaborate
              with young leaders to empower youths through various initiatives,
              programs and resources.
            </p>
          </motion.div>
        </motion.div>
      </section>

      <section className='px-6 md:px-24 py-16 bg-light mt-20'>
        <h2 className='text-white bg-primary px-4 py-2 rounded-md text-lg font-medium w-fit mb-10'>
          COMMUNITY CULTURE
        </h2>

        <div className='grid md:grid-cols-3 gap-10'>
          {cultureData.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              variants={cardVariants}
              className='bg-white rounded-lg shadow-md overflow-hidden'
            >
              <div
                className={`${item.bgColor} text-white px-6 py-6 font-medium text-2xl`}
              >
                {item.title}
              </div>
              <div className='px-6 py-4 text-black text-sm'>{item.body}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Events Section */}
      <section className='px-6 md:px-24 py-12 bg-[#FFF5F5]'>
        <h2 className='text-white bg-primary px-4 py-2 rounded-md text-lg font-medium w-fit mb-10'>
          PAST EVENTS AND ACTIVITIES
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          {events.map((event, index) => (
            <motion.div
              key={index}
              className='bg-white p-4 rounded-lg shadow-lg flex flex-col md:flex-row items-start'
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={event.image}
                alt={event.title}
                className='w-40 h-40 object-cover rounded-full mb-4 md:mb-0 md:mr-6'
              />
              <div>
                <h3 className='text-primary font-bold text-lg'>
                  {event.title}
                </h3>

                {/* Special handling for Accelerate 2.0 */}
                {index === 0 ? (
                  <>
                    <p
                      className={`text-sm text-gray-700 mt-2 whitespace-pre-line transition-all duration-300 ${
                        expanded ? '' : 'line-clamp-6'
                      }`}
                    >
                      {event.desc}
                    </p>
                    <button
                      onClick={() => setExpanded(!expanded)}
                      className='mt-2 text-blue-600 text-sm font-medium hover:underline'
                    >
                      {expanded ? 'View Less ▲' : 'View More ▼'}
                    </button>
                  </>
                ) : (
                  <p className='text-sm text-gray-700 mt-2 whitespace-pre-line'>
                    {event.desc}
                  </p>
                )}

                {event.points?.length > 0 && (
                  <ul className='mt-4 list-disc list-inside text-sm text-gray-600 space-y-1'>
                    {event.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}

                {(index === 0 || index === events.length - 1) && (
                  <div>
                    <NavLink
                      className='inline-block mt-4 px-4 py-2 bg-primary text-white rounded-md text-sm hover:bg-primary/90 transition'
                      to='/gallery'
                    >
                      View Pictures
                    </NavLink>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
