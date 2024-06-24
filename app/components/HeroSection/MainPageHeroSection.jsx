/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

const MainPageHeroSection = () => {
  return (
    <section className="pb-12 lg:pb-32">
      <div
        className="mb-40 md:mb-12 py-20 bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url('/header-1-bg.jpg')`,
        }}
      >
        <div className="relative container px-4 mx-auto">
          <div className="w-full xl:w-1/2 px-4 mb-24 xl:mb-0">
            <div className="max-w-md md:max-w-2xl mx-auto">
              <div className="text-sm mb-2 font-semibold text-white uppercase">
                <span>Develop Your</span>
                <span className="text-blue-500"> Skills</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl text-white mb-6">
                Efficiently Conquer Your Next Certification Exam!
              </h1>
              <p className="text-lg leading-8 text-white mb-10">
                Easily pass your exams and certifications with courses certified
                by IT professionals. Achieve excellence with expert-approved
                training programs.
              </p>
              <div className="sm:flex items-center">
                <Link
                  className="inline-block w-full sm:w-auto py-4 px-6 mb-4 sm:mb-0 sm:mr-4 text-center font-heading font-medium text-base text-white bg-blue-500 hover:bg-blue-600 border border-blue-500 hover:border-blue-600 rounded-sm transition duration-200"
                  href="#"
                >
                  View All Vendors
                </Link>
                <Link
                  className="inline-block w-full sm:w-auto py-4 px-6 text-center font-heading font-medium text-base text-white hover:text-blue-500 border border-white hover:border-blue-500 rounded-sm transition duration-150"
                  href="#"
                >
                  Unlimited Access
                </Link>
              </div>
            </div>
          </div>
          <img
            className="xl:absolute top-0 right-0 block mx-auto lg:mr-20 -mb-52 xl:-mb-0"
            src="/header-1-woman.png"
            alt=""
            height={"450px"}
            width={"450px"}
          />
        </div>
      </div>
      <div className="relative container px-4 mx-auto">
        <a className="inline-block text-gray-900" href="#">
          <svg
            width="26"
            height="30"
            viewbox="0 0 26 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 1V29M13 29L25 17M13 29L1 17"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default MainPageHeroSection;
