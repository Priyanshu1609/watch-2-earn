import React from 'react';

import ProductNav from 'components/ProductNav';
import Products from 'components/Products';


const Product = () => {
    return (
        <div className="w-full h-screen relative" >
            <div className=" absolute w-full h-[2000px] bg-grey-700  bg-center bg-fixed bg-no-repeat bg-contain bg-[url('/Nike.png')] ">
                <ProductNav  />
                <Products  />
              
            </div>
        </div>
    )
};

export default Product;
