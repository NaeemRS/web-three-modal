import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { dashboardCard } from "@/helpers/componentData";
import React, { useState, useEffect } from "react";
import useContract from "@/hooks/custom/useContract.js";
const DashboardCard = () => {
  const contract = useContract();
  const [dashBoardCard, setDashBoardCard] = useState(dashboardCard);
  useEffect(() => {
    (async () => {
      try {
        if (Object.keys(contract).length !== 0) {
          const TVL = await contract.STABILITY.getEntireSystemDebt(
            "0x0000000000000000000000000000000000000000"
          );
          console.log(TVL.toString());
        }
        // const TVL = await contract.STABILITY.getEntireSystemDebt(
        //   "0x0000000000000000000000000000000000000000"
        // );
        // const TVL = await contract.STABILITY.getEntireSystemColl();
        // const TVL = await contract.STABILITY.getTotalDCHFDeposits();
      } catch (error) {
        console.log(error);
      }
    })();

    return () => {};
  }, [contract]);

  return (
    <>
      <div className="grid grid-cols-2 gap-y-[14px] gap-3 md:grid-cols-2 sm:grid-cols-2 lg:gap-6">
        {dashBoardCard.map((dashboardCard, key) => (
          <div
            key={key}
            className="bg-[#fff] dark:bg-[#191D43]  lg:pt-8 2xl:p-7 lg:h-[176px] md:h-[180px] lg:p-5  md:p-4 p-3  md:rounded-[24px] rounded-[12px]   "
          >
            <div className="flex items-center justify-between ">
              <div className="bg-[#9E3FFD] rounded-[10px] flex md:p-3 p-3 items-center justify-center md:w-[52px] md:h-[52px] w-[44px] h-[44px]">
                <img src={dashboardCard.dashboardCardLogo} className="" />
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faCaretUp}
                  className="md:w-3  w-2 md:mr-3 mr-1  text-[#1ECB4F]"
                />
                <span className="text-[#1ECB4F] md:text-[14px] text-[10px]">
                  +0.25%
                </span>
              </div>
            </div>
            <div className="">
              <h4 className="2xl:text-[20px] lg:text-[20px] md:text-[18px] text-[16px] lg:mt-3 mb-0 sm:mb-1 md:mt-4 mt-2 text-[#16163F] dark:text-white uppercase">
                {dashboardCard.dashboardCardPrice}
              </h4>
              <p className="2xl:text-sm sm:text-[12px] text-[9px] md:leading-auto l text-[#9BA4C2] uppercase">
                {dashboardCard.dashboardCardTitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DashboardCard;
