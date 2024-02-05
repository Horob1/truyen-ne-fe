import React from 'react';
import { ReviewInput } from './ReviewInput';
import { ReviewList } from './ReviewList';

export const ReviewTab = () => {
  return (
    <div className="w-full">
      <ReviewInput></ReviewInput>
      <ReviewList />
    </div>
  );
};
