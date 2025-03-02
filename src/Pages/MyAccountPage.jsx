import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function MyAccountPage() {
  const userInfo = useSelector((state) => state.counter.userInfo )

  return (
<>
{userInfo.isAuthenticated?
    <section className="w-5/6 mx-auto">
    <div className="flex justify-between items-end">
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
                My Account
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <div>
        Welcome! <span className="text-red-500">{userInfo.fullName}</span>
      </div>
    </div>

    <div className="flex md:justify-between justify-center md:flex-row flex-col   my-20">
      {/* left side */}
      <div className="md:w-2/6 w-full my-10 md:my-0" >
        <div>
          <h3 className="font-bold">Manage My Account</h3>
          <div className="ml-6 mt-5 space-y-2 text-gray-400">
            <h3 className="text-red-500">My Profile</h3>
            <h3>Address Book</h3>
            <h3>My Payment Options</h3>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="font-bold">My Orders</h3>
          <div className="ml-6 mt-5 space-y-2 text-gray-400">
            <h3>My Returns</h3>
            <h3>My Cancellations</h3>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="font-bold">My WishList</h3>
        </div>
      </div>
      {/* right side */}
      <div className="md:w-4/6 w-full">
        <h1 className="text-red-500 font-bold text-3xl">Edit Your Profile</h1>
        <form action="#">
          {/* First and last */}
          <div className="flex w-full space-x-10 my-5">
            {/* first name */}
            <div className="mb-5 w-full">
              <label
                for="first_name"
                className="block mb-2 text-base font-medium text-black"
              >
                First name
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-[#F5F5F5] border-none text-gray-900 text-base rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full py-3 p-2.5 "
                placeholder="First Name"
                value={userInfo.fullName}
                required
              />
            </div>
            {/* last name */}
            <div className="mb-5 w-full">
              <label
                for="last_name"
                className="block mb-2 text-base font-medium text-black"
              >
                Last name
              </label>
              <input
                type="text"
                id="last_name"
                className="bg-[#F5F5F5] border-none text-gray-900 text-base rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full py-3 p-2.5 "
                placeholder=""
                required
              />
            </div>
          </div>
          {/* email & address */}
          <div className="flex w-full space-x-10 my-5">
            {/* Email */}
            <div className="mb-5 w-full">
              <label
                for="email"
                className="block mb-2 text-base font-medium text-black"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-[#F5F5F5] border-none text-gray-900 text-base rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full py-3 p-2.5 "
                placeholder="Email"
                value={userInfo.emailorphone}
                required
              />
            </div>
            {/* last name */}
            <div className="mb-5 w-full">
              <label
                for="address"
                className="block mb-2 text-base font-medium text-black"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                className="bg-[#F5F5F5] border-none text-gray-900 text-base rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full py-3 p-2.5 "
                placeholder=""
                required
              />
            </div>
          </div>
          {/* Password Changers */}
          <div>
            {/* Password   */}
            <div className="mb-5 w-full space-y-5">
              <label
                for="password"
                className="block mb-2 text-base font-medium text-black"
              >
                Password Changes
              </label>
              <input
                type="password"
                id="password"
                className="bg-[#F5F5F5] border-none text-gray-900 text-base rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full py-3 p-2.5 "
                placeholder="Current Passwod"
                value={userInfo.password}
                required
              />

              <input
                type="password"
                id="password"
                className="bg-[#F5F5F5] border-none text-gray-900 text-base rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full py-3 p-2.5 "
                placeholder="New Passwod"
                required
              />

              <input
                type="password"
                id="password"
                className="bg-[#F5F5F5] border-none text-gray-900 text-base rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full py-3 p-2.5 "
                placeholder="Confirm New Passwod"
                required
              />
            </div>
          </div>
          {/* buttons Cancel & save changes */}
          <div className="flex justify-end space-x-5 py-5">
            <button className="font-bold">Cancel</button>
            <button className="bg-red-500 text-white py-3 px-10 rounded">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  </section>:
  <section className="w-5/6 mx-auto text-center">
    <h1 className="text-8xl font-bold text-center mt-52">You Have To Log In First !</h1>
      <button
          type="submit"
          className="text-white bg-[#DB4444] hover:bg-[#dd6565] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-lg mb-52 mt-10 px-10 py-3 mt-6 text-center "
        >
          <Link to={"/log-in"}>
            Back to Log In Page
          </Link>
      </button>
  </section>
}
</>
  );
}

export default MyAccountPage;
