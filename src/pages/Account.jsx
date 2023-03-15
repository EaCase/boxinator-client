import { useState } from 'react';
import { Button } from "@mui/material";
import EditAccountForm from '../forms/EditAccountForm';
import { Formik } from 'formik';
import { useGetAccountQuery } from '../services/account';

const Account = (userData) => {
  const [showEditForm, setShowEditForm] = useState(false);
  const { data } = useGetAccountQuery();

  const initialValues = {
    firstName: "Seppo",
    lastName: "Taalasmaa",
    email: "Testi@test.com",
    dateOfBirth: "1.1.1970",
    country: "Finland",
    postal: "0000",
    phone: "0101010",
  }
  /*
  const [userInfo, setUserInfo] = useState({
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
    dateOfBirth: userData.dateOfBirth,
    country: userData.country,
    postal: userData.postal,
    phone: userData.phone
  });
  */

  const handleEditClick = () => {
    console.log("Clicked");
    setShowEditForm(true);
  };

  return (
    <>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={handleEditClick}
      >
        Edit
      </Button>
      {showEditForm && (
        <Formik initialValues={initialValues}>
          <EditAccountForm />
        </Formik>
      )}

    </>
  );
};

export default Account;