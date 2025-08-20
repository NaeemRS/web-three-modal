import React from "react";
import BorrowForm from "@/components/borrowEth/borrowForm";

import {
  liquidityCardKey1,
  liquidityCardKey2,
  liquidityCardValue1,
  liquidityCardValue2,
} from "@/helpers/componentData";
import StabilityClaim from "../../components/stability/stabilityClaim";
import LiquidityCard from "../../components/liquidity/liquidityCard";
export default function Liquidity() {
  return (
    <div className="px-0 container-fluid">
      <div className="flex items-center py-4 mt-3 lg:py-8 md:py-5">
        <h1 className="lg:text-[32px] md:text-[26px] text-lg sm:text-[22px] flex items-center font-bold mt-2 sm:mt-3 md:mt-3 lg:mt-0">
          Provide Liquidity
        </h1>
      </div>
      <div className="flex flex-wrap w-full gap-3 md:flex-nowrap lg:gap-6">
        <div className="grid w-full gap-x-3 gap-[14px] lg:gap-6 lg:w-5/12 md:w-1/2 grid-col-1">
        <div className="LiquidityCard1 bg-white dark:bg-[#191D43] md:rounded-[24px] rounded-[12px] 2xl:py-8 lg:py-6 md:py-4 2xl:px-8 xl:px-8 lg:px-6 md:px-6 px-4 py-5 ">
         <LiquidityCard
            liquidtyCardKey={liquidityCardKey1}
            liquidtyCardValue={liquidityCardValue1}
            title={"Details"}
          />
         </div>
         <div className=" bg-white dark:bg-[#191D43] md:rounded-[24px] rounded-[12px] 2xl:py-8 lg:py-6 md:py-4 2xl:px-8 xl:px-8 lg:px-6 md:px-6 px-4 py-5 ">
          <LiquidityCard
            liquidtyCardKey={liquidityCardKey2}
            liquidtyCardValue={liquidityCardValue2}
            title={"ESTIMATED RETURNS"}
          />
          </div>
        </div>
        <div className="w-full lg:w-7/12 md:w-1/2">
          <div className="grid w-full gap-[14px] lg:gap-6 grid-col-1">
            <StabilityClaim />
            <BorrowForm />
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
