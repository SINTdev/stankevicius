import axios from "axios";
import React, { useEffect, useState } from "react";
import "react-phone-number-input/style.css";
import { useNavigate } from "react-router-dom";
import {
  CONSTANT,
  resetMessage,
  setMessage,
  checkLoginFromNonLogin,
} from "../../CONSTANT";
import InputBox from "../../components/InputBox";

const CategoryManagement = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (checkLoginFromNonLogin()) {
      navigate("/");
    }
  }, []);

  const [categories, setCategories] = useState([]);
  const fetchCategories = async () => {
    await axios
      .post(CONSTANT.server + "api/options", {})
      .then((responce) => {
        setCategories(responce.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  const [state, setState] = useState({
    id: "",
  });

  const [isText, setIsText] = useState(false);
  const [newValue, setNewValue] = useState("");

  useEffect(() => {
    if (parseInt(state.id) < 0) {
      setIsText(true);
    }
  }, [state]);

  //   Categories operation

  const categoryOperation = async (payload, operation = "add") => {
    await axios
      .post(CONSTANT.server + "api/category", {
        payload: payload,
        operation: operation,
      })
      .then((responce) => {
        fetchCategories();
        props?.refreshCategories();
        setIsText(false);
        setNewValue("");
        setState({
          id: "",
        });
        setMessage(responce?.data?.message, "green-500");
        setTimeout(() => {
          resetMessage();
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex mb-5">
        <span className="text-base text-center _font-bold leading-tight tracking-tight text-black md:text-lg">
          Category Management
        </span>
      </div>
      <div className="flex justify-center items-center">
        <div className="space-y-2 md:space-y-3 w-full">
          <div className="w-full flex flex-col">
            <div className="mt-2 flex md:flex-row md:space-x-2 space-x-0 md:space-y-0 space-y-2 flex-col w-full">
              {isText ? (
                <InputBox
                  placeholder={"Enter new category"}
                  value={newValue}
                  onChange={(e) => {
                    setNewValue(e.target.value);
                  }}
                  className="md:w-2/3 w-full"
                />
              ) : (
                <InputBox
                  placeholder={"Select category"}
                  value={state?.id}
                  onChange={(e) => {
                    setState({
                      ...state,
                      id: e.target.value,
                    });
                  }}
                  select={true}
                  options={[
                    ...categories,
                    {
                      id: -1,
                      name: "+ Add new category",
                    },
                  ]}
                  className="md:w-2/3 w-full"
                />
              )}
              <div className="flex flex-row space-x-2">
                <button
                  className={`${
                    !isText || newValue === "" || parseInt(state?.id) >= 0
                      ? "bg-[#929292] pointer-events-none"
                      : "bg-black border-black"
                  }  w-fit border text-white px-4 py-2`}
                  onClick={() => {
                    categoryOperation(
                      {
                        value: newValue,
                      },
                      "add"
                    );
                  }}
                >
                  Add
                </button>
                <button
                  className={`${
                    !state?.id || parseInt(state?.id) < 0
                      ? "bg-[#929292] pointer-events-none"
                      : "bg-black border-black"
                  }  w-fit border text-white px-4 py-2`}
                  onClick={() => {
                    if (!isText) {
                      setNewValue(
                        categories.find((a) => {
                          return parseInt(a?.id) === parseInt(state?.id);
                        })?.name
                      );
                      setIsText(true);
                    } else {
                      categoryOperation(
                        {
                          id: state?.id,
                          value: newValue,
                        },
                        "update"
                      );
                    }
                  }}
                >
                  Edit
                </button>
                <button
                  className={`${
                    !state?.id || isText
                      ? "bg-[#929292] pointer-events-none"
                      : "bg-black border-black"
                  }  w-fit border text-white px-4 py-2`}
                  onClick={() => {
                    props?.setModal({
                      ...props?.modal,
                      isOpen: true,
                      content: `You confirm that you want to remove
                      the selected category and this
                      category will be removed. All trades
                      under this category will be moved to
                      uncategorized category.`,
                      onYes: () => {
                        categoryOperation(
                          {
                            id: state?.id,
                          },
                          "delete"
                        );
                        props?.setModal(props?.EMPTY_MODAL);
                      },
                    });
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
          <div className="mt-2"></div>
          {/* Buttons */}
          <div className="pt-10 flex justify-end space-x-4">
            {/* <button
              className="bg-black w-[7rem] border border-black text-white px-4 py-2"
              onClick={null}
            >
              Save
            </button> */}
            <button
              className="bg-white text-black border border-black w-[7rem] px-4 py-2"
              onClick={props?.onCancel}
            >
              Cancel
            </button>
          </div>
          <div className="mt-2"></div>
          <div
            id="error"
            className="text-sm text-center"
            style={{ display: "none" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CategoryManagement;
