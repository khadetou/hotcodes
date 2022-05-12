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
    </section>
  );
};

export default Cards;
