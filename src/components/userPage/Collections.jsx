import React, { useState } from 'react';
import { MyPagination } from '../MyPagination';
import novel from './../../assets/novel.jpg';
import { FaTrash, FaTruckMonster } from 'react-icons/fa';
export const Collections = () => {
  const [isActive, setIsActive] = useState(FaTruckMonster);
  return (
    <div className="p-8">
      <div className="flex text-lg font-medium border-b-2">
        <div
          className="mr-2 px-2"
          onClick={() => {
            setIsActive(true);
          }}
        >
          <span
            className={`py-2 px-1 block  mb-1 ${
              isActive
                ? 'text-yellow-500 border-yellow-500 border-b-4 mb-0'
                : ''
            }`}
          >
            Đã đọc
          </span>
        </div>
        <div
          className="ml-2 px-2 "
          onClick={() => {
            setIsActive(false);
          }}
        >
          <span
            className={`py-2 px-1 block  mb-1 ${
              !isActive
                ? 'text-yellow-500 border-yellow-500 border-b-4 mb-0'
                : ''
            }`}
          >
            Yêu thích
          </span>
        </div>
      </div>
      <div className="w-full ">
        <div className="pb-4">
          {/*  */}
          <div className="flex pt-4">
            <img src={novel} alt="" className="h-[47px] w-[32px]" />
            <div className="pl-4 overflow-hidden ">
              <h2 className=" truncate text-sm font-semibold  hover:text-yellow-400 hover:drop-shadow-md">
                Vạn Giáo Tổ Sư Đấm Vào Mồm Hiệp Tuấn Ngu vcl Haha
              </h2>
              <div className="flex items-center pt-2 ">
                <p className="text-sm pr-2">Đang đọc: chương 1</p>{' '}
                <button>
                  <FaTrash className="w-4 hover:text-red-600" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex pt-4">
            <img src={novel} alt="" className="h-[47px] w-[32px]" />
            <div className="pl-4 overflow-hidden ">
              <h2 className=" truncate text-sm font-semibold  hover:text-yellow-400 hover:drop-shadow-md">
                Vạn Giáo Tổ Sư Đấm Vào Mồm Hiệp Tuấn Ngu vcl Haha
              </h2>
              <div className="flex items-center pt-2 ">
                <p className="text-sm pr-2">Đang đọc: chương 1</p>{' '}
                <button>
                  <FaTrash className="w-4 hover:text-red-600" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex pt-4">
            <img src={novel} alt="" className="h-[47px] w-[32px]" />
            <div className="pl-4 overflow-hidden ">
              <h2 className=" truncate text-sm font-semibold  hover:text-yellow-400 hover:drop-shadow-md">
                Vạn Giáo Tổ Sư Đấm Vào Mồm Hiệp Tuấn Ngu vcl Haha
              </h2>
              <div className="flex items-center pt-2 ">
                <p className="text-sm pr-2">Đang đọc: chương 1</p>{' '}
                <button>
                  <FaTrash className="w-4 hover:text-red-600" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex pt-4">
            <img src={novel} alt="" className="h-[47px] w-[32px]" />
            <div className="pl-4 overflow-hidden ">
              <h2 className=" truncate text-sm font-semibold  hover:text-yellow-400 hover:drop-shadow-md">
                Vạn Giáo Tổ Sư Đấm Vào Mồm Hiệp Tuấn Ngu vcl Haha
              </h2>
              <div className="flex items-center pt-2 ">
                <p className="text-sm pr-2">Đang đọc: chương 1</p>{' '}
                <button>
                  <FaTrash className="w-4 hover:text-red-600" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex pt-4">
            <img src={novel} alt="" className="h-[47px] w-[32px]" />
            <div className="pl-4 overflow-hidden ">
              <h2 className=" truncate text-sm font-semibold  hover:text-yellow-400 hover:drop-shadow-md">
                Vạn Giáo Tổ Sư Đấm Vào Mồm Hiệp Tuấn Ngu vcl Haha
              </h2>
              <div className="flex items-center pt-2 ">
                <p className="text-sm pr-2">Đang đọc: chương 1</p>{' '}
                <button>
                  <FaTrash className="w-4 hover:text-red-600" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex pt-4">
            <img src={novel} alt="" className="h-[47px] w-[32px]" />
            <div className="pl-4 overflow-hidden ">
              <h2 className=" truncate text-sm font-semibold  hover:text-yellow-400 hover:drop-shadow-md">
                Vạn Giáo Tổ Sư Đấm Vào Mồm Hiệp Tuấn Ngu vcl Haha
              </h2>
              <div className="flex items-center pt-2 ">
                <p className="text-sm pr-2">Đang đọc: chương 1</p>{' '}
                <button>
                  <FaTrash className="w-4 hover:text-red-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MyPagination />
    </div>
  );
};
