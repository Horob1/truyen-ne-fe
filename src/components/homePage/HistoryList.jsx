import React from 'react';
import novel from './../../assets/novel.jpg';
import { FaTrash } from 'react-icons/fa';

export const HistoryList = () => {
  return (
    <div className="p-8 w-full ">
      <div className="flex justify-between items-center	 text-xl pb-8 ">
        <h2 className="text-start font-bold ">Truyện đã đọc</h2>
        <a
          href=""
          className=" hover:text-yellow-400 text-yellow-900 text-base align-baseline"
        >
          Xem tất cả
        </a>
      </div>
      <div className="md:h-[320px] md:border-b-2">
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
      </div>
    </div>
  );
};
