import { Container } from "@mui/system";
import { Route, Routes } from "react-router";
import Account from "../../pages/Account";
import Admin from "../../pages/Admin";
import Shipment from "../../pages/Shipment";
import Login from "../../pages/Login";
import Registration from "../../pages/Registration";
import ResponsiveAppBar from "./Nav";
import EditAndDeleteShipments from "../Admin/EditAndDeleteShipments";

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
          <Route path="/admin" element={<Admin />} caseSensitive={false} />
          <Route
            path="/shipments"
            element={<Shipment />}
            caseSensitive={false}
          />
          <Route path="/account" element={<Account />} caseSensitive={false} />
          <Route
            path="/shipment/:id"
            element={<EditAndDeleteShipments />}
            caseSensitive={false}
          />
        </Routes>
      </Container>
    </Container>
  );
};

export default Main;
