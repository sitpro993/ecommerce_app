import Layout from "../components/Layout/UserLayout/Layout";
import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import "swiper/scss";
import { DataProvider } from "../store/GlobalState";
import ProtectedRoute from "../components/ProtectedRoute";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <DataProvider>
      <ProtectedRoute>{getLayout(<Component {...pageProps} />)}</ProtectedRoute>
    </DataProvider>
  );
}

export default MyApp;
