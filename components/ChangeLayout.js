import { useRouter } from "next/router";
import React from "react";
import AdminLayout from "./Layout/AdminLayout/Layout";
import UserLayout from "./Layout/UserLayout/Layout";

export default function ChangeLayout({ children }) {
  const router = useRouter();
  if (router.pathname.startsWith("/admin")) {
    return <AdminLayout>{children}</AdminLayout>;
  } else {
    return <UserLayout>{children}</UserLayout>;
  }
}
