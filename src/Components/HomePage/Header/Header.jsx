import React from 'react'

import arrowRight from "../../../imgs/DropDown.png"
import appleLogo from "../../../imgs/1200px-Apple_gray_logo 1.png"
import arrowRightv2 from "../../../imgs/icons arrow-right.png"
import iphonePics from "../../../imgs/hero_endframe__cvklg0xk3w6e_large 2.png"



function Header() {
  return (
    <div className='flex flex-col lg:flex-row'>
      {/* left Header */}
      <ul className='pt-5 pr-5 border-0 lg:border-r-2 text-lg font-medium cursor-pointer w-5/6 lg:w-3/12'>
        <li className='flex justify-between my-4'>Woman’s Fashion <img src={arrowRight} alt="arrow right" /></li>
        <li className='flex justify-between my-4'>Men’s Fashion <img src={arrowRight} alt="arrow right" /></li>
        <li className='my-4'>Electronics</li>
        <li className='my-4'>Home & Lifestyle</li>
        <li className='my-4'>Medicine</li>
        <li className='my-4'>Sports & Outdoor</li>
        <li className='my-4'>Baby’s & Toys</li>
        <li className='my-4'>Groceries & Pets</li>
        <li className='mt-4'>Health & Beauty</li>
      </ul>

      {/* Right Header */}
      <div className='bg-black w-full lg:w-9/12  lg:ml-10 mt-10 text-white'>

      <div className='flex space-x-4 pt-12 px-5 md:px-12 flex-col md:flex-row'>
            <div className='flex-1 md:w-1/2 w-full'>
              <div className='flex items-center'>
                <img className='mr-7' src={appleLogo} alt="apple logo" />
                <h3>iPhone 14 Series</h3>
              </div>
              <h1 className='text-5xl font-semibold mt-3'>Up to 10% <br /> off Voucher</h1>
              <a href="#" className='flex mt-10'><span className='text-lg border-white border-b-2'>Shop Now</span> <img className='ml-3' src={arrowRightv2} alt="arrow right" /></a>
            </div>
    
            <div className='flex-1 w-1/2 mt-5 md:mt-0'>
            <img  src={iphonePics} alt="Iphone Pictures" />
            </div>
      </div>

        <div class="flex justify-center items-end space-x-4 pb-3">
          <div class="w-3 h-3 bg-gray-400 rounded-full"></div>
          <div class="w-3 h-3 bg-gray-400 rounded-full"></div>
          <div class="w-3 h-3 bg-[#DB4444] border-2 rounded-full"></div>
          <div class="w-3 h-3 bg-gray-400 rounded-full"></div>
          <div class="w-3 h-3 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}

export default Header