import React from 'react';
import { Carousel } from 'flowbite-react';
import test from '../../assets/test.jpg';

export const MyCarousel = () => {
  const customTheme = {
    scrollContainer: {
      base: 'flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-none',
      snap: 'snap-x',
    },
  };
  return (
    <div className="hidden sm:h-64 sm:flex xl:h-80 2xl:h-96 ">
      <Carousel theme={customTheme}>
        <img src={test} alt="..." />
        <img src={test} alt="..." />
        <img src={test} alt="..." />
        <img src={test} alt="..." />
        <img src={test} alt="..." />
      </Carousel>
    </div>
  );
};
