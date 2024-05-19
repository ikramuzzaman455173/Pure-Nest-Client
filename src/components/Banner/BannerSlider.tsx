"use client";

import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { getAllBannerData } from "@/data/BannerData";
import Image from "next/image";
import Styles from "../../styles/Global.module.css";
import { Button } from "@mui/material";
import Link from "next/link";

const BannerSlider = () => {
  const banners = getAllBannerData();
  const bgColor = ["bg-red-500", "bg-green-500", "bg-orange-500"];

  return (
    <div>
      <div>
        <SwiperComponent
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          <div>
            {banners.map((banner, index) => (
              <div key={banner.id}>
                <SwiperSlide>
                  <div
                    className={`${Styles.mainContainer} flex items-center flex-col lg:flex-row lg:justify-around`}
                  >
                    <div>
                      <p className="text-4xl lg:text-5xl max-w-[14ch] font-bold">{banner.title}</p>
                      <div className="flex items-center my-3 lg:my-4">
                        <p className="text-[#0C1734] text-3xl lg:text-4xl font-semibold">${banner.currPrice}</p>
                        <p className=" text-xl lg:text-2xl font-light ml-3  line-through">${banner.prevPrice}</p>
                      </div>
                      <div>
                        <Button component={Link} href="/products" size="large">Shop Now</Button>
                      </div>
                    </div>
                    <div className=" relative shrink-0 my-10 lg:my-0">
                      <Image
                        className="w-full h-[300px] lg:h-[400px] object-cover"
                        src={banner.image}
                        width={500}
                        height={500}
                        alt="Banner Image"
                      />
                      <span
                        className={`inline-block absolute top-0 right-0 p-4 capitalize font-semibold text-lg text-center text-white rounded-full w-[90px] h-[90px] ${
                          bgColor[index % bgColor.length]
                        }`}
                      >
                        {banner.offerText}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            ))}
          </div>
        </SwiperComponent>
      </div>
    </div>
  );
};

export default BannerSlider;
