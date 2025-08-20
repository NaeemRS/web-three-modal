import React from "react";

const RatioEth = () => {
  return (
    <>
      <div className="flex bg-white dark:bg-[#191D43] md:rounded-[24px] rounded-[12px] 2xl:py-7 lg:py-6 lg:flex-nowrap md:flex-nowrap flex-wrap h-full 2xl:px-12 md:py-4 md:px-6 px-4 py-5 justify-between">
        <ul className="">
          <li className="block font-bold lg:mb-5 md:mb-3 mb-2 text-[#9BA4C2] lg:text-[14px] text-[12px]">
            Your Collateral(BNB)
          </li>
          <li className="">
            <h2 className=" text-[#1B264A] dark:text-white font-semibold lg:mb-4 md:mb-3 mb-2 xl:text-[22px] lg:text-[22px] md:text-[18px] text-sm">
              0.00
            </h2>
          </li>
          <li className="text-[#9BA4C2] lg:mb-0 md:mb-0 mb-2 text-sm">
            0.00 dGBP
          </li>
        </ul>
        <div className="border-8 lg:w-[105px] 2xl:mt-2 lg:h-[105px] md:w-[90px] md:h-[90px] w-[105px] h-[105px] dark:border-[#0E0F2E] dark:border-[text-[#9BA4C2]] flex items-center text-center justify-center p-3 rounded-full ">
          <div>
            <p className="text-sm lg:mb-3 text-[#9BA4C2]  ">Ratio</p>
            <h2 className="text-[#9E3FFD] text-xl font-bold">%</h2>
          </div>
        </div>
        <ul className="lg:text-end">
          <li className="text-[#9BA4C2] font-bold lg:mb-4 md:mb-3 mb-2 lg:text-sm text-[12px]">
            Your Debt (dGBP)
          </li>
          <li className="">
            <h2 className="text-[#1B264A] dark:text-white font-semibold lg:mb-4 md:mb-3 mb-2 xl:text-[22px] lg:text-[22px] md:text-[18px] text-[12px]">
              0.00 DCF
            </h2>
          </li>
        </ul>
      </div>
    </>
  );
};

export default RatioEth;
