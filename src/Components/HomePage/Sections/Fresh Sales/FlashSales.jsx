import React from "react";
import arrowRight from "../../../../imgs/Fill with Right Arrow.png";
import arrowLeft from "../../../../imgs/Fill With Left Arrow.png";
import ProductsCard from "../../Sections/Fresh Sales/ProductsCard";

import img1 from "../../../../imgs/Frame 611.png";
import img2 from "../../../../imgs/Frame 612.png";
import img3 from "../../../../imgs/Frame 613.png";
import img4 from "../../../../imgs/Frame 614.png";

function FlashSales() {
  const data = [
    {
      persent: 40,
      img: img1,
      nameProduct: "HAVIT HV-G92 Gamepad",
      Price1: 120,
      Price2: 160,
      ratestar: 5,
      rate: 88,
    },
    {
      persent: 35,
      img: img2,
      nameProduct: "AK-900 Wired Keyboard",
      Price1: 960,
      Price2: 1160,
      ratestar: 4,
      rate: 75,
    },
    {
      persent: 30,
      img: img3,
      nameProduct: "IPS LCD Gaming Monitor",
      Price1: 370,
      Price2: 400,
      ratestar: 5,
      rate: 99,
    },
    {
      persent: 25,
      img: img4,
      nameProduct: "S-Series Comfort Chair ",
      Price1: 375,
      Price2: 400,
      ratestar: 4.5,
      rate: 99,
    },
    {
      persent: 25,
      img: img4,
      nameProduct: "S-Series Comfort Chair ",
      Price1: 375,
      Price2: 400,
      ratestar: 4.5,
      rate: 99,
    },
  ];
  return (
    <div className="mt-44">
      {/* top */}
      <div className="flex items-center space-x-4">
        <div className="bg-[#DB4444] rounded w-5 h-10"></div>
        <h1 className="text-[#DB4444] font-medium text-lg ">Today's</h1>
      </div>

      <div>
        <div className="flex items-end md:justify-between md:flex-row flex-col justify-center">
          <div className="flex space-x-28 items-end md:flex-row flex-col justify-center md:justify-between">
            <h1 className="text-4xl font-semibold">Flash Sales</h1>
            {/* Timers */}
            <div className="flex space-x-4 text-[#DB4444] items-center">
              <span className="text-black text-sm font-semibold">
                Days
                <div className="text-3xl font-bold">03</div>
              </span>
              <span className="text-3xl font-bold">:</span>
              <span className="text-black text-sm font-semibold">
                Hours
                <div className="text-3xl font-bold">23</div>
              </span>
              <span className="text-3xl font-bold">:</span>
              <span className="text-black text-sm font-semibold">
                Minutes
                <div className="text-3xl font-bold">19</div>
              </span>
              <span className="text-3xl font-bold">:</span>
              <span className="text-black text-sm font-semibold">
                Seconds
                <div className="text-3xl font-bold">56</div>
              </span>
            </div>
          </div>

          {/* arrows left / Right */}
          <div className="flex space-x-2 cursor-pointer">
            <img src={arrowLeft} alt="arrow left" />
            <img src={arrowRight} alt="arrow right" />
          </div>
        </div>
      </div>
      {/* Products Cards */}
      <div className="relative w-fit justify-center md:justify-normal md:w-screen flex gap-5 mt-12 md:flex-nowrap flex-wrap">
        {data.map(
          (
            product,
            index
          ) => {
            return (
              <ProductsCard
                product={product}
                index={index}
                data={data}
              />
            );
          }
        )}
      </div>
        <div className="text-center my-10">
        <button className="bg-[#DB4444] py-3 text-base rounded px-10 text-white hover:bg-white hover:text-black hover:border">
        View ALL Products
      </button>
        </div>
        <hr class="h-px my-8 bg-gray-300 border-0 "/>

    </div>
  );
}

export default FlashSales;
