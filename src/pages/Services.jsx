import React from 'react';
import Serviceshead from '../assets/serviceshead.png';
import Services1 from '../assets/services1.png';
import Serviceswho from '../assets/servicewho.png';
import Serviceswho1 from '../assets/servicewho1.png';
import { motion } from 'framer-motion';

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

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
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

const Services = () => {
  const visionItems = [
    {
      title: '⁠One-on-One Coaching',
      text: 'Tailored sessions with certified coaches to help you set clear career goals, build confidence, and overcome challenges.',
    },
    {
      title: '⁠Mentorship Circles',
      text: 'Group mentoring sessions led by industry experts who share real-world insights and actionable advice..',
    },
    {
      title: 'GoalSetting & Accountability',
      text: ' Practical tools and regular check-ins to keep you on track with your personal and professional development.',
    },
    {
      title: 'CV Reviews & Mock Interviews',
      text: 'Get feedback from seasoned professionals to improve your job search outcomes.',
    },
  ];

  return (
    <>
      <section
        className='relative h-[70vh] bg-cover bg-center bg-no-repeat flex items-center justify-center rounded-xl mx-4 md:mx-20 mt-20 md:mt-32'
        style={{ backgroundImage: `url(${Serviceshead})` }}
      >
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeInUp}
          className=' p-8 rounded-xl text-white text-center max-w-2xl mx-4'
        >
          <h2 className='text-3xl md:text-7xl font-bold mb-4'>SERVICES</h2>
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
              CAREER COACHING AND MENTORSHIP
            </h2>
            <p className='text-gray-800 text-lg leading-relaxed'>
              At Ignite Pro Community, we believe that no one should navigate
              their professional journey alone. Our Career Coaching & Mentoring
              program is designed to connect members with experienced
              professionals who provide personalized guidance, encouragement,
              and strategic support to help you reach your full potential.
            </p>
          </motion.div>

          {/* Image Section */}
          <div className='space-y-1 flex flex-col items-center md:items-start'>
            <img
              src={Services1}
              alt='Placeholder 1'
              className='rounded-lg shadow-lg w-90 '
            />
          </div>
        </motion.div>
      </section>

      <section className='px-6 py-20 max-w-7xl mx-auto bg-light'>
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-white bg-primary w-fit px-5 py-2 rounded-md text-xl font-medium mb-6'
        >
          WHAT WE OFFER{' '}
        </motion.h2>

        {/* Grid of Vision Items */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {visionItems.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariant}
              className='border-2 border-primary rounded-xl p-6 shadow-md bg-white'
            >
              <h3 className='text-xl font-medium text-primary mb-3'>
                {item.title}
              </h3>
              <p className='text-gray-700 text-base leading-relaxed'>
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
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
              WHO CAN JOIN
            </h2>
            <p className='text-gray-800 text-lg leading-relaxed'>
              Whether you're a student, early-career professional, or looking to
              pivot into a new field, our program is open to all members of the
              Ignite Pro Community seeking growth and guidance.
            </p>
          </motion.div>

          {/* Image Section */}
          <div className='space-y-1 flex flex-col items-center md:items-start'>
            <img
              src={Serviceswho}
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
              src={Serviceswho1}
              alt='About IgnitePro'
              className='rounded-lg shadow-lg w-90'
            />
          </motion.div>

          {/* Text Section: Appears top on mobile, right on desktop */}
          <motion.div variants={fadeInRight} className='order-1 md:order-2'>
            <h2 className='text-white bg-primary w-fit px-5 py-2 rounded-md text-xl font-medium mb-6'>
              WHY IT MATTERS
            </h2>
            <p className='text-gray-800 text-lg leading-relaxed'>
              Mentorship accelerates growth. Coaching builds clarity. At Ignite
              Pro, we create a safe space where your ambitions are nurtured,
              your potential is unlocked, and your impact is multiplied.
            </p>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Services;
