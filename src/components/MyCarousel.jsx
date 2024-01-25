import React from 'react';
import { Carousel } from 'flowbite-react';
import test from './../assets/test.webp';

export const MyCarousel = () => {
  const customTheme = {
    scrollContainer: {
      base: 'flex h-full snap-mandatory overflow-y-hidden overflow-x-hiden scroll-smooth rounded-none',
      snap: 'snap-x',
    },
  };
  return (
    <div className="hidden md:h-80 sm:flex xl:h-96 2xl:h-120 ">
      <Carousel theme={customTheme}>
        <img src={test} alt="..." className="h-[100%] " />
        <img src={test} alt="..." className="h-[100%] " />
        <img src={test} alt="..." className="h-[100%] " />
        <img src={test} alt="..." className="h-[100%] " />
        <img src={test} alt="..." className="h-[100%] " />
      </Carousel>
      
    </div>
  );
};
