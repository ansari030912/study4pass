/* eslint-disable @next/next/no-img-element */
import { X_API_Key } from "@/app/URL's/Api_X_Key";
import { Base_URL } from "@/app/URL's/Base_URL";
import { Container } from "@mui/material";
import moment from "moment";
import React from "react";

const RecentlyUpdatedTable = async () => {
  const response = await fetch(`${Base_URL}/v1/recently-updated`, {
    headers: {
      "x-api-key": X_API_Key,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();
  return (
    <section className="bg-gray-50 py-4">
      <Container maxWidth={"xl"}>
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 mt-6 font-heading font-medium text-center text-4xl leading-relaxed">
            <span className="text-blue-500 font-bold">Recently Updated</span>{" "}
            Exam Questions & Answers by IT Professionals
            <span className="text-blue-500 font-bold">.</span>
          </h2>
          <div className="flex flex-wrap -m-3">
            {Array.isArray(data) &&
              data.slice(0, 12).map((item, index) => (
                <div key={index} className="w-full md:w-1/2 xl:w-1/4 p-3">
                  <div
                    style={{ minHeight: "280px" }}
                    className="bg-white border border-gray-100 shadow-dashboard rounded-xl flex flex-col"
                  >
                    {/* Top content */}
                    <div className="flex-grow flex flex-col justify-start items-center px-4 pt-8">
                      <img
                        className="mb-4"
                        src={item.exam_vendor_img}
                        alt={item.exam_vendor_title}
                      />
                      <h2 className="text-base font-medium text-gray-900">
                        {item.exam_code}
                      </h2>
                      <h3 className="mb-3 text-xs text-center font-medium text-gray-400">
                        {item.exam_title}
                      </h3>
                    </div>
                    {/* Button */}
                    <hr /> {/* Bottom content */}
                    <div className="flex-grow-0 flex flex-wrap pt-4 pb-4 -m-2">
                      <div className="w-full md:w-1/2 p-1">
                        <div className="text-center">
                          <p className="mb-1 mt-1 text-xs text-gray-900 font-semibold">
                            {moment(item.exam_update_date).format(
                              "DD MMM YYYY"
                            )}
                          </p>
                          <p className="text-xs text-gray-400 font-medium">
                            Updated Date
                          </p>
                        </div>
                      </div>
                      <div className="w-full md:w md:w-1/2 p-1 px-4">
                        <button className="flex items-center md:-ml-4  justify-center w-full px-2 py-2 font-medium text-sm text-white bg-blue-500 hover:bg-blue-600 rounded-md">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="2em"
                            viewBox="0 0 32 32"
                          >
                            <path
                              fill="white"
                              d="M4 7a1 1 0 0 0 0 2h2.22l2.624 10.5c.223.89 1.02 1.5 1.937 1.5h12.47c.903 0 1.67-.6 1.907-1.47L27.75 10h-2.094l-2.406 9H10.78L8.157 8.5A1.984 1.984 0 0 0 6.22 7zm18 14c-1.645 0-3 1.355-3 3s1.355 3 3 3s3-1.355 3-3s-1.355-3-3-3m-9 0c-1.645 0-3 1.355-3 3s1.355 3 3 3s3-1.355 3-3s-1.355-3-3-3m3-14v5h-3l4 4l4-4h-3V7zm-3 16c.564 0 1 .436 1 1c0 .564-.436 1-1 1c-.564 0-1-.436-1-1c0-.564.436-1 1-1m9 0c.564 0 1 .436 1 1c0 .564-.436 1-1 1c-.564 0-1-.436-1-1c0-.564.436-1 1-1"
                            />
                          </svg>
                          <p>Buy Now</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RecentlyUpdatedTable;
