import { Carousel } from 'flowbite-react';
import { Link } from 'react-router-dom';
import React from 'react';

export const TranslatorInfo = () => {
  const customTheme = {
    scrollContainer: {
      base: 'flex h-full snap-mandatory overflow-y-hidden overflow-x-hiden scroll-smooth rounded-xl',
      snap: 'snap-x',
    },
    indicators: {
      active: {
        off: 'bg-white/50 bg-gray-800/50 hover:bg-gray-800',
        on: 'bg-gray-800',
      },
      base: 'h-3 w-3 rounded-full',
      wrapper: 'absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3',
    },

    control: {
      base: 'inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/30 group-hover:bg-black/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-gray-400 sm:h-10 sm:w-10',
      icon: 'h-5 w-5 text-black  sm:h-6 sm:w-6',
    },
  };
  return (
    <div className="w-full rounded-xl p-8 bg-gray-300 flex-col">
      <div className="m-auto flex-col">
        <img
          src={
            'https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/399825645_3255842764713267_2308659912949694663_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGwlOMJ2zTgDf18EI4tmbys5nCnYITr8MTmcKdghOvwxDvwiRqE48dT_bFnQCHyGshwrazx79nZEIRWfdFKcmpN&_nc_ohc=tjY8v27Cc4AAX8XVMhZ&_nc_ht=scontent.fhan15-1.fna&oh=00_AfCpKWGHrJXrfMrgsberzrtImOUI3oSAf9gCJfbc0lYjrA&oe=65C187B7'
          }
          className="h-[120px] m-auto  rounded-full w-[120px] shadow-lg"
          alt="avatar"
        />
        <h5 className="pt-4 font-medium text-center text-xl">
          Trái Tim Hoá Đá
        </h5>
      </div>
      <div className="pt-6 h-[500px] sm:h-[550px] md:h-[400px] flex ">
        <Carousel theme={customTheme}>
          <img
            className="md:w-[180px] w-[60%] sm:w-[40%]"
            src={
              'https://static.cdnno.com/poster/nhat-kiep-tien-pham/300.jpg?1631624640'
            }
            alt="..."
          />
          <img
            className="md:w-[180px] w-[60%] sm:w-[40%]"
            src={
              'https://static.cdnno.com/poster/nhat-kiep-tien-pham/300.jpg?1631624640'
            }
            alt="..."
          />
          <img
            className="md:w-[180px] w-[60%] sm:w-[40%]"
            src={
              'https://static.cdnno.com/poster/nhat-kiep-tien-pham/300.jpg?1631624640'
            }
            alt="..."
          />
        </Carousel>
      </div>
      <div className="flex font-bold">
        <Link className="m-auto text-yellow-700" to={'/'}>
          Xem chi tiết
        </Link>
      </div>
    </div>
  );
};
