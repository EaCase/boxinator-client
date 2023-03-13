import { Container } from "@mui/system";
import { Route, Routes } from "react-router";
import Account from "../../pages/Account";
import Admin from "../../pages/Admin";
import Deliveries from "../../pages/Deliveries";
import Login from "../../pages/Login";
import Registration from "../../pages/Registration";
import ResponsiveAppBar from "./Nav";
import { useDispatch } from "react-redux";
import { addAll } from "../../state/shipment/shipmentSlice";
import { useEffect } from "react";

const shipments = [{ name: "test1", quantity: 1 }, { name: "test2", quantity: 2 }];

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addAll(shipments));

  }, [dispatch]);

  return (
    <Container maxWidth={false} disableGutters>
      <ResponsiveAppBar />

      <Container>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Deliveries" element={<Deliveries />} />
          <Route path="/Account" element={<Account />} />
        </Routes>
      </Container>
    </Container>
  );
};

export default Main;
