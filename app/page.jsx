"use client";
import Loader from "@/components/Loader/Loader";
import { useEffect, useState } from "react";

function MyApp() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2150);
  }, []);

  return (
    <>
      {!isLoading ? (
        <div className="bg-[#252525] min-h-screen">
          <h1 className="text-white">My Portfolio</h1>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default MyApp;
