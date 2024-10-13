// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import { AccordionWithCustomIcon } from './AccordionWithCustomIcon';

const FAQs = [
  {
    question: "What are some advantages of investing in real estate?",
    answer: "Some advantages of investing in real estate include potential for long-term appreciation, rental income, tax benefits such as depreciation deductions, and diversification of investment portfolio."
  },
  {
    question: "What factors should I consider when investing in rental properties?",
    answer: "When investing in rental properties, consider factors such as location (neighborhood quality, proximity to amenities), property condition, rental demand, rental income potential, vacancy rates, property management options, and potential for future growth in property value."
  },
  {
    question: "What is a REIT?",
    answer: "A REIT, or Real Estate Investment Trust, is a company that owns, operates, or finances income-generating real estate. REITs provide a way for individuals to invest in real estate without having to buy or manage properties directly. They typically offer dividends to shareholders."
  },
  {
    question: "What is a 'cap rate'?",
    answer: "The capitalization rate, or 'cap rate', is a measure used to evaluate the potential return on investment (ROI) of a real estate property. It is calculated by dividing the property's net operating income (NOI) by its current market value or purchase price. A higher cap rate indicates a higher potential return, but it's important to consider other factors such as risk and appreciation potential."
  },
  {
    question: "What are some common risks associated with real estate investment?",
    answer: "Some common risks associated with real estate investment include fluctuations in property values, changes in market conditions (such as supply and demand dynamics), unexpected expenses (such as maintenance or repairs), tenant turnover or vacancy, regulatory changes, and interest rate fluctuations."
  },
  {
    question: "What are some common risks associated with real estate investment?",
    answer: "Some common risks associated with real estate investment include fluctuations in property values, changes in market conditions (such as supply and demand dynamics), unexpected expenses (such as maintenance or repairs), tenant turnover or vacancy, regulatory changes, and interest rate fluctuations."
  },
  {
    question: "What are some common risks associated with real estate investment?",
    answer: "Some common risks associated with real estate investment include fluctuations in property values, changes in market conditions (such as supply and demand dynamics), unexpected expenses (such as maintenance or repairs), tenant turnover or vacancy, regulatory changes, and interest rate fluctuations."
  },
  {
    question: "What are some common risks associated with real estate investment?",
    answer: "Some common risks associated with real estate investment include fluctuations in property values, changes in market conditions (such as supply and demand dynamics), unexpected expenses (such as maintenance or repairs), tenant turnover or vacancy, regulatory changes, and interest rate fluctuations."
  },
  {
    question: "What are some common risks associated with real estate investment?",
    answer: "Some common risks associated with real estate investment include fluctuations in property values, changes in market conditions (such as supply and demand dynamics), unexpected expenses (such as maintenance or repairs), tenant turnover or vacancy, regulatory changes, and interest rate fluctuations."
  },
  {
    question: "What are some common risks associated with real estate investment?",
    answer: "Some common risks associated with real estate investment include fluctuations in property values, changes in market conditions (such as supply and demand dynamics), unexpected expenses (such as maintenance or repairs), tenant turnover or vacancy, regulatory changes, and interest rate fluctuations."
  },
  {
    question: "What are some advantages of investing in real estate?",
    answer: "Some advantages of investing in real estate include potential for long-term appreciation, rental income, tax benefits such as depreciation deductions, and diversification of investment portfolio."
  },
  {
    question: "What factors should I consider when investing in rental properties?",
    answer: "When investing in rental properties, consider factors such as location (neighborhood quality, proximity to amenities), property condition, rental demand, rental income potential, vacancy rates, property management options, and potential for future growth in property value."
  },
  {
    question: "What is a REIT?",
    answer: "A REIT, or Real Estate Investment Trust, is a company that owns, operates, or finances income-generating real estate. REITs provide a way for individuals to invest in real estate without having to buy or manage properties directly. They typically offer dividends to shareholders."
  },
  {
    question: "What is a 'cap rate'?",
    answer: "The capitalization rate, or 'cap rate', is a measure used to evaluate the potential return on investment (ROI) of a real estate property. It is calculated by dividing the property's net operating income (NOI) by its current market value or purchase price. A higher cap rate indicates a higher potential return, but it's important to consider other factors such as risk and appreciation potential."
  },
  {
    question: "What are some common risks associated with real estate investment?",
    answer: "Some common risks associated with real estate investment include fluctuations in property values, changes in market conditions (such as supply and demand dynamics), unexpected expenses (such as maintenance or repairs), tenant turnover or vacancy, regulatory changes, and interest rate fluctuations."
  },
  {
    question: "What are some common risks associated with real estate investment?",
    answer: "Some common risks associated with real estate investment include fluctuations in property values, changes in market conditions (such as supply and demand dynamics), unexpected expenses (such as maintenance or repairs), tenant turnover or vacancy, regulatory changes, and interest rate fluctuations."
  },
  {
    question: "What are some common risks associated with real estate investment?",
    answer: "Some common risks associated with real estate investment include fluctuations in property values, changes in market conditions (such as supply and demand dynamics), unexpected expenses (such as maintenance or repairs), tenant turnover or vacancy, regulatory changes, and interest rate fluctuations."
  },
  {
    question: "What are some common risks associated with real estate investment?",
    answer: "Some common risks associated with real estate investment include fluctuations in property values, changes in market conditions (such as supply and demand dynamics), unexpected expenses (such as maintenance or repairs), tenant turnover or vacancy, regulatory changes, and interest rate fluctuations."
  },
  {
    question: "What are some common risks associated with real estate investment?",
    answer: "Some common risks associated with real estate investment include fluctuations in property values, changes in market conditions (such as supply and demand dynamics), unexpected expenses (such as maintenance or repairs), tenant turnover or vacancy, regulatory changes, and interest rate fluctuations."
  },
  {
    question: "What are some common risks associated with real estate investment?",
    answer: "Some common risks associated with real estate investment include fluctuations in property values, changes in market conditions (such as supply and demand dynamics), unexpected expenses (such as maintenance or repairs), tenant turnover or vacancy, regulatory changes, and interest rate fluctuations."
  },
  {
    question: "What are some common risks associated with real estate investment?",
    answer: "Some common risks associated with real estate investment include fluctuations in property values, changes in market conditions (such as supply and demand dynamics), unexpected expenses (such as maintenance or repairs), tenant turnover or vacancy, regulatory changes, and interest rate fluctuations."
  },
  {
    question: "What are some common risks associated with real estate investment?",
    answer: "Some common risks associated with real estate investment include fluctuations in property values, changes in market conditions (such as supply and demand dynamics), unexpected expenses (such as maintenance or repairs), tenant turnover or vacancy, regulatory changes, and interest rate fluctuations."
  },
];


