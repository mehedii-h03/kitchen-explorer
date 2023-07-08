import React, { useContext, useState } from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Login = () => {
    const [error, setError] = useState("");
    const { loginUser, loginUserWithGoogle, loginUserWithGithub } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const from = location.state?.from?.pathname || "/"

    // email password
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                navigate(from, { replace: true })
                setError('')

            })
            .catch(error => {
                setError("Email address or password doesn't match")
            })
    }

    // google
    const handlerSingInWithGoogle = () => {
        loginUserWithGoogle()
            .then(result => {
                console.log(result.user);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }

    // github
    const handlerSingUpWithGithub = () => {
        loginUserWithGithub()
            .then(result => {
                console.log(result.user);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="flex bg-gray-100 lg:w-2/4 mx-auto mt-6 lg:mt-5 rounded-md">
            {/* Left side with form */}
            <div className="flex flex-col justify-center items-center py-14 px-6 lg:px-8 w-full md:w-1/2">
                <h1 className="text-3xl font-bold mb-8">Login</h1>
                <form onSubmit={handleLogin} className="w-full max-w-sm">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name='email' type="email" placeholder="Enter your email" required />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter password" required />
                    </div>
                    <button className="me-2 btn btn-sm" type='submit'>sign up</button>
                    <p className='mt-4 text-red-600'>{error}</p>
                    <p className='text-sm text center'>Don't have an Account? <Link to="/registration" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                        Sing Up
                    </Link>
                    </p>
                </form>
                <div className="flex flex-col gap-3 items-center mt-6">
                    <button onClick={handlerSingInWithGoogle} className="btn btn-info font-bold text-white">
                        <FaGoogle className='me-2'></FaGoogle>Sign in with Google
                    </button>
                    <button onClick={handlerSingUpWithGithub} className="btn font-bold">
                        <FaGithub className='me-2' />Sign in with GitHub
                    </button>
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

export default Login;