import { useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/MenuSvg";
import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Header = () => {
  const pathName = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) {
      return;
    }
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 lg:backdrop-blur-sm border-b border-n-1/40 ${
        openNavigation ? "bg-radial-gradient" : "backdrop-blur-sm"
      }`}
    >
      <div className="container flex items-center px-5 lg:px-[30px] xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <div className="flex text-[32px] font-code font-semibold">
            <img src={logo} width={40} alt="BookAI"/>
            <p className="font-bold text-[28px] lg:text-[36px] ml-2">BookAI</p>
          </div>
        </a>
        <nav
          className={`${
            openNavigation ? "flex bg-radial-gradient" : "hidden"
          } fixed top-[5rem] right-0 bottom-0 left-0 lg:static lg:flex lg:mx-auto lg:bg-transparent `}
        >
          <div className="relative z-[2] flex flex-col lg:flex-row items-center justify-center m-auto">
            {navigation.map((item) => (
              <a
                href={item.url}
                key={item.id}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-n-3 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathName.hash
                    ? "z-[2] lg:text-n-3"
                    : "lg:text-n-1"
                } lg:leading-5 lg:hover:text-n-3 xl:px-10`}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>

        <a
          href="#signup"
          className="button hidden mr-8 text-n-1 transition-colors hover:text-n-3 lg:block"
        >
          Sign up
        </a>
        <Button className="hidden lg:flex" href="#login">
          Login
        </Button>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
