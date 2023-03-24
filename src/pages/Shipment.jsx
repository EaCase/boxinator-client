import { Grid, Box, Typography, Link } from "@mui/material";
import { useGetShipmentsQuery } from "../services/shipment";
import OrderModal from "../components/Shipment/OrderModal";
import SimpleSlider from "../components/layout/BoxesSlider";
import CompletedOrder from "../components/Shipment/CompletedOrder";
import { useState } from "react";
import SingleShipment from "../components/Shipment/SingleShipment";

const Shipment = () => {
  const { data: shipments, isSuccess } = useGetShipmentsQuery({
    accountId: 1,
    from: "2023-01-01",
    to: "2023-12-31",
  });

  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  return (
    <>
      <OrderModal showModal={showModal} closeModal={closeModal} />

      <Box>
        <Typography variant="h3" sx={{ mb: 3 }}>
          Pending orders
        </Typography>
        {isSuccess && (
          <SimpleSlider shipments={shipments} openModal={openModal} />
        )}
      </Box>

      <Box>
        <Typography variant="h3" sx={{ mb: 3 }}>
          Completed orders
        </Typography>

        <Grid container>
          {isSuccess &&
            shipments?.map((shipment) => (
              <CompletedOrder key={shipment.id} {...shipment} />
            ))}
        </Grid>
      </Box>
    </>
  );
};

export default Shipment;
