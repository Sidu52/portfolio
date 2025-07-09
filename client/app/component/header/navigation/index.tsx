import Link from "next/link";
import React from "react";

export type HeaderItem = {
  name: string;
  href: string;
  target: string;
};

const HeaderLink: React.FC<{
  key: number;
  active: string;
  item: HeaderItem;
  handleNavigationClick: (value: string) => void;
}> = ({ key, item, handleNavigationClick, active }) => {
  return (
    <>
      {/* Web Navigation */}
      <div
        key={key}
        className="group relative flex items-start px-1 space-y-1 text-nowrap max-xl:hidden"
      >
        <Link
          href={item.href}
          target={item.target}
          onClick={() => handleNavigationClick(item.href)}
          className={` text-[#032245] ${
            item.href === active
              ? "font-medium text-[18px]"
              : "font-normal text-[16px]"
          } leading-6 tracking-wide mb-0.5 transition-all ease-in-out duration-200`}
        >
          {item.name}
        </Link>
        {item.href === active && (
          <span className="group-hover:w-0 absolute -bottom-2 left-1/2 w-2 mx-auto h-2 rounded-full bg-gradient-to-r bg-[#032245]"></span>
        )}

        <div className="group-hover:w-[90%] absolute w-0 h-0.5 bg-[#032245] top-0 left-0 transition-all ease-in-out duration-200"></div>
        <div className="group-hover:w-[90%] absolute w-0 h-0.5 bg-[#032245] bottom-0 right-0 transition-all ease-in-out duration-200"></div>
      </div>

      {/* Mobile Navigation */}
      <div
        key={key}
        className="xl:hidden hover:bg-gray-800 px-4 py-3 rounded-xl"
        onClick={() => handleNavigationClick(item.href)}
      >
        <Link
          href={item.href}
          target={item.target}
          className={`text-[16px] font-light leading-6 tracking-wide mb-0.5 transition-all ease-in-out duration-200 text-white`}
        >
          {item.name}
        </Link>
        <span className="group-hover:w-full absolute w-0 h-0.5 bg-gradient-to-r from-[#00FF8F] to-[#00A1FF] bottom-0 transition-all ease-in-out duration-200"></span>
      </div>
    </>
  );
};

export default HeaderLink;
