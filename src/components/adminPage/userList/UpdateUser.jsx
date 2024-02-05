import React, { Fragment, useState } from 'react';
import { Listbox } from '@headlessui/react';
const role = ['user', 'translator', 'admin'];

export const UpdateUser = () => {
  const [selectedRole, setSelectedRole] = useState(role[0]);

  return (
    <div
      className={`bg-[url('/src/assets/admin.webp')] w-full h-screen bg-no-repeat bg-cover`}
    >
      <div className=" mt-8 ml-8 rounded-lg bg-white p-8 w-[50%]">
        <form>
          <div className="flex">
            <img
              src=""
              alt=""
              className="h-[140px] w-[140px] rounded-full shadow-xl"
            />
            <div className="ml-2 grid content-between pb-16 flex-1">
              <small className="text-gray-500">ID: sdfhssgfhsdgfjh</small>
              <h2 className="text-2xl font-medium">Username: Tôi yêu💕 em</h2>
              <h2 className="text-xl font-normal">Gmail: Tôi yêu💕 em</h2>
              <h2 className="text-xl font-normal text-red-600">Role: User</h2>
            </div>
          </div>
          <div className="flex">
            <div className="text-white">
              <div className="py-2 px-4 w-[160px] text-center bg-red-500 rounded-lg relative">
                <Listbox value={selectedRole} onChange={setSelectedRole}>
                  <Listbox.Button>{selectedRole}</Listbox.Button>
                  <Listbox.Options className="absolute top-full left-0 bg-red-400 px-8 rounded-lg border-2">
                    {role.map((r, index) => (
                      /* Use the `active` state to conditionally style the active option. */
                      /* Use the `selected` state to conditionally style the selected option. */
                      <Listbox.Option key={index} value={r} as={Fragment}>
                        {({ active, selected }) => (
                          <li className={`cursor-pointer w-[94px]`}>{r}</li>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Listbox>
              </div>
            </div>
            <button
              type="submit"
              className="ml-16 py-2 px-4 w-[160px] bg-red-500 text-white  rounded-lg relative"
            >
              Lưu
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
