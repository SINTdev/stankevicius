import React from "react";

const BackupFooter = () => {
   return (
      <div className="w-full px-4 py-6 md:p-10 bg-[#f1f1f1] mt-20">
         <div className="max-w-screen-xl mx-auto p-0 md:p-4flex flex-col space-y-8">
            <h1 className="text-3xl font-extrabold">Stankevicius</h1>

            <div className="text-center space-y-4">
               <span className="font-bold lg:text-lg">@2023NovartisAG</span>

               <div className="flex flex-wrap items-center justify-center gap-2">
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
            </div>

            <div className="text-center">
               <span className="font-bold lg:text-lg">@2023NovartisAG</span>
               <p className="">This site is intended for a global audience</p>
            </div>
         </div>
      </div>
   );
};

export default BackupFooter;
