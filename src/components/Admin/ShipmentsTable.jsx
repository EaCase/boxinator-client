import { DeleteForever, Edit } from "@mui/icons-material";
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useDeleteShipmentMutation } from "../../services/shipment";
import { TablePaginationActions } from "./PaginationMenu";

const Row = ({ row }) => {
  const navigate = useNavigate();
  const [deleteShipment] = useDeleteShipmentMutation();

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure? This action will delete the shipment."
    );

    if (confirmed) {
      await deleteShipment(id)
        .unwrap()
        .catch((e) => console.log(e));
    }
  };

  return (
    <TableRow key={row.id}>
      <TableCell align="left">{row.id}</TableCell>
      <TableCell>{row.boxTier.name}</TableCell>
      <TableCell>{row.boxTier.weight} kg</TableCell>
      <TableCell>{row.recipient}</TableCell>
      <TableCell>{row.cost}</TableCell>
      <TableCell>{row.country.name}</TableCell>
      <TableCell>{row.statuses.at(-1).status}</TableCell>
      <TableCell align="right">
        <Box display="flex">
          <Button
            variant="contained"
            size="small"
            sx={{ mr: 1 }}
            onClick={() => {
              navigate(`/shipment/${row.id}`);
            }}
          >
            <Edit fontSize="small" />
          </Button>
          <Button
            variant="contained"
            size="small"
            color="error"
            onClick={() => {
              handleDelete(row.id);
            }}
          >
            <DeleteForever fontSize="small" />
          </Button>
        </Box>
      </TableCell>
    </TableRow>
  );
};

const ShipmentsTable = ({ shipments }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - shipments.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="Countries table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Box tier</TableCell>
              <TableCell>Weight</TableCell>
              <TableCell>Recipient</TableCell>
              <TableCell>Cost</TableCell>
              <TableCell>Destination</TableCell>
              <TableCell>Last status</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? shipments.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : shipments
            ).map((row) => (
              <Row row={row} />
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[10, 20, 50, { label: "All", value: -1 }]}
                colSpan={3}
                count={shipments.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
};

export default ShipmentsTable;
