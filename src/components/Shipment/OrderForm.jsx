import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { Form } from "formik";
import MuiColorPicker from "../common/forms/MuiColorPicker";
import MuiSelectField from "../common/forms/MuiSelectField";
import MuiTextInput from "../common/forms/MuiTextInput";
import ShippingCost from "./ShipmentCost";

const OrderForm = ({ countries, tiers, title, hasError }) => {
  return (
    <>
      <Form>
        <Box>
          <Box display="flex" mb={3}>
            <Typography margin="auto" variant="h4">
              {title}
            </Typography>
          </Box>
          <Grid container>
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

export default OrderForm;
