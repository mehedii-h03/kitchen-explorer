import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { AiFillLike } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

const ChefCard = ({ chef }) => {
    const { chef_name, id, chef_picture, years_of_experience, number_of_recipes, rating, likes } = chef;
    return (
        <div>
            <div className="card px-2 md:w-80 lg:w-96 bg-base-100 shadow-xl mb-3 lg:ps-0 ">
                <LazyLoad>
                    <figure><img className='lg:h-[280px] object-fill rounded-xl' src={chef_picture} alt="chef image" /></figure>
                </LazyLoad>
                <div className="card-body">
                    <h2 className="card-title">{chef_name}</h2>
                    <p className='text-lg'>{years_of_experience} Years  Experience</p>
                    <p className='text-lg'>{number_of_recipes} Recipes</p>

                    <div className='flex gap-2  items-center justify-between'>
                        <div className='flex gap-2 flex-grow-1'>
                            <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
                            <p>{rating}</p>
                        </div>
                        <div className='flex gap-2 items-center justify-end'>
                            <AiFillLike></AiFillLike>
                            <p>{likes}</p>
                        </div>
                    </div>
                    <div className="card-actions justify-">
                        <Link to={`recipes/${id}`} className="mt-2 text-white btn btn-sm">View Recipes</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;