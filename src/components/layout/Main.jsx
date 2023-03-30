import { Container } from "@mui/system";
import { Navigate, Route, Routes } from "react-router";
import Account from "../../pages/Account";
import Admin from "../../pages/Admin";
import Shipment from "../../pages/Shipment";
import Login from "../../pages/Login";
import Registration from "../../pages/Registration";
import ResponsiveAppBar from "./Nav";
import SingleShipment from "../Shipment/SingleShipments/SingleShipment";
import Protected from "../../routes/Protected";
import AdminRoute from "../../routes/AdminRoute";

const Main = () => {
  return (
    <Container maxWidth={false} disableGutters>
      <ResponsiveAppBar />
      <Container>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/register/:token?"
            element={<Registration />}
            caseSensitive={false}
          />
          <Route
            path="/admin"
            caseSensitive={false}
            element={
              <AdminRoute>
                <Admin />
              </AdminRoute>
            }
          />
          <Route
            path="/shipments"
            element={
              <Protected>
                <Shipment />
              </Protected>
            }
            caseSensitive={false}
          />
          <Route
            path="/account"
            caseSensitive={false}
            element={
              <Protected>
                <Account />
              </Protected>
            }
          />
          <Route
            path="/shipment/:id"
            element={<SingleShipment />}
            caseSensitive={false}
          />
          <Route
            path="*"
            element={<Navigate to="/login" />}
            caseSensitive={false}
          />
        </Routes>
      </Container>
    </Container>
  );
};

export default Main;
