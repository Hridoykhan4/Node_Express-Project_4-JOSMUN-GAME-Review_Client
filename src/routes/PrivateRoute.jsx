import { Navigate, useLocation } from "react-router-dom";
import useAuthValue from "../Hooks/useAuthValue";
import Loading from "../components/Loading";

const PrivateRoute = ({ children }) => {
  const {pathname} = useLocation()  

  const { loading, user } = useAuthValue();

  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate to="/login" state={pathname}></Navigate>;
  }

  return children;
};

export default PrivateRoute;
