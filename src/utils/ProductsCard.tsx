import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import InfoIcon from "@mui/icons-material/Info";
import CartButton from "./CartButton";

const ProductsCard = ({ product }: any) => {
  return (
    <Stack
      sx={{
        padding: "10px",
        boxShadow:
          "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;",
        borderRadius: "10px",
      }}>
      <Box position="relative">
        <Image
          className="w-[120px] h-[250px] object-cover mx-auto p-3 relative transform transition-transform duration-300 hover:scale-110 overflow-hidden "
          src={product?.image}
          width={200}
          height={200}
          alt="Product Image"
        />
        <p
          className={`${
            product.discount
              ? "absolute top-0 right-0 p-1 text-[14px] text-center text-white bg-red-500  w-[40px] h-[30px] rounded-lg"
              : ""
          }`}>
          {`${product.discount ? product.discount : ""}`}
        </p>
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "bold",
            color: "#363636",
            marginTop: "8px",
            ":hover": {
              color: "#0ea5e9",
            },
            ":active": {
              color: "#3498db",
            },
          }}>
          <Link href={`/products/${product._id}`}>{product.title}</Link>
        </Typography>
        <Stack
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between">
          {product.flashSaleOffer ? (
            <Box display="flex" alignItems="center">
              <p className="text-md font-semibold bg-custom-main px-5 py-1 border shadow-md rounded text-custom-white">
                ${product.flashSaleOffer}
              </p>
              <p className="text-md font-semibold line-through ml-2 text-gray-600">
                ${product.price}
              </p>
            </Box>
          ) : (
            <Box>
              <p className="text-md font-semibold  text-[#0C1734]">
                ${product.price}
              </p>
            </Box>
          )}
          <Stack
            display="flex"
            flexDirection="row"
            sx={{ marginTop: "10px", marginBottom: "20px" }}>
            <Box>
              <CartButton product={product} />
            </Box>
            <Link href={`/products/${product._id}`}>
              <InfoIcon sx={{ fontSize: 25, color: "#0C1734" }} />
            </Link>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default ProductsCard;
