import { React, useState } from 'react';
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
import Chuks from '../assets/chuks.png';
import Rev from '../assets/rev.png';
import Solo from '../assets/solo.png';
import Henry from '../assets/henry.jpeg';
import Han from '../assets/han.jpeg';
import Bel from '../assets/bel.jpeg';



const members = [
  {
    name: 'Oloruntoba Isehunwa',
    role: 'Co-ordinator',
    image: Oloruntoba,
    linkedin:
      'https://www.linkedin.com/in/oloruntoba-isehunwa-45434a22?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    desc: 'Oloruntoba Isehunwa is a Lead Wells Engineer at Renaissance Africa Energy (Formerly Shell Petroleum Development Company), driving performance improvement in wells execution. A Certified Trainer and IWCF-accredited Instructor, he teaches well engineering using advanced simulators and human factors principles. With years of experience in drilling, completions, and workovers across challenging terrains, he is passionate about mentoring young professionals. He lectures in Nigerian universities and has received awards for his contributions to human capital development. Toba is the Convener of IgnitePro Community, a youth development initiative focused on leadership and capacity building. He holds a Petroleum Engineering degree from the University of Ibadan and is married with two daughters.',
  },
  {
    name: 'Osase Igbinomwanhia',
    role: 'Project Manager',
    image: Osase,
    linkedin: '#',
    desc: 'Osase Igbinomwanhia is a Field Engineer working with an Indigenous Oil and Gas servicing company where she contributes to the successful planning and execution of well completion operations. With a B.Eng. in Chemical Engineering, she combines a solid technical foundation with hands-on industry experience in the oil and gas sector.Osase is passionate about well completions, continuous learning, and making a meaningful impact through her work. She is also deeply committed to helping others and approaches her career with integrity, collaboration, and a service-oriented mindset. As a Christian, her faith plays a guiding role in both her personal and professional life, shaping her values and approach to leadership.She currently works with Ignite Pro Community as the Project Manager.',
  },
  {
    name: 'Dorothy Douglas',
    role: 'Secretary',
    image: Dorothy,
    linkedin:
      'https://www.linkedin.com/in/dorothy-douglas-516467181?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    desc: 'Dorothy Douglas is an experienced Executive Assistant with a passion for organization and creative problem-solving. She currently serves as the secretary of Ignite Pro Community, where she supports communication and collaboration. Dorothy has worked closely with senior leaders, managing calendars, coordinating projects, and creating digital content using tools like Trello, Canva, and Notion. With a B.Sc. in Microbiology and certifications in Salesforce, HSE, and web development, she blends analytical thinking with creativity. She enjoys reading, journaling, and exploring new ideas.',
  },
  {
    name: 'Akinola Akinsola Peter',
    role: 'Communications Manager',
    image: Akinola,
    linkedin: 'https://www.linkedin.com/in/akinola-akinsola-peter-12b519333',
    desc: 'Akinola Akinsola Peter is a seasoned Human Resources professional with over seven years of experience, transitioning from the finance sector into oil and gas. Starting as an HR Assistant at Capitalfield Investment Group, he now serves as a Human Capital Management Officer at NNPC Engineering andTechnicalCompanyLimited, having also worked with Nigeria Liquified Natural Gas. His expertise spans payroll, employee relations, talent management, and learning and development. Passionate about mentorship, he leads Winners Career BC and serves as Communication Manager for the Ignite Pro Community. Akinola is purpose-driven, committed to excellence, and dedicated to making lasting impact through his work and community engagements.',
  },
  {
    name: 'Kpeale Legbara',
    role: 'Sponsorship Team Lead',
    image: Kpeale,
    linkedin: '#',
    desc: 'Kpeale Legbara is a registered nurse and self-taught frontend developer passionate about creating responsive, accessible websites. With a degree in Nursing Sciences from Bowen University, she balances her medical career with a thriving presence in tech. Kpeale specializes in React.js, TypeScript, and Tailwind CSS, and mentors aspiring developers through engaging, beginner-friendly content. Her mission is to inspire and empower the next generation of developers by making code approachable, practical, and impactful.',
  },
  {
    name: 'Chiemeri Mogbolu esq.',
    role: 'Volunteers Lead',
    image: Chiemeri,
    linkedin:
      'https://www.linkedin.com/in/chiemeri-mogbolu-b909a5108?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    desc: 'Chiemeri is a young, vibrant and experienced lawyer and certified procurement and supply chain professional. She gained her LLB and MA Public Relations from Sheffield Hallam University, UK. And has an LLM-in-view. A member of the Chartered Institute of Procurement and Supply Chain,she’s gathered years of work experience in both fields, including litigation, legal drafting, corporate legal services, and currently works in the oil and gas industry and agricultural industry as a procurement and supply chain personnel.Alongside her career, she juggles entrepreneurship as a professional event planner. She’s passionate about God, young people and family.',
  },
  {
    name: 'Biobele West',
    role: 'Partnership & Collaboration Lead',
    image: Biobele,
    linkedin: 'https://www.linkedin.com/in/biobele-west',
    desc: 'Biobele West is an international development consultant with 4+ years of experience in health systems strengthening, program management, and applied research. She has contributed to multi-million-dollar maternal and child health, and health systems strengthening initiatives, supportingthe design and implementation of evidence-based strategies. Passionate about youth empowerment, Biobele partners with organizations to deliver impact-driven programs. She currently serves as Partnerships and Collaborations Lead at Ignite Pro Community, a network dedicated to advancing the personal and professional growth of young Nigerians.',
  },
  {
    name: 'Igbinomwanhia Oghosa',
    role: 'Finance Director',
    image: Oghosa,
    linkedin: 'http://www.linkedin.com/in/oghosa-igbinomwanhia',
    desc: 'Oghosa Igbinomwanhia is a finance and business professional with a strong background in Financial operations, Business management and Strategy. She currently serves as the Financial Director on the committee of IgnitePro Community, where she leads efforts in budgeting, reporting, and ensuring transparent financial practices. With a BSc in Business Administration and experience in the finance sector, she brings structure, precision, and insight to organizational decision-making. Passionate about purpose-driven work, she supports youth-focused initiatives and community development projects. She is committed to excellence, integrity, and making lasting impact through both her professional contributions and volunteer engagements.',
  },
  {
    name: 'Joel Joshua Jr.',
    role: 'Student Liaison Lead',
    image: Joel,
    linkedin: '#',
    desc: 'Joel Joshua is a seasoned product designer with a proven track record of building innovative solutions that drive business growth, scalability, and social impact. With a keen eye for user-centered design, Joel has helped various organizations streamline their processes, enhance user experiences, and achieve their goals.Beyond his professional accomplishments, Joel is deeply passionate about empowering young people and building strong, vibrant communities. Through his contributions to Ignite Pro Community and The Youth Summit, he has played a pivotal role in shaping initiatives that promote leadership development, education, and economic empowerment. To date, his collective efforts have positively impacted the lives of over 5,000 young individuals in Rivers State, inspiring a new generation of leaders, entrepreneurs, and change-makers.',
  },
  {
    name: 'Fortune Jonathan',
    role: 'Team Lead for Corporate Social Responsibility',
    image: Fortune,
    linkedin: '#',
    desc: 'Fortune Jonathan is a Management Consultant at Wider Perspectives Limited, where she is building expertise across key areas such as marketing and communication, strategy, business development, and entrepreneurship.She also serves as the Team Lead for Corporate Social Responsibility at Ignite Pro Community, where she champions initiatives that drive meaningful community impact.Fortune holds both a Bachelor’s degree in Marketing and a Master’s degree in Business Administration from Covenant University.Beyond her professional pursuits, she is deeply passionate about the holistic development of children and is committed to using her time, expertise, and network to contribute to the transformation of Africa.',
  },
];

