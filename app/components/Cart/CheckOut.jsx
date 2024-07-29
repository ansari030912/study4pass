"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

const CheckOut = () => {
  const [formData, setFormData] = useState({
    country: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    city: "",
    zipCode: "",
    address: "",
    voucher: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
    console.log("Form Data Submitted:", formData);
  };

  return (
    <section className="overflow-x-hidden">
      <div className="container mx-auto bg-gray-50 p-4 md:p-10">
        <div className="flex flex-wrap items-center gap-2 mb-14">
          <a href="#" className="group">
            <div className="flex flex-wrap items-center">
              <span className="text-xs text-gray-500 group-hover:text-gray-900 transition duration-200">
                Cart
              </span>
              <div className="text-gray-500 group-hover:text-gray-900 transition duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M12.9465 9.40832L8.22986 4.69999C8.15239 4.62188 8.06022 4.55989 7.95867 4.51758C7.85712 4.47527 7.7482 4.45349 7.63819 4.45349C7.52818 4.45349 7.41926 4.47527 7.31771 4.51758C7.21616 4.55989 7.124 4.62188 7.04653 4.69999C6.89132 4.85613 6.8042 5.06734 6.8042 5.28749C6.8042 5.50764 6.89132 5.71885 7.04653 5.87499L11.1715 10.0417L7.04653 14.1667C6.89132 14.3228 6.8042 14.534 6.8042 14.7542C6.8042 14.9743 6.89132 15.1855 7.04653 15.3417C7.12371 15.4204 7.21574 15.483 7.31731 15.526C7.41887 15.5689 7.52794 15.5912 7.63819 15.5917C7.74845 15.5912 7.85752 15.5689 7.95908 15.526C8.06064 15.483 8.15268 15.4204 8.22986 15.3417L12.9465 10.6333C13.0311 10.5553 13.0986 10.4606 13.1448 10.3552C13.191 10.2497 13.2148 10.1359 13.2148 10.0208C13.2148 9.90574 13.191 9.7919 13.1448 9.68648C13.0986 9.58107 13.0311 9.48636 12.9465 9.40832Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
          </a>
          <a href="#" className="group">
            <div className="flex flex-wrap items-center">
              <span className="text-xs text-gray-900 transition duration-200 font-semibold">
                Checkout
              </span>
              <div className="text-gray-500 group-hover:text-gray-900 transition duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M12.9465 9.40832L8.22986 4.69999C8.15239 4.62188 8.06022 4.55989 7.95867 4.51758C7.85712 4.47527 7.7482 4.45349 7.63819 4.45349C7.52818 4.45349 7.41926 4.47527 7.31771 4.51758C7.21616 4.55989 7.124 4.62188 7.04653 4.69999C6.89132 4.85613 6.8042 5.06734 6.8042 5.28749C6.8042 5.50764 6.89132 5.71885 7.04653 5.87499L11.1715 10.0417L7.04653 14.1667C6.89132 14.3228 6.8042 14.534 6.8042 14.7542C6.8042 14.9743 6.89132 15.1855 7.04653 15.3417C7.12371 15.4204 7.21574 15.483 7.31731 15.526C7.41887 15.5689 7.52794 15.5912 7.63819 15.5917C7.74845 15.5912 7.85752 15.5689 7.95908 15.526C8.06064 15.483 8.15268 15.4204 8.22986 15.3417L12.9465 10.6333C13.0311 10.5553 13.0986 10.4606 13.1448 10.3552C13.191 10.2497 13.2148 10.1359 13.2148 10.0208C13.2148 9.90574 13.191 9.7919 13.1448 9.68648C13.0986 9.58107 13.0311 9.48636 12.9465 9.40832Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
          </a>
          <a
            href="#"
            className="text-xs text-gray-500 hover:text-gray-900 transition duration-200"
          >
            Payment
          </a>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap -mx-8 xl:-mx-16"
        >
          <div className="w-full md:w-7/12 px-8 xl:px-16">
            <h6 className="mb-4 text-lg font-semibold">1. Select country</h6>
            <div className="relative mb-8">
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="appearance-none block py-3 px-4 w-full text-sm text-gray-500 placeholder-gray-500 outline-none border border-gray-200 focus:border-gray-300 focus:ring focus:ring-gray-100 rounded-md transition duration-200"
              >
                <option value="" disabled hidden>
                  Select country
                </option>
                <option value="poland">Poland</option>
                <option value="france">France</option>
                <option value="italy">Italy</option>
                <option value="australia">Australia</option>
              </select>
              <svg
                className="absolute top-1/2 right-5 transform -translate-y-1/2"
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.0002 1.16994C10.8128 0.983692 10.5594 0.87915 10.2952 0.87915C10.031 0.87915 9.77756 0.983692 9.59019 1.16994L6.00019 4.70994L2.46019 1.16994C2.27283 0.983692 2.01938 0.87915 1.75519 0.87915C1.49101 0.87915 1.23756 0.983692 1.05019 1.16994C0.956464 1.26291 0.88207 1.37351 0.831301 1.49537C0.780533 1.61723 0.754395 1.74793 0.754395 1.87994C0.754395 2.01195 0.780533 2.14266 0.831301 2.26452C0.88207 2.38638 0.956464 2.49698 1.05019 2.58994L5.29019 6.82994C5.38316 6.92367 5.49376 6.99806 5.61562 7.04883C5.73747 7.0996 5.86818 7.12574 6.00019 7.12574C6.1322 7.12574 6.26291 7.0996 6.38477 7.04883C6.50663 6.99806 6.61723 6.92367 6.71019 6.82994L11.0002 2.58994C11.0939 2.49698 11.1683 2.38638 11.2191 2.26452C11.2699 2.14266 11.296 2.01195 11.296 1.87994C11.296 1.74793 11.2699 1.61723 11.2191 1.49537C11.1683 1.37351 11.0939 1.26291 11.0002 1.16994Z"
                  fill="#787A88"
                ></path>
              </svg>
            </div>
            <h6 className="mb-8 text-lg font-semibold">2. Address</h6>
            <div className="flex flex-wrap -mx-4 mb-2">
              <div className="w-full md:w-1/2 px-4">
                <div className="mb-6">
                  <label
                    htmlFor="input-01-1"
                    className="mb-1.5 inline-block text-sm font-semibold"
                  >
                    First name
                  </label>
                  <input
                    id="input-01-1"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    type="text"
                    className="py-3 px-4 w-full text-sm placeholder-gray-500 outline-none border border-gray-100 focus:border-gray-300 focus:ring focus:ring-gray-100 rounded-md transition duration-200"
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="input-01-2"
                    className="mb-1.5 inline-block text-sm font-semibold"
                  >
                    Email
                  </label>
                  <input
                    id="input-01-2"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="text"
                    className="py-3 px-4 w-full text-sm placeholder-gray-500 outline-none border border-gray-100 focus:border-gray-300 focus:ring focus:ring-gray-100 rounded-md transition duration-200"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="input-01-3"
                    className="mb-1.5 inline-block text-sm font-semibold"
                  >
                    City
                  </label>
                  <input
                    id="input-01-3"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    type="text"
                    className="py-3 px-4 w-full text-sm placeholder-gray-500 outline-none border border-gray-100 focus:border-gray-300 focus:ring focus:ring-gray-100 rounded-md transition duration-200"
                    placeholder="Enter your city"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 px-4">
                <div className="mb-6">
                  <label
                    htmlFor="input-01-4"
                    className="mb-1.5 inline-block text-sm font-semibold"
                  >
                    Last name
                  </label>
                  <input
                    id="input-01-4"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    type="text"
                    className="py-3 px-4 w-full text-sm placeholder-gray-500 outline-none border border-gray-100 focus:border-gray-300 focus:ring focus:ring-gray-100 rounded-md transition duration-200"
                    placeholder="Enter your last name"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="input-01-5"
                    className="mb-1.5 inline-block text-sm font-semibold"
                  >
                    Phone number
                  </label>
                  <input
                    id="input-01-5"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    type="text"
                    className="py-3 px-4 w-full text-sm placeholder-gray-500 outline-none border border-gray-100 focus:border-gray-300 focus:ring focus:ring-gray-100 rounded-md transition duration-200"
                    placeholder="Enter your phone"
                  />
                </div>
                <div>
                  <label
                    htmlFor="input-01-6"
                    className="mb-1.5 inline-block text-sm font-semibold"
                  >
                    ZIP code
                  </label>
                  <input
                    id="input-01-6"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    type="text"
                    className="py-3 px-4 w-full text-sm placeholder-gray-500 outline-none border border-gray-100 focus:border-gray-300 focus:ring focus:ring-gray-100 rounded-md transition duration-200"
                    placeholder="Enter your ZIP code"
                  />
                </div>
              </div>
              <div className="w-full px-4">
                <div>
                  <label
                    htmlFor="input-01-7"
                    className="mb-1.5 inline-block text-sm font-semibold"
                  >
                    Address
                  </label>
                  <input
                    id="input-01-7"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    type="text"
                    className="py-3 px-4 w-full text-sm placeholder-gray-500 outline-none border border-gray-100 focus:border-gray-300 focus:ring focus:ring-gray-100 rounded-md transition duration-200"
                    placeholder="Enter your address"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-5/12 px-8 xl:px-16">
            <h6 className="mb-6 text-lg font-semibold">Billing Address</h6>
            <div className="pb-6 border-b border-dashed border-gray-200">
              <div className="flex flex-wrap -m-2">
                <div className="w-full md:w-3/4 p-2">
                  <div className="flex flex-wrap -m-2">
                    <div className="w-auto p-2">
                      <img
                        className="w-24 h-24 object-cover rounded-lg"
                        src="/product2.png"
                        alt=""
                      />
                    </div>
                    <div className="flex-1 p-2">
                      <p className="mb-1.5">Converse high</p>
                      <p className="mb-1.5">Black</p>
                      <p>x1</p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/4 p-2">
                  <p className="flex justify-end font-semibold">$ 300.00</p>
                </div>
              </div>
            </div>
            <div className="pt-6 pb-4 border-b border-dashed border-gray-200">
              <h6 className="mb-2 text-lg font-semibold">Discount Code</h6>
              <form action="#">
                <div className="flex flex-wrap items-center -mx-2 mb-0.5">
                  <div className="w-full lg:flex-1 px-2">
                    <input
                      type="text"
                      name="voucher"
                      value={formData.voucher}
                      onChange={handleChange}
                      className="py-3 px-4 w-full text-sm placeholder-gray-400 bg-white outline-none focus:ring focus:ring-gray-100 border border-gray-100 rounded-lg transition duration-200"
                      placeholder="Enter your voucher"
                    />
                  </div>
                  <div className="w-full lg:w-auto px-2">
                    <button className="py-3 px-7 w-full text-sm font-semibold bg-white hover:bg-gray-50 border border-gray-200 hover:border-transparent focus:border-transparent focus:bg-gray-50 focus:ring-4 focus:ring-gray-200 rounded-4xl transition duration-300">
                      Apply
                    </button>
                  </div>
                </div>
              </form>
              <p className="text-sm">
                New customer?{" "}
                <a
                  href="#"
                  className="inline-block text-green-800 hover:text-green-900 font-semibold"
                >
                  Sign up
                </a>{" "}
                to get better deals
              </p>
            </div>
            <div className="pt-4 pb-2 border-b border-dashed">
              <div className="flex flex-wrap justify-between -mx-2">
                <div className="w-auto px-2">
                  <span className="text-gray-500">Subtotal</span>
                </div>
                <div className="w-auto px-2">
                  <span className="font-semibold">$300.00</span>
                </div>
              </div>
              <div className="flex flex-wrap justify-between -mx-2">
                <div className="w-auto px-2">
                  <span className="text-gray-500">Discount</span>
                </div>
                <div className="w-auto px-2">
                  <span className="font-semibold text-gray-500">-$0</span>
                </div>
              </div>
              <div className="flex flex-wrap justify-between -mx-2">
                <div className="w-auto px-2">
                  <span className="text-gray-500">Shipment cost</span>
                </div>
                <div className="w-auto px-2">
                  <span className="font-semibold text-gray-500">$5</span>
                </div>
              </div>
            </div>
            <div className="pt-2.5 mb-9">
              <div className="flex flex-wrap items-center justify-between -mx-2">
                <div className="w-auto px-2">
                  <p className="font-semibold">Grand total</p>
                </div>
                <div className="w-auto px-2">
                  <p className="text-2xl font-semibold">$305.00</p>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="py-3 px-7 w-full text-sm text-white font-semibold bg-blue-500 hover:bg-green-600 rounded-4xl transition duration-300 animate-bounce"
            >
              Continue to payment
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CheckOut;
