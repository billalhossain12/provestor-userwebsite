"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import { Icon } from "@iconify/react";
import ClientReview from "./ClientReview";

const teamMembers = [
  {
    name: "John Smith",
    designation: "Real Estate Agent",
    description:
      "With 10 years of experience in the real estate industry, John specializes in residential properties. He is committed to providing exceptional service to his clients and helping them find their dream homes.",
    image: "https://i.ibb.co/S3mypps/member-1.png",
  },
  {
    name: "Emily Johnson",
    designation: "Property Manager",
    description:
      "Emily is an experienced property manager with 8 years of expertise in managing commercial properties. She is dedicated to ensuring the smooth operation and maintenance of her clients' properties.",
    image: "https://i.ibb.co/BBxvM96/member-3.jpg",
  },
  {
    name: "David Brown",
    designation: "Real Estate Broker",
    description:
      "David, a seasoned real estate broker with 12 years of experience, specializes in luxury homes. He is known for his negotiation skills and ability to deliver outstanding results for his clients.",
    image: "https://i.ibb.co/cLXjyyS/member-4.jpg",
  },
  {
    name: "Jessica Miller",
    designation: "Home Stager",
    description:
      "Jessica is a talented home stager with 6 years of experience. She has a keen eye for design and specializes in staging homes to attract potential buyers and maximize their value.",
    image: "https://i.ibb.co/wYfM8yN/member-5.jpg",
  },
  {
    name: "Michael Davis",
    designation: "Real Estate Lawyer",
    description:
      "With 15 years of experience as a real estate lawyer, Michael provides expert legal services to his clients. He is committed to protecting their interests and ensuring smooth transactions.",
    image: "https://i.ibb.co/hLQ5fkv/member-6.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="lg:mb-[4rem] md:mb-[3rem] lg:mx-2 lg:px-0 px-[1rem]">
      <div className="md:grid grid-cols-3 w-full">
        <div
          className="flex justify-center items-center md:min-h-[428px] md:py-0 py-[1rem] bg-cover bg-center col-span-1"
          style={{ backgroundImage: `url(./quotation.png)` }}
        >
          <div className="text-center space-y-[1.5rem] text-[#FFF] px-[3.1rem]">
            <h3 className="text-[2rem] font-semibold">Team</h3>
            <p className="leading-[1.8rem]">
              Introducing our expert team, committed to exceptional service and
              results in real estate brokerage, management, and legal counsel.
            </p>
          </div>
        </div>

        {/* Client Reviews Container  */}
        <div className="col-span-2">
          <div className="md:mt-[4.5rem]">
            <Swiper
              // autoplay={{
              //   delay: 2000,
              //   disableOnInteraction: true,
              // }}
              breakpoints={{
                200: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },

                1200: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
              }}
              navigation={{
                nextEl: "#next-btn",
                prevEl: "#prev-btn",
              }}
              modules={[Pagination, Navigation, Autoplay]}
              className="mySwiper"
            >
              {teamMembers?.map((member, index) => (
                <SwiperSlide key={index}>
                  <ClientReview member={member} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* Pagination  */}
          <div className="py-[1rem] flex items-center justify-center gap-[3rem]">
            <button id="prev-btn">
              <Icon
                className="cursor-pointer text-gray-700"
                icon="fa6-solid:angle-left"
              />
            </button>
            <button id="next-btn">
              <Icon
                className="cursor-pointer text-gray-700"
                icon="fa6-solid:angle-right"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
