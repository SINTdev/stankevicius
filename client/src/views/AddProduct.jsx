import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  CONSTANT,
  setMessage,
  resetMessage,
  checkLoginFromNonLogin,
  smoothScrollDown,
} from "../CONSTANT";
import InputBox from "../components/InputBox";

import { Tooltip as TP } from "react-tooltip";
import Tooltip from "../components/Tooltip";
import axios from "axios";
import UserData from "../contexts/UserData";
import Menu from "../components/Menu";
import DashboardOptions from "../components/client/DashboardOptions";
export default function AddProduct(props) {
  const { session, setSession } = useContext(UserData);
  const { id: id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const focusParam = params.get("focus");

    if (focusParam === "update") {
      const mainFormDiv = document.getElementById("main_form_div");
      if (mainFormDiv) {
        const marginFromTop = 4 * 16; // 20rem in pixels (assuming 1rem = 16px)
        const targetPosition =
          mainFormDiv.getBoundingClientRect().top +
          window.scrollY -
          marginFromTop;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    }
  }, []);

  useEffect(() => {
    smoothScrollDown();
  }, []);

  const init__payload = {
    name: "",
    action: "",
    category: "",
    quantity: "",
    measurement: "",
    price: "",
    currency: "",
    payment: "",
    delivery: "",
    contract: "",
    origin: "",
    listingDuration: "",
    promoteToSubscribed: false,
    promoteToTradeQuoteBar: false,
    promoteCompanyWebsite: false,
  };
  const [payload, setPayload] = useState(init__payload);
  const changePayload = (e) => {
    setPayload({
      ...payload,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (checkLoginFromNonLogin()) {
      navigate("/");
    }
  }, [session]);

  const [options, setOptions] = useState({
    actions: [],
    categories: [],
    measurements: [],
    currencies: [],
    payments: [],
    deliveries: [],
    contracts: [],
    origins: [],
    listing_durations: [],
  });

  const fetchProduct = async () => {
    await axios
      .get(CONSTANT.server + `api/product/${id}/${session?.personal?.id}`)
      .then((responce) => {
        if (responce?.data?.message) {
          navigate("/");
        }
        setPayload({
          ...responce?.data,
          action: responce?.data?.action?.id,
          category: responce?.data?.category?.id,
          measurement: responce?.data?.measurement?.id,
          currency: responce?.data?.currency?.id,
          payment: responce?.data?.payment?.id,
          delivery: responce?.data?.delivery?.id,
          contract: responce?.data?.contract?.id,
          origin: responce?.data?.origin?.id,
          listingDuration: responce?.data?.listingDuration?.id,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchOptions = async () => {
    await axios
      .get(CONSTANT.server + "api/options")
      .then((responce) => {
        setOptions(responce.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchOptions();
  }, []);

  useEffect(() => {
    if (id && session?.isLoaded && session?.isLoggedIn) {
      fetchProduct();
    }
  }, [id, session]);

  const addProduct = async (e) => {
    e.target.style.pointerEvents = "none";
    e.target.innerHTML =
      '<div className="spinner-border custom-spin" role="status"><span className="visually-hidden">Loading...</span></div>';
    e.preventDefault();
    if (validate()) {
      if (!props?.edit) {
        await axios
          .post(CONSTANT.server + "api/products", {
            ...payload,
            by: session?.personal?.id,
          })
          .then((responce) => {
            if (responce?.data?.message) {
              setMessage(responce?.data?.message, "red-500");
            } else {
              setPayload(init__payload);
              setMessage(
                "Trade added successfully. You will be now redirected to the homepage...",
                "green-500"
              );
              setTimeout(() => {
                navigate("/");
              }, 4000);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        await axios
          .put(CONSTANT.server + `api/products/${payload?.id}`, {
            action: payload?.action,
            category: payload?.category,
            measurement: payload?.measurement,
            currency: payload?.currency,
            payment: payload?.payment,
            delivery: payload?.delivery,
            contract: payload?.contract,
            origin: payload?.origin,
            listingDuration: payload?.listingDuration,
            name: payload?.name,
            quantity: payload?.quantity,
            price: payload?.price,
            promoteToSubscribed: payload?.promoteToSubscribed,
            promoteToTradeQuoteBar: payload?.promoteToTradeQuoteBar,
          })
          .then((responce) => {
            if (responce?.data?.message) {
              setMessage(responce?.data?.message, "red-500");
            } else {
              setPayload(init__payload);
              setMessage(
                "Trade updated successfully. You will be now redirected to the homepage...",
                "green-500"
              );
              setTimeout(() => {
                navigate("/");
              }, 4000);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
    e.target.style.pointerEvents = "unset";
    e.target.innerHTML = `${!props?.edit ? "Add new" : "Update"} trade`;
  };

  const validate = () => {
    resetMessage();
    if (!payload.name) {
      setMessage("Please enter a name.", "red-500");
      return false;
    }
    if (!payload.action) {
      setMessage("Please select an action.", "red-500");
      return false;
    }
    if (!payload.category) {
      setMessage("Please select a category.", "red-500");
      return false;
    }
    if (!payload.quantity || payload.quantity <= 0) {
      setMessage("Please enter a valid quantity.", "red-500");
      return false;
    }
    if (!payload.measurement) {
      setMessage("Please select a measurement.", "red-500");
      return false;
    }
    if (!payload.price || payload.price <= 0) {
      setMessage("Please enter a valid price.", "red-500");
      return false;
    }
    if (!payload.currency) {
      setMessage("Please select a currency.", "red-500");
      return false;
    }
    if (!payload.payment) {
      setMessage("Please select a payment method.", "red-500");
      return false;
    }
    if (!payload.delivery) {
      setMessage("Please select a delivery method.", "red-500");
      return false;
    }
    if (!payload.contract) {
      setMessage("Please select a contract type.", "red-500");
      return false;
    }
    if (!payload.origin) {
      setMessage("Please select an origin.", "red-500");
      return false;
    }
    if (!payload.listingDuration) {
      setMessage("Please select a listing duration.", "red-500");
      return false;
    }
    return true;
  };

  if (props?.isMenuOpen) {
    return <Menu />;
  }

  return (
    <div className="max-w-screen-xl mx-auto p-0 md:p-4">
    <DashboardOptions name={""} />
      <TP id="my-tooltip" className="max-w-sm md:max-w-md z-20"/>
      <div
        className="mt-10 flex justify-center items-center flex-col"
        id="main_form_div"
      >
        <div className="w-full">
          <div className="w-full text-left mb-2 md:pl-1 text-4xl _font-bold leading-tight tracking-tight text-black">
            {!props?.edit ? "Add new" : "Update"} trade
          </div>
          <div className="w-full text-left md:pl-1 mb-3 text-xl _font-bold leading-tight tracking-tight text-black">
            Product and trade overview information
          </div>
          <div className="w-full flex flex-col md:flex-row">
            <InputBox
              placeholder={"Name"}
              value={payload.name}
              onChange={changePayload}
              name="name"
              className="my-1 md:w-[calc(100%+20px)] md:mx-1"
            />
            <InputBox
              placeholder={"Action"}
              value={payload.action}
              onChange={changePayload}
              name="action"
              select={true}
              options={options.actions}
              className="my-1 md:w-1/2 md:mx-1"
            />
            <InputBox
              placeholder={"Category"}
              value={payload.category}
              onChange={changePayload}
              name="category"
              select={true}
              options={options.categories}
              className="my-1 md:w-1/2 md:mx-1"
            />
          </div>
          <div className="w-full flex flex-col md:flex-row">
            <InputBox
              placeholder={"Quantity"}
              value={payload.quantity}
              onChange={changePayload}
              name="quantity"
              type="number"
              className="my-1 md:w-full md:mx-1"
            />
            <InputBox
              placeholder={"Measurement"}
              value={payload.measurement}
              onChange={changePayload}
              name="measurement"
              select={true}
              options={options.measurements}
              className="my-1 md:w-full md:mx-1"
            />{" "}
            <InputBox
              placeholder={"Price"}
              value={payload.price}
              onChange={changePayload}
              name="price"
              type="number"
              className="my-1 md:w-full md:mx-1"
            />
            <InputBox
              placeholder={"Currency"}
              value={payload.currency}
              onChange={changePayload}
              name="currency"
              select={true}
              options={options.currencies}
              className="my-1 md:w-full md:mx-1"
            />
          </div>
          <div className="w-full flex flex-col md:flex-row"></div>
          <div className="w-full flex flex-col md:flex-row">
            <InputBox
              placeholder={"Payment"}
              value={payload.payment}
              onChange={changePayload}
              name="payment"
              select={true}
              options={options.payments}
              className="my-1 md:w-full md:mx-1"
            />
            <InputBox
              placeholder={"Delivery"}
              value={payload.delivery}
              onChange={changePayload}
              name="delivery"
              select={true}
              options={options.deliveries}
              className="my-1 md:w-full md:mx-1"
            />
            <InputBox
              placeholder={"Contract"}
              value={payload.contract}
              onChange={changePayload}
              name="contract"
              select={true}
              options={options.contracts}
              className="my-1 md:w-full md:mx-1"
            />
            <InputBox
              placeholder={"Origin"}
              value={payload.origin}
              onChange={changePayload}
              name="origin"
              select={true}
              options={options.origins}
              className="my-1 md:w-full md:mx-1"
            />
          </div>
          <span className="mt-8 block"></span>
          <div className="w-full text-left md:pl-1 mb-3 text-xl _font-bold leading-tight tracking-tight text-black">
            Listing validity
          </div>
          <p className="m-1 mt-0 text-sm mb-1 md:w-[calc(25%-8px)] flex flex-row items-center">
            How long this listing should be valid?
            <Tooltip text="Select the duration for this trade. Once the trade is expired, it will be automatically removed from the public list." />
          </p>
          <div className="w-full flex flex-col md:flex-row">
            <InputBox
              placeholder={"Listing Duration"}
              value={payload.listingDuration}
              onChange={changePayload}
              name="listingDuration"
              select={true}
              options={options.listing_durations}
              className="my-1 md:w-[calc(25%-8px)] w-full md:mx-1"
            />
          </div>
          <span className="mt-8 block"></span>
          <div className="w-full text-left md:pl-1 mb-3 text-xl _font-bold leading-tight tracking-tight text-black">
            Promotion
          </div>
          <p className="m-1 mt-0 text-sm mb-1 md:w-[calc(25%-8px)] flex flex-row items-center">
            Promote to subscribed users?
            <Tooltip text="If you select yes, then upon your submission, the trade information will be sent directly to emails of all the subscribed users. Users will then be able reach out to you directly." />
          </p>
          <div className="w-full flex flex-col md:flex-row">
            <InputBox
              placeholder={"Yes/No"}
              value={payload.promoteToSubscribed}
              onChange={changePayload}
              name="promoteToSubscribed"
              select={true}
              options={[
                {
                  id: true,
                  name: "Yes",
                },
                {
                  id: false,
                  name: "No",
                },
              ]}
              className="my-1 md:w-[calc(25%-8px)] w-full md:mx-1"
            />
          </div>
          <span className="mt-2 block"></span>
          <p className="m-1 mt-0 text-sm mb-1 md:w-[calc(25%-8px)] flex flex-row items-center">
            Promote on Trade Quote bar?
            <Tooltip text="Your trade will appear on the running *Trade Quotes* bar to reach more visibility." />
          </p>
          <div className="w-full flex flex-col md:flex-row">
            <InputBox
              placeholder={"Yes/No"}
              value={payload.promoteToTradeQuoteBar}
              onChange={changePayload}
              name="promoteToTradeQuoteBar"
              select={true}
              options={[
                {
                  id: true,
                  name: "Yes",
                },
                {
                  id: false,
                  name: "No",
                },
              ]}
              className="my-1 md:w-[calc(25%-8px)] w-full md:mx-1"
            />
          </div>
          <span className="mt-2 block"></span>
          <p className="m-1 mt-0 text-sm mb-1 md:w-[calc(25%-8px)] flex flex-row items-center">
            Promote your company?
            <Tooltip text="Your company's name will be promoted on your trade along with your company's website. Users may reach out to your company directly." />
          </p>
          <div className="w-full flex flex-col md:flex-row">
            <InputBox
              placeholder={"Yes/No"}
              value={payload.promoteCompanyWebsite}
              onChange={changePayload}
              name="promoteCompanyWebsite"
              select={true}
              options={[
                {
                  id: true,
                  name: "Yes",
                },
                {
                  id: false,
                  name: "No",
                },
              ]}
              className="my-1 md:w-[calc(25%-8px)] w-full md:mx-1"
            />
          </div>
          <div className="mt-5 flex flex-row justify-end items-center space-x-2">
            <button
              onClick={addProduct}
              className="w-fit text-white border border-black bg-black text-sm px-5 py-2.5 text-center"
            >
              {!props?.edit ? "Add new" : "Update"} trade
            </button>
            <span
              // to={`${
              //   props?.edit
              //     ? session?.personal?.is_staff
              //       ? "/corporate"
              //       : "/client"
              //     : "/"
              // }`}
              onClick={() => {
                navigate(-1);
              }}
              className="cursor-pointer w-fit text-black border border-black bg-transparent text-sm px-5 py-2.5 text-center"
            >
              Cancel
            </span>
          </div>
          <div
            className="mt-10 text-center"
            id="error"
            style={{ display: "none" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
