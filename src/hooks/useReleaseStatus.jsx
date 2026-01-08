import { useEffect, useState } from 'react';

const useReleaseStatus = (releaseDate) => {
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date().getTime();
      const release = new Date(releaseDate).getTime();
      setIsLive(now >= release);
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000);

    return () => clearInterval(interval);
  }, [releaseDate]);

  return isLive;
};

export default useReleaseStatus;
