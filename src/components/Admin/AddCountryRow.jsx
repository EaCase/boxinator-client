import { Button, TableCell, TableRow, TextField } from "@mui/material";
import { useState } from "react";
import { useAddCountryMutation } from "../../services/settings";
import AddIcon from "@mui/icons-material/Add";

const AddCountryRow = () => {
  const [country, setCountry] = useState("");
  const [multiplier, setMultiplier] = useState(0);
  const [addCountry] = useAddCountryMutation();
  const [countryError, setCountryError] = useState("");
  const [multiplierError, setMultiplierError] = useState("");

  const handleAddCountry = async () => {
    const hasError = !country || !multiplier || isNaN(multiplier);

    !country
      ? setCountryError("Country name is required")
      : setCountryError("");
    !multiplier || isNaN(multiplier)
      ? setMultiplierError("Must be a number")
      : setMultiplierError("");

    if (hasError) return;

    await addCountry({ name: country, shippingMultiplier: multiplier })
      .unwrap()
      .catch((error) => setCountryError(error.data.message));
  };

  return (
    <TableRow key="add country" sx={{ height: 65 }}>
      <TableCell align="left" />
      <TableCell align="left">
        <TextField
          name="country"
          size="small"
          defaultValue=""
          onChange={(e) => setCountry(e.target.value)}
          error={Boolean(countryError)}
          helperText={countryError}
          inputProps={{
            style: { textAlign: "left" },
          }}
          sx={{ width: 200 }}
        />
      </TableCell>
      <TableCell align="right">
        <TextField
          name="modifier"
          size="small"
          defaultValue=""
          error={Boolean(multiplierError)}
          helperText={multiplierError}
          onChange={(e) => setMultiplier(e.target.value)}
          inputProps={{
            style: { textAlign: "right" },
          }}
          sx={{ width: 200 }}
        />
      </TableCell>
      <TableCell align="right">
        <Button color="success" variant="contained" onClick={handleAddCountry}>
          <AddIcon />
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default AddCountryRow;
