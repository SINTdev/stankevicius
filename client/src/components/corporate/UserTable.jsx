import React from "react";

const RenderTR = ({ user }) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="sticky left-0 h-fit bg-white px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {user?.fullName}
      </th>
      <td className="px-6 py-4">{user?.email}</td>
      <td className="px-6 py-4">
        {user?.countryCode}
        {user?.phoneNumber}
      </td>
      <td className="px-6 py-4">{user?.companyName}</td>
      <td className="px-6 py-4">{user?.companyURL}</td>
      <td className="px-6 py-4">{"Last login"}</td>
      <td className="px-6 py-4">{"Created"}</td>
      <td className="flex items-center px-6 py-4 space-x-3 uppercase">Delete</td>
    </tr>
  );
};

export default function UserTable(props) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th
              scope="col"
              className="sticky left-0 h-fit px-6 py-3 bg-gray-50"
            >
              Full name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Phone
            </th>
            <th scope="col" className="px-6 py-3">
              Company Name
            </th>
            <th scope="col" className="px-6 py-3">
              Company URL
            </th>
            <th scope="col" className="px-6 py-3">
              Last Login
            </th>
            <th scope="col" className="px-6 py-3">
              Account Created
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {props?.users?.map((one, index) => {
            return <RenderTR user={one} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
