/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <section className="bg-white">
        <div className="container -mb-20 mx-auto px-2">
          <div className="py-2 border-b border-gray-200">
            <div className="flex flex-wrap items-center">
              <div className="w-full lg:w-auto flex justify-center md:justify-start px-2">
                <img
                  className="h-8"
                  src="/img/study4pass.png"
                  alt="ExamPrince"
                />
              </div>
              <div className="w-full flex justify-center md:justify-end text-center mb-6 md:-mb-20 lg:mb-0 lg:flex-1 p-4">
                <ul className="md:flex md:justify-end h-24 lg:h-auto md:gap-4 lg:gap-14">
                  <li className="w-full lg:w-auto">
                    <Link href="#">
                      <span className="text-nowrap text-lg hover:text-blue-500 font-medium transition duration-200">
                        FAQ&apos;s
                      </span>
                    </Link>
                  </li>
                  <hr className="w-full" />
                  <li className="w-full lg:w-auto">
                    <Link href="#">
                      <span className="text-nowrap text-lg hover:text-blue-500 font-medium transition duration-200">
                        Refund Policy
                      </span>
                    </Link>
                  </li>
                  <hr className="w-full" />
                  <li className="w-full lg:w-auto">
                    <Link href="#">
                      <span className="text-nowrap text-lg hover:text-blue-500 font-medium transition duration-200">
                        About
                      </span>
                    </Link>
                  </li>
                  <hr className="w-full" />
                  <li className="w-full lg:w-auto">
                    <Link href="#">
                      <span className="text-nowrap text-lg hover:text-blue-500 font-medium transition duration-200">
                        Privacy Policy
                      </span>
                    </Link>
                  </li>
                  <hr className="w-full" />
                  <li className="w-full lg:w-auto">
                    <Link href="#">
                      <span className="text-nowrap text-lg hover:text-blue-500 font-medium transition duration-200">
                        Terms & Conditions
                      </span>
                    </Link>
                  </li>
                  <hr className="w-full" />
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-start divide-x divide-gray-200 pb-20">
            <div className="w-full sm:w-8/12 p-6">
              <div className="mb-10 pt-10 font-heading text-lg lg:text-xl">
                ExamPrince does not provide real Microsoft exam questions.
                Similarly, ExamPrince does not supply real Amazon exam
                questions. The materials offered by ExamPrince lack real
                questions and answers from Cisco&apos;s certification exams. The
                CFA Institute neither endorses nor assures the accuracy or
                quality of ExamPrince content. CFA® and Chartered Financial
                Analyst® are registered trademarks held by the CFA Institute.
              </div>
              <div className="mb-6 flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 text-lg text-gray-500 hover:text-gray-600 font-medium bg-green-500 rounded-full transition duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_333_563)">
                      <path
                        d="M15.9693 3.6947L10.3573 9.3067C9.73158 9.93087 8.88383 10.2814 8 10.2814C7.11617 10.2814 6.26842 9.93087 5.64267 9.3067L0.0306667 3.6947C0.0213333 3.80004 0 3.89537 0 4.00004V12C0.00105857 12.8838 0.352588 13.731 0.97748 14.3559C1.60237 14.9808 2.4496 15.3323 3.33333 15.3334H12.6667C13.5504 15.3323 14.3976 14.9808 15.0225 14.3559C15.6474 13.731 15.9989 12.8838 16 12V4.00004C16 3.89537 15.9787 3.80004 15.9693 3.6947Z"
                        fill="white"
                      ></path>
                      <path
                        d="M9.41476 8.36396L15.5041 2.27396C15.2091 1.78484 14.7931 1.37998 14.2961 1.09845C13.7991 0.816908 13.2379 0.668186 12.6668 0.666626H3.33343C2.76224 0.668186 2.20109 0.816908 1.70411 1.09845C1.20713 1.37998 0.791079 1.78484 0.496094 2.27396L6.58543 8.36396C6.96114 8.73817 7.46982 8.94827 8.00009 8.94827C8.53037 8.94827 9.03905 8.73817 9.41476 8.36396Z"
                        fill="white"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_333_563">
                        <rect width="16" height="16" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <span className="text-xl font-medium">
                  sales@examprince.com
                </span>
              </div>
            </div>
            <div className="w-full sm:w-4/12 p-6">
              {/* <h3 className="mb-8 pt-10 font-heading text-2xl font-bold">
                Pages
              </h3> */}
              <ul>
                <li className="mb-4 pt-8 flex items-center gap-4">
                  <Link href="#" className="group flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-gray-50 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.6em"
                        height="1.6em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="m12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81zM12 3L2 12h3v8h6v-6h2v6h6v-8h3z"
                        />
                      </svg>
                    </div>
                    <span className="text-xl group-hover:text-blue-500 font-medium transition duration-200">
                      Home
                    </span>
                  </Link>
                </li>
                <li className="mb-4 flex items-center gap-4">
                  <Link href="#" className="group flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-gray-50 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M21 1v22H3V1zm-8 2v6.5l-3-2.25L7 9.5V3H5v18h14V3zM9 3v2.5l1-.75l1 .75V3zm-2 9h10v2H7zm0 4h8v2H7z"
                        />
                      </svg>
                    </div>
                    <span className="text-xl group-hover:text-blue-500 font-medium transition duration-200">
                      Vendors & Certs
                    </span>
                  </Link>
                </li>
                <li className="mb-4 flex items-center gap-4">
                  <Link href="#" className="group flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-gray-50 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.6em"
                        height="1.6em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M5 21V3h9.5L19 7.5V21zm9-13h4l-4-4zm-5.5 9.616h5.23v-2.077l1.847.973v-3.024l-1.846.974v-2.077H8.5z"
                        />
                      </svg>
                    </div>
                    <span className="text-xl group-hover:text-blue-500 font-medium transition duration-200">
                      Video Courses
                    </span>
                  </Link>
                </li>
                <li className="mb-6 flex items-center gap-4">
                  <Link href="#" className="group flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-gray-50 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.6em"
                        height="1.6em"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M256.938 21.938c-8.8 0-17.504 5.467-24.625 16.406c-7.122 10.938-11.938 26.954-11.938 44.78c0 17.828 4.816 33.813 11.938 44.75c7.12 10.94 15.825 16.407 24.625 16.407s17.503-5.467 24.625-16.405c7.12-10.938 11.937-26.923 11.937-44.75s-4.816-33.843-11.938-44.78c-7.12-10.94-15.825-16.407-24.625-16.407zm-92.907 53L24.845 263.313L164.03 451.719l93.282-126.283l.063.063l89.063-120.563l7.53-10.187l7.5 10.188l46.407 62.78l-15.03 11.126l-38.876-52.625l-85 115.03l81.624 110.47L489.78 263.31L350.595 74.938l-93.28 126.25l-.127-.156l-90.812 122.94l-7.5 10.186l-7.53-10.187l-46.407-62.783l15.03-11.125l38.876 52.625l86.75-117.375L164.03 74.938z"
                        />
                      </svg>
                    </div>
                    <span className="text-xl group-hover:text-blue-500 font-medium transition duration-200">
                      Unlimited Access
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 bg-white bg-opacity-5">
          <div className="container mx-auto px-4">
            <div className="py-5">
              <div className="flex flex-wrap justify-center">
                <div className="w-auto p-2">
                  <p className="text-gray-500 font-medium">
                    © Shuffle 2023. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
