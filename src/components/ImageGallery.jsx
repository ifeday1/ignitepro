import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function ImageGallery({ title, images }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visibleImages = showAll ? images : images.slice(0, 4);

  return (
    <section className='px-6 md:px-24 py-12 bg-gray-50 mt-16'>
      <motion.h1
        className='bg-primary text-white text-lg md:text-xl font-medium px-4 py-2 w-fit rounded-lg mb-2'
        variants={fadeUp}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        {title}
      </motion.h1>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {visibleImages.map((img, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className='cursor-pointer'
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className='w-full h-80 object-cover rounded-lg shadow-md'
            />
          </motion.div>
        ))}
      </div>

      {images.length > 4 && (
        <div className='text-center mt-6'>
          <button
            onClick={() => setShowAll(!showAll)}
            className='px-6 py-2 bg-black text-white rounded-lg hover:bg-primary transition duration-300'
          >
            {showAll ? 'View Less' : 'View More'}
          </button>
        </div>
      )}

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
  );
}
