import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import imgCover from './../../assets/test.webp';
import img from './../../assets/novel.jpg';
import { FaStar, FaGlasses, FaBookmark } from 'react-icons/fa';
import { TabInfo } from './info/tabInfo';
import { ReviewTab } from './review/ReviewTab';
import { ChapterTab } from './chapterList/ChapterTab';

export const InforPage = () => {
  const [tab, setTab] = useState(1);
  return (
    <div>
      <Header></Header>
      <div className="hidden md:h-80 sm:flex xl:h-96 2xl:h-120 w-full">
        <img src={imgCover} className="w-full h-full" alt="" />
      </div>
      <div className="flex mt-[10px] z-10 ">
        <div className="m-auto  bg-be md:rounded-xl  md:max-w-[1000px] lg:max-w-[1280px]  max-w-[98%] w-full md:-translate-y-20  shadow-md">
          <div className="flex p-6 ">
            <div>
              <img
                src={img}
                alt=""
                className="w-[210px] h-[280px] shadow-lg hover:opacity-90"
              />
            </div>
            <div className="pl-6 w-full overflow-hidden">
              <h2 className="truncate text-2xl font-medium text-gray-700 drop-shadow-xl hover:text-yellow-700">
                Dân Đông Anh Vô Tình Trùng Sinh Trở Thành Bố Thằng X Ông Nội
                Thằng Vinh
              </h2>
              <div className="hidden sm:flex py-4">
                <button className="py-1 px-2 rounded-3xl border-[1px] border-red-500 text-red-500 mr-2">
                  Thế Anh Nguyễn
                </button>
                <button className="py-1 px-2 rounded-3xl border-[1px] border-green-500 text-green-500 mr-2">
                  Thế Anh Nguyễn
                </button>
                <button className="py-1 px-2 rounded-3xl border-[1px] border-yellow-500 text-yellow-500 mr-2">
                  Thế Anh Nguyễn
                </button>
              </div>
              <div className="hidden sm:flex">
                <div>
                  <h5 className="font-medium text-[18px]">500</h5>
                  <h5>Chương</h5>
                </div>
                <div className="pl-16">
                  <h5 className="font-medium text-[18px]">1000000</h5>
                  <h5>Lượt đọc</h5>
                </div>
              </div>
              <div className="flex items-center py-4">
                <div className="flex mr-5">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <span> 5/5 điểm (10 lượt đáng giá)</span>
              </div>
              <div className="pt-3">
                <button className="hover:opacity-75 px-4 py-3 rounded-[50px] border-2 bg-yellow-500 mr-4">
                  <span className="flex items-center text-xl font-semibold text-white">
                    <FaGlasses className="mr-2" /> Đọc Truyện
                  </span>
                </button>
                <button className="hover:opacity-75 px-4 py-3 rounded-[50px] border-2 bg-gray-300">
                  <span className="flex items-center text-xl font-semibold text-black">
                    <FaBookmark className="mr-2" /> Đọc Truyện
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className=" flex p-6 w-full">
            <div className="text-xl w-full font-medium text-center text-gray-700 border-b-2 border-gray-200 ">
              <ul className="flex flex-wrap -mb-px">
                <li
                  className="me-2 p-0 "
                  onClick={() => {
                    setTab(1);
                  }}
                >
                  <span
                    className={`inline-block p-3 border-b-2 border-transparent rounded-t-lg hover:cursor-pointer ${
                      tab === 1
                        ? 'text-yellow-600 border-b-2 border-yellow-600'
                        : ''
                    }`}
                  >
                    Giới thiệu
                  </span>
                </li>
                <li
                  className="me-2 p-0"
                  onClick={() => {
                    setTab(2);
                  }}
                >
                  <span
                    className={`inline-block p-3 border-b-2 border-transparent rounded-t-lg hover:cursor-pointer ${
                      tab === 2
                        ? 'text-yellow-600 border-b-2 border-yellow-600'
                        : ''
                    }`}
                  >
                    Đánh giá
                  </span>
                </li>
                <li
                  className="me-2 p-0"
                  onClick={() => {
                    setTab(3);
                  }}
                >
                  <span
                    className={`inline-block p-3 border-b-2 border-transparent rounded-t-lg hover:cursor-pointer ${
                      tab === 3
                        ? 'text-yellow-600 border-b-2 border-yellow-600'
                        : ''
                    }`}
                  >
                    D.s chương
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex px-6 pb-6 w-full">
            {tab === 1 && <TabInfo />}
            {tab === 2 && <ReviewTab />}
            {tab === 3 && <ChapterTab />}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
