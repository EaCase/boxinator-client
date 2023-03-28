import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { statusOptions } from "../../../utils/utils";
import UTurnRightIcon from "@mui/icons-material/UTurnRight";
import UTurnLeftIcon from "@mui/icons-material/UTurnLeft";
import { useUpdateShipmentStatusMutation } from "../../../services/shipment";

export const StatusButtonGroup = ({ id, handleShowStatusOptions }) => {
  const [updateStatus] = useUpdateShipmentStatusMutation();

  const handleUpdateStatus = async (status) => {
    console.log("Clicked: ", status);

    await updateStatus({ shipmentId: id, status })
      .unwrap()
      .then(() => handleShowStatusOptions());
  };

  return (
    <>
      {statusOptions.map((status) => {
        return (
          <Button
            variant="contained"
            sx={{ mx: 1 }}
            onClick={() => handleUpdateStatus(status)}
          >
            {status}
          </Button>
        );
      })}

      <Button
        color="success"
        variant="contained"
        onClick={handleShowStatusOptions}
      >
        Go back <UTurnLeftIcon sx={{ ml: 1, transform: "rotate(-90deg)" }} />
      </Button>
    </>
  );
};
