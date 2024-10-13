"use client";
import Image from "next/image";
import aboutImg from "../assets/about.png";
import homeBannerImg from "../assets/home-banner.png";

export default function HomePage() {
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
    </>
  );
}
