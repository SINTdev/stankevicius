import React, { useState, useRef, useEffect } from "react";

const InfoModal = (props) => {
  const { show, message, heading, isInfo, onAgree, onClose } = props;

  const [enable, setEnable] = useState(false);
  const messageContainerRef = useRef(null);

  const handleScroll = () => {
    const container = messageContainerRef.current;
    if (container) {
      // Calculate the difference between the scroll height and the current scroll position
      const scrollDifference =
        container.scrollHeight - container.scrollTop - container.clientHeight;
      // Set enable to true when scrolled to the bottom
      if (scrollDifference <= 0) {
        setEnable(true);
      }
    }
  };

  useEffect(() => {
    const container = messageContainerRef.current;
    if (container) {
      // Calculate the difference between the scrollHeight and the clientHeight
      const scrollDifference = container.scrollHeight - container.clientHeight;

      // Set enable to true when there's no scroll space
      setEnable(scrollDifference <= 0);
    }
  }, [message]);

  useEffect(() => {
    // Add or remove a CSS class to the body to prevent scrolling
    if (show) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [show]);

  return (
    <>
      {show ? (
        <div className="fixed inset-0 flex items-center justify-center z-[100]">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-white opacity-70"
            onClick={() => {
              setEnable(false);
              onClose();
            }}
          ></div>

          {/* Modal Content */}
          <div className="bg-white p-8 border-2 shadow-2xl z-10 md:min-w-[30%]">
            <h1 className="_font-bold mb-2 text-[24px] tracking-tight">
              {heading}
            </h1>
            <div
              className="mb-2 max-w-md max-h-[40vh] overflow-auto"
              onScroll={handleScroll}
              ref={messageContainerRef}
            >
              {message}
            </div>
            <div className="flex justify-end space-x-4 whitespace-nowrap">
              {!isInfo ? (
                <button
                  className={`${
                    !enable ? "pointer-events-none opacity-50" : ""
                  } bg-black w-fit text-white px-4 py-2`}
                  onClick={() => {
                    onAgree();
                    setEnable(false);
                    onClose();
                  }}
                  disabled={!enable}
                >
                  I understand and agree
                </button>
              ) : (
                <button
                  className={`${
                    !enable ? "pointer-events-none opacity-50" : ""
                  } bg-black w-fit text-white px-4 py-2`}
                  onClick={() => {
                    setEnable(false);
                    onClose();
                  }}
                  disabled={!enable}
                >
                  I understand
                </button>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default InfoModal;
