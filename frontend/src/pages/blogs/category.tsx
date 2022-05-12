import Header from "@/components/header";
import CategoryScreen from "@/screens/blogs/CategoryScreen";
import Banner from "@/screens/blogs/Index";
import React from "react";

const Category = () => {
  return (
    <div>
      <Header
        bgClassName="!bg-transparent shadow-lg"
        className="!text-dark "
        buttonClassName="bg-grad-text-2 text-white "
      />
      <Banner />
      <CategoryScreen />
    </div>
  );
};

export default Category;
