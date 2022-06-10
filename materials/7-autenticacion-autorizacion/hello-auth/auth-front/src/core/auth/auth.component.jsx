import { useAuth } from "./auth.hook";
import { useLocation, Navigate } from "react-router-dom";

function RequireAuth({ children }) {
    const {isAuth} = useAuth();
    const location = useLocation();
  
    if (!isAuth) { // si no estamos autenticados redirigimos al login
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      return <Navigate to="/auth/login" state={{ from: location }} replace />;
    }
  
    return children;
  }

  export default RequireAuth;