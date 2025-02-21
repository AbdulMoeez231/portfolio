import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <section className="bg-[#000000] min-h-screen flex flex-col justify-center text-center items-center relative z-10">
      <h1 className="text-white text-6xl font-heading font-bold">404 Not Found</h1>
      <div className="mt-7">
        <Link href={"/"}>
          <button
            className={"text-white gradient py-3 px-8 rounded-lg font-semibold"}
          >
            Back to Home
          </button>
        </Link>
      </div>
    </section>
  );
}
