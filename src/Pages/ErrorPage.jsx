import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center'>
           <h1 className='text-5xl font-semibold'>404</h1> 
           <h3 className='text-xl '>Page not fount </h3>
           <Link to={"/"} className='btn'>Go back to Home</Link>
        </div>
    );
};

export default ErrorPage;