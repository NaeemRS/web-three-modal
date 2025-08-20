import ReactChildren from "react";
import Head from "next/head";
import Footer from "./footer";

import Sidebar from "./sidebar";
import React from "react";
import Link from "next/link";
import { useState } from "react";

export default function Layout({ children }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleClose = () => {
    setToggleMenu("");
  };
  return (
    <>
      <div onClick={() => setToggleMenu(false)}>
        <Head>
          <title>DefiPound</title>
          <link rel="icon" href="/images/sidebar-icon/top-logo.svg" />
        </Head>
        <div className="flex flex-wrap w-full lg:flex-nowrap bg-[#F9F9F9] dark:bg-[#0E0F2E]">
          <div className="z-50 block   2xl:w-[17%] xl:w-[20%] lg:w-3/12 ">
            <Sidebar />
          </div>
          <div className=" 2xl:w-[83%] xl:w-[80%] lg:w-9/12 md:w-full w-full min-h-screen 2xl:px-[43px] xl:px-6 p-4 lg:px-[18px] lg:mb-0 md:mb-10">
            <div className="mt-10 mb-20 lg:mt-0 md:mt-10 lg:mb-5 md:mb-10 ">
              <main>{children}</main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
