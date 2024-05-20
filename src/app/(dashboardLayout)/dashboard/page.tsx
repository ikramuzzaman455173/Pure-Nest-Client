import { Box } from "@mui/material";

const MainDashboardPage = () => {
  return (
    <>
      <Box className="flex justify-center items-center">
        <p className="text-center text-5xl font-bold text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text">
          Welcome To <br /> pure nest Dashboard!
        </p>
      </Box>
    </>
  );
};

export default MainDashboardPage;
