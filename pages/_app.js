import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { DataProvider } from "../store/GlobalState";
import UserLayout from "../components/Layout/Layout";
function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <DataProvider>
      <UserLayout>
        <Component {...pageProps} />
      </UserLayout>
    </DataProvider>
  );
}

export default MyApp;
