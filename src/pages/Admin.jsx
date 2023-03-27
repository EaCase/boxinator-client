import { useState } from "react";
import { useGetShipmentsQuery } from "../services/shipment";
import { useGetCountriesQuery } from "../services/settings";
import {
  CircularProgress,
  Container,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import CountriesTable from "../components/Admin/CountriesTable";
import PublicIcon from "@mui/icons-material/Public";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ShipmentsTable from "../components/Admin/ShipmentsTable";

const Admin = () => {
  const { data: countries, isSuccess: countriesFetched } =
    useGetCountriesQuery();
  const { data: shipments, isSuccess: shipmentsFetched } =
    useGetShipmentsQuery();

  const [tabValue, setTabValue] = useState(0);
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  if (!countriesFetched && !shipmentsFetched) {
    return <CircularProgress />;
  }

  return (
    <Container maxWidth="lg">
      <Typography variant="h3" marginY={4}>
        Boxinator dashboard
      </Typography>
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        TabIndicatorProps={{
          style: {
            backgroundColor: "black",
          },
        }}
      >
        <Tab
          icon={<PublicIcon fontSize="large" />}
          iconPosition="start"
          label="COUNTRIES"
        />
        <Tab
          icon={<LocalShippingIcon fontSize="large" />}
          iconPosition="start"
          label="SHIPMENTS"
        />
      </Tabs>

      {
        {
          0: <CountriesTable countries={countries} />,
          1: <ShipmentsTable shipments={shipments} />,
        }[tabValue]
      }
    </Container>
  );
};

export default Admin;
