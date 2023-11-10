import React from "react";

const RenderTR = ({ data }) => {
  return (
    <tr className="whitespace-nowrap bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="sticky left-0 bg-white px-6 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {data?.user?.fullName}
      </th>
      <td className="px-6 py-4 text-center">
        {data?.mode === "credit" ? "Purchased credit" : "Published news"}
      </td>
      <td className="px-6 py-4 text-center">{data?.amount}</td>
      <td className="px-6 py-4">
        {data?.timestamp && new Date(data?.timestamp)?.toLocaleString()}
      </td>
      <td className="px-6 py-4">{data?.user?.email}</td>
      <td className="px-6 py-4">
        {data?.user?.countryCode}
        {data?.user?.phoneNumber}
      </td>
      <td className="px-6 py-4">{data?.user?.companyName}</td>
      <td className="px-6 py-4">{data?.user?.companyURL}</td>
      <td className="px-6 py-4">{data?.user?.credits}</td>
      <td className="px-6 py-4">{data?.user?.credits}$</td>
      <td className="px-6 py-4">
        {data?.user?.lastLogin &&
          new Date(data?.user?.lastLogin)?.toLocaleString()}
        {!data?.user?.lastLogin && "-"}
      </td>
      <td className="px-6 py-4">
        {data?.user?.timestamp &&
          new Date(data?.user?.timestamp)?.toLocaleString()}
      </td>
    </tr>
  );
};

export default function InvoiceTable(props) {
  return (
    <div className="relative overflow-x-auto shadow-md">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="whitespace-nowrap text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th
              scope="col"
              className="sticky left-0 h-fit px-6 py-3 bg-gray-50"
            >
              Full name
            </th>
            <th scope="col" className="px-6 py-3">
              Type
            </th>
            <th scope="col" className="px-6 py-3">
              Amount of credit
            </th>
            <th scope="col" className="px-6 py-3">
              Purchasing date
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
              Current Credit
            </th>
            <th scope="col" className="px-6 py-3">
              Total Spending
            </th>
            <th scope="col" className="px-6 py-3">
              Last Login
            </th>
            <th scope="col" className="px-6 py-3">
              Account Created
            </th>
          </tr>
        </thead>
        <tbody>
          {props?.records?.map((one, index) => {
            return <RenderTR data={one} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
