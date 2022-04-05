import { StarIcon } from '@heroicons/react/solid';
import React from 'react';
import './ReviewsCustomer.css'

const ReviewsCustomer = (props) => {
    const { name, description, img } = props.option;
    return (
        <div className='bg-white p-4 rounded-lg'>
            <img className='w-6/12 rounded-full img-icons' src={img} alt="" />
            <h2 className='text-2xl font-bold'>Name: {name}</h2>
            <p className='text-2xl'> Description: {description}</p>
            <div className='w-20 text-yellow-400 icons'>
                <StarIcon></StarIcon>
                <StarIcon></StarIcon>
                <StarIcon></StarIcon>
                <StarIcon></StarIcon>
                <StarIcon></StarIcon>
            </div>
        </div>
    );
};

export default ReviewsCustomer;