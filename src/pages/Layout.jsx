import React from "react";
import Navabar from "../layout/Navabar";
import { Outlet } from "react-router-dom";
import Footer from "../layout/Footer";

export default function Layout() {
  return (
    <div>
      <Navabar />
      <Outlet />
      <Footer />
    </div>
  );
}
