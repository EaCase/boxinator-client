import { Typography } from "@mui/material";
import { Form } from "formik";
import MuiFormWrapper from "../common/forms/MuiFormWrapper";
import MuiTextInput from "../common/forms/MuiTextInput";

const OrderForm = () => {
  <>
    <Typography>ASDSDSDAS</Typography>
    <Form>
      <MuiFormWrapper headerText="Create a new order">
        <MuiTextInput
          name="recipient"
          type="text"
          label="Recipient"
        />
        <Typography id="transition-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </MuiFormWrapper>;
    </Form>;
  </>;
};

export default OrderForm;
