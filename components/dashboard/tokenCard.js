import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import { tokenCardData } from "@/helpers/componentData";
import useChainRate from "@/hooks/custom/useChainRate";
const TokenCard = () => {
  const currencyRate = useChainRate();
  return (
    <>
      <div className="">
        <div className=" md:py-10 py-3.5">
          <Marquee>
            {tokenCardData.map((tokenCard, key) => (
              // <Marquee >
              <div
                key={key}
                className="bg-[#fff] dark:bg-[#191D43] px-3 py-3 md:rounded-[24px] rounded-[12px] flex justify-center 2xl:w-[150px] xl:w-[132px] lg:w-[132px] w-[132px] mr-4 "
              >
                <div className="relative min-w-[32px] md:mr-2">
                  <Image
                    src={tokenCard.tokenCardLogo}
                    className=""
                    layout="fill"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="whitespace-nowrap">
                  <h4 className="lg:text-[13px] text-[12px] text-[#16163F] dark:text-[#fff] uppercase">
                    {tokenCard.tokenCardTitle}
                  </h4>
                  <span className="lg:text-[13px] text-[11px]  text-[#9BA4C2] ">
                    {currencyRate[tokenCard.tokenCardTitle] ||
                      tokenCard.tokenCardPrice}{" "}
                    dGBP
                  </span>
                </div>
              </div>
              // </Marquee>
            ))}
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default TokenCard;
