import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};
const Criteria = () => {
  return (
    <>
      <div className=' bg-light mt-20'>
        <div className='p-6 md:p-12 max-w-5xl mx-auto space-y-10 text-gray-800 font-sans'>
          {/* Eligibility Criteria */}
          <motion.section
            variants={fadeIn}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            <h2 className='bg-primary text-white px-4 py-2 font-medium rounded-lg w-fit text-lg'>
              ELIGIBILITY CRITERIA
            </h2>
            <ul className='mt-4 space-y-2 list-none text-sm md:text-base'>
              {[
                'Must be at least 18 years old.',
                'Must be a founder or co-founder of a registered business entity.',
                'The business or startup must have been in operation for more than six months',
                'Must have a Minimum Viable Product with market traction (preferably with revenue).',
                'The business must address purpose-driven sectors including—but not limited to—education, agriculture, hardware technology, and healthcare.',
                'Must possess a personal or business Nigerian bank account in the applicant’s name.',
                'Must be able to provide supporting documentation when required.',
                'Must be available to pitch live at the finals on Saturday, 26 July 2025 at Celebr8 Centre, Port Harcourt.',
              ].map((item, index) => (
                <li key={index} className='flex items-start gap-2'>
                  <span className='text-primary'>✗</span> {item}
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Application Requirements */}
          <motion.section
            variants={fadeIn}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            <h2 className='bg-primary text-white px-4 py-2 font-medium rounded-lg w-fit text-lg'>
              APPLICATION REQUIREMENTS
            </h2>
            <div className='mt-4 text-sm md:text-base'>
              <p className='font-bold'>Applicants must submit:</p>
              <ul className='list-disc ml-5 mt-2 space-y-1'>
                <li>
                  A video pitch (maximum 3 minutes), uploaded to YouTube/Vimeo
                  or linked via Google Drive.
                </li>
                <li>
                  A pitch deck (PDF, maximum 10 slides) outlining: the problem
                  being addressed, the proposed solution, team background,
                  traction achieved, and alignment with judging criteria.
                </li>
              </ul>
              <p className='mt-4'>
                <strong>Deadline:</strong> All submissions must be received by{' '}
                <strong>11:59 PM on Friday, 20 June 2025</strong>.
              </p>
              <p className='mt-2 text-sm italic text-gray-600'>
                Late or incomplete applications will not be accepted. Every
                submission must aim to culminate in a scalable product or
                service—this is non-negotiable.
              </p>
            </div>
          </motion.section>

          {/* Judging Criteria */}
          <motion.section
            variants={fadeIn}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            <h2 className='bg-primary text-white px-4 py-2 font-medium rounded-lg w-fit text-lg'>
              THE JUDGING CRITERIA
            </h2>
            <div className='mt-4 text-sm md:text-base space-y-3'>
              <div>
                <p className='font-semibold'>
                  1. Overall quality of your Pitch and Pitch Deck (30%)
                </p>
                <p>
                  Your pitch is communicated clearly, confidently, and
                  engagingly, capturing the audience’s interest. The pitch deck
                  is professionally designed, well-structured, and features
                  high-quality visuals and clear content.
                </p>
              </div>
              <div>
                <p className='font-semibold'>2. Market & Problem (20%)</p>
                <p>
                  Demonstrates an understanding of the target audience and the
                  problem you are solving for them.
                </p>
              </div>
              <div>
                <p className='font-semibold'>3. Solution (20%)</p>
                <p>
                  Describe how your product, service, or solution effectively
                  addresses the identified problem, and outline any anticipated
                  positive social or environmental impact your startup aims to
                  achieve.
                </p>
              </div>
              <div>
                <p className='font-semibold'>4. Team Capability (20%)</p>
                <p>
                  Describe how your team is particularly setup for success to
                  deliver your solution.
                  <br />
                  For example: “We believe we are the best team to achieve this
                  because we have a great combination of skills and experience.”
                </p>
              </div>
              <div>
                <p className='font-semibold'>5. Traction (10%)</p>
                <p>
                  Demonstrate to us what you have achieved so far.
                  <br />
                  For example: “We have proven that the nation needs and want
                  our solution. We already tested the BETA version of our app
                  with some persons and they all had a positive experience.”
                </p>
              </div>

              {/* Other Info */}
              <div className='mt-6'>
                <p className='font-semibold'>Other information:</p>
                <p>
                  All submitted applications will be reviewed, and five
                  finalists will be selected to compete in the live Pitch
                  Competition Final, scheduled for{' '}
                  <strong>Saturday, 26 July 2025</strong>, during the Accelerate
                  2.0 Bootcamp at the Celebr8 Centre.
                </p>
                <p className='mt-2'>
                  A panel of expert judges will evaluate the finalists’ pitches,
                  including a live Q&A session with each team. Following the
                  judges’ deliberation, the winners will be announced during the
                  evening celebration event.
                </p>
                <p className='mt-2'>
                  We encourage you to review the full competition details and
                  eligibility requirements outlined in the Terms and Conditions
                  page. Wishing you the best of luck!
                </p>
              </div>
            </div>
          </motion.section>
        </div>

        <motion.a
          href='/terms-and-condition'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeInUp}
          className='text-primary font-semibold hover:underline text-sm px-6 md:px-64'
        >
          Terms and Condition
        </motion.a>

        {/* Apply Button */}
        <div className=' px-6 md:px-64 pb-10'>
          <NavLink to='/pitch-form'>
            <button className='bg-primary  text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition'>
              Apply Now
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Criteria;
