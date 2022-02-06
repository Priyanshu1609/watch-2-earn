import Card from 'components/Card';
import React from 'react';

const Dashboard = () => {
    return (
        <div className="bg-blackblue h-screen w-full text-white px-12">
            <div className="ml-12 pt-10">
                <h1 className="text-4xl ">0x4c657c8f8c9fdd60d...</h1>
                <p className="text-xl text-gray-300 mt-4">Joined February 2022</p>
            </div>
            <div className="mt-20 space-x-10 text-lg text-white">
                <button className="text-green-300 underline">Collected</button>
                <button>Favourite</button>
                <button>All</button>
            </div>
            <div className="bg-grey-500 h-[0.25px] w-full mt-1"></div>
            <div className="mt-12 flex">
                <div className="flex w-1/2 border-r-2 border-grey-500 ">
                    <div className="bg-white h-80 w-64 rounded-sm rounded-br-3xl p-3 ml-4 text-black">
                        <p className="text-black text-sm mb-1">Nike</p>
                        <img src="/nft.jpg" alt="nft" className="rounded-lg h-56 w-56 mb-2" />
                        <span className="text-3xl font-bold">50%</span><span className="ml-1 text-xl text-gray-500"> OFF</span>
                    </div>
                    <div className="ml-8 w-1/2">
                        <h1 className="text-2xl font-bold">Nike Air Jordan</h1>
                        <p className="mt-4 text-sm text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, dicta, libero maxime ut id voluptates nisi quisquam beatae in quis nihil fuga aliquid a doloribus, ducimus perspiciatis eius quidem quasi.</p>
                        <div className="flex mt-4 text-sm text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p>Watch Again</p>
                        </div>
                        <p className="text-3xl font-bold mt-24 ml-2">Nike</p>
                    </div>
                </div>
                <div className="w-1/2">
                    <div >
                        <p className="text-3xl font-bold ml-8 mb-4">Nike</p>
                        <div className="flex">
                            <div className="bg-white h-24 w-64 rounded-lg rounded-br-3xl p-3 ml-4 text-black">
                                <p className="text-black text-sm">Nike</p>
                                <span className="text-3xl font-bold">5</span><span className="ml-1 text-xl text-gray-500"> MATIC</span>
                            </div>
                            <div className="ml-8 w-1/2 -mt-14">
                                <h1 className="text-2xl font-bold">Nike Air Jordan</h1>
                                <p className="mt-4 text-sm text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, dicta, libero maxime ut id voluptates nisi quisquam beatae in quis nihil fuga aliquid a doloribus, ducimus perspiciatis eius quidem quasi.</p>
                                <div className="flex mt-4 text-sm text-gray-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <p>Watch Again</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <p className="text-3xl font-bold ml-8 mb-4">Nike</p>
                        <div className="flex">
                            <div className="bg-white h-24 w-64 rounded-lg rounded-br-3xl p-3 ml-4 text-black">
                                <p className="text-black text-sm">Nike</p>
                                <span className="text-3xl font-bold">5</span><span className="ml-1 text-xl text-gray-500"> MATIC</span>
                            </div>
                            <div className="ml-8 w-1/2 -mt-14">
                                <h1 className="text-2xl font-bold">Nike Air Jordan</h1>
                                <p className="mt-4 text-sm text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, dicta, libero maxime ut id voluptates nisi quisquam beatae in quis nihil fuga aliquid a doloribus, ducimus perspiciatis eius quidem quasi.</p>
                                <div className="flex mt-4 text-sm text-gray-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <p>Watch Again</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;
