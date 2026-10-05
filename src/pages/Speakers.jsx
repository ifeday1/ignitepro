import SpeakerCard from '../components/SpeakerCard';
import { motion } from 'framer-motion';
import { accelerate2Speakers as speakers } from '../data/speakers';

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
