import { useState, useEffect } from "react";
import photofeel from "/public/images/design/photography.png";
import illustration from "/public/images/design/illustration.png";
import minimalistic from "/public/images/design/minimalistic.png";
import crypto from "/public/images/design/crypto.png";

import Title from "@/components/Title/title";
import DesignCards from "@/components/Bigcards/Design";
import Modal from "react-modal";
import Modals from "@/components/Modal/Modal";
import { FiEdit3 } from "react-icons/fi";
import SubModal from "@/components/Modal/SubModal";

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0,0, 0.8)",
  },
  content: {
    position: "absolute",
    top: "20px",
    left: "40px",
    right: "40px",
    bottom: "0px",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px",
  },
};

type Style = {
  color: string;
};
interface Subtitle {
  style: Style;
}

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

  const [modalIsOpen, setIsOpen] = useState(false);
  const [submodalIsOpen, setSubIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function openSubModal() {
    setSubIsOpen(true);
  }

  useEffect(() => {
    Modal.setAppElement("#modals");
  }, []);

  return (
    <>
      <Modals
        setIsOpen={setIsOpen}
        openModal={openModal}
        openSubModal={openSubModal}
        modalIsOpen={modalIsOpen}
        customStyles={customStyles}
      />
      <SubModal
        setIsOpen={setSubIsOpen}
        modalIsOpen={submodalIsOpen}
        openModal={openSubModal}
      />

      <div id="modals">
        <div className="containers my-16">
          <Title
            title="Moodboard"
            className="text-transparent bg-clip-text bg-grad-btn"
          />
        </div>
        <div className="containers grid grid-cols-1 md:grid-cols-2 gap-8">
          {moodboard.map(({ title, toptitle, text, image }, index) => (
            <div key={index} className="relative group">
              <button
                onClick={openModal}
                className="group-hover:flex hidden  items-center rounded-full px-[9px] py-[7px] shadow-md text-dark font-medium absolute z-10 top-5 right-6 bg-white"
              >
                <FiEdit3 className="mr-3" />
                Select one model
              </button>
              <DesignCards
                title={title}
                toptitle={toptitle}
                subtitle={text}
                image={image}
              />
            </div>
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
    </>
  );
};

export default Cards;
