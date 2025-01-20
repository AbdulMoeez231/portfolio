import React from "react";

const Expertise = () => {
  return (
    <div className="py-5 sm:pb-10 md:pb-14" id="expertise">
      <h1 className="text-white font-bold text-base sm:text-xl md:text-2xl lg:text-3xl text-center">
        MY EXPERTISE
      </h1>
      <div className="mt-10 sm:mt-20 text-lg xs:text-2xl md:text-3xl lg:text-5xl text-white font-black space-y-4 md:space-y-10 tracking-wide">
        {[
          "FRONT END DEVELOPMENT",
          "BACK END DEVELOPMENT",
          "MOBILE APP DEVELOPMENT",
          "SHOPIFY CLI",
          "UI DESIGN",
          "WEB ANIMATIONS",
        ].map((text, index) => (
          <div key={index} className="border-b border-neutral-500 pb-3 md:pb-5">
            <h1 className="container expertise-text-gradient">{text}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expertise;
