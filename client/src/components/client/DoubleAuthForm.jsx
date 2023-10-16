import axios from "axios";
import React, { useEffect, useState } from "react";
import "react-phone-number-input/style.css";
import { useNavigate } from "react-router-dom";
import { CONSTANT, S2B, setMessage } from "../../CONSTANT";
import InputBox from "../../components/InputBox";
import QRCode from "react-qr-code";
import VerifyOTP from "../../auth/VerifyOTP";

const DoubleAuthForm = (props) => {
  const fetchURL = async () => {
    await axios
      .get(
        CONSTANT.server +
          `authentication/verify2fa/${props?.session.personal?.id}`
      )
      .then((responce) => {
        setUrl(responce?.data?.url);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [url, setUrl] = useState("");

  useEffect(() => {
    if (props?.session.isLoaded && props?.session.isLoggedIn) {
      fetchURL();
    }
  }, [props?.session]);

  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const update2FA = async (e, oQR = true) => {
    if (url !== "" && value) {
      setStep((old) => {
        return old + 1;
      });
    } else {
      await axios
        .put(CONSTANT.server + `authentication/user/${props?.user_id}`, {
          is2FA: value,
          skipPassword: true,
          onlyQR: oQR,
        })
        .then((responce) => {
          let res = responce.data;
          if (res.message) {
            setMessage(res.message, "red-500");
          } else {
            if (value) {
              fetchURL();
              setStep((old) => {
                return old + 1;
              });
            } else {
              setMessage(
                `Double authenticator is ${
                  S2B(value) ? "enabled" : "disabled"
                }.`,
                "green-500"
              );
            }
            sessionStorage.setItem(
              "loggedin",
              JSON.stringify({
                data: res,
              })
            );
            props?.updateSessionData();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const [value, setValue] = useState(false);
  useEffect(() => {
    setValue(url !== "");
  }, [url]);

  if (step === 1) {
    return (
      <div className="space-y-4 md:space-y-6">
        <div className="flex mb-5">
          <img
            src="/assets/logo.png"
            className="h-6 mr-3"
            alt="Stankevicius Logo"
          />
        </div>

        <div className="flex flex-col">
          <span className="text-xl text-center _font-bold leading-tight tracking-tight text-black md:text-2xl">
            2FA {props?.validate ? "Validation" : "Authentication"}
          </span>
          <span className="text-center mt-2">
            Please scan this QR code with your Google Authenticator app.
          </span>
        </div>
        <div className="flex justify-center items-center">
          <div className="space-y-2 md:space-y-3 w-full md:w-3/5">
            {url !== "" && url !== "" ? (
              <div className="w-full flex justify-center items-center mb-7">
                <QRCode size={200} value={url} />
              </div>
            ) : (
              "Please wait..."
            )}
            <div className="mt-2"></div>
            <div className="flex flex-row space-x-5 items-center justify-center w-full">
              <button
                className="bg-black w-[7rem] border border-black text-white px-4 py-2"
                onClick={() => {
                  setStep((old) => {
                    return old + 1;
                  });
                }}
              >
                Continue
              </button>
              <button
                className="bg-white text-black border border-black w-[7rem] px-4 py-2"
                onClick={() => {
                  setStep((old) => {
                    return old - 1;
                  });
                }}
              >
                Back
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
  }
  if (step === 2) {
    return (
      <VerifyOTP
        validate={true}
        user_id={props?.user_id}
        email={props?.email}
        updateSessionData={props?.updateSessionData}
        onCancel={() => {
          setStep((old) => {
            return old - 1;
          });
        }}
        onDone={() => {
          props?.onCancel();
        }}
      />
    );
  }

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex mb-5">
        <span className="text-base text-center _font-bold leading-tight tracking-tight text-black md:text-lg">
          Security settings
        </span>
      </div>
      <div className="flex justify-center items-center">
        <div className="space-y-2 md:space-y-3 w-full">
          <div className="w-full flex md:flex-row flex-col justify-start items-center">
            <div className="md:w-1/2 w-full">
              <div className="text-left md:text-sm _font-bold leading-tight tracking-tight text-black">
                2 Factor Authentication {url !== "" ? "Enabled" : "Disabled"}
              </div>
              <div className="mt-2 flex md:flex-row md:space-x-2 space-x-0 md:space-y-0 space-y-2 flex-col w-full">
                <InputBox
                  placeholder={"Select [Enable/Disable]"}
                  value={value}
                  onChange={(e) => {
                    setValue(S2B(e.target.value));
                  }}
                  name="offer"
                  select={true}
                  options={[
                    {
                      id: true,
                      name: "Enable",
                    },
                    {
                      id: false,
                      name: "Disable",
                    },
                  ]}
                  className="md:w-2/3 w-full"
                />
              </div>
              {/* {url !== "" && (
                <div className="md:w-2/3 w-full mt-2 text-left md:text-sm leading-tight tracking-tight text-black">
                  Please scan this QR code with your Google Authenticator app.
                </div>
              )} */}
            </div>
            {/* {url !== "" && url !== "" && (
              <div className="md:w-1/2 w-full flex md:justify-end md:items-start justify-center items-center md:mt-0 mt-5">
                <QRCode size={200} value={url} />
              </div>
            )} */}
          </div>
          <div className="mt-2"></div>
          {/* Buttons */}
          <div className="pt-5 flex justify-end space-x-4">
            <button
              className="bg-black w-[7rem] border border-black text-white px-4 py-2"
              onClick={update2FA}
            >
              {value ? "Continue" : "Update"}
            </button>
            <button
              className="bg-white text-black border border-black w-[7rem] px-4 py-2"
              onClick={props?.onCancel}
            >
              Cancel
            </button>
          </div>
          <div className="mt-2"></div>
          {!props?.hideError && (
            <div
              id="error"
              className="text-sm text-center"
              style={{ display: "none" }}
            ></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoubleAuthForm;
