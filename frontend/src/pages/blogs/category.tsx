import Header from "@/components/header";
import CategoryScreen from "@/screens/blogs/CategoryScreen";
import Banner from "@/screens/blogs/Index";
import React from "react";

const Category = () => {
  return (
    <div>
      <Header />
      <Banner />
      <CategoryScreen />
    </div>
  );
};

export default Category;
