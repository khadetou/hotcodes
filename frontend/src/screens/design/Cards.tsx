import React from "react";
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
      toptitle: "Photography",
      text: "For $2000 get it with the website",
      image: photofeel,
    },
    {
      title: "Illustration look and feel",
      toptitle: "Illustration",
      text: "For $2000 get it with the website",
      image: illustration,
    },
    {
      title: "Minimalistic look and feel",
      toptitle: "Minimalistic",
      text: "For $2000 get it with the website",
      image: minimalistic,
    },
    {
      title: "Cryptocurrency look and feel",
      toptitle: "Cryptocurrency",
      text: "For $2000 get it with the website",
      image: crypto,
    },
  ];
  const wireframe = [
    {
      title: "Photography look and feel",
      toptitle: "Photography",
      text: "For $2000 get it with the website",
      image: photofeel,
    },
    {
      title: "Illustration look and feel",
      toptitle: "Illustration",
      text: "For $2000 get it with the website",
      image: illustration,
    },
    {
      title: "Minimalistic look and feel",
      toptitle: "Minimalistic",
      text: "For $2000 get it with the website",
      image: minimalistic,
    },
    {
      title: "Cryptocurrency look and feel",
      toptitle: "Cryptocurrency",
      text: "For $2000 get it with the website",
      image: crypto,
    },
  ];
  return (
    <>
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
    </>
  );
};

export default Cards;
