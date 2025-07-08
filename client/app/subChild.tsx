"use client";
import React from "react";
import Header from "./component/header";
import { ToastContainer } from "react-toastify";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function subLayout({ data }: { data: React.ReactNode }) {
  return (
    <>
      <Header />
      {data}
      <ToastContainer
        toastClassName={() =>
          `p-0 m-0 rounded-lg text-gray-800 max-w-[400px] ${poppins.className}`
        }
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        icon={false}
        closeButton={false}
        theme="light"
      />
    </>
  );
}
