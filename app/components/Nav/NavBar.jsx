"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="text-gray-700 font-heading font-medium relative bg-gray-50 bg-opacity-50">
      <nav className="flex justify-between px-6 lg:px-12 py-6 xl:py-3">
        <div className="flex w-full items-center">
          <Link href="/">
            <img className="h-4" src="/img/examprince_dark_svg.svg" alt="" />
          </Link>
          <ul className="hidden xl:flex px-4 ml-32">
            <li className="mr-4">
              <Link
                className="flex items-center bg-blue-50 px-4 rounded-3xl py-2 text-gray-600 hover:text-blue-500"
                href="/"
              >
                Home
              </Link>
            </li>
            <li className="mr-4 relative group">
              <Link
                className="flex items-center bg-blue-50 px-4 rounded-3xl py-2 text-gray-600 hover:text-blue-500"
                href="/exam-providers"
              >
                <span>Vendors / Certs</span>
              </Link>
            </li>
            <li className="mr-4">
              <Link
                className="flex items-center bg-blue-50 px-4 rounded-3xl py-2 text-gray-600 hover:text-blue-500"
                href="/video-courses"
              >
                Video Courses
              </Link>
            </li>
          </ul>
          <div className="hidden xl:flex items-center ml-auto">
            <a className="text-gray-500 hover:text-blue-500" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.8em"
                height="1.8em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M13.75 9a.75.75 0 0 0-1.5 0v1.25H11a.75.75 0 0 0 0 1.5h1.25V13a.75.75 0 0 0 1.5 0v-1.25H15a.75.75 0 0 0 0-1.5h-1.25z"
                />
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M1.293 2.751a.75.75 0 0 1 .956-.459l.301.106c.617.217 1.14.401 1.553.603c.44.217.818.483 1.102.899c.282.412.399.865.452 1.362l.011.108H17.12c.819 0 1.653 0 2.34.077c.35.039.697.101 1.003.209c.3.105.631.278.866.584c.382.496.449 1.074.413 1.66c-.035.558-.173 1.252-.338 2.077l-.01.053l-.002.004l-.508 2.47c-.15.726-.276 1.337-.439 1.82c-.172.51-.41.96-.837 1.308c-.427.347-.916.49-1.451.556c-.505.062-1.13.062-1.87.062H10.88c-1.345 0-2.435 0-3.293-.122c-.897-.127-1.65-.4-2.243-1.026c-.547-.576-.839-1.188-.985-2.042c-.137-.8-.15-1.848-.15-3.3V7.038c0-.74-.002-1.235-.043-1.615c-.04-.363-.109-.545-.2-.677c-.087-.129-.22-.25-.524-.398c-.323-.158-.762-.314-1.43-.549l-.26-.091a.75.75 0 0 1-.46-.957M5.708 6.87v2.89c0 1.489.018 2.398.13 3.047c.101.595.274.925.594 1.263c.273.288.65.472 1.365.573c.74.105 1.724.107 3.14.107h5.304c.799 0 1.33-.001 1.734-.05c.382-.047.56-.129.685-.231c.125-.102.24-.26.364-.625c.13-.385.238-.905.4-1.688l.498-2.42v-.002c.178-.89.295-1.482.322-1.926c.026-.421-.04-.569-.101-.65a.561.561 0 0 0-.177-.087a3.17 3.17 0 0 0-.672-.134c-.595-.066-1.349-.067-2.205-.067zM5.25 19.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 0 0-4.5 0m2.25.75a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5m6.75-.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 0 0-4.5 0m2.25.75a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <div className="w-px h-8 bg-gray-200 bg-opacity-50 ml-9 mr-11"></div>
            <a className="flex items-center mr-12" href="#">
              <span>Hussnain</span>
              <img className="ml-6" src="/avatar-online.png" alt="" />
              <img className="ml-6" src="/arrow-down-gray.svg" alt="" />
            </a>
            <button className="uppercase text-sm font-bold font-body border-2 border-gray-200 border-opacity-50 rounded-full py-3 px-5 tracking-wide hover:border-gray-300">
              <span className="block mt-px">LOGOUT</span>
            </button>
            {/* <button className="uppercase text-sm font-bold font-body border-2 border-gray-200 border-opacity-50 rounded-full py-3 px-5 tracking-wide hover:border-gray-300">
              <span className="block text-gray-600 mt-px">Login / Register</span>
            </button> */}
          </div>
        </div>
        <button
          className="navbar-burger self-center xl:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            width="25"
            height="16"
            viewBox="0 0 25 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="25" height="2" fill="currentColor"></rect>
            <rect y="14" width="25" height="2" fill="currentColor"></rect>
          </svg>
        </button>
      </nav>
      <div
        className={`navbar-menu ${
          isMenuOpen ? "" : "hidden"
        } fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50`}
      >
        <div
          className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"
          onClick={toggleMenu}
        ></div>
        <nav className="relative flex flex-col py-8 h-full w-full bg-white overflow-y-auto">
          <div className="flex items-center pl-16 mb-8">
            <a className="text-2xl text-gray-800 font-bold" href="#">
              <img className="h-12" src="/uinel-gray-black.svg" alt="" />
            </a>
          </div>
          <div className="flex items-center mb-10 px-10">
            <a className="flex items-center ml-1" href="#">
              <img
                className="ml-6"
                src="uinel-assets/elements/navigations/avatar-online.png"
                alt=""
              />
              <img
                className="ml-6"
                src="uinel-assets/elements/navigations/arrow-down-gray.svg"
                alt=""
              />
            </a>
            <a className="text-gray-500 hover:text-blue-500 ml-auto" href="#">
              <svg
                width="20"
                height="23"
                viewbox="0 0 20 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5219 18.016H2.70312V8.5933C2.70313 6.719 3.48375 4.92147 4.87328 3.59614C6.2628 2.27081 8.1474 1.52625 10.1125 1.52625C12.0776 1.52625 13.9622 2.27081 15.3517 3.59614C16.7412 4.92147 17.5219 6.719 17.5219 8.5933V18.016Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M1 18.0121H19"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M8.87891 22H10.8789"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </a>
          </div>
          <div>
            <ul>
              <li className="mb-1 px-10">
                <a
                  className="block pl-8 py-4 text-body text-lg rounded-full hover:shadow-2xl"
                  href="#"
                >
                  New tools
                </a>
              </li>
              <li className="mb-1 px-10">
                <a
                  className="flex items-center pl-8 py-4 text-body text-lg rounded-full hover:shadow-2xl"
                  href="#"
                >
                  <span>Products</span>
                  <svg
                    className="ml-4"
                    width="8"
                    height="5"
                    viewbox="0 0 8 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.97291 0.193232C7.20854 -0.0644107 7.58938 -0.0644107 7.82328 0.193232C8.05804 0.450875 8.05978 0.867141 7.82328 1.12478L4.42529 4.80677C4.19053 5.06441 3.81056 5.06441 3.57406 4.80677L0.176073 1.12478C-0.0586909 0.868102 -0.0586909 0.450875 0.176073 0.193232C0.411706 -0.0644107 0.792544 -0.0644107 1.02644 0.193232L4.00098 3.21284L6.97291 0.193232Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="mb-1 px-10">
                <a
                  className="block pl-8 py-4 text-body text-lg rounded-full hover:shadow-2xl"
                  href="#"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-auto px-10">
            <button className="py-3 px-5 mt-6 w-full font-body font-bold uppercase tracking-wide text-sm border-2 border-gray-200 hover:border-gray-300 border-opacity-50 rounded-full">
              <span className="block mt-px">New project</span>
            </button>
            <p className="mt-6 mb-4 text-center">
              <span className="text-sm text-darkBlueGray-400">
                2021 © Uinel. All rights reserved.
              </span>
            </p>
          </div>
        </nav>
        <button
          className="navbar-close absolute top-5 p-6 right-5"
          onClick={toggleMenu}
        >
          <div className="absolute top-3">
            <span className="absolute w-px h-6 bg-black transform -rotate-45"></span>
            <span className="absolute w-px h-6 bg-black transform rotate-45"></span>
          </div>
        </button>
      </div>
    </section>
  );
};

export default NavBar;
