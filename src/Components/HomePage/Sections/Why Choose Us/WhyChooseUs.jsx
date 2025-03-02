import React from 'react'

import iconDelivery from "../../../../imgs/icon-delivery.png"
import IconCustomerService from "../../../../imgs/Icon-Customer service.png"
import IconSecure from "../../../../imgs/Icon-secure.png"

function WhyChooseUs() {
  return (
    <section className='flex flex-wrap md:flex-nowrap justify-around md:space-y-0 space-y-10 text-center my-32' >
      <div>

        <div className='flex justify-center'>
          <img src={iconDelivery} alt="icon devilery" className='w-fit bg-black p-2 rounded-full border-[10px] border-gray-400'/>
        </div>
        <h3 className='font-bold text-xl mt-7'>FREE AND FAST DELIVERY</h3>
        <p className='text-base'>Free delivery for all orders over $140</p>
      </div>

      <div>
        <div className='flex justify-center'>
          <img src={IconCustomerService} alt="icon Customer Services" className='w-fit bg-black p-2 rounded-full border-[10px] border-gray-400'/>
        </div>
        <h3 className='font-bold text-xl mt-7'>24/7 CUSTOMER SERVICE</h3>
        <p className='text-base'>Friendly 24/7 customer support</p>
      </div>

      <div>
        <div className='flex justify-center'>
          <img src={IconSecure} alt="icon Secure" className='w-fit bg-black p-2 rounded-full border-[10px] border-gray-400'/>
        </div>
        <h3 className='font-bold text-xl mt-7'>MONEY BACK GUARANTEE</h3>
        <p className='text-base'>We return money within 30 days</p>
      </div>

    </section>
  )
}

export default WhyChooseUs