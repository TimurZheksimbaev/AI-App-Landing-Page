import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { brainwave } from "../assets";
import { navigation } from "../constants";
import { Button } from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import GlobeSvg from "../assets/svg/GlobeSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(
    i18n.language === "ru" ? "RU" : "EN"
  );

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
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  const toggleLanguage = () => {
    const newLang = language === "EN" ? "RU" : "EN";
    setLanguage(newLang);
    i18n.changeLanguage(newLang === "EN" ? "en" : "ru");
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={brainwave} width={190} height={40} alt="Brainwave" />
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {t(`header.${item.title.toLowerCase().replace(/\s+/g, "")}`)}
              </a>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        <button
          onClick={toggleLanguage}
          className="button hidden mr-4 text-n-1/50 transition-colors hover:text-n-1 lg:flex items-center font-code text-xs font-bold uppercase group relative overflow-hidden"
        >
          <GlobeSvg />
          <span className="transition-transform duration-300">{language}</span>
          <span className="absolute bottom-0 left-0 w-full h-px bg-color-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </button>

        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          {t("header.newAccount")}
        </a>

        <div className="hidden lg:block">
          <Button className="flex" href="#login">
            {t("header.signIn")}
          </Button>
        </div>

        <div className="flex items-center ml-auto lg:hidden">
          <button
            onClick={toggleLanguage}
            className="button mr-4 text-n-1/50 transition-colors hover:text-n-1 font-code text-xs font-bold uppercase flex items-center group relative overflow-hidden"
          >
            <GlobeSvg />
            <span className="transition-transform duration-300">
              {language}
            </span>
            <span className="absolute bottom-0 left-0 w-full h-px bg-color-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </button>

          <Button className="" px="px-3" onClick={toggleNavigation}>
            <MenuSvg openNavigation={openNavigation} />
          </Button>
        </div>
      </div>
    </div>
  );
};
