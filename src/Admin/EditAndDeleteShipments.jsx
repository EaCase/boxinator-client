
import { Grid } from "@mui/material";
import EditShipmentForm from "./EditShipmentForm";
import { useParams } from "react-router";
import { useGetShipmentQuery, useUpdateShipmentMutation } from "../services/shipment";
import { useNavigate } from "react-router";

const EditAndDeleteShipments = () => {

  const navigate = useNavigate();

    const { id } = useParams();

    const {data: shipment, isSuccess, isLoading, isError } = useGetShipmentQuery(id);

    const [updateShipment] = useUpdateShipmentMutation();

    if (isLoading) {
      return <div>Loading...</div>;
    }
    
    if (isError) {  
      return <div>Error loading</div>;
    }
  
    if (!isSuccess) {
      return null;
    }

    console.log(" hhhhÖ "+shipment.boxTier.name);

    const update = async (values) => {
      const body = { ...values};
      console.log("body"+body);
    await updateShipment({id, body})
      .unwrap()
      .then(() => navigate("/Admin"))
      .catch((e) => console.log(e));
  };

          return (
            <>
            <Grid item xs={12}>
              <EditShipmentForm shipment = {shipment} handleUpdate={update} />
          </Grid>
          </>
        )
    }


export default EditAndDeleteShipments;