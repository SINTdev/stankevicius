import React from "react";

const Modal = (props) => {
  const { isOpen, onClose, text, onYes, isCancel } = props;

  return (
    <>
      {isOpen ? (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={onClose}
          ></div>

          {/* Modal Content */}
          <div className="bg-white p-8 border-2 border-black z-10">
            <p className="mb-4 max-w-md">{text}</p>
            <div className="flex justify-center space-x-4">
              <button
                className="bg-black w-[7rem] text-white px-4 py-2 rounded"
                onClick={onYes}
              >
                {isCancel ? "Agree" : "Ok"}
              </button>
              <button
                className="bg-black w-[7rem] text-white px-4 py-2 rounded"
                onClick={onClose}
              >
                {isCancel ? "Disagree" : "Cancel"}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