export default function Faqs() {
  return (
    <section className="lg:mx-[3rem] mx-[0.5rem] bg-[#F7F4F2] mb-10">
      <div className='bg-[#fff] md:p-[3.5rem]  p-5'>
      <div className="pb-[1.5rem]">
        <h3 className="lg:text-[3rem] md:text-[2.5rem] text-[2rem] font-semibold leading-[2.3rem] pb-[0.5rem] border-b-[1px] border-gray-900 inline-block">
        Popular Questions
          {/* <p className="w-[100%] h-[1px] bg-[#000]"></p> */}
        </h3>
      </div>
      <div >
      <Swiper
        slidesPerView={1}
        height={100}
        navigation={{ nextEl: "#swiper-forward", prevEl: "#swiper-back" }}
        breakpoints={{
            200: {
                slidesPerView: 1,
                spaceBetween: 40,
            },

            900: {
                slidesPerView: 1,
                spaceBetween: 40
            },

            1000: {
                slidesPerView: 1,
                spaceBetween: 30
            },
        }}

        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
         {
          <>
          <SwiperSlide className='md:mb-[3rem] mb-[1.5rem] w-full'>
             <AccordionWithCustomIcon qna={FAQs[0]}/>
             <AccordionWithCustomIcon qna={FAQs[1]}/>
             <AccordionWithCustomIcon qna={FAQs[2]}/>
             <AccordionWithCustomIcon qna={FAQs[3]}/>
             <AccordionWithCustomIcon qna={FAQs[4]}/>
          </SwiperSlide>
          
          <SwiperSlide className='md:mb-[3rem] mb-[1.5rem] w-full'>
             <AccordionWithCustomIcon qna={FAQs[5]}/>
             <AccordionWithCustomIcon qna={FAQs[6]}/>
             <AccordionWithCustomIcon qna={FAQs[7]}/>
             <AccordionWithCustomIcon qna={FAQs[8]}/>
             <AccordionWithCustomIcon qna={FAQs[9]}/>
          </SwiperSlide>

          
          <SwiperSlide className='md:mb-[3rem] mb-[1.5rem] w-full'>
             <AccordionWithCustomIcon qna={FAQs[10]}/>
             <AccordionWithCustomIcon qna={FAQs[11]}/>
             <AccordionWithCustomIcon qna={FAQs[12]}/>
             <AccordionWithCustomIcon qna={FAQs[13]}/>
             <AccordionWithCustomIcon qna={FAQs[14]}/>
          </SwiperSlide>

          
          <SwiperSlide className='md:mb-[3rem] mb-[1.5rem] w-full'>
             <AccordionWithCustomIcon qna={FAQs[15]}/>
             <AccordionWithCustomIcon qna={FAQs[16]}/>
             <AccordionWithCustomIcon qna={FAQs[17]}/>
             <AccordionWithCustomIcon qna={FAQs[18]}/>
             <AccordionWithCustomIcon qna={FAQs[19]}/>
          </SwiperSlide>

          
          <SwiperSlide className='md:mb-[3rem] mb-[1.5rem] w-full'>
             <AccordionWithCustomIcon qna={FAQs[20]}/>
             <AccordionWithCustomIcon qna={FAQs[21]}/>
          </SwiperSlide>
          </>
        }
      </Swiper>
      </div>
      </div>
    </section>
  );
}
