import SlideImgOne from "../assets/slider-img/slider-img-1.jpg";
import SlideImgTwo from "../assets/slider-img/slider-img-2.jpg";
import SlideImgThree from "../assets/slider-img/slider-img-3.jpg";
// import SlideImgFour from "../assets/slider-img/slider-img-4.jpg";

const bannerData = [
  {
    id: "1",
    title: "Eco-Friendly All-Purpose Cleaner",
    currPrice: "12.99",
    prevPrice: "15.99",
    image: SlideImgOne,
    offerText: "up to -30%",
  },
  {
    id: "2",
    title: "Disinfectant Wipes - Pack of 50",
    currPrice: "7.99",
    prevPrice: "9.99",
    image: SlideImgTwo,
    offerText: "up to -20%",
  },
  {
    id: "3",
    title: "Robot Vacuum Cleaner - Model V2",
    currPrice: "199.99",
    prevPrice: "249.99",
    image: SlideImgThree,
    offerText: "up to -15%",
  },
  // {
  //   id: "4",
  //   title: "Microfiber Cleaning Cloths Pack",
  //   currPrice: "8.49",
  //   prevPrice: "10.99",
  //   image: SlideImgFour,
  //   offerText: "up to -20%",
  // },
];

export const getAllBannerData = () => {
  return bannerData;
};
