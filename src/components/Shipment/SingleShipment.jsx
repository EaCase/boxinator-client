import {
  Grid,
  Typography,
  LinearProgress,
  Container,
  Paper,
  Box,
  Divider,
  Stepper,
  StepConnector,
  Button,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import { useParams } from "react-router";
import { useGetAccountQuery } from "../../services/account";
import {
  useDeleteShipmentMutation,
  useGetShipmentQuery,
  useUpdateShipmentMutation,
} from "../../services/shipment";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { StatusStep } from "./SingleShipments/StatusStep";
import { ShipmentDetails } from "./SingleShipments/ShipmentDetails";
import { SenderDetails } from "./SingleShipments/SenderDetails";
import { useState } from "react";
import { StatusButtonGroup } from "./SingleShipments/StatusButtonGroup";
import { useGetTiersQuery } from "../../services/settings";
import OrderModal from "./OrderModal";
import EditShipmentForm from "../Admin/EditShipmentForm";

const SingleShipment = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const role = useSelector((state) => state.auth["accountType"]);

  const [showStatusOptions, setShowStatusOptions] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const { data: shipment, isSuccess: shipmentFetched } =
    useGetShipmentQuery(id);
  const { data: account, isSuccess: accountFetched } = useGetAccountQuery();
  const { data: countries, isSuccess: countriesFetched } = useGetTiersQuery();
  const { data: tiers, isSuccess: tiersFetched } = useGetTiersQuery();

  const [deleteShipment] = useDeleteShipmentMutation();
  const [updateShipmentDetails] = useUpdateShipmentMutation();

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const toggleStatusOptions = () => setShowStatusOptions(!showStatusOptions);

  if (
    !shipmentFetched ||
    !accountFetched ||
    !countriesFetched ||
    !tiersFetched
  ) {
    return <LinearProgress />;
  }

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure? This cannot be undone.");

    if (confirmed) {
      await deleteShipment(id)
        .unwrap()
        .then(() => navigate("/shipments"))
        .catch((e) => console.log(e));
    }
  };

  const updateShipment = async (values) => {
    const body = {
      recipient: values.recipient,
      boxColor: values.color,
      countryId: values.country.id,
      boxTierId: values.tier.id,
    };

    await updateShipmentDetails({ shipmentId: id, body })
      .unwrap()
      .then(() => closeModal())
      .catch((e) => console.log(e));
  };

  return (
    <Container
      component={Paper}
      sx={{ py: 3, mt: 4, borderRadius: 4, boxShadow: 3 }}
    >
      <OrderModal showModal={showModal} closeModal={closeModal}>
        <EditShipmentForm
          shipment={shipment}
          handleUpdate={updateShipment}
          closeModal={closeModal}
          tiers={tiers}
          countries={countries}
        />
      </OrderModal>

      <Typography variant="h3" mb={3}>
        Shipment details
      </Typography>

      <Divider />
      <Grid container columns={13} py={5}>
        <SenderDetails account={account} />
        <Grid item display="flex" justifyContent="center" sm={1} xs={0}>
          <Divider
            flexItem
            orientation="vertical"
            sx={{ borderRightWidth: 2, borderRadius: 1 }}
          />
        </Grid>
        <ShipmentDetails shipment={shipment} />
      </Grid>
      <Divider />
      <Box sx={{ height: "100%", width: "100%" }}>
        <Box mt={2} mb={5}>
          <Typography ml={1}>History</Typography>
        </Box>
        <Stepper
          alternativeLabel
          orientation="horizontal"
          sx={{
            width: "100%",
            ".MuiStepConnector-root": {
              top: 2,
            },
            ".MuiStepConnector-root span": {
              borderColor: "transparent",
            },
            ".MuiStepConnector-root span::before": {
              display: "flex",
              justifyContent: "center",
              content: '"❯❯"',
            },
          }}
          connector={
            <StepConnector
              style={{
                top: 18,
                left: "calc(-50% + 40px)",
                right: "calc(50% + 40px)",
                borderTopWidth: 2,
                borderRadius: 1,
              }}
            />
          }
        >
          {shipment.statuses.map((status, index) => (
            <StatusStep index={index} status={status} />
          ))}
        </Stepper>
      </Box>

      <Box>
        <Box my={2}>
          <Divider />
          <Box display="flex" justifyContent="flex-end" mt={4}>
            {role === "ADMIN" && (
              <>
                {!showStatusOptions ? (
                  <>
                    <Button
                      variant="contained"
                      color="success"
                      size="large"
                      onClick={toggleStatusOptions}
                      sx={{ mx: 1 }}
                    >
                      Update status
                      <SystemUpdateAltIcon sx={{ ml: 1 }} />
                    </Button>
                    <Button
                      variant="contained"
                      color="success"
                      size="large"
                      onClick={() => openModal()}
                      sx={{ mx: 1 }}
                    >
                      Edit
                      <EditIcon sx={{ ml: 1 }} />
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      size="large"
                      onClick={() => handleDelete(shipment.id)}
                      sx={{ mx: 1 }}
                    >
                      Delete
                      <DeleteForeverIcon sx={{ ml: 1 }} />
                    </Button>
                  </>
                ) : (
                  <StatusButtonGroup
                    handleShowStatusOptions={toggleStatusOptions}
                    id={shipment.id}
                  />
                )}
              </>
            )}
            {role === "REGISTERED_USER" && (
              <Button variant="contained" size="large" sx={{ mx: 1 }}>
                Cancel
                <ClearIcon sx={{ ml: 1 }} />
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default SingleShipment;
