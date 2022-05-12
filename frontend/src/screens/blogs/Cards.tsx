import Card from "@/components/blogs/Card";
import CatTitles from "@/components/blogs/CatTitles";
import Line from "@/components/blogs/Line";
import React from "react";

const Cards = () => {
  return (
    <section className="mb-40">
      <CatTitles />
      <div className="containers mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index}>
            <Card />
          </div>
        ))}
      </div>
      <Line />
      <CatTitles className="bg-yellow-500" />
      <div className="containers mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index}>
            <Card className="bg-yellow-500" />
          </div>
        ))}
      </div>
      <Line />
      <CatTitles className="bg-blue-800" />
      <div className="containers mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index}>
            <Card className="bg-blue-800" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
