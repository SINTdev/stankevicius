import React from "react";
import { RWebShare } from "react-web-share";
import { useReactToPrint } from "react-to-print";
import { useLocation } from "react-router-dom";
import { CONSTANT } from "./../CONSTANT";
import html2pdf from "html2pdf.js";

const RelevantIcon = ({ mode = "" }) => {
  if (mode === "share") {
    return (
      <svg
        id="svg2"
        version="1.1"
        height={18}
        width={18}
        className="mr-1 scale-125"
      >
        <g id="layer1" transform="translate(0,-1036.3622)">
          <path
            d="m -22.410713,-3.3303571 a 2.3660715,2.3660715 0 1 1 -4.732143,0 2.3660715,2.3660715 0 1 1 4.732143,0 z"
            id="path2985"
            style={{ fill: "#000000", fillOpacity: 1, stroke: "none" }}
            transform="matrix(0.84528301,0,0,0.84528301,33.943395,1042.1773)"
          />
          <path
            d="m -22.410713,-3.3303571 a 2.3660715,2.3660715 0 1 1 -4.732143,0 2.3660715,2.3660715 0 1 1 4.732143,0 z"
            id="path2985-1"
            style={{ fill: "#000000", fillOpacity: 1, stroke: "none" }}
            transform="matrix(0.84528301,0,0,0.84528301,33.943395,1052.1773)"
          />
          <path
            d="m -22.410713,-3.3303571 a 2.3660715,2.3660715 0 1 1 -4.732143,0 2.3660715,2.3660715 0 1 1 4.732143,0 z"
            id="path2985-1-7"
            style={{ fill: "#000000", fillOpacity: 1, stroke: "none" }}
            transform="matrix(0.84528301,0,0,0.84528301,23.943395,1047.1773)"
          />
          <path
            d="M 13,3 3,8 13,13"
            id="path3791"
            style={{
              fill: "none",
              stroke: "#000000",
              strokeWidth: "1px",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeOpacity: 1,
            }}
            transform="translate(0,1036.3622)"
          />
        </g>
      </svg>
    );
  } else if (mode === "print") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlSpace="preserve"
        width="20px"
        height="20px"
        version="1.1"
        className="mr-1.5"
        viewBox="0 0 512 512"
      >
        <defs>
          <style
            type="text/css"
            dangerouslySetInnerHTML={{
              __html: "\n   \n    .fil0 {fill:black}\n   \n  ",
            }}
          />
        </defs>
        <g id="Layer_x0020_1">
          <metadata id="CorelCorpID_0Corel-Layer" />
          <g id="_451637424">
            <g>
              <path
                className="fil0"
                d="M480 398l-58 0c-4,0 -7,-3 -7,-7 0,-4 3,-7 7,-7l58 0c10,0 18,-8 18,-18l0 -177c0,-10 -8,-18 -18,-18l-448 0c-10,0 -18,8 -18,18l0 177c0,10 8,18 18,18l58 0c4,0 7,3 7,7 0,4 -3,7 -7,7l-58 0c-17,0 -32,-15 -32,-32l0 -177c0,-17 15,-32 32,-32l448 0c17,0 32,15 32,32l0 177c0,17 -15,32 -32,32z"
              />
            </g>
            <g>
              <path
                className="fil0"
                d="M459 354l-406 0c-4,0 -7,-3 -7,-7 0,-4 3,-7 7,-7l406 0c4,0 7,3 7,7 0,4 -3,7 -7,7z"
              />
            </g>
            <g>
              <path
                className="fil0"
                d="M407 171c-4,0 -7,-3 -7,-7l0 -144 -288 0 0 144c0,4 -3,7 -7,7 -4,0 -7,-3 -7,-7l0 -151c0,-4 3,-7 7,-7l302 0c4,0 7,3 7,7l0 151c0,4 -3,7 -7,7z"
              />
            </g>
            <g>
              <path
                className="fil0"
                d="M422 398l-43 0c-4,0 -7,-3 -7,-7 0,-4 3,-7 7,-7l36 0 0 -37c0,-4 3,-7 7,-7 4,0 7,3 7,7l0 44c0,4 -3,7 -7,7zm-289 0l-43 0c-4,0 -7,-3 -7,-7l0 -44c0,-4 3,-7 7,-7 4,0 7,3 7,7l0 37 36 0c4,0 7,3 7,7 0,4 -3,7 -7,7z"
              />
            </g>
            <g>
              <path
                className="fil0"
                d="M74 216l-10 0c-4,0 -7,-3 -7,-7 0,-4 3,-7 7,-7l10 0c4,0 7,3 7,7 0,4 -3,7 -7,7z"
              />
            </g>
            <g>
              <path
                className="fil0"
                d="M118 216l-10 0c-4,0 -7,-3 -7,-7 0,-4 3,-7 7,-7l10 0c4,0 7,3 7,7 0,4 -3,7 -7,7z"
              />
            </g>
            <g>
              <path
                className="fil0"
                d="M379 506l-246 0c-4,0 -7,-3 -7,-7l0 -152c0,-4 3,-7 7,-7 4,0 7,3 7,7l0 145 232 0 0 -145c0,-4 3,-7 7,-7 4,0 7,3 7,7l0 152c0,4 -3,7 -7,7z"
              />
            </g>
            <g>
              <path
                className="fil0"
                d="M365 60l-218 0c-4,0 -7,-3 -7,-7 0,-4 3,-7 7,-7l218 0c4,0 7,3 7,7 0,4 -3,7 -7,7z"
              />
            </g>
            <g>
              <path
                className="fil0"
                d="M365 96l-218 0c-4,0 -7,-3 -7,-7 0,-4 3,-7 7,-7l218 0c4,0 7,3 7,7 0,4 -3,7 -7,7z"
              />
            </g>
            <g>
              <path
                className="fil0"
                d="M365 131l-218 0c-4,0 -7,-3 -7,-7 0,-4 3,-7 7,-7l218 0c4,0 7,3 7,7 0,4 -3,7 -7,7z"
              />
            </g>
            <g>
              <path
                className="fil0"
                d="M354 307l-196 0c-4,0 -7,-3 -7,-7l0 -46c0,-4 3,-7 7,-7l196 0c4,0 7,3 7,7l0 46c0,4 -3,7 -7,7zm-189 -14l182 0 0 -32 -182 0 0 32z"
              />
            </g>
            <g>
              <path
                className="fil0"
                d="M451 216l-111 0c-4,0 -7,-3 -7,-7 0,-4 3,-7 7,-7l111 0c4,0 7,3 7,7 0,4 -3,7 -7,7z"
              />
            </g>
          </g>
        </g>
      </svg>
    );
  } else {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="16px"
        height="16px"
        viewBox="0 0 18 18"
        className="mr-1"
        version="1.1"
      >
        {/* Generator: Sketch 52.5 (67469) - http://www.bohemiancoding.com/sketch */}
        <title>save_alt</title>
        <desc>Created with Sketch.</desc>
        <g
          id="Icons"
          stroke="none"
          strokeWidth={1}
          fill="none"
          fillRule="evenodd"
        >
          <g id="Rounded" transform="translate(-443.000000, -1529.000000)">
            <g id="Content" transform="translate(100.000000, 1428.000000)">
              <g
                id="-Round-/-Content-/-save_alt"
                transform="translate(340.000000, 98.000000)"
              >
                <g>
                  <polygon id="Path" points="0 0 24 0 24 24 0 24" />
                  <path
                    d="M19,13 L19,18 C19,18.55 18.55,19 18,19 L6,19 C5.45,19 5,18.55 5,18 L5,13 C5,12.45 4.55,12 4,12 C3.45,12 3,12.45 3,13 L3,19 C3,20.1 3.9,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,13 C21,12.45 20.55,12 20,12 C19.45,12 19,12.45 19,13 Z M13,12.67 L14.88,10.79 C15.27,10.4 15.9,10.4 16.29,10.79 C16.68,11.18 16.68,11.81 16.29,12.2 L12.7,15.79 C12.31,16.18 11.68,16.18 11.29,15.79 L7.7,12.2 C7.31,11.81 7.31,11.18 7.7,10.79 C8.09,10.4 8.72,10.4 9.11,10.79 L11,12.67 L11,4 C11,3.45 11.45,3 12,3 C12.55,3 13,3.45 13,4 L13,12.67 Z"
                    id="🔹Icon-Color"
                    fill="#1D1D1D"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    );
  }
};

