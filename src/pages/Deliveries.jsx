import { Grid, Button } from "@mui/material";
import { useState, useEffect } from "react";
import MuiFormWrapper from "../components/common/forms/MuiFormWrapper";

const Deliveries = () => {
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    async function fetchDeliveries() {
      const response = await fetch("");
      const data = await response.json();
      setDeliveries(data);
    }
    fetchDeliveries();
  }, []);

  const inDelivery = deliveries.filter(
    (delivery) => delivery.status === "ordered"
  );
  //assuming that there is a status
  const completed = deliveries.filter(
    (delivery) => delivery.status === "delivered"
  );

  return (
    <>
      {/* first grid for In Delivery */}

      <Grid container spacing={2}>
        <Grid xs={6} md={8} item>
        <MuiFormWrapper headerText="In Delivery"/>
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
        <MuiFormWrapper headerText="Completed"/>
        </Grid>
        <Grid xs={6} md={4} item></Grid>
      </Grid>
    </>
  );
};

export default Deliveries;