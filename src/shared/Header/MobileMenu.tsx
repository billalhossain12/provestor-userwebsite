"use client";

import { Accordion, AccordionBody, AccordionHeader } from "@material-tailwind/react";
import Link from "next/link";
import { useState } from "react";
import { Icon as CustomIcon } from "@iconify/react";

function Icon({ id, open }) {
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

export default function MobileMenu({mobileMenu, setMobileMenu}) {
  const [currentUser, setCurrentUser] = useState({});
  const [visible, setVisible] = useState(false);
  const [dropdownStudy, setDropdownStudy] = useState(false);
  const [dropdownAbout, setDropdownAbout] = useState(false);
  const [dropdownProfile, setDropdownProfile] = useState(false);

  const handleShowHide = () => {
    setVisible(!visible);
  };

  const handleLogoutUser = () => {
    setVisible(!visible);
  };

  const handleAboutSubmenuToggle = () => {
    setDropdownAbout(!dropdownAbout);
    window.scrollTo(0, 0);
    setMobileMenu(false);
  };

  const handleProfileToggle = () => {
    setDropdownProfile(!dropdownProfile);
    window.scrollTo(0, 0);
    setMobileMenu(false);
  };

  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const handleHideAboutDropdown = () => {
    setDropdownAbout(false);
    window.scrollTo(0, 0);
  };

  const handleHideStudyDropdown = () => {
    setDropdownStudy(false);
    window.scrollTo(0, 0);
  };

  const handleHideMobileMenu = () => {
    setMobileMenu(false);
    window.scrollTo(0, 0);
  };
  return (
    <>
      {mobileMenu && (
        <div className={`relative w-[100%] min-h-[70%] pb-[3rem]`}>
          <ul className="flex items-center justify-start lg:flex-row flex-col lg:gap-[4rem] text-[#FFFFFF] text-[1.25rem] lg:py-0 py-5">
            <Link
              className="w-full hover:bg-[#24B24B] text-left border-b-[1px] border-gray-800 p-[0.8rem]"
              href="/how-it-works"
              onClick={handleHideMobileMenu}
            >
              <li>How it Works</li>
            </Link>

            <Link
              className="w-full text-left hover:bg-[#24B24B] border-b-[1px] border-gray-800 p-[0.8rem]"
              href="/invest"
              onClick={handleHideMobileMenu}
            >
              <li>Invest</li>
            </Link>
            {/* Dropdown  About*/}
            <li className="md:mt-[0.5rem] relative dropdown-container w-full">
              <>
                <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                  <Link
                    href="/about"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <AccordionHeader
                      className="text-white hover:text-white mb-[-1rem] mt-[0.8rem] hover:bg-[#24B24B] p-[0.8rem] border-b-[1px] border-gray-800 font-normal"
                      onClick={() => {
                        handleOpen(1);
                        window.scrollTo(0, 0);
                      }}
                    >
                      About
                    </AccordionHeader>
                  </Link>
                  <AccordionBody>
                    <ul className="text-white text-[1rem] pl-[1.5rem]">
                      <Link
                        href="about/about-us"
                        spy={true}
                        smooth={true}
                        offset={-700}
                        duration={500}
                        onClick={() => {
                          setMobileMenu(false);
                          setOpen(0);
                        }}
                      >
                        <li className="border-b-[1px] p-[0.8rem] border-[#3f3e3e] hover:bg-[#24B24B]">
                          About Us
                        </li>
                      </Link>
                      <Link
                        href="/about/contact"
                        spy={true}
                        smooth={true}
                        offset={-700}
                        duration={500}
                        onClick={() => {
                          setMobileMenu(false);
                          setOpen(0);
                        }}
                      >
                        <li className="border-b-[1px] p-[0.8rem] border-[#3f3e3e] hover:bg-[#24B24B]">
                          Contact Us
                        </li>
                      </Link>
                      <Link
                        href="/about/careers"
                        spy={true}
                        smooth={true}
                        offset={-700}
                        duration={500}
                        onClick={() => {
                          setMobileMenu(false);
                          setOpen(0);
                        }}
                      >
                        <li className="border-b-[1px] p-[0.8rem] border-[#3f3e3e] hover:bg-[#24B24B]">
                          Careers
                        </li>
                      </Link>
                      <Link href="/about/press">
                        <li
                          onClick={() => {
                            setMobileMenu(false);
                            setOpen(0);
                            window.scrollTo(0, 0);
                          }}
                          className="border-b-[1px] p-[0.8rem] border-[#3f3e3e] hover:bg-[#24B24B]"
                        >
                          Press
                        </li>
                      </Link>
                    </ul>
                  </AccordionBody>
                </Accordion>
              </>

              <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                <Link href="/study">
                  <AccordionHeader
                    className="text-white hover:text-white mb-[-1rem] mt-[1.5rem] hover:bg-[#24B24B] p-[0.8rem] border-b-[1px] border-gray-800 font-normal"
                    onClick={() => handleOpen(2)}
                  >
                    Study
                  </AccordionHeader>
                </Link>
                <AccordionBody>
                  <ul className="text-white text-[1rem] pl-[1.5rem]">
                    <Link
                      href="/study/study-center"
                      onClick={() => {
                        setMobileMenu(false);
                        setOpen(0);
                      }}
                    >
                      <li className="border-b-[1px] p-[0.8rem] border-[#3f3e3e] hover:bg-[#24B24B]">
                        Study Center
                      </li>
                    </Link>
                    <Link
                      href="/study/faq"
                      onClick={() => {
                        setMobileMenu(false);
                        setOpen(0);
                      }}
                    >
                      <li className="border-b-[1px] p-[0.8rem] border-[#3f3e3e] hover:bg-[#24B24B]">
                        FAQ
                      </li>
                    </Link>
                    <Link
                      href="/study/blog"
                      onClick={() => {
                        setMobileMenu(false);
                        setOpen(0);
                      }}
                    >
                      <li className="border-b-[1px] p-[0.8rem] border-[#3f3e3e] hover:bg-[#24B24B]">
                        Blog
                      </li>
                    </Link>
                    <Link href="/study/returns">
                      <li
                        onClick={() => {
                          setMobileMenu(false);
                          setOpen(0);
                          window.scrollTo(0, 0);
                        }}
                        className="border-b-[1px] p-[0.8rem] border-[#3f3e3e] hover:bg-[#24B24B]"
                      >
                        Returns
                      </li>
                    </Link>
                  </ul>
                </AccordionBody>
              </Accordion>
            </li>
          </ul>

          {/* Authentication Buttons Container */}
          {currentUser ? (
            <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
              <AccordionHeader
                className="text-white hover:text-white mb-[-1rem] mt-[1.5rem] hover:bg-[#24B24B] px-[0.8rem] py-[0.5rem] border-b-[1px] border-gray-800 font-normal"
                onClick={() => handleOpen(3)}
              >
                <img
                  className="w-[40px] h-[40px] rounded-[100%] border-2 border-[#fff]"
                  src={currentUser?.photoURL}
                />
                <p>{currentUser?.displayName}</p>
              </AccordionHeader>
              <AccordionBody>
                <ul className="text-white text-[1rem] pl-[1.5rem]">
                  <Link
                    href="/profile"
                    spy={true}
                    smooth={true}
                    offset={-720}
                    duration={500}
                    onClick={() => {
                      setMobileMenu(false);
                      setOpen(0);
                    }}
                  >
                    <li className="border-b-[1px] p-[0.8rem] border-[#3f3e3e] hover:bg-[#24B24B] flex items-center gap-[1rem]">
                      <CustomIcon className="text-[1.3rem]" icon="gg:profile" />
                      <span>My Profile</span>
                    </li>
                  </Link>
                  <li
                    onClick={handleLogoutUser}
                    className="border-b-[1px] p-[0.8rem] border-[#3f3e3e] hover:bg-[#24B24B] flex items-center gap-[1rem]"
                  >
                    <CustomIcon
                      className="text-[1.3rem]"
                      icon="mynaui:logout"
                    />
                    <span>Logout</span>
                  </li>
                </ul>
              </AccordionBody>
            </Accordion>
          ) : (
            <div className="text-white font-semibold space-y-5 text-[1.25rem]">
              <Link
                onClick={handleAboutSubmenuToggle}
                href="login"
                className="w-full hover:bg-[#24B24B] text-left border-b-[1px] border-gray-800 p-[0.8rem] block"
              >
                <button>Login/Signup</button>
              </Link>

              {/* <Link
                onClick={handleAboutSubmenuToggle}
                href="signup"
                className="w-full hover:bg-[#24B24B] text-left border-b-[1px] border-gray-800 p-[0.8rem] block"
              >
                <button>Signup</button>
              </Link> */}
            </div>
          )}
        </div>
      )}
    </>
  );
}
