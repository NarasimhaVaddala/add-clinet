import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function RegisteredUsers({ data }) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full lg:w-[60%]">
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
              Team/Individual
            </th>
            <th scope="col" className="py-3 px-6 text-left ">
              Action
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
              <td className="py-4 px-6 text-sm text-gray-800 ">{user.name}</td>
              <td className="py-4 px-6 text-sm text-gray-800 ">
                {user.mobile}
              </td>
              <td className="py-4 px-6 text-sm text-gray-800 ">
                {user.fullName ? "Individual" : "Team"}
              </td>
              <td className="py-4 px-6 text-sm text-gray-800 ">
                <Link
                  to={`/view-detail/${user._id}`}
                  className="text-blue-500 hover:text-blue-700 flex items-center gap-1 "
                >
                  View <ArrowRight size={16} />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
