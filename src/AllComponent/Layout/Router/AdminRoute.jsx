import UseAdmin from "../../Hooks/UseAdmin";
import  useAuth  from "../../Hooks/UseAuth";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ children }) => {

  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = UseAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace />;
};

export default AdminRoute;
