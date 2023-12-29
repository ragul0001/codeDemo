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
        <div  className={`bg-blue-500 ${ isLandscape ? ' w-full h-auto' : ' h-auto'}`}>
              <div className={`h-full relative bg-yellow-700 `}>
                          <div className=''>
                          <div className='flex  basis-1/2 '>
                          <div className='border border-b p-2 rounded-lg'>
                                <div className='flex '>
                                      <div className='flex items-center'>
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                                          </svg>
                                      </div>
                                      <div className='mx-5'>
                                          <h3 className='text-[20px] font-bold '>Send us a message</h3>
                                      </div>
                                </div>  
                                <div className='flex flex-col flex-wrap mt-5 '>
                                    <div className=''>
                                       <label htmlFor="name" className='text-[15px] font-normal'>Name:</label><br/>
                                       <input type="text" name='name'  className='border border-Cborder bg-white p-2 w-80 md:w-96' />
                                    </div>
                                    <div className=''>
                                       <label htmlFor="email" className='text-[15px] font-normal'>email:</label><br/>
                                       <input type="email" name='email'  className='border border-Cborder bg-white p-2 w-80 md:w-96' />
                                    </div>
                                </div>
                                <div className="my-4">
                                    <label htmlFor="name" className='text-[15px] font-normal'>Message
                                    <textarea className="shadow form-textarea mt-1 block border-Cborder rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows={5} placeholder="Textarea"></textarea>
                                    </label>
                                </div>
                                <div className='my-2 p-3 flex justify-center'>
                                           <div className='mx-2 border bg-blue-900 rounded-full'>
                                                <button className='p-3 w-32 bg-Cpurple text-white rounded-full text-center'>Submit</button>
                                           </div>
                                </div>
                                
                          </div>
                    </div>
                          </div>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
