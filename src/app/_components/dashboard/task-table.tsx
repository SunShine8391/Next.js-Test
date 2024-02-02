"use client";

import { FilePenLine, Trash } from "lucide-react";

export default function TaskTable() {
  return (
    <div className="relative overflow-x-auto rounded-lg border border-solid border-slate-200">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-4">
              Task
            </th>
            <th scope="col" className="px-6 py-4">
              Description
            </th>
            <th scope="col" className="px-6 py-4">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Apple MacBook Pro 17
            </th>
            <td className="px-6 py-3">Silver</td>
            <td className="px-6 py-3">
              <div className="flex flex-row gap-3">
                <FilePenLine
                  size={20}
                  className="hover:text-sky-500 text-primary cursor-pointer"
                />
                <Trash
                  size={20}
                  className="text-red-600 hover:text-red-500 cursor-pointer"
                />
              </div>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Microsoft Surface Pro
            </th>
            <td className="px-6 py-3">White</td>
            <td className="px-6 py-3">
              <div className="flex flex-row gap-3">
                <FilePenLine
                  size={20}
                  className="hover:text-sky-500 text-primary cursor-pointer"
                />
                <Trash
                  size={20}
                  className="text-red-600 hover:text-red-500 cursor-pointer"
                />
              </div>
            </td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Magic Mouse 2
            </th>
            <td className="px-6 py-3">Black</td>
            <td className="px-6 py-3">
              <div className="flex flex-row gap-3">
                <FilePenLine
                  size={20}
                  className="hover:text-sky-500 text-primary cursor-pointer"
                />
                <Trash
                  size={20}
                  className="text-red-600 hover:text-red-500 cursor-pointer"
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
