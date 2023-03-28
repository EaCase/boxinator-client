import { Grid, InputLabel } from "@mui/material";
import { useFormikContext } from "formik";
import { useEffect, useState } from "react";
import { ChromePicker } from "react-color";
import MuiColorBox from "./MuiColorBox";

const MuiColorPicker = ({ label, originalColor }) => {
  const formikProps = useFormikContext();
  const [color, setColor] = useState(
    `#${Math.floor(Math.random() * 16777215).toString(16)}`
  );

  useEffect(() => {
    if (originalColor) {
      setColor(originalColor);
      formikProps.setFieldValue("color", originalColor);
    } else {
      formikProps.setFieldValue("color", color);
    }
  }, []);

  return (
    <>
      <InputLabel sx={{ my: 2 }}>{label}</InputLabel>
      <Grid container>
        <Grid item xs={6}>
          <ChromePicker
            color={color}
            onChange={(color) => setColor(color.hex)}
            onChangeComplete={(color) =>
              formikProps.setFieldValue("color", color.hex)
            }
          />
        </Grid>

        <Grid item xs={6}>
          <MuiColorBox color={color} />
        </Grid>
      </Grid>
    </>
  );
};

export default MuiColorPicker;
