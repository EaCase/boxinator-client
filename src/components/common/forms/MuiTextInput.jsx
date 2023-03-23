import { Grid, InputLabel, TextField, Typography } from "@mui/material";
import { useField } from "formik";
import { useTheme } from "@emotion/react";

const MuiTextInput = ({ label, type, disabled, ...props }) => {
  const [field, meta] = useField(props);
  const hasErrors = Boolean(meta.touched) && Boolean(meta.error);
  const theme = useTheme();

  return (
    <>
      <Grid item xs={12} {...props}>
        <InputLabel sx={{ marginBottom: 1 }}>{label}</InputLabel>
        <TextField
          sx={{
            boxShadow: 3,
            backgroundColor: theme.palette.triadic.light,
            borderRadius: 2,
          }}
          required
          disabled={disabled}
          fullWidth
          size="small"
          variant="outlined"
          type={type}
          error={hasErrors}
          {...field}
        />
        <Typography fontSize={16} mt={1} color="red">
          {Boolean(meta.touched) && meta.error}
        </Typography>
      </Grid>
    </>
  );
};

export default MuiTextInput;
