import React, { useEffect, useState } from "react";

const Expertise = () => {
  const [gradientPosition, setGradientPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Get the current scroll position
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      // Calculate new gradient position
      // Adjust the divisor to control how fast the gradient moves
      const newPosition = (scrollTop * 0.5) % 100; // Move at half the scroll speed
      setGradientPosition(newPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="py-5 sm:py-10 md:py-14">
      <h1 className="text-white font-bold text-base sm:text-xl md:text-2xl lg:text-3xl text-center">
        MY EXPERTISE
      </h1>
      <div className="mt-10 sm:mt-20 text-lg xs:text-2xl md:text-3xl lg:text-5xl text-white font-black space-y-10 tracking-wide">
        {[
          "FRONT END DEVELOPMENT",
          "BACK END DEVELOPMENT",
          "MOBILE APP DEVELOPMENT",
          "SHOPIFY CLI",
          "UI DESIGN",
          "WEB ANIMATIONS",
        ].map((text, index) => (
          <div key={index} className="border-b border-neutral-500 pb-5">
            <h1
              className="container text-gradient"
              style={{
                backgroundPosition: `${gradientPosition}% 0`, // Update gradient position based on scroll
              }}
            >
              {text}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expertise;
