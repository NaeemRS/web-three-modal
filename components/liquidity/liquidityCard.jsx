import React from "react";

export default function LiquidityCard(props) {
  const { liquidtyCardKey, liquidtyCardValue, title } = props;
  return (
    <>
      <h4 className="block w-full font-bold lg:mb-5 md:mb-3 mb-2  text-[#9BA4C2] lg:text-[18px] md:text-[16px] text-sm">
        {title}
      </h4>
      <div className="flex items-start justify-between">
        <ul className="">
          {Object.entries(liquidtyCardKey).map(([key, value]) => (
            <li
              key={key}
              className="text-[#1B264A] dark:text-white lg:mb-4 childten md:mb-3 mb-2 md:text-sm text-[12px]"
            >
              {value}
              
            </li>
          ))}
        </ul>
        <ul className="lg:text-end Provide-iquidity ">
          {Object.entries(liquidtyCardValue).map(([key, value]) => (
            <li
              key={key}
              className="text-[#1B264A] dark:text-white font-bold lg:mb-4 md:mb-3 mb-2 md:text-sm text-[12px]"
            >
              {value}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
