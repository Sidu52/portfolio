"use client";
import React, { useEffect, useState } from "react";

const useScreenSize = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    // Initialize width and height
    if (typeof window !== "undefined") {
      handleResize();
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Clean up event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width, height]);

  // Function to update width and height
  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  return { width, height };
};

export default useScreenSize;
