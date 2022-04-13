import Image from "next/image";

import Button from "@/components/button/Button";
import sideImage from "/public/images/sideimage.png";

const Banner = () => {
  return (
    <section className="h-screen flex items-center bg-grad-back blend relative -z-10 ">
      <div className="flex flex-col items-center md:flex-row containers mt-8">
        <div className="max-w-[734px]">
          <h1 className="text-white lg:text-[101px] font-light leading-none">
            Experience The Next Level Of Awesomeness
          </h1>
          <p className="text-white text-xl my-6 max-w-[635px]">
            Build your website without any problem this is the Best startup
            you’ll ever find in the market because we build awesome products
            with awesome design click on the button bellow and start your
            journey
          </p>
          <Button />
        </div>
        <div className="absolute right-0 -top-[38%] translate-y-[50%]">
          <Image src={sideImage} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
