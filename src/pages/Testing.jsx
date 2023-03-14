import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useGetShipmentsQuery } from "../services/shipment";

const Testing = () => {
  const { data, isSuccess } = useGetShipmentsQuery();

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
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="td">
                    {row.id}
                  </TableCell>
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
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Testing;
