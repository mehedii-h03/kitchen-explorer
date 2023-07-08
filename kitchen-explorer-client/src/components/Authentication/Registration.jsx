import React, { useContext, useState } from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const Registration = () => {
    const { user, createUser, loginUserWithGoogle, profilePicUpdate, loading, loginUserWithGithub } = useContext(AuthContext);

    const [error, setError] = useState("");

    const navigate = useNavigate();
    const handlerSingUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, photo, password);

        if (password.length < 6) {
            setError("The password is less than 6 characters")
            return
        }
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                toast.success('Successfully account created')
                // update profile pic
                profilePicUpdate(loggedUser, {
                    displayName: name, photoURL: photo
                })
                    .then(() => {
                        //photo updated
                    })
                    .catch(error => {
                        console.log(error.message);
                    })

                navigate('/')
            })
            .catch(err => {
                console.log(err.message);
            })



        form.reset()
    }

    const handlerSingUpWithGoogle = () => {
        loginUserWithGoogle()
            .then(result => {
                console.log(result.user);
                navigate('/')
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handlerSingUpWithGithub = () => {
        loginUserWithGithub()
            .then(result => {
                console.log(result.user);
                navigate('/')
            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <div className="flex  bg-gray-100 lg:w-3/4 mx-auto mt-3 rounded-md">
            {/* Left side with form */}
            <div className="flex flex-col justify-center items-center py-4 px-6 lg:px-0 w-full md:w-1/2">
                <h1 className="text-3xl font-bold mb-8">Registration</h1>
                <form onSubmit={handlerSingUp} className="w-full max-w-sm">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" name='name' type="text" placeholder="Enter your name" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name='email' type="email" placeholder="Enter your email" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="photo">
                            Photo Url
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="photo" name='photo' type="text" placeholder="Enter your photo url" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter password" required />
                    </div>
                    <button className="me-2 btn btn-sm" type='submit'>sign up</button>
                    <p className='mt-4 text-red-600'>{error}</p>
                    <p className='text-sm text center'>Already have and account <Link to="/login" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                        Sing In
                    </Link>
                    </p>
                </form>
                <div className="flex flex-col lg:flex-row  gap-3 lg:gap-5 items-center mt-4">
                    <button onClick={handlerSingUpWithGoogle} className="btn btn-info font-bold text-white">
                        <FaGoogle className='me-2'></FaGoogle>Sign Up with Google
                    </button>
                    <button onClick={handlerSingUpWithGithub} className="btn font-bold">
                        <FaGithub className='me-2' />Sign Up with GitHub
                    </button>
                    <Toaster />
                </div>
            </div>
            {/* Right side with background image and text overlay */}
            <div className="hidden md:flex md:flex-col md:justify-center md:items-center md:w-1/2 md:relative md:bg-cover md:bg-center" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/beef-ball-fried-dark-wooden-surface_1150-43624.jpg?w=1060&t=st=1683016084~exp=1683016684~hmac=dce4dcfb896fa2eadc0f8a70352f36b80d377e9ccd18be23427eedff557c1715')" }}>
                <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
                <h2 className="text-4xl text-white font-bold text-center z-10 mb-8">Kitchen Explorer</h2>
            </div>
        </div>



    );
};

export default Registration;