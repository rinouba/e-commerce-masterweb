import React from "react";
import { Link } from 'react-router-dom';


import imageHeart from "../../imgs/Wishlist.svg";
import shopCart from "../../imgs/Cart1.svg";
import userIcon from "../../imgs/user.svg"
import { useSelector } from "react-redux";


function Navbar() {

  const authUser = useSelector((state) =>  state.counter.userInfo.isAuthenticated )
  return (
    <div className="border-b-2">
      {/* black navbar at top */}
      <div className="bg-black ">
        <div className="w-5/6 m-auto text-white flex justify-between items-center">
          <h3 className="text-center flex-grow ">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
            <Link className="underline font-bold" to="#">
              ShopNow
            </Link>
          </h3>

          <div className="text-right ">
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="text-white bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
              type="button"
            >
              English
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              id="dropdown"
              className="z-10 hidden divide-y divide-gray-100 rounded-lg shadow-sm w-fit bg-black text-white text-left"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    English
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Arabic
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* navbar at bottem of black navbar */}

      <nav className="bg-white border-gray-200 text-black w-5/6 mx-auto ">
        <div className="flex flex-wrap items-center justify-between  py-4 ">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl whitespace-nowrap font-bold">
              Exclusive
            </span>
          </Link>

          <div className="flex md:order-2">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <div className="relative hidden md:block">
              <input
                type="text"
                id="search-navbar"
                className="block w-full border-gray-100 p-2 pr-16 text-sm rounded focus:ring-blue-500 focus:border-blue-500 bg-gray-100"
                placeholder="What are you looking for?"
              />

              <div className="absolute inset-y-0 start-0 end-0 flex justify-end items-center pr-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-black"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
            </div>

            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              ariaControls="navbar-search"
              ariaExpanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>

            {/*  */}
            <Link to={"wish-list"}>
            <img
              src={imageHeart}
              alt="heart"
              className="w-8 mx-5 cursor-pointer"
            />
            </Link>

              <Link to={"cart-shopping"}>
              <img
              src={shopCart}
              alt="shop"
              className="w-8 me-5 cursor-pointer"
              />
              </Link>

              {
                authUser?
                <Link to={"my-account"}>
                <img
                src={userIcon}
                alt="My Account"
                className="w-8 me-5 cursor-pointer"
                />
                </Link>:""
              }


          </div>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm  border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="What are you looking for?"
              />
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  ariaHidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
            </div>
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-10 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
              <li>
                <Link 
                  className="block py-2 px-3 text-black underline rounded-sm md:bg-transparent  md:p-0 "
                    to={"/"}>
                    Home
                </Link>
              </li>
              <li>
                <Link
                  className="block py-2 px-3  rounded-sm hover:bg-gray-100 md:hover:bg-transparent  md:p-0  dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700"
                  to={"contact-us"}>
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  className="block py-2 px-3  rounded-sm hover:bg-gray-100 md:hover:bg-transparent  md:p-0   dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700"
                  to={"about"}>
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="block py-2 px-3  rounded-sm hover:bg-gray-100 md:hover:bg-transparent  md:p-0   dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700"
                  to={"sign-up"}>
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
