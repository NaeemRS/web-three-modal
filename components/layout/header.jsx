import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { headerData } from '@/helpers/componentData'
import { useWalletProvider } from '@/hooks/WalletProvider'
import { stringSlice } from '@/helpers/genrelFunction'
import React from 'react'

export default function Header() {
  const { connect, disconnect, address, connected } = useWalletProvider();
  const handleWalletConnect = async () => {
    await connect();
  }
  return (
    <>
      <nav className=" relative w-full flex flex-wrap items-center justify-between py-6 
navbar navbar-expand-lg navbar-light
">
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <button className="
    navbar-toggler
    text-gray-500
    border-0
    hover:shadow-none hover:no-underline
    py-2
    px-2.5
    bg-transparent
    focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
              className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path fill="currentColor"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
              </path>
            </svg>
          </button>

          <div className="collapse navbar-collapse flex-grow justify-between items-center" id="navbarSupportedContent">
            <div className="nav-item mr-5  relative">
              <button >
                <FontAwesomeIcon icon={faSearch} className='absolute text-[#9BA4C2] left-6 top-5 w-[16px]' />
              </button>
              <input type='text'
                className="py-4 px-5 w-full 2xl:w-[356px] lg:w-ful md pl-[48px] focus:outline-none focus:border-none  rounded-[24px]"
                placeholder='Search' />
            </div>
            <ul className="navbar-nav flex flex-col pl-0 list-style-none">
              {/* <li className="nav-item mr-5  relative">
                <button >
                  <FontAwesomeIcon icon={faSearch} className='absolute text-[#9BA4C2] left-6 top-5 w-[16px]' />
                </button>
                <input type='text'
                  className="py-4 px-5 w-full lg:w-[356px] pl-[48px] focus:outline-none focus:border-none  rounded-[24px]"
                  placeholder='Search' />
              </li>  */}
              {headerData.map((item, index) => (
                <li key={index} className="nav-item pr-2">
                  <button className='h-[56px] px-5 flex items-center rounded-[24px] bg-[#fff]'>
                    <img src={item.logo} className=' text-[#9BA4C2]  w-[32px] mr-2' />
                    <span>
                      {item.name}
                      <b>{item.value}</b>
                    </span>
                  </button>
                </li>
              ))}
              <li className="nav-item pr-2">
                <button className='h-[56px] px-5 flex items-center rounded-[24px] bg-[#F8F0FF]' onClick={handleWalletConnect}>
                  <img src={'/images/sidebar-icon/walletIcon.png'} className=' text-[#9E3FFD]  w-[32px] mr-3' />
                  <span>
                    {connected ? stringSlice(address, 6, 3) : "Connect wallet"}

                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
