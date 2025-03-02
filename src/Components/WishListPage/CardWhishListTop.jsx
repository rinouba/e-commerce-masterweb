import React from 'react'

// import imageHeart from "../../imgs/heart-outline.svg";
// import eye from "../../imgs/eye-outline.svg";
// import StarRating from "../../Components/StarRating";

import removeIcon from "../../imgs/Vector.svg"
import { useDispatch } from 'react-redux';
import { addToCart , removeFromWishlist } from '../../feature/CounterSlice';


function CardWhishListTop({
    product,index
  }) {
  const dispatch = useDispatch();

  const {img,
    nameProduct,
    Price1,
    Price2,
    persent,
    newItem,} = product

    const addToCartFun = (product) => { 
      dispatch(addToCart(product))
    }
  return (
    <div
    className={`w-fit rounded mb-10`}
    key={index}
  >
    <div className="group  relative bg-gray-100 p-16">

      <div className={`absolute flex justify-between ${newItem||persent?"top-5 left-5 right-5":"right-5 top-5"} `}>
        {newItem ? (
          <span className="bg-[#00FF66] text-center px-5 rounded h-8 pt-1 text-white">
            New
          </span>
        ) : (
          persent?<span className="bg-[#DB4444] text-center px-5 rounded h-8 pt-1 text-white">
          -{persent}%
          </span>:""
        )}
        <div 
        onClick={() => { dispatch(removeFromWishlist(product.nameProduct)) }}
        >
          <img
            className="w-10 bg-white rounded-full p-2 cursor-pointer"
            src={removeIcon}
            alt="delete button"
          />
        </div>
      </div>

      <img className="h-full w-full" src={img} alt={nameProduct} />
      <div
      onClick={(e) => { addToCartFun(product) }}
      className="cursor-pointer rounded-b absolute bottom-0 left-0 right-0 text-center bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
        {/* <StarRating rating={ratestar} reviewCount={rate} /> */}
      </div>
    </div>
  </div>
  )
}

export default CardWhishListTop