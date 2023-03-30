import { Formik, Form } from "formik";
import { Box, Button, Grid, Typography } from "@mui/material";
import MuiTextInput from "../../common/forms/MuiTextInput";
import MuiSelectField from "../../common/forms/MuiSelectField";
import MuiColorPicker from "../../common/forms/MuiColorPicker";

const EditShipmentForm = ({
  shipment,
  tiers,
  countries,
  closeModal,
  handleUpdate,
}) => {
  const initialValues = {
    recipient: shipment.recipient,
    tier: tiers.find((item) => item.id === shipment.boxTier.id),
    country: countries.find((item) => item.id === shipment.country.id),
    color: shipment.boxColor,
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => handleUpdate(values)}
    >
      <Form>
        <Box>
          <Box display="flex" mb={3}>
            <Typography margin="auto" variant="h4">
              Edit shipment information
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
            <MuiColorPicker
              label="Pick a color"
              originalColor={shipment.boxColor}
            />
          </Grid>

          <Grid container sx={{ mt: 3 }}>
            <Grid item xs={5}>
              <Button
                fullWidth
                variant="contained"
                type="submit"
                sx={{ minHeight: 40 }}
              >
                Save
              </Button>
            </Grid>
            <Grid item xs={1} />
            <Grid item xs={6}>
              <Button
                fullWidth
                variant="contained"
                sx={{ minHeight: 40 }}
                onClick={() => closeModal()}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Form>
    </Formik>
  );
};

export default EditShipmentForm;
