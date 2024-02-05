import { Datepicker, FileInput } from 'flowbite-react';
import React from 'react';

export const UpdateAuthor = () => {
  return (
    <div className="mx-auto mt-[2%] w-[96%] bg-white rounded-lg p-8">
      <form>
        <div className="ml-2 grid content-between pb-16">
          <img src="" alt="" className="h-[120px] w-[120px] mb-4" />
          <small className="text-gray-500">ID: sdfhssgfhsdgfjh</small>
          <h2 className="text-2xl font-medium">Tên tác giả: Tôi yêu💕 em</h2>
          <small className="text-gray-600">24-10-2003</small>
          <h2 className="text-xl font-normal overflow-hidden line-clamp-2">
            Mô tả: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
            omnis magni voluptate eveniet excepturi, non eos vel voluptas
            voluptatem aperiam fuga cumque minima esse, placeat atque quasi aut
            ut magnam. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Qui quaerat inventore consequatur veritatis error voluptatem
            aliquid! Quaerat similique ducimus non adipisci, libero sapiente
            obcaecati expedita nulla illo. Ratione, assumenda accusantium!
          </h2>
        </div>
        <div className="p-8">
          <label htmlFor="floating_name" className=" font-medium ">
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
          <label htmlFor="floating_desc" className=" font-medium ">
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
        <div className="flex justify-center p-8 pb-0">
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
