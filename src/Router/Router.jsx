import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "../Error/Error";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import HomePage from "../Pages/HomePage";
import SignUpPage from "../Pages/SignUpPage";
import LoginPage from "../Pages/LoginPage";
import WishlistPage from "../Pages/WishlistPage";
import CartShoppingPage from "../Pages/CartShoppingPage";
import CheckOutPage from "../Pages/CheckOutPage";
import MyAccountPage from "../Pages/MyAccountPage";
import AboutPage from "../Pages/AboutPage";
import ContactUsPage from "../Pages/ContactUsPage";
import DetailsPage from "../Pages/DetailsPage";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: (
        <>
          <Navbar />
          <Error />
          <Footer />
        </>
      ),
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "sign-up",
          element: <SignUpPage />,
        },
        {
          path: "log-in",
          element: <LoginPage />,
        },
        {
          path: "wish-list",
          element: <WishlistPage />,
        },
        {
          path: "cart-shopping",
          element: <CartShoppingPage />,
        },
        {
          path: "check-out",
          element: <CheckOutPage />,
        },
        {
          path: "my-account",
          element: <MyAccountPage />,
        },
        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "contact-us",
          element: <ContactUsPage />,
        },
        {
          path: "product-detail",
          element: <DetailsPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;