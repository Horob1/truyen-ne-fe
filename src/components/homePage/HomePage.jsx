import React from 'react';
import { FirstContainer } from './FirstContainer';
import { NewList } from './NewList';
import { RateList } from './rate/RateList';
export const HomePage = () => {
  return (
    <div>
      <FirstContainer />
      <NewList />
      <div className="flex justify-center">
        <div className="m-auto grid md:grid-cols-3 grid-cols-1 gap-6 w-full md:max-w-[1000px] lg:max-w-[1280px] max-w-[98%] md:max-w-">
          <RateList></RateList>
          <RateList></RateList>
          <RateList></RateList>
        </div>
      </div>
    </div>
  );
};
