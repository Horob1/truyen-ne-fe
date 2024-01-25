import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

export const RegisterPage = () => {
  return (
    <div>
      <div className="flex bg-gradient-to-r from-green-300 via-blue-500 to-purple-600  h-[100vh] bg-[length:300%_300%] animate-color-so-slow w-[100%]">
        <div className="m-auto bg-white rounded-2xl  drop-shadow-sm w-[98%] md:w-[460px] z-10">
          <div>
            <h1 className="text-3xl font-bold text-center pt-8 pb-8">
              Sign Up
            </h1>
          </div>

          <form className="w-[80%] mx-auto">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_first_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  First Name
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_last_name"
                  id="floating_last_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_last_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Last Name
                </label>
              </div>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="floating_username"
                id="floating_username"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_username"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Username
              </label>
            </div>
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
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="password"
                name="floating_password"
                id="floating_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />

              <label
                htmlFor="floating_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Password
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="password"
                name="floating_comfirm_password"
                id="floating_comfirm_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />

              <label
                htmlFor="floating_comfirm_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Password Comfirm
              </label>
            </div>

            <button
              type="submit"
              className="text-white mb-8 w-[100%] rounded-4xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600  hover:opacity-70 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center0"
            >
              Submit
            </button>
            <Link to="/log-in">
              <h5 className="text-sm text-gray-700 hover:text-gray-900 text-center pb-8">
                If you already had an account!
              </h5>
            </Link>
          </form>
        </div>

        <div className="absolute h-[100vh] w-[100%] overflow-hidden">
          <div
            className="absolute animate-in zoom-in-50 repeat-infinite origin-center rotate-45 w-[500px] h-[500px] rounded-full left-[-300px] bg-white opacity-20"
            style={{
              animationDuration: '3s',
            }}
          ></div>
          <div
            className="absolute animate-in zoom-in-50 repeat-infinite origin-center rotate-45 w-[500px] h-[500px] rounded-full right-[-200px] top-[200px] bg-white opacity-20"
            style={{
              animationDuration: '3s',
            }}
          ></div>
          <div
            className="absolute animate-in zoom-in-50 repeat-infinite origin-center rotate-45 w-[500px] h-[500px] rounded-full bottom-[-350px] left-[500px] bg-white opacity-20"
            style={{
              animationDuration: '3s',
            }}
          ></div>
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
    </div>
  );
};
