import {
	createContext,
	FC,
	ReactNode,
	useCallback,
	useContext,
	useEffect,
	useReducer,
	Dispatch,
} from 'react';
import { Actions, ActionType, StateType,AddEthereumChainParameter } from './types';
import { providers, utils } from 'ethers';
import web3Modal from './web3Modal';

interface IWallet extends StateType {
	connect: () => Promise<object>;
	disconnect: () => Promise<void>;
	dispatch: Dispatch<ActionType>;
}
const WalletContext = createContext<IWallet | undefined>(undefined);

const initialState: StateType = {
	provider: null,
	web3Provider: null,
	address: '',
	chainId: 0,
	connected: false,
	balance: '',

};

function reducer(state: StateType, action: ActionType): StateType {
	switch (action.type) {
		case Actions.SET_WEB3_PROVIDER:
			return {
				...state,
				provider: action.provider,
				web3Provider: action.web3Provider,
				address: action.address,
				chainId: action.chainId,
				connected: Boolean(action.address),
				balance: action.balance
			};
		case Actions.SET_ADDRESS:
			return {
				...state,
				address: action.address,
			};
		case Actions.SET_CHAIN_ID:
			return {
				...state,
				chainId: action.chainId,
			};
		case Actions.RESET_WEB3_PROVIDER:
			return initialState;

		default:
			throw new Error();
	}
}

// const switchNetwork = async (chainId:any) => {
// 	try {
// 		const { ethereum } = window;
// 	  await web3.currentProvider.request({
// 		method: "wallet_switchEthereumChain",
// 		params: [{ chainId: Web3.utils.toHex(chainId) }],
// 	  });
// 	  return true;
// 	} catch (switchError) {
// 	  // This error code indicates that the chain has not been added to MetaMask.
// 	  if (switchError.code === 4902 && chainId == process.env.BSCChainId) {
// 		await web3.currentProvider.request({
// 		  method: "wallet_addEthereumChain",
// 		  params: [
// 			{
// 			  chainId: Web3.utils.toHex(chainId),
// 			  rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545"],
// 			  chainName: "Bsc Testnet",
// 			  nativeCurrency: {
// 				name: "BNB",
// 				symbol: "BNB",
// 				decimals: 18,
// 			  },
// 			  blockExplorerUrls: ["https://explorer.binance.org/smart-testnet"],
// 			},
// 		  ],
// 		});
  
// 		return true;
// 	  }
// 	}
//   };

const initializeWalletStore = (): IWallet => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { provider } = state;

	const connect = useCallback(async () => {
		try {
			
		
		// This is the initial `provider` that is returned when
		// using web3Modal to connect. Can be MetaMask or WalletConnect.
		const provider = await web3Modal.connect();

		// We plug the initial `provider` into ethers.js and get back
		// a Web3Provider. This will add on methods from ethers.js and
		// event listeners such as `.on()` will be different.
		const web3Provider = new providers.Web3Provider(provider);

		const signer = web3Provider.getSigner();
		const address = await signer.getAddress();
		let balance = await web3Provider.getBalance(address);
		const balanceInEth = utils.formatEther(balance);
		const network = await web3Provider.getNetwork();
		if(network.chainId !== 97){
			await provider.request({
				method: "wallet_switchEthereumChain",
				params: [{ chainId: `0x${Number(97).toString(16)}` }],
			  });
		}

		window.localStorage.setItem('NetworkChainID', network.chainId.toString());
		dispatch({
			type: Actions.SET_WEB3_PROVIDER,
			provider,
			web3Provider,
			address,
			chainId: network.chainId,
			balance: balanceInEth,
		});
		return { address, chainId: network.chainId };
	} catch (error) {
		return {}
	}
	}, []);

	const disconnect = useCallback(async () => {
		web3Modal.clearCachedProvider();
		window.localStorage.removeItem('address');
		window.localStorage.removeItem('NetworkChainID');
		if (provider?.disconnect && typeof provider.disconnect === 'function') {
			await provider.disconnect();
		}
		dispatch({
			type: Actions.RESET_WEB3_PROVIDER,
		});
	}, [provider]);
	// Auto connect to the cached provider
	useEffect(() => {
		if (web3Modal.cachedProvider) {
			connect();
		}
	}, [connect]);

	// A `provider` should come with EIP-1193 events. We'll listen for those events
	// here so that when a user switches accounts or networks, we can update the
	// local React state with that new information.
	useEffect(() => {
		if (provider?.on) {
			const handleAccountsChanged = (accounts: string[]) => {
				// eslint-disable-next-line no-console

				dispatch({
					type: Actions.SET_ADDRESS,
					address: accounts[0],
				});
			};

			// https://docs.ethers.io/v5/concepts/best-practices/#best-practices--network-changes
			const handleChainChanged = (_hexChainId: string) => {
				window.location.reload();
			};

			const handleDisconnect = (error: { code: number; message: string }) => {
				// eslint-disable-next-line no-console
				console.log('disconnect', error);
				disconnect();
			};

			provider.on('accountsChanged', handleAccountsChanged);
			provider.on('chainChanged', handleChainChanged);
			provider.on('disconnect', handleDisconnect);

			// Subscription Cleanup
			return () => {
				if (provider.removeListener) {
					provider.removeListener('accountsChanged', handleAccountsChanged);
					provider.removeListener('chainChanged', handleChainChanged);
					provider.removeListener('disconnect', handleDisconnect);
				}
			};
		}
	}, [provider, disconnect]);
	return {
		...state,
		connect,
		disconnect,
		dispatch,
	};
};

export const WalletProvider: FC<{
	children: ReactNode;
}> = ({ children }) => {
	const value = initializeWalletStore();
	return (
		<WalletContext.Provider value={value}> {children} </WalletContext.Provider>
	);
};

export const useWalletProvider = (): IWallet => {
	const globalStore = useContext(WalletContext);
	if (!globalStore) {
		throw new Error(
			'useWalletProvider init error, you may have tried to use context outside of a provider'
		);
	}
	return globalStore;
};
