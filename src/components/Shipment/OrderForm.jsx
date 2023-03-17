import { Box, Button, Grid } from "@mui/material";
import { Form } from "formik";
import MuiColorPicker from "../common/forms/MuiColorPicker";
import MuiTextInput from "../common/forms/MuiTextInput";

const OrderForm = () => {
  return (
    <>
      <Form>
        <Box>
          <Grid container sx={{ marginBottom: 4 }}>
            <MuiTextInput name="recipient" type="text" label="Recipient" />
            <MuiTextInput name="tier" type="text" label="Tier" />
            <MuiTextInput
              name="country"
              type="text"
              label="Destination country"
            />
            <MuiColorPicker label="Pick a color" />
          </Grid>

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
