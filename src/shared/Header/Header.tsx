"use client";

import "./Header.css";
import k33StreetLogo from "../../assets/K33-svg-logo.svg";
import { useState } from "react";
import { Icon as CustomIcon } from "@iconify/react";
import Hamburger from "hamburger-react";

import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [currentUser, setCurrentUser] = useState({});
  const [visible, setVisible] = useState(false);
  const [dropdownStudy, setDropdownStudy] = useState(false);
  const [dropdownAbout, setDropdownAbout] = useState(false);
  const [dropdownProfile, setDropdownProfile] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleLogoutUser = () => {
    setVisible(!visible);
  };

  const handleProfileToggle = () => {
    setDropdownProfile(!dropdownProfile);
    window.scrollTo(0, 0);
    setMobileMenu(false);
  };

  const handleHideAboutDropdown = () => {
    setDropdownAbout(false);
    window.scrollTo(0, 0);
  };

  const handleHideStudyDropdown = () => {
    setDropdownStudy(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className="flex justify-between lg:h-[7rem] lg:py-0 py-[1rem] lg:items-center lg:flex-row flex-col bg-[#0E0E0E] lg:px-[3rem] px-[1rem] sticky top-0 z-50 lg:pb-0 ">
      {/* logo SVG  Container*/}
      <div className="lg:block lg:w-auto w-full flex items-center justify-between">
        <Link href="/" onClick={() => window.scrollTo(0, 0)}>
          <h3 className="text-white text-[2rem] font-bold">Provestor</h3>
        </Link>

        {/* Mobile Device  */}
        <div className="lg:hidden block ">
          <div className="text-white text-right flex justify-end">
            <Hamburger
              toggled={mobileMenu}
              onToggle={() => setMobileMenu(!mobileMenu)}
            ></Hamburger>
          </div>
        </div>
      </div>

      {/* Navbar Links Container*/}
      <ul className="lg:flex hidden items-center lg:flex-row flex-col xl:gap-[2.5rem] lg:gap-[1.5rem] text-[#FFFFFF] text-[1.25rem] lg:py-0 py-5">
        <li>
          <Link href="/how-it-works">How it Works</Link>
        </li>
        <li>
          <Link href="invest">Invest</Link>
        </li>
        {/* Dropdown  Study*/}
        <li
          onMouseEnter={() => setDropdownStudy(true)}
          onMouseLeave={() => setDropdownStudy(false)}
          className="md:mt-[0.5rem] relative dropdown-container z-50"
        >
          <div className="flex study-links items-center cursor-pointer">
            <Link href="/study">
              <div className="flex items-center gap-3">
                <span>Study</span>
                {dropdownStudy ? (
                  <CustomIcon className="text-[1.8rem]" icon="uim:angle-up" />
                ) : (
                  <CustomIcon className="text-[1.8rem]" icon="uim:angle-down" />
                )}
              </div>
            </Link>
          </div>

          {dropdownStudy && (
            <ul
              className={`dropdown absolute top-[1.7rem] z-0 md:text-[1rem] text-[14px] bg-[#0E0E0E] border-l-[1px] border-l-[#353434] border-r-[1px] border-r-[#353434] border-b-[1px] border-b-[#353434] md:min-w-[10rem] w-[10rem] p-2 pt-[2.5rem] leading-[3rem]`}
            >
              <Link
                onClick={handleHideStudyDropdown}
                href="/study/study-center"
              >
                <li className="hover:bg-[#24B24B] hover:text-white px-1 cursor-pointer">
                  Study Center
                </li>
              </Link>

              <Link onClick={handleHideStudyDropdown} href="/study/faq">
                <li className="hover:bg-[#24B24B] hover:text-white px-1 cursor-pointer">
                  FAQ
                </li>
              </Link>

              <Link onClick={handleHideStudyDropdown} href="/study/blog">
                <li className="hover:bg-[#24B24B] hover:text-white px-1 cursor-pointer">
                  Blog
                </li>
              </Link>

              <Link onClick={handleHideStudyDropdown} href="/study/returns">
                <li className="hover:bg-[#24B24B] hover:text-white px-1 cursor-pointer">
                  Returns
                </li>
              </Link>
            </ul>
          )}
        </li>
        {/* Dropdown  => About*/}
        <li
          onMouseEnter={() => setDropdownAbout(!dropdownAbout)}
          onMouseLeave={() => setDropdownAbout(false)}
          className="md:mt-[0.5rem] relative dropdown-container"
        >
          <div
            className="flex items-center cursor-pointer"
            onClick={() => window.scrollTo(0, 0)}
          >
            <Link href="/about">
              <div className="flex items-center gap-3">
                <span>About</span>
                {dropdownAbout ? (
                  <CustomIcon className="text-[1.8rem]" icon="uim:angle-up" />
                ) : (
                  <CustomIcon className="text-[1.8rem]" icon="uim:angle-down" />
                )}
              </div>
            </Link>
          </div>
          {dropdownAbout && (
            <ul className="md:text-[1rem] text-[14px] dropdown absolute top-[1.7rem] bg-[#0E0E0E] border-l-[1px] border-l-[#353434] border-r-[1px] border-r-[#353434] border-b-[1px] border-b-[#353434] md:min-w-[10rem] min-w-[10.5rem] p-2 pt-[2.5rem] leading-[3rem]">
              <Link onClick={handleHideAboutDropdown} href="/about/about-us">
                <li className="hover:bg-[#24B24B] hover:text-white px-1 cursor-pointer">
                  About Us
                </li>
              </Link>

              <Link onClick={handleHideAboutDropdown} href="/about/contact">
                <li className="hover:bg-[#24B24B] hover:text-white px-1 cursor-pointer">
                  Contact Us
                </li>
              </Link>

              {/* <li className="hover:bg-[#24B24B] hover:text-white px-1 cursor-pointer">Contact us</li> */}
              <Link onClick={handleHideAboutDropdown} href="/about/careers">
                <li className="hover:bg-[#24B24B] hover:text-white px-1 cursor-pointer">
                  Careers
                </li>
              </Link>

              <Link onClick={handleHideAboutDropdown} href="/about/press">
                <li className="hover:bg-[#24B24B] hover:text-white px-1 cursor-pointer">
                  Press
                </li>
              </Link>
            </ul>
          )}
        </li>
      </ul>

      {/* Authentication Buttons Container */}
      {currentUser ? (
        <>
          <div className="lg:flex hidden items-center text-[#fff] gap-[0.5rem]">
            <div className="relative">
              <div
                onMouseEnter={() => setDropdownProfile(!dropdownProfile)}
                onMouseLeave={() => setDropdownProfile(false)}
                className="flex items-center gap-1 cursor-pointer"
              >
                <Image
                  className="w-[40px] h-[40px] rounded-[100%] border-2 border-[#fff]"
                  src={currentUser?.photoURL}
                  width={0}
                  height={0}
                  alt="Profile Image"
                />
                <p>{currentUser?.displayName}</p>
                {dropdownProfile ? (
                  <CustomIcon className="text-[1.8rem]" icon="uim:angle-up" />
                ) : (
                  <CustomIcon className="text-[1.8rem]" icon="uim:angle-down" />
                )}

                {/* Profile Dropdown  */}
                {dropdownProfile && (
                  <ul className="absolute bg-[#000] text-[#fff] top-[2.5rem] duration-300 pt-[2.3rem] z-0 py-[0.8rem] px-[0.3rem] w-[160px] space-y-4 rounded-sm left-[-85px]">
                    <Link onClick={handleProfileToggle} href="/profile">
                      <li className="cursor-pointer hover:bg-[#24B24B] px-3 py-3 flex items-center gap-3">
                        <CustomIcon
                          className="text-[1.3rem]"
                          icon="gg:profile"
                        />
                        <span>My Profile</span>
                      </li>
                    </Link>
                    <li
                      onClick={handleLogoutUser}
                      className="cursor-pointer hover:bg-[#24B24B] px-3 py-3 flex items-center gap-3"
                    >
                      <CustomIcon
                        className="text-[1.3rem]"
                        icon="mynaui:logout"
                      />
                      <span>Logout</span>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="xl:space-x-[2.5rem] space-x-[1rem] lg:block hidden lg:mt-0 mt-[2rem]">
          <Link href="login">
            <button className="xl:px-[3rem] px-[1.5rem] md:inline-block block bg-[#24B24B] hover:bg-[#000] border-[1px] border-[#24B24B] duration-300 hover:text-[#fff] hover:border-[1px] hover:border-[#fff] font-semibold text-[#FFFFFF] lg:py-[1rem] py-[0.5rem]">
              Login/Signup
            </button>
          </Link>
        </div>
      )}

      {/* Mobile device menu  */}
      <MobileMenu mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
    </header>
  );
}
