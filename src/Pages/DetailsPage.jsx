import React from "react";
import { Link } from "react-router";

import StarRating from "../Components/StarRating";

import ColorCircles from "../Components/HomePage/Sections/Our Products/ColorCircles";

import iconHeart from "../imgs/Wishlist.png";
import returnicon from "../imgs/Icon-return.svg";
import deliveryicon from "../imgs/icon-delivery.svg";

import img1 from "../imgs/Frame 611.png";
import img2 from "../imgs/Frame 612.png";
import img3 from "../imgs/Frame 613.png";
import img4 from "../imgs/Frame 614.png";
import { useDispatch, useSelector } from "react-redux";
import ProductCardDetails from "../Components/DetailsPage/ProductCardDetails";

import { addToWhishList } from "../feature/CounterSlice";

function DetailsPage() {
    const dispatch =  useDispatch()

    const productDetails = useSelector((state) => state.counter.cartItems);
    const whislist = useSelector((state) => state.counter.cartItemsWhishList);

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
  ];

  const addtowhishlist = (product) => { 
    dispatch(addToWhishList(product))
   }

  return (
    <div className="w-5/6 mx-auto">
      {/* Breadcrumb  */}

      <nav className="flex mt-10" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-blue-600"
              to={"my-account"}>
                account
            </Link>
          </li>

          <li>
            <div className="flex items-center text-gray-400">
              /
              <a
                href="#"
                className="ms-1 text-sm font-medium text-gray-400 hover:text-blue-600 md:ms-2 "
              >
                Gaming
              </a>
            </div>
          </li>

          <li aria-current="page">
            <div className="flex items-center text-gray-400">
              /
              <span className="ms-1 text-sm font-medium text-black md:ms-2">
                {productDetails.nameProduct}
              </span>
            </div>
          </li>
        </ol>
      </nav>



      {
        productDetails?
        <div className="flex justify-center md:justify-between flex-col lg:flex-row gap-10 mt-20">
        <div className="lg:w-8/12 w-full">
          <img src={productDetails.img} alt="Product" className="w-full p-10" />
        </div>
        <div className="lg:w-4/12 w-full">
          <h1 className="text-2xl font-bold">{productDetails.nameProduct}</h1>
          <div className="flex gap-3 my-5">
            <StarRating rating={productDetails.ratestar} reviewCount={productDetails.rate} /> |
            <span className="text-emerald-500">In Stock</span>
          </div>
          <h2 className="text-2xl ">${productDetails.Price1}</h2>
          <p className="my-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, ratione ex possimus nulla ea accusamus exercitationem quis vero tenetur velit.
          </p>
          <hr className="h-px border-0 my-5 dark:bg-gray-700" />

          <h2 className="flex gap-5 my-5">
            Colours:{" "}
            <ColorCircles colorOneCircle={"#000000"} colorTwoCircle={"red"} />
          </h2>
          <div className="flex justify-between">
            <form>
              <div className="relative flex items-center max-w-[8rem]">
                <button
                  type="button"
                  id="decrement-button"
                  data-input-counter-decrement="quantity-input"
                  className="group bg-white text-black hover:bg-red-500  border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100  focus:ring-2 focus:outline-none"
                >
                  <svg
                    className="w-3 h-3 text-gray-900 group-hover:text-white"
                    ariaHidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 2"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1h16"
                    />
                  </svg>
                </button>
                <input
                  type="text"
                  id="quantity-input"
                  data-input-counter
                  data-input-counter-min="1"
                  data-input-counter-max="50"
                  aria-describedby="helper-text-explanation"
                  className="bg-white border-y border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5"
                  placeholder="999"
                  value="1"
                  required
                />
                <button
                  type="button"
                  id="increment-button"
                  data-input-counter-increment="quantity-input"
                  className="group bg-white text-black hover:bg-red-500 hover: border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none"
                >
                  <svg
                    className="w-3 h-3 text-gray-900 group-hover:text-white"
                    ariaHidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 1v16M1 9h16"
                    />
                  </svg>
                </button>
              </div>
            </form>

            <button className="px-10 text-white py-2 bg-red-500 rounded">
              Buy Now
            </button>

            <div
            onClick={() => { 
              addtowhishlist(productDetails)
             }}
            className="border border-gray-900 rounded-lg flex items-center px-3 group cursor-pointer">
              <img src={iconHeart} alt="icon heart" className="group-hover:scale-125"/>
            </div>
          </div>

          <div className="border border-gray-300 rounded-lg p-4 w-full mt-10">
            {/* Free Delivery */}
            <div className="flex items-center gap-3 border-b border-gray-300 pb-4">
              <img src={deliveryicon} alt="Delivery Icon" />
              <div>
                <h3 className="text-lg font-semibold">Free Delivery</h3>
                <a href={"#"} className="underline text-sm">
                  Enter your postal code for Delivery Availability
                </a>
              </div>
            </div>

            {/* Return Delivery */}
            <div className="flex items-center gap-3 pt-4">
              <img src={returnicon} alt="Icon Return" />
              <div>
                <h3 className="text-lg font-semibold">Return Delivery</h3>
                <p className="text-sm">
                  Free 30 Days Delivery Returns.{" "}
                  <a href="#" className="underline">
                    Details
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>:
      <h1 className="text-8xl font-bold">
        There is No Product Has Been Selected Yet!
      </h1>
      }
      <div className="flex items-center space-x-4 my-10">
        <div className="bg-[#DB4444] rounded w-5 h-10"></div>
        <h1 className="text-[#DB4444] font-medium text-lg ">Related Item</h1>
      </div>

      {/* Products Cards */}
      <div className="relative w-full justify-center md:justify-between flex gap-5 mt-12 md:flex-nowrap flex-wrap mb-20">
        {data.map(
          (
            product,
            index
          ) => {
            return (
              <ProductCardDetails
                product={product}
                index={index}
                data={data}
              />
            );
          }
        )}
      </div>
    </div>
  );
}

export default DetailsPage;
