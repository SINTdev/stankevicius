import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
   CONSTANT,
   setMessage,
   resetMessage,
   checkLoginFromNonLogin,
} from "../CONSTANT";
import InputBox from "../components/InputBox";
import axios from "axios";
import UserData from "../contexts/UserData";
export default function AddProduct() {
   const { session, setSession } = useContext(UserData);
   let navigate = useNavigate();
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

   const addProduct = async (e) => {
      e.target.style.pointerEvents = "none";
      e.target.innerHTML =
         '<div className="spinner-border custom-spin" role="status"><span className="visually-hidden">Loading...</span></div>';
      e.preventDefault();
      if (validate()) {
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
                  setMessage("Product added successfully.", "green-500");
                  setTimeout(() => {
                     navigate("/");
                  }, 4000);
               }
            })
            .catch((error) => {
               console.log(error);
            });
      }
      e.target.style.pointerEvents = "unset";
      e.target.innerHTML = "Add Product";
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

   return (
      <div className="flex justify-center items-center flex-col">
         <div className="md:w-3/4 w-full">
            <div className="w-full text-left mb-5 md:pl-1 text-4xl _font-bold leading-tight tracking-tight text-black">
               Add new trade
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
            <span className="mt-10 block"></span>
            <p className="text-sm mb-1">
               For how long do you want this listing to be valid?
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
            <div className="mt-5 flex flex-row justify-end items-center space-x-2">
               <button
                  onClick={addProduct}
                  className="w-fit text-white tracking-wider _font-bold border border-black bg-black text-sm px-5 py-2.5 text-center"
               >
                  Add new trade
               </button>
               <Link
                  to="/"
                  className="w-fit text-black tracking-wider _font-bold border border-black bg-transparent text-sm px-5 py-2.5 text-center"
               >
                  Cancel
               </Link>
            </div>
            <div
               className="mt-10 text-center"
               id="error"
               style={{ display: "none" }}
            ></div>
         </div>
      </div>
   );
}
