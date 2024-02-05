import { FaEdit } from 'react-icons/fa';
import { FaDeleteLeft } from 'react-icons/fa6';
import { FaReplyAll } from 'react-icons/fa';

import React from 'react';

export const Comment = (props) => {
  return (
    <article
      className={`mt-6  p-6 text-base bg-white rounded-lg dark:bg-gray-900 ${
        props.level === 2 ? 'ml-12' : ''
      }`}
    >
      {/* Article Footer */}
      <footer className="flex justify-between items-center mb-2">
        {/* Author Info */}
        <div className="flex items-center">
          <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
            <img
              className="mr-2 w-6 h-6 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
              alt="Michael Gough"
            />
            Michael Gough
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <time>Feb. 8, 2022</time>
          </p>
        </div>
        {/**/}
        <div>
          <button
            className="inline-flex items-center p-2 border-2 border-yellow-500 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            type="button"
          >
            <FaEdit className="text-yellow-500"></FaEdit>
          </button>
          <button
            className="ml-4 inline-flex items-center p-2 border-2 border-red-500 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            type="button"
          >
            <FaDeleteLeft className="text-red-500"></FaDeleteLeft>
          </button>
        </div>
        {/* Dropdown menu */}
      </footer>
      {/* Comment Content */}
      <p className="text-gray-500 dark:text-gray-400">
        Very straight-to-point article. Really worth time reading. Thank you!
        But tools are just the instruments for the UX designers. The knowledge
        of the design tools are as important as the creation of the design
        strategy.
      </p>
      {/* Comment Actions */}
      <div className="flex items-center mt-4 space-x-4">
        <button
          type="button"
          className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
        >
          <FaReplyAll className="mr-2" />
          Reply
        </button>
      </div>
    </article>
  );
};
