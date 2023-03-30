import { Step, StepLabel, Typography } from "@mui/material";
import { StatusIcon } from "../../../utils/utils";

export const StatusStep = ({ index, status }) => {
  const icon = StatusIcon(status);

  return (
    <Step key={status.ts} index={index} completed={true}>
      <StepLabel
        StepIconProps={{ fontSize: "large", mt: 2 }}
        StepIconComponent={icon}
      >
        <Typography fontSize={12}>{status.status}</Typography>
        <Typography fontSize={12}>{status.ts}</Typography>
      </StepLabel>
    </Step>
  );
};
