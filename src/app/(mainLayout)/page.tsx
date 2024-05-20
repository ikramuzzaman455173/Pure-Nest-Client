import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import FlashSale from "@/components/FlashSale";
import Products from "@/components/Products";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Banner />
      <FlashSale />
      <Categories />
      <Products />
    </>
  );
};

export default HomePage;
