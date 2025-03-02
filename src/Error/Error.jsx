import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <>

          {/* Breadcrumb  */}

          <nav className="flex mt-10 w-5/6 mx-auto" aria-label="Breadcrumb">
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
                404 Error
              </span>
            </div>
          </li>
        </ol>
      </nav>
    
      <section className='text-center py-40'>
      <h1 className='text-9xl font-bold'>404 Not Found</h1>
      <h3 className='my-10'>Your visited page not found. You may go home page.</h3>

      <button
          type="submit"
          className="text-white bg-[#DB4444] hover:bg-[#dd6565] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-lg  px-10 py-3 mt-6 text-center "
        >
          <Link to={"/"}>
            Back to home page
          </Link>
      </button>

    </section>
    </>

  )
}

export default Error