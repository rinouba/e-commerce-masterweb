import React from "react";

import formSignUp from "../imgs/dl.beatsnoop 1.svg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';


import { resgisterProfile } from "../feature/CounterSlice";

function SignUpPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const submitDataUser = (e) => { 
    e.preventDefault()

    dispatch(resgisterProfile({
      fullName:  e.target.fullName.value,
      emailorphone:e.target.emailorphone.value,
      password:  e.target.password.value,
    }))
    navigate("/log-in")
   }

  return (
    <section className="flex lg:flex-row flex-col py-32">
      <div className="bg-[#CBE4E8] lg:w-1/2 w-full">
        <img src={formSignUp} alt="background for signup form" />
      </div>
      <div className="lg:w-1/2 w-full">
        <form className="lg:p-40 p-10" onSubmit={(e) => { 
          submitDataUser(e)
         }}>
          <h1 className="font-semibold text-4xl">Create an account</h1>
          <h3 className="text-base mt-6">Enter your details below</h3>
          <div className="relative z-0 w-full mb-5 group mt-10 py-2">
            <input
              type="text"
              name="fullName"
              id="fullName"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-200 appearance-none  dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group py-2">
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
              Email Or Phone Number
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group py-2">
            <input
              type="password"
              name="password"
              id="password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-200 appearance-none  dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
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
          <button
            type="submit"
            className="text-white bg-[#DB4444] hover:bg-[#dd6565] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-lg w-full px-5 py-2.5 mt-6 text-center "
          >
            Create Account
          </button>
          <button className="flex w-full border border-gray-400 rounded font-semibold text-base text-center justify-center py-2.5 mt-5 gap-x-4">
          <svg className="w-7 h-7" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_13183_10121)"><path d="M20.3081 10.2303C20.3081 9.55056 20.253 8.86711 20.1354 8.19836H10.7031V12.0492H16.1046C15.8804 13.2911 15.1602 14.3898 14.1057 15.0879V17.5866H17.3282C19.2205 15.8449 20.3081 13.2728 20.3081 10.2303Z" fill="#3F83F8"></path><path d="M10.7019 20.0006C13.3989 20.0006 15.6734 19.1151 17.3306 17.5865L14.1081 15.0879C13.2115 15.6979 12.0541 16.0433 10.7056 16.0433C8.09669 16.0433 5.88468 14.2832 5.091 11.9169H1.76562V14.4927C3.46322 17.8695 6.92087 20.0006 10.7019 20.0006V20.0006Z" fill="#34A853"></path><path d="M5.08857 11.9169C4.66969 10.6749 4.66969 9.33008 5.08857 8.08811V5.51233H1.76688C0.348541 8.33798 0.348541 11.667 1.76688 14.4927L5.08857 11.9169V11.9169Z" fill="#FBBC04"></path><path d="M10.7019 3.95805C12.1276 3.936 13.5055 4.47247 14.538 5.45722L17.393 2.60218C15.5852 0.904587 13.1858 -0.0287217 10.7019 0.000673888C6.92087 0.000673888 3.46322 2.13185 1.76562 5.51234L5.08732 8.08813C5.87733 5.71811 8.09302 3.95805 10.7019 3.95805V3.95805Z" fill="#EA4335"></path></g><defs><clipPath id="clip0_13183_10121"><rect width="20" height="20" fill="white" transform="translate(0.5)"></rect></clipPath></defs>
          </svg>  
          Sign up with Google    
          </button>
          <p className="text-sm font-normal text-black mt-6 text-center">
            Already have an account? <a href="log-in" className="font-medium text-primary-600 hover:underline dark:text-primary-500 border-gray-500 border-b-2">Login in</a>
          </p>
        </form>
      </div>
    </section>
  );
}

export default SignUpPage;
