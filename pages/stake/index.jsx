import StabilityClaim from "@/components/stability/stabilityClaim";
import StabilityForm from "@/components/stability/stabilityForm";
const index = () => {
  return (
    <div className="px-0 container-fluid">
      <div className="flex items-center py-4 lg:py-8 md:py-5  mt-3 pt-7">
        <h1 className="lg:text-[32px] md:text-[26px] text-lg sm:text-[22px] flex items-center font-bold mt-2 sm:mt-3 md:mt-3 lg:mt-0">
          Stake
        </h1>
      </div>
      <div className="flex flex-wrap w-full gap-3 2xl:gap-6 lg:gap-4 md:flex-nowrap ">
        <div className="w-full bg-white dark:bg-[#191D43] h-100 md:rounded-[24px] rounded-[12px] md:w-1/2 lg:w-5/12 px-4 py-5 lg:py-8 md:py-4 lg:px-8 md:px-6">
          <h4 className="block font-bold w-full lg:mb-5 md:mb-3 mb-2 text-[#9BA4C2] lg:text-[18px] md:text-[16px] text-sm">
            Rewards
          </h4>
          <div className="flex items-end justify-between">
            <ul className="">
              <li className="text-[#1B264A] dark:text-white lg:mb-4 md:mb-3 mb-2 md:text-sm text-[12px]">
                7D APR
              </li>
              <li className="text-[#1B264A] dark:text-white lg:mb-4 md:mb-3 mb-2 md:text-sm text-[12px]">
                24H APR
              </li>
              <li className="text-[#1B264A] dark:text-white lg:mb-4 md:mb-3 mb-2 md:text-sm text-[12px]">
                Stake dPNY to Earn
              </li>
              <li className="text-[#1B264A] dark:text-white lg:mb-4 md:mb-3 mb-2 md:text-sm text-[12px]">
                TVL
              </li>
            </ul>
            <ul className="lg:text-end">
              <li className="text-[#1B264A] dark:text-white font-bold lg:mb-4 md:mb-3 mb-2 md:text-sm text-[12px]">
                62.44%
              </li>
              <li className="text-[#1B264A] dark:text-white font-bold lg:mb-4 md:mb-3 mb-2 md:text-sm text-[12px]">
                36.46%
              </li>
              <li className="text-[#1B264A] dark:text-white font-bold lg:mb-4 md:mb-3 mb-2 md:text-sm text-[12px]">
                dGBP + BNB + wBTC
              </li>
              <li className="text-[#1B264A] dark:text-white font-bold lg:mb-4 md:mb-3 mb-2 md:text-sm text-[12px]">
                194,505.23 dGBP
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-7/12">
          <div className="grid w-full gap-[14px] 2xl:gap-6 lg:gap-4 grid-col-1">
            <StabilityClaim />
            <StabilityForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
