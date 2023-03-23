import { Grid, Typography } from "@mui/material";

const ReadOnlyAccountForm = ({ userInfo }) => {

    return(
    <>
      <Typography variant="h4">Your Account Details</Typography>
      <Grid container spacing={6} sx={{ gap: 3 }} style={{ verticalAlign: "middle", marginRight: 100, marginTop: 30}}
      >
        <Grid item xs={5}>
          <Typography variant="h5">First Name:</Typography>
          <Typography variant="body1">{userInfo.firstName}</Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="h5">Last Name:</Typography>
          <Typography variant="body1">{userInfo.lastName}</Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="h5">Email:</Typography>
          <Typography variant="body1">{userInfo.email}</Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="h5">Date of Birth:</Typography>
          <Typography variant="body1">{userInfo.dateOfBirth}</Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="h5">Country:</Typography>
          <Typography variant="body1">{userInfo.country}</Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="h5">Postal Code:</Typography>
          <Typography variant="body1">{userInfo.postal}</Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="h5">Phone:</Typography>
          <Typography variant="body1">{userInfo.phone}</Typography>
        </Grid>
      </Grid>
    </>
);
};

export default ReadOnlyAccountForm;