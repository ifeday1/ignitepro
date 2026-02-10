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
      ],
    },
    { to: '/works', label: 'Works' },
    {
      label: 'Events',
      dropdown: [
        { to: '/upcomingevents', label: 'Upcoming Events' },
        { to: '/pastevents', label: 'Past Events' },
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
    <nav className='bg-white shadow-md fixed top-0 w-full z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-20'>
          {/* Logo */}
          <NavLink to='/'>
            <img src={logo} alt='Logo' className='h-8 w-auto' />
          </NavLink>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center gap-8 text-gray-700 font-medium'>
            {navItems.map((item, index) =>
              item.dropdown ? (
                <div
                  key={index}
                  className='relative'
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className='inline-flex items-center px-2 py-1 hover:text-primary transition'>
                    {item.label}
                    <ChevronDownIcon rotate={openDropdown === item.label} />
                  </button>

                  <div
                    className={`absolute left-0 w-48 bg-white border rounded-lg shadow-lg transition-opacity duration-200 ${
                      openDropdown === item.label
                        ? 'opacity-100 pointer-events-auto'
                        : 'opacity-0 pointer-events-none'
                    }`}
                  >
                    <div className='py-2'>
                      {item.dropdown.map((sub, subIdx) => (
                        <NavLink
                          key={subIdx}
                          to={sub.to}
                          className='block px-4 py-2 text-sm hover:bg-gray-100'
                        >
                          {sub.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `px-2 py-1 transition ${
                      isActive
                        ? 'text-primary font-medium'
                        : 'hover:text-primary'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ),
            )}

            {/* IMPACT NOTE DOWNLOAD */}
            <a
              href='/Ignite Pro Impact Note 20251.pdf'
              download
              className='inline-flex items-center px-3 py-1 text-primary font-semibold hover:text-primary/80 transition'
            >
              Impact Note
              <DownloadIcon />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
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
              className='md:hidden bg-white shadow-md'
            >
              <div className='px-4 py-4 space-y-4'>
                {navItems.map((item, i) =>
                  item.dropdown ? (
                    <div key={i}>
                      <button
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === item.label ? null : item.label,
                          )
                        }
                        className='w-full flex justify-between items-center font-medium'
                      >
                        {item.label}
                        <ChevronDownIcon rotate={openDropdown === item.label} />
                      </button>

                      {openDropdown === item.label && (
                        <div className='mt-2 pl-4 space-y-2'>
                          {item.dropdown.map((sub, j) => (
                            <NavLink
                              key={j}
                              to={sub.to}
                              onClick={() => setIsOpen(false)}
                              className='block text-sm'
                            >
                              {sub.label}
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      onClick={() => setIsOpen(false)}
                      className='block'
                    >
                      {item.label}
                    </NavLink>
                  ),
                )}

                {/* MOBILE IMPACT NOTE */}
                <a
                  href='/ignite-pro-impact-note.pdf'
                  download
                  className='flex items-center font-semibold text-primary'
                >
                  Impact Note
                  <DownloadIcon />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
