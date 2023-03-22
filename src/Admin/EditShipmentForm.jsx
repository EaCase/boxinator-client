import { Grid } from "@mui/material";
import { Form } from "formik";
import { Button } from "@mui/material";
import MuiFormWrapper from "../components/common/forms/MuiFormWrapper";
import MuiTextInput from "../components/common/forms/MuiTextInput";

const EditShipmentForm = () => {

    return (
        <Form>
          <MuiFormWrapper headerText="Edit">
            <Grid container spacing={2}>
            <MuiTextInput
                  name="shipmentId"
                  type="text"
                  label="Shipment Id"
                />
                <MuiTextInput
                  name="boxTier"
                  type="text"
                  label="Box tier"
                />
                <MuiTextInput
                  name="boxWeight"
                  type="text"
                  label="Box Weight"
                />
                <MuiTextInput
                  name="recipientName"
                  type="text"
                  label="Recipient Name"
                />
                <MuiTextInput
                  name="cost"
                  type="text"
                  label="cost"
                />
                <MuiTextInput
                  name="country"
                  type="text"
                  label="country"
                />
                <MuiTextInput
                  name="status"
                  type="text"
                  label="Status"
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
    );
  }

export default EditShipmentForm;