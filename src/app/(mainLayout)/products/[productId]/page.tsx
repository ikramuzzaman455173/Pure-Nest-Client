import ProductDescription from "@/components/ProductDetails/ProductDescription";
import ProductImageSlide from "@/components/ProductDetails/ProductImageSlide";
import ProductSideInfo from "@/components/ProductDetails/ProductSideInfo";
import { IProduct } from "@/types/type.global";
import { Container } from "@mui/material";
import React from "react";

interface IParams {
  productId: string;
}

interface IProps {
  params: IParams;
}

export const generateStaticParams = async () => {
  const res = await fetch(
    "https://pure-nest-server.vercel.app/api/products"
  );
  const products = await res.json();

  return products.slice(0, 10).map((product: IProduct) => ({
    productId: product._id,
  }));
};

const ProductsDetailsPage: React.FC<IProps> = async ({ params }) => {
  const { productId } = params;

  const res = await fetch(
    `https://pure-nest-server.vercel.app/api/products/${productId}`,
    { cache: "no-store" }
  );

  const data = await res.json();

  return (
    <div className=" my-12 mt-28">
      <Container>
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5">
          <ProductImageSlide product={data} />
          <ProductSideInfo product={data} />
        </div>
        <div className="mt-12">
          <ProductDescription product={data} />
        </div>
      </Container>
    </div>
  );
};

export default ProductsDetailsPage;
