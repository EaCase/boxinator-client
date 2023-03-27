import { Container } from "@mui/system";
import { Route, Routes } from "react-router";
import Account from "../../pages/Account";
import Admin from "../../pages/Admin";
import Shipment from "../../pages/Shipment";
import Login from "../../pages/Login";
import Registration from "../../pages/Registration";
import ResponsiveAppBar from "./Nav";
import EditAndDeleteShipments from "../Admin/EditAndDeleteShipments";
import SingleShipment from "../Shipment/SingleShipment";
import Protected from "../../routes/Protected";
import { useSelector } from 'react-redux';
import { findNonSerializableValue } from "@reduxjs/toolkit";

const Main = () => {

  const hasRole = useSelector((state) => state.auth['accountType']);
  let hasRoleoolena = Boolean;

  if (hasRole === 'admin') {
    hasRoleoolena = true;
  }

  console.log("hasrole"+hasRole)
  console.log("fds"+hasRoleoolena)

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
         <Route path="/Account" 
       caseSensitive={false} 
       element={<Protected isLoggedIn={hasRoleoolena}><Account /></Protected>} />
          <Route
            path="/shipment/:id"
            element={<EditAndDeleteShipments />}
            caseSensitive={false}
          />
          <Route path="/oneShipment/:id" element={<SingleShipment />} />
        </Routes>
      </Container>
    </Container>
  );
};

export default Main;
