import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBox = () => {
  return (
    <div className="search-box relative w-full max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search..."
        className="border-2 border-gray-300 rounded-3xl pl-10 pr-4 py-2 h-8 ml-6 w-28 md:w-full md:ml-7 focus:outline-none focus:border-black"
      />
      <span className="absolute left-3 top-2.5 ml-6 md:ml-7 text-gray-600">
        <AiOutlineSearch />
      </span>
    </div>
  );
};

export default SearchBox;
