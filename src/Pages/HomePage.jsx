import React from "react";
import Header from "../Components/HomePage/Header/Header";
import FlashSales from "../Components/HomePage/Sections/Fresh Sales/FlashSales";
import Categories from "../Components/HomePage/Sections/Categories/Categories";
import BestSellingProducts from "../Components/HomePage/Sections/Best Selling Products/BestSellingProducts";
import EnhanceYour from "../Components/HomePage/Sections/Enhace Your/EnhanceYour";
import OurProducts from "../Components/HomePage/Sections/Our Products/OurProducts";
import Featured from "../Components/HomePage/Sections/Featured/Featured";
import WhyChooseUs from "../Components/HomePage/Sections/Why Choose Us/WhyChooseUs";

function HomePage() {
  return (
    <div className="w-5/6 mx-auto">
      <Header />
      <FlashSales />
      <Categories />
      <BestSellingProducts />
      <EnhanceYour />
      <OurProducts />
      <Featured />
      <WhyChooseUs />
    </div>
  );
}

export default HomePage;
