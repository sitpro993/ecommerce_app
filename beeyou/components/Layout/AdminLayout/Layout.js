import React from "react";
import Modal from "../../SystemNotifiComponent/Modal";
import Notify from "../../SystemNotifiComponent/Notify";
import ScrollOnTop from "../../SystemNotifiComponent/ScrollOnTop";
import Footer from "../UserLayout/Footer";
import Header from "../UserLayout/Header";

export default function AdminLayout({ children }) {
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
