import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <NavBar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
