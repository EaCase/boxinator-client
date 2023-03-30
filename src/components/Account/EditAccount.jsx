import { Formik } from "formik";
import { useState } from "react";
import ReadOnlyAccountForm from "./ReadOnlyAccountForm";
import EditAccountForm from "./EditAccountForm";
import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router";
import { useUpdateAccountMutation } from "../../services/account";
import { useGetCountriesQuery } from "../../services/settings";

const EditAccount = ({ userData }) => {
  const navigate = useNavigate();

  const { data: countries, isSuccess: countriesFetched } =
    useGetCountriesQuery();

  const [editing, setEditing] = useState(false);
  const [updateAccountData] = useUpdateAccountMutation();

  if (!countriesFetched) {
    return <div>Loading</div>;
  }

  const userInfo = {
    firstName: userData.firstName,
    lastName: userData.lastName,
    dateOfBirth: userData.dob,
    countryId: countries.find((country) => country.id === userData.countryId),
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
    const body = { ...values, countryId: values.countryId.id };
    delete body.country;

    // Omit blank fields
    Object.keys(body).forEach((k) => !body[k] && delete body[k]);

    await updateAccountData(body)
      .unwrap()
      .then(() => {
        navigate("/Account");
        setEditing(false);
      })
      .catch((e) => console.log(e));
  };

  return (
    <Grid item xs={12}>
      <Formik initialValues={userInfo} onSubmit={updateAccount}>
        {editing ? (
          <EditAccountForm
            countries={countries}
            handleCancelClick={handleCancelClick}
          />
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
