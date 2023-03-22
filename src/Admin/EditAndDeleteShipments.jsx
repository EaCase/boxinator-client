import { Formik } from "formik";
import { useState } from 'react';
import { Button, Grid } from "@mui/material";
import EditShipmentForm from "./EditShipmentForm";

const EditAndDeleteShipments = ({row}) => {
    const [editing, setEditing] = useState(false);

    const shipmentData = {
        shipmentId: row.id,
        boxTier: row.boxTier.name,
        boxWeight: row.boxTier.weight,
        recipientName: row.recipient,
        cost: row.cost,
        country: row.country.name,
        status: row.statuses[0].status,
        }

          const showEditing = () => {
            setEditing(true);
          };
        
          const saveEdit = (values) => {
            console.log(values)
            setEditing(false);
          };

          return (
            <Grid item xs={12}>
            <Formik initialValues={shipmentData} onSubmit={saveEdit}>
            {editing ? (
              <EditShipmentForm shipmentData={shipmentData} />
            ) : null}
          </Formik>
            <Button
            fullWidth variant="contained"
            onClick={showEditing}
            disabled={editing}
            sx={{ mt: 3, mb: 2, width: '100px', height: '50px' }}
            size="small"
          >
            Edit
          </Button>
          </Grid>
        )
    }


export default EditAndDeleteShipments;