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
    "https://baby-care-server-azure.vercel.app/api/v1/products"
  );
  const products = await res.json();

  return products.data.slice(0, 10).map((product: IProduct) => ({
    productId: product._id,
  }));
};

const ProductsDetailsPage: React.FC<IProps> = async ({ params }) => {
  const { productId } = params;

  const res = await fetch(
    `https://baby-care-server-azure.vercel.app/api/v1/products/${productId}`,
    { cache: "no-store" }
  );

  const data = await res.json();
  const product = data?.data;

  return (
    <div className=" my-12">
      <Container>
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5">
          <ProductImageSlide product={product} />
          <ProductSideInfo product={product} />
        </div>
        <div className="mt-12">
          <ProductDescription product={product} />
        </div>
      </Container>
    </div>
  );
};

export default ProductsDetailsPage;
