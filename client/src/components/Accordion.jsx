import React, { useState, useEffect } from "react";

const RightArrow1 = (props) => {
  return (
    <svg
      className={props?.className}
      height={props.height}
      width={props.width}
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 256 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"></path>
    </svg>
  );
};

const RightArrow2 = (props) => {
  return (
    <svg
      className={props?.className}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      height={props.height}
      width={props.width}
      version="1.1"
      id="Layer_1"
      viewBox="0 0 330 330"
      xmlSpace="preserve"
    >
      <path
        id="XMLID_222_"
        d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001  c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213  C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606  C255,161.018,253.42,157.202,250.606,154.389z"
      />
    </svg>
  );
};

const AccordionItem1 = ({ title, content, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`py-2 ${index === 0 && "border-t"} border-b`}>
      <div
        className="flex flex-row items-center cursor-pointer"
        onClick={handleToggle}
      >
        <RightArrow1
          height={"20px"}
          width={"20px"}
          className={`mr-2 ${
            isExpanded ? "rotate-90" : "rotate-0"
          } transition-all text-black -translate-y-[1.5px] duration-[300ms] ease-in-out`}
        />
        <h1 className="select-none _font-bold text-black text-md transition-all duration-300">
          {title}
        </h1>
      </div>
      <div
        className={`${
          !isExpanded ? "overflow-hidden mt-0" : "mt-10"
        } h-full transition-all ease-in-out duration-300 mb-2`}
      >
        <div
          className={`${!isExpanded ? "h-0 opacity-0" : "h-full opacity-100"}`}
        >
          <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};
const AccordionItem2 = ({ title, content, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`my-5 border-b-2 border-black`}>
      <div
        className="px-5 flex flex-row justify-between items-center cursor-pointer"
        onClick={handleToggle}
      >
        <h1 className="select-none _font-bold text-black text-md transition-all duration-300">
          {title}
        </h1>
        <RightArrow2
          height={"20px"}
          width={"20px"}
          className={`${
            isExpanded ? "-rotate-90" : "rotate-90"
          } transition-all text-black -translate-y-[1.5px] duration-[300ms] ease-in-out`}
        />
      </div>
      <div
        className={`${
          !isExpanded ? "overflow-hidden mt-0" : "mt-10"
        } px-5 h-full transition-all ease-in-out duration-300 mb-2`}
      >
        <div
          className={`${!isExpanded ? "h-0 opacity-0" : "h-full opacity-100"}`}
        >
          <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ items, mode = "" }) => {
  if (items.length === 0) {
    return null;
  }
  return (
    <div className="">
      {items.map((item, index) =>
        mode === "learn" ? (
          <AccordionItem2
            key={index}
            index={index}
            title={item.title}
            content={item.content}
          />
        ) : (
          <AccordionItem1
            key={index}
            index={index}
            title={item.title}
            content={item.content}
          />
        )
      )}
    </div>
  );
};

export default Accordion;
