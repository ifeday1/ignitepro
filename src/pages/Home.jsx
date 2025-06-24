import { React, useState, useEffect } from 'react';
// import Header from '../assets/header.png';
import Intro from '../assets/intro.png';
// import Intro1 from '../assets/intro1.png';
// import Intro2 from '../assets/intro2.png';
import Who from '../assets/who.png';
import Who1 from '../assets/who1.png';
// import Illustration from '../assets/Illustration.svg';
import Pitchhome from '../assets/pitchhome.png';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
// import Pic from '../assets/pic.svg';
// import Pic1 from '../assets/pic1.svg';
// import Pic2 from '../assets/pic2.svg';
// import Pic3 from '../assets/pic3.svg';
// import Pic4 from '../assets/pic4.svg';
// import Pic5 from '../assets/pic5.svg';
import Homeimg from '../assets/homeimg.svg';
import Services1 from '../assets/services1.png';
import Serviceswho from '../assets/servicewho.png';
import Serviceswho1 from '../assets/servicewho1.png';
import Img5 from '../assets/5.jpg';
import Img7 from '../assets/7.jpg';
import Img6 from '../assets/6.jpg';
import { NavLink } from 'react-router-dom';
import Design1 from '../assets/design1.jpeg';

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

// const images = [Pic, Pic1, Pic2, Pic3, Pic4];
const images = [Services1, Serviceswho, Serviceswho1, Img5, Img6, Img7];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  const [showMore, setShowMore] = useState(false);

  const testimonials = [
    {
      quote:
        'I am deeply grateful to IGNITE Pro Community for the life-changing grant that enabled me to pursue my trading career. Their support was instrumental in my success, and I am thankful for the opportunity. Their investment in me has paid off, and I am proud to be a testament to their impactful work .Thanks Team!',
      name: ' ',
      role: 'William Michael',
    },

    {
      quote:
        'With a deep gratitude and a heart felt appreciation to IGNITE PRO COMMUNITY for the life- changing business grant opportunity. Winning the grant was more than just a financial boost; it was a powerful vote of confidence in my vision, Business and potential. It was just a grant to the others, but  to me, it was a "transformative impact". Today,Mamachigos Beauty Touch is a step ahead, new skills has being added, new working equipment bought, more customers has been served and  lots more. Thank you!!! once more IGNITE pro community, your investment and impact in me is an unforgettable one!!.Thank you Team!!😊',
      name: ' ',
      role: 'Osuagwu chigozirim Basillia',
    },
    {
      quote:
        'Reflecting on the events of that day, particularly  as an awardee for-the business grant, I would say it was truly remarkable and inspiring. It was a sign that our mission was relevant to current realities and that our story was being heard. In a world where social enterprises and nonprofits are expected to do more with limited resources, Ignite Pro Community displayed a firm belief that its time to shift the narrative and focus on what truly matters, and that is none other than changing lives.',
      name: ' ',
      role: 'Confidence Jonathan Nwosu Founder, RAJ Foundation',
    },
    {
      quote:
        'Receiving the data analytics scholarship from Beylearning has been a truly life-changing opportunity. The program equipped me with practical, in-demand skills in data analysis, visualization, and critical thinking. I want to express my deepest gratitude to the instructors, whose expertise, patience, and support made complex concepts accessible and engaging. Their guidance played a key role in my growth and confidence in the field. I’m especially thankful to Beylearning for investing in me and creating an inclusive platform that bridges the gap between education and opportunity. As someone navigating the entry level of the analytics field, this experience has provided a strong foundation and a clearer sense of direction.',
      name: '',
      role: ' ',
    },
    {
      quote:
        'I am grateful to IGNITE Pro Community for opening the door to the Data Analytics Scholarship through their incredible network. With their support, I’ve built a strong foundation in data skills and gained clarity on my career direction. Their belief in learners like me has been both motivating and empowering. It truly gladdens my heart to be part of a community that invests in growth and potential.Thank you, IGNITE Pro Team!',
      name: '.',
      role: 'Diseph Mogbolu',
    },
  ];
  return (
    <>
      <div className='relative h-screen w-full overflow-hidden mt-20'>
        {/* Background Carousel */}
        <div className='absolute inset-0 z-0'>
          {images.map((src, index) => (
            <motion.img
              key={index}
              src={src}
              alt='Child'
              className='absolute h-full w-full object-cover transition-opacity duration-1000'
              initial={{ opacity: 0 }}
              animate={{ opacity: index === current ? 1 : 0 }}
              transition={{ duration: 1 }}
            />
          ))}

   
          <div className='absolute inset-0 bg-black bg-opacity-70'></div>
        </div>

        {/* Text Content */}
        <div className='relative z-10 flex flex-col justify-center h-full text-white px-6 md:px-16'>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className='text-5xl md:text-9xl font-bold leading-tight mb-4'
          >
            BUILD. <br /> INSPIRE. <br /> ACCELERATE.
            <span className='block h-1 w-20 bg-primary  rounded-full'></span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className='text-lg md:text-xl mb-6 max-w-lg'
          >
            Shaping Future Leaders, to Thrive with Purpose.
          </motion.p>
        </div>
      </div>

      <section className='px-4 sm:px-6 lg:px-12 py-12 mx-auto bg-light mt-16 md:mt-24'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
          {/* Text Section */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            variants={textVariants}
            className='text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed p-4 sm:p-6 md:p-8 rounded-xl shadow mx-0 md:mx-4 lg:mx-12'
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
          <div className='flex justify-center md:justify-start'>
            <motion.img
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.2 }}
              variants={imageVariants}
              src={Intro}
              alt='IgnitePro image'
              className='rounded-xl w-full max-w-[90%] sm:max-w-[70%] md:max-w-sm lg:max-w-md'
            />
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
            <h2 className='text-white bg-primary w-fit px-5 py-2 rounded-md text-sm md:text-xl font-medium mb-6'>
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
              professionals.{' '}
              {!showMore && (
                <>
                  <span
                    className='text-primary font-medium cursor-pointer'
                    onClick={() => setShowMore(true)}
                  >
                    Read more
                  </span>
                </>
              )}
              {showMore && (
                <>
                  Additionally, we connect participants with seasoned mentors
                  who offer guidance, answer pressing questions, and provide
                  invaluable career advice. Beyond learning, we foster a vibrant
                  community where individuals can network with like-minded
                  peers, build meaningful relationships, and expand their
                  professional network.
                  <span
                    className='block mt-2 text-primary font-semibold cursor-pointer'
                    onClick={() => setShowMore(false)}
                  >
                    Show less
                  </span>
                </>
              )}
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

            <motion.a
              href='https://tix.africa/accelerate2'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block text-lg mt-4 bg-primary text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition transition-all duration-300'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Register for Accelerate 2.0 →
            </motion.a>
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
              src={Design1}
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
            className='text-white bg-primary px-4 py-2 rounded-md text-lg font-medium w-fit'
          >
            PITCH COMPETITION
          </motion.h2>
        </div>

        <motion.p
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeInUp}
          className='text-gray-800 text-base leading-relaxed '
        >
          The Future Forward Pitch Competition is a central highlight of
          Accelerate 2.0. It aims to identify and support innovative,
          purpose-driven startups that have moved beyond the idea stage and
          developed a Minimum Viable Product (MVP) with sustainable traction. We
          are looking for ventures that address real national challenges across
          sectors, from education to agriculture, hardware technology,
          healthcare, and beyond.
        </motion.p>
        <motion.a
          href='/pitch'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeInUp}
          className='text-primary font-semibold hover:underline text-sm'
        ></motion.a>

        <NavLink
          to='/pitch'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeInUp}
          className='text-primary font-semibold hover:underline text-sm'
        >
          VIEW MORE
        </NavLink>

        <motion.img
          src={Pitchhome}
          alt='Pitch Competition Winners'
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className='rounded-2xl w-full object-cover shadow-lg mt-10'
        />
      </section>

      <section className='px-7 md:px-24 py-16 mx-auto bg-black'>
        <h2 className='text-white bg-primary px-4 py-2 rounded-md text-lg font-medium w-fit mb-10'>
          TESTIMONIALS
        </h2>

        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination, Autoplay]}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <motion.div
                custom={i}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                variants={fadeInUp}
                className='bg-primary text-white p-6 rounded-xl relative h-full'
              >
                <div className='absolute bottom-[-10px] left-6 w-4 h-4 bg-primary rotate-45'></div>
                <p className='text-sm mb-2'>{t.quote}</p>
                <div className=''>
                  <p className='text-primary font-semibold'>{t.name}</p>
                  <p className='text-white text-sm'>{t.role}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <div className='px-7 md:px-24 py-0 md:py-16 mx-auto'>
        <motion.h2
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeInUp}
          className='text-white bg-primary px-4 py-2 rounded-md text-lg font-medium w-fit mt-10 '
        >
          PICTURE EXCERPT FROM ACCELERATE 1.0
        </motion.h2>
        <img
          src={Homeimg}
          alt='Pictures'
          class=' w-[500px] h-[auto] md:w-[1200px] mt-5 '
        />
      </div>
    </>
  );
};

export default Home;
