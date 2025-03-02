import React, { useState } from "react";
import { Link } from "react-router-dom";

import CartShopping from "../Components/CartShoppingPage/CartShopping";
import { useSelector } from "react-redux";

function CartShoppingPage() {

  const dataInfo = useSelector((state) => state.counter.cartItemsShoping)

  const uniqueArray = dataInfo.filter((obj, index, self) =>
    index === self.findIndex((o) => o.nameProduct === obj.nameProduct)
  );
  
    // State to store subtotals for each product
    const [subtotals, setSubtotals] = useState({});

    const [totalSubtotal, settotalSubtotal] = useState()

    // Callback function to update subtotals
    const handleSubtotalChange = (productId, subtotal) => {
      setSubtotals((prevSubtotals) => ({
        ...prevSubtotals,
        [productId]: subtotal,
      }));
    };
  
    // Calculate the total subtotal
    const totalSubtotalBtn = () => { 
      settotalSubtotal(Object.values(subtotals).reduce((sum, subtotal) => sum + subtotal, 0)) 
     }

  
  return (
    <section className="w-5/6 mx-auto my-5">
      <nav className="flex mt-10" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              className="inline-flex items-center text-sm font-medium text-gray-300 hover:text-blue-600"
              to={"/"}>
              Home
            </Link>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              /
              <span className="ms-1 text-sm font-medium text-black md:ms-2">
                Cart
              </span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Table */}

      <div className="w-11/12 mx-auto md:text-base text-xs ">
        <table className="w-full mt-20 mb-10">
          <thead>
          <tr>
            <th className="text-left w-1/4">Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
          </thead>
        <tbody>
        {uniqueArray.map(( product , index ) => {
            return (
                <CartShopping product={product} index={index} onSubtotalChange={handleSubtotalChange}/>
            )
          })}
        </tbody>
        </table>
      </div>

      {/* buton return/update */}
      <div className="flex justify-between">
        <button className="bg-white text-black border border-gray-400 rounded py-3 px-10 hover:bg-black hover:text-white">
          <Link to={"/"}>
              Return To Shop
          </Link>
        </button>
        <button
        onClick={() => { totalSubtotalBtn() }}
        className="bg-white text-black border border-gray-400 rounded py-3 px-10 hover:bg-black hover:text-white">
          Update Cart
        </button>
      </div>

      <div className="flex flex-col md:flex-row justify-between mt-20">
        {/* life side */}
        <div className="h-full space-x-0 space-y-4 md:space-y-0 md:space-x-4 w-full md:w-max flex md:flex-row flex-col my-5 md:my-0">
          <input
            type="text"
            placeholder="Coupon Code"
            className="h-fit px-10 py-3"
          />
          <button
            type="submit"
            className="text-white bg-[#DB4444] hover:bg-[#dd6565] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-lg  px-10 py-3 text-center "
          >
            Apply Coupon
          </button>
        </div>

        {/* Right Side */}

        <div className="border-2 rounded border-black p-5 md:w-2/6 w-full">
          <h3 className="font-bold">Cart Total</h3>
          <div className="flex justify-between mt-3">
            <h5>Subtotal:</h5>
            <h5>${totalSubtotal}</h5>
          </div>
          <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />
          <div className="flex justify-between mt-3">
            <h5>Shipping:</h5>
            <h5>Free</h5>
          </div>
          <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />
          <div className="flex justify-between mt-3">
            <h5>Total:</h5>
            <h5>${totalSubtotal}</h5>
          </div>

          <div className="text-center mt-5">
            <button
              type="submit"
              className="text-white bg-[#DB4444] hover:bg-[#dd6565] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-lg  px-10 py-3 text-center "
            >
              <Link to={"/check-out"}>
                Procees to checkout
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CartShoppingPage;
