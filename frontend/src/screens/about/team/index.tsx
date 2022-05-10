import Title from "@/components/Title/title";
import React from "react";
import Card from "./Cards";

const Team = () => {
  return (
    <div className="containers">
      <Title
        title="LEADING TEAM"
        className="bg-grad-text-2 !mt-0 bg-clip-text text-transparent"
      />

      <div className="mt-[55px] grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Array.from(Array(4).keys()).map((_, i) => (
          <Card />
        ))}
      </div>
    </div>
  );
};

export default Team;
