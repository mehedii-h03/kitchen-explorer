import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { AiFillLike } from 'react-icons/ai';


const PopularRecipes = () => {
    return (
        <div className='lg:px-28 mx-2 lg:mx-0'>
            {/* card 1 */}
            <div className="hero mb-10 rounded-lg bg-base-200">
                <div className="hero-content  flex-col lg:flex-row">
                    <img src="https://img.freepik.com/free-photo/baked-potatoes-with-garlic-herbs-fried-chanterelles-cast-iron-skillet-top-view_2829-17379.jpg?w=1060&t=st=1683211433~exp=1683212033~hmac=73faddabaedd2fb903a8b852450cb089d362a7d550c02f18cba872ce6f5f137d" className="w-full max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-bold">Kung Pao Chicken</h1>
                        <p className="lg:py-6 mt-3 text-lg lg:w-11/12">Kung Pao Chicken is a popular Chinese dish known for its spicy and savory flavor. It typically consists of diced chicken stir-fried with peanuts, dried chili peppers, Sichuan peppercorns, garlic, and ginger. The dish is often marinated in a mixture of cornstarch, soy sauce, and rice wine before being cooked. Kung Pao Chicken can be served with steamed rice and is a favorite among Chinese food enthusiasts around the world</p>
                        <div className='flex gap-2  items-center justify-between'>
                            <div className='flex gap-2 flex-grow-1'>
                                <Rating style={{ maxWidth: 100 }} value={5.00} readOnly />
                                <p>{5.0}</p>
                            </div>
                            <div className='flex gap-2 items-center justify-end'>
                                <AiFillLike></AiFillLike>
                                <p>{5500}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* card 2 */}
            <div className="hero mb-10 rounded-lg bg-base-200">
                <div className="hero-content  flex-col lg:flex-row">
                    <img src="https://img.freepik.com/free-photo/top-view-vegetable-soup-with-meat-inside-plate-grey_140725-36040.jpg?w=1060&t=st=1683212426~exp=1683213026~hmac=abdb92cfb62432bde6a3ad349f22ea121b37a5ef5393e59277bf83e9838fd7ef" className="w-full max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-bold">General Tso's Chicken</h1>
                        <p className="lg:py-6 mt-3 text-lg lg:w-11/12">General Tso's Chicken is a popular Chinese dish that originated in Hunan province. It is made by deep-frying chicken pieces that are coated in a cornstarch batter and then tossed in a sweet and spicy sauce made from soy sauce, sugar, vinegar, and chili paste. The dish is typically garnished with green onions and sesame seeds and served with steamed rice. It is a favorite among Chinese food enthusiasts around the world.</p>
                        <div className='flex gap-2  items-center justify-between'>
                            <div className='flex gap-2 flex-grow-1'>
                                <Rating style={{ maxWidth: 100 }} value={5.00} readOnly />
                                <p>{4.9}</p>
                            </div>
                            <div className='flex gap-2 items-center justify-end'>
                                <AiFillLike></AiFillLike>
                                <p>{3500}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* card 3 */}
            <div className="hero mb-10 rounded-lg bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://img.freepik.com/free-photo/lentil-soup-with-mixed-ingredients-herbs-white-bowl-with-spoon_114579-3083.jpg?w=1060&t=st=1683212578~exp=1683213178~hmac=07576bb95bae6e34970ad6af8693f1663b6792a680c4f329f6d4a7b7fecd7a38" className="w-full max-w-sm rounded-lg shadow-2xl" />
                    <div >
                        <h1 className="text-3xl font-bold">Egg Drop Soup</h1>
                        <p className="lg:py-6 mt-3 text-lg lg:w-11/12">Egg Drop Soup is a simple and comforting Chinese soup made from chicken broth and beaten eggs. The eggs are whisked and then slowly drizzled into the simmering broth, creating thin strands. The soup is often seasoned with soy sauce and garnished with chopped green onions. It is a popular and easy-to-make dish that is often served as an appetizer in Chinese restaurants.</p>
                        <div className='flex gap-2 mt-4 items-center justify-between'>
                            <div className='flex gap-2 flex-grow-1'>
                                <Rating style={{ maxWidth: 100 }} value={5.00} readOnly />
                                <p>{5.00}</p>
                            </div>
                            <div className='flex gap-2 items-center justify-end'>
                                <AiFillLike></AiFillLike>
                                <p>{7900}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PopularRecipes;