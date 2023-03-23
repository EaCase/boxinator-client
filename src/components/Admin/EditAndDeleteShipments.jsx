import { Typography } from "@mui/material";
import EditShipmentForm from "./EditShipmentForm";
import { useParams, useNavigate } from "react-router";
import {
  useGetShipmentQuery,
  useUpdateShipmentMutation,
} from "../../services/shipment";
import {
  useGetCountriesQuery,
  useGetTiersQuery,
} from "../../services/settings";
import { Container } from "@mui/system";

const EditAndDeleteShipments = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data: tiers, isSuccess: tiersFetched } = useGetTiersQuery();
  const { data: countries, isSuccess: countriesFetched } =
    useGetCountriesQuery();
  const { data: shipment, isSuccess: shipmentFetched } =
    useGetShipmentQuery(id);

  const [updateShipmentDetails] = useUpdateShipmentMutation(id);

  if (!shipmentFetched || !countriesFetched || !tiersFetched) {
    return <Typography>Details couldn't be fetched from the server</Typography>;
  }

  const updateShipment = async (values) => {
    const body = {
      recipient: values.recipient,
      boxColor: values.color,
      countryId: values.country.id,
      boxTierId: values.tier.id,
    };

    await updateShipmentDetails({ shipmentId: id, body })
      .unwrap()
      .then(() => navigate("/admin"))
      .catch((e) => console.log(e));
  };

  return (
    <>
      <Container maxWidth="sm">
        <EditShipmentForm
          shipment={shipment}
          handleUpdate={updateShipment}
          tiers={tiers}
          countries={countries}
        />
      </Container>
    </>
  );
};

export default EditAndDeleteShipments;
