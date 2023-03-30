import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const auth = JSON.parse(localStorage.getItem("auth"));
  const hasRole = auth?.accountType === "ADMIN";

  const allow = Boolean(hasRole);

  if (!allow) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default AdminRoute;
