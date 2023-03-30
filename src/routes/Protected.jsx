import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  const auth = JSON.parse(localStorage.getItem("auth"));
  const hasRole = auth?.accountType;

  const allow = Boolean(hasRole);

  if (!allow) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default Protected;
