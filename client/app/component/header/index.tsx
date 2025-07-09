"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Logo from "./logo/index";
import { useRouter } from "next/navigation";
import BlackLogo from "@/public/assets/logo.png";
import WhiteLogo from "@/public/assets/logo.png";
import { NavigationLinks } from "./navigation/HeaderLink";
import HeaderLink from "./navigation";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { topAnimation } from "@/app/utils/animations";
import useScreenSize from "@/app/hooks/useScreenSize";

const Header: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { width } = useScreenSize();
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const [navbarTranslateY, setNavbarTranslateY] = useState<string>("0px");
  const [navbarShow, setNavbarShow] = useState<boolean>(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const hideThreshold = 100;
    const showNavbarScrollPoint = 900;
    const translationFactor = 1.5;

    let newNavbarTranslateY = 0;
    let newNavbarShow = false;

    if (scrollY < hideThreshold) {
      newNavbarTranslateY = 0;
      newNavbarShow = false;
    } else if (scrollY > showNavbarScrollPoint) {
      newNavbarTranslateY = 0;
      newNavbarShow = true;
    } else {
      newNavbarTranslateY = Math.min(
        120,
        Math.floor((scrollY - hideThreshold) * translationFactor)
      );
      newNavbarShow = false;
    }
    setNavbarTranslateY(newNavbarTranslateY + "px");
    setNavbarShow(newNavbarShow);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen]);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    if (navbarOpen && width <= 1280) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [navbarOpen, width]);

  return (
    <>
      <div
        style={{
          transform: `translateY(-${navbarTranslateY})`,
        }}
        className={`mx-auto w-full fixed top-0 z-40 h-auto ${
          !navbarShow && "py-8"
        } transition-transform ease-linear duration-200`}
      >
        <motion.header
          {...topAnimation}
          className={`transition-all px-8 xl:py-3 ease-out duration-300 bg-white ${
            !navbarShow
              ? "w-[90%] 2xl:max-w-[1500px] rounded-full"
              : "shadow-lg"
          }  mx-auto`}
        >
          <div className="xl:py-0 py-2">
            {/* Web View */}
            <div className="container mx-auto flex items-center justify-between gap-8 px-4">
              <Logo image={BlackLogo} />
              <nav className="hidden xl:flex flex-grow items-center gap-5 justify-center">
                {NavigationLinks.map((item, index) => (
                  <HeaderLink
                    key={index}
                    active={pathname}
                    item={item}
                    handleNavigationClick={(value) => {
                      setNavbarOpen(false);
                      router.push(item.href);
                    }}
                  />
                ))}
              </nav>
              <div className="flex items-center gap-5">
                <button
                  type="button"
                  className="rounded-md text-gray-400 xl:hidden"
                  onClick={() => setNavbarOpen(true)}
                >
                  <span className="sr-only">Open</span>
                  <p>
                    <FaBars
                      fontSize={30}
                      className={`fill-black cursor-pointer`}
                    />
                  </p>
                </button>
              </div>
            </div>
          </div>
        </motion.header>
      </div>
      {/* Mobile View */}
      <div ref={mobileMenuRef} className="xl:hidden">
        <div
          className={`fixed inset-y-0 ${
            navbarOpen ? "translate-x-0 " : "translate-x-full"
          } w-full h-full px-6 transition-transform ease-in-out duration-700 right-0 z-50 overflow-y-auto overflow-x-hidden bg-[#020b0e] py-6 sm:max-w-sm`}
        >
          <div className="flex items-center justify-between">
            <Logo image={WhiteLogo} />
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
              onClick={() => setNavbarOpen(false)}
            >
              <span className="sr-only">Close</span>
              <p>
                <IoMdClose fontSize={24} />
              </p>
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/25">
              <nav className="flex flex-col justify-center space-y-4 py-5">
                {NavigationLinks.map((item, index) => (
                  <HeaderLink
                    key={index}
                    active={pathname}
                    item={item}
                    handleNavigationClick={(value) => {
                      setNavbarOpen(false);
                    }}
                  />
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
