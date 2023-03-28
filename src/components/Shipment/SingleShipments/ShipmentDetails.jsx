import { Grid, Stack, Typography } from "@mui/material";
import { InfoRow } from "./InfoRow";

export const ShipmentDetails = ({ shipment }) => {
  return (
    <Grid item sm={6} xs={13}>
      <Typography variant="h4" ml={3}>
        Shipment information
      </Typography>
      <Stack
        direction="column"
        p={4}
        alignSelf="right"
        sx={{ width: "100%", height: "100%" }}
      >
        <InfoRow field="Recipient" value={shipment.recipient} />
        <InfoRow field="Box tier" value={shipment.boxTier.name} />
        <InfoRow field="Destination country" value={shipment.country.name} />
        <InfoRow field="Box color" value={shipment.boxColor} />
        <InfoRow field="Cost" value={shipment.cost} />
        <InfoRow field="Sent date" value={shipment.statuses.at(0).ts} />
      </Stack>
    </Grid>
  );
};
