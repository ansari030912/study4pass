/* eslint-disable @next/next/no-img-element */
import React from "react";

const LogoCard = () => {
  return (
    <section className="bg-white pb-12 -mt-10 lg:-mt-36">
      <div className="container px-4 mx-auto">
        <h2 className="mb-16 mt-12 font-heading font-medium text-center text-4xl leading-relaxed">
          <span className="text-blue-500 font-bold">1500+</span> Trusted brands
          all over the world
          <span className="text-blue-500 font-bold">!</span>
        </h2>
        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/5 px-2 mb-6 xl:mb-0">
            <div
              className="flex items-center py-4 px-5 bg-gray-50"
              style={{ borderRadius: "20px" }}
            >
              <div
                className="flex items-center justify-center bg-white w-16 h-16 shadow-sm"
                style={{ borderRadius: "10px" }}
              >
                <img className="h-9" src="/logo/apple.png" alt="" />
              </div>
              <p className="ml-6 text-xl font-heading font-medium">Apple</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/5 px-2 mb-6 xl:mb-0">
            <div
              className="flex items-center py-4 px-5 lg:mt-16 bg-gray-50"
              style={{ borderRadius: "20px" }}
            >
              <div
                className="flex items-center justify-center w-16 h-16 bg-white shadow-sm"
                style={{ borderRadius: "10px" }}
              >
                <img className="h-9" src="/logo/google.png" alt="" />
              </div>
              <p className="ml-6 text-xl font-heading font-medium">Google</p>
            </div>
          </div>
          <div className="hidden xl:block xl:w-1/5 px-2 mb-6 xl:mb-0">
            <div
              className="flex items-center py-4 px-5 lg:mt-16 bg-gray-50"
              style={{ borderRadius: "20px" }}
            >
              <div
                className="flex items-center justify-center w-16 h-16 bg-white shadow-sm"
                style={{ borderRadius: "10px" }}
              >
                <img className="h-9" src="/logo/microsoft.png" alt="" />
              </div>
              <p className="ml-6 text-xl font-heading font-medium">Microsoft</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/5 px-2 mb-6 lg:mb-0">
            <div
              className="flex items-center py-4 px-5 lg:mt-16 bg-gray-50"
              style={{ borderRadius: "20px" }}
            >
              <div
                className="flex items-center justify-center w-16 h-16 bg-white shadow-sm"
                style={{ borderRadius: "10px" }}
              >
                <img className="h-9" src="/logo/pmi.png" alt="" />
              </div>
              <p className="ml-6 text-xl font-heading font-medium">PMI</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/5 px-2 mb-6 lg:mb-0">
            <div
              className="flex items-center py-4 px-5 bg-gray-50"
              style={{ borderRadius: "20px" }}
            >
              <div
                className="flex items-center justify-center w-16 h-16 bg-white shadow-sm"
                style={{ borderRadius: "10px" }}
              >
                <img className="h-9" src="/logo/cisco.png" alt="" />
              </div>
              <p className="ml-6 text-xl font-heading font-medium">Cisco</p>
            </div>
          </div>
          <div className="xl:hidden w-full md:w-1/2 lg:w-1/4 px-2 mx-auto">
            <div
              className="flex items-center py-4 px-5 bg-gray-50"
              style={{ borderRadius: "20px" }}
            >
              <div
                className="flex items-center justify-center w-16 h-16 bg-white shadow-sm"
                style={{ borderRadius: "10px" }}
              >
                <img className="h-9" src="/logo/microsoft.png" alt="" />
              </div>
              <p className="ml-6 text-xl font-heading font-medium">Microsoft</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCard;
