import React, { useState } from "react";
import { ethers } from "ethers";
import useContract from "@/hooks/custom/useContract.js";
import { constant } from "@/helpers/constant";
import Loader from "../loader/Loader";
import useChainRate from "@/hooks/custom/useChainRate";

const BorrowForm = (props) => {
  const currencyRate = useChainRate();
  const { borrow, setBorrow, error } = props;
  const [confirmLoader, setConfirmLoader] = useState(false);
  const contract = useContract();

  const handleBorrower = async () => {
    try {
      setConfirmLoader(true);

      const value = ethers.utils.parseEther(borrow.collateral);
      const USDdBorrow = ethers.utils.parseEther(borrow.borrowUSDd);
      const deadAddress = "0x0000000000000000000000000000000000000000";
      console.log("USDdBorrow", USDdBorrow);
      // const toWei = web3.utils.toWei
      // const toBN = web3.utils.toBN
      // const LUSDAmount = toBN(toWei('2500')) // borrower wants to withdraw 2500 LUSD
      // const ETHColl = toBN(toWei('5')) // borrower wants to lock 5 ETH collateral
      // Call deployed TroveManager contract to read the liquidation reserve and latest borrowing fee
      const liquidationReserve = await contract.DE_FRANC.DCHF_GAS_COMPENSATION(
        deadAddress
      );
      console.log("liquidationReserve", liquidationReserve);

      const expectedFee = await contract.TROVE_HELPERS.getBorrowingFeeWithDecay(
        deadAddress,
        USDdBorrow
      );
      console.log("expectedFee", expectedFee);

      // Total debt of the new trove = LUSD amount drawn, plus fee, plus the liquidation reserve
      const expectedDebt = USDdBorrow.add(expectedFee).add(liquidationReserve);
      console.log("expectedDebt", expectedDebt);
      // Get the nominal NICR of the new trove
      const _1e20 = ethers.utils.parseEther("100").toString();
      console.log("_1e20", _1e20);
      let NICR = value.mul(_1e20).div(expectedDebt);
      console.log("NICR", NICR);

      // Get an approximate address hint from the deployed HintHelper contract. Use (15 * number of troves) trials
      // to get an approx. hint that is close to the right position.
      let numTroves = await contract.SORTEDTROVES.getSize(deadAddress);
      let numTrials = numTroves.mul("15");
      let { 0: approxHint } = await contract.HINT_HELPERS.getApproxHint(
        deadAddress,
        NICR,
        numTrials,
        42
      ); // random seed of 42
      // Use the approximate hint to get the exact upper and lower hints from the deployed SortedTroves contract
      let { 0: upperHint, 1: lowerHint } =
        await contract.SORTEDTROVES.findInsertPosition(
          deadAddress,
          NICR,
          approxHint,
          approxHint
        );
      // Finally, call openTrove with the exact upperHint and lowerHint
      const maxFee = "5".concat("0".repeat(16)); // Slippage protection: 5%
      //await borrowerOperations.openTrove(maxFee, LUSDAmount, upperHint, lowerHint, { value: ETHColl })
      console.log("numTroves", numTroves);
      console.log("numTrials", numTrials);
      console.log("approxHint", approxHint);
      console.log("upperHint", upperHint);
      console.log("lowerHint", lowerHint);

      console.log("maxFee", maxFee);
      debugger;

      const options = {
        value: value.toString(),
      };
      const data = await contract["BORROWER"].openTrove(
        deadAddress,
        0,
        maxFee.toString(),
        USDdBorrow.toString(),
        upperHint,
        lowerHint,
        options
      );
      console.log(data);
      setBorrow({
        collateral: "",
        borrowUSDd: "",
      });
      setConfirmLoader(false);
    } catch (error) {
      setConfirmLoader(false);
      console.log(error);
    }
  };

  const closeTrop = async () => {
    try {
      const data2 = await contract.BORROWER.closeTrove(
        "0x0000000000000000000000000000000000000000"
      );
      console.log(data2);
    } catch (error) {
      console.log(error);
    }
  };

  const handleField = (e) => {
    const { name, value, validity } = e.target;
    setBorrow({ ...borrow, [name]: validity.valid ? value : borrow[name] });
  };

  const calculate_dGBP = () => {
    return parseFloat(borrow?.collateral) * currencyRate["BNB"];
  };

  return (
    <>
      <div className="flex items-center  bg-white dark:bg-[#191D43] md:rounded-[24px] rounded-[12px] h-full lg:py-8 2xl:px-8 md:py-4 md:px-6 px-4 py-5 ">
        <form className="block w-full">
          <ul className="grid w-full grid-cols-2 gap-3 md:grid-cols-2 lg:grid-cols-2 lg:gap-6">
            <li className="">
              <button
                type="button"
                className="font-bold w-full 2xl:h-[60px] lg:h-[55px] md:h-[50px] h-[45px] 2xl:px-6 lg:px-5 px-1 rounded-[12px] md:mb-3 bg-[#F8F0FF] dark:bg-[#9E3FFD40] mb-2 text-[#9E3FFD] dark:text-white 2xl:text-[18px] xl:text-[17px] lg:text-[15px]  md:text-sm sm:text-sm text-[12px] text-center sm:text-left"
              >
                <img
                  src="/images/borrow-icon/deposit-icon.svg"
                  className="inline lg:w-[37px] md:w-[30px] sm:w-[30px] w-[26px] 2xl:mr-5 lg:mr-2 sm:mr-3 mr-2"
                />
                Deposit
              </button>
            </li>
            <li className="">
              <button
                type="button"
                className="font-bold w-full 2xl:h-[60px] lg:h-[55px] md:h-[50px] h-[45px] 2xl:px-6 lg:px-5 px-1  md:mb-3 rounded-[12px] bg-[#F9F9F9] mb-2 text-[#9E3FFD] dark:bg-[#0E0F2E] 2xl:text-[18px] xl:text-[17px] lg:text-[15px]  md:text-sm sm:text-sm text-[12px] text-center sm:text-left"
                onClick={closeTrop}
              >
                <img
                  src="/images/borrow-icon/withdraw-icon.svg"
                  className="inline lg:w-[37px] md:w-[30px] sm:w-[30px] w-[26px] 2xl:mr-5 lg:mr-3 sm:mr-3 mr-2"
                />
                Withdraw
              </button>
            </li>
          </ul>

          <div className="mt-1 2xl:mt-3">
            <ul className="w-full ">
              <li className="flex justify-between mt-2 mb-2 lg:mb-3 lg:mt-2">
                <h3 className="text-[#1B264A] dark:text-[#fff] font-bold md:text-[16px] text-sm">
                  Deposit Collateral
                </h3>
                <span className="text-[#9BA4C2] text-[12px]">
                  = {calculate_dGBP() || "0.00"} dGBP
                </span>
              </li>
            </ul>
            <div className="relative mb-3 lg:mb-4 md:mb-5">
              <div className="absolute flex items-center md:top-[9px] top-[7px] md:right-4 sm:right-3 right-2 bg-[#F9F9F9] dark:bg-[#0E0F2E]">
                <span className="text-[#9BA4C2]  inline lg:text-[16px] text-[12px]">
                  0.00 BNB
                </span>
                <div className="border-[#9E3FFD] bg-[#607de9] rounded-full  lg:w-[37px] lg:h-[37px] h-[30px] md:w-[30px] border  w-[30px] ml-4">
                  <img
                    src="/images/borrow-icon/borrow-form-eth-icon1.svg"
                    className="inline rounded-full"
                  />
                </div>
              </div>
              <input
                type="text"
                name="collateral"
                pattern="[0.0-9]{0,9}"
                value={borrow?.collateral}
                className="focus-within:outline-none bg-[#F9F9F9] dark:bg-[#0E0F2E] lg:py-4 md:py-3 sm:py-3 py-2.5 w-full rounded-full lg:px-5 md:px-3 px-2"
                onChange={handleField}
              />
              {error?.depositError && (
                <p className="text-[#fc3838] mt-2">{constant.DEPOSIT_Error}</p>
              )}
            </div>
          </div>
          <div className="">
            <ul className="w-full ">
              <li className="flex justify-between mt-2 mb-2 lg:mb-3 lg:mt-2">
                <h3 className="text-[#1B264A] dark:text-white font-bold md:text-[16px] text-sm">
                  Borrow dGBP
                </h3>
                <span className="text-[#9BA4C2] text-[12px]">
                  Min debt: 200 dGBP
                </span>
              </li>
            </ul>
            <div className="relative mb-3 2xl:mb-5 lg:mb-4 md:mb-3">
              <div className=" absolute flex items-center justify-center md:top-[9px] top-[7px] md:right-4 sm:right-3 right-2  border-[#9E3FFD] bg-[#ffffff00] dark:bg-[#191D43] rounded-full  lg:w-[37px] lg:h-[37px] h-[30px] md:w-[30px] border  w-[30px] ml-4">
                <img
                  src="/images/borrow-icon/borrow-balance-icon.svg"
                  className="inline lg:w-[24px]  w-[22px]"
                />
              </div>
              <input
                type="text"
                name="borrowUSDd"
                value={borrow?.borrowUSDd}
                pattern="[0.0-9]{0,9}"
                className="focus-within:outline-none bg-[#F9F9F9] dark:bg-[#0E0F2E] lg:py-4 md:py-3 sm:py-3 py-2.5 w-full rounded-full lg:px-5 md:px-3 px-2"
                onChange={handleField}
              />
              <div className="relative mt-2">
                {error?.borrowError && (
                  <p className="text-[#fc3838]">{constant.BORROW_Error}</p>
                )}
                {error?.ratioError && (
                  <p className="text-[#fc3838]">{constant.RATIO_Error}</p>
                )}
              </div>
            </div>
          </div>
          <button
            type="button"
            disabled={
              confirmLoader ||
              error?.borrowError ||
              error?.ratioError ||
              error?.depositError
            }
            className="bg-[#9E3FFD] flex text-center items-center justify-center font-bold text-white lg:text-[18px] md:text-lg text-sm 2xl:h-[56px] lg:h-[55px] md:h-[50px] h-[45px] w-full rounded-full lg:px-5 md:px-3 px-2"
            onClick={handleBorrower}
          >
            Confirm {confirmLoader && <Loader />}
          </button>
        </form>
      </div>
    </>
  );
};

export default BorrowForm;
