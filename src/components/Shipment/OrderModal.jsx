import { useState } from "react";
import { Box, Button, CircularProgress, Modal } from "@mui/material";
import { Formik } from "formik";
import { useAddShipmentMutation } from "../../services/shipment";
import * as Yup from "yup";
import OrderForm from "./OrderForm";
import { useGetCountriesQuery, useGetTiersQuery } from "../../services/api";

const initialValues = {
  recipient: "",
  color: "",
  country: "",
};

const validationSchema = Yup.object().shape({
  recipient: Yup.string().required("Recipient is required"),
  country: Yup.object().shape({
    id: Yup.number().required("Required"),
    name: Yup.string().required("Required"),
  }),
  tier: Yup.object().shape({
    id: Yup.number().required("Required"),
    name: Yup.string().required("Required"),
  }),
  color: Yup.string().required("Select color for your shipment"),
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 4,
};

const OrderModal = () => {
  const [open, setOpen] = useState(false);
  const handleShowModal = () => setOpen(!open);

  const { data: tiers, isSuccess: tiersFetched } = useGetTiersQuery();
  const { data: countries, isSuccess: countriesFetched } =
    useGetCountriesQuery();
  const [createShipment] = useAddShipmentMutation();

  const handleCreateShipment = (values) => {
    const body = {
      ...values,
      country: values.country.id,
      tier: values.tier.id,
    };
    createShipment(body);
    setOpen(!open);
  };

  console.log(tiers, countries);

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
        {tiersFetched && countriesFetched ? (
          <Box sx={style}>
            <Formik
              initialValues={{ ...initialValues, tier: tiers[0] }}
              validationSchema={validationSchema}
              onSubmit={handleCreateShipment}
            >
              <OrderForm countries={countries} tiers={tiers} />
            </Formik>
          </Box>
        ) : (
          <CircularProgress />
        )}
      </Modal>
    </>
  );
};

export default OrderModal;
