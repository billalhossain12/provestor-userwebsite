"use client"

import doRightThing from "../../../assets/do-right-thing.png";
import clientFirst from "../../../assets/client-first.png";
import innovation from "../../../assets/innovation.png";
import opportunities from "../../../assets/opportunities.png";
import communities from "../../../assets/communities.png";
import Image from "next/image";
import Testimonials from "@/components/UI/Testimonials/Testimonials";

export default function AboutUs() {
  return (
    <div className="bg-[#F7F4F2] pb-[3.5rem]">
      <div
        style={{
          backgroundImage: `url(./about.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
        className="relative w-full lg:h-[500px] md:h-[400px] h-[300px]"
      >
        <div className="text-[#fff] font-semibold bg-[#000000a2] h-full flex flex-col items-center justify-center">
          <h1 className="md:text-[3rem] text-[2rem] text-center">
            Our Founding Values
          </h1>
          <h3 className="md:text-[1.5rem] text-[1rem] font-semibold text-center">
            Since our inception, we consistently stayed true to our mission of
            five founding values.
          </h3>
        </div>
      </div>

      <section className="lg:mx-[3rem] md:mx-[2rem] mx-[0.3rem] md:p-[2.5rem] p-[0.3rem] mb-[1rem] lg:mt-[4rem] md:mt-[2rem] mt-[1rem]">
        {/* working methods container  */}
        <div className="md:space-y-[3rem] space-y-[1rem]">
          {/* Reason - 1 */}
          <div className="flex lg:flex-row flex-col gap-[1.5rem] bg-[#FFF] md:p-[2.5rem] p-[1rem] min-h-[20rem]">
            <Image
              className="lg:w-[26.56rem] lg:h-full md:h-[18.75rem] w-full"
              src={doRightThing}
              alt="About Photo1"
            />
            <div>
              <h3 className="lg:text-[1.75rem] text-[1.3rem] font-semibold border-b-[1.5px] border-b-[#9e9d9d] inline-block">
                Do the Right Thing
              </h3>
              <ul className="lg:text-[1.5rem] text-[1rem] mt-[1rem] list-disc md:ml-[1.5rem] ml-[0.5rem]">
                <li>
                  Value success in terms of family, integrity, character,
                  self-awareness, empathy, honesty, emotional intelligence, and
                  hard work.
                </li>
                <li>
                  How we treat ourselves and others and how we use our talents
                  to improve the lives of others matters the most.
                </li>
                <li>
                  Develop practical strategies for organizations to foster a
                  culture of integrity, including transparent communication,
                  ethical leadership, and accountability.
                </li>
              </ul>
            </div>
          </div>
          {/* Reason - 2 */}
          <div className="flex lg:flex-row  flex-col gap-[1.5rem] bg-[#FFF] md:p-[2.5rem] p-[1rem] min-h-[20rem]">
            <Image
              className="lg:w-[26.56rem]  md:h-[18.75rem] w-full lg:hidden block"
              src={doRightThing}
              alt="Client Image"
            />
            <div>
              <h3 className="lg:text-[1.75rem] text-[1.3rem] font-semibold border-b-[1.5px] border-b-[#9e9d9d] inline-block">
                Clients First
              </h3>
              <p className="lg:text-[1.5rem] text-[1rem] mt-[1rem]">
                To meet clients first, put active listening, personalized
                communication, and going the extra mile to exceed their
                expectations.
              </p>
            </div>
            <Image
              className="lg:w-[26.56rem]  md:h-[18.75rem] w-full lg:block hidden"
              src={clientFirst}
              alt="Client first"
            />
          </div>
          {/* Reason - 3 */}
          <div className="flex lg:flex-row flex-col gap-[1.5rem] bg-[#FFF] md:p-[2.5rem] p-[1rem] min-h-[20rem]">
            <Image
              className="lg:w-[26.56rem] lg:h-full md:h-[18.75rem] w-full"
              src={innovation}
              alt="Innovation"
            />
            <div>
              <h3 className="lg:text-[1.75rem] text-[1.3rem] font-semibold border-b-[1.5px] border-b-[#9e9d9d] inline-block">
                Innovation
              </h3>
              <ul className="lg:text-[1.5rem] text-[1rem] mt-[1rem] list-disc md:ml-[1.5rem] ml-[0.5rem]">
                <li>
                  Delve into groundbreaking technologies that are reshaping the
                  world we live in.
                </li>
                <li>
                  Explore solutions addressing environmental challenges and
                  promoting a more sustainable way of living.
                </li>
              </ul>
            </div>
          </div>
          {/* Reason - 4 */}
          <div className="flex lg:flex-row flex-col gap-[1.5rem] bg-[#FFF] md:p-[2.5rem] p-[1rem] min-h-[20rem]">
            <Image
              className="lg:w-[26.56rem] lg:h-full md:h-[18.75rem] w-full lg:hidden block"
              src={opportunities}
              alt="Opportunity Image"
            />
            <div>
              <h3 className="lg:text-[1.75rem] text-[1.3rem] font-semibold border-b-[1.5px] border-b-[#9e9d9d] inline-block">
                Equal Oppurtunities
              </h3>
              <p className="lg:text-[1.5rem] text-[1rem] mt-[1rem]">
                Commit to an equitable world for all, not just for ourselves but
                for future generations.
              </p>
            </div>
            <Image
              className="lg:w-[26.56rem] lg:h-full md:h-[18.75rem] w-full lg:block hidden"
              src={opportunities}
              alt="Opportunity Image"
            />
          </div>
          {/* Reason - 5 */}
          <div className="flex lg:flex-row flex-col gap-[1.5rem] bg-[#FFF] md:p-[2.5rem] p-[1rem] min-h-[20rem]">
            <Image
              className="lg:w-[26.56rem] lg:h-full md:h-[18.75rem] w-full"
              src={communities}
              alt="Community Photo"
            />
            <div>
              <h3 className="lg:text-[1.75rem] text-[1.3rem] font-semibold border-b-[1.5px] border-b-[#9e9d9d] inline-block">
                Communities
              </h3>
              <p className="lg:text-[1.5rem] text-[1rem] mt-[1rem]">
                We always believed in the act of putting time, essence, talent,
                and money into communities.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Testimonials/>
    </div>
  );
}
