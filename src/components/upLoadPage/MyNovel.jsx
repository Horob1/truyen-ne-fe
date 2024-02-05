import React from 'react';
import { IoClose } from 'react-icons/io5';
import { IoAddOutline } from 'react-icons/io5';
import { CiViewList } from 'react-icons/ci';
import { FiEdit } from 'react-icons/fi';
import { CiSquareCheck } from 'react-icons/ci';
export const MyNovel = () => {
  return (
    <div className="mx-auto mt-[2%] w-[96%]  rounded-lg p-8">
      <h1 className="text-xl font-medium">Truyện đã đăng</h1>
      <small>Danh sách tác phẩm của bạn!</small>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="bg-white p-6">
          <div className="flex justify-between">
            <h5 className="text-xl flex-1 overflow-hidden line-clamp-1">
              Tên tác phẩm của bạn
            </h5>
            <button>
              <IoClose className="text-red-600"></IoClose>
            </button>
          </div>
          <div className="pt-4">
            <span className="text-red-600">Tình trạng: Chưa hoàn thành!</span>
          </div>
          <div className="pt-4 flex">
            <button className="p-2 m-2 bg-be rounded-md">
              <IoAddOutline className="text-gray-500" />
            </button>
            <button className="p-2 m-2 bg-be rounded-md">
              <CiViewList />
            </button>
            <button className="p-2 m-2 bg-be rounded-md">
              <FiEdit className="text-gray-500" />
            </button>
            <button className="p-2 m-2 bg-be rounded-md">
              <CiSquareCheck className="text-green-700" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
