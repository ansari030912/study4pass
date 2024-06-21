/* eslint-disable @next/next/no-img-element */
import React from "react";

const AddComment = () => {
  return (
    <section className="relative ">
      <div className="hidden lg:block absolute top-0 right-0 h-full  w-6/12"></div>
      <div className="container px-4 mx-auto">
        <div className="max-w-9xl mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full bg-white lg:w-6/12 px-8 py-10 pb-10">
              <div className="pb-16 mb-8 border-b border-gray-400">
                <span className="text-lg text-blue-400 font-bold">
                  Have a question?
                </span>
                <h2 className="mt-10 mb-16 text-5xl font-bold font-heading text-gray-700">
                  Contact with us
                </h2>

                <div className="py-6 px-8 mb-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center">
                    <span className="flex items-center justify-center w-12 h-12 mr-8 bg-blue-500 rounded-lg">
                      <svg
                        className="w-5 h-4"
                        width="21"
                        height="14"
                        viewBox="0 0 21 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.8109 0H2.1878C0.981688 0 0 0.980499 0 2.18676V11.8119C0 13.0182 0.981688 14 2.1878 14H18.8122C20.0183 14 21 13.0182 21 11.8119V2.18676C20.9987 0.980499 20.017 0 18.8109 0ZM19.2492 4.73317L11.716 8.67092C11.3393 8.86387 10.9193 8.96887 10.4993 8.96887C10.0794 8.96887 9.66858 8.86387 9.28273 8.67092L1.74945 4.73317V2.75511L10.0872 7.11288C10.3405 7.24414 10.6555 7.24414 10.9101 7.11288L19.2479 2.75511V4.73317H19.2492Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                    <p className="text-lg font-bold text-gray-500">
                      sales@examprince.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative bg-gray-50 w-full lg:w-6/12 px-6 pt-20 pb-20">
              <div className="max-w-2xl lg:mx-16">
                <form action="#">
                  <h3 className="mb-10 text-2xl font-black text-blue-500">
                    Add Your Comments!
                  </h3>
                  <div className="flex justify-between">
                    <input
                      className="mb-3 w-full px-6 py-4 bg-white font-bold placeholder-gray-400 rounded-full focus:outline-none"
                      type="text"
                      placeholder="Name"
                    />
                    <input
                      className="mb-3 ml-4 w-full px-6 py-4 bg-white font-bold placeholder-gray-400 rounded-full focus:outline-none"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <textarea
                    className="w-full mb-6 px-12 py-4 bg-white font-bold placeholder-gray-400 rounded-3xl resize-none focus:outline-none"
                    name=""
                    id=""
                    cols="50"
                    rows="5"
                    placeholder="Your Comment"
                  ></textarea>

                  <button className="py-4 px-12 text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200">
                    Post Comment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddComment;
