import Layout from "../components/Layout/UserLayout/Layout";
import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import "swiper/scss";
import { DataProvider } from "../store/GlobalState";

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
