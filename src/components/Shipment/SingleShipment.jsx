import { Grid, Typography, Button } from "@mui/material";
import { useParams } from "react-router";
import { useDeleteShipmentMutation, useGetShipmentQuery } from "../../services/shipment";
import { useNavigate } from "react-router";

const SingleShipment = () => {

    const { id } = useParams();

    const navigate = useNavigate();

    const { data: shipment, isSuccess, isError, isLoading } = useGetShipmentQuery(id);

    const [deleteShipment] = useDeleteShipmentMutation();

    if (!isSuccess || isError) {
        return "Error getting shipment";
    }

    if (isLoading) {
        return "Loading...";
    }

    const handleCancel = async (id) => {
        const confirmed = window.confirm("Are you sure? This cannot be undone.");
        if (confirmed) {
          try {
            await deleteShipment(id).unwrap();
            navigate("/shipments");
          } catch (error) {
            console.log(error);
          }
        }
      };

    return (
        <>
        <Typography variant="h4">Your shipment</Typography>
        <Grid
            container
            spacing={6}
            sx={{ gap: 3 }}
            style={{ verticalAlign: "middle", marginRight: 100, marginTop: 30 }}
        >
            <Grid item xs={5}>
            <Typography variant="h5">Recipient:</Typography>
            <Typography variant="body1">{shipment.recipient}</Typography>
            </Grid>
            <Grid item xs={5}>
            <Typography variant="h5">Box Tier:</Typography>
            <Typography variant="body1">{shipment.boxTier.name}</Typography>
            </Grid>
            <Grid item xs={5}>
            <Typography variant="h5">Country:</Typography>
            <Typography variant="body1">{shipment.country.name}</Typography>
            </Grid>
            <Grid item xs={5}>
            <Typography variant="h5">Box Color:</Typography>
            <Typography variant="body1">{shipment.boxColor}</Typography>
            </Grid><Grid item xs={5}>
            <Typography variant="h5">Cost:</Typography>
            <Typography variant="body1">{shipment.cost}</Typography>
            </Grid><Grid item xs={5}>
            <Typography variant="h5">Status:</Typography>
            <Typography variant="body1">{shipment.statuses[0].status}</Typography>
            </Grid>
            <Button
                fullWidth
                variant="contained"
                onClick={() => handleCancel(shipment.id)}
                sx={{ mt: 3, mb: 2, width: "100px", height: "50px" }}
                size="small"
            >
                Cancel Order
            </Button>

        </Grid>
        </>                        
  );
};


export default SingleShipment;