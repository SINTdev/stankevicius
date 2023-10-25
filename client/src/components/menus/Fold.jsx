import React from "react";

export default function Fold(props) {
  if (props?.inside) {
    return (
      <div className={`mx-auto w-full max-w-screen-xl ${props?.className}`}>{props?.children}</div>
    );
  }
  return <div className={`mx-auto w-full ${props?.className}`}>{props?.children}</div>;
}
