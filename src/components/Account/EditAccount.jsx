import { Formik } from "formik";
import { useState } from "react";
import ReadOnlyAccountForm from "./ReadOnlyAccountForm";
import EditAccountForm from "./EditAccountForm";
import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router";
import { useUpdateAccountMutation } from "../../services/account";
import { useGetCountryNameQuery } from "../../services/settings";

const EditAccount = ({ userData }) => {
  const navigate = useNavigate();

  const {
    data: countryName,
    isError,
    isLoading,
  } = useGetCountryNameQuery(userData.countryId);

  const [editing, setEditing] = useState(false);

  const [updateAccountData] = useUpdateAccountMutation();

  if (isError) {
    return <div>Error loading account data</div>;
  }

  if (isLoading) {
    return <div>Loading account data</div>;
  }

  const userInfo = {
    firstName: userData.firstName,
    lastName: userData.lastName,
    dateOfBirth: userData.dob,
    countryId: countryName.name,
    zipCode: userData.zipCode,
    contactNumber: userData.contactNumber,
  };

  const handleCancelClick = () => {
    setEditing(false);
  };

  const showEditing = () => {
    setEditing(true);
  };

  const updateAccount = async (values) => {
    try {
      await updateAccountData({ id: userData.id, values }).unwrap();
      navigate("/Account");
      setEditing(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid item xs={12}>
      <Formik initialValues={userInfo} onSubmit={updateAccount}>
        {editing ? (
          <EditAccountForm handleCancelClick={handleCancelClick} />
        ) : (
          <ReadOnlyAccountForm userInfo={userInfo} />
        )}
      </Formik>
      <Button
        fullWidth
        variant="contained"
        onClick={showEditing}
        disabled={editing}
        sx={{ mt: 3, mb: 2, width: "30%", height: "50px" }}
        style={{ marginTop: "80px" }}
        size="medium"
      >
        Edit Details
      </Button>
    </Grid>
  );
};

export default EditAccount;
