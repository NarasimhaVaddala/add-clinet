import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function UnregistredUsers({ data, title }) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full lg:w-[60%]">
      <h2 className="py-2 text-2xl font-bold">{title}</h2>

      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
        {/* Table Header */}
        <thead className="bg-gray-50 text-xs text-gray-700 uppercase tracking-wider ">
          <tr>
            <th scope="col" className="py-3 px-6 text-left ">
              Name
            </th>
            <th scope="col" className="py-3 px-6 text-left ">
              Mobile
            </th>

            <th scope="col" className="py-3 px-6 text-left ">
              Email
            </th>
            <th scope="col" className="py-3 px-6 text-left ">
              Address
            </th>
          </tr>
        </thead>
        {/* Table Body */}
        <tbody className="divide-y divide-gray-200 ">
          {data?.map((user) => (
            <tr
              key={user._id}
              className="odd:bg-white even:bg-gray-50 hover:bg-gray-50 "
            >
              <td className="py-4 px-6 text-sm text-gray-800 ">{user?.name}</td>
              <td className="py-4 px-6 text-sm text-gray-800 ">
                {user?.mobile}
              </td>
              <td className="py-4 px-6 text-sm text-gray-800 ">
                {user?.email}
              </td>
              <td className="py-4 px-6 text-sm text-gray-800 ">
                {user.address}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
