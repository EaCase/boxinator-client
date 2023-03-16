import { Box, Button, Grid, Modal, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import { useState } from "react";
import { ChromePicker } from "react-color";
import { useAddShipmentMutation } from "../../services/shipment";
import MuiColorPicker from "../common/forms/MuiColorPicker";
import MuiFormWrapper from "../common/forms/MuiFormWrapper";
import MuiTextInput from "../common/forms/MuiTextInput";

const initialValues = {
  recipient: "",
  tier: "",
  color: "",
  country: "",
};

const OrderModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [createShipment] = useAddShipmentMutation();

  const handleCreateShipment = (values) => {
    createShipment({ ...values });
  };
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: 4
  };

  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Formik initialValues={initialValues} onSubmit={handleCreateShipment}>
            <Form>
              <Box>

                  <MuiTextInput
                    name="recipient"
                    type="text"
                    label="Recipient"
                  />
                  <MuiTextInput
                    name="tier"
                    type="text"
                    label="Tier"
                  />
                  <MuiTextInput
                    name="country"
                    type="text"
                    label="Destination country"
                  />
                  <MuiColorPicker />
                  <Button fullWidth variant="contained" type="submit">Send a shipment</Button>

              </Box>

            </Form>

          </Formik>
        </Box>
      </Modal>
    </>
  );
};

export default OrderModal;
