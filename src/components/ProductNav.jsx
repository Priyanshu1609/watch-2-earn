import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const ProductNav = () => {
    const [nav, setNav] = useState(true);
    const router = useRouter();

    const changeNav = () => {
        if (window.scrollY > 5) {
            setNav(false);
        }
        else {
            setNav(true);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);


    return (
        <div className={`flex justify-between mt-8 mx-16 text-white  ${nav ? 'mb-36' : 'mb-14'}`}>
            <div className={` flex ${nav ? 'flex-col w-1/3' : 'w-full'}`}>
                <div className={`text-4xl md:text-6xl lg:text-7xl mt-2 flex ${nav ? 'flex-col' : ''}`}>
                    <p>Nike Air</p>
                    <p className={`${!nav ? 'pl-4' : ''}`}>Jordan</p>
                </div>
                <div className={`mt-6 space-x-3 hover:cursor-pointer text-sm flex ${nav ? '' : 'ml-8'}`} onClick={() => router.push('/video')}>
                    <div className="py-2 px-4 bg-green-500 text-gray-100 rounded-md shadow-lg w-40 h-10 flex space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                        <p className="text-base">Watch Now</p>
                    </div>
                    {nav && <div className="py-2 px-4 bg-transparent border-[1.5px] border-white text-white rounded-md  shadow-lg w-48 h-10 flex space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
                        </svg>

                        <p className="text-base" > Add to Playlist </p>

                    </div>}
                </div>
                {nav && <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio distinctio reprehenderit perferendis blanditiis cumque molestias ducimus harum eius, nulla non!</p>}
            </div>
            {nav && <div className="bg-white h-40 w-40 rounded-md">

            </div>}
        </div>
    )
};

export default ProductNav;
