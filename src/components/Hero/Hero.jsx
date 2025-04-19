import React from "react";
import bannerImage from "../../assets/banner.png";

const Hero = () => {
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
        <p className="text-gray-500">
          Best place to brows, search, view details and purchase of top flagship
          phones of the current time -FlagshipPhones
        </p>
        <form>
          <input
            type="text"
            name=""
            placeholder="Search phone by name"
            className="bg-white border border-gray-300 rounded shadow-md w-2/3 h-12 px-4 mb-3 focus:outline-none focus:shadow-outline md:mr-2 md:mb-0"
          />
          <button
            href="#_"
            className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group btn"
          >
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
              Search
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
