import { Formik } from "formik";
import { useState } from 'react';
import ReadOnlyAccountForm from "./ReadOnlyAccountForm";
import EditAccountForm from "./EditAccountForm";
import { Button, Grid, Typography } from "@mui/material";

const EditAccount = ({userData}) => {
    const [editing, setEditing] = useState(false);

    const userInfo = {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        dateOfBirth: userData.dob,
        country: userData.countryId,
        postal: userData.zipCode,
        phone: userData.contactNumber
      };

      const handleCancelClick = () => {
        setEditing(false);
      };
    
      const showEditing = () => {
        setEditing(true);
      };
    
      const saveEdit = (values) => {
        console.log(values)
        setEditing(false);
      };
    

    return (
        <Grid item xs={12}>
        <Formik initialValues={userInfo} onSubmit={saveEdit}>
        {editing ? (
          <EditAccountForm handleCancelClick={handleCancelClick} />
        ) : (
          <ReadOnlyAccountForm userInfo={userInfo} />
        )}
      </Formik>
        <Button
        fullWidth variant="contained"
        onClick={showEditing}
        disabled={editing}
        sx={{ mt: 3, mb: 2, width: '100px', height: '50px' }}
        size="small"
      >
        Edit
      </Button>
      </Grid>
    )
}

export default EditAccount;