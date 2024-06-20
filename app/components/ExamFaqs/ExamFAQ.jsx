"use client";
import React, { useState } from "react";

const ExamFAQ = ({ examData }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-6 mb-6 bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-5xl text-center text-blue-500 font-black tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="flex flex-wrap -m-4">
          {Array.isArray(examData.exam_faqs) &&
            examData.exam_faqs.map((faq, i) => (
              <div key={i} className="w-full md:w-1/2 p-4">
                <div className="px-6 py-3 h-full bg-blue-50 rounded-3xl">
                  <div
                    className={`flex items-center justify-between ${
                      openIndex === i ? "mb-4" : ""
                    } cursor-pointer`}
                    onClick={() => handleToggle(i)}
                  >
                    <h3 style={{fontSize:"18px"}} className="text-3xl text-gray-600 font-bold">
                      {faq?.faq_q}
                    </h3>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-chevron-down"
                      style={{
                        transform:
                          openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s",
                      }}
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                  {openIndex === i && (
                    <div>
                      <p className="text-gray-500 font-semibold">
                        {faq?.faq_a}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ExamFAQ;
