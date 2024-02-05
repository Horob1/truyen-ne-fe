import React, { useState } from 'react';
import { IoMdAdd } from 'react-icons/io';
import { Link } from 'react-router-dom';

export const Author = () => {
  const [authorList, setAuthorList] = useState([]);
  return (
    <div className="mx-auto mt-[2%] w-[96%] bg-white rounded-lg p-8">
      <Link to={'/admin/author/add-new'}>
        <button className="absolute p-6 bg-red-600 bottom-10 right-10 rounded-full shadow-2xl shadow-red-800 hover:">
          <IoMdAdd className="text-2xl text-white" />
        </button>
      </Link>
      <form>
        <div className="flex-col">
          <div>
            <label htmlFor="floating_slug" className="pl-2 font-medium ">
              Tên tác giả
            </label>
          </div>
          <input
            type="text"
            name="floating_slug"
            id="floating_slug"
            className="w-full mt-2 rounded-md"
            required
          />
        </div>

        <div className="flex  justify-center pt-8">
          <button
            type="submit"
            className="text-white w-full p-2 rounded-xl bg-red-500  hover:opacity-70 font-medium text-base  text-center"
          >
            Tìm
          </button>
        </div>
      </form>

      <div className="py-8">
        <h1 className="text-3xl font-medium">{`Kết quả (${authorList.length})`}</h1>
        <div className="grid grid-cols-4 gap-4 py-4">
          <div className="w-full flex p-4 rounded-sm shadow-md justify-between">
            <div className="ml-2 grid flex-1">
              <small className="text-gray-500 overflow-hidden truncate">
                id: s3745495ghjfgdh346
              </small>
              <h4 className="overflow-hidden truncate">
                Tên: Anh Nguyễn sdfgsdjhfshdjfghj
              </h4>
            </div>
            <div className="grid content-between pl-2">
              <Link
                to={'/admin/author/:aId'}
                className="px-8 py-1 bg-yellow-400 hover:opacity-90 text-white rounded-lg mb-2"
              >
                Sửa
              </Link>
              <button className="px-8 py-1 bg-red-500 hover:opacity-90 text-white rounded-lg">
                Xoá
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
