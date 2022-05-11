import Image from "next/image";
import { useTranslation } from "next-i18next";
import MarketingBanner from "/public/images/marketing/banner-img.png";
import Built from "/public/images/marketing/built.svg";
import Sync from "/public/images/marketing/sync.svg";
import Bg1 from "/public/images/marketing/marketingbg.svg";
import Circular from "@/components/button/circular";
const Banner = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <section className="h-full flex flex-col justify-center items-center  relative ">
        <div className="absolute -z-10 left-0 -top-5 ">
          <Image src={Bg1} />
        </div>
        <div className="flex flex-col justify-between items-center lg:flex-row md:mb-[50px] lg:mb-[110px] mt-[208px] xsm:mb-[103px]  containers">
          <div className="max-w-[734px] w-full mb-4 ">
            <h1 className="text-dark w-full text-[32px] leading-[1.2] xxs:text-[40px]  md:text-[40px] xs:text-[37px] lg:text-[64px] mb-[20px] 2xl:text-[82px]  2xl:leading-none font-bold">
              Digital{" "}
              <span className="text-transparent bg-clip-text bg-grad-text-2">
                Marketing
              </span>{" "}
              Success
            </h1>
            <p className="text-gray   xl:leading-snug text-[14px] leading-[1.2] xs:text-[18px] text-lg mb-5 mt-[10px] sm:my-[10px] font-medium  max-w-[541px]">
              Increase your sales with hotcodes, we explore the best solutions
              in order to provide the best digital marketing services you need.
            </p>
            <div className="flex items-center  md:mt-8">
              <button className="bg-grad-text-2 text-white max-h-[50px]  text-sm py-2 px-4 sm:text-base sm:px-10 sm:py-[11px] font-bold uppercase rounded-full shadow-shadow">
                Start Now
              </button>
              <div className="md:ml-6  xxs:ml-[13px] ml-[7px]">
                <Circular className="rounded-full p-[12px] xxs:p-[11px] bg-white text-primary shadow-shadow lg:p-4" />
                <span className="text-dark xxs:text-[14px] md:text-base xs:text-[14px] font-normal ml-[5px] text-[10px] lg:text-lg lg:font-semibold uppercase">
                  Watch the video
                </span>
              </div>
            </div>
          </div>
          <div>
            <Image src={MarketingBanner} />
          </div>
        </div>
        <div className="flex  py-[53px] justify-between w-full bg-pink-transparent">
          <div className="containers flex flex-col lg:flex-row items-center justify-between">
            <div className="max-w-xs mb-6 lg:mb-0">
              <p className="text-gray text-base font-medium">ACHIVE MORE</p>
              <h1 className="text-dark text-[32px] leading-[40px] font-bold">
                Purpose of a convoy is to keep your team.
              </h1>
            </div>
            <div className="flex mb-6 lg:mb-0">
              <div>
                <Image src={Built} />
              </div>
              <div className="max-w-xs">
                <h1 className="text-2xl font-medium text-dark">
                  Built for impact
                </h1>
                <p className="text-base text-gray font-normal">
                  We identify and nurture a truly diverse team of designers,
                  developers and marketers
                </p>
              </div>
            </div>
            <div className="flex">
              <div>
                <Image src={Sync} />
              </div>
              <div className="max-w-xs">
                <h1 className="text-2xl font-medium text-dark">
                  In sync with you
                </h1>
                <p className="text-base text-gray font-normal">
                  We work the way you do by adapting to your workflows and
                  rhythm we aim to blend in for a seamless.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
