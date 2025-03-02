import React from "react";

import img1 from "../../../../imgs/Frame 605.png"
import img2 from "../../../../imgs/Frame 606.png"
import img3 from "../../../../imgs/Frame 610.png"
import img4 from "../../../../imgs/Frame 6113.png"
import ProductsCardBestSelling from "./ProductsCardBestSelling";

function BestSellingProducts() {
  const data = [
    {
      img: img1,
      nameProduct: "The north coat",
      Price1: 260,
      Price2: 360,
      ratestar: 5,
      rate: 65,
    },
    {
      img: img2,
      nameProduct: "Gucci duffle bag",
      Price1: 960,
      Price2: 1160,
      ratestar: 4.5,
      rate: 65,
    },
    {
      img: img3,
      nameProduct: "RGB liquid CPU Cooler",
      Price1: 160,
      Price2: 170,
      ratestar: 4.5,
      rate: 65,
    },
    {
      img: img4,
      nameProduct: "Small BookSelf ",
      Price1: 360,
      ratestar: 5,
      rate: 65,
    },
  ];
  return (
    <div className="mt-20">
      <div className="flex items-center space-x-4">
        <div className="bg-[#DB4444] rounded w-5 h-10"></div>
        <h1 className="text-[#DB4444] font-medium text-lg ">This Month</h1>
      </div>

      <div className="flex justify-between">
        <h1 className="mt-10 text-4xl font-semibold">Best Selling Products</h1>
        {/* arrows left / Right */}
        <div className="text-center my-10">
          <button className="bg-[#DB4444] py-3 text-base rounded px-10 text-white hover:bg-white hover:text-black hover:border">
            View ALL
          </button>
        </div>
      </div>

            {/* Products Cards */}
            <div className="relative flex justify-center md:justify-normal md:space-x-6 mt-12 md:flex-nowrap flex-wrap">
        {data.map(
          (
            product,
            index) => {
            return (
              <ProductsCardBestSelling
              product={product}
              index={index}
              />
            );
          }
        )}
      </div>
    </div>
  );
}

export default BestSellingProducts;
