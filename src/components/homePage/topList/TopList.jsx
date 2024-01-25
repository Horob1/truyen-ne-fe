import { Card } from './Card.jsx';
import React from 'react';

export const TopList = () => {
  return (
    <div className="md:col-span-2">
      <h2 className="text-start font-bold text-xl p-8 pb-0">Truyện đề cử</h2>
      <div className=" p-8 grid grid-cols-1 md:grid-cols-2 gap-5 md:h-[520px]">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
