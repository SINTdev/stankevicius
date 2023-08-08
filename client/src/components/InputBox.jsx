import React from "react";

export default function InputBox(props) {
  if (props?.select) {
    return (
      <div className={`${props?.className} `}>
        {/* <label className="block mb-2 text-sm font-medium text-gray-900">
          {props?.placeholder}
        </label> */}
        <select
          name={props?.name}
          value={props?.value}
          onChange={props?.onChange}
          className=" dropdownSelect"
          // className="block w-full p-3 text-sm text-gray-900 border-2 border-gray-300  hover:bg-gray-50 outline-none -none dropdownSelect"
        >
          {!props?.removeDefaultFirst && (
            <option value={""} selected disabled>
              {props?.placeholder}
            </option>
          )}
          {props?.options.length > 1 &&
            props?.options.map((a, b) => {
              return (
                <option key={b} value={a.id}>
                  {a.name}
                </option>
              );
            })}
        </select>
      </div>
    );
  }

  return (
    <div className={`${props?.className}`}>
      {/* <label className="block mb-2 text-sm font-medium text-gray-900">
        {props?.placeholder}
      </label> */}
      <input
        type={props?.type ?? "text"}
        name={props?.name}
        value={props?.value}
        onChange={props?.onChange}
        placeholder={props.placeholder}
        className="block w-full p-3 text-sm text-gray-900 border-2 border-gray-300  hover:bg-gray-50 outline-none -none"
      />
    </div>
  );

  // return (
  //   <div className={`${props?.className}`}>
  //     <label className="block mb-2 text-sm font-medium text-gray-900">
  //       {props?.placeholder}
  //     </label>
  //     <input
  //       type={props?.type ?? "text"}
  //       name={props?.name}
  //       value={props?.value}
  //       onChange={props?.onChange}
  //       placeholder={props.placeholder}
  //       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
  //     />
  //   </div>
  // );
}
