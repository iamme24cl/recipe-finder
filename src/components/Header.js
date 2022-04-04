import React from "react";

const Header = () => {
  const handleClick = () => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      window.scrollTo(0, 350);
    } else {
      window.scrollTo(0, 1000);
    }
  };

  return (
    <header className="flex justify-center items-center p-3 bg-red-100">
      <div className="mr-16 hidden md:block">
        <a className="mr-3 cursor-pointer">Login</a>
        <a className="mr-3 cursor-pointer">Register</a>
      </div>
      <input
        type="text"
        className="
        block
        w-60
        sm:w-96
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded 
        transition
        ease-in-out
        m-0
        focus:outline-none
      "
        placeholder="Keywords"
      />
      <div className="flex space-x-2 justify-center ml-1 sm:ml-3">
        <button
          onClick={handleClick}
          type="button"
          className="inline-block px-3 sm:px-6 py-2 bg-red-500 text-white font-normal sm:uppercase leading-tight rounded shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-red-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out"
        >
          search
        </button>
      </div>
    </header>
  );
};

export default Header;
