"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import MainImage from "@/public/assets/images/home/main_image.webp";
import { useEffect, useRef, useState, useCallback } from "react";
import { bottomAnimation, topAnimation, zoomIn } from "@/app/utils/animations";
import { heroSection } from "@/data/home";

const Hero = () => {
  const [isBuying, setIsBuyingOpen] = useState(false);
  const [isSelling, setIsSellingOpen] = useState(false);
  const BuyRef = useRef<HTMLDivElement>(null);
  const SellRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (BuyRef.current && !BuyRef.current.contains(event.target as Node)) {
        setIsBuyingOpen(false);
      }
      if (SellRef.current && !SellRef.current.contains(event.target as Node)) {
        setIsSellingOpen(false);
      }
    },
    [BuyRef, SellRef]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    document.body.style.overflow = isBuying || isSelling ? "hidden" : "";
  }, [isBuying, isSelling]);

  return (
    <section className="relative pt-48 overflow-hidden z-1 bg-[#010f1d] h-screen flex items-center justify-center">
      <div className="absolute -top-96 left-16 bg-[#0180e2] rounded-full rotate-[120deg] aspect-[1055/678] w-72 h-72 blur-[389px] "></div>
      <div className="absolute top-[30%] -right-28 bg-[#0180e2] rounded-full rotate-[120deg] aspect-[1055/678] w-64 h-64 blur-[389px] "></div>
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className=" space-y-16 flex items-center justify-between">
          <div className="space-y-8">
            <motion.div
              {...topAnimation}
              className="lg:col-span-5 col-span-12 space-y-5"
            >
              <h1 className="text-5xl md:text-6xl font-bold leading-snug tracking-wide text-white">
                Hi,
                <br /> I&apos;m
                <span className=" text-transparent bg-clip-text bg-gradient-to-r from-[#389be7] to-[#067ee1]">
                  {" "}
                  {heroSection.title}
                </span>
              </h1>
              <p className="text-[20px] font-bold leading-snug tracking-wide text-white">
                {heroSection.subtitle}
              </p>
              <p className="text-base font-light leading-[30px] tracking-wide text-[#ffffffc0] sm:max-w-[900px] mx-auto">
                {heroSection.description}
              </p>
            </motion.div>
            <motion.div
              {...zoomIn}
              className="flex items-center gap-5 justify-center max-[400px]:flex-col"
            ></motion.div>
          </div>

          <motion.div
            {...bottomAnimation}
            className="flex items-center justify-center"
          >
            <div>
              <div className="fixed right-0 bottom-0 z-10 w-full max-w-[680px] h-full flex items-end justify-end">
                <div className="absolute bottom-0 right-5 bg-[#0180e2] rounded-full rotate-[120deg] aspect-[1055/678] w-64 h-64 blur-[189px] "></div>
                <Image
                  className="w-full max-w-[680px] z-10"
                  src={MainImage}
                  width={1200}
                  height={1100}
                  alt="mobile logo"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
