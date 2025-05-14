import { React } from 'react';
import Header from '../assets/header.png';
import Intro from '../assets/intro.png';
import Intro1 from '../assets/intro1.png';
import Intro2 from '../assets/intro2.png';
import Who from '../assets/who.png';
import Who1 from '../assets/who1.png';
import Illustration from '../assets/Illustration.svg';
import Pitchhome from '../assets/pitchhome.png';
import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: index * 0.3,
      duration: 0.8,
    },
  }),
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
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
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const Home = () => {
  const testimonials = [
    {
      quote:
        '“I am deeply grateful to IGNITE Pro Community for the life-changing grant that enabled me to pursue my trading career. Their support was instrumental in my success, and I am thankful for the opportunity. Their investment in me has paid off, and i am proud to be a testament to their impactful work. Thanks Team! ”',
      name: 'William Michael',
      role: 'William Michael',
    },
    {
      quote:
        '“We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.”',
      name: 'John Smith',
      role: 'Marketing Director at XYZ Corp',
    },
    {
      quote:
        '“We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.”',
      name: 'John Smith',
      role: 'Marketing Director at XYZ Corp',
    },
  ];
  return (
    <>
      <div className=' flex justify-center pt-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 p-5 md:p-0 mt-10  max-w-[1200px] '>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='flex flex-col justify-center items-start space-y-4'
          >
            <p className='md:text-7xl text-5xl font-bold text-primary uppercase'>
              <span className=' block'>Shaping Future</span>
              <span className='block'>Leaders, to</span>
              <span className=' block'>Thrive with </span>
              <span className='block'>Purpose. </span>
            </p>
            <p className='text-lg text-black'>
              Equipping tomorrow’s leaders with the skills, mindset, and
              <br></br>
              opportunities to thrive in their careers and create purposeful
              impact.
            </p>

            <motion.a
              href=''
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className=' md:my-16 my-3 text-white bg-primary p-3 rounded-lg shadow-lg font-medium transition flex items-center space-x-2'
            >
              <span>Register for Accelerate 2.0</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
                className='w-5 h-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </motion.a>
          </motion.div>

          {/* Right Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='flex flex-col space-y-4 items-left'
          >
            <div className='space-y-2 mt-0 md:mt-10 '>
              <img
                src={Header}
                alt='Placeholder 1'
                className='rounded-lg shadow-lg w-90 '
              />
            </div>
          </motion.div>
        </div>
      </div>

      <section className='px-6 py-12 mx-auto bg-light mt-16 md:mt-24'>
        <div className='grid md:grid-cols-2 gap-10 items-center'>
          {/* Text Section */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            variants={textVariants}
            className='text-gray-700 text-xl leading-relaxed p-5 rounded-xl shadow mx-0 md:mx-32'
          >
            <p>
              Welcome to <strong>IgnitePro Community</strong>. We’re a
              faith-based NGO dedicated to empowering students, graduates, and
              young professionals to achieve success. Our dynamic community
              provides a platform for youths to discover their passions, develop
              essential personal and leadership skills, and build thriving
              careers.
            </p>
          </motion.div>

          {/* Images Section */}
          <div className='space-y-6 flex flex-col items-center md:items-start px-0 md:px-32'>
            {[Intro, Intro1, Intro2].map((img, index) => (
              <motion.img
                key={index}
                custom={index}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.2 }}
                variants={imageVariants}
                src={img}
                alt={`IgnitePro image ${index + 1}`}
                className={`rounded-xl w-full max-w-sm ${
                  index === 1 ? 'ml-8 md:ml-12' : ''
                }`}
              />
            ))}
          </div>
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
              WHO WE ARE AND WHAT WE DO
            </h2>
            <p className='text-gray-800 text-lg leading-relaxed mb-6'>
              Ignite Pro Community is a one-stop hub designed to empower and
              propel students and young professionals towards success. We're a
              dynamic community where they can ignite their passions, develop
              essential skills, and build a thriving career.
            </p>
            <p className='text-gray-800 text-lg leading-relaxed'>
              We provide a supportive ecosystem filled with resources to help
              individuals excel. Our programs offer valuable industry insights
              and practical skills through sessions led by experienced
              professionals. Additionally, we connect participants with seasoned
              mentors who offer guidance, answer pressing questions, and provide
              invaluable career advice. Beyond learning, we foster a vibrant
              community where individuals can network with like-minded peers,
              build meaningful relationships, and expand their professional
              network.
            </p>
          </motion.div>

          {/* Image Section */}
          <div className='space-y-1 flex flex-col items-center md:items-start'>
            {[Who, Who1].map((img, index) => (
              <motion.img
                key={index}
                src={img}
                alt={`Accelerate Camp ${index + 1}`}
                variants={fadeInUp}
                className={`rounded-xl w-56 md:w-6/12  max-w-md ${
                  index === 0 ? 'ml-auto' : 'mr-auto'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </section>

      <section className='bg-pink-100 rounded-3xl px-7 md:px-20 py-14 max-w-7xl mx-auto mt-10 '>
        <div className='flex flex-col md:flex-row items-center justify-between gap-10'>
          {/* Text Content */}
          <motion.div
            className='md:w-1/2'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={fadeInLeft}
          >
            <h2 className='text-2xl md:text-3xl font-bold mb-4 text-black'>
              Accelerate 2.0
            </h2>
            <p className='text-gray-800 text-lg leading-relaxed mb-6 '>
              Accelerate 2.0 is the second edition of the annual boot camp
              hosted by the Ignite Pro Community, created for young
              professionals, graduates, and undergraduates. This year’s theme,
              “Future Forward: Transforming Visions to Reality,” is designed to
              inspire and empower young minds with the insights, tools, and
              faith-based principles necessary to actualize their aspirations.
            </p>
            <button className='bg-primary hover:bg-primary text-white font-semibold px-6 py-2 rounded-xl transition duration-300'>
              Register for Accelerate 2.0
            </button>
          </motion.div>

          {/* Image / Illustration */}
          <motion.div
            className='md:w-1/2 flex justify-center'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={fadeInRight}
          >
            <img
              src={Illustration}
              alt='Accelerate Illustration'
              className='w-[300px] md:w-[380px] max-w-full'
            />
          </motion.div>
        </div>
      </section>

      <section className='px-6 py-16 max-w-7xl mx-auto'>
        <div className='flex items-center justify-between mb-6'>
          <motion.h2
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={fadeInUp}
            className='text-white bg-primary px-4 py-2 rounded-md text-lg font-semibold w-fit'
          >
            PITCH COMPETITION
          </motion.h2>

          <motion.a
            href='#'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={fadeInUp}
            className='text-primary font-semibold hover:underline text-sm'
          >
            VIEW MORE
          </motion.a>
        </div>

        <motion.p
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeInUp}
          className='text-gray-800 text-base leading-relaxed mb-10'
        >
          The Future Forward Pitch Competition is a central highlight of
          Accelerate 2.0. It aims to identify and support innovative,
          purpose-driven startups that have moved beyond the idea stage and
          developed a Minimum Viable Product (MVP) with sustainable traction. We
          are looking for ventures that address real national challenges across
          sectors, from education to agriculture, hardware technology,
          healthcare, and beyond.
        </motion.p>

        <motion.img
          src={Pitchhome}
          alt='Pitch Competition Winners'
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className='rounded-2xl w-full object-cover shadow-lg'
        />
      </section>

      <section className='px-7 md:px-24 py-16 mx-auto bg-black'>
        {/* Section Title */}
        <h2 className='text-white bg-primary px-4 py-2 rounded-md text-lg font-medium w-fit mb-10'>
          TESTIMONIALS
        </h2>

        {/* Testimonials Grid */}
        <div className='grid md:grid-cols-3 gap-6'>
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              custom={i}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              variants={fadeInUp}
              className='bg-primary text-white p-6 rounded-xl relative'
            >
              {/* Speech bubble tail */}
              <div className='absolute bottom-[-10px] left-6 w-4 h-4 bg-primary rotate-45'></div>

              <p className='text-sm mb-4'>{t.quote}</p>

              <div className='mt-4'>
                <p className='text-primary font-semibold'>{t.name}</p>
                <p className='text-white text-sm'>{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
