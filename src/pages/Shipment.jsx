import { Grid, Box, Typography } from "@mui/material";
import { useGetShipmentsQuery } from "../services/shipment";
import OrderModal from "../components/Shipment/OrderModal";
import SimpleSlider from "../components/layout/BoxesSlider";
import CompletedOrder from "../components/Shipment/CompletedOrder";

const Shipment = () => {
  const { data: shipments, isSuccess } = useGetShipmentsQuery();

  if (!isSuccess)
    return (
      <>
        <Typography>Shipments could not be loaded</Typography>
      </>
    );

  return (
    <>
      <OrderModal />

      <Box>
        <Typography variant="h3" sx={{ mb: 3 }}>
          Pending orders
        </Typography>
        <SimpleSlider shipments={shipments} />
      </Box>

      <Box>
        <Typography variant="h3" sx={{ mb: 3 }}>
          Completed orders
        </Typography>

        <Grid container>
          {shipments?.map((shipment) => (
            <CompletedOrder key={shipment.id} {...shipment} />
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Shipment;
