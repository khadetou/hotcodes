import Header from "@/components/header";
import Cards from "@/screens/blogs/Cards";
import Banner from "@/screens/blogs/Index";
import React from "react";

const Blog = () => {
  return (
    <>
      <Header
        bgClassName="!bg-transparent shadow-lg"
        className="!text-dark "
        buttonClassName="bg-grad-text-2 text-white "
      />
      <Banner />
      <Cards />
    </>
  );
};

export default Blog;
