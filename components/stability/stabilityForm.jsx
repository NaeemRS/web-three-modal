import React, { useState } from "react";
import { ethers } from "ethers";
import useContract from "../../hooks/custom/useContract.js";
import Loader from "../loader/Loader.jsx";
const StabilityForm = () => {
  const contract = useContract();
  const [stake, setStake] = useState("");
  const [tab, setTab] = useState("1");
  const [depositLoader, setDepositLoader] = useState(false);
  const [withdrawLoader, setWithdrawLoader] = useState(false);
  const handleInput = (e) => {
    const { name, value, validity } = e.target;

    setStake(validity.valid ? value : stake);
  };

  const handleDeposit = async () => {
    try {
      setDepositLoader(true);
      const value = ethers.utils.parseEther(stake).toString();
      const data = await contract.STAKE.approve(
        process.env.STABILITY_POOL,
        value
      );
      console.log(data);
      const data2 = await contract.STABILITY.provideToSP(value);
      console.log(data2);
      setStake("");
      setDepositLoader(false);
    } catch (error) {
      setDepositLoader(false);
    }
  };

  const handleWithdraw = async () => {
    try {
      setWithdrawLoader(true);
      const value = ethers.utils.parseEther(stake).toString();
      const data2 = await contract.STABILITY.withdrawFromSP(value);
      console.log(data2);
      setStake("");
      setWithdrawLoader(false);
    } catch (error) {
      setWithdrawLoader(false);
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

  const handleTab = (val) => {
    setTab(val);
  };

  return (
    <>
      <div className="bg-white dark:bg-[#191D43] md:rounded-[24px] rounded-[12px]  lg:py-8 lg:px-9 md:py-4 px-4 py-5 md:px-6  ">
        <form>
          <ul className="grid w-full grid-cols-2 gap-3 md:grid-cols-2 lg:gap-6">
            <li className="">
              <button
                type="button"
                className={`mb-2 font-bold w-full lg:mb-5 2xl:h-[60px] lg:h-[55px] md:h-[50px] h-[45px] 2xl:px-6 lg:px-5 sm:px-5 px-1 rounded-[12px] md:mb-3  2xl:text-[18px] xl:text-[17px] lg:text-[14px]  md:text-sm sm:text-sm text-[12px] sm:text-left text-center ${
                  tab === "1"
                    ? "bg-[#F8F0FF]  text-[#9E3FFD] dark:text-white dark:bg-[#9E3FFD40]"
                    : " text-[#9E3FFD] bg-[#F9F9F9] dark:bg-[#0E0F2E]"
                }`}
                onClick={() => handleTab("1")}
              >
                <img
                  src="/images/borrow-icon/deposit-icon.svg"
                  className="inline 2xl:mr-5 lg:mr-3 sm:mr-3 mr-2 lg:w-[35px] md:w-[30px] sm:w-[30px] w-[26px]"
                />
                Deposit
              </button>
            </li>
            <li className="">
              <button
                type="button"
                className={`mb-2 font-bold w-full lg:mb-5  2xl:h-[60px] lg:h-[55px] md:h-[50px] h-[45px] 2xl:px-6 lg:px-5 sm:px-5 px-1  md:mb-3 rounded-[12px]  2xl:text-[18px] xl:text-[17px] lg:text-[14px]  md:text-sm sm:text-sm text-[12px] sm:text-left text-center ${
                  tab === "2"
                    ? "bg-[#F8F0FF] dark:bg-[#9E3FFD40] text-[#9E3FFD] dark:text-white"
                    : "bg-[#F9F9F9] text-[#9E3FFD]  dark:bg-[#0E0F2E]"
                }`}
                onClick={() => handleTab("2")}
              >
                <img
                  src="/images/borrow-icon/withdraw-icon.svg"
                  className="inline 2xl:mr-5 lg:mr-3 sm:mr-3 mr-2 lg:w-[35px] md:w-[30px] sm:w-[30px] w-[26px]"
                />
                Withdraw
              </button>
            </li>
          </ul>
          <div>
            {tab === "1" ? (
              <>
                <ul className="w-full ">
                  <li className="flex justify-between mb-2 lg:mb-3">
                    <h3 className="text-[#1B264A] dark:text-white font-bold text-[16px]">
                      Stake
                    </h3>
                    <span className="text-[#9BA4C2] text-[12px]">
                      0.00 dGBP
                    </span>
                  </li>
                </ul>
                <div className="relative flex items-center justify-end mb-3 lg:mb-10 md:mb-5">
                  <div className=" absolute flex items-center justify-center top-[9px] right-4  border-[#9E3FFD] bg-[#ffffff00] dark:bg-[#191D43] rounded-full  lg:w-[37px] lg:h-[37px] h-[30px] md:w-[30px] border  w-[30px] ml-4">
                    <img
                      src="/images/borrow-icon/borrow-balance-icon.svg"
                      className="inline lg:w-[24px]  w-[22px]"
                    />
                  </div>
                  <input
                    type="text"
                    pattern="[0.0-9]{0,9}"
                    value={stake}
                    className="focus-within:outline-none bg-[#F9F9F9] dark:bg-[#0E0F2E] lg:py-4 md:py-3 sm:py-3 py-2.5 w-full rounded-full lg:px-5 md:px-3 px-2"
                    onChange={handleInput}
                  />
                </div>
                <button
                  type="button"
                  className="bg-[#9E3FFD] flex justify-center text-center items-center font-bold text-white lg:text-[18px] md:text-lg text-sm lg:py-4 md:py-3 sm:py-3 py-2.5 w-full rounded-full lg:px-5 md:px-3 px-2"
                  onClick={handleDeposit}
                >
                  Deposit {depositLoader && <Loader />}
                </button>
              </>
            ) : (
              <>
                <ul className="w-full ">
                  <li className="flex justify-between mb-2 lg:mb-3">
                    <h3 className="text-[#1B264A] dark:text-white font-bold text-[16px]">
                      Unstake
                    </h3>
                    <span className="text-[#9BA4C2] text-[12px]">
                      0.00 Available
                    </span>
                  </li>
                </ul>
                <div className="relative flex items-center justify-end mb-3 lg:mb-10 md:mb-5">
                  <div className=" absolute flex items-center justify-center top-[9px] right-4  border-[#9E3FFD] bg-[#ffffff00] dark:bg-[#191D43] rounded-full  lg:w-[37px] lg:h-[37px] h-[30px] md:w-[30px] border  w-[30px] ml-4">
                    <img
                      src="/images/borrow-icon/borrow-balance-icon.svg"
                      className="inline lg:w-[24px]  w-[22px]"
                    />
                  </div>
                  <input
                    type="text"
                    pattern="[0.0-9]{0,9}"
                    value={stake}
                    className="focus-within:outline-none bg-[#F9F9F9] dark:bg-[#0E0F2E] lg:py-4 md:py-3 sm:py-3 py-2.5 w-full rounded-full lg:px-5 md:px-3 px-2"
                    onChange={handleInput}
                  />
                </div>
                <button
                  type="button"
                  className="bg-[#9E3FFD] flex justify-center text-center items-center font-bold text-white lg:text-[18px] md:text-lg text-sm lg:py-4 md:py-3 sm:py-3 py-2.5 w-full rounded-full lg:px-5 md:px-3 px-2"
                  onClick={handleWithdraw}
                >
                  Withdraw {withdrawLoader && <Loader />}
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default StabilityForm;
