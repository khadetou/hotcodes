import BlogImg from "/public/images/blog-img.png";
import Avatar from "/public/images/avatar/avatar.jpg";
import Image from "next/image";

const Card = () => {
  return (
    <div className="shadow-shadow max-w-[413px] w-full p-4 h-[653px] rounded-3xl">
      <div className="max-h-[260px] h-full w-full relative ">
        <Image className="rounded-[20px] " layout="fill" src={BlogImg} />
      </div>
      <div className="flex mt-[18px] w-full max-w-[177px] justify-between items-center">
        <button className="text-white font-bold bg-dark-pink max-w-[113px] w-full h-[36px] rounded-[10px] text-[12px]">
          Developement
        </button>
        <span className="h-1 w-1 bg-dark rounded-sm"></span>
        <p className="font-bold text-dark text-[15px]">10 min</p>
      </div>

      <h1 className="font-semibold text-[34px] text-dark leading-none mt-[18px]">
        The complete React developer 2022
      </h1>

      <p className="text-2xl font-normal leading-[29px] text-[#b2b2b2] w-full mt-[18px]">
        How to effectively use react in the best way ever telling you the best
        way and the best pluggins to use in 2022.
      </p>
      <div className="mt-[18px] items-center flex justify-between max-w-[157px] w-full">
        <Image
          className="rounded-full"
          src={Avatar}
          height={50}
          width={50}
          alt="Rounded avatar"
        />
        <p className="text-dark-pink underline font-bold text-lg">Hotcodes</p>
      </div>
    </div>
  );
};

export default Card;
