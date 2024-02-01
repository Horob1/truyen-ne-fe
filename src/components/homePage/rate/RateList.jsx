import React, { useState } from 'react';
import { FaMedal } from 'react-icons/fa';
import { GrView } from 'react-icons/gr';
import { FaPencilAlt } from 'react-icons/fa';
import { FiBook } from 'react-icons/fi';
import novel from '../../../assets/novel.jpg';

export const RateList = () => {
  const [isShowBtn, setIsShowBtn] = useState(false);
  return (
    <div
      className="md:col-span-1 w-full m-auto bg-be rounded-xl shadow-xl max-w-[400px]"
      onMouseOver={() => {
        setIsShowBtn(true);
      }}
      onMouseLeave={() => {
        setIsShowBtn(false);
      }}
    >
      <div className="p-8  text-xl flex justify-between">
        <h2 className="text-start font-bold ">Truyện đã đọc</h2>
        {isShowBtn ? (
          <a
            href=""
            className=" hover:text-yellow-400 text-yellow-900 text-base align-baseline ml-4"
          >
            Xem tất cả
          </a>
        ) : (
          ''
        )}
      </div>
      <div className="p-8 pt-0 text-base">
        {/*  */}
        <div className="flex py-2 border-b-2 justify-between">
          <h5>
            <FaMedal className="w-6 h-6 text-yellow-300" />
          </h5>
          <div className="overflow-hidden pl-2 mr-2 text-sm">
            <h2 className="truncate text-base font-semibold  hover:text-yellow-400 hover:drop-shadow-md">
              Ta hồn Hoa Thánh nhưng thân xác Thanh Hoá
            </h2>
            <span className="flex items-center text-green-500">
              <GrView className="mr-2"></GrView>100.000
            </span>
            <span className="flex items-center text-gray-500 truncate">
              <FaPencilAlt className="mr-2" /> Thế Anh
            </span>
            <span className="flex items-center text-gray-500 truncate">
              <FiBook className="mr-2" /> Huyền Huyễn
            </span>
          </div>
          <div>
            <a href="" className="block w-[75px] h-[100px]">
              <img
                src={novel}
                alt=""
                className="w-[75px] h-[100px] shadow-md hover:scale-110"
              />
            </a>
          </div>
        </div>
        {/*  */}
        <div className="flex py-2 border-b-2 justify-between items-center">
          <h5>
            <FaMedal className="w-6 h-6 text-gray-400" />
          </h5>
          <h2 className="truncate text-base font-semibold pl-2 hover:text-yellow-400 hover:drop-shadow-md">
            Ta hồn Hoa Thánh nhưng thân xác Thanh Hoá
          </h2>
          <span className=" text-gray-500 text-end text-sm">100.000</span>
        </div>
        {/*  */}
        <div className="flex py-2 border-b-2 justify-between items-center">
          <h5>
            <FaMedal className="w-6 h-6 text-yellow-600" />
          </h5>
          <h2 className="truncate text-base font-semibold pl-2 hover:text-yellow-400 hover:drop-shadow-md">
            Ta hồn Hoa Thánh nhưng thân xác Thanh Hoá
          </h2>
          <span className=" text-gray-500 text-end text-sm">100.000</span>
        </div>
        {/*  */}
        <div className="flex py-2 border-b-2 justify-between items-center">
          <h5 className="text-base font-medium ml-[6px] mr-2">4</h5>
          <h2 className="truncate text-base font-semibold pl-2 hover:text-yellow-400 hover:drop-shadow-md">
            Ta hồn Hoa Thánh nhưng thân xác Thanh Hoá
          </h2>
          <span className=" text-gray-500 text-end text-sm">100.000</span>
        </div>
        
      </div>
    </div>
  );
};
