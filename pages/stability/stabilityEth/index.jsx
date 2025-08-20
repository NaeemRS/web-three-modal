import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import StabilityClaim from "@/components/stability/stabilityClaim";
import StabilityForm from "@/components/stability/stabilityForm";
const index = () => {
  return (
    <div className="px-0 container-fluid">
      <div className="flex items-center py-4 lg:py-8 md:py-5  mt-3">
        <h1 className="lg:text-[32px] md:text-[26px] text-lg sm:text-[22px] flex items-center font-bold mt-2 sm:mt-3 md:mt-3 lg:mt-0">
          <Link href={"/stability"} passHref>
            <button>
              <FontAwesomeIcon icon={faArrowLeft} className="w-3 mr-3" />
            </button>
          </Link>
          ETH Stability Pool
        </h1>
      </div>
      {/* <div className="flex-col flex-1 w-full px-0 2xl:px-6 xl:px-6"> */}
      <div className="flex flex-wrap w-full gap-4 md:flex-nowrap 2xl:gap-6 lg:gap-4">
        <div className="w-full bg-white dark:bg-[#191D43] h-100 md:rounded-[24px] rounded-[12px] md:w-1/2 lg:w-5/12">
          <div className="flex items-end justify-between px-4 py-5 lg:py-8 md:py-4 lg:px-8 md:px-6">
            <ul className="">
              <li className="block font-bold w-full lg:mb-5 md:mb-3 mb-2 text-[#9BA4C2] lg:text-[18px] md:text-[16px] text-sm">
                Rewards
              </li>
              <li className="text-[#1B264A] dark:text-white lg:mb-4 md:mb-3 mb-2 md:text-sm text-[12px]">
                APR
              </li>
              <li className="text-[#1B264A] dark:text-white lg:mb-4 md:mb-3 mb-2 md:text-sm text-[12px]">
                Stake dGBP to Earn
              </li>
              <li className="text-[#1B264A] dark:text-white lg:mb-4 md:mb-3 mb-2 md:text-sm text-[12px]">
                Stake dGBP to Earn
              </li>
            </ul>
            <ul className="lg:text-end">
              <li className="text-[#1B264A] dark:text-white font-bold lg:mb-4 md:mb-3 mb-2 md:text-sm text-[12px]">
                32.87 %
              </li>
              <li className="text-[#1B264A] dark:text-white font-bold lg:mb-4 md:mb-3 mb-2 md:text-sm text-[12px]">
                Gavis + ETH
              </li>
              <li className="text-[#1B264A] dark:text-white font-bold lg:mb-4 md:mb-3 mb-2 md:text-sm text-[12px]">
                7,078,277.74 dGBP
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-7/12">
          <div className="grid w-full gap-4 2xl:gap-6 lg:gap-4 grid-col-1">
            <StabilityClaim />
            <StabilityForm />
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default index;
