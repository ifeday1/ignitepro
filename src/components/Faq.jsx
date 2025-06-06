import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const faqs = [
  {
    question: 'What is the application deadline for this pitch competition?',
    answer: 'Application deadline is 11:59PM on Monday 30th June 2025.',
  },
  {
    question:
      'Can you provide more details about the judging criteria or what you are looking for in successful pitches?',
    answer:
      'Judging is based on pitch quality, market clarity, innovation, team strength, and traction.',
  },
  {
    question: 'What are the eligibility criteria or restrictions if any?',
    answer:
      'You must be at least 18, founder/co-founder of an early-stage startup, and submit required materials on time.',
  },
  {
    question:
      'What type of prizes do the winners of the competition stand to receive?',
    answer: '1st: ₦5M, 2nd: ₦3M, 3rd: ₦2M.',
  },
  {
    question:
      'Is there an application fee associated with participating in this competition?',
    answer: 'No, applying is completely free of charge.',
  },
  {
    question:
      'How many startups or founders will be selected to pitch in the competition?',
    answer: 'Top 5 finalists will be invited to pitch live.',
  },
  {
    question:
      'When I apply, can I save my application and come back to it at another time?',
    answer: 'Applications must be completed and submitted in one session.',
  },
  {
    question:
      'Are there any specific sectors or industries that the competition is focused on, or is it open to startups from any fields?',
    answer:
      'The competition is open to all sectors as long as the solution is scalable.',
  },
  {
    question:
      'Do I need to have a registered business to apply for the pitch competition?',
    answer:
      'No, but you must have a personal or business Nigerian bank account.',
  },
  {
    question:
      'Can you provide more information about the evaluation and selection process of the pitch competition?',
    answer:
      'Evaluations are based on predefined criteria and assessed by an internal panel.',
  },
  {
    question:
      'Will there be any opportunities for networking with mentors or other startups during the competition?',
    answer: 'Yes, especially during the Bootcamp event at Celebr8 Centre.',
  },
  {
    question: 'When will I be notified if my application has been successful?',
    answer: 'No later than 26 June 2025.',
  },
  {
    question:
      'Is there a panel of judges or mentors involved in the competition and can you provide information about their expertise?',
    answer:
      'Yes, the panel includes experienced entrepreneurs, investors, and innovation experts.',
  },
  {
    question: 'When will the winners be announced?',
    answer: 'Winners will be announced at the live pitch on 26 July 2025.',
  },
  {
    question:
      'Are there any specific requirements for the pitch deck or presentation materials that applicants need to follow?',
    answer:
      'Yes, PDF format, max 10 slides, and a video pitch of max 4 minutes.',
  },
  {
    question: 'Do I need to know the net-worth of my target market?',
    answer: 'Yes, it helps define your market opportunity clearly.',
  },
  {
    question:
      'Do we need to discuss our business model, competitors and go-to-market strategy in the pitch?',
    answer: 'Yes, especially in your pitch deck and video.',
  },
  {
    question:
      'Do I need to know the net-worth or its value over pitch deck slides or for the video or we need to show our faces/my target market?',
    answer:
      'You should focus on clearly showing your traction and understanding of your target market.',
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };
  return (
    <>
      <div className='max-w-2xl mx-auto px-4 py-8'>
        <h1 className='bg-primary text-white px-4 py-2 text-lg md:text-xl font-medium rounded-md w-fit'>
          FREQUENTLY ASKED QUESTIONS (FAQS)
        </h1>

        <div className='mt-6 space-y-4 '>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className='border border-gray-300 rounded-lg overflow-hidden shadow-sm'
            >
              <button
                onClick={() => toggle(i)}
                className='w-full flex justify-between items-center px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors'
              >
                <span className='text-left font-medium text-sm md:text-base'>{`${String(
                  i + 1
                ).padStart(2, '0')}  ${faq.question}`}</span>
                <span className='text-xl'>{openIndex === i ? '−' : '+'}</span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key='content'
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className='px-4 py-3 text-sm bg-white border-t text-gray-700'>
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <p className=' text-center mt-5'>
          For further enquiries, kindly send mail to
          igniteprocommunity@gmail.com.
        </p>

        {/* Apply Button */}
        <div className=' px-6 md:px-64 pb-10 pt-7'>
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

export default Faq;
