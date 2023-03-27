//import { useNavigate } from "react-router";
import { Navigate } from "react-router-dom";

const Protected = ({ isLoggedIn, children }) => {
  //const navigate = useNavigate();

  console.log("Is logged in: " + isLoggedIn);
  console.log(children);

  if (!isLoggedIn) {
    return <Navigate to="/Login" replace/>
  }

  return children;
};

export default Protected;