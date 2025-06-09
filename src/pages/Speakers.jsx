import SpeakerCard from '../components/SpeakerCard';
// import { motion } from 'framer-motion';
import Oladiwura from '../assets/Oladiwura.jpeg';
import Uche from '../assets/Uche.jpeg';
import Babatunde from '../assets/Babatunde.jpeg';
import Olamide from '../assets/Olamide.jpeg';
import David from '../assets/David Adepoju.jpeg';
import Okey from '../assets/Okey.jpeg';
import Tonye from '../assets/Tonye.jpeg';
import { motion } from 'framer-motion';

const speakers = [
  {
    name: 'Tonye Patrick Cole',
    title:
      ' Co-founded and served as the former Group Executive Director of Sahara Group',
    bio: 'Tonye Patrick Cole, MNI, co-founded and served as the former Group Executive Director of Sahara Group, a prominent energy conglomerate active in 38 countries with an annual turnover exceeding $11 billion. As an alumnus of UNILAG, Harvard Business School, and Oxford University, he brings his diverse academic background to his work as a philanthropist and youth advocate, spearheading initiatives such as the Nehemiah Youth Empowerment Initiative, The REACH, and Cole’s Tech Yard.  He also chairs Enactus Nigeria, and supports various causes, including Down Syndrome awareness and the Slum2School project. Recognized as one of Africa’s 100 most influential figures by The New African, he is a two-time gubernatorial candidate for Rivers State and is committed to mentoring young people. ',
    image: Tonye,
  },

  {
    name: 'Dr. Okey Nwuke',
    title: 'Finance and corporate governance expert',
    bio: 'Dr. Okey Nwuke is a seasoned finance and corporate governance expert with over 33 years of experience leading Nigeria’s banking and corporate sectors. He currently serves as a Non-Executive Director at Access Bank Plc and also across several blue-chip firms and has held previous roles as Group Executive Director, Access Bank and Board Member, CoscharisGroup. He holds a DBA from Walden University and currently serves in the capacity of Senior Fellow at Lagos Business School, driving thought leadership in Family Business Management and governance. An accomplished academic and industry leader, Dr. Nwuke champions sustainability and effective leadership succession in family businesses across Nigeria and emerging markets. ',
    image: Okey,
  },

  {
    name: 'David Adepoju',
    title: 'Managing Partner at Co-creation Hub',
    bio: ' Oluwaseun ADEPOJU currently serves as a Managing Partner at Co-creation Hub where he leads the design of  innovative solutions to Africa’s major challenges. Prior to his tenure at CcHUB, he held a faculty position at the African Leadership University in Kigali, Rwanda. Mr. Adepoju is recognised as a thought leader in technology, bringing over a decade of experience in innovation, technology, and digital transformation. ',
    image: David,
  },

  {
    name: 'Olamide Kuteyi',
    title: 'Lawyer',
    bio: 'Olamide Kuteyi is a Lawyer, Programme manager, and Development Expert with a focus on gender inclusion, youth empowerment, and childrens rights. She has served in the past as a UNICEF Young Influencer and Global Youth Ambassador where she created CRAG, a board game simplifying children’s legal rights. Olamide co-curated West Africa’s first private-sector-led GBV initiative Recognized by IMPACT AFRICA and Guardian Woman, she’s a skilled compere known for hosting high-level conversations. ',
    image: Olamide,
  },

  {
    name: 'Davies Awoingo – ',
    title: 'Tech Founder & Innovation Strategist',
    bio: 'Davies Awoingo is a Nigerian technologist and startup founder building at the intersection of AI, agriculture, and digital creativity. He is the Co-founder and CTO of Ojunu, a US-based AI platform helping creators scale and monetize their work, and the founder of Fico Africa, an AgTech SaaS transforming farm management across the continent. He also leads Wider NetFarms DIH, supporting agricultural MSMEs through digital innovation. With a background in Marine Engineering and deep expertise in product development and DevOps, Davies is passionate about creating scalable tools that drive inclusive growth and tech-enabled impact across Africa.',
    image: Oladiwura,
  },

  {
    name: 'Oladiwura Oladepo ',
    title:
      'Executive Director and Co-Founder at Technology for Social Change and Development Initiative (DBA Tech4Dev)',
    bio: 'Oladiwura Oladepo is the Executive Director and Co-Founder of Tech4Dev, a non-profit,  driving digital inclusion and economic empowerment in Africa. A passionate changemaker, she leads the Women Techsters initiative, aiming to train 5 million African women in tech by 2030. She exemplifies excellence with degrees from both  Yale and Lagos Business School. She is also well recognized globally holding the Waislitz Global Citizen Prize and a UN Solutions Summit Maker.',
    image: Oladiwura,
  },
  {
    name: 'Uche Aniche',
    title: 'Convener, #StartupSouth | General Partner, Rebel Seed Capital',
    bio: `Uche Aniche, Convener of #StartupSouth, is a seasoned innovation leader, angel investor, and Africa Startup Ecosystem Advocate passionate about building the next generation of high-scale founders especially in Nigeria’s South-South and South-East. He’s helped startups raise millions of dollars and drives platforms like Africa Startup & VC Landscape Preview to deepen insight-sharing among founders and investors across the continent`,
    image: Uche,
  },
  {
    name: 'Babatunde Akin-Moses',
    title: 'CEO and co-founder of Sycamore',
    bio: `Babatunde Akin-Moses is the CEO and co-founder of Sycamore - a fintech platform providing lending, savings, and investment solutions to over 250,000 Nigerians. With prior experience at Shell, KPMG, PwC, and Pezesha in Kenya, he brings deep expertise in finance and strategy. He is a chartered accountant who holds a Bachelor’s Degree in Economics and an MBA from Lagos Business School and IESE Business school in Spain. Babatunde writes on business, policy, and productivity as an author and columnist. He is passionate about building a more prosperous Nigeria and Africa through inclusive economic empowerment.`,
    image: Babatunde,
  },
];

export default function Speakers() {
  return (
    <>
      <div className=' bg-primary'>
        <div className=' text-white text-center px-4 pt-12 mt-28'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight'>
            MEET OUR SPEAKERS FOR ACCELERATE 2.0!
          </h2>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 py-10 '>
          {speakers.map((speaker, idx) => (
            <SpeakerCard key={idx} {...speaker} />
          ))}
        </div>
      </div>

      <section className=' flex items-center justify-center mt-6'>
        <motion.a
          href='https://tix.africa/accelerate2'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-block text-lg text-center bg-primary text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-all duration-300'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Register for Accelerate 2.0 →
        </motion.a>
      </section>

      {/* <div className=' bg-orange'>
        <div className=' text-white text-center px-4 py-12'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight'>
            MEET OUR FOR SPEAKERS ACCELERATE 2.0!
          </h2>
          <p className='mt-4 text-base sm:text-lg text-gray-300'>
            Get ready to be inspired by the brightest minds in technology,
            innovation, and business. Accelerate 2.0 brings together industry
            <br></br>
            leaders, disruptors, and rising stars who are shaping the future.
          </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 py-10 '>
          {speakers.map((speaker, idx) => (
            <SpeakerCard key={idx} {...speaker} />
          ))}
        </div>
      </div>
      <div className='w-full flex justify-center items-center py-6 px-4'>
        <motion.a
          href='https://tix.africa/accelerate2'
          target='_blank'
          rel='noopener noreferrer'
          className='text-lg bg-primary text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-all duration-300 text-center'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Register for Accelerate 2.0 →
        </motion.a>
      </div> */}
    </>
  );
}
