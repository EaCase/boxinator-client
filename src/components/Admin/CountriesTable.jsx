import { Edit } from "@mui/icons-material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import {
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
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useUpdateCountryMutation } from "../../services/settings";
import { TablePaginationActions } from "./PaginationMenu";

const Row = ({ row, handleShow }) => {
  return (
    <TableRow key={row.id} sx={{ height: 73 }}>
      <TableCell component="th" scope="row">
        {row.id}
      </TableCell>
      <TableCell component="th" scope="row">
        {row.name}
      </TableCell>
      <TableCell component="th" scope="row" align="right">
        {row.modifier}01293
      </TableCell>
      <TableCell component="th" scope="row" align="right">
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

const EditableRow = ({ row, handleShow }) => {
  const [multiplier, setMultiplier] = useState(123);
  const [error, setError] = useState("");
  const [updateCountry] = useUpdateCountryMutation();

  const handleUpdate = async ({ row }) => {
    if (isNaN(multiplier)) {
      setError("Modifier needs to be a number");
      return;
    }
  };

  return (
    <TableRow key={row.id} sx={{ height: 65 }}>
      <TableCell>{row.id}</TableCell>
      <TableCell>{row.name}</TableCell>
      <TableCell align="right">
        <TextField
          name="modifier"
          size="small"
          defaultValue={row.modifier}
          onChange={(e) => setMultiplier(e.target.value)}
          error={error}
          helperText={error}
          inputProps={{
            inputMode: "numeric",
            pattern: "[0-9]*",
            style: { textAlign: "right" },
          }}
          sx={{ width: 100 }}
        />
      </TableCell>
      <TableCell align="right">
        <Button
          color="success"
          variant="contained"
          onClick={() => handleUpdate(row)}
        >
          <CheckIcon />
        </Button>
        <Button
          variant="contained"
          onClick={() => handleShow(0)}
          sx={{ marginLeft: 2 }}
        >
          <CloseIcon />
        </Button>
      </TableCell>
    </TableRow>
  );
};

const CountriesTable = ({ countries }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [editRow, setEditRow] = useState(0);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - countries.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="Countries table">
        <TableHead>
          <TableRow>
            <TableCell component="th" scope="row" sx={{ fontWeight: 700 }}>
              ID
            </TableCell>
            <TableCell component="th" scope="row" sx={{ fontWeight: 700 }}>
              Destination country
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              sx={{ fontWeight: 700 }}
              align="right"
            >
              Shipping cost multiplier
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              sx={{ fontWeight: 700, width: 250 }}
              align="right"
            >
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? countries.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : countries
          ).map((row) =>
            editRow === row.id ? (
              <EditableRow row={row} handleShow={setEditRow} />
            ) : (
              <Row row={row} handleShow={setEditRow} />
            )
          )}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={countries.length}
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
  );
};

export default CountriesTable;
