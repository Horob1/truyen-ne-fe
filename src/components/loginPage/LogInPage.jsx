import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import logo from '../../assets/logo.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { logIn } from '../../services/apiServices';

export const LogInPage = () => {
  const [showPwd, setShowPwd] = useState(false);
  const [username, setUsername] = useState('');
  const [pwd, setPwd] = useState('');
  const navigate = useNavigate();
  const handleSubmitBtn = async (event) => {
    event.preventDefault();
    //validate

    // call api
    let res;
    try {
      res = await logIn(username, pwd);
    } catch (error) {
      return toast.error(error.response.data, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }

    sessionStorage.setItem('accessToken', res.data.accessToken);
    sessionStorage.setItem('refreshToken', res.data.refreshToken);
    return navigate('/');
  };

  return (
    <div className="flex bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400  h-[100vh] bg-[length:300%_300%] animate-color-so-slow w-[100%]">
      <div className="m-auto bg-white rounded-2xl  drop-shadow-sm w-[98%] md:w-[460px] z-10">
        <div>
          <h1 className="text-3xl font-bold text-center pt-8 pb-8">Login</h1>
        </div>

        <form className="w-[80%] mx-auto" id="my-form" onSubmit={handleSubmitBtn}>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_username"
              id="floating_username"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
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
              type="password"
              name="floating_password"
              id="floating_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={pwd}
              onChange={(event) => {
                setPwd(event.target.value);
              }}
              required
            />
            <button
              type="button"
              className="absolute top-[20%] right-2 z-10 p-2"
              onClick={() => {
                setShowPwd(!showPwd);
                if (showPwd)
                  document
                    .getElementById('floating_password')
                    .setAttribute('type', 'password');
                else
                  document
                    .getElementById('floating_password')
                    .setAttribute('type', 'text');
              }}
            >
              {!showPwd ? <FaEye /> : <FaEyeSlash />}
            </button>

            <label
              htmlFor="floating_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
            <Link to="/forgot-pwd">
              <h5 className="text-sm text-gray-400 hover:text-pink-700 text-end">
                Forgot password?
              </h5>
            </Link>
          </div>

          <button
            type="submit"
            className="text-white w-[100%] rounded-4xl bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400  hover:opacity-70 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center0"
          >
            Submit
          </button>
        </form>

        <h5 className="text-sm text-gray-500  text-center p-8">
          Or Log-in Using
        </h5>
        <div className="m-auto flex justify-center align-middle pb-[160px]">
          <FaFacebook className="text-blue-700 text-4xl mr-4"></FaFacebook>
          <FaGoogle className="text-red-600 text-4xl ml-4"></FaGoogle>
        </div>
        <Link to="/register">
          <h5 className="text-sm text-gray-700 hover:text-gray-900 text-center pb-8">
            Or Sign-up
          </h5>
        </Link>
      </div>

      <div className="absolute h-[100vh] w-[100%] overflow-hidden">
        <div className="absolute animate-spin-slow origin-center rotate-45 w-[500px] h-[500px] rounded-3xl left-[-300px] bg-white opacity-20"></div>
        <div className="absolute animate-spin-slow origin-center rotate-45 w-[500px] h-[500px] rounded-3xl right-[-400px] top-[200px] bg-white opacity-20"></div>
        <div className="absolute animate-spin-slow origin-center rotate-45 w-[700px] h-[500px] rounded-3xl bottom-[-350px] left-[500px] bg-white opacity-20"></div>
        <div className="absolute animate-spin-slow origin-center rotate-6 w-[200px] h-[300px] rounded-3xl bottom-[500px] left-[600px] bg-white opacity-20"></div>
      </div>

      <div className="absolute left-1 top-1 hidden md:flex">
        <Link to="/" className="pl-4">
          <img src={logo} alt="Logo" className="h-[50px]" />
        </Link>
      </div>
      <ToastContainer />
    </div>
  );
};
