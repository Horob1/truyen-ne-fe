import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const SearchUser = () => {
  const [userList, setUserList] = useState([]);
  return (
    <div className="mx-auto mt-[2%] w-[96%] bg-white rounded-lg p-8">
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2  w-full gap-4 pt-2">
          <div className="flex-col col-span-1">
            <div>
              <label htmlFor="floating_fistname" className="font-medium ">
                Họ
              </label>
            </div>
            <input
              type="text"
              name="floating_fistname"
              id="floating_fistname"
              className="w-full mt-2 rounded-md"
              required
            />
          </div>
          <div className="flex-col col-span-1">
            <div>
              <label htmlFor="floating_lastname" className="font-medium ">
                Tên
              </label>
            </div>
            <input
              type="text"
              name="floating_lastname"
              id="floating_lastname"
              className="w-full mt-2 rounded-md"
              required
            />
          </div>
        </div>
        <div className="flex justify-center pt-8">
          <button
            type="submit"
            className="text-white w-full p-2 rounded-xl bg-red-500  hover:opacity-70 font-medium text-base  text-center"
          >
            Tìm
          </button>
        </div>
      </form>

      <div className="py-8">
        <h1 className="text-3xl font-medium">{`Kết quả (${userList.length})`}</h1>
        <div className="grid grid-cols-4 gap-4 py-4">
          <div className="w-full flex p-4 rounded-sm shadow-md justify-between">
            <img src="" alt="" className="h-[80px] w-[80px] rounded-full" />
            <div className="ml-2 grid content-between flex-1">
              <small className="text-gray-500 overflow-hidden truncate">
                id: s3745495ghjfgdh346
              </small>
              <h4 className="overflow-hidden truncate">Tên: Anh Nguyễn</h4>
              <h4 className="overflow-hidden truncate">Username: horob1</h4>
            </div>
            <div className="grid content-between pl-2">
              <Link
                to={'/admin/search/:uId'}
                className="px-8 py-1 bg-yellow-400 hover:opacity-90 text-white rounded-lg"
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