export default function SavingOptions(props) {
  let location = useLocation();
  const handlePrint = useReactToPrint({
    content: () => props?.component.current,
  });
  const handleShare = useReactToPrint({
    content: () => props?.component.current,
    documentTitle: `${props?.title}.pdf`,
    copyStyles: true,
    print: async (printIframe) => {
      const document = printIframe.contentDocument;
      if (document) {
        const html = document.getElementsByTagName("html")[0];
        console.log(html);
        await html2pdf()
          .from(html)
          .set({
            margin: 10,
            filename: `${props?.title}.pdf`,
          })
          .save();
      }
    },
  });
  return (
    <div
      className={`${props?.className} w-full flex flex-col md:flex-row items-center justify-start`}
    >
      <RWebShare
        data={{
          text: props?.desc,
          url: `${CONSTANT.client.slice(0, -1)}${location.pathname}`,
          title: props?.title,
        }}
      >
        <div className="hover:bg-[#c7c7c7] cursor-pointer flex flex-row items-center justify-center border-2 border-[#c7c7c7] px-10 py-2.5 _font-bold border-r-2 md:mb-0 mb-3 md:border-r-0 w-full md:w-fit">
          <RelevantIcon mode="share" />
          Share
        </div>
      </RWebShare>
      <div className="flex flex-row w-full">
        <div
          onClick={handlePrint}
          className="hover:bg-[#c7c7c7] cursor-pointer flex flex-row items-center justify-center border-2 border-[#c7c7c7] px-10 py-2.5 _font-bold w-full md:w-fit border-r-0"
        >
          <RelevantIcon mode="print" />
          Print
        </div>
        <div
          onClick={handleShare}
          className="hover:bg-[#c7c7c7] cursor-pointer flex flex-row items-center justify-center border-2 border-[#c7c7c7] px-10 py-2.5 _font-bold w-full md:w-fit"
        >
          <RelevantIcon mode="" />
          Save
        </div>
      </div>
    </div>
  );
}
