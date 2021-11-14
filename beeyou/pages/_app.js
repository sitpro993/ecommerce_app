import Layout from "../components/Layout";
import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.css";
import "swiper/scss";
import { DataContext, DataProvider } from "../store/GlobalState";
import { useContext } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DataProvider>
  );
}

export default MyApp;
