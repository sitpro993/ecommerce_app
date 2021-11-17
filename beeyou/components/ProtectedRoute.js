import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { DataContext } from "../store/GlobalState";
import Loading from "./SystemNotifiComponent/Loading";
//check if you are on the client (browser) or server
const isBrowser = () => typeof window !== "undefined";

const ProtectedRoute = ({ children }) => {
  //Identify authenticated user
  const router = useRouter();
  const { state, dispatch, isLoading } = useContext(DataContext);
  const { auth } = state;

  let protectedUserRoutes = ["/checkouts", "/account"];
  let protectedAdminRoutes = ["/admin/dashboard"];

  let pathIsUserProtected = protectedUserRoutes.indexOf(router.pathname) !== -1;
  let pathIsAdminProtected =
    protectedAdminRoutes.indexOf(router.pathname) !== -1;

  useEffect(() => {
    if (isBrowser() && !auth.user && pathIsUserProtected) {
      router.push("/account/signin");
      return <Loading />;
    }
  }, [auth, pathIsUserProtected, isLoading, router]);

  useEffect(() => {
    if (isBrowser() && !auth.user && pathIsAdminProtected) router.push("/");
  }, [auth, pathIsAdminProtected, router]);

  useEffect(() => {
    if (isBrowser() && auth.user) {
      if (auth.user.role !== "admin" && pathIsAdminProtected) router.push("/");
    }
  }, [auth, pathIsAdminProtected, router]);

  if (!auth.user && (pathIsAdminProtected || pathIsAdminProtected)) {
  }

  return children;
};

export default ProtectedRoute;
