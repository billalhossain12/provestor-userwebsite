"use client"
import { NavLink, useNavigate, Link } from "react-router-dom";
import "./Header.css";
// import k33StreetLogo from "../assets/k33-logo.png";
import k33StreetLogo from "../assets/K33-svg-logo.svg";
import { useState } from "react";
import { toast } from "react-toastify";
import { Icon as CustomIcon } from "@iconify/react";
import { useAuth } from "../store/AuthContext";
import Swal from "sweetalert2";
import Hamburger from "hamburger-react";
import { useLocation } from "react-router-dom";

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

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const { currentUser, logout, userRole } = useAuth();
  const [visible, setVisible] = useState(false);
  const [dropdownStudy, setDropdownStudy] = useState(false);
  const [dropdownAbout, setDropdownAbout] = useState(false);
  const [dropdownProfile, setDropdownProfile] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleShowHide = () => {
    setVisible(!visible);
  };

  const handleLogoutUser = () => {
    setVisible(!visible);
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You will be logged out!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Logout!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Logged out!",
            text: "You have been logged out.",
            icon: "success",
          });
          await logout();
          navigate("/login");
        }
      });
    } catch (error) {
      toast.error(error.message, { autoClose: 2000 });
    }
  };

  const handleStudySubmenuToggle = () => {
    setDropdownStudy(!dropdownStudy);
    window.scrollTo(0, 0);
    setMobileMenu(false);
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
    setMobileMenu(false)
    window.scrollTo(0, 0);
  };

  return (
    <header className="flex justify-between lg:h-[7rem] lg:py-0 py-[1rem] lg:items-center lg:flex-row flex-col bg-[#0E0E0E] lg:px-[3rem] px-[1rem] sticky top-0 z-50 lg:pb-0 ">
      {/* logo SVG  Container*/}
      <div className="lg:block lg:w-auto w-full flex items-center justify-between">
        <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>
          <img
            className="md:w-[15.5rem] w-[8rem] md:h-[3.5rem] h-[2rem]"
            src={k33StreetLogo}
          />
          <h3 className="text-white text-right md:text-2xl text-xl md:mt-[-0.8rem] mt-[-0.3rem]">
            Beta
          </h3>
        </NavLink>

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
            <NavLink to="/how-it-works">How it Works</NavLink>
        </li>
        <li>
          <NavLink to="invest">Invest</NavLink>
        </li>
        {/* Dropdown  Study*/}
        <li
          onMouseEnter={() => setDropdownStudy(true)}
          onMouseLeave={() => setDropdownStudy(false)}
          className="md:mt-[0.5rem] relative dropdown-container z-50"
        >
          <div className="flex study-links items-center cursor-pointer">
            <NavLink to="/study">
              <div className="flex items-center gap-3">
                <span>Study</span>
                {dropdownStudy ? (
                  <CustomIcon className="text-[1.8rem]" icon="uim:angle-up" />
                ) : (
                  <CustomIcon className="text-[1.8rem]" icon="uim:angle-down" />
                )}
              </div>
            </NavLink>
          </div>

          {dropdownStudy && (
            <ul
              className={`dropdown absolute top-[2rem] z-0 md:text-[1rem] text-[14px] bg-[#0E0E0E] border-l-[1px] border-l-[#353434] border-r-[1px] border-r-[#353434] border-b-[1px] border-b-[#353434] md:min-w-[10rem] w-[10rem] p-2 pt-[2.5rem] leading-[3rem]`}
            >
              <NavLink
                onClick={handleHideStudyDropdown}
                to="study/study-center"
                end
              >
                <li className="hover:bg-[#24B24B] hover:text-white px-1 cursor-pointer">
                  Study Center
                </li>
              </NavLink>

              <NavLink
                onClick={handleHideStudyDropdown}
                to="/study/faq-panel"
                end
              >
                <li className="hover:bg-[#24B24B] hover:text-white px-1 cursor-pointer">
                  FAQ
                </li>
              </NavLink>

              <NavLink onClick={handleHideStudyDropdown} to="/study/blog" end>
                <li className="hover:bg-[#24B24B] hover:text-white px-1 cursor-pointer">
                  Blog
                </li>
              </NavLink>

              <NavLink onClick={handleHideStudyDropdown} to="/study/returns">
                <li className="hover:bg-[#24B24B] hover:text-white px-1 cursor-pointer">
                  Returns
                </li>
              </NavLink>
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
            <NavLink to="about">
              <div className="flex items-center gap-3">
                <span>About</span>
                {dropdownAbout ? (
                  <CustomIcon className="text-[1.8rem]" icon="uim:angle-up" />
                ) : (
                  <CustomIcon className="text-[1.8rem]" icon="uim:angle-down" />
                )}
              </div>
            </NavLink>
          </div>
          {dropdownAbout && (
            <ul className="md:text-[1rem] text-[14px] dropdown absolute top-[2rem] bg-[#0E0E0E] border-l-[1px] border-l-[#353434] border-r-[1px] border-r-[#353434] border-b-[1px] border-b-[#353434] md:min-w-[10rem] min-w-[10.5rem] p-2 pt-[2.5rem] leading-[3rem]">
              <NavLink
                onClick={handleHideAboutDropdown}
                to="about/about-us"
                end
              >
                <li className="hover:bg-[#24B24B] hover:text-white px-1 cursor-pointer">
                  About Us
                </li>
              </NavLink>

              <NavLink
                onClick={handleHideAboutDropdown}
                to="/about/contact-us"
                end
              >
                <li className="hover:bg-[#24B24B] hover:text-white px-1 cursor-pointer">
                  Contact Us
                </li>
              </NavLink>

              {/* <li className="hover:bg-[#24B24B] hover:text-white px-1 cursor-pointer">Contact us</li> */}
              <NavLink
                onClick={handleHideAboutDropdown}
                to="/about/careers"
                end
              >
                <li className="hover:bg-[#24B24B] hover:text-white px-1 cursor-pointer">
                  Careers
                </li>
              </NavLink>

              <NavLink onClick={handleHideAboutDropdown} to="/about/press" end>
                <li className="hover:bg-[#24B24B] hover:text-white px-1 cursor-pointer">
                  Press
                </li>
              </NavLink>
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
                <img
                  className="w-[40px] h-[40px] rounded-[100%] border-2 border-[#fff]"
                  src={currentUser?.photoURL}
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
                    <NavLink onClick={handleProfileToggle} to="/profile">
                      <li className="cursor-pointer hover:bg-[#24B24B] px-3 py-3 flex items-center gap-3">
                        <CustomIcon
                          className="text-[1.3rem]"
                          icon="gg:profile"
                        />
                        <span>My Profile</span>
                      </li>
                    </NavLink>
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
          <NavLink to="login">
            <button className="xl:px-[3rem] px-[1.5rem] md:inline-block block bg-[#24B24B] hover:bg-[#000] border-[1px] border-[#24B24B] duration-300 hover:text-[#fff] hover:border-[1px] hover:border-[#fff] font-semibold text-[#FFFFFF] lg:py-[1rem] py-[0.5rem]">
              Login/Signup
            </button>
          </NavLink>
          {/* <NavLink to="signup">
            <button className="xl:px-[3rem] px-[1.5rem] md:inline-block block bg-[#24B24B] hover:bg-[#000] border-[1px] border-[#24B24B] duration-300 hover:text-[#fff] hover:border-[1px] hover:border-[#fff] font-semibold text-[#FFFFFF] lg:py-[1rem] py-[0.5rem]">
              Signup
            </button>
          </NavLink> */}
        </div>
      )}

      {/* Mobile device menu  */}
      {mobileMenu && (
        <div className={`relative w-[100%] min-h-[70%] pb-[3rem]`}>
          <ul className="flex items-center justify-start lg:flex-row flex-col lg:gap-[4rem] text-[#FFFFFF] text-[1.25rem] lg:py-0 py-5">
              <NavLink
                className="w-full hover:bg-[#24B24B] text-left border-b-[1px] border-gray-800 p-[0.8rem]"
                to="/how-it-works"
                onClick={handleHideMobileMenu}
              >
                <li>How it Works</li>
              </NavLink>

            <NavLink
              className="w-full text-left hover:bg-[#24B24B] border-b-[1px] border-gray-800 p-[0.8rem]"
              to="/invest"
              onClick={handleHideMobileMenu}
            >
              <li>Invest</li>
            </NavLink>
            {/* Dropdown  About*/}
            <li className="md:mt-[0.5rem] relative dropdown-container w-full">
              <>
                <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                  <NavLink
                    to="/about"
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
                  </NavLink>
                  <AccordionBody>
                    <ul className="text-white text-[1rem] pl-[1.5rem]">
                      <Link
                        to="about/about-us"
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
                        to="about/contact-us"
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
                        to="about/careers"
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
                      <NavLink to="about/press">
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
                      </NavLink>
                    </ul>
                  </AccordionBody>
                </Accordion>
              </>

              <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                <NavLink to="/study">
                  <AccordionHeader
                    className="text-white hover:text-white mb-[-1rem] mt-[1.5rem] hover:bg-[#24B24B] p-[0.8rem] border-b-[1px] border-gray-800 font-normal"
                    onClick={() => handleOpen(2)}
                  >
                    Study
                  </AccordionHeader>
                </NavLink>
                <AccordionBody>
                  <ul className="text-white text-[1rem] pl-[1.5rem]">
                    <Link
                      to="study/study-center"
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
                      to="study/faq-panel"
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
                      to="study/blog"
                      onClick={() => {
                        setMobileMenu(false);
                        setOpen(0);
                      }}
                    >
                      <li className="border-b-[1px] p-[0.8rem] border-[#3f3e3e] hover:bg-[#24B24B]">
                        Blog
                      </li>
                    </Link>
                    <NavLink to="study/returns">
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
                    </NavLink>
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
                  <NavLink
                    to="/profile"
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
                  </NavLink>
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
              <NavLink
                onClick={handleAboutSubmenuToggle}
                to="login"
                className="w-full hover:bg-[#24B24B] text-left border-b-[1px] border-gray-800 p-[0.8rem] block"
              >
                <button>Login/Signup</button>
              </NavLink>

              {/* <NavLink
                onClick={handleAboutSubmenuToggle}
                to="signup"
                className="w-full hover:bg-[#24B24B] text-left border-b-[1px] border-gray-800 p-[0.8rem] block"
              >
                <button>Signup</button>
              </NavLink> */}
            </div>
          )}
        </div>
      )}
    </header>
  );
}
