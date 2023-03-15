import { Grid, Button, Box, Table, Typography, useTheme } from "@mui/material";
import { useState, useEffect } from "react";
import { useGetShipmentsQuery } from "../services/shipment";
import BoxesSlider, { SimpleSlider } from "../components/layout/BoxesSlider";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleOutlineSharpIcon from "@mui/icons-material/CheckCircleOutlineSharp";

const Shipment = () => {
  const theme = useTheme();

  const {
    data: shipments,
    isLoading,
    isSuccess,
    isError,
  } = useGetShipmentsQuery();

  const boxes = [
    {
      id: 1,
      title: "Box 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
      id: 2,
      title: "Box 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
      id: 3,
      title: "Box 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
      id: 4,
      title: "Box 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
      id: 5,
      title: "Box 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
      id: 6,
      title: "Box 6",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
  ];

  /*
  const [shipments, setShipments] = useState([]);

  useEffect(() => {
    async function fetchShipments() {
      const response = await fetch("");
      const data = await response.json();
      setShipments(data);
    }
    fetchShipments();
  }, []);
 

  const inDelivery = shipments.filter(
    (shipment) => shipment.status === "ordered"
  );

  //assuming that there is a status
  const completed = shipments.filter(
    (shipment) => shipment.status === "shipped"
  );
   */

  return (
    <>
      {/* first grid for In Delivery */}

      <Grid container spacing={2}>
        <Grid xs={12} item>
          <BoxesSlider boxes={boxes} style={{ overflowX: "hidden" }} />
          {/*<ul>
            {inDelivery.map(shipment => (
              <li key={shipment.id}>{shipment.name}</li>
            ))}
            </ul>*/}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 4, mb: 2 }}
          >
            + New Order
          </Button>
        </Grid>
      </Grid>

      <Box>
        <SimpleSlider shipments={boxes} />
      </Box>

      <Typography variant="h3">Completed</Typography>

      <Box style={{ maxHeight: "100vh", overflow: "auto" }}>
        <Grid container>
          {shipments?.map((shipment) => {
            return (
              <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                component={Box}
                sx={{
                  boxShadow: 2,
                  padding: 1,
                  border: 1,
                  borderColor: theme.palette.secondary.light,
                  borderRadius: 2,
                  marginBottom: 1,
                  py: 2,
                  minHeight: 65,
                }}
                item
              >
                <Grid
                  item
                  xs={1}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <CheckCircleOutlineSharpIcon
                    style={{ verticalAlign: "middle", marginRight: 20 }}
                  />
                  <Typography fontWeight={700}>Basic</Typography>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={3}>
                  {shipment.status}
                </Grid>
                <Grid item xs={3}>
                  {shipment.country}
                </Grid>
                <Grid item xs={3}>
                  {shipment.date}
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default Shipment;
