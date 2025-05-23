import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  '/media/image1.jpg',
  '/media/image2.jpg',
  '/media/image3.jpg',
  '/media/image4.jpg',
  '/media/image5.jpg',
  '/media/image6.jpg',
  // Add more image URLs or import them statically
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <section className='px-6 md:px-24 py-12 bg-gray-50 mt-14'>
        <h2 className='text-primary text-2xl font-semibold mb-8'>
          PICTURE EXCERPT FROM ACCELERATE 1.0
        </h2>

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
        <h2 className='text-primary text-2xl font-semibold mb-8'>
          PICTURE EXCERPT FROM UNWIND: REVISITING THE VISION BOARD
        </h2>

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

    <section className='px-6 md:px-24 py-12 bg-white'>
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
    </section>

    </>
  );
}
