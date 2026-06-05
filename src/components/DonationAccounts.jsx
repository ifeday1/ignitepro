import React, { useState } from 'react';
import { Copy, CheckCircle2 } from 'lucide-react';

import firstBankLogo from '../assets/firstbank.png';
import zenithLogo from '../assets/zenith.png';

const DonationAccounts = () => {
  const [toast, setToast] = useState('');

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);

    setToast(`${label} copied successfully`);

    setTimeout(() => {
      setToast('');
    }, 3000);
  };

  const accounts = [
    {
      bank: 'First Bank of Nigeria',
      accountName: 'Pro-Ignite Youth Development Network',
      accountNumber: '2048570923',
      logo: firstBankLogo,
    },

    {
      bank: 'Zenith Bank Plc',
      accountName: 'Pro-Ignite Youth Development Network',
      accountNumber: '1312272244',
      logo: zenithLogo,
    },
  ];

  return (
    <section id='donation-accounts' className='py-20 px-6 bg-gray-50 relative'>
      {/* TOAST */}
      {toast && (
        <div className='fixed top-24 right-5 z-50'>
          <div className='flex items-center gap-3 bg-green-600 text-white px-5 py-3 rounded-2xl shadow-xl'>
            <CheckCircle2 size={20} />
            <span>{toast}</span>
          </div>
        </div>
      )}

      <div className='max-w-7xl mx-auto'>
        {/* HEADING */}
        <div className='text-center mb-16'>
          <span className='inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4'>
            Donate Securely
          </span>

          <h2 className='text-4xl md:text-5xl font-black text-gray-900'>
            Donation Accounts
          </h2>

          <p className='mt-5 text-gray-600 max-w-2xl mx-auto'>
            Your contribution helps Ignite Pro continue empowering young
            professionals, supporting students, and creating transformational
            leadership experiences.
          </p>
        </div>

        {/* ACCOUNTS */}
        <div className='grid md:grid-cols-2 gap-8'>
          {accounts.map((account, index) => (
            <div
              key={index}
              className='group bg-white rounded-[32px] p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100'
            >
              {/* BANK HEADER */}
              <div className='flex items-center gap-4 mb-8'>
                <div className='h-16 w-16 rounded-2xl bg-gray-50 flex items-center justify-center overflow-hidden'>
                  <img
                    src={account.logo}
                    alt={account.bank}
                    className='h-10 object-contain'
                  />
                </div>

                <div>
                  <h3 className='font-bold text-xl text-gray-900'>
                    {account.bank}
                  </h3>

                  <p className='text-gray-500 text-sm'>Donation Account</p>
                </div>
              </div>

              {/* ACCOUNT NAME */}
              <div className='mb-6'>
                <p className='text-gray-500 text-sm mb-2'>Account Name</p>

                <h4 className='font-semibold text-lg text-gray-900 leading-snug'>
                  {account.accountName}
                </h4>
              </div>

              {/* ACCOUNT NUMBER */}
              <div className='mb-8'>
                <p className='text-gray-500 text-sm mb-2'>Account Number</p>

                <h3 className='text-3xl md:text-4xl font-black text-primary tracking-wide break-all'>
                  {account.accountNumber}
                </h3>
              </div>

              {/* COPY BUTTON */}
              <button
                onClick={() =>
                  copyToClipboard(account.accountNumber, 'Account Number')
                }
                className='w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white py-4 rounded-2xl font-semibold transition-all duration-300'
              >
                <Copy size={18} />
                Copy Account Number
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DonationAccounts;
