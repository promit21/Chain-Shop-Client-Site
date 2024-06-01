/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";

const AdminRouter = ({ children }) => {
  const [isAdmin, isAdminLoading] = useAdmin();
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading || isAdminLoading) {
    return (
      <span className="ml-[600px] mt-[250px] p-20 loading loading-spinner loading-lg"></span>
    );
  }

  if (user && isAdmin) {
    return children;
  }
 return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRouter;
