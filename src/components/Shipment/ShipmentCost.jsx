import { Air, LocalShipping } from "@mui/icons-material";
import { Grid, Typography, useTheme } from "@mui/material";
import { useField } from "formik";
import { useEffect } from "react";
import { useGetShipmentCostQuery } from "../../services/shipment";

const ShipmentCost = () => {
  const theme = useTheme();
  const [country] = useField("country");
  const [tier] = useField("tier");

  const {
    data: shippingCost,
    isSuccess: costFetched,
    refetch: refetchShippingCost,
  } = useGetShipmentCostQuery(
    { boxTierId: tier.value.id, countryId: country.value.id },
    {
      skip: !country.value.id,
    }
  );

  useEffect(() => {
    if (country.value.id && tier.value.id) {
      refetchShippingCost();
    }
  }, [country.value.id, tier.value.id]);

  return (
    <>
      <Typography sx={{ color: theme.palette.secondary.light, mb: 1 }}>
        Details
      </Typography>
      <Grid container item>
        <Grid item xs={4}>
          <Typography fontWeight={700}>{tier.value.name}</Typography>
          <Typography fontWeight={700}>{country.value.name}</Typography>
        </Grid>
        <Grid
          item
          xs={3}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Air fontSize="large" style={{ transform: "rotate(180deg)" }} />
          <LocalShipping fontSize="large" />
        </Grid>
        <Grid
          item
          xs={5}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography fontSize={24}>
            {costFetched ? `${shippingCost.amount} Kr` : "---"}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default ShipmentCost;
