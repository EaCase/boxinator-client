import { Box, Grid, Typography, useTheme } from "@mui/material";
import CheckCircleOutlineSharpIcon from "@mui/icons-material/CheckCircleOutlineSharp";

const CompletedOrder = ({ recipient, tier, price, country, color }) => {
  const theme = useTheme();

  return (
    <Grid
      container
      item
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      component={Box}
      sx={{
        boxShadow: 2,
        padding: 1,
        border: 1,
        borderColor: theme.palette.secondary.light,
        background: color,
        borderRadius: 2,
        marginBottom: 1,
        py: 2,
        minHeight: 65,
      }}
    >
      <Grid
        item
        xs={1}
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <CheckCircleOutlineSharpIcon
          style={{ verticalAlign: "middle", marginRight: 20 }}
        />
        <Typography fontWeight={700}>{tier}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography>{price}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography>{recipient}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography>{country}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography>{color}</Typography>
      </Grid>
    </Grid>
  );
};

export default CompletedOrder;