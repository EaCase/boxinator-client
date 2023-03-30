import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";

const ReadOnlyAccountForm = ({ userInfo }) => {
  return (
    <Container
      style={{
        marginTop: 60,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" style={{ marginBottom: 40 }}>
        Your Account Details
      </Typography>
      <TableContainer>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                <Typography variant="body1" fontWeight="bold">
                  First Name
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1">{userInfo.firstName}</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="body1" fontWeight="bold">
                  Last Name
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1">{userInfo.lastName}</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="body1" fontWeight="bold">
                  Date of Birth
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1">{userInfo.dateOfBirth}</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="body1" fontWeight="bold">
                  Country
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1">
                  {userInfo.countryId.name}
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="body1" fontWeight="bold">
                  Postal Code
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1">{userInfo.zipCode}</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="body1" fontWeight="bold">
                  Phone
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1">
                  {userInfo.contactNumber}
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ReadOnlyAccountForm;
