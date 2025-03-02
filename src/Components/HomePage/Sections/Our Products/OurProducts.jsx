import React from "react";
import arrowRight from "../../../../imgs/Fill with Right Arrow.png";
import arrowLeft from "../../../../imgs/Fill With Left Arrow.png";
import CardForOurProducts from "./CardForOurProducts";


import img1 from "../../../../imgs/test.png"
import img2 from "../../../../imgs/Frame 604.png"
import img3 from "../../../../imgs/Frame 6040.png"
import img4 from "../../../../imgs/curology-j7pKVQrTUsM-unsplash 1.png"
import img5 from "../../../../imgs/Frame 608.png"
import img6 from "../../../../imgs/Frame 6zz08.png"
import img7 from "../../../../imgs/Frame32 608.png"
import img8 from "../../../../imgs/Frame 61108.png"

function OurProducts() {

  const data = [
    {
      img: img1,
      nameProduct: "Breed Dry Dog Food",
      Price1: 100,
      ratestar: 3,
      rate: 35,
      newItem:false
    },
    {
      img: img2,
      nameProduct: "CANON EOS DSLR Camera",
      Price1: 360,
      ratestar: 4,
      rate: 95,
      newItem:false

    },
    {
      img: img3,
      nameProduct: "ASUS FHD Gaming Laptop",
      Price1: 700,
      ratestar: 5,
      rate: 325,
      newItem:false

    },
    {
      img: img4,
      nameProduct: "Curology Product Set  ",
      Price1: 500,
      ratestar: 4,
      rate: 145,
      newItem:false
    },
    {
      img: img5,
      nameProduct: "Kids Electric Car ",
      Price1: 960,
      ratestar: 5,
      rate: 65,
      newItem:true,
      colorOneCircle:"#FB1314",
      colorTwoCircle:"#DB4444",
    },
    {
      img: img6,
      nameProduct: "Jr. Zoom Soccer Cleats ",
      Price1: 1160,
      ratestar: 5,
      rate: 35,
      newItem:false,
      colorOneCircle:"#EEFF61",
      colorTwoCircle:"#DB4444",
    },
    {
      img: img7,
      nameProduct: "GP11 Shooter USB Gamepad ",
      Price1: 660,
      ratestar: 4.5,
      rate: 55,
      newItem:true,
      colorOneCircle:"#000000",
      colorTwoCircle:"#DB4444",
    },
    {
      img: img8,
      nameProduct: "Quilted Satin Jacket ",
      Price1: 660,
      ratestar: 4.5,
      rate: 55,
      newItem:false,
      colorOneCircle:"#184A48",
      colorTwoCircle:"#DB4444",
    },
  ];

  return (
    <div className="mt-20">

      <div className="flex items-center space-x-4">
        <div className="bg-[#DB4444] rounded w-5 h-10"></div>
        <h1 className="text-[#DB4444] font-medium text-lg ">Our Products</h1>
      </div>
      {/* arrows left / right */}
      <div className="flex justify-between ">
        <h1 className="mt-5 text-4xl font-semibold">Explore Our Products</h1>
        {/* arrows left / Right */}
        <div className="flex cursor-pointer">
          <img className="w-[46px] h-[46px]" src={arrowLeft} alt="arrow left" />
          <img
            className="w-[46px] h-[46px]"
            src={arrowRight}
            alt="arrow right"
          />
        </div>
      </div>

              {/* Products Cards */}
              <div className="relative flex flex-wrap justify-normal md:justify-between mt-12 ">
        {data.map(
          (
           product,  index
          ) => {
            return (
              <CardForOurProducts
              product={product}
              index={index}
              />
            );
          }
        )}
      </div>

      <div className="text-center my-10">
          <button className="bg-[#DB4444] py-3 text-base rounded px-10 text-white hover:bg-white hover:text-black hover:border">
              View All Products
          </button>
        </div>
    
    </div>
  );
}

export default OurProducts;
