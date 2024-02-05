import React from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import novel from './../../assets/novel.jpg';
import { MdOutlineMenu } from 'react-icons/md';
export const SearchItem = () => {
  return (
    <div className="grid grid-cols-4 w-full border-b-2 py-6">
      <div>
        <img
          src={novel}
          alt={''}
          className="w-[90px] h-[120px] shadow-md hover:cursor-pointer hover:opacity-90"
        />
      </div>
      <div className="col-span-3 ">
        <h2 className=" text-base font-semibold  hover:text-yellow-400 hover:drop-shadow-md text-ellipsis overflow-hidden line-clamp-2">
          Nói xong luyện võ, ngươi luyện được kim thân pháp tướng
        </h2>

        <p className="pt-2 text-sm text-ellipsis overflow-hidden line-clamp-2">
          Lý Cửu xuyên qua đến một cái dị tộc hoành hành cao võ hiện đại, thành
          Tây Tương thành phố chín adjaskjjadjkasdjkaldlaksdasdjajsdjskld
        </p>
        <div className="flex pt-2 justify-between ">
          <div className="flex flex-col font-light">
            <div className="flex items-center">
              <FaPencilAlt />
              <span className="text-sm ml-2">Chỉ lan hương</span>
            </div>
            <div className="flex items-center">
              <MdOutlineMenu />
              <span className="text-sm ml-2">65 Chương</span>
            </div>
          </div>
          <button className="text-[10px] h-6 pl-2 pr-2  border-[1px] border-orange-700 text-orange-700">
            Đô thị
          </button>
        </div>
      </div>
    </div>
  );
};
