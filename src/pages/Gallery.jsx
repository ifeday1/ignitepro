import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Img1 from '../assets/1.jpg';
import Img2 from '../assets/2.jpg';
import Img3 from '../assets/3.jpg';
import Img4 from '../assets/4.jpg';
import Img5 from '../assets/5.jpg';
import Img6 from '../assets/6.jpg';
import Img7 from '../assets/7.jpg';
import Img8 from '../assets/8.jpg';
import Img9 from '../assets/9.jpg';
import Img10 from '../assets/10.jpg';
import Img11 from '../assets/11.jpg';
import Img12 from '../assets/12.jpg';
import Img13 from '../assets/13.jpg';
import Img14 from '../assets/14.jpg';
import Img15 from '../assets/15.jpg';
import Img16 from '../assets/16.jpg';
import Img17 from '../assets/17.jpg';
import Img18 from '../assets/18.jpg';
import Img19 from '../assets/19.jpg';
import Img20 from '../assets/20.jpg';





const images = [
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
  Img10,
  Img11,
  Img12,
  Img13,
  Img14,
  Img15,
  Img16,
  Img17,
  Img18,
  Img19,
  Img20,
];

const images1=[Img1,]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <section className='px-6 md:px-24 py-12 bg-gray-50 mt-14'>
        <motion.h1
          className='bg-primary text-white text-lg md:text-xl font-medium px-4 py-2 w-fit rounded-lg mb-10'
          variants={fadeUp}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          PICTURE EXCERPT FROM ACCELERATE 1.0
        </motion.h1>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {images.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className='cursor-pointer'
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className='w-full h-48 object-cover rounded-lg shadow-md'
              />
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className='fixed inset-0 bg-black/70 flex items-center justify-center z-50'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.img
                src={selectedImage}
                alt='Enlarged'
                className='max-w-full max-h-[90vh] rounded-lg shadow-lg'
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <section className='px-6 md:px-24 py-6 bg-gray-50 '>
        <motion.h1
          className='bg-primary text-white text-lg md:text-xl font-medium px-4 py-2 w-fit rounded-lg mb-10'
          variants={fadeUp}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          PICTURE EXCERPT FROM UNWIND: REVISITING THE VISION BOARD
        </motion.h1>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {images1.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className='cursor-pointer'
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className='w-full h-48 object-cover rounded-lg shadow-md'
              />
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className='fixed inset-0 bg-black/70 flex items-center justify-center z-50'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.img
                src={selectedImage}
                alt='Enlarged'
                className='max-w-full max-h-[90vh] rounded-lg shadow-lg'
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* <section className='px-6 md:px-24 py-12 bg-white'>
      <h2 className='text-primary text-2xl font-semibold mb-6'>Media Gallery</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {images.map((src, index) => (
          <div
            key={index}
            className='w-full aspect-square overflow-hidden rounded-lg shadow-sm border'
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className='w-full h-full object-cover transition-transform duration-300 hover:scale-105'
            />
          </div>
        ))}
      </div>
    </section> */}
    </>
  );
}
