import React from 'react';


import ProductNav from 'components/ProductNav';
import Products from 'components/Products';


// tailwind background
// https://tailwindcss.com/docs/background-image

const Product = () => {
    return (
        <div className="w-full h-screen bg-grey-700 relative" >
            <div className=" absolute w-full h-screen  bg-center bg-fixed bg-no-repeat  bg-[url('/Nike.png')] ">
                <ProductNav className='z-10' />
                <Products className="z-10" />
              
            </div>
        </div>
    )
};

export default Product;
