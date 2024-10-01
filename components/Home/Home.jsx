"use client";
import Loader from "@/components/Loader/Loader";
import { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import Capabilities from "./Capabilities";
import Expertise from "./Expertise";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2600);
  }, []);

  return (
    <>
      {!isLoading ? (
        <div className="bg-[#191A17] min-h-screen">
          <HeroSection />
          <Capabilities />
          <Expertise />
          <Capabilities />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default Home;
