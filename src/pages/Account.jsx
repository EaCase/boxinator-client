import { Grid } from "@mui/material";
import { useGetAccountQuery } from '../services/account';
import { Box } from "@mui/material";
import EditAccount from '../Account/EditAccount';

const Account = () => {
  const { data: userData, isError, isLoading, isSuccess } = useGetAccountQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  if (isError) {
    console.log(userData);

    return <div>Error loading account data</div>;
  }

  if (!isSuccess) {
    return null;
  }

  return (
    <Box>
      <Grid container spacing={1} textAlign="center" margin="auto" maxWidth="600px">
          <EditAccount userData = {userData}/>
      </Grid>
    </Box>
  );
};



export default Account;