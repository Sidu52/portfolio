"use client";
import { useEffect, useState } from "react";
import { Mixpanel } from "@/app/utils/mixpanel";
import NotificationPopUp from "./notification";
import { toast } from "react-toastify";

//Notification
export interface NotificationProps {
  navigationLink: string;
  title: string;
  description?: string;
  type: string;
}

//Handle Notification Popup
export const handleNotification = ({
  navigationLink,
  title,
  description,
  type,
}: NotificationProps) => {
  toast(
    <NotificationPopUp
      title={title}
      description={description}
      type={type}
      navigationLink={navigationLink}
      closeToast={() => toast.dismiss()}
    />
  );
};

// Screen Scroll Block
export const blockWindowScrolling = (value: boolean) => {
  if (value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
};

export const getUserLocation = (): Promise<{
  latitude: number | null;
  longitude: number | null;
  ipResponse: any;
}> => {
  return new Promise(async (resolve, reject) => {
    try {
      // Fetch the IP address
      const ipResponse = await fetch("https://api.ipify.org/?format=json");
      const ipData = await ipResponse.json();
      // Check if geolocation is available
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            // Resolve the promise with both location and IP response
            resolve({ latitude, longitude, ipResponse: ipData });
          },
          (error) => {
            resolve({ latitude: null, longitude: null, ipResponse: ipData });
            // Reject the promise with error and IP response
            reject({ error: error.message, ipResponse: ipData });
          }
        );
      } else {
        // Reject the promise with geolocation error and IP response
        reject({ error: "Geolocation is not supported", ipResponse: ipData });
      }
    } catch (error) {
      // reject({ error: "Error fetching IP address", ipResponse: null });
    }
  });
};

export const mixpanelIdentify = (id: string, name: string, props: any) => {
  getUserLocation().then(({ latitude, longitude, ipResponse }) => {
    Mixpanel.identify(id, name, {
      ...props,
      Latitude: latitude,
      Longitude: longitude,
      "IP address": ipResponse?.ip,
    });
  });
};
export const mixpanelTrackEvent = (visit_type: string, props: any) => {
  getUserLocation()
    .then(({ latitude, longitude, ipResponse }) => {
      // Now that we have the location, trigger Mixpanel tracking
      Mixpanel.track(visit_type, {
        ...props,
        Latitude: latitude,
        Longitude: longitude,
        "IP address": ipResponse?.ip,
      });
    })
    .catch(({ error, ipResponse }) => {
      // Trigger Mixpanel tracking even if geolocation fails
      Mixpanel.track(visit_type, {
        ...props,
        LocationError: error,
        "IP address": ipResponse?.ip,
      });
    });
};

export const trackClickButton = (value: string) => {
  mixpanelTrackEvent(value, {
    Page_Type: "Button Click",
    "Web Page": "Portfolio Web",
    ENV: process.env.NEXT_PUBLIC_ENV_TYPE,
  });
};

// GET FORM INFORMATION
export const formFieldInfomation = (type:string ,value: string) => {
  mixpanelTrackEvent(`${type} = ${value}`, {
    Page_Type: "Form Infomation",
    "Web Page": "Portfolio Web",
    ENV: process.env.NEXT_PUBLIC_ENV_TYPE,
  });
};
