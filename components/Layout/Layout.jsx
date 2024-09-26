"use client";
import Loader from "@/components/Loader/Loader";
import { useState, useEffect } from "react";

export default function Layout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2700);
  }, []);
  return <>{isLoading ? <Loader /> : <main>{children}</main>}</>;
}
