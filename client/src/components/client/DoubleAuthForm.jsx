import axios from "axios";
import React, { useEffect, useState } from "react";
import "react-phone-number-input/style.css";
import { useNavigate } from "react-router-dom";
import { CONSTANT, S2B, setMessage } from "../../CONSTANT";
import InputBox from "../../components/InputBox";
import QRCode from "react-qr-code";

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

  const navigate = useNavigate();
  const update2FA = async (e) => {
    await axios
      .put(CONSTANT.server + `authentication/user/${props?.user_id}`, {
        is2FA: S2B(value),
        skipPassword: true,
      })
      .then((responce) => {
        let res = responce.data;
        if (res.message) {
          setMessage(res.message, "red-500");
        } else {
          if (S2B(value)) {
            props?.onEnable();
          }
          setMessage(
            `Double authenticator is ${S2B(value) ? "enabled" : "disabled"}.`,
            "green-500"
          );
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
  };

  const [value, setValue] = useState(false);
  useEffect(() => {
    setValue(props?.is2FA);
  }, [props]);

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex mb-5">
        <span className="text-base text-center _font-bold leading-tight tracking-tight text-black md:text-lg">
          Security settings
        </span>
      </div>
      <div className="flex justify-center items-center">
        <div className="space-y-2 md:space-y-3 w-full">
          {/* <span className="text-base text-center _font-bold leading-tight tracking-tight text-black md:text-lg">
            <span
              className={`${
                !props?.is2FA ? "text-sky-700" : "text-red-500"
              } cursor-pointer`}
            >
              {!props?.is2FA ? "Enable" : "Disable"}
            </span>{" "}
            2 Factor Authentication
          </span> */}
          <div className="w-full flex md:flex-row flex-col justify-start items-center">
            <div className="md:w-1/2 w-full">
              <div className="text-left md:text-sm _font-bold leading-tight tracking-tight text-black">
                2 Factor Authentication {props?.is2FA ? "Enabled" : "Disabled"}
              </div>
              <div className="mt-2 flex md:flex-row md:space-x-2 space-x-0 md:space-y-0 space-y-2 flex-col w-full">
                <InputBox
                  placeholder={"Select [Enable/Disable]"}
                  value={value}
                  onChange={(e) => {
                    setValue(e.target.value);
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
              {props?.is2FA && (
                <div className="md:w-2/3 w-full mt-2 text-left md:text-sm leading-tight tracking-tight text-black">
                  Please scan this QR code with your Google Authenticator app.
                </div>
              )}
            </div>
            {url !== "" && props?.is2FA && (
              <div className="md:w-1/2 w-full flex md:justify-end md:items-start justify-center items-center md:mt-0 mt-5">
                <QRCode size={200} value={url} />
              </div>
            )}
          </div>
          <div className="mt-2"></div>
          {/* Buttons */}
          <div className="pt-5 flex justify-end space-x-4">
            <button
              className="bg-black w-[7rem] border border-black text-white px-4 py-2"
              onClick={update2FA}
            >
              Save
            </button>
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

export default DoubleAuthForm;
