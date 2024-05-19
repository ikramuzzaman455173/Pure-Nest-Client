// import BabyCarrier from "../assets/images/BabyCarrier.jpg";
// import BabyMonitor from "../assets/images/BabyMonitor.jpg";
// import BabyNail from "../assets/images/BabyNail.jpg";
// import BabySunscreen from "../assets/images/BabySunscreen.jpg";
// import BabySwaddle from "../assets/images/BabySwaddle.jpg";
// import BabyThermometer from "../assets/images/BabyThermometer.jpg";
// import BabyWash from "../assets/images/BabyWash.jpg";
// import BabyWipes from "../assets/images/BabyWipes.jpg";
// import BootleSet from "../assets/images/BootleSet.jpg";
// import DiapersOne from "../assets/images/DaipersOne.jpg";
// import NasalAspirator from "../assets/images/NasalAspirator.jpg";
// import TeethingToys from "../assets/images/TeethingToys.jpg";

// const productData = [
//   {
//     id: "1",
//     title: "Baby Diapers Pack",
//     price: "15.99",
//     flashSaleOffer: "12.99",
//     ratings: "4.5",
//     brand: "Pampers",
//     discount: "20%",
//     category: "Diapers",
//     image: DiapersOne,
//     description:
//       "Keep your baby comfortable and dry with these high-quality diapers from Pampers. Designed with soft materials and excellent absorption, ensuring a peaceful sleep for your little one.",
//   },
//   {
//     id: "2",
//     title: "Baby Bottle Set",
//     price: "19.99",
//     flashSaleOffer: "15.99",
//     ratings: "4.7",
//     brand: "Philips Avent",
//     discount: "15%",
//     image: BootleSet,
//     category: "Feeding",
//     description:
//       "This set includes everything you need for feeding your baby. Made with BPA-free materials and an anti-colic system, these bottles are gentle on your baby's delicate tummy.",
//   },
//   {
//     id: "3",
//     title: "Baby Shampoo & Body Wash",
//     price: "8.49",
//     flashSaleOffer: "6.99",
//     ratings: "4.3",
//     image: BabyWash,
//     brand: "Johnson's Baby",
//     discount: "25%",
//     category: "Bath & Skincare",
//     description:
//       "Johnson's Baby Shampoo & Body Wash is gentle on your baby's sensitive skin and eyes. With a tear-free formula, it cleanses and nourishes your baby's delicate skin without drying it out.",
//   },
//   {
//     id: "4",
//     title: "Baby Wipes",
//     price: "12.99",
//     flashSaleOffer: "9.99",
//     ratings: "4.6",
//     brand: "Huggies",
//     discount: "10%",
//     image: BabyWipes,
//     category: "Wipes",
//     description:
//       "Huggies Baby Wipes are thick, soft, and absorbent. They are fragrance-free, hypoallergenic, and dermatologically tested, making them safe for your baby's delicate skin.",
//   },
//   {
//     id: "5",
//     title: "Baby Nasal Aspirator",
//     price: "9.99",
//     flashSaleOffer: "7.99",
//     ratings: "4.8",
//     image: NasalAspirator,
//     brand: "FridaBaby",
//     discount: "30%",
//     category: "Health & Safety",
//     description:
//       "Clear your baby's stuffy nose quickly and effectively with the FridaBaby Nasal Aspirator. It's gentle, safe, and easy to use, providing instant relief for your little one.",
//   },
//   {
//     id: "6",
//     title: "Baby Nail Clippers Set",
//     price: "6.99",
//     flashSaleOffer: "4.99",
//     ratings: "4.4",
//     brand: "Safety 1st",
//     image: BabyNail,
//     category: "Grooming",
//     discount: "35%",
//     description:
//       "Trim your baby's nails safely and precisely with the Safety 1st Nail Clippers Set. Designed with curved cutting edges and a comfortable grip, it ensures a stress-free grooming experience.",
//   },
//   {
//     id: "7",
//     title: "Baby Teething Toys",
//     price: "10.49",
//     flashSaleOffer: "8.49",
//     ratings: "4.6",
//     brand: "Nuby",
//     image: TeethingToys,
//     discount: "18%",
//     category: "Teething",
//     description:
//       "Relieve your baby's teething discomfort with these colorful and textured teething toys from Nuby. Made from soft, BPA-free materials, they massage and soothe sore gums.",
//   },
//   {
//     id: "8",
//     title: "Baby Sunscreen Lotion",
//     price: "14.99",
//     flashSaleOffer: "11.99",
//     ratings: "4.5",
//     brand: "Coppertone",
//     image: BabySunscreen,
//     discount: "8%",
//     category: "Sun Protection",
//     description:
//       "Protect your baby's delicate skin from harmful UV rays with Coppertone Baby Sunscreen Lotion. Formulated with gentle, hypoallergenic ingredients, it provides broad-spectrum SPF 50 protection.",
//   },
//   {
//     id: "9",
//     title: "Baby Thermometer",
//     price: "19.99",
//     flashSaleOffer: "16.99",
//     ratings: "4.7",
//     brand: "Braun",
//     discount: "11%",
//     image: BabyThermometer,
//     category: "Health & Safety",
//     description:
//       "Monitor your baby's temperature accurately and comfortably with the Braun Baby Thermometer. It offers precise readings in seconds, ensuring you can quickly detect any changes in your baby's health.",
//   },
//   {
//     id: "10",
//     title: "Baby Carrier",
//     price: "29.99",
//     flashSaleOffer: "24.99",
//     ratings: "4.8",
//     brand: "Ergobaby",
//     discount: "35%",
//     image: BabyCarrier,
//     category: "Travel & Gear",
//     description:
//       "Keep your baby close and secure while on the move with the Ergobaby Baby Carrier. Ergonomically designed with padded straps and lumbar support, it ensures both you and your baby stay comfortable.",
//   },
//   {
//     id: "11",
//     title: "Baby Swaddle Blankets",
//     price: "17.99",
//     flashSaleOffer: "14.99",
//     ratings: "4.6",
//     brand: "Aden + Anais",
//     discount: "40%",
//     image: BabySwaddle,
//     category: "Bedding",
//     description:
//       "Wrap your baby in comfort and warmth with these soft and breathable swaddle blankets from Aden + Anais. Versatile and stylish, they are perfect for swaddling, nursing, and cuddling.",
//   },
//   {
//     id: "12",
//     title: "Baby Monitor",
//     price: "79.99",
//     flashSaleOffer: "69.99",
//     ratings: "4.9",
//     discount: "15%",
//     brand: "Infant Optics",
//     image: BabyMonitor,
//     category: "Safety",
//     description:
//       "Stay connected to your baby day and night with the Infant Optics Baby Monitor. Featuring a long-range transmission and a crystal-clear display, it provides peace of mind for parents.",
//   },
// ];

