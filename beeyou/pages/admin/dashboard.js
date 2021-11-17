import React, { useContext, useEffect } from "react";
import AdminLayout from "../../components/Layout/AdminLayout/Layout.js";

export default function AdminPage() {
  return <div>AdminPage</div>;
}

AdminPage.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};