import React from 'react';
import novel from './../../assets/novel.jpg';
import { CiFileOn } from 'react-icons/ci';
import { LuBookMinus } from 'react-icons/lu';
import { FaGlasses } from 'react-icons/fa';
export const AuthorItem = () => {
  return (
    <div className="flex w-full border-b-2 px-6 my-6">
      <div>
        <img
          src={novel}
          alt={''}
          className="w-[90px] h-[120px] shadow-md hover:cursor-pointer hover:opacity-90"
        />
      </div>
      <div className=" flex-1 mb-5 ml-5">
        <h2 className=" text-base font-semibold  hover:text-yellow-400 hover:drop-shadow-md text-ellipsis overflow-hidden line-clamp-2">
          Nói xong luyện võ, ngươi luyện được kim thân pháp tướng
        </h2>

        <p className="pt-2 text-sm text-ellipsis overflow-hidden line-clamp-3">
          Cao Văn xuyên việt rồi, nhưng xuyên qua thời điểm hơi xảy ra chút vấn
          đề.Tại một cái nào đó dị giới đại lục trên không phiêu lãng mười mấy
          vạn năm về sau, hắn cảm thấy mình khả năng cần một thân thể mới xem
          như trở thành một cái hoàn chỉnh người xuyên việt, nhưng hắn cũng
          không nghĩ tới chính mình thật vất vả sau khi thành công vậy mà còn
          cần mang theo cỗ thân thể này từ trong quan tài leo ra, đồng thời đối
          mặt hai cái bị dọa phát sợ tằng tằng tằng tằng. . . Chắt gái.Cùng với
          một cái sắp nghênh đón kỷ nguyên
        </p>
        <div className="flex  justify-between mt-2">
          <div className="flex font-light">
            <div className="flex items-center mr-5">
              <LuBookMinus />
              <span className="text-sm ml-2">Chỉ lan hương</span>
            </div>
            <div className="flex items-center">
              <CiFileOn />
              <span className="text-sm ml-2">65 Chương</span>
            </div>
          </div>
          <div className="text-[12px] h-6 pl-2 pr-2 flex items-center font-light">
            <span className="">
              <FaGlasses className="text-gray-400 mr-2" />
            </span>
            152.0K
          </div>
        </div>
      </div>
    </div>
  );
};
