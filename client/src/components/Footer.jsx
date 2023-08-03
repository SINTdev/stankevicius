import React, { useState } from "react";

const Footer = () => {
   const [activeLinkIndex, setActiveLinkIndex] = useState([]);
   const [footerItems, setfooterItems] = useState([
      {
         link: "Navigate Stankevicius",
         subLinks: [
            "Patients and Caregivers",
            "Healthcare Professionals",
            "Researchers",
            "Job Seekers",
            "Journalists",
            "Investors",
            "Partners",
            "Suppliers",
         ],
      },
      {
         link: "Topics",
         subLinks: ["Clinical Trials", "ESG", "SpeakUp"],
      },
      {
         link: "Explore",
         subLinks: [
            "Stankevicius",
            "Products",
            "Therapeutic areas",
            "Diseases",
            "Stories",
            "Location",
         ],
      },
      {
         link: "Stankevicius companies",
         subLinks: [
            "Sandoz",
            "Advanced Accelerator Applications",
            "Gyroscope Therapeutics areas",
         ],
      },
   ]);
   return (
      <footer class="bg-[#f1f1f1] px-4 py-6 md:p-10 mt-20">
         <div class="mx-auto w-full max-w-screen-xl">
            <h1 className="text-3xl font-extrabold">Stankevicius</h1>

            {/* Mobile View Setup */}
            <div className="w-full md:hidden py-5 space-y-3">
               {footerItems?.map((item, index) => {
                  return (
                     <div className="w-full ">
                        <div
                           className="flex items-center justify-between font-bold text-black mb-2"
                           onClick={() =>
                              activeLinkIndex.includes(index)
                                 ? setActiveLinkIndex(
                                      activeLinkIndex.filter(
                                         (item) => item !== index
                                      )
                                   )
                                 : setActiveLinkIndex([
                                      ...activeLinkIndex,
                                      index,
                                   ])
                           }
                        >
                           <p className="">{item.link}</p>
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                           >
                              <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                              />
                           </svg>
                        </div>
                        <div className="space-y-1">
                           <ul class=" text-sm font-medium space-y-1 underline">
                              {activeLinkIndex.includes(index) &&
                                 item?.subLinks?.map((subLink, index) => {
                                    return (
                                       <li class="">
                                          <a href="#" class=" hover:underline">
                                             {subLink}
                                          </a>
                                       </li>
                                    );
                                 })}
                           </ul>
                        </div>
                     </div>
                  );
               })}
            </div>
            {/* Desktop View */}
            <div class="grid-cols-2 gap-8  py-6 lg:py-8 md:grid-cols-4 hidden md:grid">
               <div>
                  <h2 class="mb-6 text-sm font-bold text-gray-900 uppercase e">
                     Navigate Stankevicius
                  </h2>
                  <ul class=" text-sm font-medium space-y-1 underline">
                     <li class="">
                        <a href="#" class=" hover:underline">
                           Patients and Caregivers
                        </a>
                     </li>
                     <li class="">
                        <a href="#" class=" hover:underline">
                           Healthcare Professionals
                        </a>
                     </li>
                     <li class="">
                        <a href="#" class="hover:underline">
                           Researchers
                        </a>
                     </li>
                     <li class="">
                        <a href="#" class="hover:underline">
                           Job Seekers
                        </a>
                     </li>
                     <li class="">
                        <a href="#" class="hover:underline">
                           Investors
                        </a>
                     </li>
                     <li class="">
                        <a href="#" class="hover:underline">
                           Journalists
                        </a>
                     </li>
                     <li class="">
                        <a href="#" class="hover:underline">
                           Partners
                        </a>
                     </li>
                     <li class="">
                        <a href="#" class="hover:underline">
                           Suppliers
                        </a>
                     </li>
                  </ul>
               </div>
               <div>
                  <h2 class="mb-6 text-sm font-bold text-gray-900 uppercase e">
                     Topics
                  </h2>
                  <ul class=" text-sm font-medium space-y-1 underline">
                     <li class="">
                        <a href="#" class=" hover:underline">
                           Healthcare Professionals
                        </a>
                     </li>
                     <li class="">
                        <a href="#" class="hover:underline">
                           Clinical Trials
                        </a>
                     </li>
                     <li class="">
                        <a href="#" class="hover:underline">
                           ESG
                        </a>
                     </li>
                     <li class="">
                        <a href="#" class="hover:underline">
                           SpeakUp
                        </a>
                     </li>
                  </ul>
               </div>
               <div>
                  <h2 class="mb-6 text-sm font-bold text-gray-900 uppercase e">
                     Explore
                  </h2>
                  <ul class=" text-sm font-medium space-y-1 underline">
                     <li class="">
                        <a href="#" class=" hover:underline">
                           Stankevicius Pipeline
                        </a>
                     </li>
                     <li class="">
                        <a href="#" class="hover:underline">
                           Products
                        </a>
                     </li>
                     <li class="">
                        <a href="#" class="hover:underline">
                           Therapeutic areas
                        </a>
                     </li>
                     <li class="">
                        <a href="#" class="hover:underline">
                           Diseases
                        </a>
                     </li>
                     <li class="">
                        <a href="#" class="hover:underline">
                           Stories
                        </a>
                     </li>
                     <li class="">
                        <a href="#" class="hover:underline">
                           Locations
                        </a>
                     </li>
                  </ul>
               </div>
               <div>
                  <h2 class="mb-6 text-sm font-bold text-gray-900 uppercase e">
                     Stankevicius companies
                  </h2>
                  <ul class=" text-sm font-medium space-y-1 underline">
                     <li class="">
                        <a href="#" class=" hover:underline">
                           Sandoz
                        </a>
                     </li>
                     <li class="">
                        <a href="#" class="hover:underline">
                           Advanced Accelerator Applications
                        </a>
                     </li>
                     <li class="">
                        <a href="#" class="hover:underline">
                           Gyroscope Therapeutics
                        </a>
                     </li>
                  </ul>
               </div>
            </div>

            <div className="flex flex-col md:flex-row    items-center justify-between">
               <div className="flex-items-center space-x-4">
                  <i class="fa-brands fa-twitter fa-xl"></i>
                  <i class="fa-brands fa-linkedin-in fa-xl"></i>
                  <i class="fa-brands fa-youtube fa-xl"></i>
                  <i class="fa-brands fa-facebook-f fa-xl"></i>
                  <i class="fa-brands fa-instagram fa-xl"></i>
               </div>

               <div className="bg-[#0460a9] h-[60px] order-first md:order-last mb-7 md:md-0 flex items-center px-3 w-full md:w-96 lg:w-1/2">
                  <input
                     type="text"
                     placeholder="Search"
                     className="w-[90%] bg-transparent text-white placeholder:text-white font-bold pl-2"
                  />
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth={1.5}
                     stroke="currentColor"
                     className="w-6 h-6 text-white"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                     />
                  </svg>
               </div>
            </div>
            <div class=" py-1  flex items-center justify-center space-x-3 md:space-x-0 md:justify-between text-sn">
               <p className="font-bold text-sm text-black">@2023NovartisAG</p>
               <div className="flex items-center space-x-1 font-bold text-sm text-black">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth={1.5}
                     stroke="currentColor"
                     className="w-4 h-4"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                     />
                  </svg>

                  <p className="text-sm">Stankevicius Site Directory</p>
               </div>
            </div>
            <div class=" py-4 space-y-3 md:space-y-0 text-center md:text-left  md:flex md:items-center md:justify-between">
               <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
                  <span className="">Terms of Use</span>
                  <span className="">|</span>
                  <span className="">Privacy</span>
                  <span className="">|</span>
                  <span className="">Contacts</span>
                  <span className="">|</span>
                  <span className="">Cookies Settings</span>
                  <span className="">|</span>
                  <span className="">Site Map</span>
                  <span className="">|</span>
                  <span className="">Web Accessibility</span>
                  <span className="">|</span>
                  <span className="">Open Source</span>
               </div>
               <p className="text-sm">
                  This site is intended for a global audience
               </p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
