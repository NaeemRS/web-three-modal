import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export default function Modal() {
  const [toggleMenu, showToggleMenu] = useState(false);
  const toggleClose = () => {
    showToggleMenu("");
  };
  const [toggle, setToggle] = useState(false);
  const [menu, setMenu] = useState(false);
  return (
    <>
      <button
        className=" md:inline-block inline-block border-0 bg-blue-200 py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline "
        type="button"
        onClick={() => setMenu(true)}
      >
        Modal
      </button>
      <div
        className={`${
          menu == false ? " hidden" : "inline-block"
        } fixed top-0 bg-[#0000002] z-[9999] left-0 min-h-screen flex  flex-col items-center justify-center w-full h-full`}
      >
        <div className="relative w-auto pointer-events-none">
          <div className="border-none shadow-lg relative flex  flex-col pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className=" flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5 className="text-xl font-medium leading-normal text-gray-800">
                Modal title
              </h5>
              <button
                className={` ${
                  menu == true
                    ? " custom-navbar-toggler inline-block"
                    : "hidden"
                } 
                   border-0
                   bg-transparent
                   focus:outline-none
                  focus:ring-0 focus:shadow-none
                  focus:no-underline `}
                type="button"
                onClick={() => setMenu(false)}
              >
                <FontAwesomeIcon
                  icon={faXmark}
                  className="text-[#000] w-9 h-9"
                />
              </button>
            </div>
            <div className="modal-body relative p-4">
              <p>This is a vertically centered modal.</p>
            </div>
            <div className=" flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
