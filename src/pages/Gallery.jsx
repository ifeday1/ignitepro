import React from 'react';
import ImageGallery from '../components/ImageGallery';
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

const galleryOneImages = [
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

const galleryTwoImages = [
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
const galleryThreeImages = [
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

const GalleryUse = () => {
  return (
    <>
      <ImageGallery
        title='PICTURES FROM ACCELERATE 2.0'
        images={galleryOneImages}
      />
      <ImageGallery
        title='PICTURES FROM ACCELERATE 1.0'
        images={galleryTwoImages}
      />
      <ImageGallery
        title='PICTURES FROM UNWIND: REVISITING THE VISION BOARD'
        images={galleryThreeImages}
      />
    </>
  );
};

export default GalleryUse;
