import React from 'react';

const Carousel = () => {
    return (
        <div className='lg:px-28 mx-auto px-4'>
            <div className="carousel">
                {/* slide 1 */}
                <div id="slide1" className="carousel-item relative lg:h-[620px] w-full">
                    <img src="https://img.freepik.com/free-photo/beef-ball-fried-dark-wooden-surface_1150-43624.jpg?w=1060&t=st=1683016084~exp=1683016684~hmac=dce4dcfb896fa2eadc0f8a70352f36b80d377e9ccd18be23427eedff557c1715" className="w-full" />
                    {/* image overlay */}
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div>
                            <h2 className="text-white lg:mb-8 text-2xl lg:text-6xl line font-bold text-center">Discover Delicious</h2>
                            <h2 className='text-white text-2xl lg:text-6xl line font-bold text-center'>Recipes Around the
                                <span className='text-[#f87272]'> World</span></h2>
                            <div className='mt-8 text-center'>
                                <button className="btn lg:px-6 lg:text-xl btn-outline btn-error">Get Started</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Carousel;