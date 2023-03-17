import { Grid, InputLabel } from "@mui/material";
import { useFormikContext } from "formik";
import { useState } from "react";
import { ChromePicker } from "react-color";
import MuiColorBox from "./MuiColorBox";

const MuiColorPicker1 = ({ label }) => {
  const formikProps = useFormikContext();
  const [color, setColor] = useState(
    `#${Math.floor(Math.random() * 16777215).toString(16)}`
  );

  const handleChange = (color) => setColor(color.hex);

  console.log(color);

  return (
    <>
      <InputLabel sx={{ marginBottom: 1 }}>{label}</InputLabel>
      <Grid container>
        <Grid item xs={6}>
          <ChromePicker
            color={color}
            onChange={handleChange}
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

export default MuiColorPicker1;
