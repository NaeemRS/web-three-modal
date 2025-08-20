import { IChainData } from './types';

const supportedChains: IChainData[] = [
	{
		name: 'Ethereum Mainnet',
		short_name: 'eth',
		logo: '/images/home/ethereum.svg',
		chain: 'ETH',
		network: 'mainnet',
		chain_id: 1,
		network_id: 1,
		rpc_url: 'https://mainnet.infura.io/v3/%API_KEY%',
		scan_link: 'https://etherscan.io/address/',
		native_currency: {
			symbol: 'ETH',
			name: 'Ethereum',
			decimals: '18',
			contractAddress: '',
			balance: '',
		},
	},
	
	{
		name: 'Binance Smart Chain',
		short_name: 'bsc',
		logo: '/images/home/binance.svg',
		chain: 'smartchain',
		network: 'mainnet',
		chain_id: 56,
		network_id: 56,
		rpc_url: 'https://bsc-dataseed1.defibit.io/',
		scan_link: 'https://bscscan.com/address/',
		native_currency: {
			symbol: 'BNB',
			name: 'BNB',
			decimals: '18',
			contractAddress: '',
			balance: '',
		},
	},
	{
		name: 'Binance Smart Chain Test',
		short_name: 'bsc test',
		logo: '/images/home/binance.svg',
		chain: 'smartchain test',
		network: 'BSC Testnet',
		chain_id: 97,
		network_id: 97,
		rpc_url: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
		scan_link: 'https://testnet.bscscan.com/address/',
		native_currency: {
			symbol: 'BNB',
			name: 'BNB',
			decimals: '18',
			contractAddress: '',
			balance: '',
		},
	},
];

export default supportedChains;
