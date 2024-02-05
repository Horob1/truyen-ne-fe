import { Rating } from 'flowbite-react';
import { FaEdit } from 'react-icons/fa';
import React from 'react';

export const ReviewList = () => {
  return (
    <div>
      <article className="p-6 my-4 text-base bg-white rounded-lg">
        <footer className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <p className="inline-flex items-center mr-3 text-sm text-gray-900 font-semibold">
              <img
                className="mr-2 w-6 h-6 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                alt="Michael Gough"
              />
              Michael Gough
            </p>
            <p className="text-sm text-gray-600">
              <time pubdate dateTime="2022-02-08" title="February 8th, 2022">
                Feb. 8, 2022
              </time>
            </p>
          </div>
          <button
            className="inline-flex items-center p-2 border-2 border-yellow-500 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            type="button"
          >
            <FaEdit className="text-yellow-500"></FaEdit>
          </button>
        </footer>
        <p className="text-gray-500">
          Very straight-to-point article. Really worth time reading. Thank you!
          But tools are just the instruments for the UX designers. The knowledge
          of the design tools is as important as the creation of the design
          strategy.
        </p>
        <div className="flex items-center mt-4 space-x-4">
          <Rating className="pb-4 ">
            {[1, 2, 3, 4, 5].map((el) => (
              <Rating.Star filled={4 >= el ? true : false}></Rating.Star>
            ))}
          </Rating>
        </div>
      </article>
    </div>
  );
};
