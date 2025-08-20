import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
export default function DashboardChart(props) {
  const [showDD, setShowDD] = useState(false);
  const [selectValue, setSelectValue] = useState("This Month");
  const { dashboardChart, title, value, name, theme, leg } = props;
  const { series, options } = dashboardChart("#9BA4C2");

  return (
    <div className="w-full">
      <div className="block  md:rounded-[24px] rounded-[12px] bg-white dark:bg-[#191D43] relative  w-full lg:py-3 lg:pb-0 py-3 pb-0">
        <div className="absolute z-[9] px-3 py-3 lg:px-6 ">
          <div>
            <p className="lg:text-[16px] text-sm text-[#425387] font-medium">
              {title}
            </p>
          </div>
          <div>
            <h1 className="lg:text-[25px]  text-[16px] text-[#16163F] dark:text-white font-bold">
              {value} %
            </h1>
            <div className="relative">
              <a
                type="button"
                className="relative flex items-center h-4 cursor-pointer custon-select"
                onClick={() => setShowDD(!showDD)}
              >
                <img
                  src="/images/select-dropdown.svg "
                  alt="down-arrow"
                  className={`${showDD && "rotate-180"}`}
                />
                <p className="lg:text-sm text-[12px] text-[#9BA4C2] font-medium ml-2 relative cursor-pointer">
                  {selectValue}
                </p>
              </a>
              <ul
                className={`lg:text-sm text-[12px]  absolute left-5 right-0 top-[16px]  ${
                  showDD == false ? "hidden" : "block"
                }`}
              >
                <li
                  className=" lg:text-sm text-[12px] text-[#9BA4C2] font-medium mt-[6px] relative cursor-pointer"
                  onClick={() => setSelectValue("last Month")}
                >
                  <a type="button" onClick={() => setShowDD(!showDD)}>
                    {name}
                  </a>
                </li>
                <li
                  className="lg:text-sm text-[12px] text-[#9BA4C2] font-medium mt-[6px] relative cursor-pointer"
                  onClick={() => setSelectValue("This Month")}
                >
                  <a type="button" onClick={() => setShowDD(!showDD)}>
                    {name}
                  </a>
                </li>
                <li
                  className="lg:text-sm text-[12px] text-[#9BA4C2] font-medium mt-[6px] relative cursor-pointer"
                  onClick={() => setSelectValue("last Month")}
                >
                  <a type="button" onClick={() => setShowDD(!showDD)}>
                    {name}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* chart */}
        <div className="md:px-3 px-2.5 pr-0">
          <div id="chart" className="dark:text-white">
            <ReactApexChart
              options={options}
              series={series}
              type="area"
              height={250}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
