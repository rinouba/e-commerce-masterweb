import React from "react";

import img1 from "../imgs/Frame 605.png";
import img2 from "../imgs/Frame 610.png";
import img3 from "../imgs/Frame32 608.png";
import img4 from "../imgs/Frame 61108.png";

import CardWhishListTop from "../Components/WishListPage/CardWhishListTop";
import CardWhishListBottem from "../Components/WishListPage/CardWhishListBottem";
import { useSelector } from "react-redux";

function WishlistPage() {
  const whislist = useSelector((state) => state.counter.cartItemsWhishList);

  const uniqueArray = whislist.filter((obj, index, self) =>
    index === self.findIndex((o) => o.nameProduct === obj.nameProduct)
  );

  const data = [
    {
      img: img1,
      persent: 35,
      nameProduct: "Gucci duffle bag",
      Price1: 960,
      Price2: 1160,
      ratestar: 4.5,
      rate: 65,
    },
    {
      img: img2,
      nameProduct: "RGB liquid CPU Cooler",
      Price1: 160,
      Price2: 170,
      ratestar: 4.5,
      rate: 65,
    },
    {
      img: img3,
      nameProduct: "GP11 Shooter USB Gamepad ",
      Price1: 660,
      ratestar: 4.5,
      rate: 55,
      newItem: true,
    },
    {
      img: img4,
      nameProduct: "Quilted Satin Jacket ",
      Price1: 660,
      ratestar: 4.5,
      rate: 55,
      newItem: false,
    },
  ];

  return (
    <section className="w-5/6 mx-auto mt-20">
      <div className="flex justify-between items-center">
        <h3 className="text-lg">Wishlist ({uniqueArray.length})</h3>
        <button className="bg-white text-black border border-gray-400 rounded py-3 px-10 hover:bg-black hover:text-white">
          Move All To Bag
        </button>
      </div>

      <div className="relative w-full flex justify-center md:justify-normal md:space-x-6 mt-12 md:flex-nowrap flex-wrap">
        {uniqueArray.map(
          (product,index) => {
            return (
              <CardWhishListTop
                product={product}
                index={index}
              />
            );
          }
        )}
      </div>

      <div className="flex justify-between mt-10 mb-20">
        <div className="flex items-center space-x-4">
          <div className="bg-[#DB4444] rounded w-5 h-10"></div>
          <h1 className="text-[#DB4444] font-medium text-lg ">Just For You</h1>
        </div>
        <button className="bg-white text-black border border-gray-400 rounded py-3 px-10 hover:bg-black hover:text-white">
          See All
        </button>
      </div>

      <div className="relative w-full flex justify-center md:justify-normal md:space-x-6 mt-12 mb-20 md:flex-nowrap flex-wrap">
        {data.map(
          (product,index) => {
            return (
              <CardWhishListBottem
                product={product}
                index={index}
              />
            );
          }
        )}
      </div>
    </section>
  );
}

export default WishlistPage;
