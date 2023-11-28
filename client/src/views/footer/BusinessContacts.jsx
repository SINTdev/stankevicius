import React, { useRef, useState } from "react";
import Fold from "../../components/menus/Fold";
import { Link } from "react-router-dom";
import InputBox from "../../components/InputBox";
import { getPageMargins } from "../../CONSTANT";
import SavingOptions from "../../components/SavingOptions";

const ContactList = (props) => {
  return (
    <div className="flex flex-col md:w-full w-1/2">
      <div className="_font-bold text-left md:text-lg text-base leading-normal tracking-tight text-black">
        {props?.label}
      </div>
      <div className="pt-7"></div>
      {props?.children}
    </div>
  );
};

export default function BusinessContacts() {
  const [filter, setFilter] = useState("");
  const component = useRef();
  return (
    <>
      <div ref={component} className="w-full flex flex-col space-y-8 md:p-0">
        <style>{getPageMargins()}</style>
        <Fold className="bg-white px-2 pt-[4.5rem]">
          <Fold inside className="mt-10">
            <div className="w-full text-left md:text-4xl text-2xl  _font-bold leading-tight tracking-tight text-black">
              Business Contacts
            </div>
            <div className="py-3"></div>
            <div className="w-full text-left md:text-lg text-base leading-normal tracking-tight text-black">
              For questions about Investor Relations or the Share Registry,
              please contact our team.
            </div>
            <div className="py-3"></div>
            <div className="w-full text-left md:text-lg text-base leading-normal tracking-tight text-black">
              For all other queries:
            </div>
            <div className="py-4"></div>
            <div className="flex md:flex-row flex-col">
              <ContactList label="Main Switchboard">
                <div className="w-full text-left md:text-lg text-base leading-normal tracking-tight text-black">
                  Switzerland
                </div>
                <div className="w-full text-left md:text-lg text-base leading-normal tracking-tight text-black">
                  Phone: +41 61 324 11 11
                </div>
              </ContactList>
              <ContactList label="US Switchboard">
                <div className="w-full text-left md:text-lg text-base leading-normal tracking-tight text-black">
                  Phone: +1 862 778 21 00
                </div>
              </ContactList>
            </div>
            <div className="py-3"></div>
            <div className="hidden py-2 border-t border-b border-gray-300 lg:flex items-center justify-start space-x-2 font-bold mt-7 mb-3 overflow-x-auto">
              {[
                {
                  id: "",
                  name: "Client Services",
                },
                {
                  id: "media",
                  name: `Media`,
                },
                {
                  id: "global",
                  name: `IR Global`,
                },
              ].map((category, one) => {
                return (
                  <p
                    className={`${
                      filter === category.id && "bg-gray-200"
                    } py-2 px-5 hover:bg-gray-200 text-[18px]  transition-all duration-300 ease-in-out cursor-pointer`}
                    onClick={() => {
                      setFilter(category.id);
                    }}
                  >
                    {category.name}
                  </p>
                );
              })}
            </div>
            <InputBox
              placeholder={"Products"}
              className="lg:hidden mt-3"
              value={filter}
              onChange={(e) => {
                setFilter(e.target.value);
              }}
              name="products"
              select={true}
              removeDefaultFirst={true}
              options={[
                {
                  id: "",
                  name: "Client Services",
                },
                {
                  id: "media",
                  name: `Media`,
                },
                {
                  id: "global",
                  name: `IR Global`,
                },
              ]}
            />
            <div className="py-3"></div>
            <div className="pb-3"></div>
            <div className="w-full text-left md:text-lg text-base leading-normal tracking-tight text-black">
              For <b className="_font-bold">information</b> regarding the share
              register (entries, transfers, dividends, etc.) please contact:
            </div>
            <div className="py-2"></div>
            <div className="flex md:flex-row flex-col">
              <div className="w-full text-left md:text-lg text-base leading-normal tracking-tight text-black">
                E-mail address
              </div>
              <a
                href="mailto:share.registry@novartis.com"
                className="text-sky-700 underline cursor-pointer w-full text-left md:text-lg text-base leading-normal tracking-tight"
              >
                share.registry@novartis.com
              </a>
            </div>
            <div className="py-1 border-b-2 border-gray-300"></div>
            <div className="py-1"></div>
            <div className="flex md:flex-row flex-col items-center">
              <div className="w-full text-left md:text-lg text-base leading-normal tracking-tight text-black">
                Postal address
              </div>
              <div className="flex flex-col w-full">
                <div className="_font-bold w-full text-left md:text-lg text-base leading-normal tracking-tight text-black">
                  Novartis International AG
                </div>
                <div className="w-full text-left md:text-lg text-base leading-normal tracking-tight text-black">
                  Share Registry
                </div>
                <div className="w-full text-left md:text-lg text-base leading-normal tracking-tight text-black">
                  Forum 1-2.77
                </div>
                <div className="w-full text-left md:text-lg text-base leading-normal tracking-tight text-black">
                  P.O. Box
                </div>
                <div className="w-full text-left md:text-lg text-base leading-normal tracking-tight text-black">
                  4002 Basel
                </div>
                <div className="w-full text-left md:text-lg text-base leading-normal tracking-tight text-black">
                  Switzerland
                </div>
              </div>
            </div>
            <div className="py-1 border-b-2 border-gray-300"></div>
            <div className="py-1"></div>
            <div className="flex md:flex-row flex-col">
              <div className="w-full text-left md:text-lg text-base leading-normal tracking-tight text-black">
                Phone number
              </div>
              <div className="w-full text-left md:text-lg text-base leading-normal tracking-tight text-black">
                +41 61 324 72 04
              </div>
            </div>
            <div className="py-1 border-b-2 border-gray-300"></div>
            <div className="py-2"></div>
            <div className="py-2"></div>{" "}
            <div className="w-full text-left md:text-lg text-base leading-normal tracking-tight text-black">
              You can notify the Share Registry of a{" "}
              <b className="_font-bold">change of address</b> using the
              following form:
            </div>
            <div className="py-3"></div>{" "}
            <a
              href="#"
              className="text-sky-700 underline cursor-pointer w-full text-left md:text-lg text-base leading-normal tracking-tight"
            >
              Change of address: Online form
            </a>{" "}
            <div className="py-3"></div>{" "}
            <div className="w-full text-left md:text-lg text-base leading-normal tracking-tight text-black">
              Note: Most Swiss custodian banks automatically notify the stock
              corporations of their customers’ address changes to be applied in
              the share register.
            </div>
          </Fold>
        </Fold>
      </div>
      <Fold className="bg-white px-2">
        <Fold inside>
          <SavingOptions
            className="mt-10"
            desc="Example desc"
            title="Business Contacts"
            component={component}
          />
        </Fold>
      </Fold>
    </>
  );
}
