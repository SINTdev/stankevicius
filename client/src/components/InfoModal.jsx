import React from "react";

const InfoModal = (props) => {
  const { show, message, isInfo, onAgree, onClose } = props;

  return (
    <>
      {show ? (
        <div className="fixed inset-0 flex items-center justify-center z-[100]">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-white opacity-70"
            onClick={onClose}
          ></div>

          {/* Modal Content */}
          <div className="bg-white p-8 border-2 shadow-2xl z-10 md:min-w-[30%]">
            <p className="mb-4 max-w-md max-h-[40vh] overflow-auto">
              {message}
            </p>
            <div className="flex justify-end space-x-4 whitespace-nowrap">
              {!isInfo ? (
                <button
                  className="bg-black w-fit text-white px-4 py-2"
                  onClick={() => {
                    onAgree();
                    onClose();
                  }}
                >
                  I understand and agree
                </button>
              ) : (
                <button
                  className="bg-black w-fit text-white px-4 py-2"
                  onClick={onClose}
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
