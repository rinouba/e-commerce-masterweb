import React from 'react'
import backGroundSpeaker from "../../../../imgs/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png"
import CountdownTimer from '../../../CountdownTimer'

function EnhanceYour() {
  return (
    <div className='bg-black text-white flex md:flex-nowrap flex-wrap mt-20 relative'>
      {/* left side */}
      <div className='md:w-1/2 w-full py-16 px-12'>
        <h3 className='text-[#00FF66] font-semibold md:text-lg text-base'>Categories</h3>
        <h1 className='md:text-5xl text-2xl font-semibold mt-7'>Enhance Your <br /> Music Experience</h1>
              {/* Timers */}
              <CountdownTimer     
                  days={5}
                  hours={23}
                  minutes={59}
                  seconds={35}
                />

            <button className="bg-[#00FF66] py-3 text-base rounded px-10 text-white hover:bg-white hover:text-black hover:border">
            Buy Now!
            </button>
      </div>
      {/* right side */}
      <div className='w-1/2 speaker-container md:p-0 p-5' >
        <img src={backGroundSpeaker} className="speaker-img" alt="Speakers" />
      </div>
  </div>
  )
}

export default EnhanceYour