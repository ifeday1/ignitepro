import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence, useInView, animate } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import {
  Play,
  X,
  ArrowRight,
  Quote,
  Star,
  Rocket,
  Users,
  Trophy,
  Mic2,
  Heart,
  HandHeart,
  Download,
} from 'lucide-react';
import { testimonials } from '../data/testimonials';
import BookDriveCallout from '../components/BookDriveCallout';
import Hero1 from '../assets/hero-1.jpg';
import Hero2 from '../assets/hero-2.jpg';
import Hero3 from '../assets/hero-3.jpg';
import Hero4 from '../assets/hero-4.jpg';
import Hero5 from '../assets/hero-5.jpg';
import Hero6 from '../assets/hero-6.jpg';
import GroupPhoto from '../assets/accelerate3-group.jpg';
import CareerCoaching from '../assets/career-coaching.jpg';
import PitchPhoto from '../assets/pitch2.png';
import PodcastThumb from '../assets/podthumb1.jpeg';
import Accelerate2Event from '../assets/accelerate2-event.jpg';
import Accelerate1Event from '../assets/accelerate1-event.jpg';
import UnwindEvent from '../assets/unwind-event.jpg';
import ScholarshipEvent from '../assets/act1.png';
import glanceImage from '../assets/glance.jpg';
import Excerpt1 from '../assets/excerpt/excerpt-1.jpg';
import Excerpt2 from '../assets/excerpt/excerpt-2.jpg';
import Excerpt3 from '../assets/excerpt/excerpt-3.jpg';
import Excerpt4 from '../assets/excerpt/excerpt-4.jpg';
import Excerpt5 from '../assets/excerpt/excerpt-5.jpg';
import Excerpt6 from '../assets/excerpt/excerpt-6.jpg';

const heroImages = [Hero1, Hero2, Hero3, Hero4, Hero5, Hero6];

const HERO_VIDEO = '/videos/accelerate3-video-1.mp4';
const HERO_VIDEO_POSTER = '/videos/accelerate3-video-1-poster.jpg';

// Figures drawn from our past-event records — update as new numbers come in.
const stats = [
  { value: 3, suffix: '', label: 'Editions of the Accelerate bootcamp' },
  { value: 5, suffix: '+', label: 'Transformative events hosted' },
  { value: 1500, suffix: '+', label: 'Attendees at our bootcamp' },
  { value: 6, suffix: '+', label: 'Businesses supported with grants' },
];

const programs = [
  {
    title: 'Accelerate Bootcamp',
    text: 'Our annual leadership and career bootcamp for students, graduates and young professionals.',
    image: GroupPhoto,
    to: '/accelerate3.0',
    icon: Rocket,
  },
  {
    title: 'Coaching & Mentorship',
    text: 'One-on-one coaching, mentorship circles, CV reviews and mock interviews with seasoned professionals.',
    image: CareerCoaching,
    to: '/works',
    icon: Users,
  },
  {
    title: 'Pitch Competition & Grants',
    text: 'Funding and introductions for purpose-driven startups turning ideas into real businesses.',
    image: PitchPhoto,
    to: '/pitch',
    icon: Trophy,
  },
  {
    title: 'The Ignite Room Podcast',
    text: 'Honest conversations on purpose-driven leadership, careers and creating impact beyond profit.',
    image: PodcastThumb,
    to: '/podcast',
    icon: Mic2,
  },
];

const steps = [
  {
    title: 'Join the community',
    text: 'Attend an Ignite Pro event and connect with young people who share your drive to grow.',
    cta: 'See upcoming events',
    to: '/upcomingevents',
  },
  {
    title: 'Learn & get mentored',
    text: 'Build leadership and career skills through bootcamps, coaching and mentorship circles.',
    cta: 'Explore our works',
    to: '/works',
  },
  {
    title: 'Launch & grow',
    text: 'Pitch your venture for grants, land opportunities, and grow a career with purpose.',
    cta: 'About the pitch competition',
    to: '/pitch',
  },
];

