import {
  Box,
  ButtonBase,
  Chip,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router";

const PendingOrder = ({ shipment }) => {
  const navigate = useNavigate();

  const theme = useTheme();

  return (
    <Box
      key={shipment.id}
      sx={{
        width: "100%",
        height: "100%",
        boxShadow: 3,
        border: 1,
        borderRadius: 3,
        borderBottomRightRadius: 0,
        p: 2,
        position: "relative",
        "&::before,&::after": {
          content: "''",
          position: "absolute",
          bottom: 0,
          right: 0,
          borderColor: "transparent",
          borderStyle: "solid",
          transform: "rotate(270deg)",
        },
        "&::before": {
          borderWidth: "25px",
          borderLeftColor: `${shipment.boxColor}`,
          borderBottomColor: `${shipment.boxColor}`,
        },
      }}
    >
      <ButtonBase onClick={() => navigate(`/shipment/${shipment.id}`)}>
        <Grid container direction="row" justifyContent="space-between">
          <Grid item>
            <Grid container display="flex" flexDirection="column">
              <Grid item>
                <Typography fontWeight={700} fontSize={18}>
                  {shipment.boxTier.name}
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ color: theme.palette.secondary.main, ml: 1 }}>
                  {shipment.recipient}
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ color: theme.palette.secondary.main, ml: 1 }}>
                  {shipment.boxTier.weight} kg
                </Typography>
              </Grid>
              <Grid item>
                <Chip
                  label={shipment.statuses.at(-1).status.toLowerCase()}
                  sx={{
                    mt: 2,
                    p: 1,
                    fontWeight: 600,
                    color: theme.palette.secondary.dark,
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography>{shipment.cost}</Typography>
          </Grid>
        </Grid>
      </ButtonBase>
    </Box>
  );
};

export default PendingOrder;

/*
{
 color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[200],
    minWidth: "40px",
    minHeight: "40px",
    borderRadius: 1,
    position: "relative",
    "&::before,&::after": {
      content: "''",
      position: "absolute",
      bottom: 0,
      left: 0,
      borderColor: "transparent",
      borderStyle: "solid"
    },
    "&::before": {
      borderWidth: "8px",
      borderLeftColor: "#efefef",
      borderBottomColor: "#efefef"
    },
    "&::after": {
      borderRadius: "3px",
      borderWidth: "5px",
      borderLeftColor: "#fffff"  color of the triangle 
      borderBottomColor: "#fffff"  color of the triangle */
