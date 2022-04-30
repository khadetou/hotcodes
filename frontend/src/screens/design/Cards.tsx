import { useState } from "react";
import photofeel from "/public/images/design/photography.png";
import illustration from "/public/images/design/illustration.png";
import minimalistic from "/public/images/design/minimalistic.png";
import crypto from "/public/images/design/crypto.png";
import photowire from "/public/images/design/photowire.png";
import Title from "@/components/Title/title";
import DesignCards from "@/components/Bigcards/Design";

const Cards = () => {
  const moodboard = [
    {
      title: "Photography look and feel",
      toptitle: "Photo,graphy",
      text: "For $2000 get it with the website",
      image: photofeel,
    },
    {
      title: "Illustration look and feel",
      toptitle: "Illus,tration",
      text: "For $2000 get it with the website",
      image: illustration,
    },
    {
      title: "Minimalistic look and feel",
      toptitle: "Minimalistic ,and clean",
      text: "For $2000 get it with the website",
      image: minimalistic,
    },
    {
      title: "Cryptocurrency look and feel",
      toptitle: "Crypto,currency",
      text: "For $2000 get it with the website",
      image: crypto,
    },
  ];
  const wireframes = [
    {
      title: "Photography look and feel",
      toptitle: "Photo,graphy",
      text: "For $2000 get it with the website",
      image: photofeel,
    },
    {
      title: "Illustration look and feel",
      toptitle: "Illus,tration",
      text: "For $2000 get it with the website",
      image: illustration,
    },
    {
      title: "Minimalistic look and feel",
      toptitle: "Minimalistic ,& clean",
      text: "For $2000 get it with the website",
      image: minimalistic,
    },
    {
      title: "Cryptocurrency look and feel",
      toptitle: "Crypto,currency",
      text: "For $2000 get it with the website",
      image: crypto,
    },
  ];

  return (
    <div>
      <div className="containers my-16">
        <Title
          title="Moodboard"
          className="text-transparent bg-clip-text bg-grad-btn"
        />
      </div>
      <div className="containers grid grid-cols-1 md:grid-cols-2 gap-8">
        {moodboard.map(({ title, toptitle, text, image }, index) => (
          <DesignCards
            title={title}
            toptitle={toptitle}
            subtitle={text}
            image={image}
            key={index}
          />
        ))}
      </div>
      <div className="containers my-16">
        <Title
          title="Wireframe"
          className="text-transparent bg-clip-text bg-grad-btn"
        />
      </div>
      <div className="containers grid grid-cols-1 md:grid-cols-2 gap-8">
        {wireframes.map(({ title, toptitle, text, image }, index) => (
          <DesignCards
            title={title}
            toptitle={toptitle}
            subtitle={text}
            image={image}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
