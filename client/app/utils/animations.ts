import { delay } from "framer-motion";

export const fadeInOut = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.6 }, // You can adjust the duration as needed
  };

export const topAnimation = {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-100%", opacity: 0 },
    transition: { duration: 0.6 },
  };

  export const leftAnimation = {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
    transition: { duration: 0.6 },
  };
  
  export const rightAnimation = {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
    transition: { duration: 0.6 },
  };

export const zoomIn = {
  initial: { scale: 0, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0, opacity: 0 },
  transition: { duration: 0.6, delay:0.4 },
};

export const zoomOut = {
  initial: { scale: 1, opacity: 1 },
  animate: { scale: 0, opacity: 0 },
  exit: { scale: 1, opacity: 1 }, // Stays visible if not explicitly removed
  transition: { duration: 0.6,delay:0.4 },
};

export const fadeOut = {
  initial: { opacity: 1 },
  animate: { opacity: 0 },
  exit: { opacity: 1 }, // Stays visible if not explicitly removed
  transition: { duration: 0.6 },
};

export const bottomAnimation = {
  initial: { y: "100%", opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: "100%", opacity: 0 },
  transition: { duration: 0.6 },
};

export const roundIt = {
  initial: { borderRadius: "0%", opacity: 0 },
  animate: { borderRadius: "50%", opacity: 1 },
  exit: { borderRadius: "0%", opacity: 0 },
  transition: { duration: 0.6 },
};

// You could also add variants for different types of "roundness"
export const roundToCircle = {
    initial: { borderRadius: "0%" },
    animate: { borderRadius: "50%" },
    exit: { borderRadius: "0%" },
    transition: { duration: 0.6 },
};

export const rotate = {
  initial: { rotate: 0, opacity: 0 },
  animate: { rotate: 360, opacity: 1 },
  exit: { rotate: 0, opacity: 0 },
  transition: { duration: 0.8, ease: "easeInOut" },
};