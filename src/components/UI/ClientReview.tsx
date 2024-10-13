import { Icon } from "@iconify/react/dist/iconify.js";
import clientImg1 from "../../assets/client-1.png";
import Image from "next/image";

export default function ClientReview() {
  return (
    <div className="flex lg:flex-row flex-col-reverse items-center gap-[1.5rem] md:p-[2.5rem] p-[0.5rem] w-full md:mt-0 mt-[1rem] bg-[#FFF] lg:h-[280px]">
      <div className="space-y-[0.5rem]">
        <Icon
          icon="ri:double-quotes-l"
          className="text-[2rem] text-[#24B24B]"
        />
        <p className="leading-[1.4rem] text-[1rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus saepe
          aspernatur possimus ducimus fugiat ab sint dolorem ipsum fuga sed
          consequatur dolores
        </p>
        <h3 className="text-[1.25rem] font-bold">Siam Ahmed</h3>
      </div>
      <Image
        className="w-[5.75rem] h-[5.75rem] rounded-[100%]"
        src={clientImg1}
        alt="client.jpg"
      />
    </div>
  );
}
