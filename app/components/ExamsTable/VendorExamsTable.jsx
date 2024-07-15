"use client";
import Link from "next/link";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

const VendorExamsTable = ({ vendorData }) => {
  const [selected, setSelected] = useState("vendor");

  const handleClick = (type) => {
    setSelected(type);
  };
  const commonStyle = {
    cursor: "pointer",
    textDecoration: "none",
    position: "relative",
    paddingBottom: "6px",
  };

  const underlineStyle = {
    content: "''",
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "5px",
    backgroundColor: "#3B82F6",
    transition: "transform 0.3s ease-in-out",
  };

  return (
    <section className="py-4 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="py-10">
          <h2 className="font-heading text-xl md:text-2xl lg:text-3xl text-center text-blue-500 font-black tracking-tight">
            {vendorData.vendor_title}{" "}
            <span
              className="text-gray-600 font-black"
              onClick={() => handleClick("vendor")}
              style={{
                ...commonStyle,
              }}
            >
              Vendors
              {selected === "vendor" && <div style={underlineStyle}></div>}
            </span>{" "}
            &{" "}
            <span
              className="text-gray-600 font-black"
              onClick={() => handleClick("cert")}
              style={{
                ...commonStyle,
              }}
            >
              Certifications
              {selected === "cert" && <div style={underlineStyle}></div>}
            </span>{" "}
            !
          </h2>
        </div>
        <div className="py-5 bg-neutral-50 border border-neutral-100 rounded-xl">
          <div className="px-6">
            <div className="mb-5 w-full overflow-x-auto">
              {selected === "vendor" && (
                <table className="w-full min-w-max">
                  <thead>
                    <tr className="text-left">
                      <th className="pb-3.5 border-b border-neutral-100">
                        <a
                          className="inline-flex items-center text-sm text-gray-500 font-medium uppercase"
                          href="#"
                        >
                          <span className="mr-1.5">Id</span>
                        </a>
                      </th>
                      <th className="pb-3.5 border-b border-neutral-100">
                        <a
                          className="inline-flex items-center text-sm text-gray-500 font-medium"
                          href="#"
                        >
                          <span className="mr-1.5">Exam Name</span>
                        </a>
                      </th>

                      <th className="pb-3.5 border-b border-neutral-100">
                        <a
                          className="inline-flex items-center text-sm text-gray-500 font-medium"
                          href="#"
                        >
                          <span className="mr-1.5">Exam Code</span>
                        </a>
                      </th>

                      <th className="pb-3.5 border-b border-neutral-100">
                        <a
                          className="inline-flex items-center text-sm text-gray-500 font-medium"
                          href="#"
                        >
                          <span className="mr-1.5">Questions</span>
                        </a>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.isArray(vendorData.vendor_exams) &&
                      vendorData.vendor_exams.map((item, i) => (
                        <tr key={i}>
                          <td className="py-2.5 pr-4">
                            #{" "}
                            <span className="font-medium text-blue-500">
                              {item.exam_id}
                            </span>
                          </td>
                          <td className="py-2.5 pr-4">
                            <div className="flex flex-wrap items-center">
                              <span className="font-semibold hover:text-blue-500">
                                <Link
                                  href={`/exam-questions/${vendorData?.vendor_perma}/${item?.exam_perma}`}
                                >
                                  {item.exam_title}
                                </Link>
                              </span>
                            </div>
                          </td>
                          <td className="py-2.5 pr-4">
                            <span className="font-medium">
                              {item.exam_code}
                            </span>
                          </td>
                          <td className="py-2.5 pr-4">
                            <span className="px-2.5 py-1 text-sm font-medium text-green-500 bg-green-500 bg-opacity-10 rounded-full">
                              # {item.exam_questions}
                            </span>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              )}
              {selected === "cert" && (
                <table className="w-full min-w-max">
                  <thead>
                    <tr className="text-left">
                      <th className="pb-3.5 border-b border-neutral-100">
                        <a
                          className="inline-flex items-center text-sm text-gray-500 font-medium uppercase"
                          href="#"
                        >
                          <span className="mr-1.5">Id</span>
                        </a>
                      </th>
                      <th className="pb-3.5 border-b border-neutral-100">
                        <a
                          className="inline-flex items-center text-sm text-gray-500 font-medium"
                          href="#"
                        >
                          <span className="mr-1.5">Certification Title</span>
                        </a>
                      </th>

                      <th className="pb-3.5 border-b border-neutral-100">
                        <a
                          className="inline-flex items-center text-sm text-gray-500 font-medium"
                          href="#"
                        >
                          <span className="mr-1.5">Certification Name</span>
                        </a>
                      </th>

                      <th className="pb-3.5 border-b border-neutral-100">
                        <a
                          className="inline-flex items-center text-sm text-gray-500 font-medium"
                          href="#"
                        >
                          <span className="mr-1.5">Status</span>
                        </a>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.isArray(vendorData.vendor_certs) &&
                      vendorData.vendor_certs.map((item, i) => (
                        <tr key={i}>
                          <td className="py-2.5 pr-4">
                            #{" "}
                            <span className="font-medium text-blue-500">
                              {item.cert_id}
                            </span>
                          </td>
                          <td className="py-2.5 pr-4">
                            <div className="flex flex-wrap items-center">
                              <span className="font-semibold hover:text-blue-500">
                                <Link
                                  href={`/vendor-exam-questions/${vendorData?.vendor_perma}/${item?.cert_perma}`}
                                >
                                  {item.cert_title}
                                </Link>
                              </span>
                            </div>
                          </td>

                          <td className="py-2.5 pr-4">
                            <span className="font-semibold hover:text-blue-500">
                              <Link
                                href={`/vendor-exam-questions/${vendorData?.vendor_perma}/${item?.cert_perma}`}
                              >
                                {item.cert_title}
                              </Link>
                            </span>
                          </td>

                          <td className="py-2.5 pr-4">
                            <span className="px-2.5 py-1 text-sm font-medium text-green-500 bg-green-500 bg-opacity-10 rounded-full">
                              Confirmed
                            </span>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              )}
            </div>
            <div className="flex flex-wrap items-center justify-between -m-2">
              <div className="w-auto p-2">
                <div className="flex flex-wrap -m-0.5">
                  <div className="w-auto p-0.5">
                    <a
                      className="flex items-center justify-center w-9 h-9 border hover:border-neutral-300 rounded-sm"
                      href="#"
                    >
                      <svg
                        width="7"
                        height="12"
                        viewBox="0 0 7 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 10.6666L1.33333 5.99998L6 1.33331"
                          stroke="#71717A"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </a>
                  </div>
                  <div className="w-auto p-0.5">
                    <a
                      className="flex items-center justify-center w-9 h-9 border hover:border-neutral-300 rounded-sm"
                      href="#"
                    >
                      <span className="text-sm text-neutral-400 font-semibold">
                        1
                      </span>
                    </a>
                  </div>

                  <div className="w-auto p-0.5">
                    <a
                      className="flex items-center justify-center w-9 h-9 border hover:border-neutral-300 rounded-sm"
                      href="#"
                    >
                      <svg
                        width="7"
                        height="12"
                        viewBox="0 0 7 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1.33335L5.66667 6.00002L1 10.6667"
                          stroke="#71717A"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-auto p-2">
                {selected === "vendor" && (
                  <p className="text-sm text-neutral-400">
                    Showing {vendorData?.vendor_exams?.length} results
                  </p>
                )}
                {selected === "cert" && (
                  <p className="text-sm text-neutral-400">
                    Showing {vendorData?.vendor_certs?.length} results
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VendorExamsTable;
