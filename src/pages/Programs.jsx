import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { programs, programPath } from '../data/programs';
import GroupPhoto from '../assets/accelerate3-group.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const Programs = () => (
  <>
    <PageHero
      image={GroupPhoto}
      eyebrow='Ignite Pro Community'
      title='Our Programs'
      subtitle='Everything we run is built to help young people learn, connect and grow.'
    />

    <section className='bg-light py-20 md:py-28'>
      <div className='max-w-7xl mx-auto px-6'>
        <SectionHeading eyebrow='What we do' title='Programs that move you forward' />
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          className='grid sm:grid-cols-2 gap-8'
        >
          {programs.map((program) => (
            <motion.div key={program.slug} variants={fadeInUp}>
              <NavLink
                to={programPath(program)}
                className='group flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow'
              >
                <div className='h-64 overflow-hidden'>
                  <img
                    src={program.image}
                    alt={program.name}
                    className='h-full w-full object-cover group-hover:scale-105 transition-transform duration-700'
                  />
                </div>
                <div className='flex flex-col flex-1 p-7'>
                  <h2 className='text-2xl font-bold text-gray-900'>
                    {program.name}
                  </h2>
                  <p className='text-gray-600 leading-relaxed mt-3 flex-1'>
                    {program.short}
                  </p>
                  <span className='inline-flex items-center gap-2 text-primary font-semibold mt-6 group-hover:gap-3 transition-all'>
                    Learn more <ArrowRight className='w-4 h-4' />
                  </span>
                </div>
              </NavLink>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  </>
);

export default Programs;
