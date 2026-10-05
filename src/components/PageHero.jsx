import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

// Full-width image hero used by the Programs pages. `back` renders a
// "← Parent" link above the title.
const PageHero = ({ image, eyebrow, title, subtitle, back }) => (
  <section className='relative mt-20 h-[60vh] min-h-[420px] w-full overflow-hidden'>
    <img
      src={image}
      alt=''
      className='absolute inset-0 h-full w-full object-cover'
    />
    <div className='absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80' />

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className='relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center text-white'
    >
      {back && (
        <NavLink
          to={back.to}
          className='inline-flex items-center gap-2 text-sm text-white/80 hover:text-white mb-6 transition'
        >
          <ArrowLeft className='w-4 h-4' /> {back.label}
        </NavLink>
      )}
      {eyebrow && (
        <p className='uppercase tracking-[0.3em] text-xs md:text-sm text-white/80 mb-4'>
          {eyebrow}
        </p>
      )}
      <h1 className='text-4xl sm:text-5xl md:text-6xl font-black leading-tight max-w-4xl'>
        {title}
      </h1>
      {subtitle && (
        <p className='text-base md:text-xl text-white/85 max-w-2xl mt-5'>
          {subtitle}
        </p>
      )}
    </motion.div>
  </section>
);

export default PageHero;