// export const getAllFlashProductData = () => {
//   return productData;
// };






const productData = [
  {
    id: "1",
    title: "Multi-Purpose Cleaning Spray",
    price: "5.99",
    flashSaleOffer: "4.99",
    ratings: "4.5",
    brand: "Lysol",
    discount: "17%",
    category: "Cleaning Supplies",
    description:
      "Lysol Multi-Purpose Cleaning Spray kills 99.9% of viruses and bacteria. Ideal for use on kitchen counters, appliances, and sinks, it leaves a fresh, clean scent.",
    imageUrl: "https://www.amazon.com/dp/B07KFBXW4M" // Example URL
  },
  {
    id: "2",
    title: "Dish Soap",
    price: "3.99",
    flashSaleOffer: "2.99",
    ratings: "4.7",
    brand: "Dawn",
    discount: "25%",
    category: "Cleaning Supplies",
    description:
      "Dawn Dish Soap cuts through grease and grime, leaving your dishes sparkling clean. Its powerful formula is tough on grease but gentle on hands.",
    imageUrl: "https://www.amazon.com/dp/B01N0XJY3O" // Example URL
  },
  {
    id: "3",
    title: "Disinfecting Wipes",
    price: "6.49",
    flashSaleOffer: "4.99",
    ratings: "4.8",
    brand: "Clorox",
    discount: "23%",
    category: "Cleaning Supplies",
    description:
      "Clorox Disinfecting Wipes kill 99.9% of germs and viruses. Perfect for cleaning and disinfecting hard, non-porous surfaces like kitchen counters and bathroom fixtures.",
    imageUrl: "https://www.amazon.com/dp/B01LXEQMJA" // Example URL
  },
  {
    id: "4",
    title: "Glass Cleaner",
    price: "4.99",
    flashSaleOffer: "3.99",
    ratings: "4.6",
    brand: "Windex",
    discount: "20%",
    category: "Cleaning Supplies",
    description:
      "Windex Glass Cleaner provides streak-free shine for your windows, mirrors, and other glass surfaces. Its ammonia-based formula cuts through grease and grime effortlessly.",
    imageUrl: "https://www.amazon.com/dp/B000RUVQAE" // Example URL
  },
  {
    id: "5",
    title: "Laundry Detergent",
    price: "12.99",
    flashSaleOffer: "9.99",
    ratings: "4.9",
    brand: "Tide",
    discount: "23%",
    category: "Cleaning Supplies",
    description:
      "Tide Laundry Detergent delivers powerful cleaning and freshness. Effective in both cold and hot water, it removes stains and odors while protecting fabrics.",
    imageUrl: "https://www.amazon.com/dp/B00Y3TM6CO" // Example URL
  },
  {
    id: "6",
    title: "Mop and Bucket Set",
    price: "24.99",
    flashSaleOffer: "19.99",
    ratings: "4.7",
    brand: "O-Cedar",
    discount: "20%",
    category: "Cleaning Supplies",
    description:
      "O-Cedar Mop and Bucket Set makes cleaning floors easy and efficient. The spin mop system ensures that the mop is just wet enough for effective cleaning without excess water.",
    imageUrl: "https://www.amazon.com/dp/B07G2KJHR4" // Example URL
  },
  {
    id: "7",
    title: "Cleaning Sponges",
    price: "4.49",
    flashSaleOffer: "3.49",
    ratings: "4.5",
    brand: "Scotch-Brite",
    discount: "22%",
    category: "Cleaning Supplies",
    description:
      "Scotch-Brite Cleaning Sponges are durable and versatile, perfect for tackling tough messes in the kitchen and around the house. They are long-lasting and easy to rinse.",
    imageUrl: "https://www.amazon.com/dp/B01LY0I0QO" // Example URL
  },
  {
    id: "8",
    title: "Toilet Bowl Cleaner",
    price: "3.99",
    flashSaleOffer: "2.99",
    ratings: "4.6",
    brand: "Lysol",
    discount: "25%",
    category: "Cleaning Supplies",
    description:
      "Lysol Toilet Bowl Cleaner powers through tough stains and toilet rings. It leaves your toilet clean, sanitized, and fresh-smelling with minimal effort.",
    imageUrl: "https://www.amazon.com/dp/B00L9JGOYA" // Example URL
  },
  {
    id: "9",
    title: "Vacuum Cleaner",
    price: "79.99",
    flashSaleOffer: "69.99",
    ratings: "4.8",
    brand: "Bissell",
    discount: "12%",
    category: "Cleaning Supplies",
    description:
      "Bissell Vacuum Cleaner provides powerful suction and multi-surface cleaning. Its lightweight design and swivel steering make it easy to maneuver around furniture and tight spaces.",
    imageUrl: "https://www.amazon.com/dp/B07F6N3RT6" // Example URL
  },
  {
    id: "10",
    title: "Floor Cleaner Solution",
    price: "9.99",
    flashSaleOffer: "7.99",
    ratings: "4.7",
    brand: "Bona",
    discount: "20%",
    category: "Cleaning Supplies",
    description:
      "Bona Floor Cleaner Solution is safe for hardwood floors and leaves no residue. Its gentle yet effective formula removes dirt and grime, restoring the natural shine of your floors.",
    imageUrl: "https://www.amazon.com/dp/B0019M7T20" // Example URL
  },
  {
    id: "11",
    title: "Rubber Cleaning Gloves",
    price: "3.49",
    flashSaleOffer: "2.49",
    ratings: "4.5",
    brand: "Playtex",
    discount: "29%",
    category: "Cleaning Supplies",
    description:
      "Playtex Rubber Cleaning Gloves protect your hands while tackling tough cleaning jobs. They are durable, comfortable, and offer a secure grip even when wet.",
    imageUrl: "https://www.amazon.com/dp/B001RZTPYI" // Example URL
  },
  {
    id: "12",
    title: "Trash Bags",
    price: "10.99",
    flashSaleOffer: "8.99",
    ratings: "4.7",
    brand: "Glad",
    discount: "18%",
    category: "Cleaning Supplies",
    description:
      "Glad Trash Bags are strong and durable, perfect for all your trash disposal needs. They offer reliable strength and a drawstring closure to prevent spills and messes.",
    imageUrl: "https://www.amazon.com/dp/B00U8YOG8C" // Example URL
  },
];

export const getAllFlashProductData = () => {
  return productData;
};
