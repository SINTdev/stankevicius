import {
  CardElement,
  useElements,
  useStripe,
  AddressElement,
} from "@stripe/react-stripe-js";
import React, { useEffect, useMemo, useState } from "react";

// function useResponsiveFontSize() {
// const getFontSize = () => (window.innerWidth < 450 ? "50px" : "18px");
// const [fontSize, setFontSize] = useState(getFontSize);

//   useEffect(() => {
//     const onResize = () => {
//       setFontSize(getFontSize());
//     };

//     window.addEventListener("resize", onResize);

//     return () => {
//       window.removeEventListener("resize", onResize);
//     };
//   });

//   return fontSize;
// }
const useOptions = () => {
  // const fontSize = useResponsiveFontSize();
  const options = useMemo(
    () => ({
      style: {
        base: {
          iconColor: "black",
          color: "black",
          // fontSize: fontSize,
          fontSize: "1rem",
          "::placeholder": {
            color: "#5D5D84",
          },
        },
        invalid: {
          color: "#EF4444",
        },
      },
    }),
    []
  );

  return options;
};

export default function PaymentForm(props) {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const fetchPaymentMethod = async (event) => {
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!payload?.error) {
      props?.changePayload({
        target: {
          name: "paymentMethod",
          value: payload,
        },
      });
    }
  };
  return (
    <>
      {/* <AddressElement options={{ mode: "billing", ...options }} /> */}
      <CardElement
        onBlur={fetchPaymentMethod}
        onChange={fetchPaymentMethod}
        options={options}
        className="__STRIPE_CSS__ border-gray-300 border-2 block px-3 py-3.5 w-full outline-none text-black rounded-none"
      />
    </>
  );
}
