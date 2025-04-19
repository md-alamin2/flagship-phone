import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Root = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-116px)]">
        <div className="w-11/12 lg:container mx-auto">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Root;
