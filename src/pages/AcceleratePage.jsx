import React from 'react';
import { motion } from 'framer-motion';

import HeroImage from '../assets/accelerate3.jpeg';

import Speaker1 from '../assets/Falade.jpeg';
import Speaker2 from '../assets/Olusola.jpg';

import Fire1 from '../assets/Nixon.jpeg';

import Panel1 from '../assets/Obi.jpeg';
import Panel2 from '../assets/Sola.jpeg';
import Panel3 from '../assets/Tracy.jpeg';
import Panel4 from '../assets/Hanson.jpeg';

import Fac from '../assets/Nei.jpeg';

const speakers = [
  {
    image: Speaker1,
    name: 'Adegbite Falade',
    role: ' MD/CEO of Aradel Holdings Plc',
  },
  {
    image: Speaker2,
    name: 'Olusola Olaleye',
    role: ' Serial Entrepreneur & Business Consultant',
  },
];

const fireside = [
  {
    image: Fire1,
    name: ' Nixon Iwedi',
    role: 'Managing Director/Chief Executive Officer of Signature Bank Limited',
  },
];

const panelists = [
  {
    image: Panel1,
    name: 'Obi Imemba ',
    role: 'Executive Director at TotalEnergies EP Nigeria Limited.',
  },
  {
    image: Panel2,
    name: 'Sola Adesakin',
    role: 'Founder of Smart Stewards Financial Advisory',
  },
  {
    image: Panel3,
    name: 'Tracy Diamonds',
    role: 'Founder and CEO of Saint Tracy',
  },
  {
    image: Panel4,
    name: 'Dr. (Mrs) Edughom Hanson',
    role: 'CEO of Rivulet Solutions Limited',
  },
];

const facilitator = [
  {
    image: Fac,
    name: 'Shammah Nei ',
    role: 'Managing Director at Renaissance Innovation Labs',
  },
];

