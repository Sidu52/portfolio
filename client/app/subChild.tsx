"use client";
import React, { useEffect } from "react";
import Header from "./component/header";
import { ToastContainer } from "react-toastify";
import { Poppins } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import { mixpanelIdentify } from "@/app/utils/helper";
import ShortUniqueId from "short-unique-id";
import {
  createClientSideCookie,
  getClientSideCookie,
  hasCookie,
} from "./utils/custom.cookies.client";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function subLayout({ data }: { data: React.ReactNode }) {
  const uid = new ShortUniqueId({ length: 10 });
  const UUID = getClientSideCookie("UUID");

  // User Visit Track
  useEffect(() => {
    if (!hasCookie("UUID")) {
      const unique_id = uid.rnd();
      // Create a secure cookie for the client-side
      createClientSideCookie("UUID", unique_id, {
        maxAge: 60 * 60 * 24 * 365 * 2, // 2 year
        sameSite: "strict",
      });
      mixpanelIdentify(unique_id, "Home", {
        ENV: process.env.NEXT_PUBLIC_ENV_TYPE,
        Event_Type: "Visit",
      });
    } else if (UUID) {
      mixpanelIdentify(UUID, "Home", {
        ENV: process.env.NEXT_PUBLIC_ENV_TYPE,
        Event_Type: "Visit Again",
      });
    }
  }, []);

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
