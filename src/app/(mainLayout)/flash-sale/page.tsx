// import { flashSaleProductData } from "@/data/FlashProductData";
// import { IProduct } from "@/types/type.global";
// import ProductsCard from "@/utils/ProductsCard";
// import { Container } from "@mui/material";
// import React from "react";

// const FlashSalePage = async () => {
//   // const res = await fetch(
//   //   "https://baby-care-server-azure.vercel.app/api/v1/products"
//   // );
//   // const data = await res.json();

//   // const filterData = data?.data?.filter((item: IProduct) => item.flashSale);

//   return (
//     <Container>
//       <div className=" flex items-center justify-between my-5 mt-24">
//         <p className=" text-2xl lg:text-3xl font-semibold text-gray-600">
//           Flash Sale
//         </p>

//       </div>
//       <div className="flex items-center justify-evenly flex-col lg:flex-row gap-4 lg:gap-0 bg-[#0C1734] p-3 rounded-md text-white mb-8">
//         <h1 className=" text-2xl font-semibold text-red-500">Flash sale!</h1>
//         <div className="flex items-center justify-between">
//           <div className="flex items-center flex-col mr-3">
//             <h1 className="text-lg font-semibold">26</h1>
//             <p className="text-md font-medium">Days</p>
//           </div>
//           <div className="flex items-center flex-col mr-3">
//             <h1 className="text-lg font-semibold">13</h1>
//             <p className="text-md font-medium">Hours</p>
//           </div>
//           <div className="flex items-center flex-col mr-3">
//             <h1 className="text-lg font-semibold">09</h1>
//             <p className="text-md font-medium">Minutes</p>
//           </div>
//           <div className="flex items-center flex-col mr-3">
//             <h1 className="text-lg font-semibold">13</h1>
//             <p className="text-md font-medium">Seconds</p>
//           </div>
//         </div>
//         <p className="text-lg font-semibold text-red-500">Hurry up!</p>
//       </div>
//       <div className=" grid grid-cols-2 lg:grid-cols-4 gap-5 mx-auto">
//         {flashSaleProductData.map((product) => (
//           <ProductsCard product={product} key={product.id} />
//         ))}
//       </div>
//     </Container>
//   );
// };

// export default FlashSalePage;

"use client";
import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { flashSaleProductData } from "@/data/FlashProductData";
import { IProduct } from "@/types/type.global";
import ProductsCard from "@/utils/ProductsCard";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (): TimeLeft => {
  const difference = +new Date("2024-06-01") - +new Date();
  let timeLeft: TimeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return timeLeft;
};

const FlashSalePage: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isMounted) {
    return null; // or a placeholder
  }

  return (
    <Container>
      <div className="flex items-center justify-between my-5 mt-24">
        <p className="text-xl font-semibold w-full p-2">
          <marquee behavior="alternate" direction="left">
            <span className="bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text">
              Discover
            </span>{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-green-500 text-transparent bg-clip-text">
              Exclusive
            </span>{" "}
            <span className="bg-gradient-to-r from-green-500 to-blue-500 text-transparent bg-clip-text">
              Deals
            </span>{" "}
            <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-transparent bg-clip-text">
              This
            </span>{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
              Weekend
            </span>{" "}
            <span className="bg-gradient-to-r from-purple-500 to-red-500 text-transparent bg-clip-text">
              Only
            </span>
          </marquee>
        </p>
      </div>

      <div className="flex items-center justify-evenly flex-col lg:flex-row gap-4 lg:gap-0 bg-[#0C1734] p-3 rounded-md text-white mb-8">
        <h1 className="text-2xl font-semibold text-custom-main">Flash sale!</h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-col mr-3">
            <h1 className="text-lg font-semibold">{timeLeft.days}</h1>
            <p className="text-md font-medium">Days</p>
          </div>
          <div className="flex items-center flex-col mr-3">
            <h1 className="text-lg font-semibold">{timeLeft.hours}</h1>
            <p className="text-md font-medium">Hours</p>
          </div>
          <div className="flex items-center flex-col mr-3">
            <h1 className="text-lg font-semibold">{timeLeft.minutes}</h1>
            <p className="text-md font-medium">Minutes</p>
          </div>
          <div className="flex items-center flex-col mr-3">
            <h1 className="text-lg font-semibold">{timeLeft.seconds}</h1>
            <p className="text-md font-medium">Seconds</p>
          </div>
        </div>
        <p className="text-lg font-semibold text-custom-mainDark">Hurry up!</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mx-auto">
        {flashSaleProductData.map((product) => (
          <ProductsCard product={product} key={product.id} />
        ))}
      </div>
    </Container>
  );
};

export default FlashSalePage;

