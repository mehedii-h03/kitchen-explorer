import React from 'react';
import Lottie from "lottie-react";
import page404 from "../assets/ErrorPage404.json";
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center'>
            <Lottie animationData={page404} loop={true} className='lg:h-[600px]'></Lottie>
            <Link to="/" className='btn btn-primary'>Go Back To Home</Link>

        </div>
    );
};

export default ErrorPage;