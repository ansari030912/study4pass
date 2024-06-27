"use client";
/* eslint-disable @next/next/no-img-element */
import { Avatar, Card } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const VendorAndCerts = ({ vendorData, data, certData }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("vendors");

  const router = useRouter();

  const filteredData = vendorData?.filter((vendor) =>
    vendor?.vendor_title?.toLowerCase()?.includes(searchTerm?.toLowerCase())
  );

  const certificationFilterData = certData?.filter((cert) =>
    cert?.vendor_title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setSearchTerm("");
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCertsSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <section class="py-12 bg-gray-50">
      <div class="container px-4 mx-auto">
        <Card className="my-2 py-3 px-3 bg-gray-900 text-white">
          <h2 className="text-2xl font-bold">
            <span className="text-blue-400">Vendors & Certifications</span> -
            Provide By IT Professional
          </h2>
        </Card>
        <section class="py-4 overflow-hidden">
          <div class="container mx-auto">
            <div class=" rounded-xl">
              <div class="flex flex-wrap justify-between -m-2">
                <div class="w-full px-4 flex justify-between md:justify-start sm:w-1/2 p-2">
                  <h3
                    onClick={() => handleTabClick("vendors")}
                    class="font-heading text-base font-semibold bg-blue-100 cursor-pointer px-4 py-2 rounded-full transition transform duration-200 hover:scale-105"
                  >
                    Vendors
                  </h3>

                  <h3
                    onClick={() => handleTabClick("certs")}
                    class="font-heading text-base font-semibold bg-blue-100 cursor-pointer px-4 py-2 rounded-full transition transform duration-200 hover:scale-105 md:ml-4"
                  >
                    Certifications
                  </h3>
                </div>
                <div class="w-full sm:w-1/2 p-2">
                  <div class="relative h-full sm:max-w-md ml-auto">
                    <input
                      className="appearance-none py-2 pl-3.5 pr-10 text-sm w-full h-full bg-white hover:bg-gray-50 outline-none border border-neutral-200 focus:border-neutral-600 cursor-pointer rounded-lg"
                      id="inputsSelect4-1"
                      type="text"
                      value={searchTerm}
                      onChange={handleSearchChange}
                      placeholder="Search..."
                    />

                    <svg
                      class="absolute top-1/2 right-4 transform -translate-y-1/2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {activeTab === "vendors" && (
          <div class="flex flex-wrap -mx-3 -mb-6">
            {filteredData.slice(0, 10).map((item, index) => (
              <div
                key={item.vendor_id}
                class="w-full md:w-1/2 lg:w-1/5 px-3 mb-6"
              >
                <div class="h-full max-w-sm lg:max-w-none mx-auto py-6 px-8 bg-white rounded-2xl">
                  <div className="flex">
                    <Avatar
                      className="mb-5 bg-blue-400"
                      alt={item.vendor_title}
                      src="/static/images/avatar/1.jpg"
                    />
                    <Link href={`/exam-provider/${item.vendor_perma}`}>
                      <h4
                        class="text-xl ml-3 text-blue-500 font-medium"
                        style={{ marginTop: "6px" }}
                      >
                        {item.vendor_title}
                      </h4>
                    </Link>
                  </div>
                  <div className="flex mb-5 justify-center">
                    <img
                      className="h-36"
                      src="/allvendors.png"
                      alt="All Vendors"
                    />
                  </div>
                  <Link
                    class="group relative inline-block h-12 w-full bg-blueGray-900 rounded overflow-hidden"
                    href="#"
                  >
                    <div class="absolute inset-0">
                      <div class="flex h-full w-full items-center justify-center bg-white hover:bg-gray-600 hover:text-white border-2 border-gray-300 rounded">
                        <span class="text-base font-semibold uppercase">
                          <div className="">
                            <p class="max-w-4xl text-center">
                              Total Exams <span className="text-xl">:</span>{" "}
                              <span className="text-blue-500 text-lg">
                                {" "}
                                {item.vendor_exams}
                              </span>
                            </p>
                          </div>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
        {activeTab === "certs" && (
          <div class="flex flex-wrap -mx-3 -mb-6">
            {certificationFilterData.map((item, index) => (
              <div
                key={item.vendor_id}
                class="w-full md:w-1/2 lg:w-1/5 px-3 mb-6"
              >
                <div class="h-full max-w-sm lg:max-w-none mx-auto py-6 px-8 bg-white rounded-2xl">
                  <div className="flex">
                    <Avatar
                      className="mb-5 bg-blue-400"
                      alt={item.vendor_title}
                      src="/static/images/avatar/1.jpg"
                    />
                    <Link href={`/exam-provider/${item.vendor_perma}`}>
                      <h4
                        class="text-xl ml-3 text-blue-500 font-medium"
                        style={{ marginTop: "6px" }}
                      >
                        {item.vendor_title}
                      </h4>
                    </Link>
                  </div>
                  <div className="flex mb-5 justify-center">
                    <img
                      className="h-36"
                      src="/allvendors.png"
                      alt="All Vendors"
                    />
                  </div>
                  <Link
                    class="group relative inline-block h-12 w-full bg-blueGray-900 rounded overflow-hidden"
                    href="#"
                  >
                    <div class="absolute inset-0">
                      <div class="flex h-full w-full items-center justify-center bg-white hover:bg-gray-600 hover:text-white border-2 border-gray-300 rounded">
                        <span class="text-base font-semibold uppercase">
                          <div className="">
                            <p class="max-w-4xl text-center">
                              Total Exams <span className="text-xl">:</span>{" "}
                              <span className="text-blue-500 text-lg">
                                {" "}
                                {item.vendor_exams}
                              </span>
                            </p>
                          </div>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default VendorAndCerts;
