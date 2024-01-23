import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { ImGithub } from 'react-icons/im';

const Footer = () => {
  const footerBg = '/src/assets/footerbg.png';
  return (
    <div
      className="absolute  bottom-0 w-[100%] bg-cover bg-center h-[200px]"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="flex flex-col">
        <Link to="/" className="pl-4 m-auto">
          <img src={logo} alt="Logo" className="h-[50px]" />
        </Link>
        <div className="m-auto w-[50%] pt-[1rem] ">
          <p className="text-gray-600 text-sm text-center">
            TruyenNe là nền tảng mở trực tuyến, miễn phí đọc truyện chữ được
            convert hoặc dịch kỹ lưỡng, do các converter và dịch giả đóng góp,
            rất nhiều truyện hay và nổi bật được cập nhật nhanh nhất với đủ các
            thể loại tiên hiệp, kiếm hiệp, huyền ảo ...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
