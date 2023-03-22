import { Grid } from "@mui/material";
import { Form } from "formik";
import { Button } from "@mui/material";
import MuiFormWrapper from "../components/common/forms/MuiFormWrapper";
import MuiTextInput from "../components/common/forms/MuiTextInput";
import { useUpdateShipmentMutation } from "../services/shipment";
import { Formik } from "formik";


const EditShipmentForm = ({shipment}) => {

  const shipmentData = {
    shipmentId: shipment.id,
    boxTier: shipment.boxTier.name,
    boxWeight: shipment.boxTier.weight,
    recipientName: shipment.recipient,
    cost: shipment.cost,
    country: shipment.country.name,
    status: shipment.statuses[0].status,
    }

  const [updateShipment] = useUpdateShipmentMutation();

    return (
      <Formik initialValues={shipmentData}>
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
          </Formik>
    );
  }

export default EditShipmentForm;