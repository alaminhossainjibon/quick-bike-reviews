import React from 'react';
import Button from '../Button/Button';
import Product from '../Product/Product';
import Question from '../Question/Question';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Product></Product>
            <Reviews></Reviews>
            <Button></Button>
            <Question></Question>
        </div>
    );
};

export default Home;