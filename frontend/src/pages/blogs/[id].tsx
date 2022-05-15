import Footer from "@/components/footer/Footer";
import Header from "@/components/header";
import Article from "@/screens/blogs/Article";
import React from "react";

const SingleBlog = () => {
  return (
    <div>
      <Header
        bgClassName="!bg-transparent shadow-lg"
        className="!text-dark "
        buttonClassName="bg-grad-text-2 text-white "
      />
      <Article />
      <Footer />
    </div>
  );
};

export default SingleBlog;
