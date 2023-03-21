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

const Admin = () => {

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
    
  return (
    <>
      <Container maxWidth="lg">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right">Box Tier</TableCell>
                <TableCell align="right">Box Color</TableCell>
                <TableCell align="right">Recipient</TableCell>
                <TableCell align="right">Country</TableCell>
                <TableCell align="right">Cost</TableCell>
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
                    {row.boxTier}
                  </TableCell>
                  <TableCell component="td" align="right">
                    {row.boxColor}
                  </TableCell>
                  <TableCell component="td" align="right">
                    {row.recipient}
                  </TableCell>
                  <TableCell component="td" align="right">
                    {row.country}
                  </TableCell>
                  <TableCell component="td" align="right">
                    {row.cost}
                  </TableCell>
                  <TableCell component="td" align="right">
                    <Button> 
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