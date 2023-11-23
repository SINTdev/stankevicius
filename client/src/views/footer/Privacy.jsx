import React, { useState, useEffect } from "react";

export default function Privacy(props) {
  const [terms, setTerms] = useState([
    {
      title: "Acceptance",
      content:
        "Your access to and use of this Site is subject to the following terms and conditions and all applicable laws. By accessing and browsing this Site, you accept, without limitation or qualification, these Terms and Conditions and acknowledge that any other agreements regarding the use of this Site between you and Novartis AG are superseded and of no force or effect.",
    },
    {
      title: "Acceptance",
      content:
        "Your access to and use of this Site is subject to the following terms and conditions and all applicable laws. By accessing and browsing this Site, you accept, without limitation or qualification, these Terms and Conditions and acknowledge that any other agreements regarding the use of this Site between you and Novartis AG are superseded and of no force or effect.",
    },
    {
      title: "Acceptance",
      content:
        "Your access to and use of this Site is subject to the following terms and conditions and all applicable laws. By accessing and browsing this Site, you accept, without limitation or qualification, these Terms and Conditions and acknowledge that any other agreements regarding the use of this Site between you and Novartis AG are superseded and of no force or effect.",
    },
    {
      title: "Acceptance",
      content:
        "Your access to and use of this Site is subject to the following terms and conditions and all applicable laws. By accessing and browsing this Site, you accept, without limitation or qualification, these Terms and Conditions and acknowledge that any other agreements regarding the use of this Site between you and Novartis AG are superseded and of no force or effect.",
    },
    {
      title: "Acceptance",
      content:
        "Your access to and use of this Site is subject to the following terms and conditions and all applicable laws. By accessing and browsing this Site, you accept, without limitation or qualification, these Terms and Conditions and acknowledge that any other agreements regarding the use of this Site between you and Novartis AG are superseded and of no force or effect.",
    },
    {
      title: "Acceptance",
      content:
        "Your access to and use of this Site is subject to the following terms and conditions and all applicable laws. By accessing and browsing this Site, you accept, without limitation or qualification, these Terms and Conditions and acknowledge that any other agreements regarding the use of this Site between you and Novartis AG are superseded and of no force or effect.",
    },
  ]);
  return (
    <div className="max-w-screen-xl mx-2 md:mx-auto p-0 md:p-4">
      <div className="mt-10 flex justify-center items-center flex-col">
        <div className="w-full">
          <div className="w-full text-left text-4xl _font-bold leading-tight tracking-tight text-black">
            Privacy
          </div>

          <div className="py-2.5"></div>
          <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
            Updated April 26, 2010
          </div>
          <div className="py-2.5"></div>
          {terms?.map((term, one) => {
            return (
              <>
                <div className="w-full text-left text-4xl _font-bold leading-tight tracking-tight text-black">
                  {one + 1}. {term.title}
                </div>
                <div className="py-2"></div>
                <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
                  {term.content}
                </div>
                <div className="py-2"></div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
