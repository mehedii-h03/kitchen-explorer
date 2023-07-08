import React from 'react';
import Carousel from './Carousel';
import { useLoaderData } from 'react-router-dom';
import ChefCard from './ChefCard';
import PopularRecipes from './PopularRecipes';

const Home = () => {
    const chefs = useLoaderData();
    return (
        <div>
            <Carousel></Carousel>
            {/* chef card */}
            <div className='mt-20'>
                <h2 className='text-4xl font-bold text-center mb-10'>Our Chef</h2>
                <div className='grid md:grid-cols-2 md:px-4 lg:grid-cols-3 lg:gap-5 lg:px-28'>
                    {
                        chefs.map(chef => <ChefCard
                            key={chef.id}
                            chef={chef}
                        ></ChefCard>)
                    }
                </div>
            </div>
            {/* popular recipes */}
            <div className='mt-20'>
                <h2 className='text-4xl font-bold text-center mb-10'>Popular Recipes</h2>
                <PopularRecipes></PopularRecipes>
            </div>
            {/* About us */}
            <div className='mt-20 lg:px-28'>
                <h2 className='text-4xl font-bold text-center mb-10'>About us</h2>
                <div className='flex items-center flex-col-reverse lg:flex-row justify-between'>
                    <div className='px-2 lg:px-0'>
                        <h4 className='text-2xl font-semibold lg:mt-0 mt-6'>Why Kitchen Explorer?</h4>
                        <p className='mt-4 lg:w-3/5 text-xl '>your go to destination for chinese recipes from top chefs around the world. Our mission is to all over the world make famous the tasty chinese food.Our team of passionate foodies scours the globe to find the best recipes and cooking tips, bringing them to you in one convenient location. Whether you're a seasoned home cook or just starting out, our collection of recipes and techniques is sure to inspire and delight.</p>
                    </div>
                    <div className="relative transition duration-300 transform hover:scale-105 cursor-pointer">
                        <img
                            className="lg:w-[1400px] lg:h-[500px] object-cover"
                            src="https://img.freepik.com/free-photo/fried-chicken-vegetables-sauce-with-sesame_141793-92.jpg?w=360&t=st=1683199731~exp=1683200331~hmac=9985fbcd86553609a0bbf0472408a901a873beb7e781482acb2b039225929839"
                            alt="Kitchen Explorer"
                        />
                        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h1 className="text-white text-4xl font-bold">Kitchen Explorer</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;