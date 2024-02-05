import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const modules = {
  toolbar: [], // Pass an empty array to hide the toolbar
};
const styles = {
  height: '500px', // Đặt kích thước font chữ// Chiều cao 100% của màn hình  // Chiều rộng 100% của màn hình
};

export const AddChapter = () => {
  const [value, setValue] = useState('');

  return (
    <div className="mx-auto mt-[2%] w-[96%] rounded-lg p-8">
      <h1 className="text-xl font-medium">Truyện đã đăng</h1>
      <small>Thêm mới chapter!</small>

      <div className="mt-6 gap-4 rounded-md w-full bg-white p-8">
        <form>
          <div>
            <label htmlFor="floating_name" className="font-medium">
              Tên chương
            </label>

            <input
              type="text"
              name="floating_name"
              id="floating_name"
              className="w-full mt-2 rounded-md"
              required
            />
          </div>
          <div>
            <ReactQuill
              className="pt-8 rounded-lg"
              modules={modules}
              style={styles}
              theme="snow"
              value={value}
              onChange={setValue}
            />
          </div>
          <button
            type="submit"
            className=" mt-16 py-2 px-4 w-full bg-violet-600 text-white  rounded-lg relative"
          >
            Lưu
          </button>
        </form>
      </div>
    </div>
  );
};
