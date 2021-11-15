import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Modal from "../../SystemNotifiComponent/Modal";
import Notify from "../../SystemNotifiComponent/Notify";
import ScrollOnTop from "../../SystemNotifiComponent/ScrollOnTop";

function Layout({ children }) {
  return (
    <>
      <Header />
      <ScrollOnTop />
      <Notify />
      <Modal />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
