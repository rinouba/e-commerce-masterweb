import React from "react";
import { Link } from "react-router";

import iconPhone from "../imgs/icons-phone.svg";
import iconMail from "../imgs/icons-mail.svg";

function ContactUsPage() {
  return (
    <div className="w-5/6 mx-auto">
      {/* Breadcrumb  */}

      <nav className="flex mt-10" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-blue-600"
              to={"/"}>
              Home
            </Link>
          </li>

          <li aria-current="page">
            <div className="flex items-center text-gray-400">
              /
              <span className="ms-1 text-sm font-medium text-black md:ms-2">
                Contact
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="flex md:flex-row flex-col mb-32 gap-20 mt-32 w-11/12 mx-auto">
        <div className="space-y-5 md:w-3/12 w-full">
          <div className="flex items-center space-x-5">
            <img
              src={iconPhone}
              alt="Icon phone"
              className="bg-red-500 text-white rounded-full"
            />
            <h1 className="font-semibold">Call To Us</h1>
          </div>

          <h3 className="font-semibold">We are available 24/7, 7 days a week.</h3>
          <h3 className="font-semibold">Phone: +8801611112222</h3>
          <hr className="bg-gray-800 h-px my-8 border-0 "/>

          <div className="flex items-center space-x-5">
            <img
              src={iconMail}
              alt="Icon mail"
              className="bg-red-500 text-white rounded-full"
            />
            <h1 className="font-semibold">Write To US</h1>
          </div>

          <h3 className="font-semibold">Fill out our form and we will contact you within 24 hours.</h3>
          <h3 className="font-semibold">Emails: customer@exclusive.com</h3>
          <h3 className="font-semibold">Emails: support@exclusive.com</h3>
        </div>

        <div className="md:w-9/12 w-full">
          {/* First and last */}
          <div className="flex md:flex-row flex-col w-full  space-x-0 md:space-x-10 my-5">
            {/* first name */}
            <div className="mb-5 w-full">
              <input
                type="text"
                id="first_name"
                className="bg-[#F5F5F5] border-none text-gray-900 text-base rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full py-3 p-2.5 "
                placeholder={"Your Name *"}
                required
              />
            </div>
            {/* last name */}
            <div className="mb-5 w-full">
              <input
                type="text"
                id="last_name"
                className="bg-[#F5F5F5] border-none text-gray-900 text-base rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full py-3 p-2.5 "
                placeholder="Your Email *"
                required
              />
            </div>
            {/* last name */}
            <div className="mb-5 w-full">
              <input
                type="text"
                id="last_name"
                className="bg-[#F5F5F5] border-none text-gray-900 text-base rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full py-3 p-2.5 "
                placeholder="Your Phone *"
                required
              />
            </div>
          </div>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-[#F5F5F5] rounded-lg border-none focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Your Massage"
          ></textarea>
          <div className="text-end mt-5">
            <button className="bg-red-500 text-white py-3 px-12 rounded">
              Send Massage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsPage;
