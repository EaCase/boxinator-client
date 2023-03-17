import { useState } from 'react';
import { Button, Grid, Typography } from "@mui/material";
import EditAccountForm from '../forms/EditAccountForm';
import { Formik, Form } from 'formik';
import { useGetAccountQuery } from '../services/account';
import { useTheme, Box } from "@mui/material";

const Account = () => {
  //pass data
  const theme = useTheme();

  const [editing, setEditing] = useState(false);
  const { data } = useGetAccountQuery();

  const initialValues = {
    firstName: "Seppo",
    lastName: "Taalasmaa",
    email: "Testi@test.com",
    dateOfBirth: "1.1.1970",
    country: "Finland",
    postal: "0000",
    phone: "0101010",
  };

  /*
  const [userInfo, setUserInfo] = useState({
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
    dateOfBirth: userData.dateOfBirth,
    country: userData.country,
    postal: userData.postal,
    phone: userData.phone
  });
  */

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
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>

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
        <Formik initialValues={initialValues} onSubmit={saveEdit}>
          {editing ? (
            <EditAccountForm handleCancelClick={handleCancelClick} />
          ) : (
            <ReadOnlyForm initialValues={initialValues} />
          )}
        </Formik>
      </Grid>
    </Box >
  );
};

const ReadOnlyForm = ({ initialValues }) => (
  //To do when there is real data: change initialValues to userData everywhere
  <>
    <Grid container spacing={4} style={{ verticalAlign: "middle", marginRight: 20 }}
    >
      <Grid item xs={12}>
        <Typography variant="h3">First Name:</Typography>
        <Typography variant="body1">{initialValues.firstName}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h3">Last Name:</Typography>
        <Typography variant="body1">{initialValues.lastName}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h3">Email:</Typography>
        <Typography variant="body1">{initialValues.email}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h3">Date of Birth:</Typography>
        <Typography variant="body1">{initialValues.dateOfBirth}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h3">Country:</Typography>
        <Typography variant="body1">{initialValues.country}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h3">Postal Code:</Typography>
        <Typography variant="body1">{initialValues.postal}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h3">Phone:</Typography>
        <Typography variant="body1">{initialValues.phone}</Typography>
      </Grid>
    </Grid>
  </>
);


export default Account;