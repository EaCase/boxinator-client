import { useFormikContext } from "formik";
import { useState } from "react";
import { ChromePicker } from "react-color";

export const MuiColorPicker = ({ label, onChange }) => {
  const formikProps = useFormikContext();

  const [color, setColor] = useState("#333");
  const handleChange = color => {
    setColor(color.hex);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", padding: 10 }}>
      <label>{label}</label>
      <ChromePicker color={color} onChange={handleChange} onChangeComplete={color => formikProps.setFieldValue("color", color.hex)} />
    </div>
  );
};

export default MuiColorPicker;