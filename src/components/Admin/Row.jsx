import { Edit } from "@mui/icons-material";
import { Button, TableCell, TableRow } from "@mui/material";

const Row = ({ row, handleShow }) => {
  return (
    <TableRow key={row.id} sx={{ height: 73 }}>
      <TableCell>{row.id}</TableCell>
      <TableCell>{row.name}</TableCell>
      <TableCell align="right">{row.shippingMultiplier}</TableCell>
      <TableCell align="right">
        <Button
          size="small"
          onClick={() => handleShow(row.id)}
          variant="contained"
        >
          <Edit size="large" />
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default Row;
