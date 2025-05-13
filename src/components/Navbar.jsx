import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png'; // Adjust the path as needed

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/services', label: 'Services' },
    { to: '/events', label: 'Events' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className='bg-white shadow-md fixed top-0 w-full z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Left - Logo */}
          <div className='flex-shrink-0'>
            <NavLink to='/'>
              <img src={logo} alt='Logo' className='h-8 w-auto' />
            </NavLink>
          </div>

          {/* Center - Navigation (Desktop) */}
          <div className='hidden md:flex space-x-6 text-gray-700 font-medium'>
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `relative pb-1 transition ${
                    isActive
                      ? 'text-primary font-medium after:content-[""] after:absolute after:h-1 after:w-full after:bg-primary after:bottom-0 after:left-0'
                      : 'text-gray-700 hover:text-primary'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Right - Pitch Button (Desktop) */}
          <div className='hidden md:block'>
            <NavLink to='/pitch'>
              <button className='bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary transition'>
                Pitch Competition
              </button>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
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

        {/* Mobile Dropdown Menu */}
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
                {navItems.map(({ to, label }) => (
                  <NavLink
                    key={to}
                    to={to}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block transition ${
                        isActive
                          ? 'text-primary font-semibold'
                          : 'hover:text-primary'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                ))}
                <NavLink to='/pitch' onClick={() => setIsOpen(false)}>
                  <button className='w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary transition'>
                    Pitch Competition
                  </button>
                </NavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
