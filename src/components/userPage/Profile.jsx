import React, { useState } from 'react';
import ava from './../../assets/dfAvaUser.jpg';
import { CiCamera } from 'react-icons/ci';
export const Profile = () => {
  const [isShowCam, setIsShowCam] = useState(false);
  return (
    <form className="p-8">
      <div className="flex text-lg font-medium border-b-2 justify-center pb-5"><span>Thông tin về Horob1</span></div>
      <div className="flex justify-center relative p-8 border-b-2">
        <label
          htmlFor="avafile"
          onMouseOver={(e) => {
            setIsShowCam(true);
          }}
          onMouseLeave={() => {
            setIsShowCam(false);
          }}
        >
          <img
            src={ava}
            className="h-[160px] rounded-full w-[160px] shadow-lg"
            alt="avatar"
          />
        </label>
        <input className="hidden" type="file" id="avafile" name="avafile" />
        {isShowCam && (
          <>
            <div className="absolute top-[50%] w-[60px] h-[60px] bg-black opacity-40  rounded-full -translate-y-1/2 pointer-events-none"></div>
            <CiCamera className="absolute text-white text-3xl top-[50%] -translate-y-1/2 pointer-events-none" />
          </>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  w-full gap-4 pt-2">
        <div className="flex-col col-span-1">
          <div>
            <label htmlFor="floating_fistname" className="pl-2 font-medium ">
              Họ
            </label>
          </div>
          <input
            type="text"
            name="floating_fistname"
            id="floating_fistname"
            className="w-full mt-2 rounded-2xl"
            required
          />
        </div>
        <div className="flex-col col-span-1">
          <div>
            <label htmlFor="floating_lastname" className="pl-2 font-medium ">
              Tên
            </label>
          </div>
          <input
            type="text"
            name="floating_lastname"
            id="floating_lastname"
            className="w-full mt-2 rounded-2xl"
            required
          />
        </div>
      </div>
      <div className="flex md:justify-end justify-center pt-8">
        <button
          type="submit"
          className="text-white w-full md:w-[30%] p-2 rounded-xl bg-yellow-400  hover:opacity-70 font-medium text-base  text-center"
        >
          Lưu
        </button>
      </div>
    </form>
  );
};
