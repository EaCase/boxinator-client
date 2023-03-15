import { useState } from 'react';
import { Button } from "@mui/material";
import EditAccountForm from '../forms/EditAccountForm';

const Account = (userData) => {

    const [showEditForm, setShowEditForm] = useState(false);

    const [userInfo, setUserInfo] = useState({
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        dateOfBirth: userData.dateOfBirth,
        country: userData.country,
        postal: userData.postal,
        phone: userData.phone
      });

      const handleEditClick = () => {
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
      {showEditForm && <EditAccountForm userInfo={userInfo}/>}   
    </>
  );
};

export default Account;