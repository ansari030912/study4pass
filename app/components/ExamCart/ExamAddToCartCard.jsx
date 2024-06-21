/* eslint-disable @next/next/no-img-element */
"use client";
import { Box } from "@mui/material";
import { useState } from "react";

const ExamAddToCartCard = ({ examData }) => {
  const [selectedOption, setSelectedOption] = useState(
    examData.exam_prices[0].type
  );

  // Handle change in radio buttons
  const handleChange = (optionId) => {
    setSelectedOption(optionId);
  };

  return (
    <div className="w-full lg:w-5/12 p-4">
      <div
        style={{
          boxShadow:
            "0px 4px 4px rgba(0, 0, 0, 0.05),0px -4px 4px rgba(0, 0, 0, 0.05),4px 0px 4px rgba(0, 0, 0, 0.05),-4px 0px 4px rgba(0, 0, 0, 0.05)",
        }}
        className="rounded-2xl border border-gray-200 p-6"
      >
        <div className="pb-4 border-b border-gray-200">
          <p className="text-2xl text-center md:text-left font-semibold">
            {selectedOption && (
              <div className="md:flex justify-between">
                <div className="rounded-lg py-2 text-nowrap text-xl font-bold">
                  {
                    examData.exam_prices.find(
                      (option) => option.type === selectedOption
                    ).title
                  }
                </div>
                <div className="bg-green-100 text-lg text-green-500 rounded-lg py-2 md:text-nowrap px-3">
                  {
                    examData.exam_prices.find(
                      (option) => option.type === selectedOption
                    ).off
                  }
                  % Off
                </div>
              </div>
            )}
          </p>
        </div>
        <hr />
        <br />
        <div className="py-3">
          {examData.exam_prices.map((option) => (
            <div key={option.type}>
              <label className="flex">
                <input
                  type="radio"
                  name="pricingOption"
                  checked={selectedOption === option.type}
                  onChange={() => handleChange(option.type)}
                />
                <Box
                  className="w-full flex px-3 ml-2"
                  sx={{
                    width: "100%",
                    bgcolor:
                      selectedOption === option.type ? "#f2f7ff" : "white",
                    border:
                      selectedOption === option.type ? "1px solid #7fb2ff" : "",
                    borderRadius: "8px",
                    boxShadow:
                      selectedOption === option.type
                        ? "0px 0px 8px rgba(0, 0, 0, 0.5)"
                        : "",
                    padding: "0px",
                    margin: "0px",
                    cursor: "pointer",
                    mb: "8px",
                  }}
                >
                  <div className="mr-1">
                    <img
                      className="rounded-md h-20"
                      src="/product2.png"
                      alt={option.title}
                    />
                  </div>
                  <div className="flex items-center w-full justify-between">
                    <div className="text-lg font-semibold mr-1">
                      {option.off === "70" ? (
                        <span className="bg-purple-200 px-3 py-1 text-xs font-semibold rounded-md text-purple-500">
                          Best Selling
                        </span>
                      ) : (
                        ""
                      )}
                      {option.off === "70" && <br />}
                      {option.title}
                    </div>
                    <div>
                      <span className="text-2xl text-green-500 font-semibold">
                        ${option.price}
                      </span>
                      <br />
                      <span className="text-base text-red-500 line-through font-semibold">
                        ${option.full_price}
                      </span>
                    </div>
                  </div>
                </Box>
              </label>
            </div>
          ))}
        </div>
        <hr />
        <br />
        {/*
        <div className="flex justify-between items-center flex-wrap gap-4">
          <p className="text-gray-500 font-semibold">Full Price :</p>
          <p className="text-2xl text-red-500 font-semibold">
            $
            {
              examData.exam_prices.find(
                (option) => option.type === selectedOption
              )?.full_price
            }
          </p>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between items-center flex-wrap gap-4 mb-10">
          <p className="text-gray-500 font-semibold">Discounted Price :</p>
          <p className="text-2xl text-green-500 font-semibold">
            $
            {
              examData.exam_prices.find(
                (option) => option.type === selectedOption
              )?.price
            }
          </p>
        </div> */}
        <button className="bg-gray-900 rounded-md mb-4 hover:bg-gray-800 focus:ring-4 focus:ring-gray-200 h-12 py-3 px-4 w-full flex items-center justify-center transition duration-200 text-white text-sm font-semibold">
          Buy Now
        </button>
        <button className="bg-white border border-gray-200 rounded-md hover:bg-gray-50 focus:ring-4 focus:ring-gray-200 h-12 py-3 px-4 w-full flex items-center justify-center gap-2 transition duration-200 text-sm font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19 7H16V6C16 4.93913 15.5786 3.92172 14.8284 3.17157C14.0783 2.42143 13.0609 2 12 2C10.9391 2 9.92172 2.42143 9.17157 3.17157C8.42143 3.92172 8 4.93913 8 6V7H5C4.73478 7 4.48043 7.10536 4.29289 7.29289C4.10536 7.48043 4 7.73478 4 8V19C4 19.7956 4.31607 20.5587 4.87868 21.1213C5.44129 21.6839 6.20435 22 7 22H17C17.7956 22 18.5587 21.6839 19.1213 21.1213C19.6839 20.5587 20 19.7956 20 19V8C20 7.73478 19.8946 7.48043 19.7071 7.29289C19.5196 7.10536 19.2652 7 19 7ZM10 6C10 5.46957 10.2107 4.96086 10.5858 4.58579C10.9609 4.21071 11.4696 4 12 4C12.5304 4 13.0391 4.21071 13.4142 4.58579C13.7893 4.96086 14 5.46957 14 6V7H10V6ZM18 19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H7C6.73478 20 6.48043 19.8946 6.29289 19.7071C6.10536 19.5196 6 19.2652 6 19V9H8V10C8 10.2652 8.10536 10.5196 8.29289 10.7071C8.48043 10.8946 8.73478 11 9 11C9.26522 11 9.51957 10.8946 9.70711 10.7071C9.89464 10.5196 10 10.2652 10 10V9H14V10C14 10.2652 14.1054 10.5196 14.2929 10.7071C14.4804 10.8946 14.7348 11 15 11C15.2652 11 15.5196 10.8946 15.7071 10.7071C15.8946 10.5196 16 10.2652 16 10V9H18V19Z"
              fill="#1E2238"
            ></path>
          </svg>
          <span>Add to Bag</span>
        </button>
      </div>
    </div>
  );
};

export default ExamAddToCartCard;
