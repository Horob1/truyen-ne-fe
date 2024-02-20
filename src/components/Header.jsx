// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { CiSearch } from 'react-icons/ci';
import { ImUpload2 } from 'react-icons/im';
import { LuMenuSquare } from 'react-icons/lu';
import { IoMdClose } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IoIosLogOut } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineCollections } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { doLogout } from '../redux/action/userAction';
import { toast } from 'react-toastify';
import { logout } from '../services/apiServices';
const Header = () => {
  const [search, setSearch] = useState('');
  const [isShowUserMenu, setIsShowUserMenu] = useState(false);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const account = useSelector((state) => state.user.account);
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const handleLogOutBtn = async () => {
    try {
      const res = await logout();
      dispatch(doLogout());
      toast.info('Quay trở lại sớm nhé bạn yêu💕', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } catch (error) {
      toast.error('Xin thử lại sau💕', {
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
  };
  const handleToggleMenu = () => {
    setToggle(!toggle);
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/novel/search?search=${search}'`);
  };

  return (
    <div className="h-[80px] bg-be sticky drop-shadow z-50">
      <div className="flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto ">
        <Link to="/" className="pl-4">
          <img src={logo} alt="Logo" className="h-[50px]" />
        </Link>

        <div className="relative hidden pl-[18rem]  md:flex">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="search"
              id="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Tìm kiếm"
              className="px-8 py-2 rounded-md w-[320px]"
            />
            <button type="submit" className="absolute top-[12px] right-[16px]">
              <CiSearch />
            </button>
          </form>
        </div>
        <ul className="hidden md:flex flex-row">
          <li className="pr-10 hover:text-green-500">
            <Link to="/up-load" className="flex items-center">
              Đăng truyện <ImUpload2 className="pl-[4px]" />
            </Link>
          </li>
          {!isAuthenticated ? (
            <>
              <li className="pr-4 hover:text-green-500">
                <Link to="/log-in">Đăng nhập</Link>
              </li>
              <li className=" hover:text-green-500">
                <Link to="/register">Đăng ký</Link>
              </li>
            </>
          ) : (
            <div className="relative flex items-center">
              <div
                className="flex items-center"
                onClick={(e) => setIsShowUserMenu(!isShowUserMenu)}
              >
                <img
                  src={
                    account.avatar
                      ? account.avatar
                      : '/src/assets/dfAvaUser.jpg'
                  }
                  className="h-8 w-8 rounded-full"
                  alt="avatar"
                />
                <span className="ml-2 hover:text-yellow-400 hover:cursor-pointer">
                  {account.firstName + ' ' + account.lastName}
                </span>
              </div>

              <div
                className={`${
                  isShowUserMenu ? '' : 'hidden'
                } absolute top-full w-[200px] rounded-xl shadow-2xl bg-white z-20`}
              >
                <ul className="text-gray-700">
                  <li
                    className="pl-3 hover:bg-yellow-50 rounded-t-xl"
                    onClick={() => {
                      setIsShowUserMenu(!isShowUserMenu);
                    }}
                  >
                    <Link to="/user/profile">
                      <span className="flex items-center">
                        <CgProfile className="mr-2 text-gray-500"></CgProfile>{' '}
                        Hồ sơ
                      </span>
                    </Link>
                  </li>
                  <li
                    className="pl-3 hover:bg-yellow-50 "
                    onClick={() => {
                      setIsShowUserMenu(!isShowUserMenu);
                    }}
                  >
                    <Link to="/user/my-collection">
                      <span className="flex items-center">
                        <MdOutlineCollections className="mr-2 text-gray-500"></MdOutlineCollections>{' '}
                        Tủ truyện
                      </span>
                    </Link>
                  </li>
                  <li
                    className="pl-3 hover:bg-yellow-50 rounded-b-xl hover:cursor-pointer"
                    onClick={handleLogOutBtn}
                  >
                    <span className="flex items-center">
                      <IoIosLogOut className="mr-2 "></IoIosLogOut> Đăng xuất
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          )}
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
            <form onSubmit={handleSubmit}>
              <input
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                type="text"
                name=""
                id=""
                placeholder="Tìm kiếm"
                className="px-8 py-2 rounded-md w-full"
              />
              <button className="absolute top-[24px] right-[16px]">
                <CiSearch />
              </button>
            </form>
          </div>
          {!isAuthenticated ? (
            <>
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
            </>
          ) : (
            <>
              <li>
                <Link to="/user/profile">
                  <button
                    onClick={handleToggleMenu}
                    className="btn btn-blue w-full"
                  >
                    Hồ sơ
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/user/my-collection">
                  <button
                    onClick={handleToggleMenu}
                    className="btn btn-blue w-full"
                  >
                    Tủ truyện
                  </button>
                </Link>
              </li>
              <li>
                <button
                  className="btn btn-blue w-full"
                  onClick={handleLogOutBtn}
                >
                  Đăng xuất
                </button>
              </li>
            </>
          )}
        </ul>
      )}
    </div>
  );
};

export default Header;
