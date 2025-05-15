import { React } from 'react';
import Aboutimg from '../assets/aboutimg.png';
import Aboutimg1 from '../assets/aboutimg1.png';
import Aboutimg2 from '../assets/aboutimg2.png';
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
  visible: (i: number) => ({
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


const cultureData = [
  {
    title: 'Collaboration and Teamwork',
    body: 'We believe that diverse perspectives foster innovation, and every voice is valued. Expect an organization where your ideas are not only heard but actively encouraged.',
    bgColor: 'bg-green-500',
  },
  {
    title: 'Continuous Learning and Growth',
    body: 'We embrace a culture of continuous learning. Your professional and personal development growth is a priority, and we provide resources, initiatives and opportunities for skill development.',
    bgColor: 'bg-orange',
  },
  {
    title: 'Open Communication and Transparency',
    body: 'Communication is at the heart of our culture. We believe in transparency and open dialogue at all levels.',
    bgColor: 'bg-fuchsia-600',
  },
];
  return (
    <>
      <section
        className='relative h-[70vh] bg-cover bg-center bg-no-repeat flex items-center justify-center rounded-xl mx-4 md:mx-20 mt-20 md:mt-32'
        style={{ backgroundImage: `url(${Aboutimg})` }}
      >
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeInUp}
          className=' p-8 rounded-xl text-white text-center max-w-2xl mx-4'
        >
          <h2 className='text-3xl md:text-7xl font-bold mb-4'>ABOUT US</h2>
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
              OUR VISION
            </h2>
            <p className='text-gray-800 text-lg leading-relaxed'>
              To be a global community that ignites the passion and potential of
              young people, cultivating positive transformation agents in
              society.
            </p>
          </motion.div>

          {/* Image Section */}
          <div className='space-y-1 flex flex-col items-center md:items-start'>
            <img
              src={Aboutimg1}
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
              src={Aboutimg2}
              alt='About IgnitePro'
              className='rounded-lg shadow-lg w-90'
            />
          </motion.div>

          {/* Text Section: Appears top on mobile, right on desktop */}
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
        {/* Section Title */}
        <h2 className='text-white bg-primary px-4 py-2 rounded-md text-lg font-medium w-fit mb-10'>
          COMMUNITY CULTURE
        </h2>

        {/* Cards */}
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
    </>
  );
};

export default About;
