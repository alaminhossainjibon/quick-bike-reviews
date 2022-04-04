import React from 'react';
import './Product.css'
const Product = () => {
    return (
        <div className='bikes-name md:flex justify-center absolute md:static container'>
            <div className='bike-img'>
                <img src="https://www.webbikeworld.com/wp-content/uploads/2021/01/2021-H2-R.png" alt="" />
            </div>
            <div className='description'>
                <h1 className='text-8xl font-bold ml-6 text-orange-900'>YAHOO BUY NOW BIKE!!</h1>
                <p className='text-2xl font-mono font-bold mt-5 ml-6'>""Yahooo...!!! </p>
                <p className='text-2xl font-mono font-bold ml-6'>Very quickly coming my bike review website.</p>
                <p className='text-2xl font-mono font-bold ml-6'>So buy now any bike your choose.</p>
                <p className='text-2xl font-mono font-bold ml-6'> So visit my Quick bike review website</p>
            </div>
        </div>
    );
};

export default Product;