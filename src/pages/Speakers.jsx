import SpeakerCard from '../components/SpeakerCard';
// import { motion } from 'framer-motion';
import Oladiwura from '../assets/Oladiwura.jpeg';
import Uche from '../assets/Uche.jpeg';
import Babatunde from '../assets/Babatunde.jpeg';

const speakers = [
  {
    name: 'Oladiwura Oladepo ',
    title:
      'Executive Director and Co-Founder at Technology for Social Change and Development Initiative (DBA Tech4Dev)',
    bio: 'Oladiwura Oladepo is the Executive Director and Co-Founder at Technology for Social Change and Development Initiative (DBA Tech4Dev), a non-profit that creates access to decent work and entrepreneurship opportunities and platforms for Africans through digital skills empowerment and advocacy.In this capacity, she oversees the organization’s strategy and operations and works to create opportunities for improved economic livelihood for young Africans, especially in underserved communities by empowering them with digital and soft skills which has directly impacted over 120,000 Africans. She is passionate about gender parity and improved economic outcomes and financial independence for women by bridging the digital knowledge divide between men and women through the Women Techsters initiative which has seen over 15,000 women trained in technology and digital skills (Software development, Data Science and Artificial Intelligence, Cybersecurity, Product Design, Product Management, Blockchain, Mobile Development and 3D/Mixed Reality) across 22 African countries: Nigeria, Ghana, Kenya, Egypt, South Africa, DR Congo, South Sudan, Morocco, Algeria, Angola, Uganda, Tanzania, Ethiopia, Mozambique, Madagascar, Gambia, Liberia, Zambia, Sierra Leone, Botswana, Zimbabwe and Rwanda, and is looking to empower 5 million women across Africa by 2030.She is an avid advocate of women participation in technology and a strong proponent of using digital and technology knowledge to create economic prosperity pathways and financial freedom for youth across Africa and the world. In honor of her impact work, She is featured on the list of exceptional Alumni on the Yale School of Management website.Oladiwura has a Master of Advanced Management from Yale School of Management and an MBA from Lagos Business School, Pan-Atlantic University.She is a Waislitz Global Citizen Prize Awardee 2022 , Forbes Non-Profit Council Member, JCI Top Ten Outstanding Young Persons of Nigeria 2022 , Female Innovator of the Year 2022, AfriTech Awards,Jacobs Foundation Social Entrepreneur Fellow, Cisco Global Citizen prize finalist 2022, member of Injini Think Tank Advisory Committee, United Nations Solutions Summit Solution Maker 2019 and a former member of the Executive Board of the Lagos Business School Alumni Association.',
    image: Oladiwura,
  },
  {
    name: 'Uche Aniche',
    title: 'Convener, #StartupSouth | General Partner, Rebel Seed Capital',
    bio: `Uche Aniche is a tech and business innovation leader, angel investor, and Africa’s secondary cities-focused fund manager with over two decades of experience in business communication, startup management, product development, and community leadership.
  
  He is a General Partner at Rebel Seed Capital, backing market-creating startups in Africa’s tier 2 cities. He also co-founded and serves as a director at SSE Angel Network, investing in founders from South-South and South-East Nigeria.
  
  Through #StartupSouth, Uche advocates for startup ecosystem development and has helped raise millions in funding. He mentors in the Global Entrepreneurship Network and advises multiple venture-backed startups.
  
  He previously managed Roar Hub at UNN — Nigeria’s first on-campus tech hub — and founded Havilah & Hills, a marketing and software agency with products like SpotVue, 1Suite Accounting, and Venuehero.co.
  
  Uche also served as Director of Communication at Imo Economic Summit Group (IESG), supporting investment-driven development in Imo State. He believes entrepreneurship across Nigeria's regions is key to national growth.
  
  He is married to Delight and has three children — Havilah, Ziv, and Eri.`,
    image: Uche,
  },
  {
    name: 'Babatunde Akin-Moses',
    title: 'CEO and co-founder of Sycamore',
    bio: `Babatunde Akin-Moses is the CEO and co-founder of Sycamore, a fintech platform providing lending, savings, and investment solutions to over 250,000 Nigerians. With prior experience at Shell, KPMG, PwC, and Pezesha in Kenya, he brings deep expertise in finance and strategy. He holds a bachelor’s in economics, is a chartered accountant, and earned his MBA from Lagos Business School and IESE Business School in Spain. Babatunde writes on business, policy, and productivity as an author and columnist. He is passionate about building a more prosperous Nigeria and Africa through inclusive economic empowerment.`,
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
