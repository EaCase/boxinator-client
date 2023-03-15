import { Grid, Button } from "@mui/material";
import { useState, useEffect } from "react";
import MuiFormWrapper from "../components/common/forms/MuiFormWrapper";
import { useGetShipmentsQuery } from "../services/shipment";

const Shipment = () => {
  const { data: shipments, isLoading, isSuccess, isError } = useGetShipmentsQuery();

  /*
  const [shipments, setShipments] = useState([]);

  useEffect(() => {
    async function fetchShipments() {
      const response = await fetch("");
      const data = await response.json();
      setShipments(data);
    }
    fetchShipments();
  }, []);
  */

  const inDelivery = shipments.filter(
    (shipment) => shipment.status === "ordered"
  );

  //assuming that there is a status
  const completed = shipments.filter(
    (shipment) => shipment.status === "shipped"
  );

  return (
    <>
      {/* first grid for In Delivery */}

      <Grid container spacing={2}>
        <Grid xs={6} md={8} item>
          <MuiFormWrapper headerText="In Delivery" />
          <ul>
            {inDelivery.map(shipment => (
              <li key={shipment.id}>{shipment.name}</li>
            ))}
          </ul>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 4, mb: 2 }}
          >
            + New Order
          </Button>
        </Grid>
      </Grid>

      {/* second grid for Completed */}

      <Grid container spacing={2}>
        <Grid xs={6} md={8} item>
          <MuiFormWrapper headerText="Completed" />
          <ul>
            {completed.map(shipment => (
              <li key={shipment.id}>{shipment.name}</li>
            ))}
          </ul>
        </Grid>
        <Grid xs={6} md={4} item></Grid>
      </Grid>
    </>
  );
};

export default Shipment;