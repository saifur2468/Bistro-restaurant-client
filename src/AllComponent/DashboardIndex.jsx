import { Navigate } from "react-router-dom";
import useAuth from "../AllComponent/Hooks/useAuth";

const DashboardIndex = () => {
  const { user } = useAuth();
  const isAdmin = user?.email === "admin@bistroboss.com";

  return isAdmin
    ? <Navigate to="/dashboard/AdminHome" replace />
    : <Navigate to="/dashboard/userHome" replace />;
};

export default DashboardIndex;