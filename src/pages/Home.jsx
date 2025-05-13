import React from 'react';
import Header from '../assets/header.png';
import { motion } from 'framer-motion';


const Home = () => {
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
              Equipping tomorrow’s leaders with the skills, mindset, and<br></br>
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
    </>
  );
}

export default Home