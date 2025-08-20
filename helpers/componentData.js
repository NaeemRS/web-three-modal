export const headerData = [
  {
    logo: "/images/sidebar-icon/metamask-icon.svg",
    name: "dGBP: ",
    value: "1$",
    tokenAddress: "0xcfE392Ccb0BecE7EcA5019Bcb78cff9863833922",
    tokenSymbol: "dGBP",
    tokenDecimals: 18,
    tokenImage: "http://placekitten.com/200/300",
  },
  {
    logo: "/images/sidebar-icon/metamask-icon.svg",
    name: "dPNY: ",
    value: "0.1$",
    tokenAddress: "0x983732CD89CA49d8c6f1d0D9fB79ABE851D32Bf8",
    tokenSymbol: "dPNY",
    tokenDecimals: 18,
    tokenImage: "http://placekitten.com/200/300",
  },
  {
    logo: "/images/sidebar-icon/metamask-icon.svg",
    name: "BNB: ",
    value: "0.00$",
    tokenAddress: "0x0000000000000000000000000000000000000000",
    tokenSymbol: "BNB",
    tokenDecimals: 18,
    tokenImage: "http://placekitten.com/200/300",
  },
];

export const tokenCardData = [
  {
    tokenCardLogo: "/images/dashboard-icon/ethereum-eth.svg",
    tokenCardTitle: "ETH",
    tokenCardPrice: "0.00",
  },
  {
    tokenCardLogo: "/images/dashboard-icon/matic.svg",
    tokenCardTitle: "MATIC",
    tokenCardPrice: "0.00",
  },
  {
    tokenCardLogo: "/images/dashboard-icon/dodge.svg",
    tokenCardTitle: "DOGE",
    tokenCardPrice: "0.00",
  },
  {
    tokenCardLogo: "/images/dashboard-icon/xrp.svg",
    tokenCardTitle: "XRP",
    tokenCardPrice: "0.00",
  },
  {
    tokenCardLogo: "/images/dashboard-icon/avax.svg",
    tokenCardTitle: "AVAX",
    tokenCardPrice: "0.00",
  },
  {
    tokenCardLogo: "/images/dashboard-icon/binance-svgrepo-com.svg",
    tokenCardTitle: "BNB",
    tokenCardPrice: "0.00",
  },
  {
    tokenCardLogo: "/images/dashboard-icon/1200px-Bitcoin.svg.png",
    tokenCardTitle: "BTC",
    tokenCardPrice: "0.00",
  },

  {
    tokenCardLogo: "/images/dashboard-icon/xrp.svg",
    tokenCardTitle: "XRP",
    tokenCardPrice: "0.00",
  },

  {
    tokenCardLogo: "/images/dashboard-icon/avax.svg",
    tokenCardTitle: "AVAX",
    tokenCardPrice: "0.00",
  },
  {
    tokenCardLogo: "/images/dashboard-icon/tether-seeklogo.com.svg",
    tokenCardTitle: "USDT",
    tokenCardPrice: "0.00",
  },
  {
    tokenCardLogo: "/images/dashboard-icon/usdc-coin-icon.svg",
    tokenCardTitle: "USDC",
    tokenCardPrice: "0.00",
  },
  {
    tokenCardLogo: "/images/dashboard-icon/binance-usd-busd-seeklogo.com.svg",
    tokenCardTitle: "BUSD",
    tokenCardPrice: "0.00",
  },
  {
    tokenCardLogo: "/images/dashboard-icon/tron.svg",
    tokenCardTitle: "TRX",
    tokenCardPrice: "0.00",
  },
];

export const dashboardCard = [
  {
    dashboardCardLogo: "/images/dashboard-icon/dolore-icon.svg",
    dashboardCardPrice: "$0.00",
    dashboardCardTitle: "TVL",
  },
  {
    dashboardCardLogo: "/images/dashboard-icon/eth-icon.svg",
    dashboardCardPrice: "0.00",
    dashboardCardTitle: "ETH Staked",
  },
  {
    dashboardCardLogo: "/images/dashboard-icon/staked-icon.svg",
    dashboardCardPrice: "0.00",
    dashboardCardTitle: "WBTC Staked",
  },
  {
    dashboardCardLogo: "/images/dashboard-icon/circulation-icon.svg",
    dashboardCardPrice: "0.00",
    dashboardCardTitle: "DefiPound in circulation",
  },
  {
    dashboardCardLogo: "/images/dashboard-icon/stability-icon.svg",
    dashboardCardPrice: "0.00",
    dashboardCardTitle: "DefiPound in Stability",
  },
  {
    dashboardCardLogo: "/images/dashboard-icon/collateral-ratio-icon.svg",
    dashboardCardPrice: "0%",
    dashboardCardTitle: "Total  Collateral Ratio",
  },
];

