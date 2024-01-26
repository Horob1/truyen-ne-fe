import React from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import novel from './../../../assets/novel.jpg';
export const Card = () => {
  return (
    <div>
      <div className="grid grid-cols-4 w-full border-b-2  ">
        <div>
          <a href="">
            <img src={novel} alt="" className="w-[75px]-[100px] shadow-md hover:scale-110" />
          </a>
        </div>
        <div className="col-span-3 pl-4">
          <h2 className="truncate text-base font-semibold  hover:text-yellow-400 hover:drop-shadow-md">
            Toàn Cầu Trò Chơi: Ta Bật Hack Vô Địch
          </h2>
          <p className="pt-2 text-sm text-ellipsis overflow-hidden line-clamp-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            quae atque cupiditate pariatur, soluta unde quos saepe nihil, optio
            voluptas libero voluptatem temporibus sint incidunt illo debitis
            modi ex recusandae.
          </p>
          <div className="flex pt-2 relative ">
            <FaPencilAlt className=" h-6" />
            <h5 className="pl-1 truncate text-base w-[50%] font-normal">
              Kim Thiên Tảo Thượng Cật Giáo Tử
            </h5>
            <button className="text-[10px] h-6 pl-2 pr-2 absolute bottom-0 right-0 border-[1px] border-orange-700 text-orange-700">
              Huyền huyễn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
