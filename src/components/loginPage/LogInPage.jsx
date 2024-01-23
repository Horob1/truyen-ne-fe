import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";


export const LogInPage = () => {
  return (
    <div className="flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  h-[100vh] bg-[length:300%_300%] animate-color-so-slow w-[100%]">
      <div className="m-auto bg-white rounded-2xl  drop-shadow-sm w-[98%] md:w-[460px] z-10">
        <div>
          <h1 className="text-3xl font-bold text-center pt-8 pb-8">Login</h1>
        </div>

        <form class="w-[80%] mx-auto">
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="password"
              name="floating_password"
              id="floating_password"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />

            <label
              for="floating_password"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
            <Link to="/forgot-pwd"><h5 className='text-sm text-gray-400 hover:text-pink-700 text-end'>Forgot password?</h5></Link>
          </div>

          <button
            type="submit"
            class="text-white w-[100%] rounded-4xl bg-gradient-to-r from-violet-500 to-fuchsia-500  hover:opacity-70 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center0"
          >
            Submit
          </button>
        </form>

        <h5 className='text-sm text-gray-500  text-center p-8'>Or Log-in Using</h5>
        <div className='m-auto flex justify-center align-middle pb-[160px]'>
          <FaFacebook className='text-blue-700 text-4xl mr-4'></FaFacebook>
          <FaGoogle className='text-red-600 text-4xl ml-4' ></FaGoogle>
        </div>
        <h5 className='text-sm text-gray-500  text-center p-1'>Or Sign-up</h5>
        <Link to="/register"><h5 className='text-sm text-gray-500 hover:text-gray-700 text-center pb-8'>Sign-up</h5></Link>
      </div>

      <div className='absolute origin-center rotate-45 w-[500px] h-[500px] rounded-3xl left-[-300px] bg-white opacity-20'></div>
     
      <div className='absolute origin-center rotate-45 w-[500px] h-[500px] rounded-3xl right-[-400px] top-[200px] bg-white opacity-20'></div>
      <div className='absolute origin-center rotate-45 w-[700px] h-[500px] rounded-3xl bottom-[-350px] left-[500px] bg-white opacity-20'></div>
      <div className='absolute origin-center rotate-6 w-[200px] h-[300px] rounded-3xl bottom-[500px] left-[600px] bg-white opacity-20'></div>
    </div>
  );
};
