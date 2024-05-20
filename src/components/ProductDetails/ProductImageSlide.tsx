"use client";
import React from "react";
import DaipersOne from "../../assets/images/DaipersOne.jpg";
import DaipersTwo from "../../assets/images/DaipersTwo.jpg";
import DaipersThree from "../../assets/images/DaipersThree.jpg";
import DaipersFour from "../../assets/images/DaipersFour.jpg";
import Image from "next/image";
import { IProduct } from "@/types/type.global";

type TProductProps = {
  product: IProduct;
};

const ProductImageSlide: React.FC<TProductProps> = ({ product }) => {
  return (
    <>
      <Image
        className="w-[200px] border hover:shadow-md h-[550px] object-fit mx-auto p-5 relative transform transition-transform duration-300 hover:scale-110 overflow-hidden "
        src={product?.image}
        width={500}
        height={500}
        alt="Product Image"
      />
    </>
  );
};

export default ProductImageSlide;
