import { FC } from "react";

interface CardProps {
  title: string;
  paragraph: string;
}

const Card: FC<CardProps> = ({ title, paragraph }) => {
  return (
    <div>
      <div></div> <h1>{title}</h1> <p>{paragraph}</p>
    </div>
  );
};

export default Card;
