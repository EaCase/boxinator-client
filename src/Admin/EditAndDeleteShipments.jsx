import { Formik } from "formik";
import { useState } from 'react';
import { Grid } from "@mui/material";
import EditShipmentForm from "./EditShipmentForm";
import { useParams } from "react-router";
import { useGetShipmentQuery } from "../services/shipment";

const EditAndDeleteShipments = () => {

    const { id } = useParams();

    const {data: shipment, isSuccess, isLoading, isError } = useGetShipmentQuery(id);

    if (isLoading) {
      return <div>Loading...</div>;
    }
    
    if (isError) {  
      return <div>Error loading</div>;
    }
  
    if (!isSuccess) {
      return null;
    }

          return (
            <>
            <Grid item xs={12}>
              <EditShipmentForm shipment = {shipment} />
          </Grid>
          </>
        )
    }


export default EditAndDeleteShipments;