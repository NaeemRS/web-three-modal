import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import {  faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header1 from "@/components/layout/header1";
import Layout from "@/components/layout/layout";
import type { AppProps } from "next/app";
import { WalletProvider } from "@/hooks/WalletProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WalletProvider>
      <ThemeProvider
        attribute="class"
        themes={["pink", "red", "blue", "light", "dark"]}
      >
        <Layout>
          <Header1 />
          <div className="hidden pt-6 ">
            <div className="relative ">
              <button className="absolute left-6 top-5">
                <FontAwesomeIcon
                  icon={faSearch}
                  className=" text-[#9BA4C2]  w-[16px]"
                />
              </button>
              <input
                type="text"
                className="py-4 px-5 w-full md:w-[356px] sm:w-[356px] pl-[48px] focus:outline-none focus:border-none  dark:bg-[#191D43] md:rounded-[24px] rounded-[12px]"
                placeholder="Search"
              />
            </div>
          </div>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </WalletProvider>
  );
}

export default MyApp;
