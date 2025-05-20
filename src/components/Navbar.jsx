import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const navItems = [
    { to: '/', label: 'Home' },
    {
      label: 'About Us',
      dropdown: [
        { to: '/about', label: 'Who We Are' },
        { to: '/team', label: 'Meet the Team' },
      ],
    },
    { to: '/works', label: 'Works' },
    {
      label: 'Events',
      dropdown: [{ to: '/events', label: 'Gallery and Events' }],
    },
    { to: '/contact', label: 'Contact' },
  ];

  const isDropdownActive = (dropdownItems) =>
    dropdownItems?.some((item) => location.pathname === item.to);

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

  return (
    <nav className='bg-white shadow-md fixed top-0 w-full z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <NavLink to='/'>
            <img src={logo} alt='Logo' className='h-8 w-auto' />
          </NavLink>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-6 text-gray-700 font-medium'>
            {navItems.map((item, index) =>
              item.dropdown ? (
                <div key={index} className='relative group'>
                  <button className='flex items-center hover:text-primary transition'>
                    {item.label}
                    <ChevronDownIcon />
                  </button>

                  {/* Dropdown */}
                  <div
                    className={`absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-40 transition-all duration-200
                      ${
                        isDropdownActive(item.dropdown)
                          ? 'opacity-100 pointer-events-auto'
                          : 'opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto'
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
                    `relative pb-1 transition ${
                      isActive
                        ? 'text-primary font-medium after:content-[""] after:absolute after:h-1 after:w-full after:bg-primary after:bottom-0 after:left-0'
                        : 'hover:text-primary'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
          </div>

          {/* Pitch Button (Desktop) */}
          <div className='hidden md:block'>
            <NavLink to='/pitch'>
              <button className='bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition'>
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

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className='md:hidden bg-white shadow-md rounded-b-lg overflow-hidden'
            >
              <div className='px-4 py-4 space-y-4 text-gray-700 text-left'>
                {navItems.map((item, i) =>
                  item.dropdown ? (
                    <div key={i}>
                      <button
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === item.label ? null : item.label
                          )
                        }
                        className='w-full text-left font-medium flex justify-between items-center'
                      >
                        <span>{item.label}</span>
                        <ChevronDownIcon rotate={openDropdown === item.label} />
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className='mt-2 pl-4 space-y-2'
                          >
                            {item.dropdown.map((sub, j) => (
                              <NavLink
                                key={j}
                                to={sub.to}
                                onClick={() => {
                                  setIsOpen(false);
                                  setOpenDropdown(null);
                                }}
                                className='block text-sm hover:text-primary'
                              >
                                {sub.label}
                              </NavLink>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      onClick={() => setIsOpen(false)}
                      className='block hover:text-primary'
                    >
                      {item.label}
                    </NavLink>
                  )
                )}
                <NavLink to='/pitch' onClick={() => setIsOpen(false)}>
                  <button className='w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition'>
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
