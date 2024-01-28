import React from 'react';

export const NewList = () => {
  return (
    <div className="flex md:-translate-y-10">
      <div className="m-auto p-2 md:max-w-[1000px] lg:max-w-[1280px] w-full max-w-[98%]  ">
        <div className="flex  items-center	 text-xl pb-8 ">
          <h2 className="text-start font-bold ">Truyện đã đọc</h2>
          <a
            href=""
            className=" hover:text-yellow-400 text-yellow-900 text-base align-baseline ml-4"
          >
            Xem tất cả
          </a>
        </div>

        <div className="relative truncate">
          <table className="table-fixed w-full text-left rtl:text-right text-base ">
            <tbody className="px-4">
              <tr className="w-full grid grid-cols-12 gap-6 py-2 hover:bg-be px-2">
                <th className="hidden md:flex col-span-2">
                  <a href="">
                    <h5 className="font-light truncate">Huyền huyễn</h5>
                  </a>
                </th>
                <th className=" md:col-span-3 col-span-5">
                  <a href="">
                    <h5 className="truncate">
                      Ta là Hồn Hoa Thánh Tái Sinh Làm Người Thanh Hóa
                    </h5>
                  </a>
                </th>
                <th className="md:col-span-4 col-span-5">
                  <a href="">
                    <h5 className="truncate font-light">
                      Chương 1: Ta tái sinh thành dân thanh hóa! Hoa Thánh tái
                      thế!
                    </h5>
                  </a>
                </th>
                <th className="col-span-2 hidden md:flex">
                  <h5 className="truncate font-light ">
                    Hiệp 36 thiên cương tam thập lục biến
                  </h5>
                </th>
                <th className="md:col-span-1  col-span-2  ">
                  <h5 className="font-light text-end">33 phút trước</h5>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
