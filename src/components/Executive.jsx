import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';

import Oloruntoba from '../assets/Oloruntoba.png';
import Osase from '../assets/Osase.png';
import Dorothy from '../assets/Dorothy.png';
import Akinola from '../assets/Akinola.png';
import Kpeale from '../assets/Kpeale.png';
import Chiemeri from '../assets/Chiemeri.png';
import Biobele from '../assets/Biobele.png';
import Oghosa from '../assets/Oghosa.png';
import Joel from '../assets/Joel.png';
import Fortune from '../assets/Fortune.png';

const members = [
  {
    name: 'Oloruntoba Isehunwa',
    role: 'Co-ordinator',
    image: Oloruntoba,
    linkedin: '#',
    desc: 'Oloruntoba is a Lead Wells Engineer...',
  },
  {
    name: 'Osase Igbinomwanhia',
    role: 'Project Manager',
    image: Osase,
    linkedin: '#',
    desc: 'Osase is a Field Engineer working with...',
  },
  {
    name: 'Dorothy Douglas',
    role: 'Secretary',
    image: Dorothy,
    linkedin: '#',
    desc: 'Dorothy is an experienced Executive Assistant...',
  },
  {
    name: 'Akinola Akinsola Peter',
    role: 'Communications Manager',
    image: Akinola,
    desc: 'Akinola is a seasoned Human Resources professional...',
  },
  {
    name: 'Kpeale Legbara',
    role: 'Sponsorship Team Lead',
    image: Kpeale,
    linkedin: '#',
    desc: 'Kpeale is a nurse and self-taught developer...',
  },
  {
    name: 'CHIEMERI MOGBOLU esq.',
    role: 'Volunteers Lead',
    image: Chiemeri,
    linkedin: '#',
    desc: 'Chiemeri is a seasoned procurement and supply chain professional...',
  },
  {
    name: 'Biobele West',
    role: 'Partnership & Collaboration Lead',
    image: Biobele,
    linkedin: '#',
    desc: 'Biobele is an international development consultant...',
  },
  {
    name: 'Igbinomwanhia Oghosa',
    role: 'Finance Director',
    image: Oghosa,
    linkedin: '#',
    desc: 'Oghosa is a finance and business professional...',
  },
  {
    name: 'Joel Joshua Jr.',
    role: 'Student Liaison Lead',
    image: Joel,
    linkedin: '#',
    desc: 'Joel is a seasoned product designer...',
  },
  {
    name: 'Fortune Jonathan',
    role: 'Team Lead for Corporate Social Responsibility',
    image: Fortune,
    linkedin: '#',
    desc: 'Fortune is a Management Consultant at Wider Perspectives...',
  },
];

const Executive = () => {
  return (
    <>
      <div className='bg-pink-50 py-12 px-4 sm:px-8 md:px-12'>
        <h2 className='text-purple-700 text-2xl sm:text-3xl font-bold mb-10 text-center'>
          THE EXECUTIVE COMMITTEE
        </h2>
        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className='bg-white border-2 border-purple-200 p-4 rounded-2xl shadow-md hover:shadow-lg transition-all'
            >
              <div className='flex items-center gap-4 mb-4'>
                <img
                  src={member.image}
                  alt={member.name}
                  className='w-16 h-16 object-cover rounded-full border-2 border-purple-400'
                />
                <div>
                  <h3 className='text-lg font-semibold text-gray-900'>
                    {member.name}
                  </h3>
                  <p className='text-sm text-purple-700 font-medium'>
                    {member.role}
                  </p>
                </div>
                <a
                  href={member.linkedin}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='ml-auto text-purple-600 hover:text-purple-800'
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
              <hr className='border-purple-200 my-2' />
              <p className='text-sm text-gray-700 leading-relaxed'>
                {member.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Executive;
