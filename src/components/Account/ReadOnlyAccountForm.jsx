import { Container, Grid, Typography } from "@mui/material";

const ReadOnlyAccountForm = ({ userInfo }) => {
  return (
    <>
    <Container style={{ marginTop: 50,display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "Inter, sans-serif" }}>
      <Typography variant="h4">Your Account Details</Typography>
      <Grid
        container
        spacing={6}
        sx={{ gap: 3 }}
        style={{ marginTop: 20 }}
      >
        <Grid item xs={5}>
          <Typography variant="h5">First Name</Typography>
          <Typography variant="body3">{userInfo.firstName}</Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="h5">Last Name</Typography>
          <Typography variant="body3">{userInfo.lastName}</Typography>
        </Grid>

        <Grid item xs={5}>
          <Typography variant="h5">Date of Birth</Typography>
          <Typography variant="body3">{userInfo.dateOfBirth}</Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="h5">Country</Typography>
          <Typography variant="body3">{userInfo.countryId}</Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="h5">Postal Code</Typography>
          <Typography variant="body3">{userInfo.zipCode}</Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="h5">Phone</Typography>
          <Typography variant="body3">{userInfo.contactNumber}</Typography>
        </Grid>
      </Grid>
      </Container>
    </>
  );
};

export default ReadOnlyAccountForm;
