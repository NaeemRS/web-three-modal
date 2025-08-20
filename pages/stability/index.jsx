import React from "react";
import Link from "next/link";

export default function Stability() {
  const atabiltilyTable = [
    {
      countMunber: "1",
      image: "/images/borrow-icon/table-etn-icon.svg",
      title: "Ethereum (BNB)",
      deposit: "-",
      debt: "-",
      tvl: "dGBP",
    },
    {
      countMunber: "2",
      image: "/images/borrow-icon/bitcoin-icon.svg",
      title: "Bitcoin (BTC)",
      deposit: "-",
      debt: "-",
      tvl: "dGBP",
    },
  ];
  return (
    <div className="px-0 container-fluid">
      <div className="flex items-center py-4 mt-3 lg:py-8 md:py-5 pt-7">
        <h1 className="lg:text-[32px] md:text-[26px] text-lg sm:text-[22px] font-bold">
          Stability Pool{" "}
        </h1>
      </div>
      <div className="w-full">
        <div className="bg-white  dark:bg-[#191D43] w-full md:rounded-[24px] rounded-[12px] lg:py-0 py-2">
          <table className="w-full  text-start bg-white dark:bg-[#191D43] md:rounded-[24px]  rounded-[12px]">
            <thead className="md1:block hidden lg:block border-b border-[#F9F9F9] dark:border-[#0E0F2E]">
              <tr className="grid items-center w-full grid-cols-4 col-span-2 px-5 2xl:px-6 md1:grid-cols-12">
                <th className=" md1:col-span-1 md:col-span-2 text-start 2xl:text-[16px] xl:text-[15px] lg:text-[14px] text-[13px]  text-[#9BA4c2]  py-4 lg:py-6">
                  #
                </th>
                <th className=" md1:col-span-2 md:col-span-2 col-span-2 text-start 2xl:text-[16px] xl:text-[15px] lg:text-[14px] text-[13px] font-medium text-[#9BA4c2] lg:py-4 px-2 py-3">
                  Name
                </th>
                <th className=" md1:col-span-2 md:col-span-2 col-span-2 text-start 2xl:text-[16px] xl:text-[15px] lg:text-[14px] text-[13px] font-medium text-[#9BA4c2] lg:py-4 px-2 py-3">
                  Deposited
                </th>
                <th className=" md1:col-span-2 md:col-span-2 col-span-2 text-start 2xl:text-[16px] xl:text-[15px] lg:text-[14px] text-[13px] font-medium text-[#9BA4c2] lg:py-4 px-2 py-3">
                  Debt
                </th>
                <th className=" md1:col-span-2 md:col-span-2 col-span-2 text-start 2xl:text-[16px] xl:text-[15px] lg:text-[14px] text-[13px] font-medium text-[#9BA4c2] lg:py-4 px-2 py-3">
                  TVL
                </th>
              </tr>
            </thead>
            {atabiltilyTable.map((atabiltilyTable, key) => {
              return (
                <>
                  <tbody>
                    <tr className="grid lg:py-0  py-2 items-center grid-cols-4 2xl:px-6 sm:px-5 px-3 md1:grid-cols-12 border-b lg:border-transparent lg:dark:border-transparent border-[#f1f0f0] dark:border-[#0E0F2E]">
                      <td className="md1:block hidden lg:block md1:col-span-1 md:col-span-2 col-span-2 lg:py-4  py-3 xl:whitespace-nowrap 2xl:text-[16px] xl:text-[15px] lg:text-[14px] text-[13px] text-[#1B264A] dark:text-[#FFFFFF]">
                        {atabiltilyTable.countMunber}
                      </td>
                      <td className="md1:col-span-2 md:col-span-2 col-span-2 2xl:text-[16px] xl:text-[15px] lg:text-[14px] text-[13px] text-[#1B264A] dark:text-[#FFFFFF] font-medium  lg:py-4 py-3 sm:px-0 px-1 ">
                        <div className="flex items-center">
                          <img
                            src={atabiltilyTable.image}
                            className="inline w-8 lg:mr-3 mr-1.5 rounded-full"
                          />
                          <span>{atabiltilyTable.title}</span>
                        </div>
                      </td>
                      <td className="md1:col-span-2 md:col-span-2 col-span-2 2xl:text-[16px] xl:text-[15px] lg:text-[14px] text-[13px] text-[#1B264A] dark:text-[#FFFFFF] lg:py-4 py-3 font-medium  sm:px-0 px-1">
                        <h5 className="text-[13px] font-medium text-[#9BA4c2] md1:hidden block">
                          Deposited
                        </h5>
                        {atabiltilyTable.deposit}
                      </td>
                      <td className=" md1:col-span-2 md:col-span-2 col-span-2 2xl:text-[16px] xl:text-[15px] lg:text-[14px] text-[13px] text-[#1B264A] dark:text-[#FFFFFF] lg:py-4 py-3 font-medium  sm:px-0 px-1">
                        <h5 className="text-[13px] font-medium text-[#9BA4c2] md1:hidden block">
                          Debt
                        </h5>
                        {atabiltilyTable.debt}
                      </td>
                      <td className="md1:col-span-2 md:col-span-2 col-span-2 2xl:text-[16px] xl:text-[15px] lg:text-[14px] text-[13px] text-[#1B264A] dark:text-[#FFFFFF] lg:py-4 font-medium py-3  sm:px-0 px-1">
                        <h5 className="text-[13px] font-medium text-[#9BA4c2] md1:hidden block">
                          TVL
                        </h5>
                        {atabiltilyTable.tvl}
                      </td>
                      <td className="col-span-4 px-0 py-3 font-medium text-center text-white lg:col-span-3 md1:col-span-3 lg:py-4 ">
                        <Link href="/stability/stabilityEth" passHref>
                          <button className=" rounded-[24px] py-2.5 font-bold 2xl:text-[18px] lg:text-[16px] md:text-[15px] text-[15px] lg:px-6  md1:w-auto sm:w-1/2 w-full whitespace-nowrap md:px-3 px-2 bg-[#9E3FFD]">
                            Stake dGBP,get ETH
                          </button>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}
