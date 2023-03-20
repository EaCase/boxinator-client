import { Box, Chip, Grid, Typography, useTheme } from "@mui/material";

const PendingOrder = ({ shipment }) => {
  const theme = useTheme();

  return (
    <>
      <Box
        key={shipment.id}
        sx={{
          boxShadow: 3,
          border: 1,
          borderColor: theme.palette.secondary.main,
          borderRadius: 2,
          p: 2,
        }}
      >
        <Grid container direction="row" justifyContent="space-between">
          <Grid item>
            <Grid container display="flex" flexDirection="column">
              <Grid item>
                <Typography fontWeight={700} fontSize={18}>
                  {shipment.boxTier.name}
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ color: theme.palette.secondary.main, ml: 1 }}>
                  {shipment.recipient}
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ color: theme.palette.secondary.main, ml: 1 }}>
                  {shipment.boxTier.weight} kg
                </Typography>
              </Grid>
              <Grid item>
                <Chip
                  label={shipment.statuses[0].status.toLowerCase()}
                  sx={{
                    mt: 2,
                    p: 1,
                    fontWeight: 600,
                    color: theme.palette.secondary.dark,
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography>{shipment.cost}</Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default PendingOrder;
