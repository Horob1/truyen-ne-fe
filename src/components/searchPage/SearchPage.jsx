import React, { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { SearchItem } from './SearchItem';
export const SearchPage = () => {
  const [toggle, settoggle] = useState(false);
  const [activeButton, setActiveButton] = useState('newest');

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };
  return (
    <div className="border-b-[1px]">
      <div className="m-auto bg-white md:rounded-xl  md:max-w-[1000px] lg:max-w-[1280px]  max-w-[98%] w-full md:-translate-y-20   grid grid-cols-4  min-h-[500px] py-4">
        <div className="hidden p-5 md:flex md:flex-col">
          <div>
            <h5 className="font-medium text-[14px] my-1">Đã chọn</h5>
            <div className="border-b-[1px] flex mb-2">
              <div className="bg-red-700 px-[4px] my-1 text-white rounded-lg text-sm flex items-center  my-2">
                <span className="">Đang tìm:</span>
                <span className="">sdajkjsdjk</span>
                <button className="m-1">x</button>
              </div>
            </div>
          </div>

          <div>
            <h5 className="font-medium text-[14px] my-1 ">Thể loại</h5>
            <div className="border-b-[1px] flex flex-wrap mb-2">
              <div className="border-[1px] border-gray-700  text-gray-700 rounded-md text-sm flex items-center px-2 py-1 mb-2 mr-2 text-nowrap cursor-pointer hover:bg-gray-700 hover:text-white">
                Tien hiep
              </div>
            </div>
          </div>
          <div>
            <h5 className="font-medium text-[14px] my-1 ">Tình trạng</h5>
            <div className="border-b-[1px] flex flex-wrap mb-2">
              <div className="border-[1px] border-gray-700  text-gray-700 rounded-md text-sm flex items-center px-2 py-1 mb-2 mr-2 text-nowrap cursor-pointer hover:bg-gray-700 hover:text-white">
                Đang ra
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4 md:col-span-3">
          <div className="flex">
            <div className="hidden md:flex items-center text-yellow-500 font-medium mr-6 cursor-pointer relative">
              <div
                className=" "
                onClick={() => {
                  settoggle(!toggle);
                }}
              >
                Mới cập nhật
              </div>
              <IoMdArrowDropdown />
              <div
                className={`absolute right-0 top-[20px] z-10 mt-2 w-[160px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
                  toggle ? 'block' : 'hidden'
                }`}
              >
                <div className="py-1" role="none">
                  {/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" */}
                  <a
                    onClick={() => handleButtonClick('newest')}
                    href="#"
                    className={`${
                      activeButton === 'newest'
                        ? 'bg-yellow-400 text-white'
                        : 'text-gray-700'
                    } block px-4 py-2 text-sm hover:text-yellow-200`}
                  >
                    Mới cập nhật
                  </a>
                  <a
                    onClick={() => handleButtonClick('newlyAdded')}
                    href="#"
                    className={`${
                      activeButton === 'newlyAdded'
                        ? 'bg-yellow-400 text-white'
                        : 'text-gray-700'
                    } block px-4 py-2 text-sm hover:text-yellow-200`}
                  >
                    Mới đăng
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="my-4">
            Kết quả cho: <span className="font-medium text-sm">ádjladsjk</span>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mx-4 ">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};
