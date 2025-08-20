import React from "react";

import BorrowCard from "@/components/borrowEth/borrowCard";
import { barrowCardKey1, barrowCardValue1 } from "@/helpers/componentData";
import RedemptionForm from "../../components/redemption/redemptionForm";
export default function Redemption() {
  return (
    <div className="px-0 container-fluid">
      <div className="flex items-center py-4 lg:py-8 md:py-5  mt-3 pt-7">
        <h1 className="lg:text-[32px] md:text-[26px] text-lg sm:text-[22px] flex items-center font-bold mt-2 sm:mt-3 md:mt-3 lg:mt-0">
          Redemption
        </h1>
      </div>
      <div className="flex flex-wrap w-full gap-3 md:flex-nowrap lg:gap-6 md:gap-4">
        <div className="grid w-full gap-4 lg:w-5/12 md:w-1/2 grid-col-1">
          <div className="flex flex-wrap w-full gap-3 md:flex-nowrap lg:gap-6 md:gap-4">
            <div className="w-full bg-white dark:bg-[#191D43] h-100 md:rounded-[24px] rounded-[12px]  px-4 py-5 lg:py-8 md:py-4 lg:px-8 md:px-6">
              <h4 className="block font-bold w-full lg:mb-5 md:mb-3 mb-2 text-[#9BA4C2] lg:text-[18px] md:text-[16px] text-sm">
                Rewards
              </h4>
              <div className="flex items-end justify-between">
                <ul className="">
                  <li className="text-[#1B264A] dark:text-white lg:mb-4 md:mb-3 mb-2 text-[12px] md:text-sm">
                    7D APR
                  </li>
                  <li className="text-[#1B264A] dark:text-white lg:mb-4 md:mb-3 mb-2 text-[12px] md:text-sm">
                    24H APR
                  </li>
                  <li className="text-[#1B264A] dark:text-white lg:mb-4 md:mb-3 mb-2 text-[12px] md:text-sm">
                    Stake dPNY to Earn
                  </li>
                  <li className="text-[#1B264A] dark:text-white lg:mb-4 md:mb-3 mb-2 text-[12px] md:text-sm">
                    TVL
                  </li>
                </ul>
                <ul className="lg:text-end">
                  <li className="text-[#1B264A] dark:text-white font-bold lg:mb-4 md:mb-3 mb-2 text-[12px] md:text-sm">
                    1.01 dGBP
                  </li>
                  <li className="text-[#1B264A] dark:text-white font-bold lg:mb-4 md:mb-3 mb-2 text-[12px] md:text-sm">
                    1.01 dGBP
                  </li>
                  <li className="text-[#1B264A] dark:text-white font-bold lg:mb-4 md:mb-3 mb-2 text-[12px] md:text-sm">
                    0.53%
                  </li>
                  <li className="text-[#1B264A] dark:text-white font-bold lg:mb-4 md:mb-3 mb-2 text-[12px] md:text-sm">
                    -BNB
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-7/12 md:w-1/2">
          <div className="grid w-full gap-4 grid-col-1">
            <RedemptionForm />
          </div>
        </div>
      </div>
    </div>
  );
}
