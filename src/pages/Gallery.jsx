import React from 'react';
import { motion } from 'framer-motion';
import ImageGallery from '../components/ImageGallery';
import Eventshead from '../assets/eventshead.png';

/* ================== IMPORT IMAGES ================== */

// Breakfast Mentorship (🔥 NEW SECTION — ADD YOUR IMAGES)
// import B1 from '../assets/b1.jpg';
// import B2 from '../assets/b2.jpg';
// import B3 from '../assets/b3.jpg';

// CSR
import CSR from '../assets/csr.jpg';
import CSR1 from '../assets/csr1.jpg';
import CSR2 from '../assets/csr2.jpg';
import CSR3 from '../assets/csr3.jpg';
import CSR4 from '../assets/csr4.jpg';
import CSR5 from '../assets/csr5.jpg';
import CSR6 from '../assets/csr6.jpg';
import CSR7 from '../assets/csr7.jpg';
import CSR8 from '../assets/csr8.jpg';
import CSR9 from '../assets/csr9.jpg';
import CSR10 from '../assets/csr10.jpg';
import CSR11 from '../assets/csr11.jpg';
import CSR12 from '../assets/csr12.jpg';
import CSR13 from '../assets/csr13.jpg';
import CSR15 from '../assets/csr15.jpg';
import CSR16 from '../assets/csr16.jpg';
import CSR17 from '../assets/csr17.jpg';
import CSR18 from '../assets/csr18.jpg';
import CSR19 from '../assets/csr19.jpg';
import CSR20 from '../assets/csr20.jpg';

// Accelerate 2.0
import A1 from '../assets/a1.jpeg';
import A2 from '../assets/a2.jpeg';
import A3 from '../assets/a3.jpeg';
import A4 from '../assets/a4.jpeg';
import A5 from '../assets/a5.jpeg';
import A6 from '../assets/a6.jpeg';
import A7 from '../assets/a7.jpeg';
import A8 from '../assets/a8.jpeg';
import A9 from '../assets/a9.jpeg';
import A10 from '../assets/a10.jpeg';
import A11 from '../assets/a11.jpeg';
import A12 from '../assets/a12.jpeg';
import A13 from '../assets/a13.jpeg';
import A14 from '../assets/a14.jpeg';
import A15 from '../assets/a15.jpeg';
import A16 from '../assets/a16.jpeg';
import A17 from '../assets/a17.jpeg';
import A18 from '../assets/a18.jpeg';
import A19 from '../assets/a19.jpeg';
import A20 from '../assets/a20.jpeg';
import A21 from '../assets/a21.jpeg';
import A22 from '../assets/a22.jpeg';
import A23 from '../assets/a23.jpeg';
import A24 from '../assets/a24.jpeg';
import A25 from '../assets/a25.jpeg';
import A26 from '../assets/a26.jpeg';
import A27 from '../assets/a27.jpeg';
import A28 from '../assets/a28.jpeg';

// Accelerate 1.0 & Unwind
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
import Img21 from '../assets/21.jpg';
import Img22 from '../assets/22.jpg';
import Img23 from '../assets/23.jpg';
import Img24 from '../assets/24.jpg';
import Img25 from '../assets/25.jpg';
import Img26 from '../assets/26.jpg';
import Img27 from '../assets/27.jpg';
import Img28 from '../assets/28.jpg';
import Img29 from '../assets/29.jpg';
import Img30 from '../assets/30.jpg';
import Img31 from '../assets/31.jpg';
import Img32 from '../assets/32.jpg';
import Img33 from '../assets/33.jpg';
import Img34 from '../assets/34.jpg';
import Img35 from '../assets/35.jpg';

