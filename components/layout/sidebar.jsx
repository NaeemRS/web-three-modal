import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useWalletProvider } from "@/hooks/WalletProvider";
export default function Sidebar() {
  const router = useRouter();
  const { disconnect, connected } = useWalletProvider();
  const [toggleMenu, showToggleMenu] = useState(false);

  return (
    <>
      <aside className="relative lg:fixed 2xl:w-[17%] xl:w-[20%] lg:w-3/12 px-4 2xl:py-8 lg:py-6 lg:bottom-0 lg:top-0 bg-[#fff] dark:bg-[#191D43] rounded-tr-[24px] rounded-br-[24px] z-50">
        <ul className="xl:h-screen lg:h-screen nav-list lg:shadow-0 lg:shadow-none lg:dark:shadow-none shadow-whiteD dark:shadow-darkF lg:flex-col lg:relative  fixed bottom-0 left-0  right-0 lg:p-0 py-2 lg:bg-transparent bg-[#fff] dark:bg-[#1a1d43] z-50  overflow-hidden flex lg:justify-start justify-around lg:items-start items-center w-full">
          <li className="flex items-center justify-between hidden text-3xl font-bold lg:ml-5 lg:block text-uppercase">
            <Link href="/" passHref>
              <div className="flex text-3xl font-semibold text-center text-black cursor-pointer dark:text-white">
                <img src="/images/sidebar-icon/top-logo.svg" />
                <span className="lg:ml-4 font-bold text-[#9E3FFD]">Defi</span>
                Pound
              </div>
            </Link>
            <button
              type="button"
              className="block lg:hidden"
              onClick={() => showToggleMenu(!toggleMenu)}
            >
              <svg
                aria-hidden="true"
                width="30px"
                height="30px"
                focusable="false"
                data-prefix="fas"
                data-icon="xmark"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="svg-inline--fa fa-xmark fa-xl"
              >
                <path
                  fill="#000"
                  d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
                ></path>
              </svg>
            </button>
          </li>
          <li className=" lg:mt-16 lg:w-full lg:mb-1">
            <Link href="/" passHref>
              <div
                className={`cursor-pointer lg:h-auto w-[46px] h-[46px]  hover:bg-[#F8F0FF] hover:dark:bg-[#3A2671] sidebar-link lg:w-full lg:hover:rounded-[20px] lg:rounded-[20px] rounded-[8px] lg:text-[18px]  hover:text-[#9E3FFD]  lg:px-5 px-3 lg:py-4 md:py-3 py-3  flex items-center text-[#9BA4C2] inter-medium  ${
                  router.asPath === "/" &&
                  "sidebar-active-light dark:bg-[#3A2671] font-bold"
                }`}
              >
                <img
                  className="lg:mr-3 icon-gray "
                  src="/images/sidebar-icon/dashboard-icon-b.svg"
                />
                <img
                  className="lg:mr-3 active-icon-blue"
                  src="/images/sidebar-icon/dashboard-icon-p.svg"
                />
                <span className="hidden lg:block"> Dashboard</span>
              </div>
            </Link>
          </li>
          <li className="lg:w-full lg:mb-1">
            <Link href="/borrow" passHref>
              <div
                className={`cursor-pointer lg:h-auto lg:w-full w-[46px] h-[46px] hover:bg-[#F8F0FF] hover:dark:bg-[#3A2671] sidebar-link wlg:-full lg:hover:rounded-[20px] lg:rounded-[20px] rounded-[8px] lg:text-[18px]  hover:text-[#9E3FFD]  lg:px-5 px-3 lg:py-4 md:py-3 py-3  flex items-center text-[#9BA4C2] inter-medium  ${
                  (router.asPath === "/borrow" ||
                    router.asPath === "/borrow/manageEth") &&
                  "sidebar-active-light dark:bg-[#3A2671] font-bold "
                }`}
                onClick={() => showToggleMenu(!toggleMenu)}
              >
                <img
                  className="lg:mr-3 icon-gray"
                  src="/images/sidebar-icon/borrow-icon-b.svg"
                />
                <img
                  className="lg:mr-3 active-icon-blue"
                  src="/images/sidebar-icon/borrow-icon-p.svg"
                />
                <span className="hidden lg:block">Borrow</span>
              </div>
            </Link>
          </li>

          <li className=" lg:w-full lg:mb-1">
            <Link href="/stability" passHref>
              <div
                className={`cursor-pointer lg:h-auto lg:w-full w-[46px] h-[46px] hover:bg-[#F8F0FF] hover:dark:bg-[#3A2671] sidebar-link wlg:-full  lg:hover:rounded-[20px] lg:rounded-[20px] rounded-[8px] lg:text-[18px]  hover:text-[#9E3FFD]  lg:px-5 px-3 lg:py-4 md:py-3 py-3  flex items-center text-[#9BA4C2] inter-medium  ${
                  (router.asPath === "/stability" ||
                    router.asPath === "/stability/stabilityEth") &&
                  "sidebar-active-light dark:bg-[#3A2671] font-bold "
                }`}
                onClick={() => showToggleMenu(!toggleMenu)}
              >
                <img
                  className="lg:mr-3 icon-gray"
                  src="/images/sidebar-icon/stability-pool-icon-b.svg"
                />
                <img
                  className="lg:mr-3 active-icon-blue"
                  src="/images/sidebar-icon/stability-pool-icon-p.svg"
                />
                <span className="hidden lg:block">Stability Pool</span>
              </div>
            </Link>
          </li>
          <li className=" lg:w-full lg:mb-1">
            <Link href="/stake" passHref>
              <div
                className={`cursor-pointer lg:h-auto lg:w-full w-[46px] h-[46px] hover:bg-[#F8F0FF] hover:dark:bg-[#3A2671] sidebar-link wlg:-full lg:hover:rounded-[20px] lg:rounded-[20px] rounded-[8px] lg:text-[18px]  hover:text-[#9E3FFD]  lg:px-5 px-3 lg:py-4 md:py-3 py-3  flex items-center text-[#9BA4C2] inter-medium  ${
                  router.asPath === "/stake" &&
                  "sidebar-active-light dark:bg-[#3A2671] font-bold "
                }`}
                onClick={() => showToggleMenu(!toggleMenu)}
              >
                <img
                  className="lg:mr-3 icon-gray"
                  src="/images/sidebar-icon/stake-icon-b.svg"
                />
                <img
                  className="lg:mr-3 active-icon-blue"
                  src="/images/sidebar-icon/stake-icon-p.svg"
                />
                <span className="hidden lg:block">Stake</span>
              </div>
            </Link>
          </li>
          <li className=" lg:w-full lg:mb-1">
            <Link href="/liquidity" passHref>
              <div
                className={`cursor-pointer lg:h-auto lg:w-full w-[46px] h-[46px] hover:bg-[#F8F0FF] hover:dark:bg-[#3A2671] sidebar-link wlg:-full lg:hover:rounded-[20px] lg:rounded-[20px] rounded-[8px] lg:text-[18px]  hover:text-[#9E3FFD]  lg:px-5 px-3 lg:py-4 md:py-3 py-3  flex items-center text-[#9BA4C2] inter-medium  ${
                  router.asPath === "/liquidity" &&
                  "sidebar-active-light dark:bg-[#3A2671] font-bold "
                }`}
                onClick={() => showToggleMenu(!toggleMenu)}
              >
                <img
                  className="lg:mr-3 icon-gray"
                  src="/images/sidebar-icon/provide-liquidity-icon-b.svg"
                />
                <img
                  className="lg:mr-3 active-icon-blue"
                  src="/images/sidebar-icon/provide-liquidity-icon-p.svg"
                />
                <span className="hidden lg:block"> Provide Liquidity</span>
              </div>
            </Link>
          </li>
          <li className=" lg:w-full lg:mb-1">
            <Link href="/redemption" passHref>
              <div
                className={`cursor-pointer lg:h-auto lg:w-full w-[46px] h-[46px] hover:bg-[#F8F0FF] hover:dark:bg-[#3A2671] sidebar-link wlg:-full lg:hover:rounded-[20px] lg:rounded-[20px] rounded-[8px] lg:text-[18px]  hover:text-[#9E3FFD]  lg:px-5 px-3 lg:py-4 md:py-3 py-3  flex items-center text-[#9BA4C2] inter-medium  ${
                  router.asPath === "/redemption" &&
                  "sidebar-active-light dark:bg-[#3A2671] font-bold "
                }`}
                onClick={() => showToggleMenu(!toggleMenu)}
              >
                <img
                  className="lg:mr-3 icon-gray"
                  src="/images/sidebar-icon/redemption-icon-b.svg"
                />
                <img
                  className="lg:mr-3 active-icon-blue"
                  src="/images/sidebar-icon/redemption-icon-p.svg"
                />
                <span className="hidden lg:block">Redemption</span>
              </div>
            </Link>
          </li>
          {connected && (
            <li className="left-0 right-0 hidden md:absolute md:block bottom-12">
              <button
                className={`cursor-pointer  sidebar-link w-full lg:hover:rounded-[20px] lg:rounded-[20px] rounded-[8px] lg:text-[18px] text-[#9E3FFD]  lg:px-5 px-3 lg:py-4 md:py-3 py-3  flex items-center inter-medium `}
                onClick={() => disconnect()}
              >
                <img
                  className="lg:mr-3 active-icon-blue"
                  src="/images/sidebar-icon/log-out-icon.svg"
                />
                <span className="hidden md:block"> Log out</span>
              </button>
            </li>
          )}
        </ul>
      </aside>
    </>
  );
}
