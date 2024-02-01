import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export const ChangePwdForm = () => {
  const validatePassword = (pwString) => {
    var strength = 0;

    strength += /[A-Z]+/.test(pwString) ? 1 : 0;
    strength += /[a-z]+/.test(pwString) ? 1 : 0;
    strength += /[0-9]+/.test(pwString) ? 1 : 0;
    strength += /[\W]+/.test(pwString) ? 1 : 0;

    if (strength === 4) return true;
    return false;
  };

  return (
    <div className="p-8">
      <div className="flex text-lg font-medium border-b-2 justify-center pb-5">
        <span>Đổi mật khẩu</span>
      </div>
      <form>
        <div className="flex-col mt-4">
          <label
            htmlFor="current-password"
            className="pl-2 font-medium block pt-2"
          >
            Mật khẩu hiện tại
          </label>
          <input
            type="password"
            name="current-password"
            className="w-full mt-2 rounded-2xl"
            id="current-password"
          />
        </div>
        <div className="flex-col mt-4">
          <label htmlFor="new-password" className="pl-2 font-medium block pt-2">
            Mật khẩu mới
          </label>
          <input
            type="password"
            name="new-password"
            className="w-full mt-2 rounded-2xl"
            id="new-password"
          />
        </div>
        <div className="flex-col mt-4">
          <label
            htmlFor="new-password-comfirm"
            className="pl-2 font-medium block pt-2"
          >
            Nhập lại mật khẩu mới
          </label>
          <input
            type="password"
            name="new-password-comfirm"
            className="w-full mt-2 rounded-2xl"
            id="new-password-comfirm"
          />
        </div>
        <div className="flex md:justify-end justify-center pt-8">
          <button
            type="submit"
            class="text-white w-full md:w-[30%] p-2 rounded-xl bg-yellow-400  hover:opacity-70 font-medium text-base  text-center"
          >
            Lưu
          </button>
        </div>
      </form>
    </div>
  );
};
