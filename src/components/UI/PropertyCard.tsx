import { Progress } from "@material-tailwind/react";
import homeBannerImg from "../../assets/home-banner.png";
import Image from "next/image";

export default function PropertyCard() {
  return (
    <div className="space-y-[1.5rem] bg-[#FFF] p-[0.75rem] cursor-pointer">
      <Image
        className="md:h-[16.188rem] h-[10rem] w-full rounded-[0.125rem]"
        src={homeBannerImg}
        alt="Property"
      />
      <div className="flex justify-between items-center md:px-[1rem]">
        <div>
          <h3 className="text-[1rem] font-semibold">Property Name</h3>
          <p className="text-[10px] text-[#B1B1B1] leading-[1rem] space-x-1">
            <span>State Name</span>
            <span>City Name</span>
            <span>Pin Code</span>
          </p>
        </div>
        <div>
          <h3 className="text-[1rem] font-semibold">₹PurchasePrice</h3>
        </div>
      </div>

      <div className="flex justify-between items-center md:px-[1rem]">
        <div>
          <h3 className="text-[10px] text-[#B1B1B1] leading-[1rem]">Type</h3>
          <p className="text-[14px] font-semibold leading-[22px]">
            Property Type
          </p>
        </div>
        <div className="bg-[#B1B1B1] h-[3rem] w-[1px]"></div>
        <div>
          <h3 className="text-[10px] text-[#B1B1B1] leading-[1rem]">
            Floor Area
          </h3>
          <p className="text-[14px] font-semibold leading-[22px]">
            Property Area SQ FT
          </p>
        </div>
        <div className="bg-[#B1B1B1] h-[3rem] w-[1px]"></div>
        <div>
          <h3 className="text-[10px] text-[#B1B1B1] leading-[1rem]">
            Apartment
          </h3>
          <p className="text-[14px] font-semibold leading-[22px]">Beds BHK</p>
        </div>
      </div>

      <div className="px-[1rem]">
        <Progress
          value={70}
          size="lg"
          className="bg-[#B1B1B1] rounded-none"
          label="Funded"
        />
      </div>
    </div>
  );
}
