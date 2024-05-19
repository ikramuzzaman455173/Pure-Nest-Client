import { Box, Stack, Typography } from "@mui/material";

const addressSummury = {
  name: "Mr.John Doe",
  email: "johndoe026@gmail.com",
  country: "Bangladesh",
  streetAdress: "Dhaka,Uttora",
  postCode: "1230",
  city: "Dhaka",
  mobileNumber: "+8801646418365",
};

const BillingAddress = () => {
  return (
    <Box>
      <Typography
        fontSize={25}
        fontWeight={600}
        marginTop="40px"
        marginBottom="15px"
      >
        Billing address
      </Typography>
      <Stack>
        <Typography>{addressSummury.name}</Typography>
        <Typography>{addressSummury.country}</Typography>
        <Typography>{addressSummury.streetAdress}</Typography>
        <Typography>
          {addressSummury.city} - {addressSummury.postCode}
        </Typography>
        <Typography>{addressSummury.email}</Typography>
        <Typography>{addressSummury.mobileNumber}</Typography>
      </Stack>
    </Box>
  );
};

export default BillingAddress;
