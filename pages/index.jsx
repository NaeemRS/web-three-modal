import dynamic from "next/dynamic";
import TokenCard from "@/components/dashboard/tokenCard";
import DashboardCard from "@/components/dashboard/dashboardCard";
import MainLoader from "@/components/loader/MainLoader";
const DashboardChart = dynamic(
  () => import("@/components/dashboard/dashboardChart"),
  { ssr: false }
);
import { dashboardChart1, dashboardChart2 } from "@/helpers/componentData";
import React from "react";

import useMainLoader from "@/hooks/custom/useMainLoader";
const Home = () => {

  const RenderLoader = useMainLoader();
  
  return (
    <>
      {RenderLoader}
      <div className="flex flex-col items-center justify-center min-h-screen my-0 lg:py-2 lg:my-0">
        <div className="flex-col flex-1 w-full px-0">
          <h1 className="lg:text-[32px] md:text[25px] dark:text-white text-lg font-semibold md:pt-7 pt-7">
            Dashboard
          </h1>
          <TokenCard />
          <div className="grid w-full grid-cols-1 gap-y-[14px] gap-x-3 md:grid-cols-2 lg:gap-6">
            <div className="w-full h-full">
              <DashboardCard />
            </div>
            <div className="grid w-full grid-cols-1  gap-[14px] lg:gap-6 md:gap-4">
              <div className="w-full">
                <DashboardChart
                  dashboardChart={dashboardChart1}
                  title={"Total Collateral Ratio (BNB)"}
                  value={0.0}
                  name={"Period PNL"}
                />
              </div>
              <div className="w-full">
                <DashboardChart
                  dashboardChart={dashboardChart2}
                  title={"Total Collateral Ratio (BNB)"}
                  value={0.0}
                  name={"Period PNL"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
