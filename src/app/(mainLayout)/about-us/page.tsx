import AboutUsBanner from "@/components/AboutUs/AboutUsBanner";
import { Container } from "@mui/material";
import React from "react";

const AboutPage = () => {
  return (
    <Container sx={{ marginTop: 5}}>
      <div className="mt-32">
      <AboutUsBanner />
      </div>
    </Container>
  );
};

export default AboutPage;
