import React from "react";

const StabilityClaim = () => {
  return (
    <>
      <div className="flex bg-white dark:bg-[#191D43] md:rounded-[24px] rounded-[12px] lg:py-8 flex-wrap  lg:px-12 md:py-4 md:px-6 px-4 py-5 justify-between">
        <ul className="">
          <li className="block font-bold lg:mb-5 md:mb-3 mb-2 text-[#9BA4C2] lg:text-[14px] text-[12px]">
            Your dGBP Staked
          </li>
          <li className="">
            <h2 className="text-[#1B264A] dark:text-white font-semibold lg:mb-4 md:mb-3 mb-2 lg:text-[22px] md:text-[20px] text-sm">
              0.00 dGBP
            </h2>
          </li>
          <li className="text-[#9BA4C2] lg:mt-6 md:mt-3 mt-2 text-sm">dGBP</li>
        </ul>
        <ul className="">
          <li className="block font-bold lg:mb-5 md:mb-3 mb-2 text-[#9BA4C2] lg:text-[14px] text-[12px]">
            Total Rewards Generated
          </li>
          <li className="">
            <h2 className="text-[#1B264A] dark:text-white font-semibold lg:mb-4 md:mb-3 mb-2 lg:text-[22px] md:text-[20px] text-sm">
              0.00 dGBP
            </h2>
          </li>
          <li className="">
            <button className="text-[#9E3FFD] font-bold border-2 border-[#9E3FFD] rounded-[12px] py-1 lg:w-[110px] md:w-[80px] w-[70px] lg:text-[18px] md:text-[15px] text-[12px]">
              Claim
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default StabilityClaim;
