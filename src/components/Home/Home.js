import React from 'react';
import Button from '../Button/Button';
import Product from '../Product/Product';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Product></Product>
            <Reviews></Reviews>
            <Button></Button>
        </div>
    );
};

export default Home;