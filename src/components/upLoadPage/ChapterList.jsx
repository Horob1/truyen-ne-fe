import React from 'react';
import { MdDelete } from 'react-icons/md';
import { MdEditSquare } from 'react-icons/md';
import { Link } from 'react-router-dom';
export const ChapterList = () => {
  return (
    <div className="mx-auto mt-[2%] w-[96%]  rounded-lg p-8">
      <h1 className="text-xl font-medium">Tên truyện của bạn</h1>
      <small className="pb-4">Danh sách chương!</small>
      <div className="rounded-md mt-4 bg-white w-full p-4">
        <div className="relative truncate">
          <table className="table-fixed w-full text-left rtl:text-right text-base ">
            <tbody className="px-4">
              <tr className="w-full grid grid-cols-9 gap-6 py-2 hover:bg-be px-2">
                <th className="col-span-1">
                  <h5 className="font-light truncate">1</h5>
                </th>
                <th className="col-span-4">
                  <h5 className="truncate">
                    Ta là Hồn Hoa Thánh Tái Sinh Làm Người Thanh Hóa
                  </h5>
                </th>
                <th className="col-span-2">
                  <h5 className="truncate font-light">Ngày 24-10-2003 16h30</h5>
                </th>
                <th className="col-span-1">
                  <button>
                    <MdEditSquare className="text-green-600" />
                  </button>
                </th>
                <th className="col-span-1">
                  <button>
                    <MdDelete className="text-red-600"></MdDelete>
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
