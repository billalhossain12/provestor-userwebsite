"use client";
import Image from "next/image";
import studyBannerImg from "../../../assets/study-banner.svg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./StudyCenterSlider.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Icon } from "@iconify/react/dist/iconify.js";

const studyCenterDataArray = [
  {
    title: "How to become real estate agent",
    content:
      "This involves finding a brokerage that aligns with your goals, values, and business philosophy and entering into an agreement to work under their supervision.",
    link: "https://www.youtube.com/embed/W5jyH4j_Yps?si=sGO1QBT6P8PJ0DHh",
  },
  {
    title: "Qualification for real",
    content: "Around 60 to 180 hours, depending on the state.",
    link: "https://www.youtube.com/embed/D69VhdRNok0?si=2rHlzmAs6XEX7bWQ",
  },
  {
    title: "Financial investments to start",
    content:
      "Which can range from a few hundred to a few thousand dollars, depending on the provider and state requirements.",
    link: "https://www.youtube.com/embed/UJv9-F7SN5A?si=moGafn_7LdWGFoJE",
  },
  {
    title: "Resources for new agents",
    content:
      "Training courses cover a wide range of topics, from sales and marketing to contract negotiation.",
    link: "https://www.youtube.com/embed/yL0zzGsM1qg?si=fC4i2R54WafRqUAa",
  },
];

export default function StudyCenterPage() {
  return (
    <main className="bg-[#F7F4F2] pb-[0.5rem]">
      {/* Banner  */}
      <section className="lg:px-[4rem] px-[0.5rem] py-[4rem]">
        <div className="bg-[#FFF] mx-auto grid lg:grid-cols-2 grid-cols-1 lg:px-[3rem] lg:py-[5.5rem] py-[1rem] gap-[3rem]  px-[1rem]">
          <div className="flex items-center">
            <div className="lg:mt-[-13px] mt-[3rem]">
              <h1 className="lg:text-[2.5rem] md:text-[2rem] text-[1.5rem] font-bold md:leading-[3.5rem] leading-[2rem] relative">
                <span className="absolute left-[-0.5rem] top-[0.6rem] bg-[#24B24B] h-[2rem] w-[3px]"></span>{" "}
                <span>Explore and Expand Your</span>
                <br />
                <span className="text-[#24B24B]">Real Estate Expertise.</span>
              </h1>
              <p className="md:text-[1.5rem] text-[1rem] font-semibold md:leading-[2.1rem] leading-[2rem] mt-[1.5rem]">
                Elevate your real estate journey with our expert insights,
                fostering continuous learning for property investment
                excellence.
              </p>
            </div>
          </div>
          <div>
            <Image
              className="lg:max-w-[600px] w-full"
              src={studyBannerImg}
              alt="hero-banner"
            />
          </div>
        </div>
      </section>

      {/* Cards  */}
      <section className="mb-[4rem] lg:mx-[4rem] mx-[0.5rem] bg-[#FFF] md:p-[3rem] ">
        <h3 className="md:text-[2rem] text-[1.5rem] font-semibold leading-[2.5rem] border-b-[1.5px] border-gray-500 inline-block mb-[3rem]">
          Study Center
        </h3>

        <>
          <Swiper
            slidesPerView={3}
            navigation={true}
            breakpoints={{
              200: {
                slidesPerView: 1,
                spaceBetween: 40,
              },

              900: {
                slidesPerView: 2,
                spaceBetween: 40,
              },

              1000: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper px-[5rem] mb-[3rem]"
          >
            <div>
              {studyCenterDataArray?.map(({ title, link, content }, index) => (
                <SwiperSlide key={index} className="mb-[3rem]">
                  <div
                    className="bg-[#fff] rounded-[0.125rem] p-[0.5rem] h-[450px]"
                    style={{ boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.10)" }}
                  >
                    <div className="">
                      <iframe
                        className="w-full h-[200px]"
                        src={link}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    </div>

                    <div className="p-[1rem] space-y-3">
                      <h3 className="text-[1.5rem] font-semibold leading-6">
                        {title}
                      </h3>
                      <p>{content}</p>
                      <div className="flex items-center gap-[0.5rem] text-[#B1B1B1]">
                        <Icon icon="mdi:clock" />
                        <p>30 Mins</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </>
      </section>
    </main>
  );
}
