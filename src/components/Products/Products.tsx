// import { flashSaleProductData } from "@/data/FlashProductData";
import { IProduct } from "@/types/type.global";
import ProductsCard from "@/utils/ProductsCard";
import React from "react";

const AllProducts = async () => {
  const res = await fetch(
    "https://pure-nest-server.vercel.app/api/products",
    {
      cache: "no-cache",
    }
  );

  const flashSaleProductData = await res.json();

  return (
    <div className="ml-0 lg:ml-4 mt-5 lg:mt-20">
      <div className="md:flex-row flex-col flex items-center justify-between mb-5">
        <p className="text-xl font-semibold text-[#0C1734]">
          Our Collection of Products
        </p>
        <p className="text-lg font-semibold text-gray-600">
          Showing <span className="text-red-500">1-15</span> of{" "}
          <span className="text-[#0C1734]">15</span> Items
        </p>
      </div>
      <div className=" grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-5 mx-auto">
        {flashSaleProductData?.map((product:IProduct) => (
          <ProductsCard product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
