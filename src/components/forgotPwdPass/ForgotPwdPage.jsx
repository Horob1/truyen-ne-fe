import React from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

export const ForgotPwdPage = () => {
  return (
    <div className="flex bg-gradient-to-r from-rose-400 to-orange-300 h-[100vh] bg-[length:300%_300%] animate-color-so-slow w-[100%]">
      <div className="m-auto bg-white rounded-2xl  drop-shadow-sm w-[98%] md:w-[460px] z-10">
        <div>
          <h1 className="text-3xl font-bold text-center pt-8 pb-8">
            Forgot Password
          </h1>
        </div>

        <form className="w-[80%] mx-auto ">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <button
            type="submit"
            className="text-white w-[100%] mb-8 rounded-4xl bg-gradient-to-r  from-rose-400 to-orange-300  hover:opacity-70 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center0"
          >
            Send Code
          </button>
        </form>
      </div>

      <div className="absolute h-[100vh] w-[100%] overflow-hidden">
        <div
          className="absolute animate-in zoom-in-50 repeat-infinite origin-center rotate-45 w-[500px] h-[500px] rounded-full left-[-300px] bg-white opacity-20"
          style={{
            animationDuration: '3s',
          }}
        ></div>
        <div className="absolute animate-spin-slow origin-center rotate-45 w-[500px] h-[500px] rounded-3xl right-[-400px] top-[200px] bg-white opacity-20"></div>
        <div className="absolute animate-spin-slow origin-center rotate-45 w-[700px] h-[500px] rounded-3xl bottom-[-350px] left-[500px] bg-white opacity-20"></div>
        <div
          className="absolute animate-in zoom-in-50 repeat-infinite origin-center rotate-6 w-[300px] h-[300px] rounded-full bottom-[500px] left-[600px] bg-white opacity-20"
          style={{
            animationDuration: '3s',
          }}
        ></div>
      </div>

      <div className="absolute left-1 top-1 hidden md:flex">
        <Link to="/" className="pl-4">
          <img src={logo} alt="Logo" className="h-[50px]" />
        </Link>
      </div>
    </div>
  );
};
