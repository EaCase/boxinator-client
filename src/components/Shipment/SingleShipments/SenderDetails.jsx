import { Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { InfoRow } from "./InfoRow";

export const SenderDetails = ({ account, countries }) => {
  if (account === undefined) {
    return (
      <Grid item sm={6} xs={13}>
        <Typography variant="h4" ml={3}>
          Sender information
        </Typography>
        <Stack
          direction="column"
          alignSelf="left"
          p={4}
          sx={{ width: "100%", height: "100%" }}
        >
          <Typography>Sender information could not be loaded</Typography>
        </Stack>
      </Grid>
    );
  }

  return (
    <Grid item sm={6} xs={13}>
      <Typography variant="h4" ml={3}>
        Sender information
      </Typography>
      <Stack
        direction="column"
        alignSelf="left"
        p={4}
        sx={{ width: "100%", height: "100%" }}
      >
        <InfoRow
          field="Full name"
          value={`${account.firstName} ${account.lastName}`}
        />
        <InfoRow
          field="Country of residence"
          value={countries.find((c) => c.id === account.countryId).name}
        />
        <InfoRow field="Zip code" value={account.zipCode} />
        <InfoRow field="Email" value={account.email} />
        <InfoRow field="Phone" value={account.contactNumber} />
      </Stack>
    </Grid>
  );
};
