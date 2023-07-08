import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import toast, { Toaster } from 'react-hot-toast';


const Recipe = ({ recipe }) => {
    const toggleFavorite = (event) => {
        toast.success('Added to favorite!')
        event.currentTarget.disabled = true;;
    };

    const { recipeName, ingredients, cookingMethod, rating } = recipe;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title mt-2">{recipeName}</h2>
                {
                    ingredients.map((ingredient, i) =>
                        <p key={i + 1} className='text-lg'><span className='font-bold'>{i + 1}.</span> {ingredient}</p>)
                }
                <p className='text-lg'><span className='font-semibold'>Method</span>: {cookingMethod}</p>
                <div className="mt-5">
                    <div className='flex gap-2 items-center'>
                        <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
                        <p>{rating}</p>
                        <button onClick={toggleFavorite}
                            className=' btn btn-sm text-white font-semibold gap-2 cursor-pointer flex items-center'>
                            Favorite<AiOutlineHeart /></button>
                    </div>
                </div>
            </div>
            <Toaster />
        </div >
    );
};

export default Recipe;