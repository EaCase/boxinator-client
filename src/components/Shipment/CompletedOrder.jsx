import {
  Box,
  Button,
  ButtonBase,
  Grid,
  Link,
  Typography,
  useTheme,
} from "@mui/material";
import CheckCircleOutlineSharpIcon from "@mui/icons-material/CheckCircleOutlineSharp";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useNavigate } from "react-router";

const CompletedOrder = ({
  id,
  recipient,
  boxTier,
  cost,
  country,
  boxColor,
  statuses,
}) => {
  const theme = useTheme();
  const navigate = useNavigate();

  console.log(boxColor);

  return (
    <Box
      onClick={() => navigate(`/shipment/${id}`)}
      component={Grid}
      container
      item
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      sx={{
        boxShadow: 2,
        padding: 1,
        border: 1,
        borderColor: theme.palette.secondary.light,
        borderRadius: 2,
        marginBottom: 1,
        py: 2,
        minHeight: 65,
        "&:hover": {
          cursor: "pointer",
        },
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
        {statuses.at(-1).status === "CANCELLED" ? (
          <HighlightOffIcon
            style={{ verticalAlign: "middle", marginRight: 20 }}
          />
        ) : (
          <CheckCircleOutlineSharpIcon
            style={{ verticalAlign: "middle", marginRight: 20 }}
          />
        )}

        <Typography fontWeight={700}>{boxTier.name}</Typography>
      </Grid>
      <Grid item xs="auto">
        <Typography>{boxTier.weight} kg</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography>{country.name}</Typography>
      </Grid>

      <Grid item xs={2}>
        <Typography>{recipient}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography>{cost} Kr</Typography>
      </Grid>

      <Grid
        item
        xs={2}
        sx={{
          backgroundColor: boxColor,
          width: "100%",
          height: "100%",
          borderRadius: 2,
        }}
      ></Grid>
    </Box>
  );
};

export default CompletedOrder;
