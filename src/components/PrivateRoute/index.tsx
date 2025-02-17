import { Navigate } from "react-router";
import { HomePage } from "../../pages";

interface PrivateRouteProps {
  isAuthenticated: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ isAuthenticated }) => {
  return isAuthenticated ? <HomePage /> : <Navigate to="/" />;
};

export default PrivateRoute;
