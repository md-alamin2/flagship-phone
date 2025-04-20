import React, { useState } from "react";
import bannerImage from "../../assets/banner.png";
import MainButton from "../Buttons/MainButton";

const Hero = ({handleSearch}) => {
  const [searchText, setSearchText]=useState("");
  return (
    <div className="py-12">
      <img
        src={bannerImage}
        alt="Banner-image"
        className="w-full mx-auto md:max-w-xl"
      />
      <div className="space-y-4 text-center">
        <h1 className="font-thin text-7xl text-gray-900">
          Brows, Search, view, Buy
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          Best place to brows, search, view details and purchase of top flagship
          phones of the current time -FlagshipPhones
        </p>
        <form onSubmit={(e)=>{
          handleSearch(e, searchText)
          setSearchText("")
        }} className="flex flex-col md:flex-row justify-center items-center mb-4">
          <input
            type="text"
            value={searchText}
            onChange={(e)=>setSearchText(e.target.value)}
            placeholder="Search phone by name"
            className="bg-white border border-gray-300 rounded shadow-md w-2/3 h-12 px-4 mb-3 focus:outline-none focus:shadow-outline md:mr-2 md:mb-0"
          />
          <MainButton type="submit" label={"Search"}></MainButton>
        </form>
      </div>
    </div>
  );
};

export default Hero;
