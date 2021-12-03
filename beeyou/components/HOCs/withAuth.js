import { useContext } from "react";
import { DataContext } from "../../store/GlobalState";
import LoginComponent from "../Login";

const withAuth = (Component) => {
  const Auth = (props) => {
    // Login data added to props via redux-store (or use react context for example)
    const { state, display } = useContext(DataContext);
    const { auth } = state;

    // If user is not logged in, return login component
    if (!auth.token) {
      return <LoginComponent />;
    }

    // If user is logged in, return original component
    return <Component {...props} />;
  };

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withAuth;
