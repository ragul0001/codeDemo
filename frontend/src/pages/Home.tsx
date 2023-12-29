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
    <div className="container mx-auto max-w-7xl px-8 ">
      <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
        <div  className={`bg-blue-500 ${ isLandscape ? 'w-[500px] h-auto' : 'w-auto h-auto'}`}>
              <div className={`w-full h-full relative bg-slate-700 ${isLandscape ? 'object-cover ' : 'object-contain'}`}>
                          <div className=' text-white '>
                                 <div className='p-6'>
                                   <form>
                                    <div className="mb-4">
                                      <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                                      <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Your Name" required/>
                                    </div>

                                    <div className="mb-4">
                                      <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                                      <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Your Email" required/>
                                    </div>

                                    <div className="mb-4">
                                      <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                                      <textarea id="message" name="message" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Your Message"  required></textarea>
                                    </div>

                                    <div className="flex justify-end">
                                      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Submit</button>
                                    </div>

                                    </form>
                                 </div>
                          </div>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
