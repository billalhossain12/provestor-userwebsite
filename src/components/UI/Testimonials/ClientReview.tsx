import { Icon } from "@iconify/react";
import Image from "next/image";

export default function ClientReview({member}) {
  const {name, designation, description, image} = member;
  return (
    <div className="flex lg:flex-row flex-col-reverse items-center md:gap-[1.5rem] gap-[0.5rem] md:p-[2.5rem] p-[0.5rem] w-full md:mt-0 mt-[1rem] bg-[#FFF] lg:h-[280px]">
      <div className="space-y-[0.5rem]">
      <h3 className="text-[1.25rem] font-bold">{name}</h3>
      <div className="flex items-center">
      <Icon icon="radix-icons:dot-filled" />
      <h3 className="text-[1rem] font-semibold flex items-center">{designation}</h3>
      </div>
        <p className="leading-[1.4rem] text-[1rem]">{description}</p>
      </div>
      <Image
        className="min-w-[5.75rem] h-[5.75rem] rounded-[100%]"
        src={image}
        alt="client.jpg"
        width={100}
        height={100}
      />
    </div>
  );
}
