// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { CiSearch } from 'react-icons/ci';
import { ImUpload2 } from 'react-icons/im';
import { LuMenuSquare } from 'react-icons/lu';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const [toggle, setToggle] = useState(false);
  const handleToggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <div className="h-[80px] bg-be sticky drop-shadow z-50">
      <div className="flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto ">
        <Link to="/" className="pl-4">
          <img src={logo} alt="Logo" className="h-[50px]" />
        </Link>

        <div className="relative hidden pl-[18rem]  md:flex">
          <input
            type="text"
            name=""
            id=""
            placeholder="Tìm kiếm"
            className="px-8 py-2 rounded-md w-[320px]"
          />
          <button className="absolute top-[12px] right-[16px]">
            <CiSearch />
          </button>
        </div>

        <ul className="hidden md:flex flex-row">
          <li className="pr-10 hover:text-green-500">
            <Link to="/up-load" className="flex items-center">
              Đăng truyện <ImUpload2 className="pl-[4px]" />
            </Link>
          </li>
          <li className="pr-4 hover:text-green-500">
            <Link to="/log-in">Đăng nhập</Link>
          </li>
          <li className=" hover:text-green-500">
            <Link to="/register">Đăng ký</Link>
          </li>
        </ul>

        <div onClick={handleToggleMenu}>
          {!toggle ? (
            <LuMenuSquare className="md:hidden mr-4 text-3xl" />
          ) : (
            <IoMdClose className="md:hidden mr-4 text-3xl" />
          )}
        </div>
      </div>
      {toggle && (
        <ul className="absolute bg-be px-8 w-full md:hidden pb-4 z-50">
          <div className="relative py-[12px]">
            <input
              type="text"
              name=""
              id=""
              placeholder="Tìm kiếm"
              className="px-8 py-2 rounded-md w-full"
            />
            <button className="absolute top-[24px] right-[16px]">
              <CiSearch />
            </button>
          </div>
          <li>
            <Link to="/log-in">
              <button className="btn btn-blue w-full">Đăng nhập</button>
            </Link>
          </li>
          <li>
            <Link to="/register">
              <button className="btn btn-blue w-full">Đăng ký</button>
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
