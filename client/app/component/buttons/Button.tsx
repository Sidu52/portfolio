"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Image, { StaticImageData } from "next/image";
import { mixpanelTrackEvent } from "@/app/utils/helper";

export const Button: React.FC<{
  type: string;
  link: string;
  icon?: StaticImageData;
  title: string;
  subtitle: string;
  subtitleColor: string;
  bgColor: string;
  textColor: string;
  borderColor?: string;
}> = ({
  type,
  link,
  icon,
  title,
  subtitle,
  subtitleColor,
  bgColor,
  textColor,
  borderColor,
}) => {
  return (
    <div
      className={`
        group relative rounded-xl sm:min-w-[210px] max-w-[190px] 
        flex items-center justify-center gap-2 ${borderColor ?? ""} 
         px-4 py-2 overflow-hidden 
        transition-all ease-in-out duration-300 w-auto h-auto cursor-pointer
        ${bgColor != "#03BF97" ? `bg-[${bgColor}]` : "bg-[#03BF97]"}
        
      `}
    >
      {/* Logo that will animate on hover */}
      <div
        className="
      flex-1
        relative z-10 w-12 h-12 transition-all duration-300 
        group-hover:translate-x-[55px] group-hover:scale-110
      "
      >
        <Image
          src={icon || ""}
          alt="Logo Image"
          width={300}
          height={300}
          className="w-full h-full object-contain"
          loading="eager"
        />
      </div>

      {/* Text content that will fade out on hover */}
      <div
        className="
        relative z-10 text-white transition-all duration-75 
        group-hover:opacity-0 group-hover:translate-x-20
      "
      >
        <p
          className={`text-xs font-semibold text-nowrap text-[${subtitleColor}]`}
        >
          {subtitle}
        </p>
        <h4
          className={`xl:text-xl max-[450px]:text-xl text-base font-normal text-nowrap text-[${textColor}]`}
        >
          {title}
        </h4>
      </div>

      {/* Background highlight effect on hover */}
      <div
        className="
        absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 
        transition-opacity duration-300 rounded-xl
      "
      ></div>
    </div>
  );
};
