import { useState, Fragment } from 'react';
import { Listbox } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/20/solid';

const font = ['Time new roman', 'Arial', 'Patrick'];

export const FontCombobox = () => {
  const [selectedFont, setSelectedFont] = useState(font[0]);

  return (
    <Listbox value={selectedFont} onChange={setSelectedFont}>
      <Listbox.Button className="w-full">{selectedFont}</Listbox.Button>
      <Listbox.Options className="absolute top-[60%] bg-be dark:bg-gray-700 w-[55%] p-4 rounded-lg border-2 border-gray-600 dark:border-white">
        {font.map((font, index) => (
          /* Use the `active` state to conditionally style the active option. */
          /* Use the `selected` state to conditionally style the selected option. */
          <Listbox.Option key={index} value={font} as={Fragment}>
            {({ active, selected }) => (
              <li className={`${active ? ' text-yellow-500' : ''}`}>{font}</li>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};
