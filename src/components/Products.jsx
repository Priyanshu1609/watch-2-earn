import React, { useEffect, useState } from 'react';
import Card from './Card';

const Products = () => {
    const [nav, setNav] = useState(true);

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
        <div className="w-full  px-16 bg-grey-700 backdrop-blur-sm pb-52">
            <div className="bg-dark-300  w-full   rounded-lg">
                <div className="text-white w-full flex justify-center ">
                    <div className="-mt-9 rounded-full bg-dark-300 w-14 h-14 flex justify-center pt-2">
                        {nav ? <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg> :
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-8 ">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />

                </div>

            </div>

        </div>
    );
};

export default Products;
