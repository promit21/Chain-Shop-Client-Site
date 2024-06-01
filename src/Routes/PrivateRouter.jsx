/* eslint-disable react/prop-types */

import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return (
      <span className="ml-[600px] mt-[250px] p-20 loading loading-spinner loading-lg"></span>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/logIn" state={location} replace></Navigate>;
};

export default PrivateRouter;
