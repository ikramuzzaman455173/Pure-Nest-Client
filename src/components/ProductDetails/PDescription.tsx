import Image from "next/image";
import React from "react";
import {
  CircleCheckBig,
  Grape,
  HeartCrack,
  Package,
  Rss,
  Sprout,
  TreePalm,
} from "lucide-react";
import { IProduct } from "@/types/type.global";

type TProductProps = {
  product: IProduct;
};

const PDescription: React.FC<TProductProps> = ({ product }) => {
  return (
    <div className="mt-8">
      <div className="text-center">
        <h1 className="text-2xl lg:text-3xl font-semibold uppercase">
        Your Trusted Cleaning Companion
        </h1>
        <p className="text-md lg:text-lg font-medium">
          Superior Cleaning Solutions for Every Corner of Your Home
        </p>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5 my-12">
        <Image
          className="w-[120px] border  shadow-md h-[350px] object-cover mx-auto p-3 relative transform transition-transform duration-300 hover:scale-110 overflow-hidden "
          src={product?.image}
          width={200}
          height={200}
          alt="Product Image"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 place-content-center">
          <div className=" flex items-center justify-center flex-col text-center shadow p-5 rounded-md">
            <HeartCrack size={30} color="#363636" />
            <p className="text-md font-light mt-2">
            We care about the cleanliness and health of your home
            </p>
          </div>
          <div className=" flex items-center justify-center flex-col text-center shadow p-5 rounded-md">
            <Sprout size={30} color="#363636" />
            <p className="text-md font-light mt-2">
            Made with high-quality, eco-friendly ingredients
            </p>
          </div>
          <div className=" flex items-center justify-center flex-col text-center shadow p-5 rounded-md">
            <Grape size={30} color="#363636" />
            <p className="text-md font-light mt-2">
            Effective against tough stains and grime
            </p>
          </div>
          <div className=" flex items-center justify-center flex-col text-center shadow p-5 rounded-md">
            <Package size={30} color="#363636" />
            <p className="text-md font-light mt-2">
              Sterile packaging for the highest value
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <div className="text-center">
          <h1 className=" text-[#0C1734] text-lg font-light italic">
            {product.description}
          </h1>
        </div>

        <div className="mt-5">
          <div className="flex items-start lg:items-center">
            <Rss size={20} />
            <p className="text-md text-gray-700 ml-2">
            Safe and secure packaging for your convenience
            </p>
          </div>
          <div className="flex items-center my-2">
            <TreePalm size={20} />
            <p className="text-md text-gray-700 ml-2">Subscribe to our newsletter and get exclusive discounts on your first purchase</p>
          </div>
          <div className="flex items-center">
            <CircleCheckBig size={20} />
            <p className="text-md text-gray-700 ml-2">Proven results</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDescription;
