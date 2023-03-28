import { Container } from "@mui/system";
import { Route, Routes } from "react-router";
import Account from "../../pages/Account";
import Admin from "../../pages/Admin";
import Shipment from "../../pages/Shipment";
import Login from "../../pages/Login";
import Registration from "../../pages/Registration";
import ResponsiveAppBar from "./Nav";
import SingleShipment from "../Shipment/SingleShipments/SingleShipment";
import Protected from "../../routes/Protected";
import { useSelector } from "react-redux";

const Main = (role) => {
  const hasRole = useSelector((state) => state.auth["accountType"]);

  return (
    <Container maxWidth={false} disableGutters>
      <ResponsiveAppBar />
      <Container>
        <Routes>
          <Route path="/login" element={<Login />} hasRole="false" />
          <Route
            path="/register/:token?"
            element={<Registration />}
            caseSensitive={false}
          />
          <Route
            path="/admin"
            caseSensitive={false}
            element={
              <Protected isLoggedIn={hasRole}>
                <Admin />
              </Protected>
            }
          />
          <Route
            path="/shipments"
            element={
              <Protected isLoggedIn={hasRole}>
                <Shipment />
              </Protected>
            }
            caseSensitive={false}
          />
          <Route
            path="/account"
            caseSensitive={false}
            element={
              <Protected isLoggedIn={hasRole}>
                <Account />
              </Protected>
            }
          />
          <Route
            path="/shipment/:id"
            element={<SingleShipment />}
            caseSensitive={false}
          />
        </Routes>
      </Container>
    </Container>
  );
};

export default Main;
