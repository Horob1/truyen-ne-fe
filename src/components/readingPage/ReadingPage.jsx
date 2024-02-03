import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
import { FiBook } from 'react-icons/fi';
import { FaPenToSquare } from 'react-icons/fa6';
import { TbTextSize } from 'react-icons/tb';
import { FaRegHeart } from 'react-icons/fa6';
import { FaRegClock } from 'react-icons/fa';
import { MdArrowBack } from 'react-icons/md';
import { IoSettingsOutline } from 'react-icons/io5';
import { FaRegBookmark } from 'react-icons/fa';
import { IoChatboxEllipsesOutline } from 'react-icons/io5';

import CommentList from './CommentList';
import { ToggleSwitch } from 'flowbite-react';
import { FontCombobox } from './FontCombobox';
import { TextSizeCombobox } from './TextSizeCombobox';

export const ReadingPage = () => {
  const [isShowSetting, setIsShowSetting] = useState(false);
  const [switch1, setSwitch1] = useState(false);
  return (
    <div>
      <Header></Header>
      <div className="w-full flex bg-be text-black dark:text-white dark:bg-black ">
        <div className="relative m-auto bg-read dark:bg-gray-700 rounded-xl  md:max-w-[1080px]  max-w-[98%] w-full my-6 md:p-12 p-4">
          <div className="hidden md:flex absolute right-[-10px] top-0">
            <ul className="fixed ">
              <li className="block py-4 px-8 bg-read dark:bg-gray-700  border-b-2 border-gray-300 rounded-t-xl">
                <MdArrowBack className="text-2xl" />
              </li>
              <li
                className={`relative block py-4 px-8 border-b-2 border-gray-300 ${
                  isShowSetting
                    ? 'bg-white dark:bg-gray-400'
                    : 'bg-read dark:bg-gray-700 '
                }`}
              >
                <IoSettingsOutline
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsShowSetting(!isShowSetting);
                  }}
                  className="text-2xl "
                />
                <div
                  className={`absolute bg-white dark:bg-gray-400 right-full top-0 w-[500px] ${
                    isShowSetting ? '' : 'hidden'
                  } `}
                >
                  <div className="p-8 grid grid-cols-3 gap-4">
                    <span className="col-span-1">Theme:</span>
                    <ToggleSwitch
                      className="col-span-2"
                      checked={switch1}
                      label={!switch1 ? 'Light Mode' : 'Dark Mode'}
                      onChange={setSwitch1}
                    />

                    <span className="col-span-1">Font Chữ:</span>
                    <div className="col-span-2 p-2  rounded-lg border-2">
                      <FontCombobox />
                    </div>
                    <span className="col-span-1">Cỡ chữ:</span>
                    <div className="col-span-2 p-2  rounded-lg border-2">
                      <TextSizeCombobox />
                    </div>
                  </div>
                </div>
              </li>
              <li className="block py-4 px-8 bg-read dark:bg-gray-700  border-b-2 border-gray-300 ">
                <FaRegBookmark className="text-2xl" />
              </li>
              <li className="block py-4 px-8 bg-read dark:bg-gray-700  border-gray-300 rounded-b-xl">
                <IoChatboxEllipsesOutline className="text-2xl" />
              </li>
            </ul>
          </div>
          <div className="hidden md:flex justify-between px-4">
            <button className="px-6 py-2 hover:opacity-75 rounded-[50px] bg-gray-400 disabled:opacity-50">
              <div className="w-[140px] justify-between flex items-center text-base font-medium text-white">
                <FaLongArrowAltLeft className="mr-2" />
                <span> Chương Trước</span>
              </div>
            </button>
            <button className="px-6 py-2 hover:opacity-75 rounded-[50px] bg-gray-400 disabled:opacity-50">
              <div className="w-[140px] justify-between flex items-center text-base font-medium text-white">
                Chương Sau
                <FaLongArrowAltRight className="ml-2" />
              </div>
            </button>
          </div>
          <div className="md:pt-12">
            <h1 className="md:text-3xl text-xl ">
              Chương 1: Tôi là phú nhị đại đến từ Nam Định, mục tiêu phịch hết
              gái Hà Nội và NTR anh em ba sáu
            </h1>

            <div className="md:flex hidden pt-6 ">
              <div className="flex items-center">
                <FiBook className="mr-1" />{' '}
                <span className="text-base">Tên tôi là thế anh</span>
              </div>
              <div className="flex items-center ml-6">
                <FaPenToSquare className="mr-1" />{' '}
                <span className="text-base">Nguyễn Thế Anh</span>
              </div>
              <div className="flex items-center ml-6">
                <TbTextSize className="mr-1" />{' '}
                <span className="text-base">2024 Chữ</span>
              </div>
              <div className="flex items-center ml-6">
                <FaRegHeart className="mr-1" />{' '}
                <span className="text-base">250</span>
              </div>
            </div>
            <div className="flex items-center mt-1">
              <FaRegClock className="mr-1" />{' '}
              <span className="text-base">2023-08-01 21:05:20</span>
            </div>
            <div className="pt-6 leading-7 text-xl font-light">
              <article>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Provident, doloremque? Debitis cupiditate dolorum incidunt
                dicta! Blanditiis ducimus quibusdam, maxime similique voluptate
                molestias reprehenderit rerum delectus tenetur, aperiam commodi
                ea ipsam.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
                recusandae saepe. Recusandae quaerat fugiat laudantium eum, quo
                rem minima et, officiis inventore voluptas voluptates, illum
                sunt ullam accusamus expedita soluta!
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
                recusandae saepe. Recusandae quaerat fugiat laudantium eum, quo
                rem minima et, officiis inventore voluptas voluptates, illum
                sunt ullam accusamus expedita soluta!
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
                recusandae saepe. Recusandae quaerat fugiat laudantium eum, quo
                rem minima et, officiis inventore voluptas voluptates, illum
                sunt ullam accusamus expedita soluta!
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
                recusandae saepe. Recusandae quaerat fugiat laudantium eum, quo
                rem minima et, officiis inventore voluptas voluptates, illum
                sunt ullam accusamus expedita soluta!
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
                recusandae saepe. Recusandae quaerat fugiat laudantium eum, quo
                rem minima et, officiis inventore voluptas voluptates, illum
                sunt ullam accusamus expedita soluta!
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
                recusandae saepe. Recusandae quaerat fugiat laudantium eum, quo
                rem minima et, officiis inventore voluptas voluptates, illum
                sunt ullam accusamus expedita soluta!
              </article>
              =========
            </div>
            <div className="pt-8 md:pt-16 grid grid-cols-1 md:grid-cols-2">
              <button className="flex text-xl py-4 justify-center items-center border-[1px] border-gray-300">
                <FaLongArrowAltLeft className="mr-2" />
                <span> Chương Trước</span>
              </button>
              <button className="flex text-xl py-4 justify-center items-center border-[1px] border-gray-300">
                <span> Chương Sau</span>
                <FaLongArrowAltRight className="ml-2" />
              </button>
            </div>
            <div className="mt-8">
              <CommentList />
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
