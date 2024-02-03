import { useState, Fragment } from 'react';
import { Listbox } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/20/solid';

const textSize = ['sm', 'base', 'lg'];

export const TextSizeCombobox = () => {
  const [selectedTextSize, setSelectedTextSize] = useState(textSize[0]);

  return (
    <Listbox value={selectedTextSize} onChange={setSelectedTextSize}>
      <Listbox.Button>{selectedTextSize}</Listbox.Button>
      <Listbox.Options className="absolute top-[90%] bg-be dark:bg-gray-700 w-[55%] p-4 rounded-lg border-2 border-gray-600 dark:border-white">
        {textSize.map((textSize, index) => (
          /* Use the `active` state to conditionally style the active option. */
          /* Use the `selected` state to conditionally style the selected option. */
          <Listbox.Option key={index} value={textSize} as={Fragment}>
            {({ active, selected }) => (
              <li className={`${active ? ' text-yellow-500' : ''}`}>
                {textSize}
              </li>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};
