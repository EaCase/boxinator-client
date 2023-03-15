import { Container } from "@mui/system";
import { Route, Routes } from "react-router";
import Account from "../../pages/Account";
import Admin from "../../pages/Admin";
import Shipment from "../../pages/Shipment";
import Login from "../../pages/Login";
import Registration from "../../pages/Registration";
import ResponsiveAppBar from "./Nav";
import Testing from "../../pages/Testing";

const Main = () => {
  return (
    <Container maxWidth={false} disableGutters>
      <ResponsiveAppBar />

      <Container>
        <Routes>
          <Route path="/" element={<Testing />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/register"
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
        </Routes>
      </Container>
    </Container>
  );
};

export default Main;
