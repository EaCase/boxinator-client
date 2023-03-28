import { useTheme } from "@emotion/react";
import { Box, Grid, Typography } from "@mui/material";

export const InfoRow = ({ field, value }) => {
  const theme = useTheme();

  return (
    <Grid
      container
      display="flex"
      direction="column"
      xs={5}
      sx={{ minWidth: "100%" }}
    >
      <Grid
        item
        container
        justifyContent="space-between"
        sx={{
          borderBottom: `1px dashed ${theme.palette.secondary.main}`,
          maxWidth: "100%",
        }}
      >
        <Typography display="inline" align="left">
          {field}
        </Typography>

        {field === "Box color" ? (
          <Box
            sx={{ background: value, height: 30, width: 80, borderRadius: 2 }}
          />
        ) : (
          <Typography display="inline" align="right">
            {value}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};
