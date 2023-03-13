import { Grid, InputLabel, TextField } from "@mui/material";
import { useField } from "formik";

const MuiTextInput = ({ label, type, ...props }) => {
  const [field, meta] = useField(props);
  const hasErrors = Boolean(meta.touched) && Boolean(meta.error);

  return (
    <>
      <Grid item xs={12} {...props}>
        <InputLabel>{label}</InputLabel>
        <TextField
          required
          fullWidth
          size="small"
          variant="outlined"
          type={type}
          error={hasErrors}
          helperText={Boolean(meta.touched) && meta.error}
          {...field}
        />
      </Grid>
    </>
  );
};

export default MuiTextInput;
