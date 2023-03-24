import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { Form } from "formik";
import MuiColorPicker from "../common/forms/MuiColorPicker";
import MuiSelectField from "../common/forms/MuiSelectField";
import MuiTextInput from "../common/forms/MuiTextInput";
import ShippingCost from "./ShipmentCost";

const GuestOrderForm = ({ countries, tiers, hasError }) => {
  return (
    <>
      <Form>
        <Box>
          <Box display="flex" mb={3}>
            <Typography margin="auto" variant="h4">
              Create a new order
            </Typography>
          </Box>

          <Grid container>
            <MuiTextInput
              name="email"
              type="email"
              label="Your email address"
            />
            <MuiTextInput name="recipient" type="text" label="Recipient" />
            <MuiSelectField sm={5} name="tier" label="Tier" options={tiers} />
            <Grid item sm={1} />
            <MuiSelectField
              sm={6}
              name="country"
              label="Destination country"
              options={countries}
            />
            <MuiColorPicker label="Pick a color" />
          </Grid>

          <Divider sx={{ my: 2 }} />

          <ShippingCost />

          <Divider sx={{ my: 2 }} />

          {hasError && (
            <Typography my={1} align="center" color="red" fontSize={18}>
              {hasError.data.message}
            </Typography>
          )}

          <Button
            fullWidth
            variant="contained"
            type="submit"
            sx={{ minHeight: 60 }}
          >
            Send box
          </Button>
        </Box>
      </Form>
    </>
  );
};

export default GuestOrderForm;
