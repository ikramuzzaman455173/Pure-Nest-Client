import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";

const AboutUsBanner = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Box>
          <Typography sx={{ fontSize: "40px", fontWeight: 600 }}>
            Your Trusted Cleaning Companion
          </Typography>
          <Typography sx={{ fontSize: "16px", margin: "15px 0" }}>
            Providing superior cleaning solutions for every corner of your home.
            Join our newsletter and get exclusive discounts on your first
            purchase.
          </Typography>
        </Box>

        <Box display="flex">
          <CleaningServicesIcon />
          <Typography sx={{ fontSize: "16px", marginLeft: "5px" }}>
            We are dedicated to ensuring a clean and healthy environment for you
            and your family.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Image
          style={{ borderRadius: "5px" }}
          src={
            "https://hra-global.com/wp-content/uploads/2020/11/clean-conscience.png"
          }
          width={700}
          height={600}
          className="border hover:shadow-md object-cover mx-auto p-2 relative transform transition-transform duration-300 hover:scale-90 overflow-hidden "
          alt="Cleaning Supplies"
        />
      </Grid>
    </Grid>
  );
};

export default AboutUsBanner;
