// "use client";

// import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination } from "swiper/modules";
// import { getAllBannerData } from "@/data/BannerData";
// import Image from "next/image";
// import { Button } from "@mui/material";
// import Link from "next/link";

// const BannerSlider = () => {
//   const banners = getAllBannerData();
//   const bgColor = ["bg-red-500", "bg-green-500", "bg-orange-500"];

//   return (
//     <div>
//       <div>
//         <SwiperComponent
//           pagination={{
//             clickable: true,
//           }}
//           modules={[Pagination]}>
//           <div>
//             {banners.map((banner, index) => (
//               <div key={banner.id}>
//                 <SwiperSlide>
//                   <div
//                     className={`bg-gradient-to-r from-blue-700 to-indigo-600 p-10 rounded-md flex items-center flex-col lg:flex-row lg:justify-around mt-28 border-4 shadow-md border-custom-gray-300`}>
//                     <div>
//                       <p className="text-4xl lg:text-5xl max-w-[14ch] text-custom-white font-bold">
//                         {banner.title}
//                       </p>
//                       <div className="flex items-center my-3 lg:my-4">
//                         <p className="text-custom-white text-3xl lg:text-4xl font-semibold">
//                           ${banner.currPrice}
//                         </p>
//                         <p className=" text-xl lg:text-2xl font-light ml-3 text-custom-red bg-[#ecf0f1] p-2 rounded-md line-through">
//                           ${banner.prevPrice}
//                         </p>
//                       </div>
//                       <div>
//                         <Button
//                           sx={{
//                             ":hover": {
//                               background: "#1e293b",
//                             },
//                           }}
//                           variant="contained"
//                           component={Link}
//                           href="/products"
//                           size="large">
//                           Shop Now
//                         </Button>
//                       </div>
//                     </div>
//                     <div className=" relative shrink-0 my-10 lg:my-0">
//                       <Image
//                         className="w-full h-[300px] lg:h-[400px] object-cover"
//                         src={banner.image}
//                         width={500}
//                         height={500}
//                         alt="Banner Image"
//                       />
//                       <span
//                         className={`inline-block absolute top-0 right-0 p-4 capitalize font-semibold text-lg text-center text-white rounded-full w-[90px] h-[90px] ${
//                           bgColor[index % bgColor.length]
//                         }`}>
//                         {banner.offerText}
//                       </span>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//               </div>
//             ))}
//           </div>
//         </SwiperComponent>
//       </div>
//     </div>
//   );
// };

// export default BannerSlider;








"use client";

import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import { getAllBannerData } from "@/data/BannerData";
import Image from "next/image";
import { Button } from "@mui/material";
import Link from "next/link";

const BannerSlider = () => {
  const banners = getAllBannerData();
  const bgColor = ["bg-red-500", "bg-green-500", "bg-orange-500"];

  return (
    <div className="mt-28">
      <SwiperComponent
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="rounded-md border-4 shadow-md border-custom-gray-300"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={banner.id}>
            <div className="bg-gradient-to-r from-blue-700 to-indigo-600 p-10 flex items-center flex-col lg:flex-row lg:justify-around">
              <div className="text-center lg:text-left">
                <p className="text-4xl lg:text-5xl max-w-[14ch] text-custom-white font-bold">
                  {banner.title}
                </p>
                <div className="flex items-center my-3 lg:my-4">
                  <p className="text-custom-white text-3xl lg:text-4xl font-semibold">
                    ${banner.currPrice}
                  </p>
                  <p className="text-xl lg:text-2xl font-light ml-3 text-custom-red bg-[#ecf0f1] p-2 rounded-md line-through">
                    ${banner.prevPrice}
                  </p>
                </div>
                <Button
                  sx={{
                    ":hover": {
                      background: "#1e293b",
                    },
                  }}
                  variant="contained"
                  component={Link}
                  href="/products"
                  size="large"
                >
                  Shop Now
                </Button>
              </div>
              <div className="relative shrink-0 my-10 lg:my-0">
                <Image
                  className="w-full h-[300px] lg:h-[400px] object-cover"
                  src={banner.image}
                  width={500}
                  height={500}
                  alt="Banner Image"
                />
                <span
                  className={`inline-block absolute top-0 right-0 p-4 capitalize font-semibold text-lg text-center border-2 text-white rounded-full w-[90px] h-[90px] ${
                    bgColor[index % bgColor.length]
                  }`}
                >
                  {banner.offerText}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </div>
  );
};

export default BannerSlider;