export const dashboardChart1 = (dcolor) => {
  return {
    series: [
      {
        name: "series",
        data: [10, 40, 90, 51, 80, 50, 120],
      },
    ],
    options: {
      chart: {
        toolbar: false,
        height: 250,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      legend: {
        horizontalAlign: "right",
      },
      yaxis: {
        opposite: true,
        labels: {
          formatter: (value) => value.toFixed(0) + "%",
          style: {
            colors: dcolor || "#ea1c1c",
          },
        },
      },

      theme: {
        monochrome: {
          enabled: true,
          color: "#BB7EFD",
          shadeTo: "dark",
          shadeIntensity: 0.65,
        },
      },
      xaxis: {
        categories: ["01", "02", "03", "04", "05", "06", "07"],
        labels: {
          style: {
            colors: dcolor || "#ea1c1c",
          },
        },
      },
    },
  };
};

export const dashboardChart2 = (dcolor) => {
  return {
    series: [
      {
        name: "series",
        data: [0, 40, 60, 51, 42, 30, 100],
      },
    ],
    options: {
      chart: {
        toolbar: false,
        height: 250,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      legend: {
        horizontalAlign: "right",
      },
      yaxis: {
        opposite: true,
        labels: {
          formatter: (value) => value.toFixed(0) + "%",
          style: {
            colors: dcolor || "#ea1c1c",
          },
        },
      },

      theme: {
        monochrome: {
          enabled: true,
          color: "#BB7EFD",
          shadeTo: "dark",
          shadeIntensity: 0.65,
        },
      },
      xaxis: {
        categories: ["01", "02", "03", "04", "05", "06", "07"],
        labels: {
          style: {
            colors: dcolor || "#ea1c1c",
          },
        },
      },
    },
  };
};

export const barrowCardKey1 = {
  title: "Price",
  key1: "BNB Price",
  key2: "Your Liquidation Price",
};
export const barrowCardKey2 = {
  title: "Collateral Section",
  key1: "Total Collateral Ratio BNB",
  key2: "Your Collateral Ratio BNB",
};
export const barrowCardKey3 = {
  title: "Position",
  key1: "Your Collateral",
  key2: "You Receive",
  key3: "Liquidation Reserve Fee",
  key4: "Borrowing Fee (0.5%)",
  key5: "Total Debt",
};

// export const barrowCardValue1 = {
//   value1: "1,308.61 CHF",
//   value2: "7.08 CHF",
// };
// export const barrowCardValue2 = {
//   value1: "184.67%",
//   value2: "4,559.55%",
// };
// export const barrowCardValue3 = {
//   value1: "9.00 ETH",
//   value2: "58.00 USDd",
//   value3: "200.00 USDd",
//   value4: "0.30 USDd",
//   value5: "258.30 USDd",
// };
export const liquidityCardKey1 = {
  key1: "Price Impact + Fees",
  key2: "APY ",
  key3: "Provide Liquidity to Earn",
  key4: "TVL",
  key5: "Pool",
};

export const liquidityCardValue1 = {
  value1: ". %",
  value2: "37.40%",
  value3: "0.30 dGBP",
  value4: "7,116,303 dGBP",
  value5: "Curve Finance",
};
export const liquidityCardKey2 = {
  key1: "Daily Income ",
  key2: "Monthly Income",
  key3: "Monthly Income",
};

export const liquidityCardValue2 = {
  value2: "- dGBP",
  value3: "- dGBP",
  value4: "- dGBP",
};

export const redemptionCardValue1 = {
  value1: ". %",
  value2: "37.40%",
  value3: "0.30 USDd",
  value4: "7,116,303 USDd",
  value5: "Curve Finance",
};

export const redemptionCardKey1 = {
  key1: "Daily Income ",
  key2: "Monthly Income",
  key3: "Monthly Income",
};
