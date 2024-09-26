import React from "react";

const Loader = () => {
  return (
    <>
      <div className="relative h-screen bg-white">
        <div className="relative h-1/2 flex justify-center items-end overflow-hidden">
        <div className="w-max h-max">
            <h1 className="absolute left-1/2 -translate-x-1/2 text-4xl font-semibold my-name">
              Moeez.
            </h1>
          </div>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 loader"></div>
      </div>
    </>
  );
};

export default Loader;
