import React from 'react';
import ReviewsCustomer from '../ReviewsCustomer/ReviewsCustomer';

const Reviews = () => {
    const customers = [
        {
            "id": "623df417fa2fdbe6793faf89",
            "description": "Yurr choose is best bike.So visit the website and buy now your best choose bike.",
            "img": "https://i.pinimg.com/originals/6b/aa/98/6baa98cc1c3f4d76e989701746e322dd.png",
            "name": "Ebrahim khan"
        },
        {
            "id": "623df417ec9d0d6299da073f",
            "description": "Your choose is best bike.So visit the website and buy now your best choose bike.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Crystal_Clear_kdm_user_female.svg/1200px-Crystal_Clear_kdm_user_female.svg.png",
            "name": "Selina moni"
        },
        {
            "id": "623df417e359335b69959fae",
            "description": "Your choose is best bike.So visit the website and buy now your best choose bike.",
            "img": "https://e7.pngegg.com/pngimages/439/19/png-clipart-avatar-user-profile-icon-women-wear-frock-face-holidays-thumbnail.png",
            "name": "Sweety pori"
        }
    ]
    return (
        <div>
            <div className='bg-lime-300 p-4 mt-8'>
                <h1 className='text-5xl font-bold'>Customer reviews: </h1>
                <div className='grid md:grid-cols-3 gap-3 mt-8'>
                    {
                        customers.map(option => <ReviewsCustomer
                            key={option.id}
                            option={option}
                        >
                        </ReviewsCustomer>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;