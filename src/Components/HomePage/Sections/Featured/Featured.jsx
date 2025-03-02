import React from "react";

import Play5 from "../../../../imgs/ps5-slim-goedkope-playstation_large 1.png";
import Women from "../../../../imgs/attractive-woman-wearing-hat-posing-black-background 1.png";
import Speakers from "../../../../imgs/Frame 707.png";
import Perfume from "../../../../imgs/Frame 706.png";

function Featured() {
  return (
    <div className="my-10">
      <div className="flex items-center space-x-4">
        <div className="bg-[#DB4444] rounded w-5 h-10"></div>
        <h1 className="text-[#DB4444] font-medium text-lg ">Featured</h1>
      </div>
      <h1 className="mt-5 text-3xl font-semibold">New Arrival</h1>
      {/*  */}
      <div className="flex md:flex-row flex-col justify-between gap-7 mt-20">
        <div className="bg-black text-white relative pt-16 rounded md:w-1/2 w-full">
          <img src={Play5} alt="ps5 slim goedkope playstation large" />
          <div className="absolute bottom-5 left-7">
            <h3 className="text-2xl font-medium">PlayStation 5</h3>
            <p className="mt-3 text-gray-200 text-sm">
              Black and White version of the PS5 <br /> coming out on sale.
            </p>
            <button className="my-3 border-b">Shop Now</button>
          </div>
        </div>
        <div className="flex flex-col gap-7 md:w-1/2 w-full">
          <div className="relative text-white bg-[#0D0D0D] flex justify-end">
            <img
              src={Women}
              alt="attractive woman wearing hat posing black background"
            />
            <div className="absolute bottom-5 left-7">
              <h3 className="text-2xl font-medium">Women’s Collections</h3>
              <p className="mt-3 text-gray-200 text-sm">
                Featured woman collections that <br /> give you another vibe.
              </p>
              <button className="my-3 border-b">Shop Now</button>
            </div>
          </div>

          <div className="flex gap-7">
            <div className="bg-[#242424] relative py-5 text-white w-1/2 flex justify-center">
              <img src={Speakers} alt="Speakers" />
              <div className="absolute bottom-5 left-7">
                <h3 className="text-2xl font-medium">Speakers</h3>
                <p className=" text-gray-200 text-sm">
                  Amazon wireless speakers
                </p>
                <button className="my-2 border-b">Shop Now</button>
              </div>
            </div>

            <div className="bg-[#242424] text-white flex justify-center relative w-1/2 items-center">
              <img src={Perfume} alt="perfume" className="w-3/4 h-3/4" />
              <div className="absolute bottom-10 left-7">
                <h3 className="text-2xl font-medium">Perfume</h3>
                <p className="mt-3 text-gray-200 text-sm">
                  GUCCI INTENSE OUD EDP
                </p>
                <button className="my-3 border-b">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
