import Image from "next/image";
import React from "react";
import Styles from "../styles/Global.module.css";
import Link from "next/link";

const CategoriesCard = ({ category }: any) => {
  const categoryUrl = encodeURIComponent(
    category.title.toLowerCase().replace(/\s+/g, "-")
  );

  return (
    <div
      className={`bg-gray-50 p-3 rounded-md cursor-pointer relative ${Styles.CCContainer}`}>
      <Image
        className="w-[100px] h-[250px] object-cover mx-auto p-3 relative transform transition-transform duration-300 hover:scale-110 overflow-hidden "
        src={category?.image}
        width={200}
        height={200}
        alt="Product Image"
      />
      <div
        className={`text-center text-lg font-medium text-[#474747] my-2 ${Styles.CCTitle}`}>
        <Link href={`/products?category=${categoryUrl}`}>{category.title}</Link>
      </div>
    </div>
  );
};

export default CategoriesCard;
