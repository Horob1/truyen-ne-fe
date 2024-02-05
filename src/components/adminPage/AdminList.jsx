import React from 'react';

export const AdminList = () => {
  return (
    <div className="mx-auto mt-[2%] w-[96%] bg-white rounded-lg p-8">
      <h3 className="text-xl font-medium mb-3">Danh sách ADMIN</h3>
      <div className="grid grid-cols-4 gap-4 py-4">
        <div className="w-full flex p-4 rounded-sm shadow-md ">
          <img src="" alt="" className="h-[80px] w-[80px] rounded-full" />
          <div className="ml-2 grid content-between flex-1">
            <small className="text-gray-500 overflow-hidden truncate">
              id: s3745495ghjfgdh346
            </small>
            <h4 className="overflow-hidden truncate">Tên: Anh Nguyễn</h4>
            <h4 className="overflow-hidden truncate">Username: horob1</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
