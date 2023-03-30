import { Button } from "@mui/material";
import { statusOptions } from "../../../utils/utils";
import { useUpdateShipmentStatusMutation } from "../../../services/shipment";
import CloseIcon from "@mui/icons-material/Close";

export const StatusButtonGroup = ({ id, handleShowStatusOptions }) => {
  const [updateStatus] = useUpdateShipmentStatusMutation();

  const handleUpdateStatus = async (status) => {
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
        <CloseIcon />
      </Button>
    </>
  );
};
