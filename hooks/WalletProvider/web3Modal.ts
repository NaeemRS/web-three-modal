import WalletConnectProvider from '@walletconnect/web3-provider';
import Web3Modal from 'web3modal';



const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: process.env.INFURA_ID, // required
    },
  },
};

let web3Modal: any;

if (typeof window !== 'undefined') {
  web3Modal = new Web3Modal({
    network: 'mainnet', // optional
    cacheProvider: true,
    providerOptions, // required
  });
}
export default web3Modal;
