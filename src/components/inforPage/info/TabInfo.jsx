import React from 'react';
import { TranslatorInfo } from './TranslatorInfo';

export const TabInfo = () => {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 md:col-span-8">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ipsa,
          dolores hic ad aperiam repellendus maiores, dignissimos obcaecati
          sequi soluta magni mollitia vero a asperiores reiciendis, delectus
          incidunt impedit similique. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Cumque velit corporis iusto officia voluptate
          adipisci porro, illo quidem recusandae eveniet corrupti quasi,
          expedita provident beatae maiores nihil blanditiis fugit quis!
        </p>
      </div>
      <div className="col-span-12 md:col-span-4">
        <TranslatorInfo />
      </div>
    </div>
  );
};
