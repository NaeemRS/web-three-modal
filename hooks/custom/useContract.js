import { useState, useEffect, useCallback } from "react";
import { ethers } from "ethers";
import { useWalletProvider } from "../WalletProvider";
import BORROWER_OPERATIONS from "@/contract/borrowOptionsAbi.json";
import STABILITY_POOL from "@/contract/stabilityPoolAbi.json";
import STAKE_LOAN from "@/contract/stakeLoanTokenERC20Abi.json";
import DEFRANC_PARAMETERS from "@/contract/deFracParameters.json";
import TROVE_MANAGeER_HELPERS from "@/contract/troveManagerHelpers.json";
import SORTED_TROVES from "@/contract/sortedTroves.json";
import HINT_HELPERS from "@/contract/hintHelpers.json";
export default function useContract() {
  const { web3Provider, connected } = useWalletProvider();
  const [contract, setContract] = useState({});

  useEffect(() => {
    (async () => {
      if (connected) {
        const signer = await web3Provider?.getSigner();
        setContract({
          BORROWER: new ethers.Contract(
            process.env.BORROWER_OPERATIONS,
            BORROWER_OPERATIONS,
            signer
          ),
          STABILITY: new ethers.Contract(
            process.env.STABILITY_POOL,
            STABILITY_POOL,
            signer
          ),
          STAKE: new ethers.Contract(
            process.env.STAKE_LOAN,
            STAKE_LOAN,
            signer
          ),
          DE_FRANC: new ethers.Contract(
            process.env.DEFRANCPARAMETERS,
            DEFRANC_PARAMETERS,
            signer
          ),
          TROVE_HELPERS: new ethers.Contract(
            process.env.TROVE_MANAGeER_HELPERS,
            TROVE_MANAGeER_HELPERS,
            signer
          ),
          SORTEDTROVES: new ethers.Contract(
            process.env.SORTED_TROVES,
            SORTED_TROVES,
            signer
          ),
          HINT_HELPERS: new ethers.Contract(
            process.env.HINT_HELPERS,
            HINT_HELPERS,
            signer
          ),
        });
      }
    })();
  }, [web3Provider]);

  return contract;
}
