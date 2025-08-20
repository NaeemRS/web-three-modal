/** @type {import('next').NextConfig} */
module.exports = {
  env: {
    INFURA_ID: process.env.INFURA_ID,
    BORROWER_OPERATIONS: process.env.BORROWER_OPERATIONS,
    STABILITY_POOL: process.env.STABILITY_POOL,
    STAKE_LOAN: process.env.STAKE_LOAN,
    DEFRANCPARAMETERS: process.env.DEFRANCPARAMETERS,
    TROVE_MANAGeER_HELPERS: process.env.TROVE_MANAGeER_HELPERS,
    SORTED_TROVES: process.env.SORTED_TROVES,
    HINT_HELPERS: process.env.HINT_HELPERS,
    Baseurl: process.env.BASE_URl,
    ChainID: "0x61",
  },
  reactStrictMode: true,
};
