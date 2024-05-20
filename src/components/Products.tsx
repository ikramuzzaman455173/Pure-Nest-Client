// import { flashSaleProductData } from "@/data/FlashProductData";
import { IProduct } from "@/types/type.global";
import ProductsCard from "@/utils/ProductsCard";
import { Button, Container, Stack } from "@mui/material";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Products = async () => {
  const res = await fetch(
    "https://pure-nest-server.vercel.app/api/products",
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const flashSaleProductData = await res.json();

  return (
    <div>
      <Container>
        <Stack
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between">
          <h1 className="text-xl lg:text-2xl font-semibold text-[#0C1734]">
            Trendings Products
          </h1>
          <Button
            sx={{
              ":hover": {
                background: "#1e293b",
              },
              fontSize: "14px"
            }}
            variant="contained"
            component={Link}
            href="/products"
            size="large"
            >
            View All <ChevronRight size={18} />
          </Button>
        </Stack>
        <div className=" grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-5 mx-auto mt-10">
          {flashSaleProductData?.slice(0, 6).map((product:IProduct) => (
            <ProductsCard product={product} key={product._id} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Products;
