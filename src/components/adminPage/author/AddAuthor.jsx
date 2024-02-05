import { Datepicker } from 'flowbite-react';
import React from 'react';

export const AddAuthor = () => {
  return (
    <div className="mx-auto mt-[2%] w-[96%] bg-white rounded-lg p-8">
      <h5 className="font-medium text-xl">Thêm mới tác giả </h5>
      <form>
        <div className="p-8">
          <label htmlFor="floating_name" className="font-medium ">
            Tên
          </label>

          <input
            type="text"
            name="floating_name"
            id="floating_name"
            className="w-full mt-2 rounded-md"
            required
          />
        </div>
        <div className="px-8 pb-8">
          <label htmlFor="floating_desc" className="font-medium ">
            Mô tả
          </label>

          <input
            type="text"
            name="floating_desc"
            id="floating_desc"
            className="w-full mt-2 rounded-md"
            required
          />
        </div>

        <div className="px-8">
          <span className="font-medium">Ngày sinh</span>
          <Datepicker className="pt-2" />
        </div>
        <div className="flex ml-8 justify-center pt-8 pr-8">
          <button
            type="submit"
            className="text-white w-full p-2 rounded-xl bg-red-500  hover:opacity-70 font-medium text-base  text-center"
          >
            Tìm
          </button>
        </div>
      </form>
    </div>
  );
};
