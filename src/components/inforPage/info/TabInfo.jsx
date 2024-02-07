import React, { useEffect } from 'react';
import { TranslatorInfo } from './TranslatorInfo';

export const TabInfo = (props) => {
  return (
    <div className="grid w-full grid-cols-12 gap-6">
      <div className="col-span-12 md:col-span-8">
        <p>{props.desc}</p>
      </div>
      <div className="col-span-12 md:col-span-4">
        <TranslatorInfo translator={props.translator} />
      </div>
    </div>
  );
};
