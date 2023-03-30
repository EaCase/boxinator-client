import { Button, TableCell, TableRow, TextField } from "@mui/material";
import { useState } from "react";
import { useUpdateCountryMutation } from "../../services/settings";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const EditableRow = ({ row, handleShow }) => {
  const [multiplier, setMultiplier] = useState(0);
  const [error, setError] = useState("");
  const [updateCountry] = useUpdateCountryMutation();

  const handleUpdate = async (row) => {
    if (isNaN(multiplier)) {
      setError("Modifier needs to be a number");
      return;
    }

    const body = { name: row.name, shippingMultiplier: multiplier };

    await updateCountry({ countryId: row.id, body })
      .unwrap()
      .then(() => handleShow(0));
  };

  return (
    <TableRow key={row.id} sx={{ height: 65 }}>
      <TableCell>{row.id}</TableCell>
      <TableCell>{row.name}</TableCell>
      <TableCell align="right">
        <TextField
          name="modifier"
          size="small"
          defaultValue={row.shippingMultiplier}
          onChange={(e) => setMultiplier(e.target.value)}
          error={Boolean(error)}
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

export default EditableRow;
