import { Grid } from "@mui/material";
import { Form } from "formik";
import { Button } from "@mui/material";
import MuiFormWrapper from "../common/forms/MuiFormWrapper";
import MuiTextInput from "../common/forms/MuiTextInput";
import { Formik } from "formik";

const EditShipmentForm = ({shipment, handleUpdate}) => {
  
    const shipmentData = {
      shipmentId: shipment.id,
      boxTierId: shipment.boxTier.name,
      recipient: shipment.recipient,
      countryId: shipment.country.name,
      status: shipment.statuses[0].status,
      }
      console.log(shipmentData);

    return (
      <Formik 
      initialValues={shipmentData}
      onSubmit={(values) => handleUpdate(values)}
      >
        <Form>
          <MuiFormWrapper headerText="Update a shipment">
            <Grid container spacing={2}>

            <MuiTextInput
                  name="recipient"
                  type="text"
                  label="Recipient Name"
                />

                <MuiTextInput
                  name="boxTierId"
                  type="text"
                  label="Box tier"
                />
                
                <MuiTextInput
                  name="countryId"
                  type="text"
                  label="country id"
                />
            </Grid>
            <Grid container
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
    <>
     
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        style={{ width: "45%" }}
      >
        Save
      </Button>
      </>
              </Grid>
            </MuiFormWrapper>
          </Form>
          </Formik>
    );
  }

export default EditShipmentForm;