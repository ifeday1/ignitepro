import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
                  A video pitch (maximum 4 minutes), uploaded to YouTube/Vimeo
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
              <div className='mt-6 mb-10'>
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

        <div className='p-6 md:p-12 max-w-5xl mx-auto text-gray-800 space-y-8 font-sans'>
          <motion.h1
            className='bg-primary text-white text-lg md:text-xl font-medium px-4 py-2 w-fit rounded-lg'
            variants={fadeUp}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            PITCH COMPETITION TERMS & CONDITIONS
          </motion.h1>

          <motion.section
            variants={fadeUp}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            <p className='text-sm md:text-base leading-relaxed'>
              Individuals who meet the following criteria are eligible to apply
              to the Accelerate 2.0 Future Forward Founders Pitch Competition
              2025, delivered by IgnitePro Community.
              <br />
              <br />
              The Pitch Competition is open to applications from individual
              applicants or teams who are founders of New or Early-Stage
              businesses. An application must be submitted via the webpage by
              the Applicant and must be received latest 11:59PM on Friday 20
              June 2025.
              <br />
              <br />
              The top 5 finalists will be invited to pitch live at the Pitch
              Competition Final on Saturday 26 July 2025 at the Accelerate 2.0
              Bootcamp event taking place at Celebr8 Centre.
              <br />
              <br />
              <strong className='text-red-600'>
                Kindly note that every solution provided must end up in a
                scalable service or product. Failure to meet this very important
                criterion means an automatic disqualification.
              </strong>
            </p>
          </motion.section>

          {/* Section 1 – Eligibility */}
          <motion.section
            variants={fadeUp}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            <h2 className='text-lg font-semibold text-primary'>
              Section 1 – Eligibility Criteria
            </h2>
            <ol className='list-decimal ml-6 mt-2 space-y-1 text-sm md:text-base'>
              <li>Must be at least 18 years old.</li>
              <li>
                Have a viable product or Minimum Viable Product (MVP) with
                market traction.
              </li>
              <li>
                Must be developing a lawful, early-stage business or startup.
              </li>
              <li>
                Must be a founder or co-founder of the early stage or startup
                business.
              </li>
              <li>
                Must possess a personal Nigerian bank account in their name, or
                business Nigerian Bank account linked to their name.
              </li>
              <li>
                Must be able to provide supporting documentation as required by
                the organizing committee.
              </li>
              <li>
                Must submit the application via the website by{' '}
                <strong>11:59PM on Friday 20 June 2025</strong>:
                <ul className='list-disc ml-5 mt-1'>
                  <li>
                    Upload a maximum 4-minute video to YouTube or Vimeo or link
                    to Google Drive.
                  </li>
                  <li>
                    Attach the startup’s Pitch Deck (PDF, max 10 slides). Longer
                    entries will be disqualified.
                  </li>
                </ul>
              </li>
            </ol>
          </motion.section>

          {/* Section 2 – Successful Applicants */}
          <motion.section
            variants={fadeUp}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            <h2 className='text-lg font-semibold text-primary'>
              Section 2 – Successful Applicants
            </h2>
            <p className='mt-2 text-sm md:text-base'>
              Finalists must be available to be physically present to pitch live
              at the Finals on <strong>Saturday 26 July 2025</strong> at the
              Accelerate 2.0 Bootcamp event taking place at Celebr8 Centre. No
              exceptions will be considered.
            </p>
          </motion.section>

          {/* Section 3 – Application Assessment */}
          <motion.section
            variants={fadeUp}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            <h2 className='text-lg font-semibold text-primary'>
              Section 3 – Application Assessment
            </h2>
            <p className='text-sm md:text-base mt-2'>
              Applications will be assessed based on the following criteria:
            </p>
            <ol className='list-decimal ml-6 mt-2 space-y-1 text-sm md:text-base'>
              <li>
                <strong>Pitch Quality (30%)</strong> – Clear articulation,
                relevance, visuals, and structure.
              </li>
              <li>
                <strong>Market & Problem (20%)</strong> – Clear understanding of
                the target market and defined problem.
              </li>
              <li>
                <strong>Solution (20%)</strong> – Realistic, impactful, scalable
                solution.
              </li>
              <li>
                <strong>Team Capability (20%)</strong> – Team’s combined skills,
                experience, and commitment.
              </li>
              <li>
                <strong>Traction (10%)</strong> – Validated solutions and
                measurable progress.
              </li>
            </ol>
            <p className='mt-3'>
              Applicants will be informed of an update to their application
              status no later than <strong>26 June 2025</strong>.
            </p>
          </motion.section>

          {/* Section 4 – Prizes */}
          <motion.section
            variants={fadeUp}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            <h2 className='text-lg font-semibold text-primary'>
              Section 4 – Prizes
            </h2>
            <p className='mt-2 text-sm md:text-base'>
              Winners will be eligible to receive the following prizes:
            </p>
            <ul className='list-disc ml-6 mt-2 space-y-1 text-sm md:text-base'>
              <li>🥇 First place – ₦5,000,000</li>
              <li>🥈 Second place – ₦3,000,000</li>
              <li>🥉 Third place – ₦2,000,000</li>
            </ul>
            <p className='mt-2'>
              To claim their prizes, winners must accurately complete all
              necessary financial paperwork provided by the Ignite Pro
              Community.
            </p>
          </motion.section>

          {/* Section 5 – Media & Publicity */}
          <motion.section
            variants={fadeUp}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            <h2 className='text-lg font-semibold text-primary'>
              Section 5 – Media & Publicity
            </h2>
            <p className='mt-2 text-sm md:text-base'>
              The names of the winners and their team members, along with a
              brief description of their business or idea, will be featured on
              the Ignite Pro Community websites and channels, as well as shared
              with the broader media to promote the program in the future.
            </p>
          </motion.section>

          {/* Section 6 – Privacy */}
          <motion.section
            variants={fadeUp}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            <h2 className='text-lg font-semibold text-primary'>
              Section 6 – Privacy
            </h2>
            <p className='mt-2 text-sm md:text-base'>
              The IgnitePro Community is collecting your personal information to
              evaluate your application and communicate with you regarding its
              status. If your application is successful, your name will be
              published on the IgnitePro Community websites and channels.
            </p>
          </motion.section>

          {/* Apply Button */}
          <motion.div
            className='mt-6 flex justify-start'
            variants={fadeUp}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            <a
              href='https://www.instagram.com/ignite_procommunity?igsh=MWJ4M2ZqbmljcDY3YQ=='
              className='bg-primary hover:bg-primary text-white px-6 py-2 rounded-lg font-semibold text-sm md:text-base shadow-md'
            >
              Apply Now
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Criteria;
