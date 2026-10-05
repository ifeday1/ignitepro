import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const SectionHeading = ({ eyebrow, title, text, center = false }) => (
  <motion.div
    initial='hidden'
    whileInView='visible'
    viewport={{ once: true, amount: 0.4 }}
    variants={fadeInUp}
    className={`mb-12 ${center ? 'text-center mx-auto' : ''} max-w-2xl`}
  >
    {eyebrow && (
      <p className='text-primary font-semibold uppercase tracking-widest text-sm mb-3'>
        {eyebrow}
      </p>
    )}
    <h2 className='text-3xl md:text-5xl font-black text-gray-900 leading-tight'>
      {title}
    </h2>
    {text && (
      <p className='text-gray-600 text-base md:text-lg leading-relaxed mt-4'>
        {text}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;
