import { FileInput } from 'flowbite-react';
import React from 'react';
import AuthorCombobox from './novel/AuthorCombobox';
import CategoryCombobox from './novel/CategoryCombobox';
import StatusNovel from './novel/StatusNovel';

export const UpdateNovel = () => {
  return (
    <div className="mx-auto mt-[2%] w-[96%]  rounded-lg p-8">
      <h1 className="text-xl font-medium">Tên truyện của bạn</h1>
      <small className="pb-4">Cập nhật truyện của bạn!</small>
      <form className="p-8 bg-white mt-6 ">
        <div className="relative w-full h-[300px] bg-cover bg-no-repeat">
          <img
            src=""
            alt=""
            className="absolute h-[120px] w-[90px] top-[50%] right-[50%] translate-x-1/2 -translate-y-1/2 shadow-2xl"
          />
        </div>
        <div className=" mt-6">
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
        <div className="pt-6 rounded-sm">
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

        <div className="flex">
          <div className="mt-6">
            <span className="font-medium">Tác giả </span>
            <AuthorCombobox />
          </div>
          <div className="mt-6 ml-10">
            <span className="font-medium">Thể loại </span>
            <CategoryCombobox />
          </div>
          <div className="mt-6 ml-10">
            <span className="font-medium">Trạng thái </span>
            <StatusNovel />
          </div>
        </div>

        <div className="pt-6">
          <div className="mb-2 block font-medium">
            <label htmlFor="photoImg">Ảnh photo</label>
          </div>
          <FileInput id="photoImg" />
        </div>

        <div className="pt-6">
          <div className="mb-2 block font-medium">
            <label htmlFor="coverImg">Ảnh cover</label>
          </div>
          <FileInput id="coverImg" />
        </div>
        <button
          type="submit"
          className="mt-6 py-2 px-4 w-full bg-violet-600 text-white  rounded-lg relative"
        >
          Lưu
        </button>
      </form>
    </div>
  );
};
