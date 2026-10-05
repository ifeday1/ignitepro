import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import {
  getProgram,
  getEdition,
  editionPath,
} from '../data/programs';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

// "Give a Book" CSR book drive promo, shared by the Home and Donate pages.
// Copy comes from the edition in data/programs.js.
const BookDriveCallout = ({ className = 'bg-white' }) => {
  const program = getProgram('csr-project');
  const edition = getEdition(program, 'give-a-book');
  if (!edition) return null;

  return (
    <section className={`py-20 px-6 ${className}`}>
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className='max-w-6xl mx-auto grid md:grid-cols-2 items-center bg-gray-50 border border-purple-100 rounded-[2rem] overflow-hidden'
      >
        <img
          src={edition.image}
          alt='Stack of secondary school textbooks'
          className='w-full h-72 md:h-full object-cover'
        />
        <div className='p-8 md:p-12'>
          <span className='inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4'>
            <BookOpen className='w-4 h-4' /> CSR Project
          </span>
          <h2 className='text-4xl md:text-5xl font-black text-primary leading-tight'>
            Give a book.
            <span className='block text-orange-500'>Open a world.</span>
          </h2>
          <p className='text-gray-600 mt-5'>
            A book in a child’s hand can open a world of possibilities. We’re
            accepting secondary school books:
          </p>
          <div className='flex flex-wrap gap-2 mt-4'>
            {edition.appeal.items.map((item) => (
              <span
                key={item}
                className='bg-white border border-purple-100 text-gray-700 font-medium px-3 py-1 rounded-full text-xs'
              >
                {item}
              </span>
            ))}
          </div>
          <NavLink
            to={editionPath(program, edition)}
            className='inline-flex items-center gap-2 mt-8 bg-primary hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-full transition'
          >
            Donate books <ArrowRight className='w-4 h-4' />
          </NavLink>
        </div>
      </motion.div>
    </section>
  );
};

export default BookDriveCallout;