const pastEvents = [
  {
    title: 'Accelerate 3.0',
    tag: 'Future Proof: Sustaining Relevance',
    image: GroupPhoto,
  },
  {
    title: 'Accelerate 2.0',
    tag: 'Future Forward: Transforming Visions to Reality',
    image: Accelerate2Event,
  },
  {
    title: 'Accelerate 1.0',
    tag: 'Ten Times Better · 1,500 attendees',
    image: Accelerate1Event,
  },
  {
    title: 'Unwind',
    tag: 'Revisiting The Vision Board',
    image: UnwindEvent,
  },
  {
    title: 'Navigating Foreign Scholarships',
    tag: 'Attendees from 5 countries',
    image: ScholarshipEvent,
  },
];

const galleryPreview = [
  Excerpt1,
  Excerpt2,
  Excerpt3,
  Excerpt4,
  Excerpt5,
  Excerpt6,
];

// Featured story shown large above the testimonial carousel.
const featured = testimonials.find((t) => t.role === 'Uri Creative');
const otherTestimonials = testimonials.filter((t) => t !== featured);

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

const getInitials = (str) => {
  const clean = str?.trim();
  if (!clean) return null;
  return clean
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
};

const SectionHeading = ({ eyebrow, title, text, center = false }) => (
  <motion.div
    initial='hidden'
    whileInView='visible'
    viewport={{ once: true, amount: 0.4 }}
    variants={fadeInUp}
    className={`mb-12 ${center ? 'text-center mx-auto' : ''} max-w-2xl`}
  >
    <p className='text-primary font-semibold uppercase tracking-widest text-sm mb-3'>
      {eyebrow}
    </p>
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

const Counter = ({ value, suffix }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
};

const VideoModal = ({ open, onClose }) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='fixed inset-0 z-[60] bg-black/85 flex items-center justify-center p-4 md:p-10'
          onClick={onClose}
        >
          <button
            onClick={onClose}
            aria-label='Close video'
            className='absolute top-5 right-5 text-white/80 hover:text-white'
          >
            <X className='w-8 h-8' />
          </button>
          <motion.video
            initial={{ scale: 0.92 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.92 }}
            src={HERO_VIDEO}
            poster={HERO_VIDEO_POSTER}
            controls
            autoPlay
            playsInline
            onClick={(e) => e.stopPropagation()}
            className='w-full max-w-5xl max-h-[85vh] rounded-2xl shadow-2xl bg-black'
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Home = () => {
  const [current, setCurrent] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className='relative h-[calc(100vh-5rem)] min-h-[560px] w-full overflow-hidden mt-20'>
        <div className='absolute inset-0'>
          {heroImages.map((src, index) => (
            <motion.img
              key={src}
              src={src}
              alt=''
              className='absolute inset-0 h-full w-full object-cover'
              initial={false}
              animate={{
                opacity: index === current ? 1 : 0,
                scale: index === current ? 1.06 : 1,
              }}
              transition={{
                opacity: { duration: 1.2 },
                scale: { duration: 8, ease: 'linear' },
              }}
            />
          ))}
          <div className='absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80' />
        </div>

        <div className='relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6'>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='uppercase tracking-[0.3em] text-xs md:text-sm text-white/80 mb-6'
          >
            Ignite Pro Community
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className='text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] max-w-5xl'
          >
            Build. Inspire.{' '}
            <span className='bg-gradient-to-r from-purple-300 to-orange-300 bg-clip-text text-transparent'>
              Accelerate.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className='text-base md:text-xl text-white/85 max-w-2xl mt-6'
          >
            We empower students, graduates and young professionals with the
            skills, mentorship and opportunities they need to lead and thrive
            with purpose.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className='flex flex-col sm:flex-row items-center gap-4 mt-10'
          >
            <NavLink
              to='/upcomingevents'
              className='inline-flex items-center gap-2 bg-primary hover:bg-purple-700 text-white px-7 py-4 rounded-full font-semibold shadow-lg transition'
            >
              Join an upcoming event <ArrowRight className='w-5 h-5' />
            </NavLink>
            <button
              onClick={() => setVideoOpen(true)}
              className='group inline-flex items-center gap-3 text-white font-semibold'
            >
              <span className='relative flex h-14 w-14 items-center justify-center rounded-full bg-white/15 backdrop-blur border border-white/40 group-hover:bg-white/25 transition'>
                <span className='absolute inset-0 rounded-full border border-white/40 animate-ping' />
                <Play className='w-5 h-5 fill-white ml-0.5' />
              </span>
              Watch the Accelerate 3.0 recap
            </button>
          </motion.div>
        </div>

        <div className='absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2'>
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Show slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === current ? 'w-8 bg-white' : 'w-3 bg-white/40'
              }`}
            />
          ))}
        </div>
      </section>

      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />

      {/* IMPACT STATS */}
      <section className='bg-white border-b border-purple-100'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className='max-w-7xl mx-auto px-6 py-14 md:py-20 grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6'
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeInUp}
              className='text-center'
            >
              <p className='text-4xl md:text-6xl font-black text-primary'>
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className='text-gray-600 text-sm md:text-base mt-2 max-w-[14rem] mx-auto'>
                {s.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* WHO WE ARE */}
      <section className='max-w-7xl mx-auto px-6 py-20 md:py-28 grid lg:grid-cols-2 gap-14 items-center'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <p className='text-primary font-semibold uppercase tracking-widest text-sm mb-3'>
            Who we are
          </p>
          <h2 className='text-3xl md:text-5xl font-black text-gray-900 leading-tight'>
            A one-stop hub for young people ready to grow.
          </h2>
          <p className='text-gray-600 text-base md:text-lg leading-relaxed mt-6'>
            Ignite Pro Community is a faith-based NGO dedicated to empowering
            students, graduates and young professionals. We give young people
            a platform to discover their passions, develop essential personal
            and leadership skills, and build thriving careers.
          </p>
          <p className='text-gray-600 text-base md:text-lg leading-relaxed mt-4'>
            Through sessions led by experienced professionals, mentors who
            answer the hard questions, and a vibrant network of like-minded
            peers, we help every member excel.
          </p>
          <div className='flex flex-wrap gap-4 mt-8'>
            <NavLink
              to='/about'
              className='inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all'
            >
              More about us <ArrowRight className='w-5 h-5' />
            </NavLink>
            <a
              href='/Ignite Pro Impact Note 20251.pdf'
              download
              className='inline-flex items-center gap-2 text-gray-700 font-semibold hover:text-primary transition'
            >
              <Download className='w-5 h-5' /> Download our Impact Note
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className='relative'
        >
          <img
            src={glanceImage}
            alt='Ignite Pro Community 2025 at a glance'
            className='w-full rounded-3xl shadow-xl'
          />
          <div className='absolute -bottom-6 left-6 bg-white shadow-lg rounded-2xl px-5 py-3 border border-purple-100'>
            <p className='font-bold text-gray-900 text-sm'>2025 at a glance</p>
            <p className='text-xs text-gray-500'>
              Leadership · Mentorship · Growth
            </p>
          </div>
        </motion.div>
      </section>

      {/* PROGRAMS */}
      <section className='bg-light py-20 md:py-28'>
        <div className='max-w-7xl mx-auto px-6'>
          <SectionHeading
            eyebrow='What we do'
            title='Programs that move you forward'
            text='Everything we run is built to help young people learn, connect and grow — from our flagship bootcamp to hands-on mentorship.'
          />
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
            className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'
          >
            {programs.map(({ title, text, image, to, icon: Icon }) => (
              <motion.div key={title} variants={fadeInUp}>
                <NavLink
                  to={to}
                  className='group flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow'
                >
                  <div className='relative h-52 overflow-hidden'>
                    <img
                      src={image}
                      alt={title}
                      className='h-full w-full object-cover group-hover:scale-105 transition-transform duration-700'
                    />
                    <span className='absolute top-4 left-4 h-11 w-11 rounded-xl bg-white/90 backdrop-blur flex items-center justify-center text-primary'>
                      <Icon className='w-5 h-5' />
                    </span>
                  </div>
                  <div className='flex flex-col flex-1 p-6'>
                    <h3 className='text-xl font-bold text-gray-900'>{title}</h3>
                    <p className='text-gray-600 text-sm leading-relaxed mt-2 flex-1'>
                      {text}
                    </p>
                    <span className='inline-flex items-center gap-2 text-primary font-semibold text-sm mt-5 group-hover:gap-3 transition-all'>
                      Learn more <ArrowRight className='w-4 h-4' />
                    </span>
                  </div>
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CSR BOOK DRIVE */}
      <BookDriveCallout />

      {/* HOW IT WORKS */}
      <section className='max-w-7xl mx-auto px-6 py-20 md:py-28'>
        <SectionHeading
          eyebrow='How it works'
          title='Your journey with Ignite Pro'
          center
        />
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className='grid md:grid-cols-3 gap-8 md:gap-10 relative'
        >
          <div className='hidden md:block absolute top-8 left-[16%] right-[16%] h-px bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10' />
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              variants={fadeInUp}
              className='relative text-center'
            >
              <div className='mx-auto h-16 w-16 rounded-full bg-primary text-white text-2xl font-black flex items-center justify-center shadow-lg shadow-primary/30'>
                {i + 1}
              </div>
              <h3 className='text-xl md:text-2xl font-bold text-gray-900 mt-6'>
                {step.title}
              </h3>
              <p className='text-gray-600 leading-relaxed mt-3 max-w-xs mx-auto'>
                {step.text}
              </p>
              <NavLink
                to={step.to}
                className='inline-flex items-center gap-2 text-primary font-semibold text-sm mt-4 hover:gap-3 transition-all'
              >
                {step.cta} <ArrowRight className='w-4 h-4' />
              </NavLink>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* EVENTS CAROUSEL */}
      <section className='bg-gray-950 text-white py-20 md:py-28'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12'>
            <div className='max-w-2xl'>
              <p className='text-purple-300 font-semibold uppercase tracking-widest text-sm mb-3'>
                Our events
              </p>
              <h2 className='text-3xl md:text-5xl font-black leading-tight'>
                Experiences that shape future leaders
              </h2>
            </div>
            <div className='flex gap-4'>
              <NavLink
                to='/upcomingevents'
                className='inline-flex items-center gap-2 bg-primary hover:bg-purple-700 px-6 py-3 rounded-full font-semibold transition'
              >
                Upcoming events
              </NavLink>
              <NavLink
                to='/pastevents'
                className='inline-flex items-center gap-2 border border-white/30 hover:bg-white/10 px-6 py-3 rounded-full font-semibold transition'
              >
                Past events
              </NavLink>
            </div>
          </div>

          <Swiper
            slidesPerView={1.15}
            spaceBetween={20}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.2 },
            }}
            modules={[Pagination, Autoplay]}
            style={{
              '--swiper-pagination-color': '#ffffff',
              '--swiper-pagination-bullet-inactive-color': '#ffffff',
              '--swiper-pagination-bullet-inactive-opacity': 0.3,
              paddingBottom: '3rem',
            }}
          >
            {pastEvents.map((event) => (
              <SwiperSlide key={event.title}>
                <NavLink
                  to='/pastevents'
                  className='group block relative h-96 rounded-3xl overflow-hidden'
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent' />
                  <div className='absolute bottom-0 p-6'>
                    <h3 className='text-2xl font-bold'>{event.title}</h3>
                    <p className='text-white/75 text-sm mt-1'>{event.tag}</p>
                  </div>
                </NavLink>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* FEATURED STORY + TESTIMONIALS */}
      <section className='max-w-7xl mx-auto px-6 py-20 md:py-28'>
        <SectionHeading
          eyebrow='Stories'
          title='Real people, real growth'
          text="Words from the students, graduates, founders and professionals who've been part of an Ignite Pro experience."
        />

        {featured && (
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className='relative bg-primary text-white rounded-[2rem] p-8 md:p-14 overflow-hidden mb-12'
          >
            <div className='absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-2xl' />
            <Quote className='w-12 h-12 text-white/30 mb-6' />
            <p className='relative text-xl md:text-3xl font-medium leading-relaxed max-w-4xl'>
              “{featured.quote}”
            </p>
            <div className='flex items-center gap-4 mt-8'>
              <div className='h-12 w-12 rounded-full bg-white text-primary font-bold flex items-center justify-center'>
                {getInitials(featured.role)}
              </div>
              <div>
                <p className='font-bold'>{featured.role}</p>
                <p className='text-white/70 text-sm'>
                  Ignite Pro Pitch Competition grant winner
                </p>
              </div>
            </div>
          </motion.div>
        )}

        <Swiper
          slidesPerView={1}
          spaceBetween={24}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination, Autoplay]}
          style={{
            '--swiper-pagination-color': '#5D1AE5',
            '--swiper-pagination-bullet-inactive-color': '#5D1AE5',
            '--swiper-pagination-bullet-inactive-opacity': 0.2,
            paddingBottom: '2.5rem',
          }}
        >
          {otherTestimonials.map((t, i) => (
            <SwiperSlide key={i} className='!h-auto'>
              <div className='bg-white border border-purple-100 rounded-2xl shadow-sm p-6 h-full flex flex-col'>
                {t.rating && (
                  <div className='flex items-center gap-1 mb-3'>
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={idx}
                        className={`w-4 h-4 ${
                          idx < t.rating
                            ? 'fill-orange-500 text-orange-500'
                            : 'text-purple-100'
                        }`}
                      />
                    ))}
                  </div>
                )}
                <p className='text-sm text-gray-700 leading-relaxed mb-5 flex-1 line-clamp-[8]'>
                  {t.quote}
                </p>
                <div className='flex items-center gap-3 pt-4 border-t border-purple-50'>
                  <div className='h-10 w-10 rounded-full bg-primary/10 text-primary font-semibold text-sm flex items-center justify-center shrink-0'>
                    {getInitials(t.name) || getInitials(t.role) || '★'}
                  </div>
                  <div>
                    {t.name?.trim() && t.name.trim() !== '.' && (
                      <p className='font-semibold text-gray-900 text-sm'>
                        {t.name}
                      </p>
                    )}
                    <p className='text-gray-500 text-xs'>{t.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* GALLERY PREVIEW */}
      <section className='bg-light py-20 md:py-24'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='flex flex-col md:flex-row md:items-end md:justify-between gap-6'>
            <SectionHeading
              eyebrow='Gallery'
              title='Moments from Accelerate 3.0'
            />
            <NavLink
              to='/gallery'
              className='inline-flex items-center gap-2 text-primary font-semibold mb-12 hover:gap-3 transition-all'
            >
              View full gallery <ArrowRight className='w-5 h-5' />
            </NavLink>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
            {galleryPreview.map((img, i) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className='overflow-hidden rounded-2xl aspect-[4/3]'
              >
                <img
                  src={img}
                  alt={`Accelerate 3.0 moment ${i + 1}`}
                  className='h-full w-full object-cover hover:scale-105 transition-transform duration-700'
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GET INVOLVED */}
      <section className='max-w-7xl mx-auto px-6 py-20 md:py-28'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className='relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary to-purple-900 text-white px-8 py-14 md:px-16 md:py-20 text-center'
        >
          <div className='absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-orange-400/20 blur-3xl' />
          <div className='absolute -top-24 -right-24 h-80 w-80 rounded-full bg-white/10 blur-3xl' />
          <h2 className='relative text-3xl md:text-5xl font-black leading-tight max-w-3xl mx-auto'>
            Help us ignite the next generation of leaders
          </h2>
          <p className='relative text-white/85 text-base md:text-lg max-w-2xl mx-auto mt-5'>
            Our bootcamps, grants and mentorship are made possible by generous
            partners, volunteers and donors. Maybe you'd like to be involved.
          </p>
          <div className='relative flex flex-col sm:flex-row justify-center gap-4 mt-10'>
            <NavLink
              to='/donate'
              className='inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-orange-50 transition'
            >
              <Heart className='w-5 h-5' /> Donate
            </NavLink>
            <NavLink
              to='/contact'
              className='inline-flex items-center justify-center gap-2 border border-white/50 px-8 py-4 rounded-full font-bold hover:bg-white/10 transition'
            >
              <HandHeart className='w-5 h-5' /> Partner or volunteer
            </NavLink>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Home;
