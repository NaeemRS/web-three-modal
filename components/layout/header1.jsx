import Link from "next/link";
import { useTheme } from "next-themes";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { headerData } from "@/helpers/componentData";
import { useWalletProvider } from "@/hooks/WalletProvider";
import { stringSlice } from "@/helpers/genrelFunction";
import React, { useEffect, useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import useChainRate from "@/hooks/custom/useChainRate";

const Header1 = () => {
  const currencyRate = useChainRate();
  const { theme, setTheme } = useTheme();
  const { connect, disconnect, address, connected } = useWalletProvider();
  const [themeUrl, setThemeUrl] = useState(
    "/images/sidebar-icon/light-icon.svg"
  );

  const [headerCurrency, setHeaderCurrency] = useState(headerData);
  const handleWalletConnect = async () => {
    await connect();

    setMenu(false);
  };
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleClose = () => {
    setToggleMenu("");
  };
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    const cloneData = [...headerCurrency];
    if (currencyRate["BNB"]) {
      cloneData[2].value = `${currencyRate["BNB"]}$`;
      setHeaderCurrency(cloneData);
    }

    returnUrl();
    return () => {};
  }, [theme, currencyRate]);

  const returnUrl = useCallback(() => {
    switch (theme) {
      case "light":
        setThemeUrl("/images/sidebar-icon/light-icon.svg");
        break;
      case "dark":
        setThemeUrl("/images/sidebar-icon/dark-icon.svg");
        return;
      default:
        setThemeUrl("/images/sidebar-icon/light-icon.svg");
    }
  }, [theme]);

  const handleTheme = () => {
    if (theme == "light") setTheme("dark");
    else setTheme("light");
  };

  const addToken = async (item) => {
    setMenu(false);
    const { tokenAddress, tokenSymbol, tokenDecimals, tokenImage } = item;
    try {
      const { ethereum } = window;
      // wasAdded is a boolean. Like any RPC method, an error may be thrown.
      const wasAdded = await ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20", // Initially only supports ERC20, but eventually more!
          options: {
            address: tokenAddress, // The address that the token is at.
            symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
            decimals: tokenDecimals, // The number of decimals in the token
            image: tokenImage, // A string url of the token logo
          },
        },
      });

      if (wasAdded) {
        console.log("Thanks for your interest!");
      } else {
        console.log("Your loss!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <section className="fixed top-0 left-0 right-0 z-50 px-4 py-2 lg:shadow-none lg:dark:shadow-none shadow-whiteD  dark:shadow-hearderS  bg-white lg:bg-transparent lg:dark:bg-transparent dark:bg-[#191D43] lg:p-0 lg:relative">
        <nav className=" w-full z-[999] flex items-center  justify-between navbar navbar-expand-lg navbar-light lg:h-[80px]">
          <div className="flex items-center justify-between w-full px-0">
            <Link href="/" className="flex lg:hidden" passHref>
              <button className="flex font-bold md:text-[25px] sm:text-[22px] text-[16px] items-center lg:hidden">
                <img className="" src="/images/sidebar-icon/top-logo.svg" />
                <span className="ml-1 md:text-[25px] sm:text-[22px] text-[16px] font-bold text-[#9E3FFD]">
                  Defi
                </span>
                Pound
              </button>
            </Link>
            <div className="relative hidden lg:block ">
              <button className="hidden">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="absolute text-[#9BA4C2] 2xl:left-6 left-3 top-4 w-[16px]"
                />
              </button>
              <input
                type="text "
                className="hidden 2xl:h-[48px] h-[48px] 2xl:px-5 px-3 w-full 2xl:w-[356px]  lg:w-ful md 2xl:pl-[48px] pl-9 focus:outline-none focus:border-none  rounded-[24px]"
                placeholder="Search"
              />
            </div>
            <div className="inline-block lg:hidden md:inline-block">
              <div className="flex items-center">
                <button
                  className="flex lg:w-[50px] w-[32px] lg:h-[48px] lg:p-0 p-1.5 h-[32px] justify-center items-center bg-[#ecf0f0] dark:bg-[#0E0F2E] rounded-full "
                  onClick={handleTheme}
                >
                  <Image width={30} height={30} alt="image" src={themeUrl} />
                </button>

                <button
                  className=" border-0 py-2 px-2.5 pr-0 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline "
                  type="button"
                  onClick={() => setMenu(true)}
                >
                  <FontAwesomeIcon
                    icon={faBars}
                    className="w-8 text-[#D9D9D9] h-8"
                  />
                </button>
              </div>
            </div>
            <div
              className={`${
                menu == true ? "w-[214px] " : "w-0"
              } bg-transparent lg:bg-transparent fixed top-0 right-0 bottom-0 lg:relative xl:w-auto z-50 lg:w-auto xl:h-auto lg:h-auto flex xl:justify-end lg:justify-end items-start`}
            >
              <ul
                className="navbar-nav relative text-center lg:bg-transparent lg:w-full w-[214px] lg:h-auto h-[100vh] bg-[#F9F9F9] lg:dark:bg-transparent dark:bg-[#0E0F2E]   xl:flex lg:flex  md:flex-col flex-col  items-center pl-0 list-style-none xl:h-auto
               "
              >
                <li className="flex justify-end w-full px-1 pt-1 pb-3 text-right lg:pt-0 lg:pb-0 ">
                  <button
                    className={` ${
                      menu == true
                        ? " custom-navbar-toggler inline-block"
                        : "hidden"
                    } 
                   lg:hidden
                   border-0
                   py-2  px-2.5
                   bg-transparent
                   focus:outline-none
                  focus:ring-0 focus:shadow-none
                  focus:no-underline `}
                    type="button"
                    onClick={() => setMenu(false)}
                  >
                    <FontAwesomeIcon
                      icon={faXmark}
                      className="w-9 text-[#D9D9D9] h-9"
                    />
                  </button>
                </li>
                {headerCurrency.map((item, index) => (
                  <li key={index} className="nav-item lg:pr-[11px]">
                    <button
                      className="h-[48px] 2xl:w-[175px] xl:w-[170px] lg:w-[142px] w-[168px] mx-auto lg:mb-0 mb-6 2xl:px-5 lg:px-3 px-5 flex items-center justify-center rounded-[24px] bg-[#fff] dark:bg-[#191D43]"
                      onClick={() => addToken(item)}
                    >
                      <img
                        src={item.logo}
                        className="   w-[32px] xl:mr-2 lg:mr-1 mr-2"
                      />
                      <span className="whitespace-nowrap  dark:text-[#9BA4C2] text-[#1B264A] 2xl:text-[16px] xl:text-[15px] lg:text-[13px] text-[16px]">
                        {item.name}
                        <b className=" dark:text-[#9BA4C2] text-[#1B264A]  2xl:text-[16px] xl:text-[15px] lg:text-[13px] text-[16px]">
                          {item.value}
                        </b>
                      </span>
                    </button>
                  </li>
                ))}
                <li className="hidden text-center lg:inline-block nav-item lg:pr-1">
                  <button
                    className="flex w-[50px] h-[48px] justify-center items-center bg-[#fff] dark:bg-[#191D43] rounded-full "
                    onClick={handleTheme}
                  >
                    <Image width={30} height={30} alt="image" src={themeUrl} />
                  </button>
                </li>
                <li className="relative text-center nav-item">
                  {!connected ? (
                    <button
                      className="h-[48px] 2xl:w-[168px] xl:w-[168px] font-medium lg:w-[142px] w-[168px] mx-auto 2xl:px-5 lg:px-3 px-5 flex justify-center items-center rounded-[20px] bg-[#F8F0FF] dark:bg-[#191D43]"
                      onClick={handleWalletConnect}
                    >
                      <img
                        src={"/images/sidebar-icon/walletIcon.svg"}
                        className=" text-[#9E3FFD]  w-[20px] h-[20px] 2xl:mr-3 lg:mr-1 mr-2"
                      />
                      <span className="whitespace-nowrap 2xl:text-[16px] font-medium xl:text-[15px] lg:text-[13px] text-[16px]">
                        Connect wallet
                      </span>
                    </button>
                  ) : (
                    <button
                      className="h-[48px] 2xl:w-[168px] font-medium xl:w-[168px] lg:w-[142px] w-[168px] mx-auto 2xl:px-5 lg:px-3 px-5 flex justify-center items-center rounded-[20px] bg-[#F8F0FF] dark:bg-[#191D43]"
                      onClick={() => {
                        setToggleMenu(!toggleMenu);
                      }}
                    >
                      <img
                        src={"/images/sidebar-icon/walletIcon.svg"}
                        className=" text-[#9E3FFD]  w-[20px] h-[20px] 2xl:mr-3 lg:mr-1 mr-2"
                      />
                      <span className="whitespace-nowrap 2xl:text-[16px] font-medium xl:text-[15px] lg:text-[13px] text-[16px]">
                        {stringSlice(address, 6, 3)}
                      </span>
                    </button>
                  )}
                  <ul
                    className={`${
                      toggleMenu == true ? "inline-block" : "hidden"
                    } absolute bg-white dark:bg-[#191D43] mx-auto 2xl:w-[168px] xl:w-[168px] lg:w-[142px] w-[168px] left-0 top-[53px] right-0 rounded-lg`}
                  >
                    {connected && (
                      <li className="">
                        <button
                          className={`cursor-pointer  sidebar-link w-full lg:hover:rounded-[20px] lg:rounded-[20px] rounded-[8px] lg:text-[18px] text-[#9E3FFD] dark:text-white  lg:px-5 px-3 lg:py-4 md:py-3 py-3  flex justify-center items-center inter-medium `}
                          onClick={() => {
                            disconnect();
                            setToggleMenu(false);
                            setMenu(false);
                          }}
                        >
                          <img
                            className="inline-block mr-3 active-icon-blue dark:hidden"
                            src="/images/sidebar-icon/log-out-icon.svg"
                          />
                          <img
                            className="hidden mr-3 active-icon-blue dark:inline-block"
                            src="/images/sidebar-icon/log-out-icon.png"
                          />
                          <span className=""> Log out</span>
                        </button>
                      </li>
                    )}

                    <li></li>
                    <li></li>
                  </ul>
                </li>

                {/* {connected && (
                  <li
                    className="absolute right-0 block lg:hidden bottom-4 left-6"
                    onClick={() => setMenu(false)}
                  >
                    <button
                      className={`cursor-pointer  sidebar-link w-full lg:hover:rounded-[20px] lg:rounded-[20px] rounded-[8px] lg:text-[18px] text-[#9E3FFD]  lg:px-5 px-3 lg:py-4 md:py-3 py-3  flex items-center inter-medium `}
                      onClick={() => disconnect()}
                    >
                      <img
                        className="mr-3 active-icon-blue"
                        src="/images/sidebar-icon/log-out-icon.svg"
                      />
                      <span className=""> Log out</span>
                    </button>
                  </li>
                )} */}
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
};
export default Header1;
