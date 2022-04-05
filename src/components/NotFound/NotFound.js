import { EmojiSadIcon } from '@heroicons/react/solid';
import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='font-bold text-red-600 sad-icon'>
            <p>Not page Error:404<EmojiSadIcon></EmojiSadIcon></p>
        </div>
    );
};

export default NotFound;