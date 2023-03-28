import { useState } from "react";
import { Grid, Box, Typography } from "@mui/material";
import {
  useGetCancelledShipmentsQuery,
  useGetCompletedShipmentsQuery,
  useGetShipmentsQuery,
} from "../services/shipment";
import OrderModal from "../components/Shipment/OrderModal";
import OrderCarousel from "../components/Shipment/OrderCarousel";
import CompletedOrder from "../components/Shipment/CompletedOrder";
import OrderForm from "../components/Shipment/OrderForm";

const Shipment = () => {
  const { data: pendingShipments, isSuccess: pendingShipmentsFetched } =
    useGetShipmentsQuery({});
  const { data: completedShipments, isSuccess: completedShipmentsFetched } =
    useGetCompletedShipmentsQuery();
  const { data: cancelledShipments, isSuccess: cancelledShipmentsFetched } =
    useGetCancelledShipmentsQuery();

  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  return (
    <Box mt={5}>
      <OrderModal showModal={showModal} closeModal={closeModal}>
        <OrderForm title="Create a new order" />
      </OrderModal>
      <Box>
        <Typography variant="h3" sx={{ mb: 3, marginTop: "20px" }}>
          Pending orders
        </Typography>
        {pendingShipmentsFetched && (
          <OrderCarousel shipments={pendingShipments} openModal={openModal} />
        )}
      </Box>

      <Box>
        <Typography variant="h3" sx={{ mb: 3, marginTop: "20px" }}>
          Completed orders
        </Typography>

        <Grid container>
          {completedShipmentsFetched &&
            completedShipments.map((shipment) => (
              <CompletedOrder key={shipment.id} {...shipment} />
            ))}
        </Grid>

        <Typography variant="h3" sx={{ mb: 3, marginTop: "20px" }}>
          Cancelled orders
        </Typography>
        <Grid container>
          {cancelledShipmentsFetched &&
            cancelledShipments.map((shipment) => (
              <CompletedOrder key={shipment.id} {...shipment} />
            ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Shipment;
