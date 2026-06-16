import React from 'react';
import {
  ArrowRight,
  CheckCircle,
  Laptop,
  GraduationCap,
  MapPin,
  Users,
  ClipboardCheck,
} from 'lucide-react';
import SH from '../assets/SCimg.jpeg';
import Logo from '../assets/logo.png';
import ProductDiveLogo from '../assets/PD.png';

const ScholarshipPage = () => {
  const applyLink =
    'https://docs.google.com/forms/d/e/1FAIpQLSd88bp35shpYj0RkSF6z2AHq7ZvRBWe_q2Hx2NMwKcXSHfDwA/viewform';

  return (
    <div className='min-h-screen bg-white mt-20'>
      {/* Hero */}
      <section className='relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-orange-50'>
        <div className='max-w-7xl mx-auto px-6 lg:px-10 py-20'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <span className='inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold'>
                Accelerate 3.0 Scholarship
              </span>

              <div className='flex flex-wrap items-center gap-6 mb-8 mt m-8'>
                <div className='flex items-center gap-3'>
                  <img
                    src={Logo}
                    alt='Ignite Pro Community'
                    className='h-10 object-contain'
                  />
                </div>

                <div className='text-2xl text-gray-400'>×</div>

                <div className='flex items-center gap-3'>
                  <img
                    src={ProductDiveLogo}
                    alt='ProductDive'
                    className='h-10 object-contain'
                  />
                </div>
              </div>

              <h1 className=' text-5xl md:text-6xl font-bold leading-tight'>
                Earn a Scholarship to Learn
                <span className='text-purple-600 block'>
                  Product Management
                </span>
              </h1>

              <p className='mt-6 text-lg text-gray-600'>
                Accelerate 3.0 is providing scholarship opportunities for
                ambitious students, recent graduates, and early-career
                professionals in Rivers State to gain practical Product
                Management skills.
              </p>

              <div className='mt-8 flex flex-wrap gap-4'>
                <a
                  href={applyLink}
                  target='_blank'
                  rel='noreferrer'
                  className='bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2'
                >
                  Apply Now
                  <ArrowRight size={18} />
                </a>

                <a
                  href='#eligibility'
                  className='border border-gray-300 px-8 py-4 rounded-xl font-semibold'
                >
                  Check Eligibility
                </a>
              </div>

              <div className='mt-8 grid grid-cols-2 gap-4'>
                {[
                  '₦420,000 Scholarship Value',
                  'Industry Experts',
                  'Career Growth',
                  'Community Access',
                ].map((item) => (
                  <div
                    key={item}
                    className='flex items-center gap-2 text-gray-700'
                  >
                    <CheckCircle className='text-green-500' size={18} />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <img
                src={SH}
                alt='Scholarship'
                className='w-full max-w-lg mx-auto'
              />
            </div>
          </div>
          <div className='inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-600 px-4 py-2 rounded-full font-semibold mt-4'>
            ⏰ Applications Close: June 28, 2026
          </div>
        </div>
      </section>

      {/* Opportunity */}
      <section className='py-20'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='text-center'>
            <h2 className='text-4xl font-bold'>
              Your Opportunity to Start a Career in Product Management
            </h2>

            <p className='mt-6 text-lg text-gray-600 max-w-3xl mx-auto'>
              The Accelerate 3.0 Scholarship Programme is designed to help
              talented young people gain access to practical Product Management
              training, industry exposure, and career opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section id='eligibility' className='py-20 bg-gray-50'>
        <div className='max-w-6xl mx-auto px-6'>
          <h2 className='text-4xl font-bold text-center mb-14'>
            Eligibility Requirements
          </h2>

          <div className='grid md:grid-cols-2 gap-8'>
            <div className='bg-white p-8 rounded-2xl shadow-sm'>
              <GraduationCap className='text-purple-600 mb-4' />
              <h3 className='font-bold text-xl mb-3'>
                Academic / Professional Status
              </h3>

              <ul className='space-y-2 text-gray-600'>
                <li>• Graduated between 2022–2025</li>
                <li>• Final-year students graduating in 2026</li>
                <li>• Early-career professionals (1–3 years)</li>
              </ul>
            </div>

            <div className='bg-white p-8 rounded-2xl shadow-sm'>
              <MapPin className='text-purple-600 mb-4' />
              <h3 className='font-bold text-xl mb-3'>Location</h3>

              <p className='text-gray-600'>
                Must currently reside in Port Harcourt or Rivers State.
              </p>
            </div>

            <div className='bg-white p-8 rounded-2xl shadow-sm'>
              <Laptop className='text-purple-600 mb-4' />
              <h3 className='font-bold text-xl mb-3'>Device Readiness</h3>

              <p className='text-gray-600'>
                Applicants must own or have consistent access to a functional
                laptop throughout the programme.
              </p>
            </div>

            <div className='bg-white p-8 rounded-2xl shadow-sm'>
              <Users className='text-purple-600 mb-4' />
              <h3 className='font-bold text-xl mb-3'>Age Requirement</h3>

              <p className='text-gray-600'>
                Applicants must be between 18 and 35 years old.
              </p>
            </div>
            <div className='bg-white p-8 rounded-2xl shadow-sm md:col-span-2'>
              <ClipboardCheck className='text-purple-600 mb-4' />

              <h3 className='font-bold text-xl mb-3'>
                Accelerate 3.0 Registration Requirement
              </h3>

              <p className='text-gray-600 leading-relaxed'>
                Scholarship applicants must first register for Accelerate 3.0
                before submitting a scholarship application. Only candidates
                with a valid Accelerate 3.0 registration will be considered
                during the scholarship screening and selection process.
              </p>
            </div>
          </div>

          <div className='mt-10 bg-orange-50 border border-orange-200 rounded-2xl p-6'>
            <p className='font-semibold text-orange-700'>Important Notice:</p>

            <p className='text-orange-600 mt-2'>
              Failure to meet any single eligibility requirement will result in
              automatic disqualification during the screening process.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='bg-purple-700 py-20'>
        <div className='max-w-4xl mx-auto px-6 text-center text-white'>
          <h2 className='text-5xl font-bold'>Ready to Take the Next Step?</h2>

          <p className='mt-6 text-lg text-purple-100'>
            Limited scholarship slots are available. Apply now and begin your
            Product Management journey through Accelerate 3.0.
          </p>

          <a
            href={applyLink}
            target='_blank'
            rel='noreferrer'
            className='inline-flex mt-8 bg-white text-purple-700 px-8 py-4 rounded-xl font-bold'
          >
            Apply For Scholarship
          </a>
        </div>
      </section>
    </div>
  );
};

export default ScholarshipPage;
