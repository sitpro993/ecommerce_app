import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { DataProvider } from "../store/GlobalState";
import ProtectedRoute from "../components/ProtectedRoute";
import ChangeLayout from "../components/ChangeLayout";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <DataProvider>
      {/* <ProtectedRoute> */}
      <ChangeLayout>
        <Component {...pageProps} />
      </ChangeLayout>
      {/* </ProtectedRoute> */}
    </DataProvider>
  );
}

export default MyApp;
