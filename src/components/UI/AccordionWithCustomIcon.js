import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

export function AccordionWithCustomIcon({qna}) {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
      <AccordionHeader
        className={`${
          !open ? "border-b border-gray-500" : "border-b border-transparent"
        } pb-2 md:text-[1.5rem] text-[1rem] faq`}
        onClick={() => handleOpen(1)}
      >
        {qna?.question}
      </AccordionHeader>
      <AccordionBody className="border-b border-gray-500">
        <p className="md:text-[1.3rem] text-[0.9rem] md:leading-[2.3rem] leading-[1.8rem] md:font-light font-normal text-[#000] faq">{qna?.answer}</p>
      </AccordionBody>
    </Accordion>
  );
}
