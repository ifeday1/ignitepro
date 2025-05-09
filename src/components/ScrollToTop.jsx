import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      className='fixed bottom-6 right-6 md:bottom-10 md:right-10 bg-blue-600 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all'
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5, transition: { yoyo: Infinity, duration: 0.3 } }} // Jump effect
    >
      <FaArrowUp className='text-xl md:text-2xl' />
    </motion.button>
  );
};

export default ScrollToTop;
