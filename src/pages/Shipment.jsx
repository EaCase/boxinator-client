import { useState } from "react";
import { Grid, Box, Typography, Divider } from "@mui/material";
import {
  useGetCancelledShipmentsQuery,
  useGetCompletedShipmentsQuery,
  useGetShipmentsQuery,
} from "../services/shipment";
import OrderModal from "../components/Shipment/OrderModal";
import OrderCarousel from "../components/Shipment/OrderCarousel";
import CompletedOrder from "../components/Shipment/CompletedOrder";
import OrderForm from "../components/Shipment/OrderForm";
import { useTheme } from "@emotion/react";

const Shipment = () => {
  const theme = useTheme();
  const { data: pendingShipments, isSuccess: pendingShipmentsFetched } =
    useGetShipmentsQuery(undefined, { refetchOnMountOrArgChange: true });
  const { data: completedShipments } = useGetCompletedShipmentsQuery(
    undefined,
    {
      refetchOnMountOrArgChange: true,
    }
  );
  const { data: cancelledShipments } = useGetCancelledShipmentsQuery(
    undefined,
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  return (
    <Box mt={5}>
      <OrderModal showModal={showModal} closeModal={closeModal}>
        <OrderForm title="Create a new order" />
      </OrderModal>
      <Box my={5}>
        <Typography variant="h3" sx={{ my: 4 }}>
          Pending orders
        </Typography>
        {pendingShipmentsFetched && (
          <OrderCarousel shipments={pendingShipments} openModal={openModal} />
        )}
      </Box>

      <Divider flexItem />

      <Box my={5}>
        <Typography variant="h3" sx={{ my: 4 }}>
          Completed orders
        </Typography>

        <Grid container>
          {completedShipments && completedShipments.length !== 0 ? (
            completedShipments.map((shipment) => (
              <CompletedOrder key={shipment.id} {...shipment} />
            ))
          ) : (
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                ml: 3,
                color: theme.palette.secondary.main,
                fontStyle: "italic",
              }}
            >
              Your completed shipments will show here
            </Typography>
          )}
        </Grid>
      </Box>
      <Divider flexItem />
      <Box>
        <Typography variant="h3" sx={{ my: 4 }}>
          Cancelled orders
        </Typography>
        <Grid container>
          <Grid container>
            {cancelledShipments && cancelledShipments.length !== 0 ? (
              cancelledShipments.map((shipment) => (
                <CompletedOrder key={shipment.id} {...shipment} />
              ))
            ) : (
              <Typography
                variant="h6"
                sx={{
                  mb: 3,
                  ml: 3,
                  color: theme.palette.secondary.main,
                  fontStyle: "italic",
                }}
              >
                Your cancelled shipments will show here
              </Typography>
            )}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Shipment;
