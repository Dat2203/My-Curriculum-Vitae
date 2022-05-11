import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar></Navbar>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
