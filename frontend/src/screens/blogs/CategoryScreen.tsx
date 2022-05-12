import Card from "@/components/blogs/Card";

import React from "react";

const CategoryScreen = () => {
  return (
    <section className="mb-40">
      <div className="containers mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index}>
            <Card />
          </div>
        ))}
      </div>

      <div className="containers mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index}>
            <Card />
          </div>
        ))}
      </div>

      <div className="containers mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index}>
            <Card />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryScreen;
