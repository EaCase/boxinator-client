import { useState } from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import { Formik } from "formik";
import { useAddShipmentMutation } from "../../services/shipment";
import * as Yup from "yup";
import OrderForm from "./OrderForm";

const initialValues = {
  recipient: "",
  tier: "",
  color: "",
  country: "",
};

const validationSchema = Yup.object().shape({
  recipient: Yup.string().required("Recipient is required"),
  country: Yup.string().required("Destination country is required"),
  tier: Yup.string().required("You must select tier"),
  color: Yup.string().required("Select color for your shipment"),
});

const OrderModal = () => {
  const [open, setOpen] = useState(false);
  const handleShowModal = () => setOpen(!open);

  const [createShipment] = useAddShipmentMutation();

  const handleCreateShipment = (values) => {
    createShipment({ ...values });
    setOpen(!open);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    borderRadius: 4,
  };

  return (
    <>
      <Button onClick={handleShowModal}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleShowModal}
        aria-labelledby="new-shipment-modal"
        aria-describedby="modal-create-new-shipment"
        title="New shipment"
      >
        <Box sx={style}>
          <Box display="flex" mb={3}>
            <Typography margin="auto" variant="h3">
              Create a new order
            </Typography>
          </Box>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleCreateShipment}
          >
            <OrderForm />
          </Formik>
        </Box>
      </Modal>
    </>
  );
};

export default OrderModal;
