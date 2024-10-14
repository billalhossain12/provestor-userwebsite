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
import { useState } from "react";
import { Accordion, AccordionBody, AccordionHeader } from "@material-tailwind/react";


export function MaterialIcon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export default function InvestPage() {
  const [isVisible, setIsVisible] = useState(false);
  const handleFilterToggle = () => {
    setIsVisible(!isVisible);
  };



  const [openPropertyType, setOpenPropertyType] = useState(0);
  const handleOpenPropertyType = (value) =>
    setOpenPropertyType(openPropertyType === value ? 0 : value);

  const handleChangePropertyType = (e) => {
    const selectedText = e.target.nextSibling.innerText;
  };
  return (
    <>



      <section className="lg:px-[5.5rem] md:px-[1rem] px-[0.5rem] pb-[5rem] relative overflow-hidden min-h-[1050px]">
        {/* Filter Card  */}
        <div
      className={`${
        isVisible ? "right-0" : "right-[-120rem]"
      } duration-300 absolute  right-0 md:min-w-[350px] min-w-[250px] min-h-full md:p-[3rem] p-[1rem] bg-white shadow-2xl z-[10]`}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-[2rem] font-semibold">Filters</h3>
        <Icon
          onClick={handleFilterToggle}
          className="w-[2.5rem] h-[2.5rem] cursor-pointer overflow-hidden text-red-600"
          icon="ph:x-square-thin"
        />
      </div>


      {/* Property Types UI  */}
      <div className="pt-[1.8rem]">
      <Accordion
        className="border-b-[1px] border-b-[#D3D3D3]"
        open={openPropertyType === 1}
        icon={<MaterialIcon id={1} open={openPropertyType} />}
      >
        <AccordionHeader
          className="border-b border-transparent"
          onClick={() => handleOpenPropertyType(1)}
        >
          <h3 className="text-[1.25rem] !font-semibold font-openSans text-[#353535] leading-[1.25rem]">
            Property Type
          </h3>
        </AccordionHeader>

        <AccordionBody>
          <div className="space-y-[1rem] font-openSans">
            {[]?.map((propertyType, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  className="w-[1.1rem] h-[1.1rem] propertyTypes"
                  id={propertyType}
                  type="checkbox"
                  onChange={handleChangePropertyType}
                />
                <label
                  htmlFor={propertyType}
                  className="text-[1.25rem] leading-[2rem] select-none"
                >
                  {propertyType}
                </label>
              </div>
            ))}
          </div>
        </AccordionBody>
      </Accordion>
    </div>
    

    </div>
        

        <div className="md:py-[3rem] py-[1rem]">
          <div className="flex md:flex-row flex-col justify-between items-center">
            <h3 className="lg:text-[3rem] md:text-[2.5rem] text-[2rem] font-semibold leading-[2.37rem]">
              All Properties
            </h3>
            <button
              onClick={handleFilterToggle}
              className="bg-[#24B24B] hover:bg-[#000] hover:text-[#fff] duration-300 px-[3rem] py-[1rem] font-semibold flex items-center gap-3 md:mt-0 mt-[1rem]"
            >
              <span>Filters</span>
              <Icon className="text-2xl" icon="mdi:filter" />
            </button>
          </div>
        </div>
        {/* Property list container  */}
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
      </section>
    </>
  );
}
