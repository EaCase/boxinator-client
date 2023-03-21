import { Box } from "@mui/material";

const MuiColorBox = ({ color }) => {
  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        borderRadius: 2,
        border: 1,
        boxShadow: 2,
        background: color,
      }}
    ></Box>
  );
};

export default MuiColorBox;
