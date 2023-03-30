import {
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
import { TablePaginationActions } from "./PaginationMenu";
import Row from "./Row";
import EditableRow from "./EditableRow";
import AddCountryRow from "./AddCountryRow";

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
          <AddCountryRow />

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
