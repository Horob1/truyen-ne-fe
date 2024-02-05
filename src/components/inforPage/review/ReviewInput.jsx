import { Rating } from 'flowbite-react';
import React, { useState } from 'react';

export const ReviewInput = () => {
  const [score, setScore] = useState(0);
  return (
    <form class="mb-6 w-full">
      <Rating className="pb-4 " size="lg">
        {[1, 2, 3, 4, 5].map((el) => (
          <Rating.Star
            onClick={() => {
              setScore(el);
            }}
            filled={score >= el ? true : false}
          ></Rating.Star>
        ))}
      </Rating>
      <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <label for="comment" class="sr-only">
          Your comment
        </label>
        <textarea
          id="comment"
          rows="6"
          class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
          placeholder="Write a comment..."
          required
        ></textarea>
      </div>
      <button
        type="submit"
        class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-yellow-500 rounded-lg focus:ring-4 focus:ring-primary-200 "
      >
        Đánh giá
      </button>
    </form>
  );
};