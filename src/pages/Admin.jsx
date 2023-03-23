import { useDeleteShipmentMutation, useGetShipmentsQuery } from "../services/shipment";

import {
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from 'react';   
import { useNavigate } from "react-router";

const Admin = () => {

const navigate = useNavigate();

const [ deleteShipment ] = useDeleteShipmentMutation();

  const {
    data: shipments,
    isLoading,
    isSuccess,
    isError,
  } = useGetShipmentsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  if (isError) {
    return <div>Error loading shipments</div>;
  }
  
  if (!isSuccess) {
    return null;
  }

  const handleDeleteClick = async (id) => {
    const confirmed = window.confirm("Are you sure?");
    if (confirmed) {
      try {
        await deleteShipment(id).unwrap();
        navigate("/Admin");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <Container maxWidth="lg">
        <h2>All Orders</h2>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} style={{ alignItems: "center"}} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right">Box Tier</TableCell>                
                <TableCell align="right">Box Weight</TableCell>

                <TableCell align="right">Recipient</TableCell>
                <TableCell align="right">Cost</TableCell>
                <TableCell align="right">Country</TableCell>

                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Admin Functionality</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {shipments && shipments.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="td" id="rowid">{row.id}</TableCell>

                    <TableCell component="td" align="right">
                      {row.boxTier.name ? row.boxTier.name : 'not found'}
                    </TableCell>

                    <TableCell component="td" align="right">
                      {row.boxTier.weight ? row.boxTier.weight : 'not found'}
                    </TableCell>
 
                  <TableCell component="td" align="right">
                    {row.recipient}
                  </TableCell>
                  
                  <TableCell component="td" align="right">
                    {row.cost}
                  </TableCell>

                  <TableCell component="td" align="right">
                      {row.country.name ? row.country.name : 'not found'}
                    </TableCell>

                    <TableCell component="td" align="right">
                        {row.statuses[0]?.status ? row.statuses[0].status : 'not found'}
                    </TableCell> 

                  <TableCell component="td" align="right">
                  <Button
                  fullWidth variant="contained"
                  style={{ width: "80%" }}
                  onClick={() => { navigate(`/shipment/${row.id}`) }}
                  >
                  Edit
              </Button>
              <Button 
                fullWidth variant="contained"
                style={{ width: "80%" }}
                onClick={() => handleDeleteClick(row.id)}>
                Delete
              </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
</Container>
</>
)}

export default Admin;
