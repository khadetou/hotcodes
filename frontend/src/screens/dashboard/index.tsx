import AOS from "aos";
import { useEffect } from "react";
import Charts from "react-apexcharts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import CountUp from "react-countup";
import shapes1 from "/public/images/shapes/01.png";
import shapes2 from "/public/images/shapes/02.png";
import shapes3 from "/public/assets/images/shapes/03.png";
import shapes4 from "/pubilc/assets/images/shapes/04.png";
import shapes5 from "/public/assets/images/shapes/05.png";
import Slider from "@/components/dashboard/Slider";

const DashboardScreen = () => {
  useEffect(() => {
    AOS.init({
      startEvent: "DOMContentLoaded",
      disable: function () {
        var maxWidth = 996;
        return window.innerWidth < maxWidth;
      },
      throttleDelay: 10,
      once: true,
      duration: 700,
      offset: 10,
    });
    //   customizer
    // const colorcustomizerMode = sessionStorage.getItem('color-customizer-mode');
    // const colorcustomizerinfoMode = sessionStorage.getItem('colorcustominfo-mode');
    // const colorcustomizerprimaryMode = sessionStorage.getItem('colorcustomprimary-mode');
    // if(colorcustomizerMode===null){
    //     props.ColorCustomizerAction(props.customizerMode, props.cololrinfomode, props.colorprimarymode);
    //     document.documentElement.style.setProperty('--bs-info', props.cololrinfomode );

    // }
    // else{
    //     props.ColorCustomizerAction(colorcustomizerMode, colorcustomizerinfoMode, colorcustomizerprimaryMode);
    //     document.documentElement.style.setProperty('--bs-info', colorcustomizerinfoMode);

    // }
  });

  const chart1 = {
    options: {
      chart: {
        fontFamily:
          '"Inter", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: false,
        },
      },
      colors: ["blue", "red"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 3,
      },
      yaxis: {
        show: true,
        labels: {
          show: true,
          minWidth: 19,
          maxWidth: 19,
          style: {
            colors: "#8A92A6",
          },
          offsetX: -5,
        },
      },
      legend: {
        show: false,
      },
      xaxis: {
        labels: {
          minHeight: 22,
          maxHeight: 22,
          show: true,
          style: {
            colors: "#8A92A6",
          },
        },
        lines: {
          show: false, //or just here to disable only x axis grids
        },
        categories: ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug"],
      },
      grid: {
        show: false,
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "vertical",
          shadeIntensity: 0,
          gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
          inverseColors: true,
          opacityFrom: 0.4,
          opacityTo: 0.1,
          stops: [0, 50, 80],
          colors: ["blue", "red"],
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    series: [
      {
        name: "total",
        data: [94, 80, 94, 80, 94, 80, 94],
      },
      {
        name: "pipline",
        data: [72, 60, 84, 60, 74, 60, 78],
      },
    ],
  };

  //chart2
  const chart2 = {
    options: {
      colors: ["blue", "red"],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 10,
            size: "50%",
          },
          track: {
            margin: 10,
            strokeWidth: "50%",
          },
          dataLabels: {
            show: false,
          },
        },
      },
      labels: ["Apples", "Oranges"],
    },
    series: [55, 75],
  };
  const chart3 = {
    options: {
      chart: {
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      colors: ["blue", "red"],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "28%",
          endingShape: "rounded",
          borderRadius: 5,
        },
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["S", "M", "T", "W", "T", "F", "S", "M", "T", "W"],
        labels: {
          minHeight: 20,
          maxHeight: 20,
          style: {
            colors: "#8A92A6",
          },
        },
      },
      yaxis: {
        title: {
          text: "",
        },
        labels: {
          minWidth: 19,
          maxWidth: 19,
          style: {
            colors: "#8A92A6",
          },
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val: any) {
            return "$ " + val + " thousands";
          },
        },
      },
    },
    series: [
      {
        name: "Successful deals",
        data: [30, 50, 35, 60, 40, 60, 60, 30, 50, 35],
      },
      {
        name: "Failed deals",
        data: [40, 50, 55, 50, 30, 80, 30, 40, 50, 55],
      },
    ],
  };

  return (
    <section className="my-[160px] h-full">
      <div>
        <div>
          <Swiper
            className="relative flex flex-row LR"
            slidesPerView={5}
            spaceBetween={32}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              550: { slidesPerView: 2 },
              991: { slidesPerView: 3 },
              1400: { slidesPerView: 4 },
              1500: { slidesPerView: 5 },
              1920: { slidesPerView: 6 },
              2040: { slidesPerView: 7 },
              2440: { slidesPerView: 8 },
            }}
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <SwiperSlide className="pt-0 pb-0 mb-8">
              <Slider />
            </SwiperSlide>
            <div className="swiper-button swiper-button-next"></div>
            <div className="swiper-button swiper-button-prev"></div>
          </Swiper>
        </div>
      </div>

      <div className="flex flex-wrap">
        <div className="w-full lg:w-2/3">
          <div className="flex flex-auto">
            <div className="flex-auto w-full lg:pr-4 rtl:pr-0 rtl:pl-4">
              <div className="flex flex-col mb-8 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-dark-card">
                <div className="p-6 relative ">
                  <div className="flex flex-wrap items-center justify-between pb-0 mb-0">
                    <div>
                      <div className="mt-0 mb-0 text-2xl font-medium dark:text-gray-600 counter">
                        $855.8K
                      </div>
                      <p className="block mb-0 text-gray-500 font-medium dark:text-gray-600">
                        Gross Sales
                      </p>
                    </div>
                    <div className="flex items-center self-center">
                      <div className="flex items-center text-blue-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <g>
                            <circle
                              cx="12"
                              cy="12"
                              r="8"
                              fill="currentColor"
                            ></circle>
                          </g>
                        </svg>
                        <div className="ml-2 rtl:ml-0 rtl:mr-2">
                          <span className="text-gray-600">Sales</span>
                        </div>
                      </div>
                      <div className="flex items-center ml-3 rtl:ml-0 rtl:mr-3 text-cyan-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <g>
                            <circle
                              cx="12"
                              cy="12"
                              r="8"
                              fill="currentColor"
                            ></circle>
                          </g>
                        </svg>
                        <div className="ml-2 rtl:ml-0 rtl:mr-2">
                          <span className="text-gray-600">Cost</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center" x-data="{ open: false }">
                      <div x-data="{ open: false }">
                        <span
                          className="flex items-center h5 cursor-pointer text-gray-600 dark:text-blue-300"
                          onClick={() => console.log("open =!open")}
                        >
                          This Week
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            // x-bind:style="open ? 'transform:  rotate(180deg)' : ''"
                            className="w-5 h-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </span>
                        <div
                          className="absolute dark:bg-dark-bg dark:border-dark-bg z-50 py-2 text-base right-4 rtl:right-0 rtl:left-4 text-left text-gray-600 bg-white border rounded shadow-md bg-clip-padding"
                          onClick={() => console.log("open=false")}
                          x-show="open"
                        >
                          <a
                            className="block clear-both w-full px-4 py-1 font-normal whitespace-nowrap hover:text-blue-500 focus:text-white focus:bg-blue-500"
                            href="javascript:void(0);"
                          >
                            This Week
                          </a>
                          <a
                            className="block clear-both w-full px-4 py-1 font-normal whitespace-nowrap hover:text-blue-500 focus:text-white focus:bg-blue-500"
                            href="javascript:void(0);"
                          >
                            This Month
                          </a>
                          <a
                            className="block clear-both w-full px-4 py-1 font-normal whitespace-nowrap hover:text-blue-500 focus:text-white focus:bg-blue-500"
                            href="javascript:void(0);"
                          >
                            This Year
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <div id="d-main"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardScreen;
