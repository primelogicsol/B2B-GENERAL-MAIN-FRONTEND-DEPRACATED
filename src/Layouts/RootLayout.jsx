/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet,useLocation } from "react-router-dom";
// Shared-Components
import Navbar from "../components/Shared-Components/Navbar";
import MobileMenu from "../components/Shared-Components/Mobile_Menu";
import FooterArea from "../components/Shared-Components/FooterArea";
// Helpers
import DynamicTitle from "../utils/DocumentTitle";
import Cursor from "../utils/Cursor";
import ScrollToTopButton from "../utils/ScrollToTop";
import { ToastContainer } from "react-toastify";


const RootLayout = () => {
  const location = useLocation();
  const hideHeaderFooterOn = ['/con_dash2','/con_cmplt'];
  return (
    <div>
      <ToastContainer/>
      <DynamicTitle />
      {/* <ScrollToTopButton /> */}
      <Cursor />
      {!hideHeaderFooterOn.includes(location.pathname) && <Navbar />}
      {/* <MobileMenu /> */}
      <>
        <Outlet />
      </>
      
      {!hideHeaderFooterOn.includes(location.pathname) && <FooterArea />}
    </div>
  );
};

export default RootLayout;
