import React from "react";
import { Link } from "react-router-dom";

import iconSend from "../../imgs/icon-send.png";
import qrCode from "../../imgs/Qr Code.svg";
import googlePlay from "../../imgs/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.svg";
import appStore from "../../imgs/download-appstore.svg";

// icons
import iconFacebook from "../../imgs/Icon-Facebook.png"
import iconInstagram from "../../imgs/icon-instagram.png"
import iconTwitter from "../../imgs/Icon-Twitter.png"
import iconLinkedin from "../../imgs/Icon-Linkedin.png"

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="w-5/6 mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">Exclusive</h2>
            <h3 className="text-base font-semibold mb-4">Subscribe</h3>
            <p className="text-sm mb-4">Get 10% off your first order</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full  p-2 rounded-lg border-white bg-black text-white focus:outline-none"
              />
              <img
                src={iconSend}
                alt="icon send"
                className="absolute right-3 top-1/4"
              />
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Support</h2>
            <ul className="text-sm">
              <li className="mb-5 text-gray-200">
                11 Bijoy Sarani, Dhaka, DH 1515, Bangladesh
              </li>
              <li className="mb-5 text-gray-200">exclusive@gmail.com</li>
              <li className="mb-5 text-gray-200">+88015-88888-9999</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Account</h2>
            <ul className="text-sm">
              <li className="mb-5 text-gray-200">
                <Link className="hover:underline" to={"my-account"}>
                    My Account
                </Link>
              </li>
              <li className="mb-5 text-gray-200">
                <Link className="hover:underline" to={"sign-up"}>
                    Login / Register
                </Link>
              </li>
              <li className="mb-5 text-gray-200">
                <Link className="hover:underline" to={"cart-shopping"}>
                  Cart
                </Link>
              </li>
              <li className="mb-5 text-gray-200">
                <Link className="hover:underline" to={"wish-list"}>
                Wishlist
                </Link>
              </li>
              <li className="mb-5 text-gray-200">
                <Link className="hover:underline" to={"/"}>
                  Shop
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Link</h2>
            <ul className="text-sm">
              <li className="mb-5 text-gray-200">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-5 text-gray-200">
                <a href="#" className="hover:underline">
                  Terms Of Use
                </a>
              </li>
              <li className="mb-5 text-gray-200">
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li className="mb-5 text-gray-200">
                <Link className="hover:underline" to={"contact-us"}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="bg-black text-white text-left">
            {/* <!-- Title --> */}
            <h2 className="text-xl font-semibold mb-2">Download App</h2>
            <p className="text-gray-400 text-sm mb-4">
              Save $3 with App New User Only
            </p>

            {/* <!-- QR Code & App Store Buttons --> */}
            <div className="flex items-center gap-5">
              <img src={qrCode} alt="QR Code" className="w-20 h-20" />
              <div className="flex flex-col gap-5">
                <a href="#">
                  <img src={googlePlay} alt="Google Play" className="w-30" />
                </a>

                <a href="#">
                  <img src={appStore} alt="App Store" className="w-30 " />
                </a>
              </div>
            </div>

            {/* <!-- Social Media Icons --> */}
            <div className="flex justify-center space-x-6 mt-6">
              <a href="#" className="text-white hover:text-gray-400">
                <img src={iconFacebook} alt="Icon Facebook" />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <img src={iconTwitter} alt="Icon Twitter" />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <img src={iconInstagram} alt="Icon Instagarm" />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <img src={iconLinkedin} alt="Icon Linkedin" />
              </a>
            </div>
          </div>

        </div>


      </div>
      <hr className="h-px bg-zinc-900  border-0 "/>
      <div className="text-base text-zinc-800 text-center py-5">
          <p>© Copyright Rimel 2022. All right reserved</p>
        </div>
    </footer>
  );
}

export default Footer;
