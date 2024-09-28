"use client";
import Loader from "@/components/Loader/Loader";
import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import HeroSection from "./HeroSection";

function Home() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2500);
    }, []);

    return (
        <>
            {!isLoading ? (
                <div className="bg-[#191A17] min-h-screen">
                    <Navbar />
                    <HeroSection />
                </div>
            ) : (
                <Loader />
            )}
        </>
    );
}

export default Home;
