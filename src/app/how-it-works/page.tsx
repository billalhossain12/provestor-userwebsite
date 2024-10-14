"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import howItWorksBanner from "../../assets/how-it-works.jpg";
import { useEffect } from "react";

export default function HowItWorks() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-[#F7F4F2] pb-[3.5rem]">
      <div
        style={{
          backgroundImage: `url(${howItWorksBanner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="relative w-full h-[350px]"
      >
        <h1 className="md:text-[3rem] text-[2rem] text-[#fff] font-semibold bg-[#000000d7] h-full flex items-center justify-center">
          How it Works
        </h1>
      </div>

      <div className="lg:mx-[3rem] mx-[0.5rem] lg:mt-[4rem] mt-[2rem] space-y-[2.5rem]">
        {/* HIW - Video  */}
        <div className="bg-[#fff] space-y-[1.5rem] lg:p-[2.5rem] p-[0.5rem] lg:text-[1.5rem] text-[1rem]">
          <div className="bg-[#E0E0E0] lg:h-[30rem] h-[10rem] flex justify-center items-center">
            {/* <div className="bg-[#fff] w-[3rem] h-[3rem] cursor-pointer hover:bg-[#000] hover:text-[#fff] duration-300 rounded-[100%] flex justify-center items-center text-[2rem] text-[#888888]"><Icon icon="teenyicons:play-solid" />
        </div> */}

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
          <p>
            Investing in real estate used to be complicated. Our mission is to
            empower everyone to build wealth through the democratization of
            modern real estate investing. We created an investor experience
            platform simplifying the complex decision-making traditionally
            associated with real estate and lowering the barriers to entry so
            that anyone with no experience can do it.
          </p>
          <p>
            Investing in rental properties is a complex and time-consuming
            process. Even after acquiring the necessary knowledge and skills, it
            requires significant time and resources to realize return potential.{" "}
            <span className="font-semibold">
              We set out to radically simplify this process and make it
              accessible to anyone.
            </span>
          </p>
        </div>
        {/* HIW - 2  */}
        <div className="bg-[#fff] space-y-[1.5rem] lg:p-[2.5rem] p-[0.5rem] lg:text-[1.5rem] text-[1rem]">
          <h3 className="md:text-[2.5rem] text-[2rem] font-semibold">
            The Old Way to Buy Properties
          </h3>
          <p>
            Property investors are responsible for everything from assessing the
            value of potential investments to securing financing, managing
            tenants, and maintaining the property or resale. In short, it takes
            a lot of steps.
          </p>
          <ul className="list-disc md:ml-[2rem] ml-[1rem]">
            <li className="mt-[-1.5rem]">
              <span className="font-semibold pr-[0.3rem]">Purchase:</span>
              <span>
                {" "}
                property research or finding a realtor; scheduling home tours;
                making an offer; registrations; homeowner insurance; and
                renovations.
              </span>
            </li>
            <li>
              <span className="font-semibold pr-[0.3rem]">For Rent:</span>
              <span>
                List homes for rent, show homes to renters, screen potential
                tenants, Sign a lease agreement, secure deposits, and collect
                monthly rent.
              </span>
            </li>
            <li>
              <span className="font-semibold pr-[0.3rem]">Resalse:</span>
              <span>
                list homes for resale, show homes to buyers, Screen potential
                buyers, accept offers, collect down payments, and transfer
                registration.
              </span>
            </li>
            <li>
              <span className="font-semibold pr-[0.3rem]">Loan:</span>
              <span>
                credit score and bank rate research or Find a banking expert,
                Gathering the required documents, Apply for a loan application,
                documents, property verification process, and loan approval.
              </span>
            </li>
            <li>
              <span className="font-semibold pr-[0.3rem]">Manage:</span>
              <span>
                organize yearly taxes, and manage property maintenance and
                accounting.
              </span>
            </li>
          </ul>
        </div>
        {/* HIW - 3  */}
        <div className="bg-[#fff] space-y-[1.5rem] lg:p-[2.5rem] p-[0.5rem] lg:text-[1.5rem] text-[1rem]">
          <h3 className="md:text-[2.5rem] text-[2rem] font-semibold">
            With K33Street
          </h3>
          <p>
            With <span className="font-semibold">K33 Street</span>, investors
            can browse properties (pre-vetted based on their appreciation and
            income potential), choose how much to invest, and start building a
            highly-tailored portfolio of hand-selected investment properties in
            minutes.
          </p>
          <ul className="list-decimal md:ml-[2rem] ml-[1rem]">
            <li className="mt-[-1.5rem]">Browse investments</li>
            <li>Select shares</li>
            <li>Sign and invest</li>
            <li>Earn passive income and potential appreciation</li>
          </ul>
          <h3 className="font-semibold pt-[1.5rem]">
            Investing in K33 Street investment properties can deliver returns in
            two ways:
          </h3>
          <ul className="list-decimal md:ml-[2rem] ml-[1rem]">
            <li className="mt-[-1.5rem]">
              Investors can earn passive income or dividends from rental income.
            </li>
            <li>
              If a property is sold after the investment hold period, investors
              can earn appreciation if the property value goes up.
            </li>
          </ul>
        </div>
        {/* HIW - 4  */}
        <div className="bg-[#fff] space-y-[1.5rem] lg:p-[2.5rem] p-[0.5rem] lg:text-[1.5rem] text-[1rem]">
          <h3 className="md:text-[2.5rem] text-[2rem] font-semibold">
            How do we Choose Investment Properties?
          </h3>
          {/* <p>We combined decades of experience with data science to build an operational model that allows us to maximize return potential for our investors.</p> */}
          <ul className="list-decimal md:ml-[2rem] ml-[1rem]">
            <li className="mt-[-1.5rem]">
              Identify the strongest income and potential appreciation.
            </li>
            <li>Pick the next neighborhoods and home attributes.</li>
            <li>Property financial analysis.</li>
          </ul>
        </div>
        {/* HIW - 5  */}
        <div className="bg-[#fff] space-y-[1.5rem] lg:p-[2.5rem] p-[0.5rem] lg:text-[1.5rem] text-[1rem]">
          <h3 className="md:text-[2.5rem] text-[2rem] font-semibold">
            How do we Work With Property Managers?
          </h3>
          <p>
            We handle every aspect, from acquiring property to securing
            residents to managing the day-to-day. Sometimes we do work with
            property management partners who have mission-critical
            responsibilities ranging from assisting in the property search to
            managing remodels and finding tenants. Every property management
            partner we select has passed our evaluation criteria.
          </p>
        </div>
        {/* HIW - 6  */}
        <div>
          <div className="bg-[#fff] space-y-[1.5rem] lg:p-[2.5rem] p-[0.5rem] lg:text-[1.5rem] text-[1rem]">
            <h3 className="md:text-[2.5rem] text-[2rem] font-semibold">
              Transparent Investing
            </h3>
            <p>
              We comply with MCA standards for disclosure and transparency, so
              you can understand exactly what you’re investing in.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
