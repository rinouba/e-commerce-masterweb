import React from "react";
import arrowRight from "../../../../imgs/Fill with Right Arrow.png";
import arrowLeft from "../../../../imgs/Fill With Left Arrow.png";
import CardForCategries from "./CardForCategries";

function Categories() {
  return (
    <div className="mt-20">
      <div className="flex items-center space-x-4">
        <div className="bg-[#DB4444] rounded w-5 h-10"></div>
        <h1 className="text-[#DB4444] font-medium text-lg ">Categories</h1>
      </div>

      <div className="flex justify-between">
        <h1 className="mt-5 text-4xl font-semibold">Browse By Category</h1>
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
      <CardForCategries/>
      <hr class="h-px my-8 bg-gray-300 border-0 "/>

    </div>
  );
}

export default Categories;

