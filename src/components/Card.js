import React from 'react';

const Card = () => {


    return (
        <div className=" w-64 xl:mb-0 mx-8 text-white rounded-lg overflow-hidden shadow-lg">
            <div>
                <div className="bg-dark w-full h-44" />
            </div>
            <div className="text-white">
                <div className="flex items-center justify-between px-4 pt-4 text-white">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>
                    </div>
                    <div className="bg-green-500 py-1.5 px-6 rounded-full">
                        <p className=" text-xs text-black">Featured</p>
                    </div>
                </div>
                <div className="p-4 text-white">
                    <div className="flex items-center">
                        <h2 className=" text-lg font-semibold">Nike shoe</h2>
                        <p className=" text-xs  pl-5">4 days ago</p>
                    </div>
                    <p className=" text-xs  mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio distinctio reprehenderit perferendis blanditiis cumque molestias ducimus harum eius, nulla non!
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Card;
