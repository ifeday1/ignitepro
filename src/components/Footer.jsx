import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
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

const Footer = () => {
  return (
    <>
      <footer className=' bg-primary text-white py-10 px-6 md:px-24 mt-14'>
        <div className='flex flex-col md:flex-row justify-between gap-10 md:gap-20'>
          {/* Left: Logo + Description */}
          <motion.div
            custom={0}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={fadeInUp}
            className='flex-1'
          >
            <h2 className='text-xl font-bold mb-2'>
              Ignite Pro <br />
              Community
            </h2>
            <p className='text-sm mb-4'>
              Equipping tomorrow’s leaders with the skills, mindset, and
              opportunities to thrive in their careers and create purposeful
              impact.
            </p>
            <div className='flex gap-3'>
              <a
                href='https://www.facebook.com/share/168D1aTfmi/'
                className='p-2 bg-white text-primary rounded-full hover:scale-110 transition'
              >
                <FaFacebookF />
              </a>
              <a
                href='https://www.instagram.com/ignite_procommunity?igsh=MWJ4M2ZqbmljcDY3YQ=='
                className='p-2 bg-white text-primary rounded-full hover:scale-110 transition'
              >
                <FaInstagram />
              </a>
              <a
                href='https://www.linkedin.com/company/ignite-pro-community/'
                className='p-2 bg-white text-primary rounded-full hover:scale-110 transition'
              >
                <FaLinkedinIn />
              </a>
            </div>
          </motion.div>

          {/* Center: Links */}
          <motion.div
            custom={1}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={fadeInUp}
            className='flex-1'
          >
            <h3 className='font-semibold text-lg mb-4'>Quick links</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <a href='/' className='hover:underline'>
                  Home
                </a>
              </li>
              <li>
                <a href='/about' className='hover:underline'>
                  About
                </a>
              </li>
              <li>
                <a href='/services' className='hover:underline'>
                  Services
                </a>
              </li>
              <li>
                <a href='/events' className='hover:underline'>
                  Events
                </a>
              </li>
              <li>
                <a href='/contacts' className='hover:underline'>
                  Contacts
                </a>
              </li>
              <li>
                <a href='/pitch' className='hover:underline'>
                  Pitch
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Right: Contact */}
          <motion.div
            custom={2}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={fadeInUp}
            className='flex-1'
          >
            <h3 className='font-semibold text-lg mb-4'>Contact us</h3>
            <p className='text-sm mb-1'>
              Address: New Covenant Baptist Church, Behind Liberation Stadium,
              Rumuomasi, off Faith Avenue, off Elekahia Road, P.M.B. 127, Port
              Harcourt, Rivers State, Nigeria.
            </p>
            <br></br>
            <p className='text-sm'>08132227108, 09069505198</p>
            <br></br>
            <p className='text-sm'>igniteprocommunity@gmail.com</p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className='border-t border-white my-6'></div>

        {/* Bottom Row */}
        <div className='flex flex-col md:flex-row justify-between items-center text-xs text-white'>
          <p>
            Designed & Development by{' '}
            <span className=' font-semibold'>
              <a
                href='https://ifeoluwaoladeni.com/'
                className='hover:underline'
              >
                Ifeoluwa Oladeni
              </a>
            </span>
          </p>
          <p>Copyright © 2025 Ignitepro community, Inc. All rights reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
