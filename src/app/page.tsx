"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./PropertySlider.module.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import Image from "next/image";
import aboutImg from "../assets/about.png";
import homeBannerImg from "../assets/home-banner.png";
import PropertyCard from "@/components/UI/PropertyCard";

import passiveIncome from "../assets/passive-income.png";
import longTermAppreciation from "../assets/long-term-appreciation.png";
import investmentPolicy from "../assets/investment-policy.png";
import diversifyPortfolio from "../assets/diversify-portfolio.png";
import currencyValue from "../assets/currency-value.png";
import investmentStrategy from "../assets/investment-strategy.png";
import quotationImg from "../assets/quotation.png";

import { Icon } from "@iconify/react/dist/iconify.js";
import ClientReview from "@/components/UI/ClientReview";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useState } from "react";
import Faqs from "@/components/UI/Faqs";

function AccordionIcon({ id, open }) {
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

export default function HomePage() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <>
      {/* Banner Section  */}
      <section>
        <div className="flex lg:flex-row flex-col-reverse justify-between items-center md:py-[7.5rem] md:gap-[4rem] md:mb-0 mb-[3rem]">
          <div className="lg:mt-[-13px] mt-[3rem] lg:pl-[4rem] pl-[0.5rem] md:w-[55%] w-full">
            <h1 className="relative lg:text-[3rem] md:text-[2.5rem] text-[2rem] font-bold md:leading-[3.5rem] leading-[2rem]">
              <span className="absolute left-[-0.7rem] top-[0.4rem] bg-[#24B24B] h-[2.5rem] w-[3px] md:block hidden"></span>
              Unlock The <span className="text-[#24B24B]">Democratization</span>{" "}
              <br /> Of Real Estate Investment.
            </h1>
            <p className="md:text-[1.5rem] text-[1.25rem] font-semibold md:leading-[2.1rem] leading-[2rem] mt-[1.5rem]">
              Think Big. Take Small Steps and Build Something Real.
            </p>
            <p className="md:mt-[2.5rem] mt-[1rem] md:text-[1.5rem] text-[1.25rem]">
              Evolve your wealth with an easier way to build your investment
              portfolio, radically simplified processes, accessible to anyone
              with little or no experience can do it.
            </p>
            <div className="mb-[1.5rem] md:mt-[1rem]">
              <button
                // onClick={handleGetStartedNavigation}
                className="bg-[#24B24B] text-[1.25rem] font-semibold hover:bg-[#000] hover:text-[#fff] duration-300 py-[1rem] px-[4rem] mt-[2.5rem] md:w-auto w-full"
              >
                Get Started
              </button>
              <p className="italic text-[1.25rem] mt-[0.8rem]">
                Start investing in less than 5 minutes and with as little as
                ₹100.
              </p>
            </div>
          </div>
          <div className="lg:w-[45%] w-full">
            <Image src={homeBannerImg} alt="home-banner" />
          </div>
        </div>
      </section>

      {/* Statistics  */}
      <section className="financial-stats-section flex md:flex-row flex-col lg:gap-0 gap-10 justify-between items-center text-center text-[#FFFFFF] bg-[#24B24B] md:px-[8rem] px-[1.5rem] py-[5rem] md:mb-[7.5rem] mb-[4rem]">
        <div>
          <h3 className="font-semibold lg:text-[4rem] text-[3rem] lg:mb-[1.5rem] mb-[0rem]">
            ₹1500
          </h3>
          <p className="text-[1.5rem]">Dividends Paid</p>
        </div>
        <div className="md:h-[9rem] md:w-[0.1rem] w-[9rem] h-[0.1rem] bg-[#3dc962]"></div>

        <div>
          <h3 className="font-semibold lg:text-[4rem] text-[3rem] lg:mb-[1.5rem] mb-[0rem]">
            900
          </h3>
          <p className="text-[1.5rem]">Registered Investors</p>
        </div>
        <div className="md:h-[9rem] md:w-[0.1rem] w-[9rem] h-[0.1rem] bg-[#3dc962]"></div>

        <div>
          <h3 className="font-semibold lg:text-[4rem] text-[3rem] lg:mb-[1.5rem] mb-[0rem]">
            ₹45000
          </h3>
          <p className="text-[1.5rem]">Assets under Value</p>
        </div>
      </section>

      {/* How it works section  */}
      <section className="lg:mx-[4rem] mx-[1rem] md:mb-[7.5rem] mb-[4rem]">
        <div className="flex md:flex-row flex-col md:justify-between md:items-center">
          <h3 className="lg:text-[3rem] md:text-[2.5rem] text-[2rem] font-semibold leading-[2.3rem] pb-[0.5rem]">
            How it Works
          </h3>
          <button className="text-[1rem] md:w-auto w-full font-semibold bg-[#24B24B] px-[3rem] py-[1rem] hover:bg-[#000] hover:text-[#fff] duration-300">
            Learn More
          </button>
        </div>

        {/* How It Works Video */}
        <div className="bg-[#888888] md:h-[30rem] h-[15rem] mt-[1.5rem] flex justify-center items-center">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/WlqYhER9Dd8?si=rAND2lIheZCogLe_"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Properties List  */}
      <section className="md:px-[4rem] px-[0.3rem] md:mb-[7.5rem] mb-[4rem]">
        <div>
          <div className="pb-[1.5rem] flex md:flex-row flex-col justify-between items-center">
            <h3 className="lg:text-[3rem] md:text-[2.5rem] text-[2rem] font-semibold leading-[2.37rem] md:mb-0 mb-[1rem]">
              Property Listings
            </h3>
            <button className="bg-[#24B24B] hover:bg-[#000] hover:text-[#fff] duration-300 px-[3rem] py-[1rem] font-semibold">
              Browse all
            </button>
          </div>
          <p className="text-[1.25rem] md:text-left text-center">
            Our listings are spread across Bangalore, Mumbai, Hyderabad and
            Pune.
          </p>
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

      {/* Why RealState Section */}
      <section className="bg-[#FFF] lg:mx-[4rem] mx-[1rem] md:p-[2.5rem] p-[1rem] md:mb-[7.5rem] mb-[4rem]">
        <div className="pb-[3rem]">
          <h3 className="lg:text-[3rem] md:text-[2.5rem] text-[2rem] font-semibold leading-[2.3rem] pb-[0.5rem] border-b-[1px] border-gray-900 inline-block">
            Why Invest in Real?
          </h3>
          {/* <p className="w-[16.8rem] h-[1px] bg-[#000]"></p> */}
        </div>

        <div className="space-y-[3rem]">
          {/* Reason - 1 */}
          <div className="flex lg:flex-row flex-col gap-[1.5rem]">
            <Image
              className="md:w-[20rem] w-full h-[15rem]"
              src={passiveIncome}
              alt="Passive Income"
            />
            <div>
              <h3 className="lg:text-[1.75rem] text-[1.3rem] font-semibold border-b-[1.5px] border-b-[#9e9d9d] inline-block">
                Earn Passive Income
              </h3>
              <p className="lg:text-[1.5rem] text-[1rem] mt-[1rem]">
                Quarterly distribution of rental income, generating additional
                income streams to supplement your financial goals and build
                long-term wealth without significant effort beyond your initial
                investment.
              </p>
            </div>
          </div>
          {/* Reason - 2 */}
          <div className="flex lg:flex-row flex-col-reverse gap-[1.5rem]">
            <div>
              <h3 className="lg:text-[1.75rem] text-[1.3rem] font-semibold border-b-[1.5px] border-b-[#9e9d9d] inline-block">
                Potential Long-Term Appreciation
              </h3>
              <p className="lg:text-[1.5rem] text-[1rem] mt-[1rem]">
                A traditional growth strategy leverages investments that may
                increase in value over the long haul. For buy-and-hold real
                estate investors, this means investing in properties with
                potential for appreciation with the intention of profiting at
                the time of sale. Watch your investment grow as the home
                appreciates, providing the potential for capital gains and the
                opportunity to leverage your investment.
              </p>
            </div>
            <Image
              className="md:w-[20rem] w-full h-[15rem]"
              src={longTermAppreciation}
              alt="Term Appreciation"
            />
          </div>
          {/* Reason - 3 */}
          <div className="flex lg:flex-row flex-col gap-[1.5rem]">
            <Image
              className="md:w-[20rem] w-full h-[15rem]"
              src={investmentPolicy}
              alt="Investment Policy"
            />
            <div>
              <h3 className="lg:text-[1.75rem] text-[1.3rem] font-semibold border-b-[1.5px] border-b-[#9e9d9d] inline-block">
                Affordable Investment Policy
              </h3>
              <p className="lg:text-[1.5rem] text-[1rem] mt-[1rem]">
                Invest anywhere from ₹100 to approximately ₹1,000,000 per house,
                making real estate investing more accessible to a wider range of
                investors.
              </p>
            </div>
          </div>
          {/* Reason - 4 */}
          <div className="flex lg:flex-row flex-col-reverse gap-[1.5rem]">
            <div>
              <h3 className="lg:text-[1.75rem] text-[1.3rem] font-semibold border-b-[1.5px] border-b-[#9e9d9d] inline-block">
                Diversify Portfolio
              </h3>
              <ul className="lg:text-[1.5rem] text-[1rem] mt-[1rem] list-disc list-inside">
                <li>
                  Some of the world’s most established institutions have
                  invested trillions of dollars in real estate. Expand your
                  portfolio and use real estate to help mitigate the effects of
                  inflation and diversify your portfolio.
                </li>
                <li>
                  Many investors believe that they are protected against public
                  market volatility since their portfolio includes a range of
                  asset classes, such as stocks and bonds. However, to achieve
                  genuine diversification, investors may consider adding primary
                  alternatives like real estate.
                </li>
                <li>
                  Access historically consistent returns with low correlation to
                  the stock market, providing potential stability and
                  diversification to your portfolio.
                </li>
              </ul>
            </div>
            <Image
              className="md:w-[20rem] w-full h-[15rem]"
              src={diversifyPortfolio}
              alt="Diversify Portfolio"
            />
          </div>
          {/* Reason - 5 */}
          <div className="flex lg:flex-row flex-col gap-[1.5rem]">
            <Image
              className="md:w-[20rem] w-full h-[15rem]"
              src={currencyValue}
              alt="Current Value"
            />
            <div>
              <h3 className="lg:text-[1.75rem] text-[1.3rem] font-semibold border-b-[1.5px] border-b-[#9e9d9d] inline-block">
                Decline of Currency Value
              </h3>
              <p className="lg:text-[1.5rem] text-[1rem] mt-[1rem]">
                Factors such as economic fundamentals, interest rates, political
                instability, currency manipulation, economic policies,
                geopolitical risks, international reactions, trade imbalances,
                cryptocurrencies, environmental factors, risk aversion, and
                inflation contribute to this phenomenon.
              </p>
            </div>
          </div>
          {/* Reason - 6 */}
          <div className="flex lg:flex-row flex-col-reverse gap-[1.5rem]">
            <div>
              <h3 className="lg:text-[1.75rem] text-[1.3rem] font-semibold border-b-[1.5px] border-b-[#9e9d9d] inline-block">
                Passive Investment Strategy
              </h3>
              <p className="lg:text-[1.5rem] text-[1rem] mt-[1rem]">
                When you invest in real estate properties, you don’t actively
                manage the property; you’re a passive investor.
              </p>
            </div>
            <Image
              className="md:w-[20rem] w-full h-[15rem]"
              src={investmentStrategy}
              alt="Investment Strategy"
            />
          </div>
        </div>
      </section>

      {/* About Section  */}
      <section className="md:mb-[7.5rem] mb-[4rem] lg:px-[4rem] px-[1rem]">
        <div className="flex lg:flex-row flex-col lg:gap-0  items-center">
          <Image
            className="xl:h-[664px] xl:w-[664px] md:h-[350px] h-[250px] w-full"
            src={aboutImg}
            width={0}
            height={0}
            alt="About Image"
          />
          <div className="bg-[#FFF] md:p-[3rem] p-[1rem] w-full lg:ml-[-115px]">
            <div>
              <h3 className="lg:text-[3rem] md:text-[2.5rem] text-[2rem] font-semibold leading-[2.3rem] pb-[0.5rem] border-b-[1px] border-gray-900 inline-block">
                About Us
              </h3>
              {/* <p className="md:w-[16.8rem] w-[10rem] h-[1px] bg-[#000]"></p> */}
            </div>
            <p className="leading-[1.5rem] md:py-[2rem] py-[1rem]">
              Welcome to <b>K33 Street</b>! Discover limitless opportunities in
              real estate investment. With our cutting-edge platform, you'll
              access a curated selection of properties, from residential gems to
              lucrative commercial ventures. Whether you're a seasoned pro or a
              newcomer, our seamless interface and expert support ensure your
              journey is both rewarding and hassle-free. Join a community of
              savvy investors and unlock the full potential of your portfolio.
              Start your next chapter in real estate success with{" "}
              <b>K33 Street</b>.
            </p>
            <button className="bg-[#24B24B] hover:bg-[#000] hover:text-[#fff] duration-300 md:px-[3rem] px-[1rem] md:py-[1rem] py-[0.5rem] font-semibold">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Testimonial Section  */}
      <section className="md:mb-[7.5rem] mb-[4rem] lg:mx-2 lg:px-0 px-[1rem]">
        <div className="md:grid grid-cols-3 w-full">
          <div
            className="flex justify-center items-center md:min-h-[428px] md:py-0 py-[1rem] bg-cover bg-center col-span-1 bg-[#000000ce]"
            // style={{ backgroundImage: `url(${quotationImg})` }}
          >
            <div className="text-center md:space-y-[1.5rem] space-y-[0.5rem] text-[#FFF] px-[3.1rem]">
              <h3 className="lg:text-[3rem] md:text-[2.5rem] text-[2rem] font-semibold">
                Testimonials
              </h3>
              <p className="md:leading-[1.8rem] leading-[1.5rem]">
                Experience success stories that showcase how fractional
                investment has transformed portfolios on our platform.
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
                <SwiperSlide>
                  <ClientReview />
                </SwiperSlide>
                <SwiperSlide>
                  <ClientReview />
                </SwiperSlide>
                <SwiperSlide>
                  <ClientReview />
                </SwiperSlide>
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

      {/* FAQ Section  */}
      <Faqs/>
    </>
  );
}
