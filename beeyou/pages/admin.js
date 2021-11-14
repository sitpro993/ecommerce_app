import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { DataContext } from "../store/GlobalState";

export default function AdminPage() {
  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;
  const router = useRouter();

  console.log(auth.user);
  //   useEffect(() => {
  //     if (Object.keys(auth).length !== 0) {
  //       if (auth.user.role !== "admin") {
  //         router.push("/");
  //         console.log("not admin");
  //       }
  //     } else {
  //       router.push("/");
  //       console.log("not login");
  //     }
  //   }, [auth, router]);
  return <div>AdminPage</div>;
}
