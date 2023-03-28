import { Grid, Box, Typography, Link } from "@mui/material";
import { useGetShipmentsQuery } from "../services/shipment";
import OrderModal from "../components/Shipment/OrderModal";
import SimpleSlider from "../components/layout/BoxesSlider";
import CompletedOrder from "../components/Shipment/CompletedOrder";
import { useState } from "react";

import OrderForm from "../components/Shipment/OrderForm";

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
      <OrderModal showModal={showModal} closeModal={closeModal}>
        <OrderForm title="Create a new order" />
      </OrderModal>
      <Box>
        <Typography variant="h4" sx={{ mb: 3, marginTop: "20px" }}>
          Pending orders
        </Typography>
        {isSuccess && (
          <SimpleSlider shipments={shipments} openModal={openModal} />
        )}
      </Box>

      <Box>
        <Typography variant="h4" sx={{ mb: 3, marginTop: "20px" }}>
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
