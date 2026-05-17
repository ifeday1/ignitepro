import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const navItems = [
    { to: '/', label: 'Home' },

    {
      label: 'About Us',
      dropdown: [
        { to: '/about', label: 'Who We Are' },
        { to: '/meet-the-team', label: 'Meet the Team' },
        {
          type: 'download',
          href: '/Ignite Pro Impact Note 20251.pdf',
          label: 'Download Impact Note',
        },
      ],
    },

    { to: '/works', label: 'Works' },

    {
      label: 'Events',
      dropdown: [
        { to: '/upcomingevents', label: 'Upcoming Events' },
        { to: '/pastevents', label: 'Past Events' },
        { to: '/podcast', label: 'Podcast' },
        { to: '/gallery', label: 'Gallery' },
      ],
    },

    { to: '/contact', label: 'Contact' },
  ];

  const ChevronDownIcon = ({ rotate = false }) => (
    <svg
      className={`w-4 h-4 ml-1 transition-transform duration-300 ${
        rotate ? 'rotate-180' : ''
      }`}
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      viewBox='0 0 24 24'
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
    </svg>
  );

  const DownloadIcon = () => (
    <svg
      className='w-4 h-4 ml-2'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      viewBox='0 0 24 24'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2'
      />
      <path strokeLinecap='round' strokeLinejoin='round' d='M7 10l5 5 5-5' />
      <path strokeLinecap='round' strokeLinejoin='round' d='M12 15V3' />
    </svg>
  );

  return (
    <nav className='bg-white/95 backdrop-blur-md shadow-sm fixed top-0 w-full z-50 border-b border-gray-100'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-20'>
          {/* LOGO */}
          <NavLink to='/'>
            <img src={logo} alt='Ignite Pro Logo' className='h-9 w-auto' />
          </NavLink>

          {/* DESKTOP NAVIGATION */}
          <div className='hidden md:flex items-center gap-8 text-gray-700 font-medium'>
            {navItems.map((item, index) =>
              item.dropdown ? (
                <div
                  key={index}
                  className='relative'
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className='inline-flex items-center px-2 py-1 hover:text-primary transition duration-300'>
                    {item.label}
                    <ChevronDownIcon rotate={openDropdown === item.label} />
                  </button>

                  {/* DROPDOWN */}
                  <div
                    className={`absolute left-0 top-10 w-60 bg-white border border-gray-100 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
                      openDropdown === item.label
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-2'
                    }`}
                  >
                    <div className='py-2'>
                      {item.dropdown.map((sub, subIdx) =>
                        sub.type === 'download' ? (
                          <a
                            key={subIdx}
                            href={sub.href}
                            download
                            className='flex items-center justify-between px-5 py-3 text-sm font-medium text-primary hover:bg-primary/5 transition'
                          >
                            {sub.label}
                            <DownloadIcon />
                          </a>
                        ) : (
                          <NavLink
                            key={subIdx}
                            to={sub.to}
                            className='block px-5 py-3 text-sm hover:bg-gray-50 transition'
                          >
                            {sub.label}
                          </NavLink>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `transition duration-300 ${
                      isActive
                        ? 'text-primary font-semibold'
                        : 'hover:text-primary'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ),
            )}

            {/* DONATE BUTTON */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
              <NavLink
                to='/donate'
                className='inline-flex items-center rounded-full border-2 border-purple-600 px-6 py-3 text-sm font-semibold text-purple-700 bg-white hover:bg-purple-50 transition-all duration-300 shadow-sm hover:shadow-lg'
              >
                Donate
              </NavLink>
            </motion.div>

            {/* ACCELERATE 3.0 BUTTON */}
            <motion.div
              animate={{
                y: [0, -3, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <NavLink
                to='/accelerate3.0'
                className='relative inline-flex items-center overflow-hidden rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl'
              >
                <span className='relative z-10'>Accelerate 3.0</span>

                {/* Glow Effect */}
                <span className='absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition duration-300'></span>
              </NavLink>
            </motion.div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-gray-700'
            >
              <svg
                className='w-7 h-7'
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

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className='md:hidden overflow-hidden bg-white border-t border-gray-100'
            >
              <div className='px-4 py-6 space-y-5'>
                {navItems.map((item, i) =>
                  item.dropdown ? (
                    <div key={i}>
                      <button
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === item.label ? null : item.label,
                          )
                        }
                        className='w-full flex justify-between items-center font-medium text-gray-800'
                      >
                        {item.label}
                        <ChevronDownIcon rotate={openDropdown === item.label} />
                      </button>

                      {openDropdown === item.label && (
                        <div className='mt-3 pl-4 space-y-3 border-l border-gray-200'>
                          {item.dropdown.map((sub, j) =>
                            sub.type === 'download' ? (
                              <a
                                key={j}
                                href={sub.href}
                                download
                                className='flex items-center justify-between text-sm font-medium text-primary'
                              >
                                {sub.label}
                                <DownloadIcon />
                              </a>
                            ) : (
                              <NavLink
                                key={j}
                                to={sub.to}
                                onClick={() => setIsOpen(false)}
                                className='block text-sm text-gray-700'
                              >
                                {sub.label}
                              </NavLink>
                            ),
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      onClick={() => setIsOpen(false)}
                      className='block text-gray-800 font-medium'
                    >
                      {item.label}
                    </NavLink>
                  ),
                )}

                {/* MOBILE BUTTONS */}
                <div className='flex flex-col gap-4 pt-2'>
                  {/* DONATE BUTTON */}
                  <NavLink
                    to='/donate'
                    onClick={() => setIsOpen(false)}
                    className='flex items-center justify-center rounded-full border-2 border-purple-600 px-6 py-3 text-sm font-semibold text-purple-700 bg-white hover:bg-purple-50 transition-all duration-300'
                  >
                    Donate
                  </NavLink>

                  {/* ACCELERATE BUTTON */}
                  <motion.div
                    animate={{
                      scale: [1, 1.03, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    <NavLink
                      to='/accelerate3.0'
                      onClick={() => setIsOpen(false)}
                      className='flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg'
                    >
                      Accelerate 3.0
                    </NavLink>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
