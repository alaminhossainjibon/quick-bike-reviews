import React from 'react';

const Question = () => {
    return (
        <div className='bg-green-200 p-6'>
            <h1 className='font-bold text-4xl'>Questions--1: What is context Api?</h1>
            <p className='font-bold text-2xl'>Answer: The React Context API is a way to create a global variable for a React app that can be passed around. This is an alternative to "prop drilling" or moving props from grandparents to parents of children. The problem is also referred to as a simple, easy way to manage the state using Redox.</p>
            <h1 className='font-bold text-4xl'>Questions--2: What is semantic tag?</h1>
            <p className='font-bold text-2xl'>Answer: Semantic HTML or semantic markup is HTML that identifies the meaning of a web page instead of just the presentation. For example, a tag indicates that the bound text is a paragraph. It's both semantic and representative because people know what paragraphs are and how browsers should display them.</p>
        </div>
    );
};

export default Question;