import Mb1 from '../assets/mb1.webp';
import Mb2 from '../assets/mb2.webp';
import Mb3 from '../assets/mb3.webp';
import Mb4 from '../assets/mb4.webp';
import Mb5 from '../assets/mb5.webp';
import Mb6 from '../assets/mb6.webp';
import Mb7 from '../assets/mb7.webp';
import Mb8 from '../assets/mb8.webp';
import Mb9 from '../assets/mb9.webp';
import Mb10 from '../assets/mb10.webp';
import Mb11 from '../assets/mb11.webp';
import Mb12 from '../assets/mb12.webp';
import Mb13 from '../assets/mb13.webp';
import Mb14 from '../assets/mb14.webp';
import Mb15 from '../assets/mb15.webp';
import Mb16 from '../assets/mb16.webp';
import Mb17 from '../assets/mb17.webp';
import Mb18 from '../assets/mb18.webp';
import Mb19 from '../assets/mb19.webp';
import Mb20 from '../assets/mb20.webp';

/* ================== IMAGE GROUPS ================== */

const breakfastMentorship = [
  Mb7,
  Mb5,
  Mb8,
  Mb4,
  Mb2,
  Mb6,
  Mb1,
  Mb3,
  Mb9,
  Mb10,
  Mb11,
  Mb12,
  Mb13,
  Mb14,
  Mb15,
  Mb16,
  Mb17,
  Mb18,
  Mb19,
  Mb20,
];

const csr = [
  CSR,
  CSR1,
  CSR2,
  CSR3,
  CSR4,
  CSR5,
  CSR6,
  CSR7,
  CSR8,
  CSR9,
  CSR10,
  CSR11,
  CSR12,
  CSR13,
  CSR15,
  CSR16,
  CSR17,
  CSR18,
  CSR19,
  CSR20,
];

const accelerate2 = [
  A1,
  A2,
  A3,
  A4,
  A5,
  A6,
  A7,
  A8,
  A9,
  A10,
  A11,
  A12,
  A13,
  A14,
  A15,
  A16,
  A17,
  A18,
  A19,
  A20,
  A21,
  A22,
  A23,
  A24,
  A25,
  A26,
  A27,
  A28,
];

const accelerate1 = [
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

const unwind = [
  Img21,
  Img22,
  Img23,
  Img24,
  Img25,
  Img26,
  Img27,
  Img28,
  Img29,
  Img30,
  Img31,
  Img32,
  Img33,
  Img34,
  Img35,
];

/* ================== SECTIONS ================== */

const gallerySections = [
  {
    title: 'BREAKFAST MENTORSHIP EXPERIENCE',
    images: breakfastMentorship,
  },
  {
    title: 'BACK TO SCHOOL INITIATIVE',
    images: csr,
  },
  {
    title: 'ACCELERATE 2.0',
    images: accelerate2,
  },
  {
    title: 'ACCELERATE 1.0',
    images: accelerate1,
  },
  {
    title: 'UNWIND: REVISITING THE VISION BOARD',
    images: unwind,
  },
];

const GalleryUse = () => {
  return (
    <>
      {/* HERO */}
      <section
        className='relative h-[60vh] bg-cover bg-center flex items-center justify-center'
        style={{ backgroundImage: `url(${Eventshead})` }}
      >
        <div className='absolute inset-0 bg-black/60'></div>
        <div className='relative text-center text-white px-6'>
          <h1 className='text-4xl md:text-6xl font-bold tracking-wide'>
            Event Gallery
          </h1>
          <p className='mt-4 text-lg text-gray-200'>
            Capturing moments that matter
          </p>
        </div>
      </section>

      {/* GALLERY SECTIONS */}
      <section className='bg-gray-50 py-20 px-6 md:px-16 space-y-28'>
        {gallerySections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className='max-w-7xl mx-auto'
          >
            <div className='mb-10 text-center'>
              <h2 className='text-2xl md:text-4xl font-bold text-gray-800'>
                {section.title}
              </h2>
              <div className='w-20 h-1 bg-primary mx-auto mt-4 rounded-full'></div>
            </div>

            <ImageGallery images={section.images} />
          </motion.div>
        ))}
      </section>
    </>
  );
};

export default GalleryUse;
