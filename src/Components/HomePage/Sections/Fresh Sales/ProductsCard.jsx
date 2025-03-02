import React from "react";
import imageHeart from "../../../../imgs/heart-outline.svg";
import eye from "../../../../imgs/eye-outline.svg";
import StarRating from "../../../StarRating";
import { useDispatch } from "react-redux";
import { setProductDetails , addToCart } from "../../../../feature/CounterSlice";
import { Link } from "react-router";

function ProductsCard({ product, data, index }) {
  const dispatch = useDispatch();

  const handleProductClick = (product) => {
    dispatch(setProductDetails(product));
  };

    const addToCartFun = (product) => { 
      dispatch(addToCart(product))
     }

  const { persent, img, nameProduct, Price1, Price2, ratestar, rate } = product;

  return (
    <div
      className={`md:w-[300px] w-fit  rounded ${
        index === data.length - 1 ? " top-0  " : ""
      }`}
      key={index}
    >
      <div className="group  relative bg-gray-100 p-16">
        <div className="absolute flex justify-between top-5 left-5 right-5">
          {persent ? (
            <span className="bg-[#DB4444] text-center px-5 rounded h-8 pt-1 text-white">
              -{persent}%
            </span>
          ) : (
            ""
          )}
          <div>
            <img
              className="w-10 bg-white rounded-full p-2"
              src={imageHeart}
              alt=""
            />
            <img
              className="w-10 mt-5 bg-white rounded-full p-2"
              src={eye}
              alt=""
            />
          </div>
        </div>

        <Link to={"/product-detail"}>
        <img className="h-full w-full cursor-pointer hover:scale-110" src={img} alt={nameProduct} onClick={() => { 
          handleProductClick(product)
         }}/>
        </Link>
        <div 
        onClick={() => { addToCartFun(product) }}
        
        className="cursor-pointer rounded-b absolute bottom-0 left-0 right-0 text-center bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          Add To Cart
        </div>
      </div>
      <div>
        <h2 className="font-medium my-3">{nameProduct}</h2>
        <div className="flex space-x-3 mb-3">
          <h2 className="text-[#DB4444] font-medium">${Price1}</h2>
          {Price2 ? (
            <span className="font-medium text-gray-600 line-through">
              ${Price2}
            </span>
          ) : (
            ""
          )}
        </div>

        <StarRating rating={ratestar} reviewCount={rate} />
      </div>
    </div>
  );
}

export default ProductsCard;
