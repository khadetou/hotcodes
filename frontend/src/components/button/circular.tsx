import { FC } from "react";
import { FaPlay } from "react-icons/fa";

interface CircularProps {
  className?: string;
}

const Circular: FC<CircularProps> = ({ className }) => {
  return (
    <button className={className}>
      <FaPlay className="xs:text-base text-xs" />
    </button>
  );
};

export default Circular;
