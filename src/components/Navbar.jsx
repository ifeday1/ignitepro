import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Replace with your logo path

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-white shadow-md fixed top-0 w-full z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Left - Logo */}
          <div className='flex-shrink-0'>
            <Link to='/'>
              <img src={logo} alt='Logo' className='h-8 w-auto' />
            </Link>
          </div>

          {/* Center - Nav Links */}
          <div className='hidden md:flex space-x-6 text-gray-700 font-medium'>
            <Link to='/' className='hover:text-purple-600 transition'>
              Home
            </Link>
            <Link to='/about' className='hover:text-purple-600 transition'>
              About Us
            </Link>
            <Link to='/services' className='hover:text-purple-600 transition'>
              Services
            </Link>
            <Link to='/events' className='hover:text-purple-600 transition'>
              Events
            </Link>
            <Link to='/contact' className='hover:text-purple-600 transition'>
              Contact
            </Link>
          </div>

          {/* Right - Pitch Button */}
          <div className='hidden md:block'>
            <Link to='/pitch'>
              <button className='bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition'>
                Pitch Competition
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-gray-700 focus:outline-none'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                viewBox='0 0 24 24'
              >
                {isOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className='md:hidden bg-white shadow-md rounded-b-lg overflow-hidden'
            >
              <div className='px-4 py-4 space-y-4 text-center text-gray-700'>
                <Link
                  to='/'
                  className='block hover:text-purple-600'
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to='/about'
                  className='block hover:text-purple-600'
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  to='/services'
                  className='block hover:text-purple-600'
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
                <Link
                  to='/events'
                  className='block hover:text-purple-600'
                  onClick={() => setIsOpen(false)}
                >
                  Events
                </Link>
                <Link
                  to='/contact'
                  className='block hover:text-purple-600'
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                <Link to='/pitch' onClick={() => setIsOpen(false)}>
                  <button className='w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition'>
                    Pitch Competition
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
