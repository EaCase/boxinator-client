import { useState } from "react";
import {
  Button,
  Box,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import {
  useGetShipmentsQuery,
  useAddShipmentMutation,
  useDeleteShipmentMutation,
} from "../services/shipment";
import OrderModal from "../components/Shipment/OrderModal";

const Testing = () => {
  const { data, isSuccess } = useGetShipmentsQuery();
  const [createShipment] = useAddShipmentMutation();
  const [deleteShipment] = useDeleteShipmentMutation();

  const [name, setName] = useState("");

  const addShipment = async (e) => {
    e.preventDefault();

    await createShipment({
      name,
      country: "Finland",
      status: "Pending",
      date: "1.1.1970",
    });
    setName("");
  };

  if (!isSuccess) return <></>;

  return (
    <>
      <Container maxWidth="lg">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Country</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Date</TableCell>
                <TableCell align="right">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="td">{row.id}</TableCell>
                  <TableCell component="td" align="right">
                    {row.name}
                  </TableCell>
                  <TableCell component="td" align="right">
                    {row.country}
                  </TableCell>
                  <TableCell component="td" align="right">
                    {row.status}
                  </TableCell>
                  <TableCell component="td" align="right">
                    {row.date}
                  </TableCell>
                  <TableCell component="td" align="right">
                    {row.size}
                  </TableCell>
                  <TableCell component="td" align="right">
                    <Button onClick={() => deleteShipment(row.id)}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box mt={5}>
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></TextField>
          <Button onClick={addShipment}>Add shipment</Button>
        </Box>
      </Container>

      <OrderModal />
    </>
  );
};

export default Testing;
