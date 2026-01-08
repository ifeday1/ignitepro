import React, { useEffect, useState } from 'react';

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const diff = new Date(targetDate) - new Date();
    if (diff <= 0) return null;

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return null;

  return (
    <div className='flex gap-4 mt-6'>
      {Object.entries(timeLeft).map(([key, value]) => (
        <div key={key} className='bg-white/10 px-4 py-3 rounded-lg text-center'>
          <p className='text-2xl font-bold text-white'>{value}</p>
          <p className='text-xs uppercase text-gray-300'>{key}</p>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
