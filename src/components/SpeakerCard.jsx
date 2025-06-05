import { useState } from 'react';

export default function SpeakerCard({ name, title, bio, image }) {
  const [showBio, setShowBio] = useState(false);

  return (
    <div className='bg-black rounded-lg overflow-hidden text-white shadow-md flex flex-col'>
      <img
        src={image}
        alt={name}
        className='w-full object-cover h-72 sm:h-64 md:h-80'
      />

      <div className='p-4 flex flex-col flex-grow'>
        <h3 className='text-lg font-semibold'>{name}</h3>
        <p className='text-sm text-gray-300 mb-3'>{title}</p>

        {showBio && (
          <p className='text-sm text-gray-400 mt-2 transition-all duration-300'>
            {bio}
          </p>
        )}

        <button
          onClick={() => setShowBio(!showBio)}
          className='mt-auto w-fit text-sm text-[#38bdf8] hover:underline transition'
        >
          {showBio ? 'Hide Bio' : 'View More'}
        </button>
      </div>
    </div>
  );
}
