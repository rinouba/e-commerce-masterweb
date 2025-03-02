import React, { useState } from 'react'

import formSignUp from "../imgs/dl.beatsnoop 1.svg";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { signIn } from '../feature/CounterSlice';



function LoginPage() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.counter.userInfo.isAuthenticated);


  const loginFunction = (e) => { 
    e.preventDefault()
    dispatch(signIn({ emailorphone: e.target.emailorphone.value, password: e.target.password.value }));
   }
   if (isAuthenticated) {
    navigate('/my-account'); // Redirect after successful login
  } 
  
  return (
    <section className="flex md:flex-row flex-col py-32">
    <div className="bg-[#CBE4E8] md:w-1/2 w-full">
      <img src={formSignUp} alt="background for signup form" />
    </div>
    <div className="xl:w-1/2 w-full">
      <form className="xl:p-40 p-10" onSubmit={(e) => { loginFunction(e) }}>
        <h1 className="font-semibold text-4xl">Log in to Exclusive</h1>
        <h3 className="text-base mt-6">Enter your details below</h3>
        <div className="relative z-0 w-full mb-5 mt-5 group py-2">
          <input
            type="emailorphone"
            name="emailorphone"
            id="emailorphone"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-200 appearance-none  dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="emailorphone"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-gray-600 peer-focus:gray:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email or Phone Number
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group py-2">
          <input
            type="password"
            name="password"
            id="password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-200 appearance-none   dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>
        <div className='flex justify-between items-center'>
        <button
          type="submit"
          className="text-white bg-[#DB4444] hover:bg-[#dd6565] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-lg  px-10 py-3 mt-6 text-center "
        >
          Log In
        </button>

        <p className="text-base font-medium text-[#DB4444] mt-6 text-center">
          Forget Password?
        </p>
        </div>
      </form>
    </div>
  </section>
  )
}

export default LoginPage