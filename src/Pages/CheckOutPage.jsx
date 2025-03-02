import React, { useState } from "react";
import { Link } from "react-router-dom";


import bank from "../imgs/Frame 834.svg"
import { useSelector } from "react-redux";

function CheckOutPage() {
  const [selected, setSelected] = useState("bank");
  const dataInfo = useSelector((state) => state.counter.cartItemsShoping)

  const uniqueArray = dataInfo.filter((obj, index, self) =>
    index === self.findIndex((o) => o.nameProduct === obj.nameProduct)
  );



    // Calculate the total 
    const totalPrice1 = uniqueArray.reduce((sum, item) => sum + (item.Price1 || 0), 0);


  return (
    <section className="w-5/6 mx-auto">
      {/* Breadcrumb  */}

      <nav className="flex mt-10" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-blue-600"
            >
              Account
            </a>
          </li>

          <li>
            <div className="flex items-center text-gray-400">
              /
              <Link to={"/my-account"}>
                My Account
              </Link>
            </div>
          </li>

          <li>
            <div className="flex items-center text-gray-400">
              /
              <a
                href="#"
                className="ms-1 text-sm font-medium text-gray-400 hover:text-blue-600 md:ms-2 "
              >
                Product
              </a>
            </div>
          </li>

          <li>
            <div className="flex items-center text-gray-400">
              /
              <Link to={"/cart-shopping"}>
                View Cart
              </Link>
            </div>
          </li>

          <li aria-current="page">
            <div className="flex items-center text-gray-400">
              /
              <span className="ms-1 text-sm font-medium text-black md:ms-2">
                CheckOut
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <h1 className="font-semibold text-4xl mt-16">Billing Details</h1>

      <div className="flex lg:justify-between justify-center flex-col lg:flex-row">
        <form action="#" className="lg:w-2/6 w-full mt-10">
          <div className="mb-5">
            <label
              for="first_name"
              className="block mb-2 text-base font-medium text-gray-400"
            >
              First name<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-[#F5F5F5] border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full py-3 p-2.5 "
              placeholder=""
              required
            />
          </div>
          <div className="mb-5">
            <label
              for="Company_Name"
              className="block mb-2 text-base font-medium text-gray-400"
            >
              Company Name
            </label>
            <input
              type="text"
              id="Company_Name"
              className="bg-[#F5F5F5] border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full py-3 p-2.5 "
              placeholder=""
              required
            />
          </div>
          <div className="mb-5">
            <label
              for="Street_Address"
              className="block mb-2 text-base font-medium text-gray-400"
            >
              Street Address<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="Street_Address"
              className="bg-[#F5F5F5] border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full py-3 p-2.5 "
              placeholder=""
              required
            />
          </div>
          <div className="mb-5">
            <label
              for="Apartment"
              className="block mb-2 text-base font-medium text-gray-400"
            >
              Apartment, floor, etc. (optional)
            </label>
            <input
              type="text"
              id="Apartment"
              className="bg-[#F5F5F5] border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full py-3 p-2.5 "
              placeholder=""
              required
            />
          </div>
          <div className="mb-5">
            <label
              for="city"
              className="block mb-2 text-base font-medium text-gray-400"
            >
              Town/City<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="city"
              className="bg-[#F5F5F5] border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full py-3 p-2.5 "
              placeholder=""
              required
            />
          </div>
          <div className="mb-5">
            <label
              for="Phone_Number"
              className="block mb-2 text-base font-medium text-gray-400"
            >
              Phone Number<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="Phone_Number"
              className="bg-[#F5F5F5] border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full py-3 p-2.5 "
              placeholder=""
              required
            />
          </div>
          <div className="mb-5">
            <label
              for="Email_Address"
              className="block mb-2 text-base font-medium text-gray-400"
            >
              Email Address<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="Email_Address"
              className="bg-[#F5F5F5] border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full py-3 p-2.5 "
              placeholder=""
              required
            />
          </div>

          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="save-info"
                  className="w-5 h-5 text-red-500 bg-red-500 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-500 focus:ring-4 "
                />
                <label
                  for="save-info"
                  className="text-base font-medium text-gray-900 "
                >
                  Save this information for faster check-out next time
                </label>
              </div>
            </div>
          </div>
        </form>
        <div className="lg:w-2/6 w-full pb-10 lg:pb-0">
          {/* produvts */}
          <div className="space-y-4">
            {uniqueArray.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between"
              >
                <div className="flex space-x-3 items-center">
                  <img
                    src={product.img}
                    alt={product.nameProduct}
                    className="w-12 h-12 rounded-md"
                  />
                  <span className="text-lg">{product.nameProduct}</span>
                </div>
                <span className="font-semibold">${product.Price1}</span>
              </div>
            ))}
          </div>

          <div className="my-4 pt-4 space-y-4">
            <div className="flex justify-between text-lg">
              <span>Subtotal:</span>
              <span>${totalPrice1}</span>
            </div>
            <hr class="h-px my-8 bg-gray-500 border-0" />
            <div className="flex justify-between text-lg">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <hr class="h-px my-8 bg-gray-500 border-0" />
            <div className="flex justify-between text-lg">
              <span>Total:</span>
              <span>${totalPrice1}</span>
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-3">
              {/* Bank Option */}
              <label className="flex justify-between ">
                <div className="flex items-center gap-2 cursor-pointer py-3">
                    <input
                      type="radio"
                      name="payment"
                      value="bank"
                      checked={selected === "bank"}
                      onChange={() => setSelected("bank")}
                      className="hidden"
                    />
                    <div
                      className={`w-6 h-6 border-2 border-black rounded-full flex items-center justify-center ${
                        selected === "bank" ? "border-black" : ""
                      }`}
                    >
                      {selected === "bank" && (
                        <div className="w-3 h-3 bg-black rounded-full"></div>
                      )}
                    </div>
                    <span className="text-lg">Bank</span>
                </div>

                <div>
                      <img src={bank} alt="bank" />
                </div>

              </label>

              {/* Cash on Delivery Option */}
              <label className="flex items-center gap-2 cursor-pointer py-3">
                <input
                  type="radio"
                  name="payment"
                  value="cash"
                  checked={selected === "cash"}
                  onChange={() => setSelected("cash")}
                  className="hidden"
                />
                <div
                  className={`w-6 h-6 border-2 border-black rounded-full flex items-center justify-center ${
                    selected === "cash" ? "border-black" : ""
                  }`}
                >
                  {selected === "cash" && (
                    <div className="w-3 h-3 bg-black rounded-full"></div>
                  )}
                </div>
                <span className="text-lg">Cash on delivery</span>
              </label>
            </div>
          </div>

          <div className="flex lg:justify-between justify-center lg:flex-row flex-col space-y-4 lg:space-y-0 mt-5">
            <input
              type="text"
              placeholder="Coupon Code"
              className="h-fit  px-7 py-3"
            />
            <button
              type="submit"
              className="text-white bg-[#DB4444] hover:bg-[#dd6565] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-base  px-6 py-3 text-center "
            >
              Apply Coupon
            </button>
          </div>

          <button
            type="submit"
            className="text-white mt-7 bg-[#DB4444] hover:bg-[#dd6565] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-lg  px-10 py-3 text-center "
          >
            Place Order
          </button>
        </div>
      </div>
    </section>
  );
}

export default CheckOutPage;
