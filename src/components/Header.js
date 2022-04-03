import React from "react";

const Header = () => {
  const handleClick = () => {
    window.scrollTo(0, 1000);
  };

  return (
    <header className="flex justify-center items-center p-3 bg-red-100">
      <div className="mr-16 hidden md:block">
        <a className="mr-3 cursor-pointer">Login</a>
        <a className="mr-3 cursor-pointer">Register</a>
      </div>
      <input
        type="text"
        placeholder="Keywords"
        className="border border-gray-300 rounded rounded-r-none py-1 px-3 focus:outline-none"
      />
      <div className="flex space-x-2 justify-center">
        <button
          onClick={handleClick}
          type="button"
          className="inline-block px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded rounded-l-none shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-red-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out"
        >
          Search
        </button>
      </div>
    </header>
  );
};

export default Header;
