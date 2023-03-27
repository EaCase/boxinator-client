import { Navigate } from "react-router-dom";

const Protected = (props) => {
  const allow = Boolean(props.isLoggedIn)

  if (!allow) {
    return <Navigate to="/login" replace />
  }

  return props.children;
};

export default Protected;