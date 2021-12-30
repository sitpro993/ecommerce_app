import { useRouter } from "next/router";
import React from "react";
import Modal from "../../SystemNotifiComponent/Modal";
import Notify from "../../SystemNotifiComponent/Notify";
import SideBarAdmin from "./SidebarAdmin";
import AdminTopNav from "./TopNav";
export default function AdminLayout({ children }) {
  const router = useRouter();

  //console.log(router);
  // console.log(sidebar_items);

  return (
    <>
      <div className="layout">
        <SideBarAdmin pathname={router.pathname} />
        <div className="layout__content">
          <AdminTopNav />
          <div className="layout__content-main">
            <main>{children}</main>
          </div>
        </div>
      </div>
    </>
  );
}