const trustees = [
  {
    name: 'Chuks Ikeobi',
    position: 'Asset Manager E&P Company',
    image: Chuks,
  },
  {
    name: 'Edughom Hanson',
    position: 'Trustee',
    image: Han,
  },
  {
    name: ' Henry Mogbolu (PhD)',
    position: 'ssociate VP Supply Chain Mnagement Heirs Energy Ltd',
    image: Henry,
  },
  {
    name: ' Belema Koleoso',
    position: 'Automation Technology Lead Africa, Schneider Electric',
    image: Bel,
  },
  {
    name: ' Oloruntoba Isehunwa',
    position: 'Leads Well Engineer Renaissance Africa Energy Company',
    image: Oloruntoba,
  },
  {
    name: 'Revd. Joy Umukoro',
    position: ' Lead Pastor New Covenant Baptist Church ',
    image: Rev,
  },
  {
    name: '  Solomon  Ayano',
    position: 'IT Professional Total Energies',
    image: Solo,
  },
];

const Executive = () => {
  const [expandedIndexes, setExpandedIndexes] = useState([]);

  const toggleExpanded = (index) => {
    setExpandedIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };
  return (
    <>
      <div className='px-6 md:px-24 py-16 sm:px-8 mt-10'>
        <h2 className='text-white bg-primary w-fit px-5 py-2 rounded-md text-xl font-medium mb-6'>
          THE EXECUTIVE COMMITTEE
        </h2>
        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {members.map((member, index) => {
            const isExpanded = expandedIndexes.includes(index);
            return (
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
                    <h3 className='text-lg font-medium text-gray-900'>
                      {member.name}
                    </h3>
                    <p className='text-sm text-primary font-medium'>
                      {member.role}
                    </p>
                  </div>
                  <a
                    href={member.linkedin}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='ml-auto text-primary hover:text-purple-800'
                  >
                    <FaLinkedin size={24} />
                  </a>
                </div>

                <hr className='border-purple-200 my-2' />

                <p
                  className={`text-sm text-gray-700 leading-relaxed transition-all duration-300 ${
                    isExpanded ? '' : 'line-clamp-2'
                  }`}
                >
                  {member.desc}
                </p>

                <button
                  onClick={() => toggleExpanded(index)}
                  className='text-primary mt-2 text-sm font-medium hover:underline'
                >
                  {isExpanded ? 'View Less' : 'View More'}
                </button>
              </motion.div>
            );
          })}
        </div>

        <div className='mt-16'>
          <h2 className='text-white bg-primary w-fit px-5 py-2 rounded-md text-xl font-medium mb-6'>
            BOARD OF TRUSTEES
          </h2>
          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {trustees.map((trustee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className='bg-white border-2 border-purple-200 p-4 rounded-2xl shadow-md hover:shadow-lg transition-all text-center'
              >
                <img
                  src={trustee.image}
                  alt={trustee.name}
                  className='w-20 h-20 object-cover rounded-full mx-auto border-2 border-purple-400 mb-4'
                />
                <h3 className='text-lg font-medium text-gray-900'>
                  {trustee.name}
                </h3>
                <p className='text-sm text-primary font-medium'>
                  {trustee.position}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Executive;
