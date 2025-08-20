export type StateType = {
  provider?: any;
  web3Provider?: any;
  address?: string;
  chainId?: number;
  connected: boolean;
  balance?: string;
 
};

export const enum Actions {
  SET_WEB3_PROVIDER = "SET_WEB3_PROVIDER",
  SET_ADDRESS = "SET_ADDRESS",
  SET_CHAIN_ID = "SET_CHAIN_ID",
  RESET_WEB3_PROVIDER = "RESET_WEB3_PROVIDER",
  SET_SITE_OWNER = "SET_SITE_OWNER",
}

export interface AddEthereumChainParameter {
  chainId: string; // A 0x-prefixed hexadecimal string
  chainName: string;
  nativeCurrency: {
    name: string;
    symbol: string; // 2-6 characters long
    decimals: 18;
  };
  rpcUrls: string[];
  blockExplorerUrls?: string[];
  iconUrls?: string[]; // Currently ignored.
}


export type ActionType =
  | {
      type: Actions.SET_WEB3_PROVIDER;
      provider?: StateType["provider"];
      web3Provider?: StateType["web3Provider"];
      address?: StateType["address"];
      chainId?: StateType["chainId"];
      balance?: StateType["balance"];
    }
  | {
      type: Actions.SET_ADDRESS;
      address?: StateType["address"];
    }
  | {
      type: Actions.SET_CHAIN_ID;
      chainId?: StateType["chainId"];
    }
  | {
      type: Actions.RESET_WEB3_PROVIDER;
    }
  
