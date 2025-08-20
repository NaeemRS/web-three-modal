// import React from 'react'

export default function MainLoader() {
  return (
    <>
      <div
        className="gooey flex items-center justify-center bg-[#ffffffec] dark:bg-[#0e0f2eea] fixed top-0 bottom-0 left-0 right-0
      h-[100vh] w-full z-[99]"
      >
        <div className="loader" id="loader-2">
          <span className="h-[20px] w-[20px] rounded-full inline-block bg-[#9E3FFD] dark:bg-white"></span>
          <span className="h-[20px] w-[20px] rounded-full inline-block bg-[#9E3FFD] dark:bg-white"></span>
          <span className="h-[20px] w-[20px] rounded-full inline-block bg-[#9E3FFD] dark:bg-white"></span>
        </div>
      </div>
    </>
  );
}
