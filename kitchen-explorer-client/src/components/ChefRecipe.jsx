import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { AiFillLike } from 'react-icons/ai';
import Recipe from './Recipe';

const ChefRecipe = () => {
    const chef = useLoaderData();
    const { chef_name, desc, chef_picture, years_of_experience, number_of_recipes, rating, likes, recipes } = chef;
    console.log(chef);
    return (
        <div className=' lg:px-28 mb-10'>
            <div className="card lg:card-side bg-base-100 rounded-0">
                <img className='lg:w-2/4' src={chef_picture} alt="Movie" />
                <div className="p-8">
                    <h2 className="card-title">{chef_name}</h2>
                    <div className='text-lg'>
                        <p className=' mt-4 mb-1'>{number_of_recipes} Recipes</p>
                        <p className='mb-3'>{years_of_experience} Years  Experience </p>
                        <p>{desc}</p>
                    </div>
                    <div className='mt-10 flex gap-2  items-center  justify-between'>
                        <div className='flex gap-2 '>
                            <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
                            <p>{rating}</p>
                        </div>
                        <div className='flex gap-2 items-center justify-end '>
                            <AiFillLike></AiFillLike>
                            <p>{likes}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <h2 className='text-3xl text-center font-bold mb-10'>Recipes</h2>
                <div className='grid lg:grid-cols-3 gap-5'>
                    {
                        recipes.map((recipe, i) => <Recipe
                            key={i+1}
                            recipe={recipe}
                        ></Recipe>)
                    }
                </div>
            </div>

        </div >
    );
};

export default ChefRecipe;