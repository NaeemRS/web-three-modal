import Link from "next/link";
import React from "react";

const Borrow = () => {
  const borrowTable = [
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
    <>
      <div className="px-0">
        <div className="flex items-center py-4 mt-3 lg:py-8 md:py-5 pt-7">
          <h1 className="lg:text-[32px] md:text-[26px] text-lg sm:text-[22px] font-bold">
            Borrow{" "}
          </h1>
        </div>
        <div className="w-full">
          <div className="bg-white dark:bg-[#191D43] w-full md:rounded-[24px] rounded-[12px] lg:py-0 py-2">
            <table className="w-full  text-start bg-white dark:bg-[#191D43] md:rounded-[24px]  rounded-[12px]">
              <thead className="md1:block hidden lg:block  border-b border-[#F9F9F9] dark:border-[#0E0F2E]">
                <tr className="grid items-center w-full grid-cols-2 px-5 md1:grid-cols-12">
                  <th className=" col-span-1 text-start 2xl:text-[16px] xl:text-[15px] lg:text-[14px] text-[13px]  text-[#9BA4c2]  py-4 lg:py-6">
                    #
                  </th>
                  <th className=" col-span-2 text-start 2xl:text-[16px] xl:text-[15px] lg:text-[14px] text-[13px] font-medium text-[#9BA4c2] lg:py-4 px-2 py-3">
                    Name
                  </th>
                  <th className=" col-span-2 text-start 2xl:text-[16px] xl:text-[15px] lg:text-[14px] text-[13px] font-medium text-[#9BA4c2] lg:py-4 px-2 py-3">
                    Deposit
                  </th>
                  <th className=" col-span-2 text-start 2xl:text-[16px] xl:text-[15px] lg:text-[14px] text-[13px] font-medium text-[#9BA4c2] lg:py-4 px-2 py-3">
                    Debt
                  </th>
                  <th className=" col-span-2 text-start 2xl:text-[16px] xl:text-[15px] lg:text-[14px] text-[13px] font-medium text-[#9BA4c2] lg:py-4 px-2 py-3">
                    TVL
                  </th>
                </tr>
              </thead>
              {borrowTable.map((borrowTable, key) => (
                <tbody key={key}>
                  <tr className="grid items-center lg:py-0  py-2 grid-cols-4 2xl:px-6 sm:px-5 px-3 md1:grid-cols-12 border-b lg:border-transparent lg:dark:border-transparent border-[#f1f0f0] dark:border-[#0E0F2E]">
                    <td className="col-span-1  md1:block hidden lg:block  lg:py-4  py-3 2xl:text-[16px] xl:text-[15px] lg:text-[14px] text-[13px] text-[#1B264A] dark:text-[#FFFFFF]">
                      {borrowTable.countMunber}
                    </td>
                    <td className="md1:col-span-2 col-span-2 2xl:text-[16px] xl:text-[15px] lg:text-[14px] text-[13px] text-[#1B264A] dark:text-[#FFFFFF] font-medium  lg:py-4 py-3 sm:px-0 px-1 ">
                      <div className="flex items-center">
                        <img
                          src={borrowTable.image}
                          className="inline w-8 lg:mr-3 mr-1.5 rounded-full"
                        />
                        <span>{borrowTable.title}</span>
                      </div>
                    </td>
                    <td className="md1:col-span-2 col-span-2 2xl:text-[16px] xl:text-[15px] lg:text-[14px] text-[13px] text-[#1B264A] dark:text-[#FFFFFF] lg:py-4 py-3 font-medium whitespace-nowrap sm:px-0 px-1">
                      <h5 className="text-[13px] font-medium text-[#9BA4c2] md1:hidden block">
                        Deposit
                      </h5>
                      {borrowTable.deposit}
                    </td>
                    <td className="md1:col-span-2 col-span-2 2xl:text-[16px] xl:text-[15px] lg:text-[14px] text-[13px] text-[#1B264A] dark:text-[#FFFFFF] lg:py-4 py-3 font-medium whitespace-nowrap sm:px-0 px-1">
                      <h5 className="text-[13px] font-medium text-[#9BA4c2] md1:hidden block">
                        Debt
                      </h5>
                      {borrowTable.debt}
                    </td>
                    <td className="md1:col-span-2 col-span-2 2xl:text-[16px] xl:text-[15px] lg:text-[14px] text-[13px] text-[#1B264A] dark:text-[#FFFFFF] lg:py-4 font-medium py-3 sm:px-0 px-1">
                      <h5 className="text-[13px] font-medium text-[#9BA4c2] md1:hidden block">
                        TVL
                      </h5>
                      {borrowTable.tvl}
                    </td>
                    <td className="col-span-4 px-0 py-3 font-medium text-center text-white sm:px-0 md1:col-span-3 lg:py-4 whitespace-nowrap">
                      <Link href="/borrow/manageEth" passHref>
                        <button className="rounded-[24px] py-2.5 font-bold 2xl:text-[18px] lg:text-[16px] md:text-[15px] text-[15px] 2xl:w-[133px] lg:w-[110px]  sm:w-1/2 w-full md:px-3 px-2 bg-[#9E3FFD]">
                          Borrow
                        </button>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Borrow;
