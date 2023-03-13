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
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} caseSensitive={false} />
          <Route path="/admin" element={<Admin />} caseSensitive={false} />
          <Route path="/deliveries" element={<Deliveries />} caseSensitive={false} />
          <Route path="/account" element={<Account />} caseSensitive={false} />
        </Routes>
      </Container>
    </Container>
  );
};

export default Main;
