import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
import { programs, programPath, editionPath } from '../data/programs';

// A program with more than one edition gets its own sub-dropdown; otherwise
// it links straight to its page.
const programsDropdown = [
  { to: '/programs', label: 'All Programs' },
  ...programs.map((program) => ({
    to: programPath(program),
    label: program.name,
    children:
      program.editions.length > 1
        ? program.editions.map((edition) => ({
            to: editionPath(program, edition),
            label: edition.name,
          }))
        : null,
  })),
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSub, setOpenSub] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
    setOpenSub(null);
  }, [pathname]);

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
    setOpenSub(null);
  };

  const toggleSub = (label) => setOpenSub(openSub === label ? null : label);

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
        {
          type: 'download',
          href: '/Accelerate 3.0 Brochure.pdf',
          label: 'Download Accelerate 3.0 Brochure',
        },
      ],
    },

    { label: 'Programs', match: '/programs', dropdown: programsDropdown },

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

  const ChevronRightIcon = () => (
    <svg
      className='w-4 h-4'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      viewBox='0 0 24 24'
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' />
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
                  onMouseLeave={() => {
                    setOpenDropdown(null);
                    setOpenSub(null);
                  }}
                >
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    aria-expanded={openDropdown === item.label}
                    className={`inline-flex items-center px-2 py-1 hover:text-primary transition duration-300 ${
                      item.match && pathname.startsWith(item.match)
                        ? 'text-primary font-semibold'
                        : ''
                    }`}
                  >
                    {item.label}
                    <ChevronDownIcon rotate={openDropdown === item.label} />
                  </button>

                  {/* DROPDOWN */}
                  <div
                    className={`absolute left-0 top-10 w-60 bg-white border border-gray-100 rounded-2xl shadow-2xl transition-all duration-300 before:absolute before:inset-x-0 before:-top-3 before:h-3 before:content-[''] ${
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
                        ) : sub.children ? (
                          <div
                            key={subIdx}
                            className='relative'
                            onMouseEnter={() => setOpenSub(sub.label)}
                            onMouseLeave={() => setOpenSub(null)}
                          >
                            <div className='flex items-center hover:bg-gray-50 transition'>
                              <NavLink
                                to={sub.to}
                                className='flex-1 pl-5 py-3 text-sm'
                              >
                                {sub.label}
                              </NavLink>
                              <button
                                onClick={() => toggleSub(sub.label)}
                                aria-label={`Show ${sub.label} editions`}
                                aria-expanded={openSub === sub.label}
                                className={`px-4 py-3 text-gray-400 hover:text-primary transition-transform duration-300 ${
                                  openSub === sub.label
                                    ? 'rotate-90 lg:rotate-0 text-primary'
                                    : ''
                                }`}
                              >
                                <ChevronRightIcon />
                              </button>
                            </div>

                            {/* SUB-DROPDOWN: flyout on large screens, inline below that */}
                            {openSub === sub.label && (
                              <div className='bg-gray-50 py-1 lg:absolute lg:left-full lg:top-0 lg:-mt-2 lg:w-72 lg:bg-white lg:border lg:border-gray-100 lg:rounded-2xl lg:shadow-2xl lg:py-2'>
                                {sub.children.map((child) => (
                                  <NavLink
                                    key={child.to}
                                    to={child.to}
                                    title={child.label}
                                    className={({ isActive }) =>
                                      `block truncate pl-8 pr-5 lg:px-5 py-2.5 text-sm hover:bg-gray-50 lg:hover:bg-gray-50 transition ${
                                        isActive ? 'text-primary font-semibold' : ''
                                      }`
                                    }
                                  >
                                    {child.label}
                                  </NavLink>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <NavLink
                            key={subIdx}
                            to={sub.to}
                            end
                            className={({ isActive }) =>
                              `block px-5 py-3 text-sm hover:bg-gray-50 transition ${
                                isActive ? 'text-primary font-semibold' : ''
                              }`
                            }
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
              <div className='px-4 py-6 space-y-5 max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain'>
                {navItems.map((item, i) =>
                  item.dropdown ? (
                    <div key={i}>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        aria-expanded={openDropdown === item.label}
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
                            ) : sub.children ? (
                              <div key={j}>
                                <div className='flex items-center justify-between'>
                                  <NavLink
                                    to={sub.to}
                                    onClick={() => setIsOpen(false)}
                                    className='text-sm text-gray-700'
                                  >
                                    {sub.label}
                                  </NavLink>
                                  <button
                                    onClick={() => toggleSub(sub.label)}
                                    aria-label={`Show ${sub.label} editions`}
                                    aria-expanded={openSub === sub.label}
                                    className='pl-4 text-gray-500'
                                  >
                                    <ChevronDownIcon
                                      rotate={openSub === sub.label}
                                    />
                                  </button>
                                </div>

                                {openSub === sub.label && (
                                  <div className='mt-3 pl-4 space-y-3 border-l border-gray-200'>
                                    {sub.children.map((child) => (
                                      <NavLink
                                        key={child.to}
                                        to={child.to}
                                        onClick={() => setIsOpen(false)}
                                        className='block text-sm text-gray-600'
                                      >
                                        {child.label}
                                      </NavLink>
                                    ))}
                                  </div>
                                )}
                              </div>
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
