import Title from "@/components/blogs/Title";
import Titlebold from "@/components/Title/titlebold";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

const Banner = () => {
  const [search, setSearch] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <section className="mb-[160px]">
      <div className="containers flex flex-col items-center justify-center">
        <Title />
        <Titlebold
          title="“ Blog ”"
          className="text-transparent bg-grad-text-2 bg-clip-text !mt-0"
        />
        <p className="font-medium mt-3 text-lg text-gray text-center">
          Have complete access to all the news about tech and entrepreneurship
        </p>
        <label
          htmlFor="search"
          className={`max-w-[635px] p-4  block mt-14 w-full h-[88px] md:h-[111px] rounded-2xl md:rounded-[23px] bg-[#ffffff]  mb-[36px] relative shadow-shadow-sm`}
        >
          <label
            htmlFor="search"
            className="absolute top-1/2 -translate-y-1/2 left-9"
          >
            <BsSearch className="text-dark" size="20" />
          </label>

          <input
            onChange={onChange}
            type="text"
            name="search"
            id="search"
            placeholder="search"
            className={`bg-[#f5f5f5] focus:border placeholder:text-base placeholder:xxs:text-[18px] placeholder:font-normal focus:border-[#e293d3] focus:ring-0 border-none focus:shadow-input focus:shadow-[#e9aede] w-full h-full rounded-[13px] outline-none px-[20px] md:px-[60px] py-2 text-dark text-lg md:text-[22px] font-medium  `}
          />

          <button
            type="button"
            className="text-base font-bold text-white max-w-[96px] w-full h-[51px] rounded-[13px] bg-dark-pink absolute top-1/2 -translate-y-1/2 right-9"
          >
            GO
          </button>
        </label>
      </div>
    </section>
  );
};

export default Banner;
