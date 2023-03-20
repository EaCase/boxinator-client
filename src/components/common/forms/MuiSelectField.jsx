import {
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  useTheme,
} from "@mui/material";
import { useField } from "formik";

const MuiSelectField = ({ label, options, ...props }) => {
  const [field, meta] = useField(props);
  const hasErrors = Boolean(meta.touched) && Boolean(meta.error);
  const theme = useTheme();

  console.log(options[0]);

  return (
    <>
      <Grid item xs={12} {...props}>
        <InputLabel sx={{ marginBottom: 1 }}>{label}</InputLabel>
        <Select
          sx={{
            boxShadow: 3,
            backgroundColor: theme.palette.triadic.light,
            borderRadius: 2,
          }}
          required
          fullWidth
          size="small"
          variant="outlined"
          error={hasErrors}
          defaultValue={options[0]}
          {...field}
        >
          {options.map((item) => {
            return (
              <MenuItem key={item.id} value={item}>
                {item.name}
              </MenuItem>
            );
          })}
        </Select>
        <Typography fontSize={16} mt={1} color="red">
          {Boolean(meta.touched) && meta.error?.id && meta.error?.name}
        </Typography>
      </Grid>
    </>
  );
};

export default MuiSelectField;
