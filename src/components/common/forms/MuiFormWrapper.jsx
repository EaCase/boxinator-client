import { Box, Container, Grid, Typography } from "@mui/material";

const MuiFormWrapper = (props) => {
  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">{props.headerText}</Typography>
        <Box sx={{ mt: 5 }}>
          <Grid container spacing={2}>
            {props.children}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default MuiFormWrapper;
