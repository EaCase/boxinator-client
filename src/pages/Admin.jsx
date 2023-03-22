import { useGetShipmentsQuery } from "../services/shipment";

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
import EditAndDeleteShipments from "../Admin/EditAndDeleteShipments";
import { useNavigate } from "react-router";

const Admin = () => {

const navigate = useNavigate();

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
  console.log(shipments);

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
                  <TableCell component="td">{row.id}</TableCell>

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
                  Update & Delete
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
