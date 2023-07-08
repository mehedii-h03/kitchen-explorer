import React from 'react';
import { FiDownload } from "react-icons/fi";
import Pdf from "react-to-pdf";

const Blog = () => {
    const ref = React.createRef();
    return (
        <div className='md:px-7 lg:px-28 pt-4 p-4'>
            <div className='flex gap-3 mb-5 text-2xl justify-end items-center'>
                <h1>Click here to download pdf </h1>

                <Pdf targetRef={ref} filename="blog.pdf">
                    {({ toPdf }) => <button className='btn btn-sm'><FiDownload  onClick={toPdf}></FiDownload></button>}
                </Pdf>
            </div>

            <div ref={ref}>
                {/* question 1 */}
                <article className='mb-4'>
                    <h1 className='text-3xl font-medium mb-4' >1. What is the differences between uncontrolled and controlled components.</h1>
                    <p className='text-gray-500 text-xl '> In React, components can be either controlled or uncontrolled. Here are the differences between the two:</p>
                    <ul className='ms-10 text-gray-500 text-lg' style={{ listStyleType: "disc" }}>
                        <li>In a controlled component, the value of the component is always passed down as a prop, whereas in an uncontrolled component, the value can be accessed using a ref.</li>
                        <li>Controlled components require more code to manage state and update the value, but offer greater control and predictability.</li>
                        <li>Uncontrolled components are simpler and require less code, but offer less control and predictability.</li>
                    </ul>
                </article>
                {/* question-2 */}
                <article className='mb-4'>
                    <h1 className='text-3xl font-medium mb-4' >2. How to validate React props using PropTypes?</h1>
                    <p className='text-gray-500 text-xl '>React provides a utility called PropTypes that can be used to validate props passed to a component. PropTypes helps you to catch errors early in the development process by checking that the values of props passed to a component are of the expected type. Here are some of the common validation rules that we can use with PropTypes:</p>
                    <div className='text-lg mt-1 text-gray-500'>
                        <p> i PropTypes.string : Validates that the prop is a string.</p>
                        <p> ii. PropTypes.number : Validates that the prop is a number.</p>
                        <p> iii. PropTypes.bool : Validates that the prop is a boolean.</p>
                        <p> iv. PropTypes.func : Validates that the prop is a function.</p>
                        <p> v. PropTypes.object' : Validates that the prop is a object.</p>
                    </div>
                </article>
                {/* question 3 */}
                <article className='mb-4'>
                    <h1 className='text-3xl font-medium mb-4' >3. What is the difference between nodejs and express js?</h1>
                    <p className='text-gray-500 text-xl '> Node.js is a JavaScript runtime environment that allows us to run JavaScript code outside of the browser, while Express.js is a framework for building web applications using Node.js. Node.js provides a core set of libraries and APIs that allow us to build server-side applications in JS, including the ability to handle incoming requests, manage databases, and perform other server-side tasks. Express.js is a lightweight and flexible framwork that builds on top of Node.js and provides a set of powerful features and utilities for building web applications, including routing, middleware.</p>
                </article>
                {/* question 4 */}
                <article className='mb-5'>
                    <h1 className='text-3xl font-medium mb-4' >4. What is a custom hook, and why will you create a custom hook?</h1>
                    <p className='text-gray-500 text-xl '> In React, a custom hook is a function that starts with the word 'use' and allows us to reuse stateful logic across different components. Custom hooks are a powerful tool for building reusable and modular code in React.
                        Here are some reasons why we might want to create a custom hook:</p>
                    <div className='text-gray-500 text-xl mt-2'>
                        <p>i. <span className='font-semibold'>Reusability</span>: If we find ourself repeating the same code across multiple components, it's a good sign that we could benefit from creating a custom hook.</p>
                        <p>ii. <span className='font-semibold'>Abstraction</span>: Custom hooks can be used to abstract away complex or repetitive logic and provide a simpler and more intuitive interface to our components.</p>
                        <p>iii. <span className='font-semibold'> Readability</span>: By creating a custom hook, we can make our code more readable and easier to understand, since we can name the hook after the functionality it provides, and reuse it across multiple components.</p>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default Blog;