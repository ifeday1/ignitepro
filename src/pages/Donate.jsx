import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HeartHandshake,
  Copy,
  Building2,
  Landmark,
  ShieldCheck,
  CheckCircle2,
  X,
} from 'lucide-react';

const Donate = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastText, setToastText] = useState('');

  const accountDetails = {
    bank: 'First Bank of Nigeria',
    accountName: 'Pro-ignite Youth Development Network',
    accountNumber: '2048570923',
  };

  // COPY FUNCTION
  const copyToClipboard = async (text, label) => {
    try {
      await navigator.clipboard.writeText(text);

      setToastText(`${label} copied successfully`);
      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='bg-gray-50 min-h-screen pt-24 md:pt-28 pb-16 overflow-hidden relative'>
      {/* =========================
          CUSTOM TOAST
      ========================= */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className='fixed bottom-6 right-4 md:right-6 z-50'
          >
            <div className='flex items-center gap-3 bg-white border border-green-100 shadow-2xl rounded-2xl px-4 py-4 min-w-[280px] max-w-[90vw]'>
              <div className='h-10 w-10 rounded-full bg-green-100 flex items-center justify-center'>
                <CheckCircle2 className='text-green-600 w-5 h-5' />
              </div>

              <div className='flex-1'>
                <h4 className='font-semibold text-gray-800'>
                  Copied Successfully
                </h4>

                <p className='text-sm text-gray-500'>{toastText}</p>
              </div>

              <button
                onClick={() => setShowToast(false)}
                className='text-gray-400 hover:text-gray-700 transition'
              >
                <X className='w-4 h-4' />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================
          HERO SECTION
      ========================= */}
      <section className='relative px-4 sm:px-6 md:px-10 lg:px-12'>
        <div className='max-w-7xl mx-auto'>
          <div className='relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#2B0A57] via-[#5B21B6] to-[#7C3AED] px-5 py-12 sm:px-8 md:px-12 md:py-20 shadow-2xl'>
            {/* GLOW EFFECTS */}
            <div className='absolute -top-20 -left-16 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full'></div>

            <div className='absolute bottom-0 right-0 w-72 h-72 bg-orange-400/20 blur-3xl rounded-full'></div>

            <div className='relative z-10 grid grid-cols-1 xl:grid-cols-2 gap-12 items-center'>
              {/* =========================
                  LEFT CONTENT
              ========================= */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className='text-center xl:text-left'
              >
                {/* TAG */}
                <div className='inline-flex items-center gap-2 bg-white/10 border border-white/10 backdrop-blur-xl px-4 py-2 rounded-full mb-6'>
                  <HeartHandshake className='w-4 h-4 text-orange-300' />

                  <span className='text-sm tracking-wide text-white'>
                    Support Ignite Pro
                  </span>
                </div>

                {/* HEADING */}
                <h1 className='text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-white'>
                  Empower The Next
                  <span className='block text-orange-300'>
                    Generation of Leaders
                  </span>
                </h1>

                {/* TEXT */}
                <p className='mt-6 text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto xl:mx-0'>
                  Your support helps Ignite Pro Community continue building,
                  mentoring, equipping, and empowering young professionals,
                  students, and future leaders through impactful initiatives,
                  leadership programs, mentorship, and community outreach.
                </p>

                {/* STATS */}
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10'>
                  <div className='bg-white/10 backdrop-blur-xl rounded-2xl p-5 border border-white/10 text-left'>
                    <h3 className='text-3xl md:text-4xl font-black text-white'>
                      1200+
                    </h3>

                    <p className='text-sm text-gray-200 mt-1'>
                      Young Professionals Reached
                    </p>
                  </div>

                  <div className='bg-white/10 backdrop-blur-xl rounded-2xl p-5 border border-white/10 text-left'>
                    <h3 className='text-3xl md:text-4xl font-black text-white'>
                      244
                    </h3>

                    <p className='text-sm text-gray-200 mt-1'>
                      Students Supported
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* =========================
                  RIGHT CARD
              ========================= */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className='w-full'
              >
                <div className='bg-white text-gray-800 rounded-[2rem] shadow-2xl p-5 sm:p-7 md:p-10'>
                  {/* HEADER */}
                  <div className='flex flex-col sm:flex-row sm:items-center gap-4 mb-8'>
                    <div className='h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0'>
                      <Landmark className='text-primary w-7 h-7' />
                    </div>

                    <div>
                      <h3 className='text-2xl font-bold'>Donation Details</h3>

                      <p className='text-gray-500 text-sm'>
                        Support the vision of Ignite Pro
                      </p>
                    </div>
                  </div>

                  {/* ACCOUNT DETAILS */}
                  <div className='space-y-5'>
                    {/* BANK */}
                    <div className='border border-gray-200 rounded-2xl p-4 md:p-5'>
                      <p className='text-sm text-gray-500 mb-3'>Bank Name</p>

                      <div className='flex items-start sm:items-center justify-between gap-4'>
                        <div className='flex items-start gap-3 min-w-0'>
                          <Building2 className='w-5 h-5 text-primary shrink-0 mt-1 sm:mt-0' />

                          <h4 className='font-semibold text-base md:text-lg break-words'>
                            {accountDetails.bank}
                          </h4>
                        </div>

                        <button
                          onClick={() =>
                            copyToClipboard(accountDetails.bank, 'Bank name')
                          }
                          className='text-primary hover:scale-110 transition shrink-0'
                        >
                          <Copy className='w-5 h-5' />
                        </button>
                      </div>
                    </div>

                    {/* ACCOUNT NAME */}
                    <div className='border border-gray-200 rounded-2xl p-4 md:p-5'>
                      <p className='text-sm text-gray-500 mb-3'>Account Name</p>

                      <div className='flex items-start justify-between gap-4'>
                        <h4 className='font-semibold text-base md:text-lg break-words'>
                          {accountDetails.accountName}
                        </h4>

                        <button
                          onClick={() =>
                            copyToClipboard(
                              accountDetails.accountName,
                              'Account name',
                            )
                          }
                          className='text-primary hover:scale-110 transition shrink-0'
                        >
                          <Copy className='w-5 h-5' />
                        </button>
                      </div>
                    </div>

                    {/* ACCOUNT NUMBER */}
                    <div className='border-2 border-primary rounded-2xl p-4 md:p-5 bg-primary/5'>
                      <p className='text-sm text-gray-500 mb-3'>
                        Account Number
                      </p>

                      <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
                        <h4 className='font-black text-2xl sm:text-3xl tracking-wider text-primary break-all'>
                          {accountDetails.accountNumber}
                        </h4>

                        <button
                          onClick={() =>
                            copyToClipboard(
                              accountDetails.accountNumber,
                              'Account number',
                            )
                          }
                          className='bg-primary text-white p-3 rounded-xl hover:scale-105 transition w-fit'
                        >
                          <Copy className='w-5 h-5' />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* SECURITY */}
                  <div className='mt-8 flex items-start gap-3 bg-green-50 border border-green-200 rounded-2xl p-4'>
                    <ShieldCheck className='text-green-600 w-5 h-5 mt-0.5 shrink-0' />

                    <p className='text-sm text-green-700 leading-relaxed'>
                      Every donation supports impactful leadership initiatives,
                      mentorship programs, and community development projects.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

    
    
    </div>
  );
};

export default Donate;
