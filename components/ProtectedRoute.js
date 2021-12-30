import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { DataContext } from "../store/GlobalState";
import Loading from "./SystemNotifiComponent/Loading";
//check if you are on the client (browser) or server
const isBrowser = () => typeof window !== "undefined";

const ProtectedRoute = ({ children }) => {
  //Identify authenticated user
  const router = useRouter();
  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;

  // useEffect(() => {
  //   if (isBrowser() && !auth.user && router.pathname.startsWith("/admin"))
  //     router.push("/");
  // }, [auth, router]);

  // useEffect(() => {
  //   if (isBrowser() && auth.user) {
  //     if (auth.user.role !== "admin" && router.pathname.startsWith("/admin"))
  //       router.push("/");
  //   }
  // }, [auth, router]);

  // if (!auth.user && router.pathname.startsWith("/admin")) {
  //   return <Loading />;
  // }

  return children;
};

export default ProtectedRoute;
