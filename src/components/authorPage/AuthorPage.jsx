import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { MyCarousel } from '../MyCarousel';
import { AuthorItem } from './AuthorItem';

export const AuthorPage = () => {
  return (
    <div>
      <Header />
      <MyCarousel />
      <div className="m-auto bg-white md:rounded-xl  md:max-w-[900px] lg:max-w-[1200px]  max-w-[98%] w-full md:-translate-y-20    min-h-[500px] p-5 ">
        <h5 className="font-medium">Viễn Đồng</h5>
        <div className="">
          <AuthorItem />
          <AuthorItem />
          <AuthorItem />
          <AuthorItem />
        </div>
      </div>
      <Footer />
    </div>
  );
};
