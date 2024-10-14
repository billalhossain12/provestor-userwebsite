"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./PropertySlider.module.css";
import PropertyCard from "@/components/UI/PropertyCard";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function InvestPage() {
  return (
    <section className="md:px-[4rem] px-[0.3rem] md:mb-[7.5rem] mb-[4rem]">
      <div className="md:py-[3rem] py-[1rem]">
        <div className="flex md:flex-row flex-col justify-between items-center">
          <h3 className="lg:text-[3rem] md:text-[2.5rem] text-[2rem] font-semibold leading-[2.37rem]">
            All Properties
          </h3>
          <button
            // onClick={handleFilterToggle}
            className="bg-[#24B24B] hover:bg-[#000] hover:text-[#fff] duration-300 px-[3rem] py-[1rem] font-semibold flex items-center gap-3 md:mt-0 mt-[1rem]"
          >
            <span>Filters</span>
            <Icon className="text-2xl" icon="mdi:filter" />
          </button>
        </div>
        {/* <FilterToasts /> */}
      </div>

      <div className="md:mt-[3.68rem] mt-[1rem]">
        <div>
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
                spaceBetween: 30,
              },
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide className="md:mb-[3rem] mb-[1.5rem]">
              <PropertyCard />
            </SwiperSlide>
            <SwiperSlide className="md:mb-[3rem] mb-[1.5rem]">
              <PropertyCard />
            </SwiperSlide>
            <SwiperSlide className="md:mb-[3rem] mb-[1.5rem]">
              <PropertyCard />
            </SwiperSlide>
            <SwiperSlide className="md:mb-[3rem] mb-[1.5rem]">
              <PropertyCard />
            </SwiperSlide>
            <SwiperSlide className="md:mb-[3rem] mb-[1.5rem]">
              <PropertyCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
