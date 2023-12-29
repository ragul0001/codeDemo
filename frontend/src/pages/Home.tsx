// Home.js

import React, { useEffect, useState } from 'react';
import image from '../public/images/name.jpg';

const Home = () => {
  const [isLandscape, setIsLandscape] = useState(
    window.matchMedia('(orientation: landscape)').matches
  );

  useEffect(() => {
    const handleOrientationChange = () => {
      setIsLandscape(window.matchMedia('(orientation: landscape)').matches);
    };

    window.addEventListener('orientationchange', handleOrientationChange);
    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  return (
    <div className="container mx-auto max-w-7xl px-8">
      <div className="flex justify-center items-center">
        <div
          className={`bg-blue-500 ${
            isLandscape ? 'w-[500px] h-auto' : 'w-auto h-auto'
          }`}
        >
          <img
            alt=""
            src={image}
            className={`w-full h-full ${
              isLandscape ? 'object-cover ' : 'object-contain'
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
