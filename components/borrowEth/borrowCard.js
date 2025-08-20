import React, { useCallback } from "react";
import { useTheme } from "next-themes";
export default function BorrowCard(props) {
  const { theme } = useTheme();
  const { barrowCardKey, barrowCardValue, textColor } = props;
  const returnColor = (value) => {
    if (textColor) {
      return textColor[value];
    } else {
      return returnTextColor();
    }
  };

  const returnTextColor = useCallback(() => {
    switch (theme) {
      case "light":
        return "text-black";

      case "dark":
        return "text-[#fff]";
    }
  }, [theme]);

  return (
    <div className="flex bg-white dark:bg-[#191D43] md:rounded-[24px] rounded-[12px] h-full 2xl:py-8 lg:py-6 md:py-4 2xl:px-8 xl:px-8 lg:px-6 md:px-6 px-4 py-5 items-end justify-between">
      <ul className="">
        {Object.entries(barrowCardKey).map(([key, value]) => (
          <li
            key={key}
            className={`${
              key === "title"
                ? "block font-bold lg:mb-5 md:mb-3 mb-2  text-[#9BA4C2] lg:text-[18px] md:text-[16px] text-sm"
                : "text-[#1B264A] dark:text-[#fff] lg:mb-4 md:mb-3 mb-2 md:text-sm text-[12px]"
            }`}
          >
            {value}
          </li>
        ))}
      </ul>

      <ul className="lg:text-end">
        {Object.entries(barrowCardValue).map(([key, value]) => (
          <li
            key={key}
            className={` 
            ${returnColor(key)}  font-bold lg:mb-4 md:mb-3 mb-2 text-sm`}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
