import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import RatioEth from "@/components/borrowEth/ratioEth";
import BorrowForm from "@/components/borrowEth/borrowForm";
import BorrowCard from "@/components/borrowEth/borrowCard";
import {
  barrowCardKey1,
  barrowCardKey2,
  barrowCardKey3,
} from "@/helpers/componentData";
import { useWalletProvider } from "@/hooks/WalletProvider";
import { useTheme } from "next-themes";
import useChainRate from "@/hooks/custom/useChainRate";
const ManageEthPosition = () => {
  const currencyRate = useChainRate();
  const { theme } = useTheme();
  const { balance } = useWalletProvider();
  const returnTextColor = useCallback(() => {
    switch (theme) {
      case "light":
        return "text-black";

      case "dark":
        return "text-[#fff]";
    }
  }, [theme]);
  const [error, setError] = useState({
    ratioError: false,
    borrowError: false,
    depositError: false,
  });

  const [borrow, setBorrow] = useState({
    collateral: "",
    borrowUSDd: "",
  });

  const [barrowCardValue1, setBarrowCardValue1] = useState({
    value1: "BNB",
    value2: "0.00 USD",
  });

  const [barrowCardValue2, setBarrowCardValue2] = useState({
    value1: "0.00%",
    value2: "0.00%",
  });

  const [textColor, setTextColor] = useState({
    value1: returnTextColor(),
    value2: returnTextColor(),
  });

  const [barrowCardValue3, setBarrowCardValue3] = useState({
    value1: "0.00 BNB",
    value2: "0.00 dGBP",
    value3: "200.00 dGBP",
    value4: "0.00 dGBP",
    value5: "200.00 dGBP",
  });

  useEffect(() => {
    if (currencyRate["BNB"]) {
      setBarrowCardValue1({
        ...barrowCardValue1,
        value1: `${currencyRate["BNB"]} BNB`,
      });
    }
    return () => {};
  }, [currencyRate]);

  useEffect(() => {
    const cloneBarrowCardValue1 = { ...barrowCardValue1 };
    if (borrow.borrowUSDd && borrow.collateral) {
      const liquidation = (
        ((borrow.borrowUSDd / borrow.collateral) * 110) /
        (10 * 10)
      ).toFixed(2);

      cloneBarrowCardValue1.value2 = `${liquidation} USD`;
    } else {
      cloneBarrowCardValue1.value2 = "0.00 USD";
    }
    setBarrowCardValue1(cloneBarrowCardValue1);
    return () => {};
  }, [borrow]);

  useEffect(() => {
    collateralCalculation();
  }, [borrow.collateral]);

  const collateralCalculation = useCallback(() => {
    const cloneBarrowCardValue3 = { ...barrowCardValue3 };
    const cloneBarrowCardValue2 = { ...barrowCardValue2 };
    const errorClone = { ...error };
    if (borrow.collateral) {
      cloneBarrowCardValue3.value1 = `${(borrow.collateral * 1).toFixed(
        2
      )} BNB`;
      const ratio =
        ((parseFloat(borrow.collateral) * parseFloat(barrowCardValue1.value1)) /
          cloneBarrowCardValue3.value5.replace(" USDd", "")) *
        100;
      cloneBarrowCardValue2.value2 = `${ratio.toFixed(2)} %`;
      if (borrow.collateral * 1 > balance) {
        errorClone.depositError = true;
      }
      if (parseInt(ratio) < 110) {
        errorClone.ratioError = true;
      } else {
        errorClone.ratioError = false;
      }
      handleTextColor(parseInt(ratio));
    } else {
      cloneBarrowCardValue3.value1 = `0.00 BNB`;
      cloneBarrowCardValue2.value2 = `0.00 %`;
      errorClone.depositError = false;
      handleTextColor(0);
    }
    setBarrowCardValue3(cloneBarrowCardValue3);
    setBarrowCardValue2(cloneBarrowCardValue2);
    setError(errorClone);
  }, [borrow.collateral]);

  useEffect(() => {
    borrowUSDdCalculation();
    return () => {};
  }, [borrow.borrowUSDd]);

  const borrowUSDdCalculation = useCallback(() => {
    const cloneBarrowCardValue3 = { ...barrowCardValue3 };
    const cloneBarrowCardValue2 = { ...barrowCardValue2 };
    const errorClone = { ...error };
    if (borrow.borrowUSDd) {
      const cValue2 = borrow.borrowUSDd * 1;
      const cValue4 = (borrow.borrowUSDd * 0.5) / 100;
      const cValue5 = 200 + cValue2 + cValue4;
      const ratio =
        ((parseFloat(borrow.collateral) * parseFloat(barrowCardValue1.value1)) /
          cValue5) *
        100;
      cloneBarrowCardValue3.value2 = `${cValue2.toFixed(2)} dGBP`;
      cloneBarrowCardValue3.value4 = `${cValue4.toFixed(2)} dGBP`;
      cloneBarrowCardValue3.value5 = `${cValue5.toFixed(2)} dGBP`;
      if (borrow.collateral) {
        cloneBarrowCardValue2.value2 = `${ratio.toFixed(2)} dGBP`;
      }
      if (borrow.borrowUSDd * 1 < 200) {
        errorClone.borrowError = true;
      } else {
        errorClone.borrowError = false;
      }
      if (parseInt(ratio) < 110) {
        errorClone.ratioError = true;
      } else {
        errorClone.ratioError = false;
      }
      handleTextColor(parseInt(ratio));
    } else {
      cloneBarrowCardValue3.value2 = `0.00 dGBP`;
      cloneBarrowCardValue3.value4 = `0.00 dGBP`;
      cloneBarrowCardValue3.value5 = `200.00 dGBP`;
      errorClone.borrowError = false;
      handleTextColor(0);
    }
    setBarrowCardValue3(cloneBarrowCardValue3);
    setBarrowCardValue2(cloneBarrowCardValue2);
    setError(errorClone);
  }, [borrow.borrowUSDd]);

  const handleTextColor = (ratio) => {
    const cloneColor = { ...textColor };
    if (ratio > 0 && ratio < 150) {
      cloneColor.value2 = "text-red";
    } else if (ratio > 150 && ratio < 200) {
      cloneColor.value2 = "text-purple ";
    } else if (ratio > 200) {
      cloneColor.value2 = "text-green";
    } else {
      cloneColor.value2 = returnTextColor();
    }
    setTextColor(cloneColor);
  };

  return (
    <div className="p-0 container-fluid">
      <div className="flex items-center py-4 lg:py-8 md:py-5  mt-3">
        <h1 className="lg:text-[32px] md:text-[26px] text-lg sm:text-[22px] flex items-center font-bold mt-2 sm:mt-3 md:mt-3 lg:mt-0">
          <Link href={"/borrow"} passHref>
            <div>
              <FontAwesomeIcon icon={faArrowLeft} className="w-3 mr-3" />
            </div>
          </Link>
          Manage ETH Position
        </h1>
      </div>
      {/* <div className="flex-col flex-1 w-full p-0 lg:px-6"> */}

      {/* <div className="flex flex-wrap w-full gap-3 md:flex-nowrap lg:gap-6 md:gap-4"> */}
      <div className="grid grid-cols-1 gap-3 2xl:grid-cols-12 xl:grid-cols-12 lg:grid-cols-2 md:grid-cols-2 2xl:gap-6 lg:gap-4 2xl:mb-6 mb-[14px]">
        <div className="grid w-full h-full gap-[14px] 2xl:gap-6 lg:gap-4 2xl:col-span-5 xl:col-span-5 grid-col-1">
          <BorrowCard
            barrowCardKey={barrowCardKey1}
            barrowCardValue={barrowCardValue1}
          />
        </div>
        <div className="w-full 2xl:col-span-7 xl:col-span-7">
          <div className="grid w-full h-full 2xl:gap-6 lg:gap-4 gap-[14px] grid-col-1">
            <RatioEth />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3 2xl:grid-cols-12 xl:grid-cols-12 lg:grid-cols-2 md:grid-cols-2 2xl:gap-6 lg:gap-4">
        <div className="grid w-full h-full gap-[14px] 2xl:gap-6 lg:gap-4 2xl:col-span-5 xl:col-span-5 grid-col-1">
          <BorrowCard
            barrowCardKey={barrowCardKey2}
            barrowCardValue={barrowCardValue2}
            textColor={textColor}
          />
          <BorrowCard
            barrowCardKey={barrowCardKey3}
            barrowCardValue={barrowCardValue3}
          />
        </div>
        <div className="w-full 2xl:col-span-7 xl:col-span-7">
          <div className="grid w-full h-full 2xl:gap-6 lg:gap-4 gap-[14px] grid-col-1">
            {/* <RatioEth /> */}
            <BorrowForm borrow={borrow} setBorrow={setBorrow} error={error} />
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default ManageEthPosition;
