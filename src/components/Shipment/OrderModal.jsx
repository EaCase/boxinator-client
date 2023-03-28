import { Box, CircularProgress, Modal } from "@mui/material";
import { Formik } from "formik";
import { useAddShipmentMutation } from "../../services/shipment";
import * as Yup from "yup";
import {
  useGetCountriesQuery,
  useGetTiersQuery,
} from "../../services/settings";
import React from "react";
import { getShipmentFields } from "../../utils/utils";

const initialValues = {
  recipient: "",
  color: "",
  country: "",
  email: "",
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

const OrderModal = ({ showModal, closeModal, originalColor, children }) => {
  const { data: tiers, isSuccess: tiersFetched } = useGetTiersQuery();
  const { data: countries, isSuccess: countriesFetched } =
    useGetCountriesQuery();
  const [createShipment, isError] = useAddShipmentMutation();

  const handleCreateShipment = async (values) => {
    const body = getShipmentFields(values);
    const params = {};

    if (values.email) {
      console.log(values.email);
      params["email"] = values.email;
    }

    await createShipment({ body, params })
      .unwrap()
      .then(() => closeModal())
      .catch((e) => console.log("Something went wrong", e));
  };

  return (
    <>
      <Modal
        open={showModal}
        onClose={() => closeModal()}
        aria-labelledby="new-shipment-modal"
        aria-describedby="modal-create-new-shipment"
      >
        {tiersFetched && countriesFetched ? (
          <Box sx={style}>
            <Formik
              initialValues={{ ...initialValues, tier: tiers[0] }}
              validationSchema={validationSchema}
              onSubmit={handleCreateShipment}
            >
              {React.cloneElement(children, {
                tiers: tiers,
                countries: countries,
                hasError: isError.error,
              })}
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
