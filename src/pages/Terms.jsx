import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const Terms = () => {
  return (
    <>
      <div className='p-6 md:p-12 max-w-5xl mx-auto text-gray-800 space-y-8 font-sans mt-14'>
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
            Individuals who meet the following criteria are eligible to apply to
            the Accelerate 2.0 Future Forward Founders Pitch Competition 2025,
            delivered by IgnitePro Community.
            <br />
            <br />
            The Pitch Competition is open to applications from individual
            applicants or teams who are founders of New or Early-Stage
            businesses. An application must be submitted via the webpage by the
            Applicant and must be received latest 11:59PM on Friday 20 June
            2025.
            <br />
            <br />
            The top 5 finalists will be invited to pitch live at the Pitch
            Competition Final on Saturday 26 July 2025 at the Accelerate 2.0
            Bootcamp event taking place at Celebr8 Centre.
            <br />
            <br />
            <strong className='text-red-600'>
              Kindly note that every solution provided must end up in a scalable
              service or product. Failure to meet this very important criterion
              means an automatic disqualification.
            </strong>
          </p>
        </motion.section>

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
              Have a viable product or Minimum Viable Product (MVP) with market
              traction.
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
                  Upload a maximum 4-minute video to YouTube or Vimeo or link to
                  Google Drive.
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
            Applicants will be informed of an update to their application status
            no later than <strong>26 June 2025</strong>.
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
            necessary financial paperwork provided by the Ignite Pro Community.
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
            The names of the winners and their team members, along with a brief
            description of their business or idea, will be featured on the
            Ignite Pro Community websites and channels, as well as shared with
            the broader media to promote the program in the future.
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
      </div>
    </>
  );
};

export default Terms;
