import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Modal from "./Modal";
import Notify from "./Notify";
import ScrollOnTop from "./ScrollOnTop";

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
