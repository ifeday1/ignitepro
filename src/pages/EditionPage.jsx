import { motion } from 'framer-motion';
import { NavLink, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import ImageGallery from '../components/ImageGallery';
import TeamSection from '../components/TeamSection';
import SpeakerCard from '../components/SpeakerCard';
import PodcastEpisode from '../components/PodcastEpisode';
import ResourceLinks from '../components/ResourceLinks';
import NotFound from './NotFound';
import {
  getProgram,
  getEdition,
  programPath,
  editionPath,
} from '../data/programs';
import { testimonials } from '../data/testimonials';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const InfoCard = ({ label, title, text }) => (
  <div className='bg-white rounded-2xl p-5 shadow-lg border border-gray-100'>
    <p className='text-sm uppercase tracking-widest text-primary font-semibold'>
      {label}
    </p>
    <h3 className='text-xl font-bold text-gray-900 mt-2'>{title}</h3>
    {text && <p className='text-gray-600 mt-1'>{text}</p>}
  </div>
);

const EditionPage = () => {
  const { programSlug, editionSlug } = useParams();
  const program = getProgram(programSlug);
  const edition = getEdition(program, editionSlug);

  if (!edition) {
    return program ? (
      <NotFound backTo={programPath(program)} backLabel={`Back to ${program.name}`} />
    ) : (
      <NotFound />
    );
  }

  const index = program.editions.indexOf(edition);
  const prev = program.editions[index - 1];
  const next = program.editions[index + 1];
  const editionTestimonials = testimonials.filter((t) =>
    edition.testimonialRoles?.includes(t.role),
  );

  return (
    <>
      <PageHero
        image={edition.image}
        eyebrow={program.isPodcast ? program.fullName : edition.name}
        title={program.isPodcast ? edition.name : edition.theme || edition.name}
        back={{ to: programPath(program), label: program.name }}
      />

      {program.isPodcast ? (
        <section className='max-w-4xl mx-auto px-6 py-20 md:py-24'>
          <PodcastEpisode episode={edition} />
        </section>
      ) : (
        <>
          {/* OVERVIEW */}
          <section className='max-w-7xl mx-auto px-6 py-20 md:py-28 grid lg:grid-cols-3 gap-12 items-start'>
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInUp}
              className='lg:col-span-2'
            >
              <p className='text-primary font-semibold uppercase tracking-widest text-sm mb-3'>
                Summary
              </p>
              <h2 className='text-3xl md:text-5xl font-black text-gray-900 leading-tight'>
                {edition.name}
              </h2>
              <p className='text-gray-600 text-base md:text-lg leading-relaxed mt-6 whitespace-pre-line'>
                {edition.summary}
              </p>
              <ResourceLinks links={edition.links} />
            </motion.div>

            <div className='space-y-5'>
              {(edition.date || edition.year) && (
                <InfoCard
                  label={edition.date ? 'Date' : 'Year'}
                  title={edition.date || edition.year}
                  text={edition.time}
                />
              )}
              {edition.venue && (
                <InfoCard
                  label='Venue'
                  title={edition.venue.name}
                  text={edition.venue.address}
                />
              )}
              {edition.flyer && (
                <motion.img
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeInUp}
                  src={edition.flyer}
                  alt={`${edition.name} flyer`}
                  className='w-full max-w-md mx-auto rounded-3xl shadow-xl'
                />
              )}
            </div>
          </section>

          {/* KEY NUMBERS */}
          {edition.stats && (
            <section className='bg-white border-y border-purple-100'>
              <div className='max-w-7xl mx-auto px-6 py-14 md:py-20 flex flex-wrap justify-center gap-y-10'>
                {edition.stats.map((s) => (
                  <div key={s.label} className='w-1/2 lg:w-1/5 px-3 text-center'>
                    <p className='text-4xl md:text-6xl font-black text-primary'>
                      {s.value}
                    </p>
                    <p className='text-gray-600 text-sm md:text-base mt-2 max-w-[14rem] mx-auto'>
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* WINNERS */}
          {edition.winners && (
            <section className='bg-light py-20 md:py-28'>
              <div className='max-w-7xl mx-auto px-6'>
                <SectionHeading
                  eyebrow='Winners'
                  title={edition.winners.title}
                  text={edition.winners.text}
                />
                <div className='grid md:grid-cols-3 gap-8'>
                  {edition.winners.data.map((w, i) => (
                    <motion.div
                      key={w.place}
                      initial='hidden'
                      whileInView='visible'
                      viewport={{ once: true, amount: 0.2 }}
                      variants={fadeInUp}
                      className={`bg-white rounded-3xl overflow-hidden shadow-sm border ${
                        i === 0 ? 'border-primary ring-2 ring-primary/20' : 'border-purple-100'
                      }`}
                    >
                      <img
                        src={w.image}
                        alt={`${w.place}, ${edition.name}`}
                        className='w-full aspect-[4/3] object-cover'
                      />
                      <div className='p-6'>
                        <p className='text-sm uppercase tracking-widest text-primary font-semibold'>
                          {w.place}
                        </p>
                        <p className='text-3xl font-black text-gray-900 mt-2'>
                          {w.prize}
                        </p>
                        {w.name && (
                          <p className='text-gray-600 mt-1'>{w.name}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* DONATION APPEAL */}
          {edition.appeal && (
            <section className='bg-light py-20 md:py-28'>
              <div className='max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start'>
                <motion.div
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeInUp}
                >
                  <SectionHeading eyebrow='Get involved' title={edition.appeal.title} />
                  <div className='flex flex-wrap gap-3'>
                    {edition.appeal.items.map((item) => (
                      <span
                        key={item}
                        className='bg-white border border-purple-100 text-gray-800 font-semibold px-4 py-2 rounded-full text-sm'
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {edition.appeal.account && (
                    <div className='mt-10 bg-primary text-white rounded-3xl p-6 md:p-8'>
                      <p className='text-sm uppercase tracking-widest text-white/80 font-semibold'>
                        You can also send donations here
                      </p>
                      <p className='text-3xl md:text-4xl font-black tracking-wide mt-3 break-all'>
                        {edition.appeal.account.number}
                      </p>
                      <p className='mt-2 text-white/90'>
                        {edition.appeal.account.name} · {edition.appeal.account.bank}
                      </p>
                    </div>
                  )}

                  {edition.appeal.phone && (
                    <p className='mt-6 text-gray-700'>
                      For more info, contact us on{' '}
                      <a
                        href={`tel:${edition.appeal.phone.replace(/\s/g, '')}`}
                        className='font-bold text-primary whitespace-nowrap'
                      >
                        {edition.appeal.phone}
                      </a>
                    </p>
                  )}
                </motion.div>

                {edition.appeal.flyer && (
                  <motion.img
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInUp}
                    src={edition.appeal.flyer}
                    alt={`${edition.name} flyer`}
                    className='w-full max-w-md mx-auto rounded-3xl shadow-xl'
                  />
                )}
              </div>
            </section>
          )}

          {/* SPEAKERS */}
          {edition.team?.map((group, i) => (
            <TeamSection
              key={group.title}
              title={group.title}
              data={group.data}
              bg={i % 2 ? 'bg-purple-50' : 'bg-white'}
            />
          ))}
          {edition.speakerCards && (
            <section className='bg-primary py-20 px-6 md:px-16'>
              <div className='max-w-7xl mx-auto'>
                <h2 className='text-4xl md:text-5xl font-bold text-white text-center mb-16'>
                  {edition.speakerCards.title}
                </h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                  {edition.speakerCards.data.map((speaker) => (
                    <SpeakerCard key={speaker.name} {...speaker} />
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* VIDEOS */}
          {edition.videos && (
            <section className='max-w-7xl mx-auto px-6 pt-20 md:pt-28'>
              <SectionHeading eyebrow='Watch' title='Video highlights' />
              <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
                {edition.videos.map((video) => (
                  <video
                    key={video.src}
                    controls
                    preload='none'
                    poster={video.poster}
                    className='w-full aspect-[9/16] object-cover rounded-2xl shadow-sm border border-gray-200 bg-black'
                  >
                    <source src={video.src} type='video/mp4' />
                  </video>
                ))}
              </div>
            </section>
          )}

          {/* GALLERY */}
          {edition.gallery && (
            <section className='max-w-7xl mx-auto px-6 py-20 md:py-28'>
              <SectionHeading eyebrow='Gallery' title={`Moments from ${edition.name}`} />
              <ImageGallery images={edition.gallery} />
            </section>
          )}

          {/* TESTIMONIALS */}
          {editionTestimonials.length > 0 && (
            <section className='bg-light py-20 md:py-28'>
              <div className='max-w-7xl mx-auto px-6'>
                <SectionHeading eyebrow='Stories' title='What attendees said' />
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                  {editionTestimonials.map((t) => (
                    <div
                      key={t.quote}
                      className='bg-white border border-purple-100 rounded-2xl shadow-sm p-6 flex flex-col'
                    >
                      <Quote className='w-8 h-8 text-primary/30 mb-4' />
                      <p className='text-sm text-gray-700 leading-relaxed flex-1'>
                        {t.quote}
                      </p>
                      <div className='pt-4 mt-5 border-t border-purple-50'>
                        {t.name?.trim() && (
                          <p className='font-semibold text-gray-900 text-sm'>
                            {t.name}
                          </p>
                        )}
                        <p className='text-gray-500 text-xs'>{t.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
      )}

      {/* EDITION NAV */}
      <nav className='max-w-7xl mx-auto px-6 pb-20 pt-4 flex flex-col sm:flex-row justify-between gap-4 text-sm font-semibold'>
        {prev ? (
          <NavLink
            to={editionPath(program, prev)}
            className='inline-flex items-center gap-2 text-gray-700 hover:text-primary transition'
          >
            <ArrowLeft className='w-4 h-4' /> {prev.name}
          </NavLink>
        ) : (
          <span />
        )}
        <NavLink
          to={programPath(program)}
          className='inline-flex items-center justify-center gap-2 bg-primary hover:bg-purple-700 text-white px-6 py-3 rounded-full transition'
        >
          All {program.name} {program.isPodcast ? 'episodes' : 'editions'}
        </NavLink>
        {next ? (
          <NavLink
            to={editionPath(program, next)}
            className='inline-flex items-center gap-2 text-gray-700 hover:text-primary transition sm:justify-end'
          >
            {next.name} <ArrowRight className='w-4 h-4' />
          </NavLink>
        ) : (
          <span />
        )}
      </nav>
    </>
  );
};

export default EditionPage;
