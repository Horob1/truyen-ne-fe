import React, { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { IoAddOutline } from 'react-icons/io5';
import { CiViewList } from 'react-icons/ci';
import { FiEdit } from 'react-icons/fi';
import { CiSquareCheck } from 'react-icons/ci';
import { getMyNovel } from '../../services/api/translator/novel';
import { Link } from 'react-router-dom';
export const MyNovel = () => {
  const [myNovels, setMyNovels] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getMyNovel();
        setMyNovels(res.data.novels);
      } catch (error) {}
    };
    fetchData();
  }, []);
  return (
    <div className="mx-auto mt-[2%] w-[96%]  rounded-lg p-8">
      <h1 className="text-xl font-medium">Truyện đã đăng</h1>
      <small>Danh sách tác phẩm của bạn!</small>

      <div className="mt-6 grid grid-cols-2 gap-4">
        {myNovels.map((novel) => (
          <div className="bg-white p-6" key={novel.id}>
            <div className="flex justify-between">
              <h5 className="text-xl flex-1 overflow-hidden line-clamp-1">
                {novel.name}
              </h5>
              <button>
                <IoClose className="text-red-600"></IoClose>
              </button>
            </div>
            <div className="pt-4">
              <span
                className={
                  novel.status === 'Chưa hoàn thành'
                    ? 'text-red-600'
                    : 'text-green-500'
                }
              >
                Tình trạng: {novel.status}!
              </span>
            </div>
            <div className="pt-4 flex">
              <Link to={`/up-load/my-novel/add-chapter/${novel.id}`}>
                <button className="p-2 m-2 bg-be rounded-md">
                  <IoAddOutline className="text-gray-500" />
                </button>
              </Link>
              <Link to={`/up-load/my-novel/chapter-list/${novel.id}`}>
                <button className="p-2 m-2 bg-be rounded-md">
                  <CiViewList />
                </button>
              </Link>
              <Link to={`/up-load/my-novel/${novel.id}`}>
                <button className="p-2 m-2 bg-be rounded-md">
                  <FiEdit className="text-gray-500" />
                </button>
              </Link>
                <button className="p-2 m-2 bg-be rounded-md">
                  <CiSquareCheck className="text-green-700" />
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