const AcceleratePage = () => {
  return (
    <div className='bg-white overflow-hidden'>
      {/* ========================================
          HERO SECTION
      ========================================= */}
      <section className='relative min-h-screen flex items-center py-24 px-6 md:px-16 bg-gradient-to-br from-[#f8f7ff] via-white to-[#f2ecff]'>
        <div className='absolute top-0 left-0 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full'></div>
        <div className='absolute bottom-0 right-0 w-80 h-80 bg-orange-500/10 blur-3xl rounded-full'></div>

        <div className='relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='space-y-8'
          >
            <div className='inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-semibold'>
              🚀 Accelerate 3.0
            </div>

            <div>
              <h1 className='text-4xl md:text-6xl font-black leading-tight text-gray-900'>
                Future Proof:
                <span className='block text-primary mt-2'>
                  Sustaining Relevance
                </span>
              </h1>

              <div className='w-24 h-1.5 bg-primary rounded-full mt-6'></div>
            </div>

            <p className='text-lg text-gray-600 leading-relaxed'>
              Accelerate 3.0 is a transformational leadership and career
              development bootcamp designed to empower young professionals,
              graduates, entrepreneurs, and students with practical insights,
              strategic thinking, and future-ready skills needed to remain
              relevant in an ever-changing world.
            </p>

            <p className='text-lg text-gray-600 leading-relaxed'>
              Through keynote sessions, fireside chats, panel discussions,
              breakout workshops, networking opportunities, and mentorship,
              attendees will gain actionable knowledge that drives growth,
              innovation, and purposeful leadership.
            </p>

            {/* EVENT INFO */}
            <div className='grid sm:grid-cols-2 gap-5 pt-2'>
              <div className='bg-white rounded-2xl p-5 shadow-lg border border-gray-100'>
                <p className='text-sm uppercase tracking-widest text-primary font-semibold'>
                  Date & Time
                </p>

                <h3 className='text-2xl font-bold text-gray-900 mt-2'>
                  July 25, 2026
                </h3>

                <p className='text-gray-600 mt-1'>9:00AM – 4:00PM</p>
              </div>

              <div className='bg-white rounded-2xl p-5 shadow-lg border border-gray-100'>
                <p className='text-sm uppercase tracking-widest text-primary font-semibold'>
                  Venue
                </p>

                <h3 className='text-lg font-bold text-gray-900 mt-2'>
                  Celebr8 Event Centre
                </h3>

                <p className='text-gray-600 mt-1'>
                  35 Olu Obasanjo Road, Port Harcourt
                </p>
              </div>
            </div>

            {/* BUTTONS */}
            <div className='flex flex-wrap gap-4 pt-4'>
              <a
                href='https://bit.ly/4wb7gwc'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-primary text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:scale-105 transition duration-300'
              >
                Register Now
              </a>

              <a
                href='/contact'
                className='border-2 border-primary text-primary px-8 py-4 rounded-2xl font-semibold hover:bg-primary hover:text-white transition duration-300'
              >
                Partnership & Sponsorship
              </a>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='relative flex justify-center'
          >
            <div className='absolute inset-0 bg-primary/10 blur-3xl rounded-full'></div>

            <img
              src={HeroImage}
              alt='Accelerate 3.0'
              className='relative w-full max-w-lg rounded-[2rem] shadow-2xl border border-white/40'
            />
          </motion.div>
        </div>
      </section>
      <section className='py-20 px-6 md:px-16 bg-gradient-to-br from-purple-50 via-white to-orange-50'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            {/* Left Content */}
            <div>
              <span className='inline-flex items-center bg-purple-100 text-primary px-4 py-2 rounded-full text-sm font-semibold'>
                🎓 Scholarship Opportunity
              </span>

              <h2 className='mt-6 text-4xl md:text-5xl font-black text-gray-900 leading-tight'>
                Earn a Scholarship to Learn
                <span className='block text-primary'>Product Management</span>
              </h2>

              <p className='mt-6 text-lg text-gray-600 leading-relaxed'>
                Accelerate 3.0 is offering a limited number of scholarships
                worth
                <span className='font-bold text-primary'> ₦420,000 </span>
                to eligible students, recent graduates, and early-career
                professionals in Rivers State.
              </p>

              <div className='mt-8 space-y-4'>
                <div className='flex items-center gap-3'>
                  <span className='text-green-500 text-xl'>✓</span>
                  <span>Learn Product Management from industry experts</span>
                </div>

                <div className='flex items-center gap-3'>
                  <span className='text-green-500 text-xl'>✓</span>
                  <span>Scholarship covers the full programme fee</span>
                </div>

                <div className='flex items-center gap-3'>
                  <span className='text-green-500 text-xl'>✓</span>
                  <span>Open to students, graduates & early professionals</span>
                </div>

                <div className='flex items-center gap-3'>
                  <span className='text-green-500 text-xl'>✓</span>
                  <span>Applications close June 30, 2026</span>
                </div>
              </div>

              <div className='mt-10 flex flex-wrap gap-4'>
                <a
                  href='/accelerate3.0/scholarship'
                  className='bg-primary text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:scale-105 transition duration-300'
                >
                  Apply For Scholarship
                </a>

                <a
                  href='/accelerate3.0/scholarship'
                  className='border-2 border-primary text-primary px-8 py-4 rounded-2xl font-semibold hover:bg-primary hover:text-white transition duration-300'
                >
                  View Eligibility
                </a>
              </div>
            </div>

            {/* Right Card */}
            <div className='relative'>
              <div className='bg-white rounded-[2rem] shadow-2xl border border-gray-100 p-8'>
                <div className='flex justify-between items-start'>
                  <div>
                    <p className='text-sm uppercase tracking-widest text-primary font-semibold'>
                      Scholarship Value
                    </p>

                    <h3 className='text-5xl font-black text-gray-900 mt-2'>
                      ₦420K
                    </h3>
                  </div>

                  <div className='bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-semibold'>
                    Limited Slots
                  </div>
                </div>

                <div className='mt-8 space-y-4'>
                  <div className='flex justify-between border-b pb-3'>
                    <span className='text-gray-500'>Location</span>
                    <span className='font-semibold'>Rivers State</span>
                  </div>

                  <div className='flex justify-between border-b pb-3'>
                    <span className='text-gray-500'>Age Range</span>
                    <span className='font-semibold'>18 - 35 Years</span>
                  </div>

                  <div className='flex justify-between border-b pb-3'>
                    <span className='text-gray-500'>Laptop Required</span>
                    <span className='font-semibold'>Yes</span>
                  </div>

                  <div className='flex justify-between'>
                    <span className='text-gray-500'>Deadline</span>
                    <span className='font-semibold text-red-500'>
                      June 28, 2026
                    </span>
                  </div>
                </div>

                <a
                  href='/accelerate3.0/scholarship'
                  className='block text-center mt-8 bg-primary text-white py-4 rounded-xl font-semibold hover:opacity-90'
                >
                  Explore Scholarship Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          HIGHLIGHTS SECTION
      ========================================= */}
      <section className='py-20 px-6 md:px-16 bg-gray-50'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900'>
              Event Highlights
            </h2>

            <p className='mt-4 text-gray-600 max-w-2xl mx-auto'>
              An immersive experience designed to inspire growth, innovation,
              leadership, and meaningful connections.
            </p>
          </div>

          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {[
              'Keynote Sessions',
              'Fireside Chat',
              'Panel Discussions',
              'Breakout Workshops',
              'Networking & Exhibition',
              'Skill Sprint Sessions',
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:-translate-y-2 transition duration-300'
              >
                <div className='w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-2xl mb-5'>
                  ✦
                </div>

                <h3 className='text-xl font-bold text-gray-900'>{item}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          REUSABLE TEAM SECTION
      ========================================= */}

      <TeamSection title='Keynote Speakers' data={speakers} />

      <TeamSection title='Fireside Chat' data={fireside} bg='bg-purple-50' />

      <TeamSection title='Panelists' data={panelists} />

      <TeamSection title='Facilitator' data={facilitator} bg='bg-purple-50' />

      {/* ========================================
          CTA SECTION
      ========================================= */}
      <section className='py-24 px-6 md:px-16 bg-gradient-to-r from-primary to-purple-700 text-white text-center'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-4xl md:text-5xl font-black leading-tight'>
            Ready To Accelerate Your Future?
          </h2>

          <p className='mt-6 text-lg text-white/90 leading-relaxed'>
            Join hundreds of young leaders, professionals, and innovators for a
            transformative experience filled with learning, networking, and
            growth.
          </p>

          <a
            href='https://bit.ly/4wb7gwc'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block mt-10 bg-white text-primary px-10 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition duration-300'
          >
            Register For Accelerate 3.0
          </a>
        </div>
      </section>
    </div>
  );
};

/* ========================================
   TEAM SECTION COMPONENT
======================================== */

const TeamSection = ({ title, data, bg = 'bg-white' }) => {
  return (
    <section className={`py-20 px-6 md:px-16 ${bg}`}>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900'>
            {title}
          </h2>
        </div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {data.map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className='group bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:-translate-y-3 transition duration-300'
            >
              <div className='overflow-hidden'>
                <img
                  src={person.image}
                  alt={person.name}
                  className='w-full h-80 object-cover group-hover:scale-105 transition duration-500'
                />
              </div>

              <div className='p-6 text-center'>
                <h3 className='text-xl font-bold text-gray-900'>
                  {person.name}
                </h3>

                <p className='text-gray-600 mt-2 text-sm leading-relaxed'>
                  {person.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcceleratePage;
