import { motion } from 'framer-motion';
import { NavLink, useParams } from 'react-router-dom';
import { ArrowRight, Check, Users } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import PodcastEpisode from '../components/PodcastEpisode';
import ResourceLinks from '../components/ResourceLinks';
import NotFound from './NotFound';
import { getProgram, editionPath } from '../data/programs';

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

const ProgramPage = () => {
  const { programSlug } = useParams();
  const program = getProgram(programSlug);

  if (!program) return <NotFound />;

  const editionLabel = program.isPodcast ? 'Episodes' : 'Editions';

  return (
    <>
      <PageHero
        image={program.image}
        eyebrow='Programs'
        title={program.fullName || program.name}
        subtitle={program.short}
        back={{ to: '/programs', label: 'All programs' }}
      />

      {/* ABOUT */}
      <section className='max-w-7xl mx-auto px-6 py-20 md:py-28 grid lg:grid-cols-2 gap-14 items-start'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <p className='text-primary font-semibold uppercase tracking-widest text-sm mb-3'>
            What it is
          </p>
          <h2 className='text-3xl md:text-5xl font-black text-gray-900 leading-tight'>
            {program.name}
          </h2>
          {program.about.map((para) => (
            <p
              key={para}
              className='text-gray-600 text-base md:text-lg leading-relaxed mt-6'
            >
              {para}
            </p>
          ))}
          {program.audience && (
            <div className='mt-8 bg-light rounded-2xl p-6 flex gap-4'>
              <span className='h-11 w-11 shrink-0 rounded-xl bg-white flex items-center justify-center text-primary'>
                <Users className='w-5 h-5' />
              </span>
              <div>
                <p className='font-bold text-gray-900'>Who it’s for</p>
                <p className='text-gray-600 mt-1'>{program.audience}</p>
              </div>
            </div>
          )}
          <ResourceLinks links={program.links} />
        </motion.div>

        {program.gains?.length > 0 && (
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className='bg-white rounded-3xl shadow-sm border border-purple-100 p-8 md:p-10'
          >
            <h3 className='text-2xl font-bold text-gray-900'>
              What participants gain
            </h3>
            <ul className='mt-6 space-y-4'>
              {program.gains.map((gain) => (
                <li key={gain} className='flex gap-3 text-gray-700'>
                  <Check className='w-5 h-5 text-primary shrink-0 mt-0.5' />
                  <span className='leading-relaxed'>{gain}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </section>

      {/* EDITIONS / EPISODES */}
      <section className='bg-light py-20 md:py-28'>
        <div className='max-w-7xl mx-auto px-6'>
          <SectionHeading eyebrow={editionLabel} title={`${program.name} ${editionLabel.toLowerCase()}`} />

          {program.editions.length === 0 ? (
            <p className='text-gray-600'>
              No {editionLabel.toLowerCase()} yet — check back soon.
            </p>
          ) : program.isPodcast ? (
            <div className='grid md:grid-cols-2 gap-8'>
              {program.editions.map((episode) => (
                <PodcastEpisode
                  key={episode.slug}
                  episode={episode}
                  to={editionPath(program, episode)}
                />
              ))}
            </div>
          ) : (
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.15 }}
              variants={staggerContainer}
              className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'
            >
              {program.editions.map((edition) => (
                <motion.div key={edition.slug} variants={fadeInUp}>
                  <NavLink
                    to={editionPath(program, edition)}
                    className='group flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow'
                  >
                    <div className='h-56 overflow-hidden'>
                      <img
                        src={edition.image}
                        alt={edition.name}
                        className='h-full w-full object-cover group-hover:scale-105 transition-transform duration-700'
                      />
                    </div>
                    <div className='flex flex-col flex-1 p-6'>
                      {edition.year && (
                        <span className='text-sm uppercase tracking-widest text-primary font-semibold'>
                          {edition.year}
                        </span>
                      )}
                      <h3 className='text-xl font-bold text-gray-900 mt-1'>
                        {edition.name}
                      </h3>
                      {edition.theme && (
                        <p className='text-gray-600 text-sm mt-1 flex-1'>
                          {edition.theme}
                        </p>
                      )}
                      <span className='inline-flex items-center gap-2 text-primary font-semibold text-sm mt-5 group-hover:gap-3 transition-all'>
                        View edition <ArrowRight className='w-4 h-4' />
                      </span>
                    </div>
                  </NavLink>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
};

export default ProgramPage;
